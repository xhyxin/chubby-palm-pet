/* ------------------------------------------------------------------
 * config.js —— 共享配置 + 角色注册表 + 角色切换
 *
 * ★ 多角色结构：
 *   · 每个角色的**模型/骨骼/动作/语音/面板**放在 js/characters/<角色>.js
 *   · **全角色通用**的东西（互动热区公式 / 形变 / 手势判定 / 状态数值 / 食物）
 *     放在本文件，这些是官方值，角色文件里不重复写
 *   · CONFIG.applyCharacter(i) 会把第 i 个角色的段"摊平"到 CONFIG 顶层，
 *     这样 pet.js / interact.js / fx.js 等模块完全不用改（它们只认 CONFIG.xxx）
 *
 * 官方互动规格（来自同人站 StableSpinePlayerFixed 的常量，照抄，全角色一致）：
 *   Gt = { ballPull:["Character_Ball_Move"], headPending:["Character_Pat"],
 *          petting:["Character_Pat"], tickling:["Character_Tickle"],
 *          dutchRub:["Character_Pat"] }
 *   Rt = { ballPull:["Touch_Idle"], petting:["Pat_Idle"],
 *          tickling:["Tickle_Idle_1"], dutchRub:["Smash_End_1"] }
 *   On = ["Tickle_Idle_2"]      Ja = ["Smash_End_2"]
 *   pn = { ballPull:["Touch_End"], petting:["Pat_End"],
 *          tickling:["Tickle_End"], dutchRub:["Smash_End_1"] }
 *   官方敲头/摸头判定：按下 ≤0.15s 且位移 ≤8px → 敲头；≥0.2s 且位移 ≥6px → 摸头
 * ------------------------------------------------------------------ */

/* 角色注册表：
 *   · 黄油 / 斯琪娅是手工精修的角色数据（butter.js / skea.js）
 *   · CHAR_GENERATED 是 03_工具\批量生成角色文件.js 从官方数据自动生成的其余角色
 *     （数据来自 spine-manifest + 骨架真解析 + 官方 Voice.json，不手改那个文件）
 * 加角色：往 generated.js 里加一条即可（或直接改 角色配置表.json 后重跑生成器）。
 * const CHARACTERS = [CHAR_BUTTER, CHAR_SKEA].concat(typeof CHAR_GENERATED !== 'undefined' ? CHAR_GENERATED : []); */
const CHARACTERS = [CHAR_BUTTER, CHAR_SKEA]
  .concat(typeof CHAR_GENERATED !== 'undefined' ? CHAR_GENERATED : []);

