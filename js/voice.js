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
    const withNum = names.find((n) => new RegExp('^' + esc(k) + '\\d+$').test(n));
    if (withNum) return withNum;
    return names.find((n) => n.startsWith(k)) || null;
  }

  function resolveIn(L, keys, suffix) {
    const list = Array.isArray(keys) ? keys : [keys];
    const m = map[L] || {};
    const names = Object.keys(m);
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

  /** ★ 第五十四轮（播放级语言回退）：
      用户选了日语就一直日语 —— 该键在日语下没有音频时，直接回退其它语言播放，
      不再把用户偏好改掉。语言顺序：偏好语言优先，其余语言跟后。 */
  function langOrder() {
    return [lang].concat(Object.keys(map).filter((L) => L !== lang));
  }

  function resolveAny(keys, suffix) {
    for (const L of langOrder()) {
      const k = resolveIn(L, keys, suffix);
      if (k) return { key: k, L };
    }
    return null;
  }

  /** 随机池也按语言优先：先把偏好语言下所有可用变体凑齐，非空就只在该池里随机；
      偏好语言一个变体都没有时，才整池落到下一门语言 ——
      保证"选了日语听日语"，不会一半日语一半韩语地混。 */
  function pickRandomAny(keys, suffix) {
    const list = Array.isArray(keys) ? keys : [keys];
    for (const L of langOrder()) {
      const out = [];
      for (const k of list) {
        const r = resolveIn(L, [k], suffix);
        if (r && !out.includes(r)) out.push(r);
      }
      if (out.length) return { pool: out, L };
    }
    return { pool: [], L: lang };
  }

  function pickRandom(keys, suffix) { return pickRandomAny(keys, suffix).pool; }

  function audioFor(key, L) {
    const id = (L || lang) + '\u0000' + key;
    if (cache.has(id)) return cache.get(id);
    const url = urlFor(key, L);
    if (!url) return null;
    const a = new Audio(url);
    a.preload = 'auto';
    cache.set(id, a);
    return a;
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
      cache.clear();
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
      cache.clear();
      return lang;
    },
    /** 某个角色真的有音频的语言列表（给语言按钮用） */
    langsFor(charId) { return availLangs[charId] || []; },

    setLang(l) {
      lang = l;
      cache.clear();
      /* ★ 记住用户最后选择的语音语言（日/韩），下次启动 / 切角色都优先用这个，
         而不是每次都退回角色自己的默认语言。 */
      try { localStorage.setItem('pet-voice-lang', l); } catch (e) { /* 忽略 */ }
    },
    getLang() { return lang; },
    count(charId) {
      const dict = map[lang] || {};
      if (!charId) return Object.keys(dict).length;
      return Object.keys(dict).filter((k) => k.indexOf(charId) >= 0).length;
    },
    setEnabled(v) { enabled = v; },
    isEnabled() { return enabled; },

    /** 取某个键的官方中文台词 */
    textOf(key) {
      return (texts.zh && texts.zh[key]) || '';
    },
    textJaOf(key) {
      return (texts.ja && texts.ja[key]) || '';
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
        el.play().catch(() => {});
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
