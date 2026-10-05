/* ------------------------------------------------------------------
 * pet.js —— Spine 模型加载 / 渲染 / 动作控制 / 骨骼热点 / 顶点变形
 *
 * 形变方案说明（重要）：
 *   黄油的脸颊、肚子都是"多骨骼加权网格"，权重分散在 5～12 根骨头上，
 *   所以缩放或平移单根骨骼，传递到网格上只剩百分之几，几乎看不出来。
 *   因此形变改用官方运行时提供的 **顶点变换钩子**
 *   （SceneRenderer.drawSkeleton 的最后一个参数 VertexTransformer），
 *   直接在最终顶点上做"空间衰减位移"——离控制点越近变形越强，
 *   这样不依赖任何权重，效果干净可控。
 * ------------------------------------------------------------------ */
const Pet = (() => {
  let canvas, gl, ctx, renderer, manager;
  let skeleton, state, stateData, skeletonData;
  let ready = false;
  let modelDef = null;

  let animMap = {};
  let boneMap = {};
  let bounds = { x: 0, y: 0, w: 1, h: 1 };
  /* ★ 第三十一轮：模型加载完成（标准站姿）时的世界坐标包围盒快照——
     供"喜好气泡"等 UI 定位用，不随动作帧波动（实时 bounds 会跟着跳跃/压缩动画变） */
  let setupWorld = null;
  let camView = { x: 0, y: 0, w: 1, h: 1 };

  /* ---------------- 形变状态 ----------------
     脸颊形变是"各向异性"的：沿拖动方向拉长，垂直方向基本不变，
     这样腮红是被"拽出去一条"，而不是整块鼓成一个圆。
     dx/dy = 控制点位移，s = 沿拖动方向的缩放，sPerp = 垂直方向的缩放，
     ux/uy = 拖动方向单位向量。 */
  const ov = {
    cheekL: { dx: 0, dy: 0, s: 1, sPerp: 1, ux: 1, uy: 0 },
    cheekR: { dx: 0, dy: 0, s: 1, sPerp: 1, ux: 1, uy: 0 },
    ballDrag: { x: 0, y: 0 },      // 官方 ballPull：拖 Character_Ball_Move 骨骼（世界坐标位移）
    headDown: 0, headSway: 0, sway: 0, jitter: 0, time: 0,
  };
  const ovT = {
    cheekL: { dx: 0, dy: 0, s: 1, sPerp: 1, ux: 1, uy: 0 },
    cheekR: { dx: 0, dy: 0, s: 1, sPerp: 1, ux: 1, uy: 0 },
    ballDrag: { x: 0, y: 0 },
    headDown: 0, headSway: 0, sway: 0, jitter: 0,
  };
  const EASE = 16;

  /* 变形区域中心（每帧从骨骼世界坐标刷新） */
  const centers = {
    cheekL: { x: 0, y: 0, r: 1 },
    cheekR: { x: 0, y: 0, r: 1 },
  };

  let currentBase = null;
  let idleName = null;
  /* 运行时发现的"捏脸无效"原因（缺腮红骨骼等），由 diagnosePinch() 填。
     角色数据里的 CONFIG.pinch.ok=false 是静态判定，这里是动态补充。 */
  let pinchReason = '';

  /* 调试计数（顶点钩子有没有被调用、传进来的坐标是什么） */
  const DBG = { calls: 0, numFloats: 0, stride: 0, sample: null, moved: 0 };

  /* ---------------------------------------------------------- 工具 */
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  function pick(list) {
    if (!list || !list.length) return null;
    for (const n of list) if (animMap[n]) return n;
    return null;
  }

  function animOf(key) {
    return pick(CONFIG.anim[key]) || idleName;
  }

  function resolveBones() {
    boneMap = {};
    for (const [key, names] of Object.entries(CONFIG.bones)) {
      boneMap[key] = null;
      for (const n of names) {
        const b = skeleton.findBone(n);
        if (b) { boneMap[key] = b; break; }
      }
    }
    /* ★ 官方 ballPull 半径 = |Character_Ball_Move − 它的**真实父骨骼**| × 2，
       而骨架里的真实父骨骼不一定叫 Ball_R_Root（各角色命名五花八门：
       Ball_Root / S3_Ball_Root / Ball_Root2…），角色数据里的候选是"猜"的。
       所以这里直接按官方做法，**从骨骼树取真正的 parent** 覆盖掉候选值。
       不这么做 Chopi / Allet / Renewa 这类角色会算错脸颊半径，热区就跑偏。 */
    const bm = boneMap.ballMove;
    if (bm && bm.parent) boneMap.ballMoveP = bm.parent;
  }

  /* ---------------------------------------------------------- 初始化 */
  function init(cv) {
    canvas = cv;
    const cfg = { alpha: true, premultipliedAlpha: true, antialias: true, preserveDrawingBuffer: true };
    ctx = new spine.ManagedWebGLRenderingContext(canvas, cfg);
    gl = ctx.gl;
    renderer = new spine.SceneRenderer(canvas, ctx, false);
    window.addEventListener('resize', resize);
    resize();
    return true;
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    if (skeleton) fitCamera();
  }

  /* ★ 第四十七轮：窄屏（手机）统一"标准大小"。
     问题：原来窄屏会走下面那个"按宽度装满"的分支（vw < size.x*padX 时改成按宽度算），
     于是**宽高比大**的角色（阿莱特的大头盔、艾蜜莉雅R41 的头发/道具占地方）
     可见高度会顶到画布高度的 72%~75%，头顶直接扎进顶部按钮和台词气泡里；
     而电脑端窗口宽，走的是"按高度"分支，所有角色尺寸天然一致 —— 所以只有安卓端出问题。
     修法：窄屏也统一成**黄油 的实测标准大小**（用户指定），即模型包围盒高度
           = 画布高度的 52%（390x844 上 = 439px，正是黄油 的尺寸）。
     注意：按宽度装不下的很宽的模型仍旧按宽度装（那是"只会更小"的方向），
     所以这次改动**只会把过大的模型缩小，不会把任何模型放大**。 */
  const NARROW_ASPECT = 0.85;   // cw/ch 小于它（竖屏 / 窄窗）就启用统一标准大小
  const STD_BOX_H = 0.52;       // 包围盒高度占画布高度的比例（黄油 在手机上的实测值）

  function fitCamera() {
    const off = new spine.Vector2();
    const size = new spine.Vector2();
    skeleton.updateWorldTransform();
    skeleton.getBounds(off, size);
    if (size.x <= 0 || size.y <= 0) return;
    bounds = { x: off.x, y: off.y, w: size.x, h: size.y };

    const cw = canvas.clientWidth || 1;
    const ch = canvas.clientHeight || 1;
    const aspect = cw / ch;
    const padX = 1.10, padTop = 1.34, padBottom = 1.22;

    let vh;
    if (aspect < NARROW_ASPECT) {
      vh = size.y / STD_BOX_H;                 // ★ 窄屏：所有模型都按这个统一尺寸摆
    } else {
      vh = size.y * Math.max(padTop, padBottom);  // 宽屏：沿用原逻辑（本来就很整齐）
    }
    let vw = vh * aspect;
    if (vw < size.x * padX) { vw = size.x * padX; vh = vw / aspect; }

    const cam = renderer.camera;
    cam.viewportWidth = vw;
    cam.viewportHeight = vh;
    const centerY = off.y + size.y * (0.5 + (padTop - padBottom) / (2 * Math.max(padTop, padBottom)));
    cam.position.x = off.x + size.x / 2;
    cam.position.y = centerY;
    cam.update();

    camView = { x: cam.position.x - vw / 2, y: cam.position.y - vh / 2, w: vw, h: vh };
  }

  /* ----------------------------------------------------------
   * makeAtlasSizedTexture —— 官方做法：把贴图**重采样到 atlas 声明的逻辑尺寸**。
   *
   * 背景：spine 的 UV 计算是
   *     region.u = region.x / page.width   (page.width/height 只取自 atlas.txt 的 size: 行)
   * 官方 CDN 有一批图集：atlas 声明 2048×2596，而 PNG 实际只有 2048×2048
   * （内容被等比压扁过的"下载版"）→ 落在声明高度之外的 region 全部采样越界 → 模型崩坏。
   *
   * ★ 官方 Studio 的修法（`StableSpinePlayerFixed-BtLHwL9N.js` 的 `Nc/Cc/Pc`）：
   *   **不动 UV，也不动 region**，而是把解码后的贴图 **resize 回 atlas 声明的 logical size**
   *   再上传到 GPU（`createImageBitmap(img, { resizeWidth: logicalW, resizeHeight: logicalH })`）。
   *   这样 region 的 UV 与贴图像素重新一一对应，形状/清晰度都按官方声明的那一份来。
   *
   * 之前的实现是"按真实尺寸缩 region"，虽然也能让 UV 对上，
   * 但等价于把贴图**竖着压扁**（欧若拉 2596→2048），会让角色变矮 —— 与官方不一致。
   * 现在改成官方原版做法：重采样上传，region/UV 一律不动。
   * ---------------------------------------------------------- */
  function resampleTextureToLogical(texture, logicalW, logicalH) {
    if (!texture || typeof texture.getImage !== 'function') return null;
    const img = texture.getImage();
    if (!img) return null;
    const decW = img.width || img.naturalWidth || 0;
    const decH = img.height || img.naturalHeight || 0;
    if (!decW || !decH) return null;
    if (decW === logicalW && decH === logicalH) return null;   // 一致就什么都不做

    const cv = document.createElement('canvas');
    cv.width = logicalW; cv.height = logicalH;
    const c2d = cv.getContext('2d');
    if (!c2d) return null;
    c2d.imageSmoothingEnabled = true;
    c2d.imageSmoothingQuality = 'high';
    c2d.clearRect(0, 0, logicalW, logicalH);
    c2d.drawImage(img, 0, 0, logicalW, logicalH);
    console.info('[pet] 贴图尺寸不符，已按官方做法重采样上传：' +
      decW + '×' + decH + ' → ' + logicalW + '×' + logicalH);
    return cv;
  }

  /* 遍历 atlas 的每一页：若贴图解码尺寸 ≠ atlas 逻辑尺寸，就整页重采样后替换。
     region / UV 全部保持 atlas 原样（与官方一致）。 */
  function fixAtlasTextureSize(atlas) {
    if (!atlas || !atlas.pages) return 0;
    let fixed = 0;
    for (const page of atlas.pages) {
      if (!page || !page.texture || !page.width || !page.height) continue;
      let img = null;
      try { img = page.texture.getImage(); } catch (e) { img = null; }
      if (!img) continue;
      const decW = img.width || img.naturalWidth || 0;
      const decH = img.height || img.naturalHeight || 0;
      if (decW === page.width && decH === page.height) continue;  // 一致，跳过

      const canvasTex = resampleTextureToLogical(page.texture, page.width, page.height);
      if (!canvasTex) continue;
      /* 用 GLTexture 包一层（spine-webgl 的 textureLoader 用的就是这个类型）。
         第三个参数是 useMipMaps，本项目的 atlas 全是 `filter:Linear,Linear`（无 mipmap），
         所以传 false；page.setTexture() 会立刻按 atlas 的 min/mag 过滤与 wrap 重新设置。 */
      const newTex = new spine.GLTexture(ctx, canvasTex, false);
      try { page.texture.dispose(); } catch (e) { /* 忽略 */ }
      page.setTexture(newTex);
      fixed++;
    }
    return fixed;
  }

  /* ---------------------------------------------------------- 加载模型 */
  async function loadModel(def) {
    ready = false;
    modelDef = def;
    const dir = def.dir.replace(/\/+$/, '');
    const skelName = def.skel || (def.id + '.skel.bytes');
    const atlasName = def.atlas || (def.id + '.atlas.txt');

    if (manager) { try { manager.dispose(); } catch (e) { /* 忽略 */ } }
    manager = new spine.AssetManager(ctx, dir + '/');
    manager.loadBinary(skelName);
    manager.loadTextureAtlas(atlasName);

    await new Promise((resolve, reject) => {
      const done = () => (typeof manager.isLoadingComplete === 'function'
        ? manager.isLoadingComplete()
        : !manager.isLoading());
      const t0 = performance.now();
      const TIMEOUT_MS = 30000;
      const check = () => {
        if (done()) {
          /* 资源加载失败时 spine 的 AssetManager 也会把 toLoad 减到 0，
             所以"加载完成"不等于"加载成功" —— 必须再查一次 hasErrors()，
             否则后面 require() 抛的错会难懂得多。 */
          if (typeof manager.hasErrors === 'function' && manager.hasErrors()) {
            const errs = manager.getErrors ? manager.getErrors() : {};
            const first = Object.keys(errs)[0];
            return reject(new Error('资源加载失败：' + (first || '未知') + ' — ' + (errs[first] || '')));
          }
          return resolve();
        }
        if (performance.now() - t0 > TIMEOUT_MS) {
          return reject(new Error(`模型加载超时（${TIMEOUT_MS / 1000} 秒）：${dir}`));
        }
        /* ★ 用定时器轮询，**不要用 requestAnimationFrame**：
           rAF 在后台标签页/最小化窗口里会被浏览器暂停，
           无头浏览器的虚拟时间用尽后也会停 —— 那样加载就会永远卡住，
           表现为"一直停在加载层"。定时器不受这些影响。
           （黄油那份用的是 rAF，这个坑就是在这儿踩出来的。） */
        setTimeout(check, 16);
      };
      check();
    });

    const atlas = manager.require(atlasName);
    /* ★ 贴图尺寸修复（官方做法，关键）：
       官方 CDN 上有一批图集，`atlas.txt` 里声明的 `size:W,H` 与**实际 PNG 尺寸**
       不一致（PNG 是"压扁过的下载版"，实测 20 套模型：欧若拉 2048×2596 → 实际 2048×2048，
       还有 Chloe / RohneMayor / Joanne / Lethe / Suro 等）。
       spine 的 UV = region.x / page.width，而 page.width/height **只来自 atlas 的 size: 行**，
       于是声明高度之外的 region（欧若拉有 102 个）全部采样越界 → 模型崩坏（用户报的欧若拉崩坏）。
       ★ 官方 Studio 的修法是把贴图**重采样回 atlas 声明的逻辑尺寸**再上传（不动 UV/region），
       本函数 `fixAtlasTextureSize()` 就是它的移植版。 */
    fixAtlasTextureSize(atlas);
    const loader = new spine.AtlasAttachmentLoader(atlas);
    skeletonData = new spine.SkeletonBinary(loader).readSkeletonData(manager.require(skelName));

    skeleton = new spine.Skeleton(skeletonData);
    let skinOk = false;
    for (const s of CONFIG.skinCandidates) {
      if (skeletonData.findSkin(s)) { skeleton.setSkinByName(s); skinOk = true; break; }
    }
    if (!skinOk) skeleton.setSkinByName(skeletonData.skins[0].name);
    skeleton.setSlotsToSetupPose();

    stateData = new spine.AnimationStateData(skeletonData);
    stateData.defaultMix = 0.18;
    state = new spine.AnimationState(stateData);

    animMap = {};
    for (const a of skeletonData.animations) animMap[a.name] = a;
    idleName = pick(CONFIG.anim.idle) || (skeletonData.animations[0] && skeletonData.animations[0].name) || null;

    resolveBones();
    resetOverrides();
    fitCamera();
    setupWorld = { x: bounds.x, top: bounds.y + bounds.h, bottom: bounds.y };   // 待机几何快照
    playBase('idle');
    diagnosePinch();
    ready = true;
    return { animations: Object.keys(animMap), bones: Object.keys(boneMap).filter((k) => boneMap[k]) };
  }

  /* 捏脸动态体检：捏脸至少要能拿到「脸颊热区圆心 + ballMove + ballMoveP」三样。
     缺任何一样都会导致"点了有语音、脸不动"，直接判定不可用。 */
  function diagnosePinch() {
    pinchReason = '';
    if (!boneMap.ballMove) pinchReason = '缺 Character_Ball_Move 骨骼';
    else if (!boneMap.ballMoveP) pinchReason = '缺 ballMove 父骨骼';
    else if (!boneMap.cheekR && !boneMap.ballMove) pinchReason = '缺腮红骨骼';
    else if (!ballPullGeom()) pinchReason = 'pat/tickle 骨骼算不出捏脸方向';
  }

  /* ---------------------------------------------------------- 动作控制 */
  /* 切动作前把插槽复位到 setup pose，
     否则上一个动作留下的眼泪/汗珠/笑容等附件会挂在身上。 */
  function resetSlots() {
    if (skeleton) skeleton.setSlotsToSetupPose();
  }

  function playBase(key) {
    const n = animOf(key);
    if (!n) return null;
    currentBase = n;
    state.clearTracks();
    resetSlots();
    state.setAnimation(0, n, true);
    return n;
  }

  function playOnce(key, backTo = 'idle') {
    const n = animOf(key);
    const back = animOf(backTo);
    if (!n) return null;
    state.clearTracks();
    resetSlots();
    state.setAnimation(0, n, n === back);
    if (back && n !== back) state.addAnimation(0, back, true, 0);
    currentBase = back;
    return n;
  }

  function playLoop(key) {
    const n = animOf(key);
    if (!n || currentBase === n) return currentBase;
    currentBase = n;
    state.clearTracks();
    resetSlots();
    state.setAnimation(0, n, true);
    return n;
  }

  function playEnd(endKey, backTo = 'idle') {
    const n = animOf(endKey);
    const back = animOf(backTo);
    state.clearTracks();
    resetSlots();
    if (n && n !== back) {
      state.setAnimation(0, n, false);
      if (back) state.addAnimation(0, back, true, 0);
    } else if (back) {
      state.setAnimation(0, back, true);
    }
    currentBase = back;
    return n;
  }

  /** 按骨架里的真实动作名直接播放（动作面板用） */
  function playRaw(name, loop = false) {
    if (!animMap[name]) return null;
    state.clearTracks();
    resetSlots();
    state.setAnimation(0, name, loop);
    if (loop) currentBase = name;
    else if (idleName) state.addAnimation(0, idleName, true, 0);
    return name;
  }

  /** ★ 循环播一个动作，持续 ms 毫秒后自动回到 backTo（喂食用）。
      用途：喂食时**语音还没播完动作就结束了**（用户报的 bug），
      改成"吃"循环到语音长度再去待机。
      实现上用带守卫的定时器（比 Spine 的排队切换更好预测）：
      到点时**只有还停在这个动作上**才切回待机；
      期间用户做了别的互动（会改 currentBase）就自动作废，不会把人家顶掉。 */
  let timedTimer = null;
  function clearTimed() { if (timedTimer) { clearTimeout(timedTimer); timedTimer = null; } }
  function playTimed(key, ms, backTo = 'idle') {
    const n = animOf(key);
    if (!n) return null;
    state.clearTracks();
    resetSlots();
    state.setAnimation(0, n, true);                       // 循环播（吃）
    currentBase = n;
    clearTimed();
    timedTimer = setTimeout(() => {
      timedTimer = null;
      if (currentBase === n) playBase(backTo);            // 只有还停在"吃"才切回待机
    }, Math.max(250, ms || 0));
    return n;
  }

  /** 解析某个配置键对应的真实动作名（找不到返回 null） */
  function animName(key) {
    return pick(CONFIG.anim[key]);
  }

  /** 依次播完一串一次性动作再回到待机。
      官方敲头就是这么串的：Smash_End_1 → Smash_End_2 → Idle。
      onStep(i, name) 会在每一段"真正开始播"的时候回调（按动画时长算），
      用来把语音/音效对齐到对应的那一段。 */
  function playChain(names, backTo = 'idle', onStep) {
    const list = (names || []).filter((n) => n && animMap[n]);
    if (!list.length) return null;
    state.clearTracks();
    resetSlots();
    state.setAnimation(0, list[0], false);
    if (onStep) onStep(0, list[0]);

    let acc = animMap[list[0]].duration;      // 累计时长（秒）
    for (let i = 1; i < list.length; i++) {
      state.addAnimation(0, list[i], false, 0);
      if (onStep) {
        const idx = i, nm = list[i], delay = acc * 1000;
        setTimeout(() => onStep(idx, nm), delay);
      }
      acc += animMap[list[i]].duration;
    }
    const back = animOf(backTo);
    if (back) state.addAnimation(0, back, true, 0);
    currentBase = back;
    return { first: list[0], totalMs: acc * 1000 };
  }

  function playRandomMood(keys, backTo = 'idle') {
    const avail = keys.filter((k) => pick(CONFIG.anim[k]));
    if (!avail.length) return null;
    return playOnce(avail[Math.floor(Math.random() * avail.length)], backTo);
  }

  /* ---------------------------------------------------------- 形变 */
  function resetOverrides() {
    for (const k of ['cheekL', 'cheekR']) {
      ovT[k].dx = 0; ovT[k].dy = 0; ovT[k].s = 1; ovT[k].sPerp = 1;
      ov[k].dx = 0; ov[k].dy = 0; ov[k].s = 1; ov[k].sPerp = 1;
    }
    ovT.ballDrag.x = 0; ovT.ballDrag.y = 0;
    ov.ballDrag.x = 0; ov.ballDrag.y = 0;
    ovT.headDown = 0; ovT.headSway = 0; ovT.sway = 0; ovT.jitter = 0;
    ov.headDown = 0; ov.headSway = 0; ov.sway = 0; ov.jitter = 0;
  }

  /* 官方 Gf：软限幅。t 是要限的量，e 是上限。
     官方不是硬 clamp，而是 |t| 超过 e*0.65 之后用指数饱和 —— 这样"快到上限"
     时还有一段平缓的减速，手感不会突然撞墙。 */
  function ballPullSoft(t, e) {
    const a = Math.abs(t);
    const n = e * 0.65;               // 官方 pf = 0.65
    if (a <= n || e <= 1e-6) return t;
    const i = Math.max(1e-6, e - n);
    return Math.sign(t) * (n + i * (1 - Math.exp(-(a - n) / i)));
  }

  /* 官方 cs()：本地 48° 锥包络（StableSpinePlayerFixed）。
     bx/by = 骨骼当前本地位置（当基向量），dx/dy = 想要的本地位移。
     skip = 官方 skipLocalEnvelope（脸皮骨骼离身体轴太近时跳过包络）。
     ★ 返回的是**绝对本地坐标**，不是增量。 */
  function ballPullEnvelope(bx, by, dx, dy, skip) {
    const o = Math.hypot(bx, by);
    if (!Number.isFinite(o) || o < 1e-6) {
      return (skip && Number.isFinite(dx) && Number.isFinite(dy))
        ? { x: dx, y: dy }
        : { x: bx, y: by };
    }
    if (skip) return { x: bx + dx, y: by + dy };
    const s = bx / o, r = by / o, l = -r, c = s;
    const m = Math.min(o * 4.1, Math.max(-o * 0.3, dx * s + dy * r));
    const g = Math.max(o * (1 - 0.3), o + m) * Math.tan(48 * Math.PI / 180);
    const x = ballPullSoft(dx * l + dy * c, g);
    return { x: bx + s * m + l * x, y: by + r * m + c * x };
  }

  /* ---------------------------------------------------------------
   * 官方 Fr()：从四根骨骼算出捏脸几何（单位 = 世界单位）。
   *   bodySpan  = |pat − tickle|           身体轴长度
   *   cheekRadius = |ballMove − ballMoveP| 脸颊骨骼到父骨骼的距离
   *   outward  = 垂直身体轴、指向脸颊外侧的单位向量（官方"只准往外拉"的方向）
   *   maxStretch / inwardStretch / sideStretch = 三级限幅
   * 全部照抄官方常量：as=4.1 gf=0.55 qa=0.3 Af=0.02 xf=0.18
   *                     yf={40,120} Mf={4,10} kf={14,50} Ef={1.5,4.5}
   * --------------------------------------------------------------- */
  function ballPullGeom() {
    const bm = boneMap.ballMove, bp = boneMap.ballMoveP;
    const pat = boneMap.pat, tk = boneMap.tickle;
    if (!bm || !bp || !pat || !tk) return null;
    const ax = pat.worldX - tk.worldX, ay = pat.worldY - tk.worldY;
    const bodySpan = Math.hypot(ax, ay);
    if (!(bodySpan >= 1)) return null;
    const cheekRadius = Math.hypot(bm.worldX - bp.worldX, bm.worldY - bp.worldY);
    const c = ax / bodySpan, u = ay / bodySpan;              // 身体轴单位向量
    const fx = bm.worldX - pat.worldX, fy = bm.worldY - pat.worldY;
    const w = fx * c + fy * u;                               // 沿身体轴
    const gx = fx - c * w, gy = fy - u * w;                  // 垂直身体轴
    const p = Math.hypot(gx, gy);
    if (!(p >= 1)) return null;
    const maxStretch = clamp(Math.min(cheekRadius * 4.1, bodySpan * 0.55), 40, 120);
    return {
      outwardX: gx / p, outwardY: gy / p,
      bodySpan, cheekRadius,
      skipLocalEnvelope: cheekRadius < bodySpan * 0.02,
      maxStretch,
      inwardStretch: clamp(cheekRadius * 0.3, 4, 10),
      sideStretch: clamp(maxStretch * (40 / 108), 14, 50),    // 官方 Tf = Si/Vn
      reboundBackLimit: clamp(cheekRadius * 0.18, 1.5, 4.5),
    };
  }

  /* ---------------------------------------------------------------
   * 官方 Uf()：拖动增量的方向性限幅。
   *   沿 outward（脸颊外侧）最多 maxStretch（40~120 世界单位）
   *   侧向最多 sideStretch（14~50）
   *   拖动方向越不朝外，M 越小（一直收到 inwardStretch 4~10），
   *   也就是"往上/往里拽几乎拽不动"，这正是官方的手感。
   * dx/dy 单位 = 世界单位。
   * --------------------------------------------------------------- */
  function ballPullLimit(dx, dy, g) {
    const r = Math.hypot(g.outwardX, g.outwardY) || 1;
    const l = g.outwardX / r, c = g.outwardY / r;
    const u = -c, f = l;
    const m = dx * l + dy * c;          // 沿外方向
    const w = dx * u + dy * f;          // 侧向
    const len = Math.hypot(m, w);
    const x = len > 1e-6 ? m / len : 0;
    const p = 0.45;                     // 官方 bf
    let T = clamp((x + p) / (2 * p), 0, 1);
    T = T * T * (3 - 2 * T);            // smoothstep
    const M = g.inwardStretch + (g.maxStretch - g.inwardStretch) * T;
    const I = Math.hypot(m / Math.max(0.001, M), w / Math.max(0.001, g.sideStretch));
    const P = (Number.isFinite(I) && I > 1) ? 1 / I : 1;
    const A = m * P, B = w * P;
    return { x: l * A + u * B, y: c * A + f * B };
  }

  /** 屏幕像素 → 世界单位（相机是等比的，取 x 方向的比例即可） */
  function worldPerPixel() {
    return camView.w / Math.max(1, canvas.clientWidth || 1);
  }

  /** 刷新变形区域中心：直接对准腮红骨骼 S1_Ball_R / S1_Ball_L */
  function refreshCenters() {
    const D = CONFIG.deform || {};
    const r = (D.cheekRadius || 0.085) * bounds.h;
    const bR = boneMap.cheekR, bL = boneMap.cheekL;
    const cR = centers.cheekR, cL = centers.cheekL;
    if (bR) { cR.x = bR.worldX; cR.y = bR.worldY; cR.r = r; }
    if (bL) { cL.x = bL.worldX; cL.y = bL.worldY; cL.r = r; }
    else if (bR) { cL.x = cR.x; cL.y = cR.y; cL.r = r; }
  }

  function applyOverrides(dt) {
    ov.time += dt;
    const t = Math.min(1, dt * EASE);

    for (const k of ['cheekL', 'cheekR']) {
      ov[k].dx += (ovT[k].dx - ov[k].dx) * t;
      ov[k].dy += (ovT[k].dy - ov[k].dy) * t;
      ov[k].s += (ovT[k].s - ov[k].s) * t;
      ov[k].sPerp += (ovT[k].sPerp - ov[k].sPerp) * t;
      ov[k].ux = ovT[k].ux; ov[k].uy = ovT[k].uy;
    }
    ov.headDown += (ovT.headDown - ov.headDown) * t;
    ov.headSway += (ovT.headSway - ov.headSway) * t;
    ov.sway += (ovT.sway - ov.sway) * t;
    ov.jitter += (ovT.jitter - ov.jitter) * t;
    ov.ballDrag.x += (ovT.ballDrag.x - ov.ballDrag.x) * t;
    ov.ballDrag.y += (ovT.ballDrag.y - ov.ballDrag.y) * t;

    /* 捏脸（官方 ballPull 完整管线，四步全按 StableSpinePlayerFixed 的 qr 函数）：
         ① ov.ballDrag 是「屏幕像素」的拖动增量（interact.js 给的，和手势阈值同一套单位）
         ② 换算成世界单位 → 走 Fr() 算出的 outward 方向做 Uf() 方向性限幅
            （朝脸颊外侧最多 maxStretch 40~120 世界单位，侧向 14~50，反向 4~10）
         ③ 世界目标位移 → 骨骼本地位移（worldToLocal 前后取差）
         ④ cs() 48° 锥包络，再写回骨骼
       ★ 少了第②步就是"脸被拽飞"：没有方向性限幅时位移无上限，
         欧若拉那种脸皮绑在整颗头上的模型会直接被拉成尖嘴。 */
    const bm = boneMap.ballMove;
    if (bm && (Math.abs(ov.ballDrag.x) > 0.01 || Math.abs(ov.ballDrag.y) > 0.01)) {
      const g = ballPullGeom();
      if (g) {
        const k = worldPerPixel();
        let dx = ov.ballDrag.x * k;
        let dy = -ov.ballDrag.y * k;             // 屏幕 y 向下、世界 y 向上
        const lim = ballPullLimit(dx, dy, g);
        dx = lim.x; dy = lim.y;
        // 世界位移 → 骨骼本地位移（注意 spine 的 worldToLocal 接收 {x,y} 对象）
        const p1 = bm.worldToLocal({ x: bm.worldX + dx, y: bm.worldY + dy });
        const p0 = bm.worldToLocal({ x: bm.worldX, y: bm.worldY });
        const loc = ballPullEnvelope(bm.x, bm.y, p1.x - p0.x, p1.y - p0.y, g.skipLocalEnvelope);
        bm.x = loc.x; bm.y = loc.y;
      }
    }

    // 摸头/敲头：头部骨骼下沉 + 摆动（头骨是头发/五官的祖先，平移它整颗头都会动）
    const head = boneMap.head;
    if (head) {
      const lim = bounds.h * 0.05;
      const down = clamp(ov.headDown, -lim, lim);
      if (Math.abs(down) > 0.01) head.y -= down;
      const sway = clamp(ov.headSway, -1, 1) * 4;
      if (Math.abs(sway) > 0.01) head.rotation += sway;
    }

    // 摸肚子：不做体型缩放，只让上身轻轻摇摆
    const maxSway = (CONFIG.deform.swayMaxDeg || 3) * clamp(ov.sway, -1, 1);
    if (Math.abs(maxSway) > 0.01) {
      if (boneMap.belly) boneMap.belly.rotation += maxSway;
      if (boneMap.tail) boneMap.tail.rotation -= maxSway * 0.8;
    }

    // 挠痒抖动
    if (ov.jitter > 0.01) {
      const j = ov.jitter;
      if (boneMap.tickle) boneMap.tickle.rotation += Math.sin(ov.time * 42) * j * 4.5;
      if (head) head.rotation += Math.sin(ov.time * 37) * j * 3.2;
      if (boneMap.earL) boneMap.earL.rotation += Math.sin(ov.time * 51) * j * 5;
      if (boneMap.earR) boneMap.earR.rotation += Math.sin(ov.time * 47 + 1.3) * j * 5;
      if (boneMap.tail) boneMap.tail.rotation += Math.sin(ov.time * 44 + 0.7) * j * 7;
    }
  }

  /* ---------------- 顶点变形（核心） ----------------
     顶点缓冲布局：[x, y, r, g, b, a, u, v]，stride = 8，
     坐标是骨架世界坐标，和 zones() 同一套坐标系。
     每个区域做平滑衰减：中心处 100%，边缘 0%，用 smoothstep 过渡。 */
  function vertexTransformer(vertices, numFloats, stride) {
    if (!ready) return;
    DBG.calls++;
    DBG.numFloats = numFloats;
    DBG.stride = stride;
    if (DBG.calls === 1 || DBG.calls % 300 === 0) {
      DBG.sample = [vertices[0], vertices[1], vertices[2], vertices[3]];
    }
    const act = [];
    /* 形变中心沿拖动方向前移 pinchCenterLead（到脸颊外缘）：
       被"抓住"的是脸的外缘，位移量在外缘最大、向脸内衰减；
       腮红比外缘少移动一点，永远留在脸颊里面，不会跑到脸外面。 */
    const leadH = ((CONFIG.deform && CONFIG.deform.pinchCenterLead) || 0) * bounds.h;
    for (const k of ['cheekL', 'cheekR']) {
      const o = ov[k], c = centers[k];
      const moving = Math.abs(o.dx) > 0.05 || Math.abs(o.dy) > 0.05
        || Math.abs(o.s - 1) > 0.002 || Math.abs(o.sPerp - 1) > 0.002;
      if (!moving || c.r <= 0) continue;
      if (leadH > 0) {
        const ul = Math.hypot(o.ux || 0, o.uy || 0);
        if (ul > 1e-6) {
          act.push({ c: { x: c.x + (o.ux / ul) * leadH, y: c.y + (o.uy / ul) * leadH, r: c.r }, o });
          continue;
        }
      }
      act.push({ c, o });
    }
    if (!act.length) return;

    for (let i = 0; i < numFloats; i += stride) {
      const x = vertices[i];
      const y = vertices[i + 1];
      let nx = x, ny = y;
      let touched = false;

      for (let a = 0; a < act.length; a++) {
        const { c, o } = act[a];
        const ddx = x - c.x, ddy = y - c.y;
        const dist = Math.sqrt(ddx * ddx + ddy * ddy);
        if (dist >= c.r) continue;
        const t = 1 - dist / c.r;
        const w = t * t * (3 - 2 * t);        // smoothstep 衰减

        // 各向异性缩放：把偏移量分解成"沿拖动方向"和"垂直方向"两个分量，
        // 沿方向拉长、垂直方向基本不动 —— 这样是"拽出去一条"而不是"鼓成一个圆"
        let ux = o.ux, uy = o.uy;
        const ul = Math.hypot(ux, uy);
        if (ul < 1e-6) { ux = 1; uy = 0; } else { ux /= ul; uy /= ul; }
        const par = ddx * ux + ddy * uy;
        const per = -ddx * uy + ddy * ux;
        const kPar = 1 + (o.s - 1) * w;
        const kPer = 1 + (o.sPerp - 1) * w;
        const np = par * kPar;
        const nq = per * kPer;

        nx = c.x + np * ux - nq * uy + o.dx * w;
        ny = c.y + np * uy + nq * ux + o.dy * w;
        touched = true;
      }

      if (touched) { vertices[i] = nx; vertices[i + 1] = ny; DBG.moved++; }
    }
  }

  function debugInfo() {
    return { ...DBG, centers, ov };
  }

  /** 结构自检（只给调试/验证工具用）：皮肤选择、缺件槽位、离群网格。
      用来在不看图的情况下判断"模型是不是崩了"。 */
  function debugSkeleton() {
    if (!skeleton || !skeletonData) return null;
    const skins = skeletonData.skins.map((s) => s.name);
    const cur = skeleton.skin ? skeleton.skin.name : null;
    const cx = bounds.x + bounds.w / 2, cy = bounds.y + bounds.h / 2;
    const diag = Math.hypot(bounds.w, bounds.h) || 1;
    const missing = [];
    const outliers = [];
    const buf = [];
    /* 捏脸骨骼的本地位置：官方 48° 锥包络是以它为基向量算的，
       如果它接近 (0,0)，包络会退化成"不钳制"，脸就能被拽到任意远 —— 这就是崩坏。 */
    const bm = boneMap.ballMove;
    const ballMove = bm
      ? { name: bm.data ? bm.data.name : null, x: +bm.x.toFixed(2), y: +bm.y.toFixed(2), len: +Math.hypot(bm.x, bm.y).toFixed(2),
          parent: bm.parent ? bm.parent.data.name : null }
      : null;
    for (const slot of skeleton.slots) {
      const att = slot.getAttachment();
      if (!att) { missing.push(slot.data.name); continue; }
      if (typeof att.computeWorldVertices !== 'function') continue;
      const len = att.worldVerticesLength || 0;
      if (!len) continue;
      buf.length = len;
      try { att.computeWorldVertices(slot, 0, len, buf, 0, 2); } catch (e) { continue; }
      let mnx = Infinity, mny = Infinity, mxx = -Infinity, mxy = -Infinity;
      for (let i = 0; i < len; i += 2) {
        if (buf[i] < mnx) mnx = buf[i];
        if (buf[i] > mxx) mxx = buf[i];
        if (buf[i + 1] < mny) mny = buf[i + 1];
        if (buf[i + 1] > mxy) mxy = buf[i + 1];
      }
      if (!Number.isFinite(mnx)) continue;
      const w = mxx - mnx, h = mxy - mny;
      const d = Math.hypot((mnx + mxx) / 2 - cx, (mny + mxy) / 2 - cy);
      // 离群判据：中心离模型中心超过 0.75 倍对角线，或自身尺寸超过 1.6 倍对角线
      if (d > diag * 0.75 || w > diag * 1.6 || h > diag * 1.6) {
        outliers.push(slot.data.name + '(d' + Math.round(d) + ' w' + Math.round(w) + ' h' + Math.round(h) + ')');
      }
    }
    return { skins, skin: cur, slots: skeleton.slots.length, missing, outliers, ballMove };
  }

  /** 只清脸颊形变（非捏脸动作开始时调用，防止跨动作串味） */
  function clearCheekDeform(immediate = true) {
    for (const k of ['cheekL', 'cheekR']) {
      ovT[k].dx = 0; ovT[k].dy = 0; ovT[k].s = 1; ovT[k].sPerp = 1;
      if (immediate) { ov[k].dx = 0; ov[k].dy = 0; ov[k].s = 1; ov[k].sPerp = 1; }
    }
    ovT.ballDrag.x = 0; ovT.ballDrag.y = 0;
    if (immediate) { ov.ballDrag.x = 0; ov.ballDrag.y = 0; }
  }

  /** 官方 ballPull：设置 Character_Ball_Move 骨骼的拖拽目标（世界坐标位移）。
      immediate=true 立即生效（拖拽中）；false 缓动回弹（松手）。 */
  function setBallDrag(x, y, immediate) {
    ovT.ballDrag.x = x; ovT.ballDrag.y = y;
    if (immediate) { ov.ballDrag.x = x; ov.ballDrag.y = y; }
  }

  /** 设置形变目标；immediate=true 时立即生效（拖拽用），否则缓动回弹 */
  function setDeform(key, v, immediate) {
    if (!ovT[key]) return;
    Object.assign(ovT[key], v);
    if (immediate) Object.assign(ov[key], v);
  }

  function setOverride(k, v, immediate) {
    if (!(k in ovT)) return;
    ovT[k] = v;
    if (immediate) ov[k] = v;
  }

  function getOverride(k) { return ov[k]; }

  /* ---------------------------------------------------------- 每帧 */
  /* 关键：每帧先把骨架复位到 setup pose，再让动画状态机应用上去。
     state.apply() 只写"动画里有时间轴的那些骨骼"，没有时间轴的骨骼会保留上一帧的值，
     不复位的话头部下沉/抖动这类叠加量会逐帧累积，表现为头飞走、模型散架。 */
  function update(dt) {
    if (!ready) return;
    state.update(dt);
    skeleton.setToSetupPose();
    state.apply(skeleton);
    applyOverrides(dt);
    skeleton.updateWorldTransform();
    refreshCenters();
  }

  function draw() {
    if (!ready) return;
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    renderer.begin();
    renderer.drawSkeleton(skeleton, true, -1, -1, vertexTransformer);
    renderer.end();
  }

  /* ---------------------------------------------------------- 坐标换算 */
  function worldToScreen(wx, wy) {
    const cw = canvas.clientWidth || 1;
    const ch = canvas.clientHeight || 1;
    return {
      x: ((wx - camView.x) / camView.w) * cw,
      y: (1 - (wy - camView.y) / camView.h) * ch,
    };
  }

  function screenToWorld(sx, sy) {
    const cw = canvas.clientWidth || 1;
    const ch = canvas.clientHeight || 1;
    return {
      x: camView.x + (sx / cw) * camView.w,
      y: camView.y + (1 - sy / ch) * camView.h,
    };
  }

  /* ---------------------------------------------------------- 热区
     官方公式（StableSpinePlayerFixed 的 Hf 函数）给的是**世界单位**：
       cheek : clamp(|ballMove−其父| × 2.0,  34, 58)
       head  : clamp(|pat−tickle| × 0.32,     44, 72)
       belly : clamp(|pat−tickle| × 0.28,     38, 64)
       mouth : 0.085 × bounds.h
     ★ 问题：不同角色模型的**世界尺度差了近 2 倍**（bounds.h 实测 527~995，
       因为官方导出时每个模型的缩放基准不一样），而 cheek/head/belly 用的是
       绝对世界值，屏幕上的热区大小就跟着乱飘 —— 实测 10px~25px 不等，
       所以"在脸颊上点不中，得往脸中间挪"。mouth 用的是比例值，反而一直很稳。
     ★ 修法：把这三个的上下限也换成**按 bounds.h 的比例**（以黄油 bounds.h=676
       为基准把官方世界值换算成比例，黄油的结果与之前完全一致），
       这样任何大小的模型，屏幕上的热区都一样大、都能对准脸颊。 */
  const ZONE_K = {
    //            实际下限(占模型高度比例)   上限
    cheek: { min: 0.135, max: 0.175 },   // → 230px 高的模型上约 31~40px，够点、又不会盖住半张脸
    head:  { min: 0.105, max: 0.145 },   // → 约 24~33px
    belly: { min: 0.100, max: 0.135 },   // → 约 23~31px
  };
  const REF_H = 676;                     // 黄油的 bounds.h，作为官方世界值的基准尺度

  function zoneRadii() {
    const HZ = CONFIG.hitZones;
    const d = (a, b) => {
      const A = boneMap[a], B = b ? boneMap[b] : null;
      return (A && B) ? Math.hypot(A.worldX - B.worldX, A.worldY - B.worldY) : 0;
    };
    /* 先按官方公式算世界值，再把上下限换算成"当前模型高度的比例" */
    const calc = (cfg, key) => {
      if (!cfg || !cfg.a) return 0;
      const raw = d(cfg.a, cfg.b) * cfg.k;
      const k = ZONE_K[key];
      if (!k) return clamp(raw, cfg.min, cfg.max);
      const H = bounds.h || REF_H;
      const lo = Math.max(cfg.min / REF_H, k.min);
      const hi = Math.max(cfg.max / REF_H, k.max);
      return clamp(raw / REF_H * REF_H, lo * H, hi * H);
    };
    return {
      cheek: calc(HZ.cheek, 'cheek'),
      head: calc(HZ.head, 'head'),
      belly: calc(HZ.belly, 'belly'),
    };
  }

  /* 捏脸是否物理有效：
     ① 角色数据里被生成器标成 pinch.ok=false（骨架里脸没绑到 Character_Ball_Move）
     ② 运行时缺 ballMove / ballMoveP 骨骼
     两种情况都不生成脸颊热区 —— 宁可没有热区，也不要"点了有语音没动作"。 */
  /** 捏脸可用的"朝脸颊外侧"方向（屏幕像素单位，已归一化）。
      点脸颊的轻捏、拖拽起始方向都用它 —— 官方只让往外拉。 */
  function pinchOutwardScreen() {
    const g = ballPullGeom();
    if (!g) return null;
    const k = worldPerPixel();
    const sx = g.outwardX / k, sy = -g.outwardY / k;      // 世界 y 向上 → 屏幕 y 向下
    const l = Math.hypot(sx, sy);
    if (!(l > 1e-6)) return null;
    return { x: sx / l, y: sy / l, max: g.maxStretch * k };
  }

  function pinchAvailable() {
    if (CONFIG.pinch && CONFIG.pinch.ok === false) return false;
    if (pinchReason) return false;
    return !!(boneMap.ballMove && boneMap.ballMoveP);
  }

  function zones() {
    if (!ready) return null;
    const H = bounds.h;
    const out = {};
    const R = zoneRadii();

    /* 脸颊热区：只提供官方单侧（屏幕左脸颊，由 Character_Ball_Move 拖拽控制）。
       ★ 圆心必须用**官方那根控制骨骼 Character_Ball_Move**（官方 ks 命中测试就是
         逐骨骼取它自己的世界坐标当圆心），不能用腮红骨骼 S1_Ball_R / Ball_Root ——
         有些角色的腮红骨骼在脸外侧甚至头发边上（Chopi 差 40px），
         圆心一偏，用户就"在脸颊上点不中，得往脸中间挪"。
       没有 Character_Ball_Move 的角色（捏脸已降级）不生成热区。 */
    const bm = boneMap.ballMove;
    if (bm && R.cheek > 0 && pinchAvailable()) out.cheekR = { x: bm.worldX, y: bm.worldY, r: R.cheek };

    /* 头部热区按官方数据：中心 Character_Pat（官方 Hf 函数用的就是它），
       半径 clamp(|pat−tickle|×0.32, 44, 72)。"点空白也敲头"靠
       interact.js 的 pending==='head' 前提和 insideBounds 拦截，不动热区。 */
    const headBone = boneMap.pat || boneMap.headTop;
    if (headBone) out.head = { x: headBone.worldX, y: headBone.worldY, r: R.head };

    const tk = boneMap.tickle;
    if (tk) out.belly = { x: tk.worldX, y: tk.worldY, r: R.belly };

    const mo = boneMap.mouth;
    if (mo) out.mouth = { x: mo.worldX, y: mo.worldY, r: (CONFIG.hitZones.mouth.fixed || 0.085) * H };

    return out;
  }

  function hitTest(wx, wy) {
    const z = zones();
    if (!z) return null;
    let best = null, bestD = Infinity;
    for (const [k, v] of Object.entries(z)) {
      const d = Math.hypot(wx - v.x, wy - v.y) / v.r;
      if (d <= 1 && d < bestD) { bestD = d; best = k; }
    }
    if (!best) return null;
    if (best === 'cheekL' || best === 'cheekR') return 'cheek';
    return best;
  }

  function zoneScreen(name) {
    const cw = canvas.clientWidth || 1;
    const ch = canvas.clientHeight || 1;
    const z = zones();
    if (!z || !z[name]) return { x: cw / 2, y: ch * 0.3, r: 0 };
    const v = z[name];
    const p = worldToScreen(v.x, v.y);
    return { x: p.x, y: p.y, r: (v.r / camView.w) * cw };
  }

  function topScreenY() {
    return worldToScreen(0, bounds.y + bounds.h).y;
  }

  /** 世界坐标点是否落在模型包围盒内（带一点边距），用来挡住"点完全空白处" */
  function insideBounds(wx, wy, margin) {
    const m = margin === undefined ? bounds.h * 0.06 : margin;
    return wx >= bounds.x - m && wx <= bounds.x + bounds.w + m
        && wy >= bounds.y - m && wy <= bounds.y + bounds.h + m;
  }

  function boneWorld(key) {
    const b = boneMap[key];
    return b ? { x: b.worldX, y: b.worldY } : null;
  }

  function resolvedBones() {
    return Object.keys(boneMap).filter((k) => boneMap[k]);
  }

  return {
    init, loadModel, resize,
    update, draw,
    playBase, playOnce, playLoop, playEnd, playRaw, playTimed, playRandomMood, playChain, animName,
    setOverride, getOverride, setDeform, setBallDrag, resetOverrides, clearCheekDeform, boneWorld, resolvedBones, debugInfo,
    worldToScreen, screenToWorld, zones, hitTest, zoneScreen, topScreenY, zoneRadii, insideBounds,
    get setupWorld() { return setupWorld; },
    debugSkeleton, pinchAvailable, ballPullGeom, pinchOutwardScreen,
    get ready() { return ready; },
    get bounds() { return bounds; },
    get animations() { return Object.keys(animMap); },
    /* 当前"基准动作"名（只读，给自测台/探针判断"现在在播什么"用） */
    get currentAnim() { return currentBase; },
    /* 轨道 0 上**真实正在播**的动作名（自动切回待机后这里也会跟着变；探针用） */
    get playingAnim() {
      const e = state && state.getCurrent ? state.getCurrent(0) : null;
      return e && e.animation ? e.animation.name : null;
    },
    get modelName() { return modelDef ? modelDef.name : ''; },
    get modelDef() { return modelDef; },
    get pinchReason() { return pinchReason; },
  };
})();
