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

  function urlFor(key) {
    const m = map[lang] || {};
    return m[key] ? `assets/voice/${lang}/${m[key]}` : null;
  }

  /** 从候选键里挑第一个真实存在的（支持 Butter_Eat -> Butter_Eat1 尾号补全，
      也支持皮肤专属语音 Butter_Touch2 -> Butter_Touch2_Skin1） */
  function resolve(keys, suffix) {
    const list = Array.isArray(keys) ? keys : [keys];
    const m = map[lang] || {};
    const names = Object.keys(m);
    const tryOne = (k) => {
      if (m[k]) return k;
      const withNum = names.find((n) => new RegExp('^' + esc(k) + '\\d+$').test(n));
      if (withNum) return withNum;
      return names.find((n) => n.startsWith(k)) || null;
    };
    for (const k of list) {
      if (suffix) {
        const s = tryOne(k + suffix);
        if (s) return s;
      }
      const r = tryOne(k);
      if (r) return r;
    }
    return null;
  }

  function pickRandom(keys, suffix) {
    const list = Array.isArray(keys) ? keys : [keys];
    const out = [];
    for (const k of list) {
      const r = resolve([k], suffix);
      if (r && !out.includes(r)) out.push(r);
    }
    return out;
  }

  function audioFor(key) {
    if (cache.has(key)) return cache.get(key);
    const url = urlFor(key);
    if (!url) return null;
    const a = new Audio(url);
    a.preload = 'auto';
    cache.set(key, a);
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
      /* 语言必须按 CONFIG.voiceLang 初始化。
         不初始化的话会停在默认语言上 —— 若该语言没有该角色的音频，所有语音都播不出来。 */
      lang = pickLangFor(typeof CONFIG !== 'undefined' ? CONFIG.id : '', lang);
      cache.clear();
      return { langs: Object.keys(map), availLangs, lang, catalog: catalog.length };
    },

    /** ★ 切角色时调用：把语言切到该角色的默认语言（该语言必须有这个角色的音频）
        ★ 第三十三轮：用户要求**默认韩语**——角色有韩语音频就先给韩语，
          确实没有韩语的角色再退回角色自己声明的默认（如黄油本来的日语）。 */
    useCharacter(charId, preferLang) {
      lang = pickLangFor(charId, hasVoice(charId, 'ko') ? 'ko' : (preferLang || lang));
      cache.clear();
      return lang;
    },
    /** 某个角色真的有音频的语言列表（给语言按钮用） */
    langsFor(charId) { return availLangs[charId] || []; },

    setLang(l) { lang = l; cache.clear(); },
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
     *  ★ 多角色 + 多语言：
     *    · 传 charId → 只返回该角色的条目；
     *    · 再按"**当前语言真的有音频**"过滤 —— 有的语音只有韩语没有日语
     *      （黄油 39 条只有 ko、3 条只有 ja），不过滤就会出现
     *      "图鉴里列着、点了却没声音"的假条目。 */
    catalog(charId) {
      const dict = map[lang] || {};
      return catalog.filter((c) => {
        if (charId && !(c.char === charId || (!c.char && c.key.indexOf(charId) >= 0))) return false;
        if (c.langs && c.langs.length) return c.langs.includes(lang);
        return !!dict[c.key];
      });
    },
    /** 该键是否有音频 */
    has(key) { return !!urlFor(key); },

    /**
     * 播放一组候选语音。
     * @returns {{key:string, text:string, file:string}|null} 实际播放的那条
     */
    play(keys, suffix) {
      if (!enabled || !keys) return null;
      if (Array.isArray(keys) && !keys.length) return null;
      const pool = pickRandom(keys, suffix);
      if (!pool.length) return null;
      const key = pool[Math.floor(Math.random() * pool.length)];
      const a = audioFor(key);
      if (!a) return null;
      try {
        if (current && current !== a) { current.pause(); current.currentTime = 0; }
        a.currentTime = 0;
        a.volume = voiceVol();
        current = a;
        a.play().catch(() => {});
      } catch (e) { /* 忽略 */ }
      return { key, text: this.textOf(key), textJa: this.textJaOf(key), file: map[lang][key] };
    },

    /** 按精确键名播放（语音图鉴用） */
    playKey(key) {
      if (!enabled || !map[lang] || !map[lang][key]) return null;
      const a = audioFor(key);
      if (!a) return null;
      try {
        if (current && current !== a) { current.pause(); current.currentTime = 0; }
        a.currentTime = 0;
        a.volume = voiceVol();          // ★ 第四十六轮：语音通道音量（含总音量）
        current = a;
        a.play().catch(() => {});
      } catch (e) { return null; }
      return { key, text: this.textOf(key), textJa: this.textJaOf(key) };
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
      const key = resolve(keys, suffix);
      if (!key) return null;
      return this.playKey(key);
    },

    stop() { if (current) { current.pause(); current.currentTime = 0; current = null; } },

    /** 把候选键解析成实际会播的那一个（不播放） */
    resolveKey(keys, suffix) { return resolve(keys, suffix); },

    /**
     * 取某条语音的时长（秒）。读不到返回 null。
     * 官方就是按语音时长来驱动摸肚子序列的相位切换。
     */
    durationOf(key) {
      if (!key) return Promise.resolve(null);
      const a = audioFor(key);
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
    durationSync(key) {
      if (!key) return null;
      const a = audioFor(key);
      if (!a) return null;
      return (Number.isFinite(a.duration) && a.duration > 0) ? a.duration : null;
    },

    /** ★ 监听某条语音"自然播完"（喂食：语音一结束就把动作收回待机，最准）。
        返回 false 表示拿不到该音频（调用方应改用定时器兜底）。
        注意：被 pause() 打断时不会触发 ended（那是设计如此）。 */
    onEnded(key, cb) {
      if (!key) return false;
      const a = audioFor(key);
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

    preload(keys, suffix) { pickRandom(keys, suffix).forEach((k) => audioFor(k)); },
  };
})();
