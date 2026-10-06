/* ------------------------------------------------------------------
 * interact.js —— 交互逻辑（完全对齐官方 Studio 互动模式）
 *
 * 官方四种互动（Gt / Rt / pn 常量）：
 *   ballPull 捏脸   骨骼 Character_Ball_Move  动作 Touch_Idle  → Touch_End
 *   petting  摸头   骨骼 Character_Pat        动作 Pat_Idle    → Pat_End
 *   dutchRub 敲头   骨骼 Character_Pat        动作 Smash_End_1 → Smash_End_2
 *   tickling 摸肚子 骨骼 Character_Tickle     动作 Tickle_Idle_1 → _2 → Tickle_End
 *
 * 注意：官方的 Character_Tickle 骨骼位置在肚子上（高度 0.45），
 * 所以 tickling 就是"摸肚子"，那套 开始→中间→大笑收尾 的动作序列也是摸肚子专用的。
 *
 * 官方摸头/敲头判定（jf 函数）：
 *   按下 ≤150ms 且位移 ≤8px  → 敲头
 *   ≥200ms 且位移 ≥6px       → 摸头
 * ------------------------------------------------------------------ */
const Interact = (() => {
  let canvas;
  let hooks = {};
  let mode = null;             // null | 'pinch' | 'pat' | 'belly'
  let pending = null;
  let pointerId = null;
  let pointerDown = false;
  let start = { x: 0, y: 0, t: 0, world: null };
  let maxDist = 0;
  let moved = false;
  let started = false;
  let pinchSide = 'cheekR';
  let bellyTimers = [];
  let patTimers = [];
  let idleFrames = 0;          // 指针已抬起但动作没收尾的帧数（看门狗用）
  let smashCombo = 0;
  let smashComboAt = 0;
  const clickTimes = [];

  /* ★ 敲头语音防抖（第二十七轮重做，修"好痛台词不稳定"）：
     用户报"敲头时说了哎呀，敲完后本该说专属敲头台词（好痛），却没说；
     再敲几次才偶尔试出来"。根因：
       旧实现在每一次 doSmash() 里都先 clearSmashVoice() 把**待播的 voiceEnd 干掉**，
       于是"哎呀(260ms) → 好痛(880ms)"这条链，只要用户在 880ms 内又敲一下，
       上一轮的"好痛"就被清掉、重新排——连敲时"好痛"永远等不到播出去的时机。
     新策略：
       · 每一击都立刻播"叫一声"（voice），保证敲一下就有反馈；
       · "好痛"（voiceEnd）由**一条常驻尾巴定时器**负责，敲击只把它**往后推**（防抖），
         不会直接丢掉；只要停手，它必定在 SMASH_VOICE_TAIL_MS 后播一次。
       · 两条语音各自带 seq 校验：只有被更新的那轮才播，避免叠音。 */
  let smashVoiceTimers = [];
  let smashVoiceSeq = 0;             // 每轮敲头自增，回调里比对，过期的不播

  function clearSmashVoice() {
    smashVoiceTimers.forEach(clearTimeout);
    smashVoiceTimers = [];
  }
  function clearSmashVoiceEnd() {
    if (smashEndTimer) { clearTimeout(smashEndTimer); smashEndTimer = null; }
  }
  let smashEndTimer = null;
  /** 排一条"本轮敲头"的语音；若期间 seq 变了（被后续敲头取代）就自动作废 */
  function smashSpeak(keys, seq, delayMs) {
    if (!keys || !keys.length) return;
    const t = setTimeout(() => {
      if (seq !== smashVoiceSeq) return;      // 已被后续敲头取代
      speakFirst(keys);
    }, delayMs);
    smashVoiceTimers.push(t);
  }

  const G = () => CONFIG.gesture;

  function skinSuffix() {
    const d = Pet.modelDef;
    return (d && d.voiceSkin) || '';
  }

  function speak(keys) {
    const r = Voice.play(keys, skinSuffix());
    if (r && r.text && hooks.onSay) hooks.onSay(r.text);
    return r;
  }

  /* ★ 敲头专用：按候选顺序播"第一个可解析"的键，不做随机。
     敲头的 voice（叫一声）和 voiceEnd（好痛）是**优先级候选链**，不是"同一句话的变体"；
     走 Voice.play 的随机池的话，候选链里两条都存在时"好痛"有 50% 概率播成"哎呀"
     （第二十九轮定位的"好痛不稳定"主根因，133 个生成角色的 voiceEnd 都带 End1 兜底）。 */
  function speakFirst(keys) {
    const r = Voice.playFirst(keys, skinSuffix());
    if (r && r.text && hooks.onSay) hooks.onSay(r.text);
    return r;
  }

  function say(text) { if (hooks.onSay) hooks.onSay(text); }

  function reward(kind, food) {
    PetState.reward(kind, food);
    if (hooks.onState) hooks.onState();
  }

  function sfx(spec) {
    if (!spec) return;
    const list = Array.isArray(spec) ? spec : [spec];
    const pick = list[Math.floor(Math.random() * list.length)];
    Voice.playSfx(pick.name, pick.volume);
  }

  function clearBellyTimers() {
    bellyTimers.forEach(clearTimeout);
    bellyTimers = [];
  }

  function clearPatTimers() {
    patTimers.forEach(clearInterval);
    patTimers = [];
  }

  function dragVec(dwx, dwy, maxD) {
    const len = Math.hypot(dwx, dwy);
    const t = Math.min(1, len / maxD);
    const nx = len > 1e-6 ? dwx / len : 0;
    const ny = len > 1e-6 ? dwy / len : 0;
    return { t, nx, ny };
  }

  /* ---------------------------------------------------------- 捏脸
     官方 ballPull。拖拽过程中只有音效，**语音等松手弹回之后再播**。 */
  function beginPinch() {
    Pet.clearCheekDeform();
    mode = 'pinch';
    const A = CONFIG.actions.pinch;
    Pet.playLoop(A.loop);
    Voice.stop();
    sfx(A.sfxStart);
  }

  /* 传入的是**屏幕像素**位移（和手势阈值同一套单位）。
     换算世界单位、方向性限幅、48° 锥包络全在 pet.js 里按官方四步做，
     这里不再自己乘任何系数 —— 之前自己乘 H×0.2 各向同性放行，
     正是欧若拉那种模型被拉成尖嘴的原因。 */
  function applyPinch(dsx, dsy) {
    if (dsx === 0 && dsy === 0) { Pet.setBallDrag(0, 0, true); return; }
    Pet.setBallDrag(dsx, dsy, true);
  }

  /* 点（而不是拖）脸颊 = 官方的一次"轻捏"：
     主动给一个**朝脸颊外侧**的真实位移，捏一下再回弹。
     ★ 之前这里是"只播语音+音效、脸完全不动"，因为纯点击没有位移量 ——
       官方 Uf() 会把方向不正的拖动限到 inwardStretch(4~10) 几乎为零，
       所以必须自己给朝外方向的量，动作和语音才是配套的。 */
  let pinchTimer = null;
  function clearAuto() { if (pinchTimer) { clearTimeout(pinchTimer); pinchTimer = null; } }
  function autoPinch() {
    /* 先确认官方捏脸管线可用（能算出 outward 方向）；不可用就直接不响应，
       免得出现"播了拉脸语音、脸却纹丝不动"。 */
    const o = Pet.pinchOutwardScreen();
    if (!o || !(o.max > 1e-3)) return;
    beginPinch();
    // 官方限幅后最远 g.maxStretch 世界单位，这里先给足，由 pet.js 钳到官方上限
    Pet.setBallDrag(o.x * o.max * 0.85, o.y * o.max * 0.85, true);
    clearAuto();
    pinchTimer = setTimeout(() => { clearAuto(); if (mode === 'pinch') finish(); }, 620);
  }

  /* ---------------------------------------------------------- 摸头
     官方 petting。**语音等松手后再播** —— 想摸多久都行，不会被语音打断。 */
  function beginPat() {
    Pet.clearCheekDeform();
    mode = 'pat';
    const A = CONFIG.actions.pat;
    Pet.playLoop(A.loop);
    Voice.stop();                       // 先停掉上一条语音
    sfx(A.sfx);
    const z0 = Pet.zoneScreen('head');
    if (A.fx) Fx.heart(z0.x, z0.y, A.fx.duration);
    // 抚摸音效 + 爱心按固定间隔反复触发（官方 _r = 0.5s）
    patTimers.push(setInterval(() => {
      if (mode !== 'pat') return;
      sfx(A.sfx);
    }, A.sfxIntervalMs || 520));
    patTimers.push(setInterval(() => {
      if (mode !== 'pat') return;
      const z = Pet.zoneScreen('head');
      if (A.fx) Fx.heart(z.x, z.y, A.fx.duration);
    }, A.fxIntervalMs || 900));
  }

  function applyPat(dwx, dwy, H) {
    const { t: sway } = dragVec(dwx, 0, H * 0.22);
    const { t: press } = dragVec(0, dwy, H * 0.22);
    Pet.setOverride('headSway', Math.sign(dwx) * sway, true);
    Pet.setOverride('headDown', H * CONFIG.deform.headPress * (0.35 + press * 0.65), true);
  }

  /* ---------------------------------------------------------- 敲头（爆栗）
     官方序列：Smash_End_1 → Smash_End_2 → Idle 依次播完。
     敲击音效/特效每一下都出；**语音做防抖** ——
     短时间连敲 N 下，只在**最后一次**敲头后播一遍（敲下去一声 + 哭了那一声）。

     ★ 实现要点：语音不能挂在 playChain 的 onStep 里"立刻"播 ——
       连敲时每一下都会 onStep(0)，4 下就是 4 条叠音（这就是用户报的 bug）。
       所以语音改由**独立的防抖尾巴**排：
         · 每敲一下，清掉上一轮排的语音定时器；
         · 重新排一条"延迟 SMASH_VOICE_TAIL_MS 后播"的定时器；
         · 只有在这段时间内没有新敲击，这条才真的播出去。
       两条语音的间隔固定（voice 在前、voiceEnd 在后），保证听感仍是
       "叫一声 → 哭一声"，而不是混在一起。 */
  const SMASH_VOICE_TAIL_MS = 300;   // 停手后多久算"最后一下"（比 combo 窗口短）
  const SMASH_VOICE_GAP_MS = 560;    // 第一条语音("哎呀")到第二条("好痛")的间隔

  function doSmash() {
    Pet.clearCheekDeform();
    const A = CONFIG.actions.bonk;
    const now = performance.now();
    if (now - smashComboAt < 1100) smashCombo = Math.min(4, smashCombo + 1);
    else smashCombo = 1;
    smashComboAt = now;

    const strong = smashCombo >= 3;
    const chain = [Pet.animName('smash'), Pet.animName('smash2')].filter(Boolean);

    /* 音效 + 特效每一下都出（打击感靠这个，不能防抖） */
    Voice.playSfx(strong ? 'SFX_DutchRub_Max' : 'SFX_DutchRub_Default', strong ? 0.68 : 0.62);
    const z = Pet.zoneScreen('head');
    Fx.dutchRub(z.x, z.y, smashCombo, (A.fx && A.fx.duration) || 1180);

    /* 动作链照常每一下都重播（敲一下动一下） */
    Pet.playChain(chain, 'idle');

    /* ★ 语音（第二十七轮重做）：
       ① 这一击的"叫一声"（voice）立即播 —— 但先停掉正在响的旧语音，避免叠音；
       ② "好痛"（voiceEnd）排到"停手之后"：每敲一下把定时器**往后推**（不丢弃），
          所以只要停手就能稳定听到，不会被下一次敲头清掉。 */
    const seq = ++smashVoiceSeq;
    clearSmashVoice();                    // 只清"叫一声"那条（会被新一击取代）
    Voice.stop();                         // 停掉上一声，避免两条叠着
    smashSpeak(A.voice, seq, 0);          // 敲下去：立刻"哎呀"

    clearSmashVoiceEnd();                 // 重排"好痛"尾巴（推后，不丢弃）
    smashEndTimer = setTimeout(() => {
      smashEndTimer = null;
      if (seq !== smashVoiceSeq) return;  // 之后又敲了 → 由更新的那轮负责
      if (!A.voiceEnd || !A.voiceEnd.length) return;
      speakFirst(A.voiceEnd);             // 敲完：专属"好痛"（确定性取第一个可用键）
    }, SMASH_VOICE_TAIL_MS + SMASH_VOICE_GAP_MS);

    reward('bonk');
  }

  /* ---------------------------------------------------------- 摸肚子
     官方 tickling：相位切换由"语音时长"驱动，且开始阶段最短 1.2 秒（官方 os 常量）。
     黄油的数据：TickleStart1 = 0.822s，TickleDuring1 = 2.659s。
     松手后不立刻收尾，等当前相位播完再进 Tickle_End（和官方一致）。 */
  let bellyPhase = null;        // 'start' | 'during'
  let bellyEnding = false;

  function beginBelly() {
    Pet.clearCheekDeform();
    clearBellyTimers();
    mode = 'belly';
    bellyEnding = false;
    const A = CONFIG.actions.belly;
    Pet.playLoop(A.loop);
    sfx(A.sfx);
    speak(A.voice);                     // 开始阶段：哈哈哈！
    reward('belly');
    scheduleBellyPhase('start');
  }

  function scheduleBellyPhase(phase) {
    const A = CONFIG.actions.belly;
    const isStart = phase === 'start';
    const key = Voice.resolveKey(isStart ? A.voice : A.voiceEnd, skinSuffix());
    /* 读不到音频时长时的兜底值：优先用 config.voiceDurations 里该角色实测的时长
       （Skea：TickleStart1 = 0.885s / TickleDuring1 = 2.603s，
        由 03_工具\读取ogg时长.js 量出来的），再退回官方黄油表 0.822 / 2.659。 */
    const vd = CONFIG.voiceDurations || {};
    const fallback = (key && vd[key]) || (isStart ? 0.822 : 2.659);
    const minMs = (isStart ? (CONFIG.minStartDuration || 1.2)
                           : (CONFIG.minDuringDuration || 0.45)) * 1000;
    bellyPhase = phase;

    Voice.durationOf(key).then((d) => {
      if (mode !== 'belly' || bellyPhase !== phase) return;
      const ms = Math.max(minMs, (d || fallback) * 1000);
      bellyTimers.push(setTimeout(() => {
        if (mode !== 'belly' || bellyPhase !== phase) return;
        if (isStart) {
          Pet.playLoop(A.loop2);
          sfx(A.sfx);
          speak(A.voiceMid);          // 开始后：好痒呀！！
          scheduleBellyPhase('during');
        } else {
          endBelly();                 // 收尾：Tickle_End 大笑
        }
      }, ms));
    });
  }

  function endBelly() {
    if (bellyEnding) return;
    bellyEnding = true;
    clearBellyTimers();
    const A = CONFIG.actions.belly;
    Pet.playEnd(A.end);        // Tickle_End：大笑收尾
    speak(A.voiceEnd);         // 好痒呀！！
    mode = null;
    pending = null;
    started = false;
    setTimeout(() => { bellyEnding = false; }, 120);
  }

  /* ---------------------------------------------------------- 结束 */
  function finish() {
    clearAuto();
    // 摸肚子：官方是"一旦开始就把整段播完"（开始→中间→大笑收尾），松手不会中断，
    // 所以这里直接返回，由序列自己的定时器收尾。
    if (mode === 'belly') return;

    clearBellyTimers();
    if (mode === 'pinch') {
      const A = CONFIG.actions.pinch;
      // 立刻复位，脸弹回去；语音等弹回之后再播
      Pet.setDeform('cheekL', { dx: 0, dy: 0, s: 1, sPerp: 1 }, true);
      Pet.setDeform('cheekR', { dx: 0, dy: 0, s: 1, sPerp: 1 }, true);
      Pet.setBallDrag(0, 0, false);       // 官方骨骼拖拽：缓动回弹（弹簧感）
      Pet.playEnd(A.end);
      sfx(A.sfxEnd);
      setTimeout(() => speak(A.voice), 300);
      reward('pinch');
    } else if (mode === 'pat') {
      clearPatTimers();
      Pet.setOverride('headDown', 0, true);
      Pet.setOverride('headSway', 0, true);
      Pet.playEnd(CONFIG.actions.pat.end);
      speak(CONFIG.actions.pat.voice);      // 摸完松手才说话
      reward('pat');
    }
    mode = null;
    pending = null;
    started = false;
  }

  /* ---------------------------------------------------------- 点击 */
  /* ★ 第二十七轮修"点一下脸颊上方也会触发捏脸"：
     用户要求捏脸**只在两种情况**触发 ——
       ① 按住脸颊往外拽（拖拽，走 onMove → beginPinch）；
       ② 点底部的「🤏 捏脸」按钮（main.js 直接调 Interact.autoPinch）。
     所以这里**删掉了 `zone === 'cheek'` → autoPinch() 这条捷径**：
     轻点脸颊不再自动捏，而是走普通"戳一下"（叫声 + 表情），
     和点身体其他地方一致。 */
  function tapAction(zone) {
    if (zone === 'head') { doSmash(); return; }
    if (zone === 'mouth') {
      Pet.playOnce('surprise');
      speak(CONFIG.hungryVoice);
      if (hooks.onWantFood) hooks.onWantFood();
      return;
    }
    if (zone === 'belly') {
      // 点肚子 = 开始摸肚子（连点会更快进入"中间"阶段）
      beginBelly();
      return;
    }
    if (PetState.isUpset() && Math.random() < 0.45) {
      Pet.playOnce('angry');
      speak(CONFIG.upsetVoice);
      return;
    }
    Pet.playRandomMood(['happy', 'surprise', 'taunt', 'serious'], 'idle');
    speak(CONFIG.pokeVoice);
  }

  /* ---------------------------------------------------------- 指针事件 */
  function localPos(e) {
    const r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function onDown(e) {
    if (!Pet.ready) return;
    if (e.button !== undefined && e.button !== 0) return;
    if (mode === 'belly') return;    // 摸肚子序列播放中，不打断

    const p = localPos(e);
    const w = Pet.screenToWorld(p.x, p.y);
    let zone = Pet.hitTest(w.x, w.y);

    /* ★ 捏脸的额外门槛：热区圆心现在对准官方 Character_Ball_Move（就在脸颊上），
       但有些角色脸颊外侧紧挨着头发/装饰，热区边缘仍可能压到头发或空白。
       所以捏脸要求落点**确实在模型包围盒内**（且留一点余量），
       避免"摸到头发/左边空白也触发拉脸语音、脸却不动"。 */
    if (zone === 'cheek' && !Pet.insideBounds(w.x, w.y, Pet.bounds.h * 0.02)) zone = null;

    pointerId = e.pointerId;
    pointerDown = true;
    idleFrames = 0;
    start = { x: p.x, y: p.y, t: performance.now(), world: w };
    maxDist = 0;
    moved = false;
    started = false;
    pending = zone;
    if (zone === 'cheek') pinchSide = cheekSideOf(w);
    canvas.classList.add('grabbing');
  }

  function cheekSideOf(world) {
    /* 捏脸只提供官方单侧：cheekR（屏幕左脸颊，Character_Ball_Move 控制侧） */
    return 'cheekR';
  }

  function onMove(e) {
    if (!Pet.ready || pointerId === null || e.pointerId !== pointerId) return;
    if (mode === 'belly') return;

    const p = localPos(e);
    const dx = p.x - start.x;
    const dy = p.y - start.y;
    const dist = Math.hypot(dx, dy);
    if (dist > maxDist) maxDist = dist;
    if (!moved && dist > G().dragThreshold) moved = true;
    if (!moved) return;

    const H = Pet.bounds.h;
    const wNow = Pet.screenToWorld(p.x, p.y);
    const dwx = wNow.x - start.world.x;
    const dwy = wNow.y - start.world.y;

    if (!started) {
      started = true;
      if (pending === 'cheek') {
        /* ★ 第二十八轮（用户报"点一下脸颊还是会触发捏脸语音"）：
           捏脸必须"真的把脸颊拽出去"才算，位移不够就**不算开始**，
           退回"还没开始"的状态；用户继续拖到够远时再进入捏脸。
           这样"轻点/手抖"只会走普通戳一下（tapAction），不会播捏脸语音。 */
        if (dist < (G().pinchMinPx || 0)) { started = false; return; }
        beginPinch();
      }
      else if (pending === 'head') beginPat();
      else if (pending === 'belly') beginBelly();
      else { started = false; return; }
    }

    /* 捏脸吃屏幕像素（官方 ballPull 的输入单位就是画布像素），
       摸头/摸肚子吃世界单位（要按模型高度换算成"按下去多少"）。 */
    if (mode === 'pinch') applyPinch(dx, dy);
    else if (mode === 'pat') applyPat(dwx, dwy, H);
  }

  function onUp(e) {
    if (pointerId === null) return;
    if (e && e.pointerId !== undefined && e.pointerId !== pointerId && e.buttons !== 0) return;

    pointerDown = false;
    idleFrames = 0;
    canvas.classList.remove('grabbing');
    const wasStarted = started;
    const dt = performance.now() - start.t;
    const Gx = G();

    if (mode === 'belly') { pointerId = null; finish(); return; }

    // 官方判定：按下 ≤150ms 且位移 ≤8px → 敲头
    // ★ 但前提是"按下点在头部热区内"（pending === 'head'）——
    //   之前没检查区域，在网页任何空白处快速点一下都会触发敲头。
    if (!wasStarted && pending === 'head' && dt <= Gx.smashMaxMs && maxDist <= Gx.smashMaxPx) {
      pointerId = null;
      mode = null; pending = null;
      doSmash();
      return;
    }
    if (wasStarted) { pointerId = null; finish(); return; }

    const zone = pending;
    pointerId = null;
    pending = null;
    // 点完全空白的区域（不在任何热区、也不在模型身上）：直接忽略，不做任何反应
    if (!zone && start.world && !Pet.insideBounds(start.world.x, start.world.y)) return;
    tapAction(zone);
  }

  /** 看门狗：每帧调用。指针已抬起但动作没收尾就强制结束，避免形变残留 */
  function tick() {
    if (!mode || mode === 'belly') return;
    if (pointerDown) { idleFrames = 0; return; }
    idleFrames++;
    if (idleFrames > 20) finish();
  }

  /* ---------------------------------------------------------- 喂食 */
  /* 喂食的"时长补排"令牌：连着喂两次时，只有最后一次的异步回调算数 */
  let feedToken = 0;

  /* ★ 第三十一轮：食物换成 91 种游戏食物（js/food-data.js），按"该角色对此食物的喜好"结算：
     喂完弹喜好图标 + 开心/伤心表情。
     ★ 第三十四轮（用户要求）：**取消饱食度/心情等后台数值**——喂多少都吃，没有"吃不下"的判定，
       FEED_REWARD 数值表随之删除。 */
  function prefOfCurrent(foodId) {
    try {
      if (typeof FOOD_DATA === 'undefined') return 'plain';
      const p = FOOD_DATA.prefs[CONFIG.id];
      if (!p) return 'plain';
      if (p.love.indexOf(foodId) >= 0) return 'love';
      if (p.like.indexOf(foodId) >= 0) return 'like';
      if (p.hate.indexOf(foodId) >= 0) return 'hate';
      return 'plain';
    } catch (e) { return 'plain'; }
  }

  function feed(food, dropX, dropY) {
    const mouth = Pet.zoneScreen('mouth');
    const r = canvas.getBoundingClientRect();
    const dist = Math.hypot(dropX - (r.left + mouth.x), dropY - (r.top + mouth.y));
    const ok = dist < Math.max(80, Pet.bounds.h * 0.16);

    if (!ok) {
      Pet.playOnce('taunt');
      say(window.I18N ? I18N.t('bubble.feedWhere') : '食物要放到嘴边呀～');
      return false;
    }
    /* ★ 第二十八轮（用户报"喂食后语音还没结束动作已经结束了"）：
       吃动作循环播到语音播完再去待机；
       ★ 第三十一轮：语音一结束就回调 hooks.onFed（弹喜好图标 + 开心/伤心表情）。 */
    const pref = prefOfCurrent(food && food.id);
    const feedKeys = CONFIG.actions.feed.voice;
    const endKey = Voice.resolveKey(feedKeys, skinSuffix());
    const known = Voice.durationSync(endKey);
    const ms = Math.max(2600, (known ? known * 1000 : 3200) + 300);
    const eatAnim = Pet.playTimed(CONFIG.actions.feed.once, ms, 'idle');
    const token = ++feedToken;
    /* 收尾（只走一次）：主路径=语音自然播完；兜底=超时定时器（无头/音频被拦时不至于没有喜好结算） */
    let fedDone = false;
    const finishFeed = () => {
      if (fedDone || token !== feedToken) return;
      fedDone = true;
      if (Pet.currentAnim === eatAnim) Pet.playBase('idle');
      if (hooks.onFed) hooks.onFed(food, pref);
    };
    const res = speak(feedKeys);
    Voice.onEnded((res && res.key) || endKey, finishFeed);
    setTimeout(finishFeed, ms + 400);
    reward('feed');
    if (hooks.onFeed) hooks.onFeed(food);
    return true;
  }

  /* ---------------------------------------------------------- 自动互动 */
  let autoTimer = null;
  function setAuto(on) {
    if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
    if (!on) return;
    autoTimer = setInterval(() => {
      if (!Pet.ready || mode) return;
      /* ★ 第三十四轮：后台数值（饱食/心情）已按用户要求取消，
         自动待机就是纯卖萌：随机表情 + 偶尔搭话。 */
      Pet.playRandomMood(CONFIG.moodActs, 'idle');
      if (Math.random() < 0.35) speak(CONFIG.pokeVoice);
    }, 9000);
  }

  /** ★ 强制中断当前互动（换角色 / 换外观 / 重置时调用）。
      和 finish() 的区别：finish() 会走正常的收尾动作与语音，
      而且摸肚子是"故意不中断"的；abort() 则**立刻**把状态清干净。
      不做这一步的话：摸肚子放到一半去换角色，`mode` 会一直卡在 'belly'
      （onDown 开头 `if (mode === 'belly') return`），新角色点哪都没反应。 */
  function abort() {
    clearAuto();
    clearBellyTimers();
    clearPatTimers();
    clearSmashVoice();
    clearSmashVoiceEnd();
    feedToken++;                      // 让喂食的异步补排作废
    bellyEnding = false;
    bellyPhase = null;
    mode = null;
    pending = null;
    started = false;
    moved = false;
    pointerDown = false;
    pointerId = null;
    idleFrames = 0;
    if (canvas) canvas.classList.remove('grabbing');
    Pet.clearCheekDeform(true);
    Pet.resetOverrides();
  }

  function attach(el, h) {
    canvas = el;
    hooks = h || {};
    canvas.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('pointercancel', onUp);
    window.addEventListener('blur', () => { if (mode) { if (mode === 'belly') endBelly(); else finish(); } });
    document.addEventListener('visibilitychange', () => {
      /* ★ 第五十轮：切后台要**彻底收干净**，不只是结束动作 ——
         敲头语音尾巴（smashEndTimer）、摸肚子序列、摸头音效这些定时器
         如果留着，会在后台继续排期、切回时集中触发（一顿一顿的卡）。
         abort() 幂等，随便调。 */
      if (document.hidden) abort();
    });
  }

  return {
    attach, feed, setAuto, tick, finish, abort,
    doSmash, beginPinch, beginPat, beginBelly, autoPinch,
    /* 切角色 / 换外观时清掉待播的敲头语音（叫一声 + 好痛尾巴都要清） */
    clearSmashVoice() { clearSmashVoice(); clearSmashVoiceEnd(); },
    beginTickle: beginBelly,          // 兼容旧调用
    get mode() { return mode; },
  };
})();