const CONFIG = {
  /* ================= 角色注册表 ================= */
  characters: CHARACTERS,
  characterIndex: 0,

  /* ================= 共享：互动热区 =================
     官方在 Studio 里用四根骨骼算半径（StableSpinePlayerFixed 的 Hf 函数）：
       cheek : 中心 Character_Ball_Move，半径 = clamp(|ballMove−ballMove父| × 2,   34, 58)
       head  : 中心 Character_Pat，        半径 = clamp(|pat−tickle| × 0.32, 44, 72)
       belly : 中心 Character_Tickle，     半径 = clamp(|pat−tickle| × 0.28, 38, 64)
     ★ 这些是官方给定的**世界单位**。不同角色模型的世界尺度差近 2 倍
       （bounds.h 实测 527~995），所以 pet.js 会把上下限再按角色实际高度
       归一化一次（见 pet.js 的 ZONE_K），保证屏幕上热区一样大、一样对准脸颊。
       公式本身不动。 */
  hitZones: {
    cheek: { a: 'ballMove', b: 'ballMoveP', k: 2.0,  min: 34, max: 58 },
    head:  { a: 'pat',      b: 'tickle',    k: 0.32, min: 44, max: 72 },
    belly: { a: 'tickle',   b: 'pat',       k: 0.28, min: 38, max: 64 },
    mouth: { a: 'mouth',    b: null,        k: 0,    min: 0,  max: 0, fixed: 0.085 },
  },
  /* 捏脸只提供官方单侧：屏幕左脸颊（cheekR = Character_Ball_Move 控制侧，骨骼拖拽） */
  mirrorCheek: false,

  /* ================= 共享：官方敲头/摸头判定阈值（官方值，不要动） ================= */
  gesture: {
    smashMaxMs: 150,      // 官方 Rf = 0.15s
    smashMaxPx: 8,        // 官方 Ff = 8px
    patMinMs: 200,        // 官方 is = 0.2s
    patMinPx: 6,          // 官方 rs = 6px
    dragThreshold: 6,
    /* ★ 捏脸专用门槛（第二十八轮，用户要求）：
       "只是点击一下脸颊"绝不能进捏脸、更不能播捏脸语音。
       官方判定的 6px 只够区分"点"和"拖"，对触屏/触控板来说手一抖就过了，
       所以捏脸单独要求**更大的位移**才算"真的在拽"。
       必须 < 自测台每次 pointermove 的步长（300/16 = 18.75px），否则回归会失败。 */
    pinchMinPx: 14,
    tickleClicks: 4,
    tickleWindowMs: 1400,
  },

  /* ================= 共享：形变 =================
     ★ 关键：把脸"拽出去"的主力是 pinchMaxShift（整体平移 o.dx），不是 pinchStretch。
       官方侧走"拖 Character_Ball_Move 骨骼"，形状由模型权重天然决定；
       这几个顶点变形参数只影响镜像侧（本项目已下线，mirrorCheek:false）。 */
  deform: {
    cheekRadius: 0.20,
    pinchCenterLead: 0.06,
    pinchMaxDrag: 0.30,
    pinchMaxShift: 0.20,
    pinchStretch: 1.0,
    pinchPerp: 0.45,
    swayMaxDeg: 3.2,
    headPress: 0.028,
  },

  /* ================= 共享：官方动作时序 ================= */
  minStartDuration: 1.2,    // 官方 os 常量：摸肚子开始阶段最短 1.2 秒
  minDuringDuration: 0.45,  // 官方 Lf 常量

  /* ================= 共享：状态数值 ================= */
  state: {
    startMood: 80, startFull: 70, startBond: 0,
    decayPerMin: { mood: 1.6, full: 2.4 },
    gain: { pat: 2.0, pinch: 1.4, bonk: 1.0, tickle: 2.4, belly: 2.2, feedFull: 22, feedMood: 5 },
    bondGain: { pat: 1, pinch: 1, bonk: 1, tickle: 2, belly: 2, feed: 3 },
    lowMood: 30, hungryFull: 25,
  },

  /* ★ 第三十一轮：旧的 emoji 假食物已删除。
     喂食改用游戏内 91 种真实食物 + 每角色喜好，数据在 js/food-data.js（FOOD_DATA），
     由 03_工具\生成食物数据.py 从用户的食物图鉴工具（data.js）生成。 */

  /* ================= 以下是"当前角色"的段，由 applyCharacter() 填 ================= */
  id: '', name: '', en: '', desc: '', tag: '', art: {},
  models: [], bones: {}, pinch: {}, anim: {}, actions: {},
  skinCandidates: [], voiceLang: 'ja', voiceLangs: [], voiceDurations: {},
  pokeVoice: [], upsetVoice: [], hungryVoice: [], greetVoice: [], moodActs: [],
  animPanel: [], animLabel: {}, voiceForAnim: {}, voiceForAnimSeries: {},

  /** 取第 i 个角色（越界会自动夹回范围内） */
  character(i) {
    const list = this.characters;
    const k = Math.max(0, Math.min(list.length - 1, i | 0));
    return list[k];
  },

  /**
   * 把第 i 个角色的段摊平到 CONFIG 顶层。
   * ★ 摊平之后 pet.js / interact.js / fx.js 完全不需要知道"多角色"这件事。
   * @returns {object} 被激活的角色对象
   */
  applyCharacter(i) {
    const c = this.character(i);
    this.characterIndex = this.characters.indexOf(c);
    const keys = ['id', 'name', 'en', 'desc', 'tag', 'art',
      'models', 'bones', 'pinch', 'anim', 'actions', 'skinCandidates',
      'voiceLang', 'voiceLangs', 'voiceDurations',
      'pokeVoice', 'upsetVoice', 'hungryVoice', 'greetVoice', 'moodActs',
      'animPanel', 'animLabel', 'voiceForAnim', 'voiceForAnimSeries'];
    for (const k of keys) {
      // 深拷贝一份，避免运行时改到角色原始数据（例如切换外观时改 models 里的字段）
      this[k] = c[k] === undefined ? (Array.isArray(this[k]) ? [] : {}) : JSON.parse(JSON.stringify(c[k]));
    }
    /* ★ 动作中文名：官方动作名对所有角色是同一套命名（Pat_Idle 永远是被摸头），
       所以公共表兜底，角色自己写的优先。generated.js 里的角色 animLabel 为空，
       全靠这张公共表 —— 没有它就是满屏英文动作名。 */
    const common = (typeof ANIM_LABEL_COMMON !== 'undefined' && ANIM_LABEL_COMMON) || {};
    this.animLabel = Object.assign({}, common, this.animLabel || {});
    return c;
  },
};

/* 默认激活第一个角色（黄油） */
CONFIG.applyCharacter(0);
