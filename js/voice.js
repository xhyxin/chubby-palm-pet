/* ------------------------------------------------------------------
 * voice.js —— 语音播放 + 官方台词
 *
 * 数据来源（均由 03_工具/生成语音数据.py 从官方数据生成）：
 *   assets/voice-map.json   键名 -> 音频文件名
 *   assets/voice-text.json  键名 -> 官方中文/日文台词 + 官方中文名
 *
 * 关键点：play() 会把"实际播放的那个键"一起返回，
 * 字幕直接取该键的台词，保证语音和文字永远对得上。
 * ------------------------------------------------------------------ */
const Voice = (() => {
  let map = { ja: {}, ko: {} };
  let texts = { zh: {}, ja: {} };
  let catalog = [];
  let availLangs = {};        // 角色 -> 该角色真的有音频的语言列表（load 时算）
  let lang = 'ja';
  let enabled = true;
  let current = null;
  const cache = new Map();
  const MAX_CACHE = 500;           // LRU 上限：防止切角色累积过多缓存音频（最大角色 227 条，留足余量）
  const namesCache = new Map();    // Object.keys(map[L]) 缓存，避免反复分配大数组
  /* 官方互动音效（SFX_Pat / SFX_Tickle / SFX_Common_PullCheek / SFX_DutchRub_*）
     独立通道，不和语音抢播放 */
  const sfxCache = new Map();
  let sfxEnabled = true;
  let lastSfx = 0;

  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  /* ★ 第四十六轮：音量分通道（sound.js）。
     语音走 voice 通道、互动音效走 sfx 通道，两者都还要乘总音量 master。
     每次播放时读一次 —— 用户拖完滑杆，下一句就是新音量。
     sound.js 没加载时（老自测台）回退 1，行为与以前完全一致。 */
  const voiceVol = () => (window.Sound ? Sound.volumeOf('voice') : 1);
  const sfxVol = () => (window.Sound ? Sound.volumeOf('sfx') : 1);

  /** 该角色在某个语言下有没有音频（键名里带角色 ID 就算） */
  function hasVoice(charId, L) {
    const dict = map[L] || {};
    return Object.keys(dict).some((k) => k.indexOf(charId) >= 0);
  }

  /** 挑一个"该角色真的有音频"的语言：优先 prefer，其次该角色可用的第一个 */
  function pickLangFor(charId, prefer) {
    const all = Object.keys(map);
    const ok = all.filter((L) => !charId || hasVoice(charId, L));
    if (prefer && ok.includes(prefer)) return prefer;
    if (prefer && !charId && all.includes(prefer)) return prefer;
    return ok[0] || prefer || all[0] || lang;
  }

  function urlFor(key, L) {
    const m = map[L || lang] || {};
    return m[key] ? `assets/voice/${L || lang}/${m[key]}` : null;
  }

  /** 从候选键里挑第一个真实存在的（支持 Butter_Eat -> Butter_Eat1 尾号补全，
      也支持皮肤专属语音 Butter_Touch2 -> Butter_Touch2_Skin1） */
  function tryKeys(m, names, k) {
    if (m[k]) return k;
    // 用字符串操作代替 new RegExp，避免每次调用都创建正则对象
    const withNum = names.find((n) => n.startsWith(k) && n.length > k.length && /^\d+$/.test(n.slice(k.length)));
    if (withNum) return withNum;
    return names.find((n) => n.startsWith(k)) || null;
  }

  /** 获取（或缓存） Object.keys(map[L])，避免对万级键表反复创建数组 */
  function namesFor(L) {
    if (namesCache.has(L)) return namesCache.get(L);
    const m = map[L] || {};
    const keys = Object.keys(m);
    namesCache.set(L, keys);
    return keys;
  }

  function resolveIn(L, keys, suffix) {
    const list = Array.isArray(keys) ? keys : [keys];
    const m = map[L] || {};
    const names = namesFor(L);
    for (const k of list) {
      if (suffix) {
        const s = tryKeys(m, names, k + suffix);
        if (s) return s;
      }
      const r = tryKeys(m, names, k);
      if (r) return r;
    }
    return null;
  }

  function resolve(keys, suffix) { return resolveIn(lang, keys, suffix); }

  /** ★ 第六十七轮（语言优先，用户明确要求）：
      —— 选了韩语就必须播韩语，别因为"这套皮肤只有日语"就偷偷换语言。

      规则（`skinFirst === false`，默认）：
        ① 偏好语言里的「键+皮肤后缀」；
        ② 偏好语言里的**基础键**（这套皮肤官方没录这条时的兜底）；
        ③ 全都找不到才去其它语言（保持第五十四轮"角色完全没有该语言时回退"的口径）。
      规则（`skinFirst === true`，可选开关）：
        先在所有语言里找「键+后缀」（第六十六轮的行为，为了听新皮肤专属语音），
        找不到再走上面的 ①③。默认**关**，因为用户反馈"选韩语动作还是日语"。

      `skinFirst` 存在 localStorage.pet-voice-skinfirst，界面上在语音图鉴底部可切换。 */
  let skinFirst = false;
  try { skinFirst = localStorage.getItem('pet-voice-skinfirst') === '1'; } catch (e) { /* 忽略 */ }

  function langOrder() {
    return [lang].concat(Object.keys(map).filter((L) => L !== lang));
  }

  /** 皮肤专属语音优先（跨语言补齐）—— 仅当用户打开开关时 */
  function resolveSkinFirst(keys, suffix) {
    if (!suffix) return null;
    const list = Array.isArray(keys) ? keys : [keys];
    const langs = skinFirst ? langOrder() : [lang];
    for (const L of langs) {
      const m = map[L] || {};
      const names = namesFor(L);
      for (const k of list) {
        const s = tryKeys(m, names, k + suffix);
        if (s) return { key: s, L };
      }
    }
    return null;
  }

  function resolveAny(keys, suffix) {
    // ★ 打开"皮肤优先"时，先在所有语言里找这套皮肤的专属语音（第六十六轮行为）
    if (suffix && skinFirst) {
      const sk = resolveSkinFirst(keys, suffix);
      if (sk) return sk;
    }
    // 偏好语言：先皮肤版、再基础版（严格按语言，选韩语就韩语）
    const inLang = resolveIn(lang, keys, suffix);
    if (inLang) return { key: inLang, L: lang };
    // 角色在本语言里一条都没有时才去其它语言
    for (const L of langOrder()) {
      if (L === lang) continue;
      const k = resolveIn(L, keys, suffix);
      if (k) return { key: k, L };
    }
    return null;
  }

  /** 随机池也按语言优先：先把偏好语言下所有可用变体凑齐，非空就只在该池里随机；
      偏好语言一个变体都没有时，才整池落到下一门语言 ——
      保证"选了日语听日语"，不会一半日语一半韩语地混。
      ★ 第六十七轮：皮肤版只在本语言里找；找不到就用本语言的基础版（不跨语言偷换）。
      只有打开了"皮肤优先"开关，才会去其它语言凑皮肤版随机池。 */
  function pickRandomAny(keys, suffix) {
    const list = Array.isArray(keys) ? keys : [keys];
    const poolIn = (L, allowSuffix) => {
      const m = map[L] || {};
      const names = namesFor(L);
      const out = [];
      for (const k of list) {
        const s = allowSuffix && suffix ? tryKeys(m, names, k + suffix) : null;
        const r = s || tryKeys(m, names, k);
        if (r && !out.includes(r)) out.push(r);
      }
      return out;
    };
    if (suffix && skinFirst) {
      for (const L of langOrder()) {
        const m = map[L] || {};
        const names = namesFor(L);
        const skinPool = [];
        for (const k of list) {
          const s = tryKeys(m, names, k + suffix);
          if (s && !skinPool.includes(s)) skinPool.push(s);
        }
        if (skinPool.length) return { pool: skinPool, L };
      }
    }
    const own = poolIn(lang, true);
    if (own.length) return { pool: own, L: lang };
    for (const L of langOrder()) {
      if (L === lang) continue;
      const out = poolIn(L, true);
      if (out.length) return { pool: out, L };
    }
    return { pool: [], L: lang };
  }

  function pickRandom(keys, suffix) { return pickRandomAny(keys, suffix).pool; }

  function audioFor(key, L) {
    const id = (L || lang) + '\u0000' + key;
    if (cache.has(id)) {
      // LRU：访问过的条目移到末尾
      const v = cache.get(id);
      cache.delete(id);
      cache.set(id, v);
      return v;
    }
    const url = urlFor(key, L);
    if (!url) return null;
    const a = new Audio(url);
    a.preload = 'auto';
    cache.set(id, a);
    // LRU 淘汰：超出上限时删除最早的条目
    if (cache.size > MAX_CACHE) {
      const oldest = cache.keys().next().value;
      const old = cache.get(oldest);
      if (old) { old.pause(); old.src = ''; }
      cache.delete(oldest);
    }
    return a;
  }

  /* ★ 第七十八轮：清空音频缓存时把 Audio 元素也释放掉（pause + src=''）——
     只丢 Map 引用的话，还在下载/解码的音频要等 GC 才停，切角色那一下
     弱网机仍被旧角色的下载占着带宽。 */
  function releaseAudioCache() {
    cache.forEach((a) => { try { a.pause(); a.src = ''; } catch (e) { /* 忽略 */ } });
    cache.clear();
  }

  /* ★ 第七十八轮：台词表大小写别名（ChopI_* → Chopi_* 这类官方键名大小写不一致）。
     懒构建：第一次 miss 才扫一遍表（~2.5 万键，几毫秒），之后查 Map。
     每张表独立缓存；texts 被 load() 整体换掉时置 null 失效。 */
  const ciAliasCache = new Map();   // textsMap → (小写键 → 首个精确键)
  function ciAlias(t, key) {
    if (!key) return null;
    let m = ciAliasCache.get(t);
    if (m === undefined) {
      m = new Map();
      for (const k of Object.keys(t)) {
        const n = k.toLowerCase();
        if (!m.has(n)) m.set(n, k);   // 保留首个（官方主键通常在前）
      }
      ciAliasCache.set(t, m);
    }
    return m.get(key.toLowerCase()) || null;
  }

  return {
    async load() {
      try {
        const r1 = await fetch('assets/voice-map.json');
        if (r1.ok) map = await r1.json();
      } catch (e) { console.warn('语音清单加载失败', e); }
      try {
        const r2 = await fetch('assets/voice-text.json');
        if (r2.ok) {
          const d = await r2.json();
          texts = d.text || { zh: {}, ja: {} };
          catalog = d.catalog || [];
        }
      } catch (e) { console.warn('台词表加载失败', e); }
      /* ★ 多角色：voice-map.json / voice-text.json 是**所有角色合并**的一份，
         这里按各角色声明的语言做一次可用性校验即可（真正播哪条由 setLang 决定）。
         ★ 上百个角色之后键表有 3 万多条，不能再用「每个角色扫一遍全表」的写法
         （137 × 3 万 = 400 万次比较，启动会明显卡）；
         改成「扫一遍键表，按键名前缀 <ID>_ 反查角色」，O(键数)。 */
      availLangs = {};
      const chars = (typeof CONFIG !== 'undefined' && CONFIG.characters) || [];
      const idOf = new Map(chars.map((c) => [c.id, c.id]));
      for (const c of chars) availLangs[c.id] = new Set();
      for (const L of Object.keys(map)) {
        const dict = map[L] || {};
        for (const k of Object.keys(dict)) {
          /* 角色 ID 本身可能带下划线（Chloe_SebaOff / Joanne_White），
             所以"取到下划线为止"要一直往后试，直到命中一个已知角色 ID。 */
          let u = k.indexOf('_'), cid = null;
          while (u > 0) {
            cid = idOf.get(k.slice(0, u)) || null;
            if (cid) break;
            u = k.indexOf('_', u + 1);
          }
          if (cid) availLangs[cid].add(L);
        }
      }
      for (const c of chars) availLangs[c.id] = [...availLangs[c.id]].sort();
      /* 语言按用户偏好初始化（localStorage.pet-voice-lang，setLang 写入）；
          没有偏好时默认韩语（第三十三轮用户要求）。不再按角色改偏好 ——
          角色缺该语言时由播放层回退（resolveAny）。 */
      let savedLang = null;
      try { savedLang = localStorage.getItem('pet-voice-lang'); } catch (e) { /* 忽略 */ }
      lang = (savedLang && map[savedLang]) ? savedLang
           : (Object.keys(map).includes('ko') ? 'ko' : (Object.keys(map)[0] || 'ja'));
      releaseAudioCache();
      namesCache.clear();
      ciAliasCache.clear();     // texts 可能被换成新拉到的表，别名重建
      return { langs: Object.keys(map), availLangs, lang, catalog: catalog.length };
    },

    /** ★ 切角色时调用（第五十四轮简化）：
        语言 = 用户偏好（localStorage），不再随角色变化 ——
        "选了日语就一直日语，除非用户自己改回来"。
        角色缺该语言的条目由播放层（resolveAny / playKey）回退到其它语言。
        charId / preferLang 参数保留只为调用兼容，已不参与决策。 */
    useCharacter(charId, preferLang) {
      let saved = null;
      try { saved = localStorage.getItem('pet-voice-lang'); } catch (e) { /* 忽略 */ }
      if (saved && map[saved]) {
        lang = saved;
      } else {
        lang = Object.keys(map).includes('ko') ? 'ko' : (Object.keys(map)[0] || 'ja');
      }
      releaseAudioCache();     // ★ 第七十八轮：切角色释放旧角色的音频（下载/解码一并停掉）
      namesCache.clear();
      return lang;
    },
    /** 某个角色真的有音频的语言列表（给语言按钮用） */
    langsFor(charId) { return availLangs[charId] || []; },

    setLang(l) {
      lang = l;
      releaseAudioCache();
      namesCache.clear();
      /* ★ 记住用户最后选择的语音语言（日/韩），下次启动 / 切角色都优先用这个，
         而不是每次都退回角色自己的默认语言。 */
      try { localStorage.setItem('pet-voice-lang', l); } catch (e) { /* 忽略 */ }
    },
    getLang() { return lang; },

    /** ★ 第六十七轮：皮肤专属语音是否跨语言补齐（默认关 = 严格按语言偏好） */
    setSkinFirst(v) {
      skinFirst = !!v;
      releaseAudioCache();
      namesCache.clear();
      try { localStorage.setItem('pet-voice-skinfirst', skinFirst ? '1' : '0'); } catch (e) { /* 忽略 */ }
    },
    isSkinFirst() { return skinFirst; },
    count(charId) {
      const dict = map[lang] || {};
      if (!charId) return Object.keys(dict).length;
      return Object.keys(dict).filter((k) => k.indexOf(charId) >= 0).length;
    },
    setEnabled(v) { enabled = v; },
    isEnabled() { return enabled; },

    /** 取某个键的官方中文台词。
        ★ 第七十八轮：加大小写不敏感兜底 —— 官方韩语索引有一批键的大小写与
          文本表不一致（Chopi 的录音键是 ChopI_*，台词表却是 Chopi_*），
          之前这类键"有声音、头上没台词"。别名表懒构建（只在第一次 miss 时
          扫一遍台词表并缓存），load() 换表后失效重建。 */
    textOf(key) {
      const t = texts.zh || {};
      if (key in t) return t[key];
      const hit = ciAlias(t, key);
      return hit ? t[hit] : '';
    },
    textJaOf(key) {
      const t = texts.ja || {};
      if (key in t) return t[key];
      const hit = ciAlias(t, key);
      return hit ? t[hit] : '';
    },
    /** 语音图鉴数据 */
    /** 语音图鉴数据。
     *  ★ 多角色：传 charId → 只返回该角色的条目。
     *  ★ 第五十四轮（用户要求）：**不再按语言过滤** —— 罗尼这类只有韩语的角色，
     *    用户选了日语也要把全部条目列出来；点某条时该条没有日语就直接播韩语
     *    （playKey 的播放级回退）。以前按 langs 过滤会出现"图鉴缺一半"的困惑。 */
    catalog(charId) {
      return catalog.filter((c) => {
        if (charId && !(c.char === charId || (!c.char && c.key.indexOf(charId) >= 0))) return false;
        return true;
      });
    },
    /** 该键是否有音频 */
    has(key) { return !!urlFor(key); },

    /**
     * 播放一组候选语音（★ 第五十四轮：带播放级语言回退）。
     * @returns {{key:string, text:string, file:string, lang:string}|null} 实际播放的那条（lang = 实际用的语言）
     */
    play(keys, suffix) {
      if (!enabled || !keys) return null;
      if (Array.isArray(keys) && !keys.length) return null;
      const { pool, L } = pickRandomAny(keys, suffix);
      if (!pool.length) return null;
      const key = pool[Math.floor(Math.random() * pool.length)];
      const a = audioFor(key, L);
      if (!a) return null;
      try {
        if (current && current !== a) { current.pause(); current.currentTime = 0; }
        a.currentTime = 0;
        a.volume = voiceVol();
        current = a;
        a.play().catch(() => {});
      } catch (e) { /* 忽略 */ }
      return { key, text: this.textOf(key), textJa: this.textJaOf(key), file: map[L][key], lang: L };
    },

    /** 按精确键名播放（语音图鉴用）。
     *  ★ 第五十四轮：该键在偏好语言没有音频时，直接回退其它语言播放
     *  （用户选日语 + 罗尼只有韩语 → 点图鉴播韩语），偏好本身不动。 */
    playKey(key) {
      let L = lang;
      if (!enabled || !map[lang] || !map[lang][key]) {
        const alt = langOrder().find((x) => map[x] && map[x][key]);
        if (!alt) return null;
        L = alt;
      }
      const a = audioFor(key, L);
      if (!a) return null;
      try {
        if (current && current !== a) { current.pause(); current.currentTime = 0; }
        a.currentTime = 0;
        a.volume = voiceVol();          // ★ 第四十六轮：语音通道音量（含总音量）
        current = a;
        a.play().catch(() => {});
      } catch (e) { return null; }
      return { key, text: this.textOf(key), textJa: this.textJaOf(key), file: map[L][key], lang: L };
    },

    /**
     * ★ 按候选顺序播放"第一个可用"的键（第二十九轮）。
     * play() 是从候选池里**随机**挑 —— 那对"同一句话的几个变体"（抚摸2/抚摸3）是对的，
     * 但对"优先级候选链"（好痛 End2 → 兜底）是错的：两条候选都存在时，
     * "好痛"槽有 50% 概率随机播成"哎呀"（生成器把 End1 也放进了兜底链，133 个角色中招）。
     * 敲头的叫一声/好痛必须**确定性**取第一个可解析的键 —— 用这个方法，别用 play()。
     */
    playFirst(keys, suffix) {
      if (!enabled || !keys) return null;
      if (Array.isArray(keys) && !keys.length) return null;
      const hit = resolveAny(keys, suffix);
      if (!hit) return null;
      return this.playKey(hit.key) || { key: hit.key, text: this.textOf(hit.key), lang: hit.L };
    },

    stop() { if (current) { current.pause(); current.currentTime = 0; current = null; } },

    /** 把候选键解析成实际会播的那一个（不播放）。
     *  ★ 第五十四轮：返回 {key, L}（带实际语言）；解析不到返回 null。 */
    resolveKey(keys, suffix) {
      const hit = resolveAny(keys, suffix);
      return hit ? { key: hit.key, L: hit.L } : null;
    },

    /** 新增：全语言列表（语言菜单全列，不再按角色过滤） */
    allLangs() { return Object.keys(map); },

    /**
     * 取某条语音的时长（秒）。读不到返回 null。
     * 官方就是按语音时长来驱动摸肚子序列的相位切换。
     * ★ 第五十四轮：加可选语言参数（回退语言播放的键，要用它的语言查音频）。
     */
    durationOf(key, L) {
      if (!key) return Promise.resolve(null);
      const a = audioFor(key, L);
      if (!a) return Promise.resolve(null);
      if (Number.isFinite(a.duration) && a.duration > 0) return Promise.resolve(a.duration);
      return new Promise((res) => {
        let done = false;
        const fin = (v) => { if (!done) { done = true; res(v); } };
        a.addEventListener('loadedmetadata',
          () => fin(Number.isFinite(a.duration) && a.duration > 0 ? a.duration : null), { once: true });
        a.addEventListener('error', () => fin(null), { once: true });
        setTimeout(() => fin(null), 2500);
      });
    },

    /** ★ 同步版时长（秒）：只在该条语音**已经预加载好**时返回数字，否则 null。
        喂食要"动作时长跟着语音走"，必须在同一帧就把动作排好，不能等 Promise。 */
    durationSync(key, L) {
      if (!key) return null;
      const a = audioFor(key, L);
      if (!a) return null;
      return (Number.isFinite(a.duration) && a.duration > 0) ? a.duration : null;
    },

    /** ★ 监听某条语音"自然播完"（喂食：语音一结束就把动作收回待机，最准）。
        返回 false 表示拿不到该音频（调用方应改用定时器兜底）。
        注意：被 pause() 打断时不会触发 ended（那是设计如此）。
        ★ 第五十四轮：加可选语言参数。 */
    onEnded(key, cb, L) {
      if (!key) return false;
      const a = audioFor(key, L);
      if (!a) return false;
      const h = () => { a.removeEventListener('ended', h); try { cb(); } catch (e) { /* 忽略 */ } };
      a.addEventListener('ended', h);
      return true;
    },

    /* ---------------- 官方互动音效 ---------------- */
    setSfxEnabled(v) { sfxEnabled = v; },
    isSfxEnabled() { return sfxEnabled; },

    /**
     * 播放官方互动音效
     * @param {string|Array} name 音效名（如 SFX_Pat）
     * @param {number} volume 0..1
     */
    playSfx(name, volume = 0.6) {
      if (!sfxEnabled || !name) return null;
      const n = Array.isArray(name) ? name[Math.floor(Math.random() * name.length)] : name;
      const now = performance.now();
      if (now - lastSfx < 60) return null;   // 防连点爆音
      lastSfx = now;
      let a = sfxCache.get(n);
      if (!a) {
        a = new Audio(`assets/sfx/${n}.ogg`);
        a.preload = 'auto';
        sfxCache.set(n, a);
      }
      try {
        const el = a.cloneNode();
        /* ★ 第四十六轮：音效通道音量（含总音量） */
        el.volume = Math.max(0, Math.min(1, volume * sfxVol()));
        // 播完后释放克隆节点，防止内存泄漏
        el.onended = () => { el.onended = null; el.src = ''; };
        el.play().catch(() => { el.src = ''; });
      } catch (e) { return null; }
      return n;
    },

    /** 音效通道的当前生效音量（自测/调试用） */
    sfxVolume() { return sfxVol(); },

    preloadSfx(names) {
      (names || []).forEach((n) => {
        if (!sfxCache.has(n)) {
          const a = new Audio(`assets/sfx/${n}.ogg`);
          a.preload = 'auto';
          sfxCache.set(n, a);
        }
      });
    },

    preload(keys, suffix) {
      const { pool, L } = pickRandomAny(keys, suffix);
      pool.forEach((k) => audioFor(k, L));
    },
  };
})();
