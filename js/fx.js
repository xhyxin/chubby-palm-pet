/* ------------------------------------------------------------------
 * fx.js —— 官方互动特效层
 *
 * 特效图来自同人站 Studio 互动模式使用的官方素材：
 *   assets/fx/petting-love-heart.png      摸头时的爱心
 *   assets/fx/dutch-rub-{档位1-4}-v{变体0-2}.png   敲头（爆栗）的星芒
 *
 * 官方在 StableSpinePlayerFixed 里的配置：
 *   Xr = { ballPull:980, petting:1600, tickling:980, dutchRub:1180 }  // 时长 ms
 *   Ur = [{kind:"left", x:-175, y:40, variantOffset:0, endX:-20},
 *         {kind:"right", x:230, y:40, variantOffset:1, endX:20}]
 *   jm = {kind:"main", x:0, y:-80, variantOffset:0, endX:-18}
 *
 * ★ 第二十七轮修"特效有时候有有时候没有"（不稳定）：
 *   根因 = 特效图**没有预加载**。spawn() 一建 <img> 就 append，CSS 动画**立刻开始计时**；
 *   若那张 PNG 还没下载完，动画在"图片空白期"就已经播过大半，等图加载出来时
 *   动画已到尾部（透明）→ 看着就是"这次没出特效"。首次敲头最容易触发。
 *   修法：① 启动时把所有特效图 `new Image()` 预加载进缓存；
 *        ② spawn() 先确认图片 `complete`，没加载完就**等 onload 再挂动画**，
 *           并且动画时长的计时从"真正可见"那一刻开始（不再空转）。
 * ------------------------------------------------------------------ */
const Fx = (() => {
  let layer = null;
  let enabled = true;

  const RUB_VARIANTS = [0, 1, 2];

  /* 所有会用到的特效图（预加载用） */
  const ALL_SPRITES = (() => {
    const out = ['assets/fx/petting-love-heart.png'];
    for (let lv = 1; lv <= 4; lv++) {
      for (const v of RUB_VARIANTS) out.push(`assets/fx/dutch-rub-${lv}-v${v}.png`);
    }
    return out;
  })();

  /* src -> Image（预加载缓存；value 可能还在 loading） */
  const loaded = new Map();

  function preloadOne(src) {
    if (loaded.has(src)) return loaded.get(src);
    const img = new Image();
    img.decoding = 'async';
    const p = new Promise((res) => {
      if (img.complete && img.naturalWidth) return res(true);
      img.onload = () => res(true);
      img.onerror = () => res(false);
    });
    img.src = src;
    loaded.set(src, { img, ready: p });
    return loaded.get(src);
  }

  function ensure() {
    if (layer) return layer;
    layer = document.getElementById('fx-layer');
    return layer;
  }

  /* 确保特效图已就绪再挂元素、跑动画。
     已经缓存好的同步走；没缓存好的等 onload（超时 350ms 兜底，避免极端情况卡住）。
     ★ opt.apng（第二十九轮）：敲头星芒是 APNG 动画图，自带出图/消散节奏，
       必须走 fxPopApng（立刻不透明）；如果沿用 fxPop 的 212ms 淡入，
       PNG 最亮的帧会被 CSS 的透明期盖掉 —— 就是"特效时有时无"的根因。 */
  function spawn(src, x, y, opt) {
    const host = ensure();
    if (!host) return;
    const rec = preloadOne(src);
    const fire = () => {
      const el = document.createElement('img');
      el.src = src;
      el.className = 'fx-sprite' + (opt.apng ? ' fx-apng' : '');
      el.alt = '';
      el.style.left = x + 'px';
      el.style.top = y + 'px';
      el.style.width = opt.size + 'px';
      el.style.setProperty('--fx-dx', opt.dx + 'px');
      el.style.setProperty('--fx-dy', opt.dy + 'px');
      el.style.setProperty('--fx-scale', opt.scale);
      el.style.setProperty('--fx-rot', opt.rot + 'deg');
      el.style.animationDuration = opt.duration + 'ms';
      host.appendChild(el);
      /* 动画播完就移除（时长 + 一帧余量） */
      setTimeout(() => el.remove(), opt.duration + 80);
    };
    if (rec.img.complete && rec.img.naturalWidth) { fire(); return; }
    let done = false;
    const once = () => { if (!done) { done = true; fire(); } };
    rec.ready.then(once).catch(once);
    setTimeout(once, 350);   // 兜底：不因单张图异常而永远不出特效
  }

  return {
    setEnabled(v) { enabled = v; },
    isEnabled() { return enabled; },

    /** 启动时预加载所有特效图（消除"首次不显示"） */
    preload() {
      if (!enabled) return Promise.resolve();
      return Promise.all(ALL_SPRITES.map((s) => preloadOne(s).ready)).then(() => true);
    },

    /** 摸头：爱心从头顶飘起来 */
    heart(screenX, screenY, duration = 1600) {
      if (!enabled || !ensure()) return;
      const n = 3;
      for (let i = 0; i < n; i++) {
        const off = (i - 1) * 26;
        spawn('assets/fx/petting-love-heart.png',
          screenX + off, screenY - 10,
          {
            size: 46 + i * 8,
            dx: off * 0.8,
            dy: -70 - i * 16,
            scale: 1.15 + i * 0.12,
            rot: (i - 1) * 12,
            duration: duration + i * 120,
          });
      }
    },

    /**
     * 敲头（爆栗）：官方是 3 个星芒（左/主/右）从头顶炸开
     * @param {number} level 1-4，按连击次数升级
     */
    dutchRub(screenX, screenY, level = 2, duration = 1180) {
      if (!enabled || !ensure()) return;
      const lv = Math.max(1, Math.min(4, Math.round(level)));
      const parts = [
        { x: -0.42, y: -0.10, off: 0, dx: -46, rot: -22 },
        { x: 0, y: -0.30, off: 0, dx: -14, rot: 6 },
        { x: 0.44, y: -0.10, off: 1, dx: 46, rot: 22 },
      ];
      const base = 62 + lv * 18;
      parts.forEach((p) => {
        const v = RUB_VARIANTS[(lv + p.off) % RUB_VARIANTS.length];
        spawn(`assets/fx/dutch-rub-${lv}-v${v}.png`,
          screenX + p.x * base, screenY + p.y * base,
          {
            size: base,
            dx: p.dx,
            dy: -34,
            scale: 1.35,
            rot: p.rot,
            duration,
            apng: true,       // ★ 星芒是 APNG 动画图：出图节奏交给 PNG 自己（fxPopApng）
          });
      });
    },
  };
})();
