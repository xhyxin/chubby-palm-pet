/* ------------------------------------------------------------------
 * characters/skea.js —— 角色数据：斯琪娅（Skea）
 *
 * 数据全部来自 03_工具 的分析脚本实测（见 01_参考文档\站点分析原始文件\skea_骨架信息.json）：
 *   · 官方互动骨骼三根齐全：Character_Pat / Character_Tickle / Character_Ball_Move
 *   · 官方互动动作十一个齐全
 *   · 捏脸只拉 3 个部件（脸皮 / 脸部轮廓 / 腮红），其余 135 个（头发/帽子/长袍/翅膀/身体）不动
 *   · 骨骼命名不是 S1_*，而是 Head / Face / Mouth_1 / Ball_L / Ball_R / Body_1..3 / Wing_1
 * ------------------------------------------------------------------ */
const CHAR_SKEA = {
  id: 'Skea',
  name: '斯琪娅',
  en: 'Skea',
  desc: '妖精 · 2 套外观',
  tag: '🕯',

  art: {
    avatar:  'assets/art/Skea/phone-avatar.png',
    present: 'assets/art/Skea/present.png',
    album:   'assets/art/Skea/album-strict.webp',
  },

  skinCandidates: ['Normal', 'default'],

  /* 可切换的外观（正常使徒本体 / 皮肤1）
     ★ 用户要求：保留皮肤，删除所有坨格形态。SkeaAside（坨格神灯）已移除。 */
  /* ★ 皮肤名 = **官方皮肤名**（官方语音表里的 Item_HeroSkin_Skea_Skin1）。
     界面只显示 name（第四十五轮：不显示描述），desc 留官方描述做数据用。 */
  models: [
    { id: 'Skea',      dir: 'assets/spine/Skea',      name: '默认',         desc: '这是斯琪娅原本的模样。', voiceSkin: '' },
    { id: 'SkeaSkin1', dir: 'assets/spine/SkeaSkin1', name: '异国传统体验', desc: '参加莫纳蒂姆观光套餐，体验神秘异国传统时的斯琪娅的模样。', voiceSkin: '_Skin1' },
  ],

  bones: {
    head:      ['Head', 'Head_RCT'],
    headTop:   ['Hair_Root', 'Hair_Back_Root', 'Hair_F_4_Root', 'Head'],
    face:      ['Face', 'Face_CT'],
    mouth:     ['Mouth_1', 'Mouth_Root'],
    /* 屏幕右脸颊（Ball_R 一侧）—— 官方 ballPull 管的是另一侧，这只留作兜底 */
    cheekL:    ['Ball_R', 'Ball_R_Root', 'Face'],
    /* ★ 官方捏脸侧：Character_Ball_Move 的父骨骼是 Ball_L_Root，控制 Ball_L（屏幕左脸颊） */
    cheekR:    ['Ball_L', 'Ball_L_Root', 'Face'],
    belly:     ['Body_1', 'Body_2'],
    neck:      ['Body_3', 'Body_2'],
    /* Skea 是妖精，没有尾巴和耳朵，用翅膀/羽翼代替抖动部件 */
    tail:      ['Wing_1', 'Wing_Root'],
    earL:      ['Wing_Out_1', 'Wing_Out_2'],
    earR:      ['Wing_Out_2', 'Wing_Out_3'],
    ballMove:  ['Character_Ball_Move'],
    ballMoveP: ['Ball_L_Root', 'Ball_R_Root'],
    pat:       ['Character_Pat', 'Head'],
    tickle:    ['Character_Tickle', 'Pelvis'],
  },

  /* 动作名（主形态实测 59 个）。候选制：第一个真实存在的生效，找不到回退待机，不会崩。 */
  anim: {
    idle:        ['Idle_1', 'Idle_2', 'Idle_3'],
    patIdle:     ['Pat_Idle'],
    patEnd:      ['Pat_End', 'Idle_1'],
    tickleIdle:  ['Tickle_Idle_1'],
    tickleIdle2: ['Tickle_Idle_2'],
    tickleEnd:   ['Tickle_End', 'Idle_1'],
    touchIdle:   ['Touch_Idle'],
    touchEnd:    ['Touch_End', 'Idle_1'],
    smash:       ['Smash_End_1'],
    smash2:      ['Smash_End_2'],
    eat:         ['Eat_1', 'Eat_2'],
    happy:       ['Happy_1', 'Happy_2', 'Happy_3', 'Happy_4', 'Happy_5', 'Happy_6', 'Happy_7'],
    proud:       ['Shy_1', 'Shy_2'],                 // 无 Proud_：用"害羞"顶正面情绪
    angry:       ['Angry_1', 'Angry_2', 'Angry_3', 'Angry_4', 'Angry_5'],
    sad:         ['Sad_1', 'Sad_2', 'Sad_3', 'Sad_4', 'Sad_5', 'Sad_6'],
    surprise:    ['Panic_1', 'Panic_2', 'Panic_3'],  // 无 Surprise_：用"慌张"顶
    dizzy:       ['Blank_1', 'Blank_2', 'Blank_3'],  // 无 Dizzy_：用"发呆"顶
    panic:       ['Panic_1', 'Panic_2', 'Panic_3'],
    taunt:       ['Talk_1', 'Talk_2'],               // 无 Taunt_：用"说话"顶
    smell:       ['Pray_1', 'Pray_2', 'Pray_3'],     // 无 Smell_：用"祈祷"顶（祭司长）
    serious:     ['Serious_1', 'Serious_2', 'Serious_3'],
    close:       ['Close_1', 'Close_2'],
  },

  actions: {
    pinch: {
      label: '捏脸', icon: '🤏', zone: 'cheek', gesture: 'drag',
      deform: 'cheek',
      loop: 'touchIdle', end: 'touchEnd',
      sfxStart: { name: 'SFX_Common_PullCheek', volume: 0.65 },
      sfxEnd:   { name: 'SFX_Common_PullCheekEnd', volume: 0.65 },
      voice: ['Skea_Touch1', 'Skea_Touch1_1', 'Skea_Touch1_2'],
    },
    pat: {
      label: '摸头', icon: '🖐', zone: 'head', gesture: 'drag',
      loop: 'patIdle', end: 'patEnd',
      sfx: { name: 'SFX_Pat', volume: 0.28 },
      sfxIntervalMs: 520,
      fx: { kind: 'heart', duration: 1600 },
      fxIntervalMs: 900,
      voice: ['Skea_Touch2', 'Skea_Touch2_1', 'Skea_Touch2_2'],
    },
    bonk: {
      label: '敲头', icon: '🔨', zone: 'head', gesture: 'tap',
      once: 'smash', second: 'smash2',
      sfx: [
        { name: 'SFX_DutchRub_Default', volume: 0.62 },
        { name: 'SFX_DutchRub_Max', volume: 0.68 },
      ],
      fx: { kind: 'dutchRub', duration: 1180 },
      voice: ['Skea_DutchRubEnd1'],
      voiceEnd: ['Skea_DutchRubEnd2'],
    },
    belly: {
      label: '摸肚子', icon: '🫳', zone: 'belly', gesture: 'drag',
      loop: 'tickleIdle', loop2: 'tickleIdle2', end: 'tickleEnd',
      sfx: { name: 'SFX_Tickle', volume: 0.38 },
      voice: ['Skea_TickleStart1'],
      voiceMid: ['Skea_TickleDuring1'],
      voiceEnd: [],
    },
    feed: {
      label: '喂食', icon: '🍖', zone: 'mouth', gesture: 'drop',
      once: 'eat',
      voice: ['Skea_Eat1'],
    },
  },

  /* Skea 实测音频时长（03_工具\读取ogg时长.js 量的），读不到音频时兜底 */
  voiceDurations: {
    Skea_TickleStart1: 0.885,
    Skea_TickleDuring1: 2.603,
  },

  /* ★ Skea 在 CDN 上只有韩语语音（日语索引 0 条），所以固定 ko */
  voiceLang: 'ko',
  voiceLangs: ['ko'],

  pokeVoice: ['Skea_Surprise1', 'Skea_Hmm1', 'Skea_Yes1'],
  upsetVoice: ['Skea_Anger1', 'Skea_Anger3', 'Skea_No1'],
  hungryVoice: ['Skea_CallPlayer1', 'Skea_Sorrow1', 'Skea_Hmm2'],
  greetVoice: ['Skea_Greeting', 'Skea_Lobby', 'Skea_Spawn1'],
  moodActs: ['happy', 'proud', 'taunt', 'smell', 'serious', 'dizzy'],

  animPanel: [
    { group: '互动', items: ['Pat_Idle', 'Pat_End', 'Touch_Idle', 'Touch_End', 'Tickle_Idle_1', 'Tickle_Idle_2', 'Tickle_End', 'Smash_End_1', 'Smash_End_2', 'Eat_1', 'Eat_2'] },
    { group: '情绪', items: ['Happy_1', 'Happy_2', 'Happy_3', 'Happy_4', 'Happy_5', 'Happy_6', 'Happy_7', 'Angry_1', 'Angry_2', 'Angry_3', 'Angry_4', 'Angry_5', 'Angry_6', 'Angry_7', 'Angry_8', 'Sad_1', 'Sad_2', 'Sad_3', 'Sad_4', 'Sad_5', 'Sad_6', 'Panic_1', 'Panic_2', 'Panic_3', 'Serious_1', 'Serious_2', 'Serious_3', 'Shy_1', 'Shy_2', 'Pray_1', 'Pray_2', 'Pray_3', 'Talk_1', 'Talk_2', 'Yes_1', 'Yes_2', 'No_1', 'No_2', 'Blank_1', 'Blank_2', 'Blank_3', 'Close_1', 'Close_2'] },
    { group: '待机', items: ['Idle_1', 'Idle_2', 'Idle_3'] },
  ],
  animLabel: {
    Pat_Idle: '被摸头', Pat_End: '摸头结束',
    Touch_Idle: '被捏脸', Touch_End: '捏脸结束',
    Tickle_Idle_1: '摸肚子·开始', Tickle_Idle_2: '摸肚子·笑不停', Tickle_End: '摸肚子·大笑收尾',
    Smash_End_1: '敲头·敲下去', Smash_End_2: '敲头·哭了',
    Eat_1: '吃东西 1', Eat_2: '吃东西 2',
    Happy_1: '高兴 1', Happy_2: '高兴 2', Happy_3: '高兴 3', Happy_4: '高兴 4',
    Happy_5: '高兴 5', Happy_6: '高兴 6', Happy_7: '高兴 7',
    Angry_1: '生气 1', Angry_2: '生气 2', Angry_3: '生气 3', Angry_4: '生气 4',
    Angry_5: '生气 5', Angry_6: '生气 6', Angry_7: '生气 7', Angry_8: '生气 8',
    Sad_1: '伤心 1', Sad_2: '伤心 2', Sad_3: '伤心 3', Sad_4: '伤心 4', Sad_5: '伤心 5', Sad_6: '伤心 6',
    Panic_1: '慌张 1', Panic_2: '慌张 2', Panic_3: '慌张 3',
    Serious_1: '认真 1', Serious_2: '认真 2', Serious_3: '认真 3',
    Shy_1: '害羞 1', Shy_2: '害羞 2',
    Pray_1: '祈祷 1', Pray_2: '祈祷 2', Pray_3: '祈祷 3',
    Talk_1: '说话 1', Talk_2: '说话 2',
    Yes_1: '肯定 1', Yes_2: '肯定 2',
    No_1: '否定 1', No_2: '否定 2',
    Blank_1: '发呆 1', Blank_2: '发呆 2', Blank_3: '发呆 3',
    Close_1: '闭眼 1', Close_2: '闭眼 2',
    Idle_1: '待机 1', Idle_2: '待机 2', Idle_3: '待机 3',
    Idle: '待机',
  },

  voiceForAnim: {
    Tickle_Idle_1: ['Skea_TickleStart1'], Tickle_Idle_2: ['Skea_TickleDuring1'], Tickle_End: ['Skea_TickleDuring1'],
    Panic_1: ['Skea_Surprise1'],
    Talk_1: ['Skea_Line1'], Talk_2: ['Skea_Line2'],
    Pray_1: ['Skea_Lobby'],
  },
  voiceForAnimSeries: { Happy_: 'Skea_Joy', Angry_: 'Skea_Anger', Sad_: 'Skea_Sorrow', Shy_: 'Skea_Pleasure' },
};
