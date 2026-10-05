/* ------------------------------------------------------------------
 * characters/butter.js —— 角色数据：黄油（Butter）
 *
 * 一个角色 = 一个这样的文件。加新角色只要：
 *   1. 加这个文件（照着抄，改模型/骨骼/动作/语音）
 *   2. 在 config.js 的 CHARACTERS 注册表里加一行
 *   3. index.html 里加一行 <script>
 *
 * ★ 共享部分（热区公式 / 形变参数 / 手势判定 / 状态数值 / 食物）在 config.js 里，
 *   这些是**官方值、全角色通用**，角色文件里不要再写一遍。
 * ------------------------------------------------------------------ */
const CHAR_BUTTER = {
  id: 'Butter',
  name: '黄油',
  en: 'Butter',
  desc: '犬系兽人 · 5 套外观',
  tag: '🦴',

  /* 立绘（多角色下必须按角色分目录，因为文件名全角色同名） */
  art: {
    avatar:  'assets/art/Butter/phone-avatar.png',
    present: 'assets/art/Butter/present.png',
    album:   'assets/art/Butter/album-strict.webp',
  },

  skinCandidates: ['Normal', 'default'],

  /* 可切换的外观 */
  models: [
    { id: 'Butter',         dir: 'assets/spine/Butter',         name: '默认',     desc: '基础外观', voiceSkin: '' },
    { id: 'ButterSkin1',    dir: 'assets/spine/ButterSkin1',    name: '皮肤 1',   desc: '泳装',     voiceSkin: '_Skin1' },
    { id: 'ButterSkin2',    dir: 'assets/spine/ButterSkin2',    name: '皮肤 2',   desc: '文学少女', voiceSkin: '_Skin2' },
    { id: 'ButterSkin3',    dir: 'assets/spine/ButterSkin3',    name: '皮肤 3',   desc: '女仆',     voiceSkin: '_Skin3' },
    { id: 'Pet_MiniButter', dir: 'assets/spine/Pet_MiniButter', name: '迷你黄油', desc: '宠物形态', voiceSkin: '' },
  ],

  /* 关键骨骼名（含官方互动骨骼） */
  bones: {
    head:      ['S1_Head', 'Butter_Head'],
    headTop:   ['S1_Hair_9_0', 'S1_Hair_F', 'S1_Head', 'Butter_Head'],
    face:      ['S1_F_Face_VCT', 'S1_Face', 'Butter_Face', 'S1_Head'],
    mouth:     ['S1_F_Mouth', 'Butter_Mouth', 'S1_Head'],
    cheekL:    ['S1_Ball_L', 'S1_Ball_L_CT', 'Butter_Face'],
    cheekR:    ['S1_Ball_R', 'S1_Ball_R_Root', 'Butter_Face'],
    belly:     ['S1_Body_1', 'Butter_Body'],
    neck:      ['S1_Neck', 'Butter_Body'],
    tail:      ['S1_Tail_1', 'Butter_Tail_1'],
    earL:      ['S1_Ear_L_2', 'Butter_Ear_L_1'],
    earR:      ['S1_Ear_R_2', 'Butter_Ear_R_1'],
    // ↓ 官方互动骨骼（Studio 互动模式用的就是这几根）
    ballMove:  ['Character_Ball_Move', 'S1_Ball_R_Root'],   // 捏脸：控制整张脸的拉伸
    ballMoveP: ['S1_Ball_R_Root', 'S1_Ball_Root'],          // 它的父骨骼（官方用它算半径）
    pat:       ['Character_Pat', 'S1_Head'],                // 摸头 / 敲头
    tickle:    ['Character_Tickle', 'Pelvis'],              // 挠痒 / 摸肚子
  },

  /* 动作名。主形态在前，迷你宠物形态兜底。 */
  anim: {
    idle:        ['Idle_1', 'Idle'],
    patIdle:     ['Pat_Idle', 'Act2_1', 'Play1_1'],
    patEnd:      ['Pat_End', 'Idle'],
    tickleIdle:  ['Tickle_Idle_1', 'Play1_1', 'Act1_1'],
    tickleIdle2: ['Tickle_Idle_2'],
    tickleEnd:   ['Tickle_End', 'Act3_1', 'Idle'],
    touchIdle:   ['Touch_Idle', 'Act1_1'],
    touchEnd:    ['Touch_End', 'Idle'],
    smash:       ['Smash_End_1', 'Surprise_1', 'Act3_1'],   // 官方敲头动作
    smash2:      ['Smash_End_2'],
    eat:         ['Eat_1', 'Eat_2', 'Eat1_1'],
    happy:       ['Happy_1', 'Happy_2', 'Happy_3', 'Happy_4', 'Happy_5', 'Play1_1', 'Act1_1'],
    proud:       ['Proud_1', 'Proud_2', 'Act1_1'],
    angry:       ['Angry_1', 'Angry_2', 'Angry_3', 'Angry1_1'],
    sad:         ['Sad_1', 'Sad_2', 'Sad_3', 'Sad_4', 'Sleep1_1'],
    surprise:    ['Surprise_1', 'Act3_1'],
    dizzy:       ['Dizzy_1', 'Dizzy_2', 'Act3_1'],
    panic:       ['Panic_1', 'Panic_2', 'Panic_3', 'Move'],
    taunt:       ['Taunt_1', 'Taunt_2', 'Taunt_3', 'Taunt_4', 'Act3_1', 'Act2_1'],
    smell:       ['Smell_1', 'Act2_1'],
    serious:     ['Serious_1', 'Serious_2', 'Act3_1'],
    close:       ['Close_1', 'Sleep1_1'],
  },

  /* ---------------- 五个互动（前四个完全对齐官方规格） ---------------- */
  actions: {
    /* 捏脸 = 官方 ballPull（薅脸）。语音等松手弹回之后再播 */
    pinch: {
      label: '捏脸', icon: '🤏', zone: 'cheek', gesture: 'drag',
      deform: 'cheek',
      loop: 'touchIdle', end: 'touchEnd',
      sfxStart: { name: 'SFX_Common_PullCheek', volume: 0.65 },
      sfxEnd:   { name: 'SFX_Common_PullCheekEnd', volume: 0.65 },
      voice: ['Butter_Touch1', 'Butter_Touch1_1', 'Butter_Touch1_2'],   // 松手弹回时才播
    },

    /* 摸头 = 官方 petting。语音等松手后再播（摸多久都不打断） */
    pat: {
      label: '摸头', icon: '🖐', zone: 'head', gesture: 'drag',
      loop: 'patIdle', end: 'patEnd',
      sfx: { name: 'SFX_Pat', volume: 0.28 },
      sfxIntervalMs: 520,      // 官方 _r = 0.5s
      fx: { kind: 'heart', duration: 1600 },
      fxIntervalMs: 900,
      voice: ['Butter_Touch2', 'Butter_Touch2_1', 'Butter_Touch2_2'],   // 松手时才播
    },

    /* 敲头 = 官方 dutchRub（爆栗） */
    bonk: {
      label: '敲头', icon: '🔨', zone: 'head', gesture: 'tap',
      once: 'smash', second: 'smash2',
      sfx: [
        { name: 'SFX_DutchRub_Default', volume: 0.62 },
        { name: 'SFX_DutchRub_Max', volume: 0.68 },
      ],
      fx: { kind: 'dutchRub', duration: 1180 },
      voice: ['Butter_DutchRubEnd1'],        // 敲下去那一下：叫一声
      voiceEnd: ['Butter_DutchRubEnd2'],     // 进入 Smash_End_2：说语音
    },

    /* 摸肚子 = 官方 tickling */
    belly: {
      label: '摸肚子', icon: '🫳', zone: 'belly', gesture: 'drag',
      loop: 'tickleIdle', loop2: 'tickleIdle2', end: 'tickleEnd',
      sfx: { name: 'SFX_Tickle', volume: 0.38 },
      voice: ['Butter_TickleStart1'],       // 开始：哈哈哈！
      voiceMid: ['Butter_TickleDuring1'],   // 开始后：好痒呀！！
      voiceEnd: [],                         // 收尾：只播 Tickle_End 动画
    },

    /* 喂食 */
    feed: {
      label: '喂食', icon: '🍖', zone: 'mouth', gesture: 'drop',
      once: 'eat',
      voice: ['Butter_Eat1'],
    },
  },

  /* 官方 tickling 相位时长兜底（黄油官方表 Mh：0.822 / 2.659，实测日语更长） */
  voiceDurations: {
    Butter_TickleStart1: 0.822,
    Butter_TickleDuring1: 2.659,
  },

  /* ★ 黄油在 CDN 上日韩语音都有 —— 默认日语（她原本就是日语配音出圈的角色） */
  voiceLang: 'ja',
  voiceLangs: ['ja', 'ko'],

  /* 戳一下 / 心情低 / 饿 / 打招呼 */
  pokeVoice: ['Butter_Surprise1', 'Butter_Hmm1', 'Butter_Yes1'],
  upsetVoice: ['Butter_Anger1', 'Butter_Anger3', 'Butter_No1'],
  hungryVoice: ['Butter_CallPlayer1', 'Butter_Sorrow1', 'Butter_Hmm2'],
  greetVoice: ['Butter_Greeting', 'Butter_Lobby', 'Butter_Spawn1'],
  moodActs: ['happy', 'proud', 'taunt', 'smell', 'serious', 'dizzy'],

  /* 动作面板：直接列骨架里的原始动作名（40 个全收录）。
     ★ 名字按官方互动规格标：Touch_Idle/End 是"捏脸"，Pat_Idle/End 才是"摸头"——别标反。 */
  animPanel: [
    { group: '互动', items: ['Pat_Idle', 'Pat_End', 'Touch_Idle', 'Touch_End', 'Tickle_Idle_1', 'Tickle_Idle_2', 'Tickle_End', 'Smash_End_1', 'Smash_End_2', 'Eat_1', 'Eat_2'] },
    { group: '情绪', items: ['Happy_1', 'Happy_2', 'Happy_3', 'Happy_4', 'Happy_5', 'Proud_1', 'Proud_2', 'Angry_1', 'Angry_2', 'Angry_3', 'Sad_1', 'Sad_2', 'Sad_3', 'Sad_4', 'Surprise_1', 'Dizzy_1', 'Dizzy_2', 'Panic_1', 'Panic_2', 'Panic_3', 'Taunt_1', 'Taunt_2', 'Taunt_3', 'Taunt_4', 'Smell_1', 'Serious_1', 'Serious_2', 'Close_1'] },
    { group: '待机', items: ['Idle_1'] },
    { group: '迷你形态', items: ['Idle', 'Play1_1', 'Act1_1', 'Act2_1', 'Act3_1', 'Angry1_1', 'Eat1_1', 'Sleep1_1', 'Move', 'Spawn', 'Swim1_1'] },
  ],
  animLabel: {
    Pat_Idle: '被摸头', Pat_End: '摸头结束',
    Touch_Idle: '被捏脸', Touch_End: '捏脸结束',
    Tickle_Idle_1: '摸肚子·开始', Tickle_Idle_2: '摸肚子·笑不停', Tickle_End: '摸肚子·大笑收尾',
    Smash_End_1: '敲头·敲下去', Smash_End_2: '敲头·哭了',
    Eat_1: '吃东西 1', Eat_2: '吃东西 2',
    Happy_1: '开心 1', Happy_2: '开心 2', Happy_3: '开心 3', Happy_4: '开心 4', Happy_5: '开心 5',
    Proud_1: '得意 1', Proud_2: '得意 2',
    Angry_1: '生气 1', Angry_2: '生气 2', Angry_3: '生气 3',
    Sad_1: '难过 1', Sad_2: '难过 2', Sad_3: '难过 3', Sad_4: '难过 4',
    Surprise_1: '惊讶', Dizzy_1: '晕乎乎 1', Dizzy_2: '晕乎乎 2',
    Panic_1: '慌张 1', Panic_2: '慌张 2', Panic_3: '慌张 3',
    Taunt_1: '挑衅 1', Taunt_2: '挑衅 2', Taunt_3: '挑衅 3', Taunt_4: '挑衅 4',
    Smell_1: '闻一闻', Serious_1: '认真 1', Serious_2: '认真 2', Close_1: '闭眼',
    Idle_1: '待机',
    Idle: '待机', Play1_1: '玩耍', Act1_1: '动作 1', Act2_1: '动作 2', Act3_1: '动作 3',
    Angry1_1: '生气', Eat1_1: '吃东西', Sleep1_1: '睡觉', Move: '移动', Spawn: '登场', Swim1_1: '游泳',
  },

  /* 动作 → 语音对照（动作面板点了之后播哪条语音） */
  voiceForAnim: {
    Tickle_Idle_1: ['Butter_TickleStart1'], Tickle_Idle_2: ['Butter_TickleDuring1'], Tickle_End: ['Butter_TickleDuring1'],
    Surprise_1: ['Butter_Surprise1'],
    Eat1_1: ['Butter_Eat1'],
  },
  voiceForAnimSeries: { Happy_: 'Butter_Joy', Proud_: 'Butter_Pleasure', Angry_: 'Butter_Anger', Sad_: 'Butter_Sorrow' },
};
