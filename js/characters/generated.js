/* ------------------------------------------------------------------
 * characters/generated.js —— 自动生成的新角色数据（134 个）
 *
 * ★ 本文件由 03_工具\批量生成角色文件.js 生成，**不要手改**。
 *   数据全部来自官方资源：
 *     · 模型 / 动作 / 骨骼  ← spine-manifest + 骨架真解析（骨架信息_全角色.json）
 *     · 中文名 / 台词       ← 官方 <角色>Voice.json（Hero_Name_ / Hero_Desc_）
 *     · 语音键             ← 官方语音索引里真实存在的键（不存在就不填，宁可不播也不错播）
 *     · 互动骨骼 / 动作 / 音效 / 特效 / 热区 ← 官方 Studio 互动规格，与黄油完全一致
 *
 * 黄油 / 斯琪娅仍用各自的手写文件（butter.js / skea.js）。
 * ------------------------------------------------------------------ */
const CHAR_GENERATED = [
 {
  "id": "Alice",
  "name": "爱丽丝",
  "en": "Alice",
  "desc": "幽灵 · 5 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Alice/phone-avatar.png",
   "present": "assets/art/Alice/present.png",
   "album": "assets/art/Alice/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Alice",
    "dir": "assets/spine/Alice",
    "name": "默认",
    "desc": "基础外观（46 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AliceSkin1",
    "dir": "assets/spine/AliceSkin1",
    "name": "幽灵之国的爱丽丝",
    "desc": "落入某个奇异幽灵国度的爱丽丝之姿。她似乎…（46 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "AliceSkin2",
    "dir": "assets/spine/AliceSkin2",
    "name": "森林小幽灵",
    "desc": "在森林里迷路时偶尔会遇到的红帽幽灵。你现…（46 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "AliceSkin3",
    "dir": "assets/spine/AliceSkin3",
    "name": "掷骰子的兔子",
    "desc": "比起塔罗占卜，或许更适合掷骰子。凭借偷牌…（46 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "AliceSkin4",
    "dir": "assets/spine/AliceSkin4",
    "name": "致命剧毒占卜",
    "desc": "突然迷上反派了吗？爱丽丝为了更恶毒的占卜…（47 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face_HCT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [
    "Tail_0"
   ],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2",
    "Taunt_3",
    "Taunt_4"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Alice_Touch1",
     "Alice_Touch1_1",
     "Alice_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Alice_Touch2",
     "Alice_Touch2_1",
     "Alice_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Alice_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Alice_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Alice_TickleStart1"
    ],
    "voiceMid": [
     "Alice_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Alice_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Alice_Surprise1",
   "Alice_Hmm1",
   "Alice_Yes1",
   "Alice_Touch1"
  ],
  "upsetVoice": [
   "Alice_Anger1",
   "Alice_No1",
   "Alice_Anger2",
   "Alice_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Alice_CallPlayer1",
   "Alice_Sorrow1",
   "Alice_Hmm2",
   "Alice_TickleStart1"
  ],
  "greetVoice": [
   "Alice_Greeting",
   "Alice_Lobby",
   "Alice_Spawn1",
   "Alice_Joy1",
   "Alice_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4",
     "Taunt_1",
     "Taunt_2",
     "Taunt_3",
     "Taunt_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Ignore_1",
     "Ignore_2",
     "Sleep_1",
     "Sorry_1",
     "Sulky_1",
     "Sulky_2",
     "Talk_1",
     "Yare_1",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Alice_Joy",
   "Proud_": "Alice_Pleasure",
   "Angry_": "Alice_Anger",
   "Sad_": "Alice_Sorrow",
   "Surprise_": "Alice_Surprise"
  }
 },
 {
  "id": "Allet",
  "name": "阿莱特",
  "en": "Allet",
  "desc": "精灵 · 1 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Allet/phone-avatar.png",
   "present": "assets/art/Allet/present.png",
   "album": "assets/art/Allet/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Allet",
    "dir": "assets/spine/Allet",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root2",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Allet_Touch1",
     "Allet_Touch1_1",
     "Allet_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Allet_Touch2",
     "Allet_Touch2_1",
     "Allet_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Allet_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Allet_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Allet_TickleStart1"
    ],
    "voiceMid": [
     "Allet_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Allet_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Allet_Surprise1",
   "Allet_Hmm1",
   "Allet_Yes1",
   "Allet_Touch1"
  ],
  "upsetVoice": [
   "Allet_Anger1",
   "Allet_No1",
   "Allet_Anger2",
   "Allet_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Allet_CallPlayer1",
   "Allet_Sorrow1",
   "Allet_Hmm2",
   "Allet_TickleStart1"
  ],
  "greetVoice": [
   "Allet_Greeting",
   "Allet_Lobby",
   "Allet_Spawn1",
   "Allet_Joy1",
   "Allet_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Dance_1",
     "Sleep_1",
     "Sleep_2",
     "Tired_1"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Allet_Joy",
   "Proud_": "Allet_Pleasure",
   "Angry_": "Allet_Anger",
   "Sad_": "Allet_Sorrow",
   "Surprise_": "Allet_Surprise"
  }
 },
 {
  "id": "Amelia",
  "name": "艾蜜莉雅",
  "en": "Amelia",
  "desc": "精灵 · 6 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Amelia/phone-avatar.png",
   "present": "assets/art/Amelia/present.png",
   "album": "assets/art/Amelia/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Amelia",
    "dir": "assets/spine/Amelia",
    "name": "默认",
    "desc": "基础外观（41 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AmeliaSkin1",
    "dir": "assets/spine/AmeliaSkin1",
    "name": "海边的秘书",
    "desc": "艾蜜莉雅虽然在休假，但却完全没有要休息的…（41 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "AmeliaSkin2",
    "dir": "assets/spine/AmeliaSkin2",
    "name": "派对之后的莫纳蒂姆",
    "desc": "为了辅佐参加派对的埃蕾娜而精心打扮的艾蜜…（41 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "AmeliaSkin3",
    "dir": "assets/spine/AmeliaSkin3",
    "name": "你的兔子管家长",
    "desc": "就算是这副模样，想黏在埃蕾娜身边的心也丝…（41 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "AmeliaSkin4",
    "dir": "assets/spine/AmeliaSkin4",
    "name": "偶像：N.Y.A.N.Y.A",
    "desc": "为了埃蕾娜市长的支持率，甘愿成为偶像的艾…（41 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_Root"
   ],
   "face": [
    "S1_Face",
    "Face_E_Root"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [
    "S1_F_Ear_R"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Amelia_Touch1",
     "Amelia_Touch1_1",
     "Amelia_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Amelia_Touch2",
     "Amelia_Touch2_1",
     "Amelia_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Amelia_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Amelia_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Amelia_TickleStart1"
    ],
    "voiceMid": [
     "Amelia_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Amelia_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Amelia_Surprise1",
   "Amelia_Hmm1",
   "Amelia_Yes1",
   "Amelia_Touch1"
  ],
  "upsetVoice": [
   "Amelia_Anger1",
   "Amelia_No1",
   "Amelia_Anger2",
   "Amelia_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Amelia_CallPlayer1",
   "Amelia_Sorrow1",
   "Amelia_Hmm2",
   "Amelia_TickleStart1"
  ],
  "greetVoice": [
   "Amelia_Greeting",
   "Amelia_Lobby",
   "Amelia_Spawn1",
   "Amelia_Joy1",
   "Amelia_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Shy_5",
     "Shy_6",
     "Shy_7",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Act_1_1",
     "Act_2_1",
     "Act_3_1",
     "Angry1_1",
     "Eat1_1",
     "Idle",
     "Move",
     "Play1_1",
     "Sleep1_1",
     "Spawn",
     "Swim1_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Amelia_Joy",
   "Proud_": "Amelia_Pleasure",
   "Angry_": "Amelia_Anger",
   "Sad_": "Amelia_Sorrow",
   "Surprise_": "Amelia_Surprise"
  }
 },
 {
  "id": "AmeliaR41",
  "name": "艾蜜莉雅（R41）",
  "en": "AmeliaR41",
  "desc": "精灵 · 2 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/AmeliaR41/phone-avatar.png",
   "present": "assets/art/AmeliaR41/present.png",
   "album": "assets/art/AmeliaR41/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "AmeliaR41",
    "dir": "assets/spine/AmeliaR41",
    "name": "默认",
    "desc": "基础外观（62 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AmeliaR41Skin1",
    "dir": "assets/spine/AmeliaR41Skin1",
    "name": "蓝色森林精灵",
    "desc": "在泰达的建议下，艾蜜莉雅(R41)穿上了…（62 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "AmeliaR41_Touch1",
     "AmeliaR41_Touch1_1",
     "AmeliaR41_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "AmeliaR41_Touch2",
     "AmeliaR41_Touch2_1",
     "AmeliaR41_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "AmeliaR41_DutchRubEnd1"
    ],
    "voiceEnd": [
     "AmeliaR41_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "AmeliaR41_TickleStart1"
    ],
    "voiceMid": [
     "AmeliaR41_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "AmeliaR41_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "AmeliaR41_Surprise1",
   "AmeliaR41_Hmm1",
   "AmeliaR41_Yes1",
   "AmeliaR41_Touch1"
  ],
  "upsetVoice": [
   "AmeliaR41_Anger1",
   "AmeliaR41_No1",
   "AmeliaR41_Anger2",
   "AmeliaR41_DutchRubEnd1"
  ],
  "hungryVoice": [
   "AmeliaR41_CallPlayer1",
   "AmeliaR41_Sorrow1",
   "AmeliaR41_Hmm2",
   "AmeliaR41_TickleStart1"
  ],
  "greetVoice": [
   "AmeliaR41_Greeting",
   "AmeliaR41_Lobby",
   "AmeliaR41_Spawn1",
   "AmeliaR41_Joy1",
   "AmeliaR41_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Dance_3",
     "Robot_1",
     "Robot_2",
     "Robot_3",
     "Robot_4",
     "Scary_1",
     "Scary_2",
     "Scary_3",
     "Scary_4",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "AmeliaR41_Joy",
   "Proud_": "AmeliaR41_Pleasure",
   "Angry_": "AmeliaR41_Anger",
   "Sad_": "AmeliaR41_Sorrow",
   "Surprise_": "AmeliaR41_Surprise"
  }
 },
 {
  "id": "Aragnia",
  "name": "阿拉戈尼娅",
  "en": "Aragnia",
  "desc": "龙族 · 2 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Aragnia/phone-avatar.png",
   "present": "assets/art/Aragnia/present.png",
   "album": "assets/art/Aragnia/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Aragnia",
    "dir": "assets/spine/Aragnia",
    "name": "默认",
    "desc": "基础外观（66 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AragniaSkin1",
    "dir": "assets/spine/AragniaSkin1",
    "name": "蓝色大海的转学生",
    "desc": "从深海中出现的未知转学生，小阿拉的校园生…（66 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Ac_Root"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_Scale"
   ],
   "tail": [
    "Tail_1_Root"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_R_Root"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Ac_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Aragnia_Touch1",
     "Aragnia_Touch1_1",
     "Aragnia_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Aragnia_Touch2",
     "Aragnia_Touch2_1",
     "Aragnia_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Aragnia_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Aragnia_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Aragnia_TickleStart1"
    ],
    "voiceMid": [
     "Aragnia_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Aragnia_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Aragnia_Surprise1",
   "Aragnia_Hmm1",
   "Aragnia_Yes1",
   "Aragnia_Touch1"
  ],
  "upsetVoice": [
   "Aragnia_Anger1",
   "Aragnia_No1",
   "Aragnia_Anger2",
   "Aragnia_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Aragnia_CallPlayer1",
   "Aragnia_Sorrow1",
   "Aragnia_Hmm2",
   "Aragnia_TickleStart1"
  ],
  "greetVoice": [
   "Aragnia_Greeting",
   "Aragnia_Lobby",
   "Aragnia_Spawn1",
   "Aragnia_Joy1",
   "Aragnia_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Eat_4",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3",
     "Idle_4"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Dance_2",
     "Pride_1",
     "Pride_2",
     "Pride_3",
     "Pride_4",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Spit_1",
     "Spit_2",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Aragnia_Joy",
   "Proud_": "Aragnia_Pleasure",
   "Angry_": "Aragnia_Anger",
   "Sad_": "Aragnia_Sorrow",
   "Surprise_": "Aragnia_Surprise"
  }
 },
 {
  "id": "Arco",
  "name": "阿尔柯",
  "en": "Arco",
  "desc": "灵体 · 3 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Arco/phone-avatar.png",
   "present": "assets/art/Arco/present.png",
   "album": "assets/art/Arco/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Arco",
    "dir": "assets/spine/Arco",
    "name": "默认",
    "desc": "基础外观（63 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ArcoSkin1",
    "dir": "assets/spine/ArcoSkin1",
    "name": "街头学生",
    "desc": "一到上课时间就会冲到街头，用舞蹈反抗刻板…（63 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ArcoSkin2",
    "dir": "assets/spine/ArcoSkin2",
    "name": "假日摇摆",
    "desc": "以度假海滩为舞台，展现全新编舞的阿尔柯。…（63 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Earring_Root"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Arco_Touch1",
     "Arco_Touch1_1",
     "Arco_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Arco_Touch2",
     "Arco_Touch2_1",
     "Arco_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Arco_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Arco_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Arco_TickleStart1"
    ],
    "voiceMid": [
     "Arco_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Arco_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Arco_Surprise1",
   "Arco_Hmm1",
   "Arco_Yes1",
   "Arco_Touch1"
  ],
  "upsetVoice": [
   "Arco_Anger1",
   "Arco_No1",
   "Arco_Anger2",
   "Arco_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Arco_CallPlayer1",
   "Arco_Sorrow1",
   "Arco_Hmm2",
   "Arco_TickleStart1"
  ],
  "greetVoice": [
   "Arco_Greeting",
   "Arco_Lobby",
   "Arco_Spawn1",
   "Arco_Joy1",
   "Arco_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Serious_1",
     "Serious_2",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4",
     "Surprise_5"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Dance_3",
     "Dance_4",
     "Drink_1",
     "Drink_2",
     "Drink_3",
     "Hi_1",
     "Hi_2",
     "Rhythm_1",
     "Rhythm_2",
     "Rhythm_3",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sorry_1",
     "Sorry_2",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Arco_Joy",
   "Proud_": "Arco_Pleasure",
   "Angry_": "Arco_Anger",
   "Sad_": "Arco_Sorrow",
   "Surprise_": "Arco_Surprise"
  }
 },
 {
  "id": "Arnet",
  "name": "阿妮特",
  "en": "Arnet",
  "desc": "龙族 · 2 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Arnet/phone-avatar.png",
   "present": "assets/art/Arnet/present.png",
   "album": "assets/art/Arnet/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Arnet",
    "dir": "assets/spine/Arnet",
    "name": "默认",
    "desc": "基础外观（58 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ArnetSkin1",
    "dir": "assets/spine/ArnetSkin1",
    "name": "一天的结束",
    "desc": "每天看完打架后悠闲休息的阿妮特。正期待着…（58 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck"
   ],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_Root"
   ],
   "earR": [
    "Ear_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Dizzy_1",
    "Dizzy_2"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2",
    "Taunt_3",
    "Taunt_4"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Arnet_Touch1",
     "Arnet_Touch1_1",
     "Arnet_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Arnet_Touch2",
     "Arnet_Touch2_1",
     "Arnet_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Arnet_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Arnet_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Arnet_TickleStart1"
    ],
    "voiceMid": [
     "Arnet_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Arnet_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Arnet_Surprise1",
   "Arnet_Hmm1",
   "Arnet_Yes1",
   "Arnet_Touch1"
  ],
  "upsetVoice": [
   "Arnet_Anger1",
   "Arnet_No1",
   "Arnet_Anger2",
   "Arnet_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Arnet_CallPlayer1",
   "Arnet_Sorrow1",
   "Arnet_Hmm2",
   "Arnet_TickleStart1"
  ],
  "greetVoice": [
   "Arnet_Greeting",
   "Arnet_Lobby",
   "Arnet_Spawn1",
   "Arnet_Joy1",
   "Arnet_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Close_2",
     "Dizzy_1",
     "Dizzy_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Taunt_1",
     "Taunt_2",
     "Taunt_3",
     "Taunt_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Loudspeaker_1",
     "Loudspeaker_2",
     "Loudspeaker_3",
     "Merong_1",
     "Merong_2",
     "Merong_3",
     "Shy_1",
     "Shy_2",
     "Sorry_1",
     "Sorry_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Arnet_Joy",
   "Proud_": "Arnet_Pleasure",
   "Angry_": "Arnet_Anger",
   "Sad_": "Arnet_Sorrow",
   "Surprise_": "Arnet_Surprise"
  }
 },
 {
  "id": "Asana",
  "name": "阿萨娜",
  "en": "Asana",
  "desc": "魔女 · 3 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Asana/phone-avatar.png",
   "present": "assets/art/Asana/present.png",
   "album": "assets/art/Asana/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Asana",
    "dir": "assets/spine/Asana",
    "name": "默认",
    "desc": "基础外观（64 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AsanaSkin1",
    "dir": "assets/spine/AsanaSkin1",
    "name": "刺痛护理的姿态",
    "desc": "主动提出要协助希尔德诊疗的阿萨娜。她按自…（64 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "AsanaSkin2",
    "dir": "assets/spine/AsanaSkin2",
    "name": "柔韧组长的姿势",
    "desc": "阿萨娜组长总是提议大家在工作间隙起身拉伸…（64 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Feather_7"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Necklace_Root"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Feather_7"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Asana_Touch1",
     "Asana_Touch1_1",
     "Asana_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Asana_Touch2",
     "Asana_Touch2_1",
     "Asana_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Asana_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Asana_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Asana_TickleStart1"
    ],
    "voiceMid": [
     "Asana_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Asana_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Asana_Surprise1",
   "Asana_Hmm1",
   "Asana_Yes1",
   "Asana_Touch1"
  ],
  "upsetVoice": [
   "Asana_Anger1",
   "Asana_No1",
   "Asana_Anger2",
   "Asana_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Asana_CallPlayer1",
   "Asana_Sorrow1",
   "Asana_Hmm2",
   "Asana_TickleStart1"
  ],
  "greetVoice": [
   "Asana_Greeting",
   "Asana_Lobby",
   "Asana_Spawn1",
   "Asana_Joy1",
   "Asana_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Serious_5",
     "Serious_6",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Disgust_1",
     "Pride_1",
     "Pride_2",
     "Pride_3",
     "Pride_4",
     "Sulky_1",
     "Sulky_2",
     "Yoga_1",
     "Yoga_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Asana_Joy",
   "Proud_": "Asana_Pleasure",
   "Angry_": "Asana_Anger",
   "Sad_": "Asana_Sorrow",
   "Surprise_": "Asana_Surprise"
  }
 },
 {
  "id": "Ashur",
  "name": "艾舒尔",
  "en": "Ashur",
  "desc": "妖精 · 3 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Ashur/phone-avatar.png",
   "present": "assets/art/Ashur/present.png",
   "album": "assets/art/Ashur/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Ashur",
    "dir": "assets/spine/Ashur",
    "name": "默认",
    "desc": "基础外观（52 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AshurSkin1",
    "dir": "assets/spine/AshurSkin1",
    "name": "冰淇淋制作机",
    "desc": "摆脱辛苦的面包店生活，在酷暑中享受假期的…（52 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "AshurSkin2",
    "dir": "assets/spine/AshurSkin2",
    "name": "平静的温泉之旅",
    "desc": "钱包和内心都变得富足的艾舒尔，似乎为了寻…（52 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "S1_Head",
    "S1_Head4"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_1_0"
   ],
   "face": [
    "S1_Face"
   ],
   "mouth": [
    "S1_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [
    "S1_Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_L_Root",
    "S1_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head",
    "S1_Head4"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Ashur_Touch1",
     "Ashur_Touch1_1",
     "Ashur_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Ashur_Touch2",
     "Ashur_Touch2_1",
     "Ashur_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Ashur_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Ashur_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Ashur_TickleStart1"
    ],
    "voiceMid": [
     "Ashur_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Ashur_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Ashur_Surprise1",
   "Ashur_Hmm1",
   "Ashur_Yes1",
   "Ashur_Touch1"
  ],
  "upsetVoice": [
   "Ashur_Anger1",
   "Ashur_No1",
   "Ashur_Anger2",
   "Ashur_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Ashur_CallPlayer1",
   "Ashur_Sorrow1",
   "Ashur_Hmm2",
   "Ashur_TickleStart1"
  ],
  "greetVoice": [
   "Ashur_Greeting",
   "Ashur_Lobby",
   "Ashur_Spawn1",
   "Ashur_Joy1",
   "Ashur_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Blank_5",
     "Notmyfault_1",
     "Notmyfault_2",
     "Notmyfault_3",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Ashur_Joy",
   "Proud_": "Ashur_Pleasure",
   "Angry_": "Ashur_Anger",
   "Sad_": "Ashur_Sorrow",
   "Surprise_": "Ashur_Surprise"
  }
 },
 {
  "id": "AshurMagi",
  "name": "艾舒尔（魔道）",
  "en": "AshurMagi",
  "desc": "妖精 · 2 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/AshurMagi/phone-avatar.png",
   "present": "assets/art/AshurMagi/present.png",
   "album": "assets/art/AshurMagi/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "AshurMagi",
    "dir": "assets/spine/AshurMagi",
    "name": "默认",
    "desc": "基础外观（65 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AshurMagiSkin1",
    "dir": "assets/spine/AshurMagiSkin1",
    "name": "为疗愈而漫步海边",
    "desc": "艾舒尔（魔道）暂别日常，来到海边寻找片刻…（65 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Necklaces_1"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2",
    "Taunt_3"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "AshurMagi_Touch1",
     "AshurMagi_Touch1_1",
     "AshurMagi_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "AshurMagi_Touch2",
     "AshurMagi_Touch2_1",
     "AshurMagi_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "AshurMagi_DutchRubEnd1"
    ],
    "voiceEnd": [
     "AshurMagi_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "AshurMagi_TickleStart1"
    ],
    "voiceMid": [
     "AshurMagi_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "AshurMagi_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "AshurMagi_Surprise1",
   "AshurMagi_Hmm1",
   "AshurMagi_Yes1",
   "AshurMagi_Touch1"
  ],
  "upsetVoice": [
   "AshurMagi_Anger1",
   "AshurMagi_No1",
   "AshurMagi_Anger2",
   "AshurMagi_DutchRubEnd1"
  ],
  "hungryVoice": [
   "AshurMagi_CallPlayer1",
   "AshurMagi_Sorrow1",
   "AshurMagi_Hmm2",
   "AshurMagi_TickleStart1"
  ],
  "greetVoice": [
   "AshurMagi_Greeting",
   "AshurMagi_Lobby",
   "AshurMagi_Spawn1",
   "AshurMagi_Joy1",
   "AshurMagi_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Serious_1",
     "Serious_2",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4",
     "Taunt_1",
     "Taunt_2",
     "Taunt_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Blank_5",
     "Bread_1",
     "Bread_2",
     "Bread_3",
     "Bread_4",
     "Magic_1",
     "Magic_2",
     "Magic_3",
     "Notmyfault_1",
     "Notmyfault_2",
     "Shy_1",
     "Shy_2",
     "Thinking_1",
     "Thinking_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "AshurMagi_Joy",
   "Proud_": "AshurMagi_Pleasure",
   "Angry_": "AshurMagi_Anger",
   "Sad_": "AshurMagi_Sorrow",
   "Surprise_": "AshurMagi_Surprise"
  }
 },
 {
  "id": "Aurora",
  "name": "欧若拉",
  "en": "Aurora",
  "desc": "灵体 · 2 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Aurora/phone-avatar.png",
   "present": "assets/art/Aurora/present.png",
   "album": "assets/art/Aurora/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Aurora",
    "dir": "assets/spine/Aurora",
    "name": "默认",
    "desc": "基础外观（62 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AuroraSkin1",
    "dir": "assets/spine/AuroraSkin1",
    "name": "软绵闪耀的休憩",
    "desc": "欧若拉说要好好休息，于是穿上了柔软的猫咪…（62 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face",
    "Neck_Ac_1_Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_Ac_Root"
   ],
   "tail": [],
   "earL": [
    "Ear"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Face",
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Aurora_Touch1",
     "Aurora_Touch1_1",
     "Aurora_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Aurora_Touch2",
     "Aurora_Touch2_1",
     "Aurora_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Aurora_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Aurora_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Aurora_TickleStart1"
    ],
    "voiceMid": [
     "Aurora_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Aurora_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Aurora_Surprise1",
   "Aurora_Hmm1",
   "Aurora_Yes1",
   "Aurora_Touch1"
  ],
  "upsetVoice": [
   "Aurora_Anger1",
   "Aurora_No1",
   "Aurora_Anger2",
   "Aurora_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Aurora_CallPlayer1",
   "Aurora_Sorrow1",
   "Aurora_Hmm2",
   "Aurora_TickleStart1"
  ],
  "greetVoice": [
   "Aurora_Greeting",
   "Aurora_Lobby",
   "Aurora_Spawn1",
   "Aurora_Joy1",
   "Aurora_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Cute_1",
     "Cute_2",
     "Cute_3",
     "Dance_1",
     "Heart_1",
     "Heart_2",
     "Heart_3",
     "Heart_4",
     "Lying_1",
     "Lying_2",
     "Lying_3",
     "Lying_4",
     "Lying_5",
     "Lying_6",
     "Lying_7",
     "Mad_1",
     "Mad_2",
     "Mad_3",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Aurora_Joy",
   "Proud_": "Aurora_Pleasure",
   "Angry_": "Aurora_Anger",
   "Sad_": "Aurora_Sorrow",
   "Surprise_": "Aurora_Surprise"
  }
 },
 {
  "id": "Aya",
  "name": "绫",
  "en": "Aya",
  "desc": "魔女 · 6 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Aya/phone-avatar.png",
   "present": "assets/art/Aya/present.png",
   "album": "assets/art/Aya/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Aya",
    "dir": "assets/spine/Aya",
    "name": "默认",
    "desc": "基础外观（55 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AyaSkin1",
    "dir": "assets/spine/AyaSkin1",
    "name": "冰上竞速",
    "desc": "在偶尔开放的精灵山山顶雪橇比赛中，守护终…（55 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "AyaSkin2",
    "dir": "assets/spine/AyaSkin2",
    "name": "回忆与彼岸花",
    "desc": "看起来绫已经不再把曾经视为负担的记忆当成…（55 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "AyaSkin3",
    "dir": "assets/spine/AyaSkin3",
    "name": "黎明的蓝月",
    "desc": "绫模仿了曾经听过的童话中魔女的模样。据说…（55 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "AyaSkin4",
    "dir": "assets/spine/AyaSkin4",
    "name": "初雪之舞",
    "desc": "用属于自己的舞蹈俘获观众的舞姬。她的舞姿…（55 动作）",
    "voiceSkin": "_Skin4"
   },
   {
    "id": "AyaSkin5",
    "dir": "assets/spine/AyaSkin5",
    "name": "冬之魔女",
    "desc": "染上被白霜覆盖的世界，成为了“冬天”本身…（55 动作）",
    "voiceSkin": "_Skin5"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Aya_Touch1",
     "Aya_Touch1_1",
     "Aya_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Aya_Touch2",
     "Aya_Touch2_1",
     "Aya_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Aya_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Aya_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Aya_TickleStart1"
    ],
    "voiceMid": [
     "Aya_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Aya_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Aya_Surprise1",
   "Aya_Hmm1",
   "Aya_Yes1",
   "Aya_Touch1"
  ],
  "upsetVoice": [
   "Aya_Anger1",
   "Aya_No1",
   "Aya_Anger2",
   "Aya_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Aya_CallPlayer1",
   "Aya_Sorrow1",
   "Aya_Hmm2",
   "Aya_TickleStart1"
  ],
  "greetVoice": [
   "Aya_Greeting",
   "Aya_Lobby",
   "Aya_Spawn1",
   "Aya_Joy1",
   "Aya_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Dance_3",
     "Groggy_1",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Shy_5",
     "Shy_6",
     "Sulky_1",
     "Sulky_2",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Aya_Joy",
   "Proud_": "Aya_Pleasure",
   "Angry_": "Aya_Anger",
   "Sad_": "Aya_Sorrow",
   "Surprise_": "Aya_Surprise"
  }
 },
 {
  "id": "Ayla",
  "name": "阿依拉",
  "en": "Ayla",
  "desc": "灵体 · 3 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Ayla/phone-avatar.png",
   "present": "assets/art/Ayla/present.png",
   "album": "assets/art/Ayla/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Ayla",
    "dir": "assets/spine/Ayla",
    "name": "默认",
    "desc": "基础外观（62 动作）",
    "voiceSkin": ""
   },
   {
    "id": "AylaSkin1",
    "dir": "assets/spine/AylaSkin1",
    "name": "沙发火山",
    "desc": "沉迷于现代社会产物的阿依拉。最近似乎更喜…（62 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "AylaSkin2",
    "dir": "assets/spine/AylaSkin2",
    "name": "焚尽反派",
    "desc": "跟着朋友们成了反派的阿依拉。看她依旧觉得…（62 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_CT"
   ],
   "headTop": [
    "Head",
    "A_Hair_F_Root"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "EyeBall_L"
   ],
   "cheekR": [
    "EyeBall_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Earring_L"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "EyeBall_R"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "EyeBall_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_CT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Ayla_Touch1",
     "Ayla_Touch1_1",
     "Ayla_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Ayla_Touch2",
     "Ayla_Touch2_1",
     "Ayla_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Ayla_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Ayla_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Ayla_TickleStart1"
    ],
    "voiceMid": [
     "Ayla_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Ayla_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Ayla_Surprise1",
   "Ayla_Hmm1",
   "Ayla_Yes1",
   "Ayla_Touch1"
  ],
  "upsetVoice": [
   "Ayla_Anger1",
   "Ayla_No1",
   "Ayla_Anger2",
   "Ayla_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Ayla_CallPlayer1",
   "Ayla_Sorrow1",
   "Ayla_Hmm2",
   "Ayla_TickleStart1"
  ],
  "greetVoice": [
   "Ayla_Greeting",
   "Ayla_Lobby",
   "Ayla_Spawn1",
   "Ayla_Joy1",
   "Ayla_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Eat_4",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Dance_3",
     "Lazy_1",
     "Lazy_2",
     "Lazy_3",
     "Lazy_4",
     "Mad_1",
     "Mad_2",
     "Mad_3",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Ayla_Joy",
   "Proud_": "Ayla_Pleasure",
   "Angry_": "Ayla_Anger",
   "Sad_": "Ayla_Sorrow",
   "Surprise_": "Ayla_Surprise"
  }
 },
 {
  "id": "Bana",
  "name": "芭娜",
  "en": "Bana",
  "desc": "兽人 · 1 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Bana/phone-avatar.png",
   "present": "assets/art/Bana/present.png",
   "album": "assets/art/Bana/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Bana",
    "dir": "assets/spine/Bana",
    "name": "默认",
    "desc": "基础外观（44 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Ear_L_Root",
    "Ear_L1"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Bana_Touch1",
     "Bana_Touch1_1",
     "Bana_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Bana_Touch2",
     "Bana_Touch2_1",
     "Bana_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Bana_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Bana_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Bana_TickleStart1"
    ],
    "voiceMid": [
     "Bana_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Bana_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Bana_Surprise1",
   "Bana_Hmm1",
   "Bana_Yes1",
   "Bana_Touch1"
  ],
  "upsetVoice": [
   "Bana_Anger1",
   "Bana_No1",
   "Bana_Anger2",
   "Bana_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Bana_CallPlayer1",
   "Bana_Sorrow1",
   "Bana_Hmm2",
   "Bana_TickleStart1"
  ],
  "greetVoice": [
   "Bana_Greeting",
   "Bana_Lobby",
   "Bana_Spawn1",
   "Bana_Joy1",
   "Bana_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Ignore_1",
     "Ignore_2",
     "Spitter_1",
     "Spitter_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Bana_Joy",
   "Proud_": "Bana_Pleasure",
   "Angry_": "Bana_Anger",
   "Sad_": "Bana_Sorrow",
   "Surprise_": "Bana_Surprise"
  }
 },
 {
  "id": "Barie",
  "name": "巴丽叶",
  "en": "Barie",
  "desc": "魔女 · 1 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Barie/phone-avatar.png",
   "present": "assets/art/Barie/present.png",
   "album": "assets/art/Barie/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Barie",
    "dir": "assets/spine/Barie",
    "name": "默认",
    "desc": "基础外观（54 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_L_Ribbon_4"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [
    "Necktie_R"
   ],
   "tail": [],
   "earL": [
    "Ear_L"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_L_Ribbon_4"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Barie_Touch1",
     "Barie_Touch1_1",
     "Barie_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Barie_Touch2",
     "Barie_Touch2_1",
     "Barie_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Barie_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Barie_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Barie_TickleStart1"
    ],
    "voiceMid": [
     "Barie_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Barie_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Barie_Surprise1",
   "Barie_Hmm1",
   "Barie_Yes1",
   "Barie_Touch1"
  ],
  "upsetVoice": [
   "Barie_Anger1",
   "Barie_No1",
   "Barie_Anger2",
   "Barie_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Barie_CallPlayer1",
   "Barie_Sorrow1",
   "Barie_Hmm2",
   "Barie_TickleStart1"
  ],
  "greetVoice": [
   "Barie_Greeting",
   "Barie_Lobby",
   "Barie_Spawn1",
   "Barie_Joy1",
   "Barie_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Glasses_1",
     "Glasses_2",
     "Glasses_3",
     "Glasses_4",
     "Help_1",
     "Help_2",
     "Shy_1",
     "Shy_2",
     "Sulky_1",
     "Sulky_2",
     "Think_1"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Barie_Joy",
   "Proud_": "Barie_Pleasure",
   "Angry_": "Barie_Anger",
   "Sad_": "Barie_Sorrow",
   "Surprise_": "Barie_Surprise"
  }
 },
 {
  "id": "Barong",
  "name": "巴隆",
  "en": "Barong",
  "desc": "幽灵 · 4 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Barong/phone-avatar.png",
   "present": "assets/art/Barong/present.png",
   "album": "assets/art/Barong/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Barong",
    "dir": "assets/spine/Barong",
    "name": "默认",
    "desc": "基础外观（48 动作）",
    "voiceSkin": ""
   },
   {
    "id": "BarongSkin1",
    "dir": "assets/spine/BarongSkin1",
    "name": "蹦蹦跳跳之王",
    "desc": "巴隆模仿了不知从哪里看到的有趣东西。说要…（48 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "BarongSkin2",
    "dir": "assets/spine/BarongSkin2",
    "name": "舞团舞王",
    "desc": "似乎迷上了跳舞，准备了帅气的舞服。感觉随…（48 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "BarongSkin3",
    "dir": "assets/spine/BarongSkin3",
    "name": "度假之王",
    "desc": "做好万全准备、与度假之王同行的巴隆。仿佛…（48 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Doll_Head"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face_HCT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Doll_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Barong_Touch1",
     "Barong_Touch1_1",
     "Barong_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Barong_Touch2",
     "Barong_Touch2_1",
     "Barong_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Barong_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Barong_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Barong_TickleStart1"
    ],
    "voiceMid": [
     "Barong_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Barong_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Barong_Surprise1",
   "Barong_Hmm1",
   "Barong_Yes1",
   "Barong_Touch1"
  ],
  "upsetVoice": [
   "Barong_Anger1",
   "Barong_No1",
   "Barong_Anger2",
   "Barong_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Barong_CallPlayer1",
   "Barong_Sorrow1",
   "Barong_Hmm2",
   "Barong_TickleStart1"
  ],
  "greetVoice": [
   "Barong_Greeting",
   "Barong_Lobby",
   "Barong_Spawn1",
   "Barong_Joy1",
   "Barong_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Act_1",
     "Act_2",
     "Act_3",
     "Act_4",
     "Act_5",
     "Act_6",
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sorry_1",
     "Sorry_2",
     "Sulky_1",
     "Talk_1",
     "Talk_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Barong_Joy",
   "Proud_": "Barong_Pleasure",
   "Angry_": "Barong_Anger",
   "Sad_": "Barong_Sorrow",
   "Surprise_": "Barong_Surprise"
  }
 },
 {
  "id": "Belita",
  "name": "贝丽塔",
  "en": "Belita",
  "desc": "魔女 · 3 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Belita/phone-avatar.png",
   "present": "assets/art/Belita/present.png",
   "album": "assets/art/Belita/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Belita",
    "dir": "assets/spine/Belita",
    "name": "默认",
    "desc": "基础外观（40 动作）",
    "voiceSkin": ""
   },
   {
    "id": "BelitaSkin1",
    "dir": "assets/spine/BelitaSkin1",
    "name": "地下魔女王",
    "desc": "贝丽塔在魔女王国重大活动时会穿这样服装。…（40 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "BelitaSkin3",
    "dir": "assets/spine/BelitaSkin3",
    "name": "冷酷都市女王",
    "desc": "尝试大胆形象变化的贝丽塔。与她特有的冷静…（40 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "S3_Head"
   ],
   "headTop": [
    "S3_Hair_Root"
   ],
   "face": [
    "S3_Face"
   ],
   "mouth": [
    "S3_F_Mouth"
   ],
   "cheekL": [
    "S3_F_Ball_L_Root"
   ],
   "cheekR": [
    "S3_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S3_Ball_Root"
   ],
   "ballMoveP": [
    "S3_F_Ball_R_Root",
    "S3_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S3_Head"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Belita_Touch1",
     "Belita_Touch1_1",
     "Belita_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Belita_Touch2",
     "Belita_Touch2_1",
     "Belita_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Belita_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Belita_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Belita_TickleStart1"
    ],
    "voiceMid": [
     "Belita_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Belita_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Belita_Surprise1",
   "Belita_Hmm1",
   "Belita_Yes1",
   "Belita_Touch1"
  ],
  "upsetVoice": [
   "Belita_Anger1",
   "Belita_No1",
   "Belita_Anger2",
   "Belita_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Belita_CallPlayer1",
   "Belita_Sorrow1",
   "Belita_Hmm2",
   "Belita_TickleStart1"
  ],
  "greetVoice": [
   "Belita_Greeting",
   "Belita_Lobby",
   "Belita_Spawn1",
   "Belita_Joy1",
   "Belita_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Sorry_1",
     "Tired_1",
     "Worry_1",
     "Worry_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Belita_Joy",
   "Proud_": "Belita_Pleasure",
   "Angry_": "Belita_Anger",
   "Sad_": "Belita_Sorrow",
   "Surprise_": "Belita_Surprise"
  }
 },
 {
  "id": "Beni",
  "name": "班尼",
  "en": "Beni",
  "desc": "兽人 · 2 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Beni/phone-avatar.png",
   "present": "assets/art/Beni/present.png",
   "album": "assets/art/Beni/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Beni",
    "dir": "assets/spine/Beni",
    "name": "默认",
    "desc": "基础外观（40 动作）",
    "voiceSkin": ""
   },
   {
    "id": "BeniSkin1",
    "dir": "assets/spine/BeniSkin1",
    "name": "阿姨熊",
    "desc": "班尼穿着一身好像不听话的衣服，但只是比平…（40 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_F"
   ],
   "face": [
    "S1_Face"
   ],
   "mouth": [
    "S1_Mouth"
   ],
   "cheekL": [
    "S1_Ball_L",
    "S1_Ball_L_Root"
   ],
   "cheekR": [
    "S1_Ball_Root"
   ],
   "belly": [
    "S1_Body_1",
    "Pelvis"
   ],
   "neck": [
    "S1_Neck"
   ],
   "tail": [],
   "earL": [
    "S1_Ear_L_0"
   ],
   "earR": [
    "S1_Ear_R_0"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S1_Ball_Root"
   ],
   "ballMoveP": [
    "S1_Ball_R_Root",
    "S1_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Proud_1",
    "Proud_2"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Beni_Touch1",
     "Beni_Touch1_1",
     "Beni_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Beni_Touch2",
     "Beni_Touch2_1",
     "Beni_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Beni_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Beni_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Beni_TickleStart1"
    ],
    "voiceMid": [
     "Beni_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Beni_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Beni_Surprise1",
   "Beni_Hmm1",
   "Beni_Yes1",
   "Beni_Touch1"
  ],
  "upsetVoice": [
   "Beni_Anger1",
   "Beni_No1",
   "Beni_Anger2",
   "Beni_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Beni_CallPlayer1",
   "Beni_Sorrow1",
   "Beni_Hmm2",
   "Beni_TickleStart1"
  ],
  "greetVoice": [
   "Beni_Greeting",
   "Beni_Lobby",
   "Beni_Spawn1",
   "Beni_Joy1",
   "Beni_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Eat_4",
     "Eat_5",
     "Eat_6",
     "Eat_7",
     "Eat_8",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Proud_1",
     "Proud_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Excited_1",
     "Excited_2",
     "Excited_3",
     "Sleepy_1",
     "Sleepy_2",
     "Aside_1",
     "Aside_2",
     "Idle_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Beni_Joy",
   "Proud_": "Beni_Pleasure",
   "Angry_": "Beni_Anger",
   "Sad_": "Beni_Sorrow",
   "Surprise_": "Beni_Surprise"
  }
 },
 {
  "id": "BeniBeni",
  "name": "班尼（班尼）",
  "en": "BeniBeni",
  "desc": "兽人 · 3 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/BeniBeni/phone-avatar.png",
   "present": "assets/art/BeniBeni/present.png",
   "album": "assets/art/BeniBeni/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "BeniBeni",
    "dir": "assets/spine/BeniBeni",
    "name": "默认",
    "desc": "基础外观（63 动作）",
    "voiceSkin": ""
   },
   {
    "id": "BeniBeniSkin1",
    "dir": "assets/spine/BeniBeniSkin1",
    "name": "剑道部对练日记",
    "desc": "班尼(班尼)穿上剑道服与隔壁学校剑道部对…（63 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "BeniBeniSkin2",
    "dir": "assets/spine/BeniBeniSkin2",
    "name": "森林反派熊",
    "desc": "拿着来路不明的电锯在森林里四处游荡的班尼…（63 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck"
   ],
   "tail": [],
   "earL": [
    "Beanie_Ear_L_Root",
    "Ear_Original_L_Root"
   ],
   "earR": [
    "Beanie_Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1",
    "Proud_2"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "BeniBeni_Touch1",
     "BeniBeni_Touch1_1",
     "BeniBeni_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "BeniBeni_Touch2",
     "BeniBeni_Touch2_1",
     "BeniBeni_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "BeniBeni_DutchRubEnd1"
    ],
    "voiceEnd": [
     "BeniBeni_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "BeniBeni_TickleStart1"
    ],
    "voiceMid": [
     "BeniBeni_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "BeniBeni_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "BeniBeni_Surprise1",
   "BeniBeni_Hmm1",
   "BeniBeni_Yes1",
   "BeniBeni_Touch1"
  ],
  "upsetVoice": [
   "BeniBeni_Anger1",
   "BeniBeni_No1",
   "BeniBeni_Anger2",
   "BeniBeni_DutchRubEnd1"
  ],
  "hungryVoice": [
   "BeniBeni_CallPlayer1",
   "BeniBeni_Sorrow1",
   "BeniBeni_Hmm2",
   "BeniBeni_TickleStart1"
  ],
  "greetVoice": [
   "BeniBeni_Greeting",
   "BeniBeni_Lobby",
   "BeniBeni_Spawn1",
   "BeniBeni_Joy1",
   "BeniBeni_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Eat_4",
     "Eat_5",
     "Eat_6",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Proud_1",
     "Proud_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Beni_1",
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Excited_1",
     "Excited_2",
     "Excited_3",
     "Shy_1",
     "Shy_2",
     "Sleepy_1",
     "Sleepy_2",
     "Sorry_1",
     "Sorry_2",
     "Sorry_3",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "BeniBeni_Joy",
   "Proud_": "BeniBeni_Pleasure",
   "Angry_": "BeniBeni_Anger",
   "Sad_": "BeniBeni_Sorrow",
   "Surprise_": "BeniBeni_Surprise"
  }
 },
 {
  "id": "BigWood",
  "name": "大木头",
  "en": "BigWood",
  "desc": "灵体 · 2 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/BigWood/phone-avatar.png",
   "present": "assets/art/BigWood/present.png",
   "album": "assets/art/BigWood/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "BigWood",
    "dir": "assets/spine/BigWood",
    "name": "默认",
    "desc": "基础外观（31 动作）",
    "voiceSkin": ""
   },
   {
    "id": "BigWoodSkin1",
    "dir": "assets/spine/BigWoodSkin1",
    "name": "维多利亚风女仆",
    "desc": "唉…不知道他从哪里学来的打扮，但自己很满…（35 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S1_Head",
    "S1_Head_Spin"
   ],
   "headTop": [
    "S1_Head",
    "Hair_L_1"
   ],
   "face": [],
   "mouth": [
    "S1_Mouth"
   ],
   "cheekL": [],
   "cheekR": [],
   "belly": [
    "S1_Body"
   ],
   "neck": [
    "Neck_AC_Root"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move"
   ],
   "ballMoveP": [
    "S1_Body"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head",
    "S1_Head_Spin"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "BigWood_Touch1",
     "BigWood_Touch1_1",
     "BigWood_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "BigWood_Touch2",
     "BigWood_Touch2_1",
     "BigWood_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "BigWood_DutchRubEnd1"
    ],
    "voiceEnd": [
     "BigWood_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "BigWood_TickleStart1"
    ],
    "voiceMid": [
     "BigWood_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "BigWood_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "BigWood_Surprise1",
   "BigWood_Hmm1",
   "BigWood_Yes1",
   "BigWood_Touch1"
  ],
  "upsetVoice": [
   "BigWood_Anger1",
   "BigWood_No1",
   "BigWood_Anger2",
   "BigWood_DutchRubEnd1"
  ],
  "hungryVoice": [
   "BigWood_CallPlayer1",
   "BigWood_Sorrow1",
   "BigWood_Hmm2",
   "BigWood_TickleStart1"
  ],
  "greetVoice": [
   "BigWood_Greeting",
   "BigWood_Lobby",
   "BigWood_Spawn1",
   "BigWood_Joy1",
   "BigWood_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Sad_1",
     "Sad_2",
     "Sad_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Thinking_1",
     "Thinking_2",
     "Thinking_3",
     "Thinking_4",
     "Thinking_5",
     "Aside_1",
     "Aside_2",
     "Idle_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "BigWood_Joy",
   "Proud_": "BigWood_Pleasure",
   "Angry_": "BigWood_Anger",
   "Sad_": "BigWood_Sorrow",
   "Surprise_": "BigWood_Surprise"
  }
 },
 {
  "id": "Blanchet",
  "name": "布蓝琪",
  "en": "Blanchet",
  "desc": "灵体 · 4 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Blanchet/phone-avatar.png",
   "present": "assets/art/Blanchet/present.png",
   "album": "assets/art/Blanchet/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Blanchet",
    "dir": "assets/spine/Blanchet",
    "name": "默认",
    "desc": "基础外观（44 动作）",
    "voiceSkin": ""
   },
   {
    "id": "BlanchetSkin1",
    "dir": "assets/spine/BlanchetSkin1",
    "name": "颁奖典礼的女演员",
    "desc": "布蓝琪出席了莫纳蒂姆戏剧电影节的颁奖典礼…（44 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "BlanchetSkin2",
    "dir": "assets/spine/BlanchetSkin2",
    "name": "挑战！女演员兔子",
    "desc": "布蓝琪说自己在新剧中饰演兔子，为了研究角…（44 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "BlanchetSkin3",
    "dir": "assets/spine/BlanchetSkin3",
    "name": "体育场的蓝玫瑰",
    "desc": "体育场里最火热的啦啦队员布蓝琪。只要她安…（44 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Bird_Head"
   ],
   "headTop": [
    "Head",
    "Bird_Hair_Root"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [
    "Bird_Tail"
   ],
   "earL": [
    "EarRing_R_Root"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Bird_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Blanchet_Touch1",
     "Blanchet_Touch1_1",
     "Blanchet_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Blanchet_Touch2",
     "Blanchet_Touch2_1",
     "Blanchet_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Blanchet_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Blanchet_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Blanchet_TickleStart1"
    ],
    "voiceMid": [
     "Blanchet_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Blanchet_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Blanchet_Surprise1",
   "Blanchet_Hmm1",
   "Blanchet_Yes1",
   "Blanchet_Touch1"
  ],
  "upsetVoice": [
   "Blanchet_Anger1",
   "Blanchet_No1",
   "Blanchet_Anger2",
   "Blanchet_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Blanchet_CallPlayer1",
   "Blanchet_Sorrow1",
   "Blanchet_Hmm2",
   "Blanchet_TickleStart1"
  ],
  "greetVoice": [
   "Blanchet_Greeting",
   "Blanchet_Lobby",
   "Blanchet_Spawn1",
   "Blanchet_Joy1",
   "Blanchet_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Greeting_1",
     "Greeting_2",
     "Posing_1",
     "Posing_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Blanchet_Joy",
   "Proud_": "Blanchet_Pleasure",
   "Angry_": "Blanchet_Anger",
   "Sad_": "Blanchet_Sorrow",
   "Surprise_": "Blanchet_Surprise"
  }
 },
 {
  "id": "Canna",
  "name": "康娜",
  "en": "Canna",
  "desc": "精灵 · 4 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Canna/phone-avatar.png",
   "present": "assets/art/Canna/present.png",
   "album": "assets/art/Canna/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Canna",
    "dir": "assets/spine/Canna",
    "name": "默认",
    "desc": "基础外观（36 动作）",
    "voiceSkin": ""
   },
   {
    "id": "CannaSkin1",
    "dir": "assets/spine/CannaSkin1",
    "name": "龙之破坏者",
    "desc": "康娜心爱的便服装束。毕竟是军人出身，格斗…（36 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "CannaSkin2",
    "dir": "assets/spine/CannaSkin2",
    "name": "仲夏冲浪者",
    "desc": "终于拿到假期，带着全力玩耍的信念的康娜。…（36 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "CannaSkin4",
    "dir": "assets/spine/CannaSkin4",
    "name": "石棺精灵",
    "desc": "因为微不足道却重要的理由重生为反派的康娜…（36 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_Root"
   ],
   "face": [
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1",
    "S1_Weapon_Body"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [
    "S1_Ear_R"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1",
    "S1_Weapon_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Canna_Touch1",
     "Canna_Touch1_1",
     "Canna_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Canna_Touch2",
     "Canna_Touch2_1",
     "Canna_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Canna_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Canna_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Canna_TickleStart1"
    ],
    "voiceMid": [
     "Canna_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Canna_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Canna_Surprise1",
   "Canna_Hmm1",
   "Canna_Yes1",
   "Canna_Touch1"
  ],
  "upsetVoice": [
   "Canna_Anger1",
   "Canna_No1",
   "Canna_Anger2",
   "Canna_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Canna_CallPlayer1",
   "Canna_Sorrow1",
   "Canna_Hmm2",
   "Canna_TickleStart1"
  ],
  "greetVoice": [
   "Canna_Greeting",
   "Canna_Lobby",
   "Canna_Spawn1",
   "Canna_Joy1",
   "Canna_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Taunt_1",
     "Taunt_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Sorry_1",
     "Sorry_2",
     "Sorry_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Canna_Joy",
   "Proud_": "Canna_Pleasure",
   "Angry_": "Canna_Anger",
   "Sad_": "Canna_Sorrow",
   "Surprise_": "Canna_Surprise"
  }
 },
 {
  "id": "Canta",
  "name": "康塔",
  "en": "Canta",
  "desc": "妖精 · 1 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Canta/phone-avatar.png",
   "present": "assets/art/Canta/present.png",
   "album": "assets/art/Canta/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Canta",
    "dir": "assets/spine/Canta",
    "name": "默认",
    "desc": "基础外观（47 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Body_RCT_Head"
   ],
   "headTop": [
    "Hair_FrontSide_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Ear"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Body_RCT_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Canta_Touch1",
     "Canta_Touch1_1",
     "Canta_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Canta_Touch2",
     "Canta_Touch2_1",
     "Canta_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Canta_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Canta_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Canta_TickleStart1"
    ],
    "voiceMid": [
     "Canta_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Canta_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Canta_Surprise1",
   "Canta_Hmm1",
   "Canta_Yes1",
   "Canta_Touch1"
  ],
  "upsetVoice": [
   "Canta_Anger1",
   "Canta_No1",
   "Canta_Anger2",
   "Canta_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Canta_CallPlayer1",
   "Canta_Sorrow1",
   "Canta_Hmm2",
   "Canta_TickleStart1"
  ],
  "greetVoice": [
   "Canta_Greeting",
   "Canta_Lobby",
   "Canta_Spawn1",
   "Canta_Joy1",
   "Canta_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Shy_1",
     "Shy_2",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Canta_Joy",
   "Proud_": "Canta_Pleasure",
   "Angry_": "Canta_Anger",
   "Sad_": "Canta_Sorrow",
   "Surprise_": "Canta_Surprise"
  }
 },
 {
  "id": "Carren",
  "name": "卡伦",
  "en": "Carren",
  "desc": "妖精 · 1 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Carren/phone-avatar.png",
   "present": "assets/art/Carren/present.png",
   "album": "assets/art/Carren/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Carren",
    "dir": "assets/spine/Carren",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Back"
   ],
   "headTop": [
    "Head",
    "Hair_Side_L"
   ],
   "face": [
    "Face"
   ],
   "mouth": [],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Back"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1",
    "Proud_2"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Carren_Touch1",
     "Carren_Touch1_1",
     "Carren_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Carren_Touch2",
     "Carren_Touch2_1",
     "Carren_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Carren_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Carren_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Carren_TickleStart1"
    ],
    "voiceMid": [
     "Carren_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Carren_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Carren_Surprise1",
   "Carren_Hmm1",
   "Carren_Yes1",
   "Carren_Touch1"
  ],
  "upsetVoice": [
   "Carren_Anger1",
   "Carren_No1",
   "Carren_Anger2",
   "Carren_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Carren_CallPlayer1",
   "Carren_Sorrow1",
   "Carren_Hmm2",
   "Carren_TickleStart1"
  ],
  "greetVoice": [
   "Carren_Greeting",
   "Carren_Lobby",
   "Carren_Spawn1",
   "Carren_Joy1",
   "Carren_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Eat_4",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Proud_1",
     "Proud_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Shy_1",
     "Shy_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Carren_Joy",
   "Proud_": "Carren_Pleasure",
   "Angry_": "Carren_Anger",
   "Sad_": "Carren_Sorrow",
   "Surprise_": "Carren_Surprise"
  }
 },
 {
  "id": "Chloe",
  "name": "克萝伊",
  "en": "Chloe",
  "desc": "妖精 · 6 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Chloe/phone-avatar.png",
   "present": "assets/art/Chloe/present.png",
   "album": "assets/art/Chloe/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Chloe",
    "dir": "assets/spine/Chloe",
    "name": "默认",
    "desc": "基础外观（49 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ChloeSkin1",
    "dir": "assets/spine/ChloeSkin1",
    "name": "毛茸茸狮子面具",
    "desc": "克萝伊戴着受莫纳蒂姆表演启发制作的狮子面…（49 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ChloeSkin2",
    "dir": "assets/spine/ChloeSkin2",
    "name": "奢华裁缝",
    "desc": "克萝伊作为艾尔菲恩名人裁缝，收到了名牌服…（49 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "ChloeSkin3",
    "dir": "assets/spine/ChloeSkin3",
    "name": "潮流热带",
    "desc": "克萝伊做好了充分准备，期待在海滩玩水。看…（49 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "ChloeSkin4",
    "dir": "assets/spine/ChloeSkin4",
    "name": "泰迪噩梦",
    "desc": "与名为噩梦的玩偶骑士一起的玩偶术师。与骑…（49 动作）",
    "voiceSkin": "_Skin4"
   },
   {
    "id": "ChloeSkin5",
    "dir": "assets/spine/ChloeSkin5",
    "name": "杏花与嗷呜",
    "desc": "可靠的嗷呜和如花般明艳的人偶师克萝伊。她…（49 动作）",
    "voiceSkin": "_Skin5"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Seba_Head"
   ],
   "headTop": [
    "Hair_Front_R_1_0",
    "Head"
   ],
   "face": [
    "Face_HCT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Seba_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Chloe_Touch1",
     "Chloe_Touch1_1",
     "Chloe_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Chloe_Touch2",
     "Chloe_Touch2_1",
     "Chloe_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Chloe_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Chloe_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Chloe_TickleStart1"
    ],
    "voiceMid": [
     "Chloe_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Chloe_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Chloe_Surprise1",
   "Chloe_Hmm1",
   "Chloe_Yes1",
   "Chloe_Touch1"
  ],
  "upsetVoice": [
   "Chloe_Anger1",
   "Chloe_No1",
   "Chloe_Anger2",
   "Chloe_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Chloe_CallPlayer1",
   "Chloe_Sorrow1",
   "Chloe_Hmm2",
   "Chloe_TickleStart1"
  ],
  "greetVoice": [
   "Chloe_Greeting",
   "Chloe_Lobby",
   "Chloe_Spawn1",
   "Chloe_Joy1",
   "Chloe_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Groggy_1",
     "Point_1",
     "Point_2",
     "Sulky_1",
     "Sulky_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Chloe_Joy",
   "Proud_": "Chloe_Pleasure",
   "Angry_": "Chloe_Anger",
   "Sad_": "Chloe_Sorrow",
   "Surprise_": "Chloe_Surprise"
  }
 },
 {
  "id": "Chloe_SebaOff",
  "name": "克罗伊·校园",
  "en": "Chloe_SebaOff",
  "desc": "妖精 · 1 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Chloe/phone-avatar.png",
   "present": "assets/art/Chloe/present.png",
   "album": "assets/art/Chloe/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Chloe_SebaOff",
    "dir": "assets/spine/Chloe_SebaOff",
    "name": "默认",
    "desc": "基础外观（44 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front_R_1_0",
    "Head"
   ],
   "face": [
    "Face_HCT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Happy_1"
   ],
   "tickleIdle2": [
    "Happy_1"
   ],
   "tickleEnd": [
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Surprise_1"
   ],
   "smash2": [
    "Happy_1"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Chloe_SebaOff_Touch1",
     "Chloe_SebaOff_Touch1_1",
     "Chloe_SebaOff_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Chloe_SebaOff_Touch2",
     "Chloe_SebaOff_Touch2_1",
     "Chloe_SebaOff_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [],
    "voiceEnd": []
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [],
    "voiceMid": [],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": []
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Chloe_SebaOff_Touch1"
  ],
  "upsetVoice": [],
  "hungryVoice": [],
  "greetVoice": [
   "Chloe_SebaOff_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Groggy_1",
     "Point_1",
     "Point_2",
     "Sulky_1",
     "Sulky_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {}
 },
 {
  "id": "Chopi",
  "name": "乔菲",
  "en": "Chopi",
  "desc": "兽人 · 1 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Chopi/phone-avatar.png",
   "present": "assets/art/Chopi/present.png",
   "album": "assets/art/Chopi/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Chopi",
    "dir": "assets/spine/Chopi",
    "name": "默认",
    "desc": "基础外观（36 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Head",
    "F_Hair_1_Root"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_L_1"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1",
    "Proud_2"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Chopi_Touch1",
     "Chopi_Touch1_1",
     "Chopi_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Chopi_Touch2",
     "Chopi_Touch2_1",
     "Chopi_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Chopi_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Chopi_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Chopi_TickleStart1"
    ],
    "voiceMid": [
     "Chopi_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "ChopI_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "ChopI_Surprise1",
   "ChopI_Hmm1",
   "ChopI_Yes1",
   "Chopi_Touch1"
  ],
  "upsetVoice": [
   "ChopI_Anger1",
   "ChopI_No1",
   "ChopI_Anger2",
   "Chopi_DutchRubEnd1"
  ],
  "hungryVoice": [
   "ChopI_CallPlayer1",
   "ChopI_Sorrow1",
   "ChopI_Hmm2",
   "Chopi_TickleStart1"
  ],
  "greetVoice": [
   "ChopI_Greeting",
   "Chopi_Lobby",
   "Chopi_Spawn1",
   "ChopI_Joy1",
   "Chopi_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Proud_1",
     "Proud_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "ChopI_Joy",
   "Proud_": "ChopI_Pleasure",
   "Angry_": "ChopI_Anger",
   "Sad_": "ChopI_Sorrow",
   "Surprise_": "ChopI_Surprise"
  }
 },
 {
  "id": "Cuee",
  "name": "路易",
  "en": "Cuee",
  "desc": "妖精 · 1 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Cuee/phone-avatar.png",
   "present": "assets/art/Cuee/present.png",
   "album": "assets/art/Cuee/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Cuee",
    "dir": "assets/spine/Cuee",
    "name": "默认",
    "desc": "基础外观（50 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Back"
   ],
   "headTop": [
    "Hair_Front_3",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Back"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Cuee_Touch1",
     "Cuee_Touch1_1",
     "Cuee_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Cuee_Touch2",
     "Cuee_Touch2_1",
     "Cuee_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Cuee_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Cuee_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Cuee_TickleStart1"
    ],
    "voiceMid": [
     "Cuee_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Cuee_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Cuee_Surprise1",
   "Cuee_Hmm1",
   "Cuee_Yes1",
   "Cuee_Touch1"
  ],
  "upsetVoice": [
   "Cuee_Anger1",
   "Cuee_No1",
   "Cuee_Anger2",
   "Cuee_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Cuee_CallPlayer1",
   "Cuee_Sorrow1",
   "Cuee_Hmm2",
   "Cuee_TickleStart1"
  ],
  "greetVoice": [
   "Cuee_Greeting",
   "Cuee_Lobby",
   "Cuee_Spawn1",
   "Cuee_Joy1",
   "Cuee_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Serious_1",
     "Serious_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Dance_2",
     "Oioi_1",
     "Oioi_2",
     "Shy_1",
     "Shy_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Cuee_Joy",
   "Proud_": "Cuee_Pleasure",
   "Angry_": "Cuee_Anger",
   "Sad_": "Cuee_Sorrow",
   "Surprise_": "Cuee_Surprise"
  }
 },
 {
  "id": "Daya",
  "name": "达雅",
  "en": "Daya",
  "desc": "龙族 · 4 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Daya/phone-avatar.png",
   "present": "assets/art/Daya/present.png",
   "album": "assets/art/Daya/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Daya",
    "dir": "assets/spine/Daya",
    "name": "默认",
    "desc": "基础外观（34 动作）",
    "voiceSkin": ""
   },
   {
    "id": "DayaSkin1",
    "dir": "assets/spine/DayaSkin1",
    "name": "学生会长的气质",
    "desc": "达雅在龙族学生时代一直是全年级第一，并担…（34 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "DayaSkin2",
    "dir": "assets/spine/DayaSkin2",
    "name": "超强安全员",
    "desc": "达雅放弃玩水，作为安全员活跃。只要脚踩到…（34 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "DayaSkin3",
    "dir": "assets/spine/DayaSkin3",
    "name": "闪耀的深夜",
    "desc": "达雅向亲密朋友学会在黑暗中也不失光芒。现…（34 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "S3_Head"
   ],
   "headTop": [
    "S3_Hair_Root"
   ],
   "face": [
    "S3_Face"
   ],
   "mouth": [
    "S3_F_Mouth"
   ],
   "cheekL": [
    "S3_F_Ball_L_Root"
   ],
   "cheekR": [
    "S3_F_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [
    "S3_Ear_L"
   ],
   "earR": [
    "S3_Ear_R"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S3_F_Ball_Root"
   ],
   "ballMoveP": [
    "S3_F_Ball_R_Root",
    "S3_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S3_Head"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Daya_Touch1",
     "Daya_Touch1_1",
     "Daya_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Daya_Touch2",
     "Daya_Touch2_1",
     "Daya_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Daya_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Daya_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Daya_TickleStart1"
    ],
    "voiceMid": [
     "Daya_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Daya_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Daya_Surprise1",
   "Daya_Hmm1",
   "Daya_Yes1",
   "Daya_Touch1"
  ],
  "upsetVoice": [
   "Daya_Anger1",
   "Daya_No1",
   "Daya_Anger2",
   "Daya_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Daya_CallPlayer1",
   "Daya_Sorrow1",
   "Daya_Hmm2",
   "Daya_TickleStart1"
  ],
  "greetVoice": [
   "Daya_Greeting",
   "Daya_Lobby",
   "Daya_Spawn1",
   "Daya_Joy1",
   "Daya_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Shy_1",
     "Shy_2",
     "Sleepy_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Daya_Joy",
   "Proud_": "Daya_Pleasure",
   "Angry_": "Daya_Anger",
   "Sad_": "Daya_Sorrow",
   "Surprise_": "Daya_Surprise"
  }
 },
 {
  "id": "DayaPureShine",
  "name": "达雅（纯真闪耀）",
  "en": "DayaPureShine",
  "desc": "龙族 · 4 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/DayaPureShine/phone-avatar.png",
   "present": "assets/art/DayaPureShine/present.png",
   "album": "assets/art/DayaPureShine/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "DayaPureShine",
    "dir": "assets/spine/DayaPureShine",
    "name": "默认",
    "desc": "基础外观（50 动作）",
    "voiceSkin": ""
   },
   {
    "id": "DayaPureShineSkin1",
    "dir": "assets/spine/DayaPureShineSkin1",
    "name": "闪耀兔兔",
    "desc": "魔法少女纯粹闪耀的粉丝福利用特别服装。每…（50 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "DayaPureShineSkin2",
    "dir": "assets/spine/DayaPureShineSkin2",
    "name": "闪耀原本",
    "desc": "不是以纯粹闪耀，而是以龙族领导者身份活动…（50 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "DayaPureShineSkin3",
    "dir": "assets/spine/DayaPureShineSkin3",
    "name": "闪耀商务",
    "desc": "达雅（纯真闪耀）化身为穿着闪耀又专业的公…（50 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head3"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [
    "Neck_root"
   ],
   "tail": [
    "Tail_root"
   ],
   "earL": [
    "Ear_L_root",
    "Ear_L_1"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head3"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "DayaPureShine_Touch1",
     "DayaPureShine_Touch1_1",
     "DayaPureShine_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "DayaPureShine_Touch2",
     "DayaPureShine_Touch2_1",
     "DayaPureShine_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "DayaPureShine_DutchRubEnd1"
    ],
    "voiceEnd": [
     "DayaPureShine_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "DayaPureShine_TickleStart1"
    ],
    "voiceMid": [
     "DayaPureShine_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "DayaPureShine_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "DayaPureShine_Surprise1",
   "DayaPureShine_Hmm1",
   "DayaPureShine_Yes1",
   "DayaPureShine_Touch1"
  ],
  "upsetVoice": [
   "DayaPureShine_Anger1",
   "DayaPureShine_No1",
   "DayaPureShine_Anger2",
   "DayaPureShine_DutchRubEnd1"
  ],
  "hungryVoice": [
   "DayaPureShine_CallPlayer1",
   "DayaPureShine_Sorrow1",
   "DayaPureShine_Hmm2",
   "DayaPureShine_TickleStart1"
  ],
  "greetVoice": [
   "DayaPureShine_Greeting",
   "DayaPureShine_Lobby",
   "DayaPureShine_Spawn1",
   "DayaPureShine_Joy1",
   "DayaPureShine_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Shy_5",
     "Shy_6",
     "Sorry_1",
     "Sorry_2",
     "Sulky_1",
     "Thinking_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "DayaPureShine_Joy",
   "Proud_": "DayaPureShine_Pleasure",
   "Angry_": "DayaPureShine_Anger",
   "Sad_": "DayaPureShine_Sorrow",
   "Surprise_": "DayaPureShine_Surprise"
  }
 },
 {
  "id": "Delia",
  "name": "黛莉娅",
  "en": "Delia",
  "desc": "兽人 · 3 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Delia/phone-avatar.png",
   "present": "assets/art/Delia/present.png",
   "album": "assets/art/Delia/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Delia",
    "dir": "assets/spine/Delia",
    "name": "默认",
    "desc": "基础外观（45 动作）",
    "voiceSkin": ""
   },
   {
    "id": "DeliaSkin1",
    "dir": "assets/spine/DeliaSkin1",
    "name": "我的梦想是夜光恐龙",
    "desc": "小时候喜欢恐龙的黛莉娅，怀揣着长大后能成…（45 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "DeliaSkin2",
    "dir": "assets/spine/DeliaSkin2",
    "name": "与大家一起去海边",
    "desc": "和格温一同来到海边的黛莉娅。一想到要和大…（45 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_R"
   ],
   "tail": [
    "Tail_Root"
   ],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Delia_Touch1",
     "Delia_Touch1_1",
     "Delia_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Delia_Touch2",
     "Delia_Touch2_1",
     "Delia_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Delia_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Delia_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Delia_TickleStart1"
    ],
    "voiceMid": [
     "Delia_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Delia_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Delia_Surprise1",
   "Delia_Hmm1",
   "Delia_Yes1",
   "Delia_Touch1"
  ],
  "upsetVoice": [
   "Delia_Anger1",
   "Delia_No1",
   "Delia_Anger2",
   "Delia_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Delia_CallPlayer1",
   "Delia_Sorrow1",
   "Delia_Hmm2",
   "Delia_TickleStart1"
  ],
  "greetVoice": [
   "Delia_Greeting",
   "Delia_Lobby",
   "Delia_Spawn1",
   "Delia_Joy1",
   "Delia_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Sleepy_1",
     "Sulky_1",
     "Sulky_2",
     "Sleepy",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Delia_Joy",
   "Proud_": "Delia_Pleasure",
   "Angry_": "Delia_Anger",
   "Sad_": "Delia_Sorrow",
   "Surprise_": "Delia_Surprise"
  }
 },
 {
  "id": "Diana",
  "name": "黛安娜",
  "en": "Diana",
  "desc": "兽人 · 5 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Diana/phone-avatar.png",
   "present": "assets/art/Diana/present.png",
   "album": "assets/art/Diana/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Diana",
    "dir": "assets/spine/Diana",
    "name": "默认",
    "desc": "基础外观（61 动作）",
    "voiceSkin": ""
   },
   {
    "id": "DianaSkin1",
    "dir": "assets/spine/DianaSkin1",
    "name": "海边清道夫",
    "desc": "玩水结束后，似乎有使徒毫无常识地把垃圾丢…（61 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "DianaSkin2",
    "dir": "assets/spine/DianaSkin2",
    "name": "冬山登山服",
    "desc": "在下雪的冬天，穿着收到的登山服在莫纳蒂姆…（61 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "DianaSkin3",
    "dir": "assets/spine/DianaSkin3",
    "name": "小花鹿",
    "desc": "为了心态年轻做好万全准备的黛安娜。手中的…（61 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "DianaSkin4",
    "dir": "assets/spine/DianaSkin4",
    "name": "野山温泉小憩",
    "desc": "黛安娜似乎喜欢温暖的温泉。感觉就是这样。…（61 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Hair_9_0",
    "S1_Head"
   ],
   "face": [
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "S1_F_Ear_L_0"
   ],
   "earR": [
    "S1_F_Ear_R_0"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S1_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Diana_Touch1",
     "Diana_Touch1_1",
     "Diana_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Diana_Touch2",
     "Diana_Touch2_1",
     "Diana_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Diana_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Diana_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Diana_TickleStart1"
    ],
    "voiceMid": [
     "Diana_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Diana_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Diana_Surprise1",
   "Diana_Hmm1",
   "Diana_Yes1",
   "Diana_Touch1"
  ],
  "upsetVoice": [
   "Diana_Anger1",
   "Diana_No1",
   "Diana_Anger2",
   "Diana_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Diana_CallPlayer1",
   "Diana_Sorrow1",
   "Diana_Hmm2",
   "Diana_TickleStart1"
  ],
  "greetVoice": [
   "Diana_Greeting",
   "Diana_Lobby",
   "Diana_Spawn1",
   "Diana_Joy1",
   "Diana_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Serious_5",
     "Serious_6",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Latte_1",
     "Latte_2",
     "Open_1",
     "Open_2",
     "Open_3",
     "Open_4",
     "Open_5",
     "Open_6",
     "Regret_1",
     "Regret_2",
     "Regret_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Sulky_4",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Diana_Joy",
   "Proud_": "Diana_Pleasure",
   "Angry_": "Diana_Anger",
   "Sad_": "Diana_Sorrow",
   "Surprise_": "Diana_Surprise"
  }
 },
 {
  "id": "DianaYester",
  "name": "黛安娜(往昔)",
  "en": "DianaYester",
  "desc": "兽人 · 4 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/DianaYester/phone-avatar.png",
   "present": "assets/art/DianaYester/present.png",
   "album": "assets/art/DianaYester/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "DianaYester",
    "dir": "assets/spine/DianaYester",
    "name": "默认",
    "desc": "基础外观（65 动作）",
    "voiceSkin": ""
   },
   {
    "id": "DianaYesterSkin1",
    "dir": "assets/spine/DianaYesterSkin1",
    "name": "教团军纪班长",
    "desc": "严格来说，黛安娜（往昔）没有任何归属地，…（65 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "DianaYesterSkin2",
    "dir": "assets/spine/DianaYesterSkin2",
    "name": "狂野海滩冲浪者",
    "desc": "因为觉得几乎像个局外人，黛安娜（往昔）对…（65 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "DianaYesterSkin3",
    "dir": "assets/spine/DianaYesterSkin3",
    "name": "号令苍穹的咆哮",
    "desc": "经过漫长修炼，终于抵达武道极境的黛雅（往…（65 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Weapon_Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face_CT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body",
    "Pelvis"
   ],
   "neck": [
    "Necklace_1"
   ],
   "tail": [
    "Shawl_B_L_Tail"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_L"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Face",
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Weapon_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "DianaYester_Touch1",
     "DianaYester_Touch1_1",
     "DianaYester_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "DianaYester_Touch2",
     "DianaYester_Touch2_1",
     "DianaYester_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "DianaYester_DutchRubEnd1"
    ],
    "voiceEnd": [
     "DianaYester_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "DianaYester_TickleStart1"
    ],
    "voiceMid": [
     "DianaYester_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "DianaYester_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "DianaYester_Surprise1",
   "DianaYester_Hmm1",
   "DianaYester_Yes1",
   "DianaYester_Touch1"
  ],
  "upsetVoice": [
   "DianaYester_Anger1",
   "DianaYester_No1",
   "DianaYester_Anger2",
   "DianaYester_DutchRubEnd1"
  ],
  "hungryVoice": [
   "DianaYester_CallPlayer1",
   "DianaYester_Sorrow1",
   "DianaYester_Hmm2",
   "DianaYester_TickleStart1"
  ],
  "greetVoice": [
   "DianaYester_Greeting",
   "DianaYester_Lobby",
   "DianaYester_Spawn1",
   "DianaYester_Joy1",
   "DianaYester_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Panic_7",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3",
     "Idle_4",
     "Idle_5"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Mad_1",
     "Mad_2",
     "Mad_3",
     "Mad_4",
     "Mad_5",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "DianaYester_Joy",
   "Proud_": "DianaYester_Pleasure",
   "Angry_": "DianaYester_Anger",
   "Sad_": "DianaYester_Sorrow",
   "Surprise_": "DianaYester_Surprise"
  }
 },
 {
  "id": "Ed",
  "name": "伊德",
  "en": "Ed",
  "desc": "精灵 · 5 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Ed/phone-avatar.png",
   "present": "assets/art/Ed/present.png",
   "album": "assets/art/Ed/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Ed",
    "dir": "assets/spine/Ed",
    "name": "默认",
    "desc": "基础外观（45 动作）",
    "voiceSkin": ""
   },
   {
    "id": "EdSkin1",
    "dir": "assets/spine/EdSkin1",
    "name": "梦般的瞬间",
    "desc": "梦般的瞬间（45 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "EdSkin2",
    "dir": "assets/spine/EdSkin2",
    "name": "永恒的等待",
    "desc": "永恒的等待（45 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "EdSkin3",
    "dir": "assets/spine/EdSkin3",
    "name": "沉睡之星的预知梦",
    "desc": "沉睡之星的预知梦（45 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "EdSkin4",
    "dir": "assets/spine/EdSkin4",
    "name": "于梦中重逢",
    "desc": "于梦中重逢（45 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Drone_Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face_HCT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Drone_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Ed_Touch1",
     "Ed_Touch1_1",
     "Ed_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Ed_Touch2",
     "Ed_Touch2_1",
     "Ed_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Ed_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Ed_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Ed_TickleStart1"
    ],
    "voiceMid": [
     "Ed_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Ed_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Ed_Surprise1",
   "Ed_Hmm1",
   "Ed_Yes1",
   "Ed_Touch1"
  ],
  "upsetVoice": [
   "Ed_Anger1",
   "Ed_No1",
   "Ed_Anger2",
   "Ed_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Ed_CallPlayer1",
   "Ed_Sorrow1",
   "Ed_Hmm2",
   "Ed_TickleStart1"
  ],
  "greetVoice": [
   "Ed_Greeting",
   "Ed_Lobby",
   "Ed_Spawn1",
   "Ed_Joy1",
   "Ed_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Surprise_1"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Ban_1",
     "Fear_1",
     "Off_1",
     "Shy_1",
     "Shy_2",
     "Sleep_1",
     "Sleep_2",
     "Sleep_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Ed_Joy",
   "Proud_": "Ed_Pleasure",
   "Angry_": "Ed_Anger",
   "Sad_": "Ed_Sorrow",
   "Surprise_": "Ed_Surprise"
  }
 },
 {
  "id": "EdRehab",
  "name": "伊德（康复）",
  "en": "EdRehab",
  "desc": "精灵 · 2 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/EdRehab/phone-avatar.png",
   "present": "assets/art/EdRehab/present.png",
   "album": "assets/art/EdRehab/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "EdRehab",
    "dir": "assets/spine/EdRehab",
    "name": "默认",
    "desc": "基础外观（61 动作）",
    "voiceSkin": ""
   },
   {
    "id": "EdRehabSkin1",
    "dir": "assets/spine/EdRehabSkin1",
    "name": "高中清晨",
    "desc": "为了上学而匆忙赶路的伊德（康复）。为了避…（60 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_root"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_root",
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "EdRehab_Touch1",
     "EdRehab_Touch1_1",
     "EdRehab_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "EdRehab_Touch2",
     "EdRehab_Touch2_1",
     "EdRehab_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "EdRehab_DutchRubEnd1"
    ],
    "voiceEnd": [
     "EdRehab_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "EdRehab_TickleStart1"
    ],
    "voiceMid": [
     "EdRehab_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "EdRehab_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "EdRehab_Surprise1",
   "EdRehab_Hmm1",
   "EdRehab_Yes1",
   "EdRehab_Touch1"
  ],
  "upsetVoice": [
   "EdRehab_Anger1",
   "EdRehab_No1",
   "EdRehab_Anger2",
   "EdRehab_DutchRubEnd1"
  ],
  "hungryVoice": [
   "EdRehab_CallPlayer1",
   "EdRehab_Sorrow1",
   "EdRehab_Hmm2",
   "EdRehab_TickleStart1"
  ],
  "greetVoice": [
   "EdRehab_Greeting",
   "EdRehab_Lobby",
   "EdRehab_Spawn1",
   "EdRehab_Joy1",
   "EdRehab_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Sad_10",
     "Sad_11",
     "Surprise_1"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Dance_1",
     "Gao_1",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Sleep_1",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Track_1",
     "Walk_1",
     "Walk_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "EdRehab_Joy",
   "Proud_": "EdRehab_Pleasure",
   "Angry_": "EdRehab_Anger",
   "Sad_": "EdRehab_Sorrow",
   "Surprise_": "EdRehab_Surprise"
  }
 },
 {
  "id": "Eisia",
  "name": "艾西亚",
  "en": "Eisia",
  "desc": "精灵 · 4 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Eisia/phone-avatar.png",
   "present": "assets/art/Eisia/present.png",
   "album": "assets/art/Eisia/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Eisia",
    "dir": "assets/spine/Eisia",
    "name": "默认",
    "desc": "基础外观（64 动作）",
    "voiceSkin": ""
   },
   {
    "id": "EisiaSkin1",
    "dir": "assets/spine/EisiaSkin1",
    "name": "少女 CEO",
    "desc": "少女 CEO（64 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "EisiaSkin2",
    "dir": "assets/spine/EisiaSkin2",
    "name": "冰雪股东大会",
    "desc": "冰雪股东大会（65 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "EisiaSkin3",
    "dir": "assets/spine/EisiaSkin3",
    "name": "宅家职业玩家",
    "desc": "宅家职业玩家（64 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "EyeBall_R"
   ],
   "belly": [
    "Body",
    "Pelvis"
   ],
   "neck": [
    "Neck"
   ],
   "tail": [],
   "earL": [
    "Ear_L"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "EyeBall_R"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "EyeBall_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Eisia_Touch1",
     "Eisia_Touch1_1",
     "Eisia_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Eisia_Touch2",
     "Eisia_Touch2_1",
     "Eisia_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Eisia_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Eisia_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Eisia_TickleStart1"
    ],
    "voiceMid": [
     "Eisia_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Eisia_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Eisia_Surprise1",
   "Eisia_Hmm1",
   "Eisia_Yes1",
   "Eisia_Touch1"
  ],
  "upsetVoice": [
   "Eisia_Anger1",
   "Eisia_No1",
   "Eisia_Anger2",
   "Eisia_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Eisia_CallPlayer1",
   "Eisia_Sorrow1",
   "Eisia_Hmm2",
   "Eisia_TickleStart1"
  ],
  "greetVoice": [
   "Eisia_Greeting",
   "Eisia_Lobby",
   "Eisia_Spawn1",
   "Eisia_Joy1",
   "Eisia_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Serious_5",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3",
     "Idle_4",
     "Idle_5"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Blank_5",
     "Joke_1",
     "Joke_2",
     "Joke_3",
     "Mad_1",
     "Money_1",
     "Money_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Eisia_Joy",
   "Proud_": "Eisia_Pleasure",
   "Angry_": "Eisia_Anger",
   "Sad_": "Eisia_Sorrow",
   "Surprise_": "Eisia_Surprise"
  }
 },
 {
  "id": "Elena",
  "name": "埃蕾娜",
  "en": "Elena",
  "desc": "精灵 · 4 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Elena/phone-avatar.png",
   "present": "assets/art/Elena/present.png",
   "album": "assets/art/Elena/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Elena",
    "dir": "assets/spine/Elena",
    "name": "默认",
    "desc": "基础外观（37 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ElenaSkin1",
    "dir": "assets/spine/ElenaSkin1",
    "name": "派对之夜·莫纳蒂姆",
    "desc": "埃蕾娜穿着礼服出现在莫纳蒂姆的晚宴派对上…（37 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ElenaSkin2",
    "dir": "assets/spine/ElenaSkin2",
    "name": "慵懒周末的家猫",
    "desc": "平时很难看到，但埃蕾娜在家休息时会穿别人…（37 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "ElenaSkin3",
    "dir": "assets/spine/ElenaSkin3",
    "name": "不一样次元的女王",
    "desc": "如果莫纳蒂姆是君主制，这个形象最适合埃蕾…（37 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_F"
   ],
   "face": [
    "S1_F_Face_VCT",
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [
    "S1_Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Elena_Touch1",
     "Elena_Touch1_1",
     "Elena_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Elena_Touch2",
     "Elena_Touch2_1",
     "Elena_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Elena_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Elena_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Elena_TickleStart1"
    ],
    "voiceMid": [
     "Elena_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Elena_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Elena_Surprise1",
   "Elena_Hmm1",
   "Elena_Yes1",
   "Elena_Touch1"
  ],
  "upsetVoice": [
   "Elena_Anger1",
   "Elena_No1",
   "Elena_Anger2",
   "Elena_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Elena_CallPlayer1",
   "Elena_Sorrow1",
   "Elena_Hmm2",
   "Elena_TickleStart1"
  ],
  "greetVoice": [
   "Elena_Greeting",
   "Elena_Lobby",
   "Elena_Spawn1",
   "Elena_Joy1",
   "Elena_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Surprise_1",
     "Surprise_2",
     "Taunt_1",
     "Taunt_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Sneaky_1",
     "Sneaky_2",
     "Sneaky_3",
     "Sneaky_4",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Elena_Joy",
   "Proud_": "Elena_Pleasure",
   "Angry_": "Elena_Anger",
   "Sad_": "Elena_Sorrow",
   "Surprise_": "Elena_Surprise"
  }
 },
 {
  "id": "Epica",
  "name": "埃皮卡",
  "en": "Epica",
  "desc": "兽人 · 5 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Epica/phone-avatar.png",
   "present": "assets/art/Epica/present.png",
   "album": "assets/art/Epica/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Epica",
    "dir": "assets/spine/Epica",
    "name": "默认",
    "desc": "基础外观（53 动作）",
    "voiceSkin": ""
   },
   {
    "id": "EpicaSkin1",
    "dir": "assets/spine/EpicaSkin1",
    "name": "只为你",
    "desc": "这套衣服是为谁准备的？问埃皮卡，她会歪头…（53 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "EpicaSkin2",
    "dir": "assets/spine/EpicaSkin2",
    "name": "努力的应援团长",
    "desc": "总是守护在身边！无论你吃饭、小憩，还是丢…（53 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "EpicaSkin3",
    "dir": "assets/spine/EpicaSkin3",
    "name": "随箭而来的故事",
    "desc": "曾是普通市民，却梦想成为最伟大的冒险者而…（53 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "EpicaSkin4",
    "dir": "assets/spine/EpicaSkin4",
    "name": "奥克故事的指挥家",
    "desc": "以宏大的合奏讲述故事的庞大乐团指挥家。创…（54 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Un_Head"
   ],
   "headTop": [
    "Head",
    "Front_Hair_Root"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Tail_Body"
   ],
   "neck": [],
   "tail": [
    "Tail_Body",
    "Un_Tail"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_L_1"
   ],
   "earR": [
    "Ear_Ring_L"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Un_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Tail_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1",
    "Proud_2"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Epica_Touch1",
     "Epica_Touch1_1",
     "Epica_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Epica_Touch2",
     "Epica_Touch2_1",
     "Epica_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Epica_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Epica_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Epica_TickleStart1"
    ],
    "voiceMid": [
     "Epica_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Epica_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Epica_Surprise1",
   "Epica_Hmm1",
   "Epica_Yes1",
   "Epica_Touch1"
  ],
  "upsetVoice": [
   "Epica_Anger1",
   "Epica_No1",
   "Epica_Anger2",
   "Epica_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Epica_CallPlayer1",
   "Epica_Sorrow1",
   "Epica_Hmm2",
   "Epica_TickleStart1"
  ],
  "greetVoice": [
   "Epica_Greeting",
   "Epica_Lobby",
   "Epica_Spawn1",
   "Epica_Joy1",
   "Epica_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Proud_1",
     "Proud_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Dance_1",
     "Kirat_1",
     "Kirat_2",
     "Kirat_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Talk_4",
     "Talk_5",
     "Talk_6",
     "Talk_7",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Epica_Joy",
   "Proud_": "Epica_Pleasure",
   "Angry_": "Epica_Anger",
   "Sad_": "Epica_Sorrow",
   "Surprise_": "Epica_Surprise"
  }
 },
 {
  "id": "Erpin",
  "name": "埃尔芬",
  "en": "Erpin",
  "desc": "妖精 · 7 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Erpin/phone-avatar.png",
   "present": "assets/art/Erpin/present.png",
   "album": "assets/art/Erpin/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Erpin",
    "dir": "assets/spine/Erpin",
    "name": "默认",
    "desc": "基础外观（105 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ErpinSkin1",
    "dir": "assets/spine/ErpinSkin1",
    "name": "辛勤工作的假期",
    "desc": "柯米湖主题乐园的头号劳动主力。她贵为女王…（105 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ErpinSkin2",
    "dir": "assets/spine/ErpinSkin2",
    "name": "王宫的焦点",
    "desc": "涅尔强行给埃尔芬穿上这身衣服后，谁都没能…（105 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "ErpinSkin3",
    "dir": "assets/spine/ErpinSkin3",
    "name": "活泼的实地学习",
    "desc": "埃尔芬外出实地学习穿的衣服。涅尔精心挑选…（105 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "ErpinSkin4",
    "dir": "assets/spine/ErpinSkin4",
    "name": "蹦蹦睡衣",
    "desc": "穿兔子睡衣的埃尔芬。穿上就像兔子一样，在…（105 动作）",
    "voiceSkin": "_Skin4"
   },
   {
    "id": "ErpinSkin5",
    "dir": "assets/spine/ErpinSkin5",
    "name": "全自动哥特",
    "desc": "跟着可丽饼一起跑去当女仆的埃尔芬。显然哪…（105 动作）",
    "voiceSkin": "_Skin5"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Weapon_Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Weapon_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Erpin_Touch1",
     "Erpin_Touch1_1",
     "Erpin_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Erpin_Touch2",
     "Erpin_Touch2_1",
     "Erpin_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Erpin_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Erpin_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Erpin_TickleStart1"
    ],
    "voiceMid": [
     "Erpin_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Erpin_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Erpin_Surprise1",
   "Erpin_Hmm1",
   "Erpin_Yes1",
   "Erpin_Touch1"
  ],
  "upsetVoice": [
   "Erpin_Anger1",
   "Erpin_No1",
   "Erpin_Anger2",
   "Erpin_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Erpin_CallPlayer1",
   "Erpin_Sorrow1",
   "Erpin_Hmm2",
   "Erpin_TickleStart1"
  ],
  "greetVoice": [
   "Erpin_Greeting",
   "Erpin_Lobby",
   "Erpin_Spawn1",
   "Erpin_Joy1",
   "Erpin_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Eat_4",
     "Eat_5",
     "Eat_6",
     "Eat_7",
     "Eat_8",
     "Eat_9",
     "Eat_10",
     "Eat_11",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Angry_11",
     "Angry_12",
     "Angry_13",
     "Angry_14",
     "Angry_15",
     "Angry_16",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Happy_11",
     "Happy_12",
     "Happy_13",
     "Happy_14",
     "Happy_15",
     "Happy_16",
     "Happy_17",
     "Happy_18",
     "Happy_19",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Sad_10",
     "Sad_11",
     "Sad_12",
     "Sad_13",
     "Sad_14",
     "Sad_15",
     "Sad_16",
     "Sad_17",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4",
     "Surprise_5",
     "Surprise_6",
     "Surprise_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Bbang_1",
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Blank_5",
     "Blank_6",
     "Blank_7",
     "Blank_8",
     "Hungry_1",
     "Hungry_2",
     "Hungry_3",
     "Notmyfault_1",
     "Notmyfault_2",
     "Notmyfault_3",
     "Notmyfault_4",
     "Ottokhaji _1",
     "Present_1",
     "Present_2",
     "Present_3",
     "Shy_1",
     "Shy_2",
     "Act1_1",
     "Act2_1",
     "Act3_1",
     "Angry1_1",
     "Eat1_1",
     "Idle",
     "Move",
     "Play1_1",
     "Sleep1_1",
     "Spawn",
     "Swim1_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Erpin_Joy",
   "Proud_": "Erpin_Pleasure",
   "Angry_": "Erpin_Anger",
   "Sad_": "Erpin_Sorrow",
   "Surprise_": "Erpin_Surprise"
  }
 },
 {
  "id": "ErpinRoyale",
  "name": "埃尔芬(王道)",
  "en": "ErpinRoyale",
  "desc": "妖精 · 3 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/ErpinRoyale/phone-avatar.png",
   "present": "assets/art/ErpinRoyale/present.png",
   "album": "assets/art/ErpinRoyale/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "ErpinRoyale",
    "dir": "assets/spine/ErpinRoyale",
    "name": "默认",
    "desc": "基础外观（109 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ErpinRoyaleSkin1",
    "dir": "assets/spine/ErpinRoyaleSkin1",
    "name": "一日祭司长涅尔芬",
    "desc": "说服涅尔后担任一日祭司长角色的埃尔芬(王…（109 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ErpinRoyaleSkin2",
    "dir": "assets/spine/ErpinRoyaleSkin2",
    "name": "王冠的主角",
    "desc": "在埃尔芬遇到非常特别之事的那天，盛装打扮…（109 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Ear_Ac_Root"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "ErpinRoyale_Touch1",
     "ErpinRoyale_Touch1_1",
     "ErpinRoyale_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "ErpinRoyale_Touch2",
     "ErpinRoyale_Touch2_1",
     "ErpinRoyale_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "ErpinRoyale_DutchRubEnd1"
    ],
    "voiceEnd": [
     "ErpinRoyale_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "ErpinRoyale_TickleStart1"
    ],
    "voiceMid": [
     "ErpinRoyale_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "ErpinRoyale_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "ErpinRoyale_Surprise1",
   "ErpinRoyale_Hmm1",
   "ErpinRoyale_Yes1",
   "ErpinRoyale_Touch1"
  ],
  "upsetVoice": [
   "ErpinRoyale_Anger1",
   "ErpinRoyale_No1",
   "ErpinRoyale_Anger2",
   "ErpinRoyale_DutchRubEnd1"
  ],
  "hungryVoice": [
   "ErpinRoyale_CallPlayer1",
   "ErpinRoyale_Sorrow1",
   "ErpinRoyale_Hmm2",
   "ErpinRoyale_TickleStart1"
  ],
  "greetVoice": [
   "ErpinRoyale_Greeting",
   "ErpinRoyale_Lobby",
   "ErpinRoyale_Spawn1",
   "ErpinRoyale_Joy1",
   "ErpinRoyale_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Eat_4",
     "Eat_5",
     "Eat_6",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Angry_11",
     "Angry_12",
     "Angry_13",
     "Angry_14",
     "Angry_15",
     "Angry_16",
     "Angry_17",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Happy_11",
     "Happy_12",
     "Happy_13",
     "Happy_14",
     "Happy_15",
     "Happy_16",
     "Happy_17",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Sad_10",
     "Sad_11",
     "Sad_12",
     "Sad_13",
     "Sad_14",
     "Sad_15",
     "Sad_16",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Bbang_1",
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Blank_5",
     "Blank_6",
     "Blank_7",
     "Blank_8",
     "Blank_9",
     "Blank_10",
     "Blank_11",
     "Cheeky_1",
     "Cheeky_2",
     "Dance_1",
     "Hit_1",
     "Hit_2",
     "Hungry_1",
     "Hungry_2",
     "Hungry_3",
     "Hungry_4",
     "Notmyfault_1",
     "Notmyfault_2",
     "Notmyfault_3",
     "Notmyfault_4",
     "Ottokhaji _1",
     "Present_1",
     "Present_2",
     "Present_3",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "ErpinRoyale_Joy",
   "Proud_": "ErpinRoyale_Pleasure",
   "Angry_": "ErpinRoyale_Anger",
   "Sad_": "ErpinRoyale_Sorrow",
   "Surprise_": "ErpinRoyale_Surprise"
  }
 },
 {
  "id": "Espi",
  "name": "埃斯皮",
  "en": "Espi",
  "desc": "幽灵 · 2 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Espi/phone-avatar.png",
   "present": "assets/art/Espi/present.png",
   "album": "assets/art/Espi/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Espi",
    "dir": "assets/spine/Espi",
    "name": "默认",
    "desc": "基础外观（35 动作）",
    "voiceSkin": ""
   },
   {
    "id": "EspiSkin1",
    "dir": "assets/spine/EspiSkin1",
    "name": "哥特野餐",
    "desc": "稍微打扮过但摘下面具后的埃斯皮显得谦恭。…（35 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_Root"
   ],
   "face": [],
   "mouth": [
    "S1_F_Mouth",
    "S1_Mask_Mouth"
   ],
   "cheekL": [
    "S1_Ball_L",
    "S1_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Espi_Touch1",
     "Espi_Touch1_1",
     "Espi_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Espi_Touch2",
     "Espi_Touch2_1",
     "Espi_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Espi_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Espi_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Espi_TickleStart1"
    ],
    "voiceMid": [
     "Espi_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Espi_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Espi_Surprise1",
   "Espi_Hmm1",
   "Espi_Yes1",
   "Espi_Touch1"
  ],
  "upsetVoice": [
   "Espi_Anger1",
   "Espi_No1",
   "Espi_Anger2",
   "Espi_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Espi_CallPlayer1",
   "Espi_Sorrow1",
   "Espi_Hmm2",
   "Espi_TickleStart1"
  ],
  "greetVoice": [
   "Espi_Greeting",
   "Espi_Lobby",
   "Espi_Spawn1",
   "Espi_Joy1",
   "Espi_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Question_1",
     "Question_2",
     "Sorry_1",
     "Sorry_2",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Espi_Joy",
   "Proud_": "Espi_Pleasure",
   "Angry_": "Espi_Anger",
   "Sad_": "Espi_Sorrow",
   "Surprise_": "Espi_Surprise"
  }
 },
 {
  "id": "Festa",
  "name": "菲斯塔",
  "en": "Festa",
  "desc": "精灵 · 2 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Festa/phone-avatar.png",
   "present": "assets/art/Festa/present.png",
   "album": "assets/art/Festa/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Festa",
    "dir": "assets/spine/Festa",
    "name": "默认",
    "desc": "基础外观（42 动作）",
    "voiceSkin": ""
   },
   {
    "id": "FestaSkin1",
    "dir": "assets/spine/FestaSkin1",
    "name": "哥特朋克",
    "desc": "这是性格比平时更加敏感的菲斯塔。不过单看…（42 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_Root"
   ],
   "face": [
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Festa_Touch1",
     "Festa_Touch1_1",
     "Festa_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Festa_Touch2",
     "Festa_Touch2_1",
     "Festa_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Festa_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Festa_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Festa_TickleStart1"
    ],
    "voiceMid": [
     "Festa_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Festa_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Festa_Surprise1",
   "Festa_Hmm1",
   "Festa_Yes1",
   "Festa_Touch1"
  ],
  "upsetVoice": [
   "Festa_Anger1",
   "Festa_No1",
   "Festa_Anger2",
   "Festa_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Festa_CallPlayer1",
   "Festa_Sorrow1",
   "Festa_Hmm2",
   "Festa_TickleStart1"
  ],
  "greetVoice": [
   "Festa_Greeting",
   "Festa_Lobby",
   "Festa_Spawn1",
   "Festa_Joy1",
   "Festa_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Go_1",
     "Go_2",
     "Rock_1",
     "Rock_2",
     "Rock_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Sulky_4",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Festa_Joy",
   "Proud_": "Festa_Pleasure",
   "Angry_": "Festa_Anger",
   "Sad_": "Festa_Sorrow",
   "Surprise_": "Festa_Surprise"
  }
 },
 {
  "id": "Fricle",
  "name": "芙莉克",
  "en": "Fricle",
  "desc": "魔女 · 4 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Fricle/phone-avatar.png",
   "present": "assets/art/Fricle/present.png",
   "album": "assets/art/Fricle/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Fricle",
    "dir": "assets/spine/Fricle",
    "name": "默认",
    "desc": "基础外观（62 动作）",
    "voiceSkin": ""
   },
   {
    "id": "FricleSkin1",
    "dir": "assets/spine/FricleSkin1",
    "name": "傲娇挑剔魔女",
    "desc": "贝丽塔下令把芙莉克赶出令人紧张的魔女宫廷…（62 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "FricleSkin2",
    "dir": "assets/spine/FricleSkin2",
    "name": "今天的天气晴",
    "desc": "芙莉克成为莫纳蒂姆广播的每日气象播报员。…（62 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "FricleSkin3",
    "dir": "assets/spine/FricleSkin3",
    "name": "犯罪式家政",
    "desc": "成为教团战斗女仆的芙莉克。嘴上不停抱怨着…（62 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face_CT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Fricle_Touch1",
     "Fricle_Touch1_1",
     "Fricle_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Fricle_Touch2",
     "Fricle_Touch2_1",
     "Fricle_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Fricle_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Fricle_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Fricle_TickleStart1"
    ],
    "voiceMid": [
     "Fricle_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Fricle_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Fricle_Surprise1",
   "Fricle_Hmm1",
   "Fricle_Yes1",
   "Fricle_Touch1"
  ],
  "upsetVoice": [
   "Fricle_Anger1",
   "Fricle_No1",
   "Fricle_Anger2",
   "Fricle_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Fricle_CallPlayer1",
   "Fricle_Sorrow1",
   "Fricle_Hmm2",
   "Fricle_TickleStart1"
  ],
  "greetVoice": [
   "Fricle_Greeting",
   "Fricle_Lobby",
   "Fricle_Spawn1",
   "Fricle_Joy1",
   "Fricle_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Dance_1",
     "Notmyfault_1",
     "Notmyfault_2",
     "Question_1",
     "Question_2",
     "Shy_1",
     "Shy_2",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Sulky_4",
     "Sulky_5",
     "Thinking_1",
     "Thinking_2",
     "Thinking_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Fricle_Joy",
   "Proud_": "Fricle_Pleasure",
   "Angry_": "Fricle_Anger",
   "Sad_": "Fricle_Sorrow",
   "Surprise_": "Fricle_Surprise"
  }
 },
 {
  "id": "Gabia",
  "name": "加维亚",
  "en": "Gabia",
  "desc": "灵体 · 3 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Gabia/phone-avatar.png",
   "present": "assets/art/Gabia/present.png",
   "album": "assets/art/Gabia/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Gabia",
    "dir": "assets/spine/Gabia",
    "name": "默认",
    "desc": "基础外观（44 动作）",
    "voiceSkin": ""
   },
   {
    "id": "GabiaSkin1",
    "dir": "assets/spine/GabiaSkin1",
    "name": "春日的约定",
    "desc": "像是约定一样迎来了春天，加维亚穿上外出装…（44 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "GabiaSkin2",
    "dir": "assets/spine/GabiaSkin2",
    "name": "大地的大魔法师",
    "desc": "加维亚模仿萨鲁斯坦喜欢的桌游服装。帽子里…（44 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "S2_Head"
   ],
   "headTop": [
    "S2_Hair_Root"
   ],
   "face": [
    "S2_Face"
   ],
   "mouth": [
    "S2_F_Mouth"
   ],
   "cheekL": [
    "S2_F_Ball_L_Root"
   ],
   "cheekR": [
    "S2_F_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S2_F_Ball_Root"
   ],
   "ballMoveP": [
    "S2_F_Ball_R_Root",
    "S2_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S2_Head"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Gabia_Touch1",
     "Gabia_Touch1_1",
     "Gabia_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Gabia_Touch2",
     "Gabia_Touch2_1",
     "Gabia_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Gabia_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Gabia_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Gabia_TickleStart1"
    ],
    "voiceMid": [
     "Gabia_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Gabia_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Gabia_Surprise1",
   "Gabia_Hmm1",
   "Gabia_Yes1",
   "Gabia_Touch1"
  ],
  "upsetVoice": [
   "Gabia_Anger1",
   "Gabia_No1",
   "Gabia_Anger2",
   "Gabia_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Gabia_CallPlayer1",
   "Gabia_Sorrow1",
   "Gabia_Hmm2",
   "Gabia_TickleStart1"
  ],
  "greetVoice": [
   "Gabia_Greeting",
   "Gabia_Lobby",
   "Gabia_Spawn1",
   "Gabia_Joy1",
   "Gabia_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Serious_1",
     "Serious_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Hesitate_1",
     "Hesitate_2",
     "Nodding_1",
     "Nodding_2",
     "Nodding_3",
     "Point_1",
     "Point_2",
     "Point_3",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sorry_1",
     "Sorry_2",
     "Worry_1"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Gabia_Joy",
   "Proud_": "Gabia_Pleasure",
   "Angry_": "Gabia_Anger",
   "Sad_": "Gabia_Sorrow",
   "Surprise_": "Gabia_Surprise"
  }
 },
 {
  "id": "Guin",
  "name": "格温",
  "en": "Guin",
  "desc": "兽人 · 4 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Guin/phone-avatar.png",
   "present": "assets/art/Guin/present.png",
   "album": "assets/art/Guin/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Guin",
    "dir": "assets/spine/Guin",
    "name": "默认",
    "desc": "基础外观（49 动作）",
    "voiceSkin": ""
   },
   {
    "id": "GuinSkin1",
    "dir": "assets/spine/GuinSkin1",
    "name": "悠闲野餐",
    "desc": "格温像大胆的探险家一样，把一大块面包当作…（49 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "GuinSkin2",
    "dir": "assets/spine/GuinSkin2",
    "name": "雪国露天温泉",
    "desc": "本以为讨厌热水的格温，意外地喜欢温泉。在…（49 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "GuinSkin4",
    "dir": "assets/spine/GuinSkin4",
    "name": "奔赴大海的冒险",
    "desc": "格温准备向大海出发冒险。再汹涌的海浪，也…（50 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Guin_Touch1",
     "Guin_Touch1_1",
     "Guin_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Guin_Touch2",
     "Guin_Touch2_1",
     "Guin_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Guin_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Guin_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Guin_TickleStart1"
    ],
    "voiceMid": [
     "Guin_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Guin_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Guin_Surprise1",
   "Guin_Hmm1",
   "Guin_Yes1",
   "Guin_Touch1"
  ],
  "upsetVoice": [
   "Guin_Anger1",
   "Guin_No1",
   "Guin_Anger2",
   "Guin_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Guin_CallPlayer1",
   "Guin_Sorrow1",
   "Guin_Hmm2",
   "Guin_TickleStart1"
  ],
  "greetVoice": [
   "Guin_Greeting",
   "Guin_Lobby",
   "Guin_Spawn1",
   "Guin_Joy1",
   "Guin_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprised_1",
     "Surprised_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Dance_1",
     "Dance_2",
     "Joke_1",
     "Shy_1",
     "Shy_2",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Guin_Joy",
   "Proud_": "Guin_Pleasure",
   "Angry_": "Guin_Anger",
   "Sad_": "Guin_Sorrow",
   "Surprise_": "Guin_Surprise"
  }
 },
 {
  "id": "Haley",
  "name": "海莉",
  "en": "Haley",
  "desc": "精灵 · 4 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Haley/phone-avatar.png",
   "present": "assets/art/Haley/present.png",
   "album": "assets/art/Haley/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Haley",
    "dir": "assets/spine/Haley",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   },
   {
    "id": "HaleySkin1",
    "dir": "assets/spine/HaleySkin1",
    "name": "荆棘玫瑰修女",
    "desc": "荆棘玫瑰修女（43 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "HaleySkin2",
    "dir": "assets/spine/HaleySkin2",
    "name": "隆冬和平使者",
    "desc": "隆冬和平使者（43 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "HaleySkin3",
    "dir": "assets/spine/HaleySkin3",
    "name": "今日热血特训",
    "desc": "今日热血特训（43 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Earing_Root"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Haley_Touch1",
     "Haley_Touch1_1",
     "Haley_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Haley_Touch2",
     "Haley_Touch2_1",
     "Haley_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Haley_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Haley_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Haley_TickleStart1"
    ],
    "voiceMid": [
     "Haley_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Haley_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Haley_Surprise1",
   "Haley_Hmm1",
   "Haley_Yes1",
   "Haley_Touch1"
  ],
  "upsetVoice": [
   "Haley_Anger1",
   "Haley_No1",
   "Haley_Anger2",
   "Haley_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Haley_CallPlayer1",
   "Haley_Sorrow1",
   "Haley_Hmm2",
   "Haley_TickleStart1"
  ],
  "greetVoice": [
   "Haley_Greeting",
   "Haley_Spawn1",
   "Haley_Joy1",
   "Haley_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Sorry_1",
     "Sorry_2",
     "Sorry_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Haley_Joy",
   "Proud_": "Haley_Pleasure",
   "Angry_": "Haley_Anger",
   "Sad_": "Haley_Sorrow",
   "Surprise_": "Haley_Surprise"
  }
 },
 {
  "id": "HaleySane",
  "name": "海莉（清醒）",
  "en": "HaleySane",
  "desc": "精灵 · 3 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/HaleySane/phone-avatar.png",
   "present": "assets/art/HaleySane/present.png",
   "album": "assets/art/HaleySane/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "HaleySane",
    "dir": "assets/spine/HaleySane",
    "name": "默认",
    "desc": "基础外观（62 动作）",
    "voiceSkin": ""
   },
   {
    "id": "HaleySaneSkin1",
    "dir": "assets/spine/HaleySaneSkin1",
    "name": "划破天际的独行者",
    "desc": "作为飞行员完美掌控高空的海莉（清醒）形象…（62 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "HaleySaneSkin2",
    "dir": "assets/spine/HaleySaneSkin2",
    "name": "冲入汹涌海浪",
    "desc": "下海之前必须做好万全准备！这是已经做好向…（62 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Ear_Ac_Root"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_CT_2",
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "HaleySane_Touch1",
     "HaleySane_Touch1_1",
     "HaleySane_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "HaleySane_Touch2",
     "HaleySane_Touch2_1",
     "HaleySane_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "HaleySane_DutchRubEnd1"
    ],
    "voiceEnd": [
     "HaleySane_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "HaleySane_TickleStart1"
    ],
    "voiceMid": [
     "HaleySane_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "HaleySane_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "HaleySane_Surprise1",
   "HaleySane_Hmm1",
   "HaleySane_Yes1",
   "HaleySane_Touch1"
  ],
  "upsetVoice": [
   "HaleySane_Anger1",
   "HaleySane_No1",
   "HaleySane_Anger2",
   "HaleySane_DutchRubEnd1"
  ],
  "hungryVoice": [
   "HaleySane_CallPlayer1",
   "HaleySane_Sorrow1",
   "HaleySane_Hmm2",
   "HaleySane_TickleStart1"
  ],
  "greetVoice": [
   "HaleySane_Greeting",
   "HaleySane_Lobby",
   "HaleySane_Spawn1",
   "HaleySane_Joy1",
   "HaleySane_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Serious_5",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dumb_1",
     "Dumb_2",
     "Sulky_1",
     "Sulky_2",
     "Sword_1",
     "Sword_2",
     "Sword_3",
     "Sword_4",
     "Sword_5",
     "Sword_6",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "HaleySane_Joy",
   "Proud_": "HaleySane_Pleasure",
   "Angry_": "HaleySane_Anger",
   "Sad_": "HaleySane_Sorrow",
   "Surprise_": "HaleySane_Surprise"
  }
 },
 {
  "id": "Heidi",
  "name": "海蒂",
  "en": "Heidi",
  "desc": "精灵 · 2 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Heidi/phone-avatar.png",
   "present": "assets/art/Heidi/present.png",
   "album": "assets/art/Heidi/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Heidi",
    "dir": "assets/spine/Heidi",
    "name": "默认",
    "desc": "基础外观（53 动作）",
    "voiceSkin": ""
   },
   {
    "id": "HeidiSkin1",
    "dir": "assets/spine/HeidiSkin1",
    "name": "可爱警报！",
    "desc": "海蒂尝试模仿最近在部分市民中流行的时尚。…（53 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Shadow_2"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Shadow_2"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Heidi_Touch1",
     "Heidi_Touch1_1",
     "Heidi_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Heidi_Touch2",
     "Heidi_Touch2_1",
     "Heidi_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Heidi_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Heidi_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Heidi_TickleStart1"
    ],
    "voiceMid": [
     "Heidi_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Heidi_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Heidi_Surprise1",
   "Heidi_Hmm1",
   "Heidi_Yes1",
   "Heidi_Touch1"
  ],
  "upsetVoice": [
   "Heidi_Anger1",
   "Heidi_No1",
   "Heidi_Anger2",
   "Heidi_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Heidi_CallPlayer1",
   "Heidi_Sorrow1",
   "Heidi_Hmm2",
   "Heidi_TickleStart1"
  ],
  "greetVoice": [
   "Heidi_Greeting",
   "Heidi_Lobby",
   "Heidi_Spawn1",
   "Heidi_Joy1",
   "Heidi_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Camera_1",
     "Camera_2",
     "Camera_3",
     "Camera_4",
     "Camera_5",
     "Camera_6",
     "Camera_7",
     "Clock_1",
     "Clock_2",
     "Note_1",
     "Note_2",
     "Note_3",
     "Shy_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Heidi_Joy",
   "Proud_": "Heidi_Pleasure",
   "Angry_": "Heidi_Anger",
   "Sad_": "Heidi_Sorrow",
   "Surprise_": "Heidi_Surprise"
  }
 },
 {
  "id": "Hilde",
  "name": "希尔德",
  "en": "Hilde",
  "desc": "精灵 · 4 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Hilde/phone-avatar.png",
   "present": "assets/art/Hilde/present.png",
   "album": "assets/art/Hilde/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Hilde",
    "dir": "assets/spine/Hilde",
    "name": "默认",
    "desc": "基础外观（52 动作）",
    "voiceSkin": ""
   },
   {
    "id": "HildeSkin1",
    "dir": "assets/spine/HildeSkin1",
    "name": "治愈野餐",
    "desc": "希尔德在百忙之中，为了在难得的休息日外出…（52 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "HildeSkin2",
    "dir": "assets/spine/HildeSkin2",
    "name": "放松治疗师",
    "desc": "即使度假也关心病人的希尔德。如果有人装病…（52 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "HildeSkin3",
    "dir": "assets/spine/HildeSkin3",
    "name": "迈向和平的意志",
    "desc": "为了驱逐邪恶、夺回和平而奋战的希尔德。她…（52 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Ear_R"
   ],
   "earR": [
    "Ear_R"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Hilde_Touch1",
     "Hilde_Touch1_1",
     "Hilde_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Hilde_Touch2",
     "Hilde_Touch2_1",
     "Hilde_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Hilde_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Hilde_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Hilde_TickleStart1"
    ],
    "voiceMid": [
     "Hilde_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Hilde_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Hilde_Surprise1",
   "Hilde_Hmm1",
   "Hilde_Yes1",
   "Hilde_Touch1"
  ],
  "upsetVoice": [
   "Hilde_Anger1",
   "Hilde_No1",
   "Hilde_Anger2",
   "Hilde_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Hilde_CallPlayer1",
   "Hilde_Sorrow1",
   "Hilde_Hmm2",
   "Hilde_TickleStart1"
  ],
  "greetVoice": [
   "Hilde_Greeting",
   "Hilde_Lobby",
   "Hilde_Spawn1",
   "Hilde_Joy1",
   "Hilde_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Dance_2",
     "Nope_1",
     "Nope_2",
     "Nope_3",
     "Sulky_1",
     "Thinking_1",
     "Thinking_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Hilde_Joy",
   "Proud_": "Hilde_Pleasure",
   "Angry_": "Hilde_Anger",
   "Sad_": "Hilde_Sorrow",
   "Surprise_": "Hilde_Surprise"
  }
 },
 {
  "id": "Ifrit",
  "name": "伊芙利特",
  "en": "Ifrit",
  "desc": "灵体 · 2 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Ifrit/phone-avatar.png",
   "present": "assets/art/Ifrit/present.png",
   "album": "assets/art/Ifrit/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Ifrit",
    "dir": "assets/spine/Ifrit",
    "name": "默认",
    "desc": "基础外观（33 动作）",
    "voiceSkin": ""
   },
   {
    "id": "IfritSkin1",
    "dir": "assets/spine/IfritSkin1",
    "name": "深暗幻想",
    "desc": "感觉我才刚说过，鞭子很适合用来叫醒打瞌睡…（33 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S3_F_E_Head_Fire"
   ],
   "headTop": [],
   "face": [
    "S3_Face"
   ],
   "mouth": [
    "S3_F_Mouth"
   ],
   "cheekL": [],
   "cheekR": [],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move"
   ],
   "ballMoveP": [
    "S3_Body_2"
   ],
   "pat": [
    "Character_Pat",
    "S3_F_E_Head_Fire"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Ifrit_Touch1",
     "Ifrit_Touch1_1",
     "Ifrit_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Ifrit_Touch2",
     "Ifrit_Touch2_1",
     "Ifrit_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Ifrit_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Ifrit_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Ifrit_TickleStart1"
    ],
    "voiceMid": [
     "Ifrit_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Ifrit_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Ifrit_Surprise1",
   "Ifrit_Hmm1",
   "Ifrit_Yes1",
   "Ifrit_Touch1"
  ],
  "upsetVoice": [
   "Ifrit_Anger1",
   "Ifrit_No1",
   "Ifrit_Anger2",
   "Ifrit_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Ifrit_CallPlayer1",
   "Ifrit_Sorrow1",
   "Ifrit_Hmm2",
   "Ifrit_TickleStart1"
  ],
  "greetVoice": [
   "Ifrit_Greeting",
   "Ifrit_Lobby",
   "Ifrit_Spawn1",
   "Ifrit_Joy1",
   "Ifrit_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Sorry_1",
     "Sorry_2",
     "Sulky_1",
     "Sulky_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Ifrit_Joy",
   "Proud_": "Ifrit_Pleasure",
   "Angry_": "Ifrit_Anger",
   "Sad_": "Ifrit_Sorrow",
   "Surprise_": "Ifrit_Surprise"
  }
 },
 {
  "id": "Inkle",
  "name": "尹可",
  "en": "Inkle",
  "desc": "灵体 · 3 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Inkle/phone-avatar.png",
   "present": "assets/art/Inkle/present.png",
   "album": "assets/art/Inkle/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Inkle",
    "dir": "assets/spine/Inkle",
    "name": "默认",
    "desc": "基础外观（65 动作）",
    "voiceSkin": ""
   },
   {
    "id": "InkleSkin1",
    "dir": "assets/spine/InkleSkin1",
    "name": "不同凡响的文学少女",
    "desc": "沉浸在只属于自己世界里的尹可。每天带着意…（65 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "InkleSkin2",
    "dir": "assets/spine/InkleSkin2",
    "name": "梦想满满的办公世界观",
    "desc": "尹可进入了自己暗中梦想已久的办公室世界观…（65 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Inkle_Touch1",
     "Inkle_Touch1_1",
     "Inkle_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Inkle_Touch2",
     "Inkle_Touch2_1",
     "Inkle_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Inkle_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Inkle_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Inkle_TickleStart1"
    ],
    "voiceMid": [
     "Inkle_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Inkle_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Inkle_Surprise1",
   "Inkle_Hmm1",
   "Inkle_Yes1",
   "Inkle_Touch1"
  ],
  "upsetVoice": [
   "Inkle_Anger1",
   "Inkle_No1",
   "Inkle_Anger2",
   "Inkle_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Inkle_CallPlayer1",
   "Inkle_Sorrow1",
   "Inkle_Hmm2",
   "Inkle_TickleStart1"
  ],
  "greetVoice": [
   "Inkle_Greeting",
   "Inkle_Lobby",
   "Inkle_Spawn1",
   "Inkle_Joy1",
   "Inkle_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Mask_1",
     "Scroll_1",
     "Scroll_2",
     "Scroll_3",
     "Scroll_4",
     "Scroll_5",
     "Shy_1",
     "Shy_2",
     "Sitting_1",
     "Sitting_2",
     "Sitting_3",
     "Sitting_4",
     "Sitting_5",
     "Special_1",
     "Special_2",
     "Special_3",
     "Special_4",
     "Taik_1",
     "Taik_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Inkle_Joy",
   "Proud_": "Inkle_Pleasure",
   "Angry_": "Inkle_Anger",
   "Sad_": "Inkle_Sorrow",
   "Surprise_": "Inkle_Surprise"
  }
 },
 {
  "id": "Jade",
  "name": "婕德",
  "en": "Jade",
  "desc": "龙族 · 2 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Jade/phone-avatar.png",
   "present": "assets/art/Jade/present.png",
   "album": "assets/art/Jade/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Jade",
    "dir": "assets/spine/Jade",
    "name": "默认",
    "desc": "基础外观（40 动作）",
    "voiceSkin": ""
   },
   {
    "id": "JadeSkin1",
    "dir": "assets/spine/JadeSkin1",
    "name": "玉的大小姐",
    "desc": "婕德装作贵族小姐，要优雅地享受下午茶。就…（40 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_Root"
   ],
   "face": [],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [],
   "tail": [
    "S1_Tail_1"
   ],
   "earL": [
    "S1_Ear_L_0"
   ],
   "earR": [
    "S1_Ear_R_2",
    "S1_Ear_R_0"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Jade_Touch1",
     "Jade_Touch1_1",
     "Jade_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Jade_Touch2",
     "Jade_Touch2_1",
     "Jade_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Jade_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Jade_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Jade_TickleStart1"
    ],
    "voiceMid": [
     "Jade_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Jade_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Jade_Surprise1",
   "Jade_Hmm1",
   "Jade_Yes1",
   "Jade_Touch1"
  ],
  "upsetVoice": [
   "Jade_Anger1",
   "Jade_No1",
   "Jade_Anger2",
   "Jade_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Jade_CallPlayer1",
   "Jade_Sorrow1",
   "Jade_Hmm2",
   "Jade_TickleStart1"
  ],
  "greetVoice": [
   "Jade_Greeting",
   "Jade_Lobby",
   "Jade_Spawn1",
   "Jade_Joy1",
   "Jade_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Laugh_1",
     "Laugh_2",
     "Smile_1",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Jade_Joy",
   "Proud_": "Jade_Pleasure",
   "Angry_": "Jade_Anger",
   "Sad_": "Jade_Sorrow",
   "Surprise_": "Jade_Surprise"
  }
 },
 {
  "id": "Joanne",
  "name": "琼安",
  "en": "Joanne",
  "desc": "妖精 · 6 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Joanne/phone-avatar.png",
   "present": "assets/art/Joanne/present.png",
   "album": "assets/art/Joanne/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Joanne",
    "dir": "assets/spine/Joanne",
    "name": "默认",
    "desc": "基础外观（70 动作）",
    "voiceSkin": ""
   },
   {
    "id": "JoanneSkin1",
    "dir": "assets/spine/JoanneSkin1",
    "name": "传统的使徒",
    "desc": "飘动的裙摆间映出优雅的螺钿色泽。刚从天而…（70 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "JoanneSkin2",
    "dir": "assets/spine/JoanneSkin2",
    "name": "软绵绵拖鞋",
    "desc": "看起来心情完全放松，正在享受闲暇。按门铃…（70 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "JoanneSkin3",
    "dir": "assets/spine/JoanneSkin3",
    "name": "私人野餐",
    "desc": "看起来像是在外出前做足了准备。不管今天要…（70 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "JoanneSkin4",
    "dir": "assets/spine/JoanneSkin4",
    "name": "舞团达令",
    "desc": "起床后一杯谷物粉，确认！清晨慢跑操场10…（70 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Hudy_Head_R_CT_Bt"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [
    "Neck_Acc_2_CT"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Hudy_Head_R_CT_Bt"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Joanne_Touch1",
     "Joanne_Touch1_1",
     "Joanne_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Joanne_Touch2",
     "Joanne_Touch2_1",
     "Joanne_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Joanne_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Joanne_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Joanne_TickleStart1"
    ],
    "voiceMid": [
     "Joanne_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Joanne_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Joanne_Surprise1",
   "Joanne_Hmm1",
   "Joanne_Yes1",
   "Joanne_Touch1"
  ],
  "upsetVoice": [
   "Joanne_Anger1",
   "Joanne_No1",
   "Joanne_Anger2",
   "Joanne_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Joanne_CallPlayer1",
   "Joanne_Sorrow1",
   "Joanne_Hmm2",
   "Joanne_TickleStart1"
  ],
  "greetVoice": [
   "Joanne_Greeting",
   "Joanne_Lobby",
   "Joanne_Spawn1",
   "Joanne_Joy1",
   "Joanne_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Angry_11",
     "Angry_12",
     "Close_1",
     "Close_2",
     "Close_3",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Dance_1",
     "Pray_1",
     "Pray_2",
     "Pray_3",
     "Sorry_1",
     "Sorry_2",
     "Sorry_3",
     "Sorry_4",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Talk_4",
     "Tired_1",
     "Tired_2",
     "Tired_3",
     "Act_1_1",
     "Act_2_1",
     "Act_3_1",
     "Angry1_1",
     "Eat1_1",
     "Idle",
     "Move",
     "Play1_1",
     "Sleep1_1",
     "Spawn",
     "Swim1_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Joanne_Joy",
   "Proud_": "Joanne_Pleasure",
   "Angry_": "Joanne_Anger",
   "Sad_": "Joanne_Sorrow",
   "Surprise_": "Joanne_Surprise"
  }
 },
 {
  "id": "Joanne_White",
  "name": "琼·白",
  "en": "Joanne_White",
  "desc": "妖精 · 1 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Joanne/phone-avatar.png",
   "present": "assets/art/Joanne/present.png",
   "album": "assets/art/Joanne/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Joanne_White",
    "dir": "assets/spine/Joanne_White",
    "name": "默认",
    "desc": "基础外观（70 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Hudy_Head_R_CT_Bt"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [
    "Neck_Acc_2_CT"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Hudy_Head_R_CT_Bt"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Joanne_White_Touch1",
     "Joanne_White_Touch1_1",
     "Joanne_White_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Joanne_White_Touch2",
     "Joanne_White_Touch2_1",
     "Joanne_White_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Joanne_White_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Joanne_White_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Joanne_White_TickleStart1"
    ],
    "voiceMid": [
     "Joanne_White_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": []
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Joanne_White_Touch1"
  ],
  "upsetVoice": [
   "Joanne_White_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Joanne_White_TickleStart1"
  ],
  "greetVoice": [
   "Joanne_White_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Angry_11",
     "Angry_12",
     "Close_1",
     "Close_2",
     "Close_3",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Dance_1",
     "Pray_1",
     "Pray_2",
     "Pray_3",
     "Sorry_1",
     "Sorry_2",
     "Sorry_3",
     "Sorry_4",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Talk_4",
     "Tired_1",
     "Tired_2",
     "Tired_3"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {}
 },
 {
  "id": "Jubee",
  "name": "茱比",
  "en": "Jubee",
  "desc": "灵体 · 2 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Jubee/phone-avatar.png",
   "present": "assets/art/Jubee/present.png",
   "album": "assets/art/Jubee/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Jubee",
    "dir": "assets/spine/Jubee",
    "name": "默认",
    "desc": "基础外观（29 动作）",
    "voiceSkin": ""
   },
   {
    "id": "JubeeSkin1",
    "dir": "assets/spine/JubeeSkin1",
    "name": "愚人蜂",
    "desc": "据说会伴随威胁性的翅膀声在艾利亚斯游荡的…（29 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S3_Head",
    "S3_Head_Side"
   ],
   "headTop": [
    "S3_Hair_1"
   ],
   "face": [
    "S3_Face"
   ],
   "mouth": [
    "S3_F_Mouth"
   ],
   "cheekL": [
    "S3_F_Ball_L_Root"
   ],
   "cheekR": [
    "S3_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S3_Ball_Root"
   ],
   "ballMoveP": [
    "S3_F_Ball_R_Root",
    "S3_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S3_Head",
    "S3_Head_Side"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Jubee_Touch1",
     "Jubee_Touch1_1",
     "Jubee_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Jubee_Touch2",
     "Jubee_Touch2_1",
     "Jubee_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Jubee_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Jubee_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Jubee_TickleStart1"
    ],
    "voiceMid": [
     "Jubee_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Jubee_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Jubee_Surprise1",
   "Jubee_Hmm1",
   "Jubee_Yes1",
   "Jubee_Touch1"
  ],
  "upsetVoice": [
   "Jubee_Anger1",
   "Jubee_No1",
   "Jubee_Anger2",
   "Jubee_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Jubee_CallPlayer1",
   "Jubee_Sorrow1",
   "Jubee_Hmm2",
   "Jubee_TickleStart1"
  ],
  "greetVoice": [
   "Jubee_Greeting",
   "Jubee_Lobby",
   "Jubee_Spawn1",
   "Jubee_Joy1",
   "Jubee_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Jubee_Joy",
   "Proud_": "Jubee_Pleasure",
   "Angry_": "Jubee_Anger",
   "Sad_": "Jubee_Sorrow",
   "Surprise_": "Jubee_Surprise"
  }
 },
 {
  "id": "Kathy",
  "name": "凯茜",
  "en": "Kathy",
  "desc": "精灵 · 3 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Kathy/phone-avatar.png",
   "present": "assets/art/Kathy/present.png",
   "album": "assets/art/Kathy/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Kathy",
    "dir": "assets/spine/Kathy",
    "name": "默认",
    "desc": "基础外观（65 动作）",
    "voiceSkin": ""
   },
   {
    "id": "KathySkin1",
    "dir": "assets/spine/KathySkin1",
    "name": "代号凯茜费拉图",
    "desc": "沉迷番茄汁的凯茜。她总把这种评价两极的红…（65 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "KathySkin2",
    "dir": "assets/spine/KathySkin2",
    "name": "超次元科学幽灵",
    "desc": "超乎想象！凯茜变成了与以往完全不同的幽灵…（65 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_Ribbon_Root"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Kathy_Touch1",
     "Kathy_Touch1_1",
     "Kathy_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Kathy_Touch2",
     "Kathy_Touch2_1",
     "Kathy_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Kathy_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Kathy_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Kathy_TickleStart1"
    ],
    "voiceMid": [
     "Kathy_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Kathy_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Kathy_Surprise1",
   "Kathy_Hmm1",
   "Kathy_Yes1",
   "Kathy_Touch1"
  ],
  "upsetVoice": [
   "Kathy_Anger1",
   "Kathy_No1",
   "Kathy_Anger2",
   "Kathy_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Kathy_CallPlayer1",
   "Kathy_Sorrow1",
   "Kathy_Hmm2",
   "Kathy_TickleStart1"
  ],
  "greetVoice": [
   "Kathy_Greeting",
   "Kathy_Lobby",
   "Kathy_Spawn1",
   "Kathy_Joy1",
   "Kathy_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Sad_10",
     "Sad_11",
     "Serious_1",
     "Serious_2",
     "Serious_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3",
     "Idle_4"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Dance_2",
     "Shock_1",
     "Shock_2",
     "Shock_3",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sleepy_1",
     "Sleepy_2",
     "Sleepy_3",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Kathy_Joy",
   "Proud_": "Kathy_Pleasure",
   "Angry_": "Kathy_Anger",
   "Sad_": "Kathy_Sorrow",
   "Surprise_": "Kathy_Surprise"
  }
 },
 {
  "id": "Kidian",
  "name": "基迪恩",
  "en": "Kidian",
  "desc": "龙族 · 4 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Kidian/phone-avatar.png",
   "present": "assets/art/Kidian/present.png",
   "album": "assets/art/Kidian/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Kidian",
    "dir": "assets/spine/Kidian",
    "name": "默认",
    "desc": "基础外观（47 动作）",
    "voiceSkin": ""
   },
   {
    "id": "KidianSkin1",
    "dir": "assets/spine/KidianSkin1",
    "name": "跟随朋友去地面",
    "desc": "在皮拉的搭配下精心打扮的基迪恩。有人说这…（47 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "KidianSkin2",
    "dir": "assets/spine/KidianSkin2",
    "name": "心中的银河",
    "desc": "穿着闪亮连衣裙，和教主一起看星星的基迪恩…（47 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "KidianSkin4",
    "dir": "assets/spine/KidianSkin4",
    "name": "黑曜女仆",
    "desc": "作为教团战斗女仆反复接受训练的基迪恩。以…（47 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Head",
    "S3_Hair_Root"
   ],
   "face": [],
   "mouth": [
    "S3_F_Mouth"
   ],
   "cheekL": [
    "S3_F_Ball_L_Root"
   ],
   "cheekR": [
    "S3_F_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [
    "S3_Ear_L_0"
   ],
   "earR": [
    "S3_Ear_R_0"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S3_F_Ball_Root"
   ],
   "ballMoveP": [
    "S3_F_Ball_R_Root",
    "S3_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Kidian_Touch1",
     "Kidian_Touch1_1",
     "Kidian_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Kidian_Touch2",
     "Kidian_Touch2_1",
     "Kidian_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Kidian_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Kidian_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Kidian_TickleStart1"
    ],
    "voiceMid": [
     "Kidian_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Kidian_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Kidian_Surprise1",
   "Kidian_Hmm1",
   "Kidian_Yes1",
   "Kidian_Touch1"
  ],
  "upsetVoice": [
   "Kidian_Anger1",
   "Kidian_No1",
   "Kidian_Anger2",
   "Kidian_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Kidian_CallPlayer1",
   "Kidian_Sorrow1",
   "Kidian_Hmm2",
   "Kidian_TickleStart1"
  ],
  "greetVoice": [
   "Kidian_Greeting",
   "Kidian_Lobby",
   "Kidian_Spawn1",
   "Kidian_Joy1",
   "Kidian_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Dance_3",
     "Domo_1",
     "Domo_2",
     "Hug_1",
     "Sorry_1",
     "Sorry_2",
     "Stop_1",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Thinking_1",
     "Thinking_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Kidian_Joy",
   "Proud_": "Kidian_Pleasure",
   "Angry_": "Kidian_Anger",
   "Sad_": "Kidian_Sorrow",
   "Surprise_": "Kidian_Surprise"
  }
 },
 {
  "id": "Kishya",
  "name": "绮莎",
  "en": "Kishya",
  "desc": "幽灵 · 2 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Kishya/phone-avatar.png",
   "present": "assets/art/Kishya/present.png",
   "album": "assets/art/Kishya/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Kishya",
    "dir": "assets/spine/Kishya",
    "name": "默认",
    "desc": "基础外观（61 动作）",
    "voiceSkin": ""
   },
   {
    "id": "KishyaSkin1",
    "dir": "assets/spine/KishyaSkin1",
    "name": "只属于你的宠物地下偶像",
    "desc": "为了配合演出主题而戴上猫耳和猫尾的绮莎。…（61 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_Ac_2"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Kishya_Touch1",
     "Kishya_Touch1_1",
     "Kishya_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Kishya_Touch2",
     "Kishya_Touch2_1",
     "Kishya_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Kishya_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Kishya_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Kishya_TickleStart1"
    ],
    "voiceMid": [
     "Kishya_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Kishya_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Kishya_Surprise1",
   "Kishya_Hmm1",
   "Kishya_Yes1",
   "Kishya_Touch1"
  ],
  "upsetVoice": [
   "Kishya_Anger1",
   "Kishya_No1",
   "Kishya_Anger2",
   "Kishya_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Kishya_CallPlayer1",
   "Kishya_Sorrow1",
   "Kishya_Hmm2",
   "Kishya_TickleStart1"
  ],
  "greetVoice": [
   "Kishya_Greeting",
   "Kishya_Lobby",
   "Kishya_Spawn1",
   "Kishya_Joy1",
   "Kishya_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Hi_1",
     "Hi_2",
     "Kisya_1",
     "Kisya_2",
     "Kisya_3",
     "Kisya_4",
     "Kisya_5",
     "Mad_1",
     "Mad_2",
     "Mic_1",
     "Mic_2",
     "Mic_3",
     "Point_1",
     "Point_2",
     "Promise_1",
     "Promise_2",
     "Track_1",
     "Track_2",
     "Track_3",
     "Why_1",
     "Why_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Kishya_Joy",
   "Proud_": "Kishya_Pleasure",
   "Angry_": "Kishya_Anger",
   "Sad_": "Kishya_Sorrow",
   "Surprise_": "Kishya_Surprise"
  }
 },
 {
  "id": "Kommy",
  "name": "柯米",
  "en": "Kommy",
  "desc": "兽人 · 4 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Kommy/phone-avatar.png",
   "present": "assets/art/Kommy/present.png",
   "album": "assets/art/Kommy/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Kommy",
    "dir": "assets/spine/Kommy",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   },
   {
    "id": "KommySkin1",
    "dir": "assets/spine/KommySkin1",
    "name": "喵喵女仆",
    "desc": "被可丽饼挥舞的除尘器吸引而开始穿女仆装的…（43 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "KommySkin2",
    "dir": "assets/spine/KommySkin2",
    "name": "新学期新学校",
    "desc": "为了营造出知性派的氛围，柯米特意穿上了校…（43 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_Root"
   ],
   "face": [
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [
    "S1_Neck"
   ],
   "tail": [
    "S1_Tail_1"
   ],
   "earL": [
    "S1_Ear_L_0"
   ],
   "earR": [
    "S1_Ear_R_0"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Taunt_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Kommy_Touch1",
     "Kommy_Touch1_1",
     "Kommy_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Kommy_Touch2",
     "Kommy_Touch2_1",
     "Kommy_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Kommy_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Kommy_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Kommy_TickleStart1"
    ],
    "voiceMid": [
     "Kommy_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Kommy_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Kommy_Surprise1",
   "Kommy_Hmm1",
   "Kommy_Yes1",
   "Kommy_Touch1"
  ],
  "upsetVoice": [
   "Kommy_Anger1",
   "Kommy_No1",
   "Kommy_Anger2",
   "Kommy_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Kommy_CallPlayer1",
   "Kommy_Sorrow1",
   "Kommy_Hmm2",
   "Kommy_TickleStart1"
  ],
  "greetVoice": [
   "Kommy_Greeting",
   "Kommy_Lobby",
   "Kommy_Spawn1",
   "Kommy_Joy1",
   "Kommy_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Taunt_1"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Melong_1",
     "Melong_2",
     "Melong_3",
     "Scream_1",
     "Sleepy_1",
     "Tired_1",
     "Tired_2",
     "Tired_3",
     "Act1_1",
     "Act2_1",
     "Act3_1",
     "Angry1_1",
     "Eat1_1",
     "Idle",
     "Move",
     "Play1_1",
     "Sleep1_1",
     "Spawn",
     "Swim1_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Kommy_Joy",
   "Proud_": "Kommy_Pleasure",
   "Angry_": "Kommy_Anger",
   "Sad_": "Kommy_Sorrow",
   "Surprise_": "Kommy_Surprise"
  }
 },
 {
  "id": "KommySwim",
  "name": "柯米(泳装)",
  "en": "KommySwim",
  "desc": "兽人 · 3 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/KommySwim/phone-avatar.png",
   "present": "assets/art/KommySwim/present.png",
   "album": "assets/art/KommySwim/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "KommySwim",
    "dir": "assets/spine/KommySwim",
    "name": "默认",
    "desc": "基础外观（53 动作）",
    "voiceSkin": ""
   },
   {
    "id": "KommySwimSkin1",
    "dir": "assets/spine/KommySwimSkin1",
    "name": "人气猫艺师",
    "desc": "为了出名加入了乐队，但吉他技巧也不错。会…（53 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "KommySwimSkin2",
    "dir": "assets/spine/KommySwimSkin2",
    "name": "呼呼吹的烤地瓜猫",
    "desc": "柯米(泳装)应季启动新事业的样子。似乎很…（53 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_R_Root"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "KommySwim_Touch1",
     "KommySwim_Touch1_1",
     "KommySwim_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "KommySwim_Touch2",
     "KommySwim_Touch2_1",
     "KommySwim_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "KommySwim_DutchRubEnd1"
    ],
    "voiceEnd": [
     "KommySwim_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "KommySwim_TickleStart1"
    ],
    "voiceMid": [
     "KommySwim_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "KommySwim_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "KommySwim_Surprise1",
   "KommySwim_Hmm1",
   "KommySwim_Yes1",
   "KommySwim_Touch1"
  ],
  "upsetVoice": [
   "KommySwim_Anger1",
   "KommySwim_No1",
   "KommySwim_Anger2",
   "KommySwim_DutchRubEnd1"
  ],
  "hungryVoice": [
   "KommySwim_CallPlayer1",
   "KommySwim_Sorrow1",
   "KommySwim_Hmm2",
   "KommySwim_TickleStart1"
  ],
  "greetVoice": [
   "KommySwim_Greeting",
   "KommySwim_Lobby",
   "KommySwim_Spawn1",
   "KommySwim_Joy1",
   "KommySwim_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Dance_1",
     "Dance_2",
     "Melong_1",
     "Melong_2",
     "Melong_3",
     "Relaxed_1",
     "Relaxed_2",
     "Tired_1",
     "Tired_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "KommySwim_Joy",
   "Proud_": "KommySwim_Pleasure",
   "Angry_": "KommySwim_Anger",
   "Sad_": "KommySwim_Sorrow",
   "Surprise_": "KommySwim_Surprise"
  }
 },
 {
  "id": "Kyarot",
  "name": "卡萝特",
  "en": "Kyarot",
  "desc": "妖精 · 4 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Kyarot/phone-avatar.png",
   "present": "assets/art/Kyarot/present.png",
   "album": "assets/art/Kyarot/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Kyarot",
    "dir": "assets/spine/Kyarot",
    "name": "默认",
    "desc": "基础外观（45 动作）",
    "voiceSkin": ""
   },
   {
    "id": "KyarotSkin1",
    "dir": "assets/spine/KyarotSkin1",
    "name": "烹饪卡萝特",
    "desc": "继一流园丁之后，卡萝特挑战一流厨师，只坚…（45 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "KyarotSkin2",
    "dir": "assets/spine/KyarotSkin2",
    "name": "达拉朗根贝斯手",
    "desc": "每天抱着的甘蔗暂放一边，改拿贝斯的卡萝特…（45 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "KyarotSkin3",
    "dir": "assets/spine/KyarotSkin3",
    "name": "朴素的社交派对",
    "desc": "在裁缝朋友的帮助下穿上华丽礼服的卡萝特。…（45 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Head",
    "Hair_Root"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Kyarot_Touch1",
     "Kyarot_Touch1_1",
     "Kyarot_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Kyarot_Touch2",
     "Kyarot_Touch2_1",
     "Kyarot_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Kyarot_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Kyarot_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Kyarot_TickleStart1",
     "Kyarot_TickleStart"
    ],
    "voiceMid": [
     "Kyarot_TickleDuring1",
     "Kyarot_TickleDuring"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Kyarot_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Kyarot_Surprise1",
   "Kyarot_Hmm1",
   "Kyarot_Yes1",
   "Kyarot_Touch1"
  ],
  "upsetVoice": [
   "Kyarot_Anger1",
   "Kyarot_No1",
   "Kyarot_Anger2",
   "Kyarot_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Kyarot_CallPlayer1",
   "Kyarot_Sorrow1",
   "Kyarot_Hmm2",
   "Kyarot_TickleStart1"
  ],
  "greetVoice": [
   "Kyarot_Greeting",
   "Kyarot_Lobby",
   "Kyarot_Spawn1",
   "Kyarot_Joy1",
   "Kyarot_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Melong_1",
     "Melong_2",
     "Melong_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Kyarot_Joy",
   "Proud_": "Kyarot_Pleasure",
   "Angry_": "Kyarot_Anger",
   "Sad_": "Kyarot_Sorrow",
   "Surprise_": "Kyarot_Surprise"
  }
 },
 {
  "id": "Laika",
  "name": "莱卡",
  "en": "Laika",
  "desc": "灵体 · 4 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Laika/phone-avatar.png",
   "present": "assets/art/Laika/present.png",
   "album": "assets/art/Laika/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Laika",
    "dir": "assets/spine/Laika",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   },
   {
    "id": "LaikaSkin1",
    "dir": "assets/spine/LaikaSkin1",
    "name": "闪电快球",
    "desc": "莱卡在莫纳蒂姆棒球比赛中担任先发投手。她…（43 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "LaikaSkin2",
    "dir": "assets/spine/LaikaSkin2",
    "name": "海滨闪电",
    "desc": "莱卡去度假。在宁静的海滩上打雷，惩治想破…（43 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "LaikaSkin3",
    "dir": "assets/spine/LaikaSkin3",
    "name": "天才闪电",
    "desc": "成为能干职员的莱卡。虽然看起来有些古板，…（43 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Neck"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [
    "NeckNeck",
    "Head_Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Neck"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Laika_Touch1",
     "Laika_Touch1_1",
     "Laika_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Laika_Touch2",
     "Laika_Touch2_1",
     "Laika_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Laika_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Laika_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Laika_TickleStart1"
    ],
    "voiceMid": [
     "Laika_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Laika_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Laika_Surprise1",
   "Laika_Hmm1",
   "Laika_Yes1",
   "Laika_Touch1"
  ],
  "upsetVoice": [
   "Laika_Anger1",
   "Laika_No1",
   "Laika_Anger2",
   "Laika_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Laika_CallPlayer1",
   "Laika_Sorrow1",
   "Laika_Hmm2",
   "Laika_TickleStart1"
  ],
  "greetVoice": [
   "Laika_Greeting",
   "Laika_Lobby",
   "Laika_Spawn1",
   "Laika_Joy1",
   "Laika_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Groggy_1",
     "Think_1",
     "Think_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Laika_Joy",
   "Proud_": "Laika_Pleasure",
   "Angry_": "Laika_Anger",
   "Sad_": "Laika_Sorrow",
   "Surprise_": "Laika_Surprise"
  }
 },
 {
  "id": "Lazy",
  "name": "雷吉",
  "en": "Lazy",
  "desc": "精灵 · 1 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Lazy/phone-avatar.png",
   "present": "assets/art/Lazy/present.png",
   "album": "assets/art/Lazy/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Lazy",
    "dir": "assets/spine/Lazy",
    "name": "默认",
    "desc": "基础外观（52 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Head",
    "Hair_L_Root"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Ear"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Lazy_Touch1",
     "Lazy_Touch1_1",
     "Lazy_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Lazy_Touch2",
     "Lazy_Touch2_1",
     "Lazy_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Lazy_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Lazy_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Lazy_TickleStart1"
    ],
    "voiceMid": [
     "Lazy_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Lazy_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Lazy_Surprise1",
   "Lazy_Hmm1",
   "Lazy_Yes1",
   "Lazy_Touch1"
  ],
  "upsetVoice": [
   "Lazy_Anger1",
   "Lazy_No1",
   "Lazy_Anger2",
   "Lazy_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Lazy_CallPlayer1",
   "Lazy_Sorrow1",
   "Lazy_Hmm2",
   "Lazy_TickleStart1"
  ],
  "greetVoice": [
   "Lazy_Greeting",
   "Lazy_Lobby",
   "Lazy_Spawn1",
   "Lazy_Joy1",
   "Lazy_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3",
     "Idle_4",
     "Idle_5"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Nicesmile_1",
     "Pose_1",
     "Question_1",
     "Salute_1",
     "Shy_1",
     "Shy_2",
     "Tired_1",
     "Tired_2",
     "Tired_3",
     "Tired_4",
     "Tired_5"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Lazy_Joy",
   "Proud_": "Lazy_Pleasure",
   "Angry_": "Lazy_Anger",
   "Sad_": "Lazy_Sorrow",
   "Surprise_": "Lazy_Surprise"
  }
 },
 {
  "id": "Leets",
  "name": "丽兹",
  "en": "Leets",
  "desc": "龙族 · 2 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Leets/phone-avatar.png",
   "present": "assets/art/Leets/present.png",
   "album": "assets/art/Leets/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Leets",
    "dir": "assets/spine/Leets",
    "name": "默认",
    "desc": "基础外观（44 动作）",
    "voiceSkin": ""
   },
   {
    "id": "LeetsSkin1",
    "dir": "assets/spine/LeetsSkin1",
    "name": "宅中钢铁",
    "desc": "据说是丽兹躲在房间避开排名战的时期。手里…（44 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Head",
    "Front_Hair_Root"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_Root"
   ],
   "earR": [
    "Ear_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Leets_Touch1",
     "Leets_Touch1_1",
     "Leets_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Leets_Touch2",
     "Leets_Touch2_1",
     "Leets_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Leets_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Leets_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Leets_TickleStart1"
    ],
    "voiceMid": [
     "Leets_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Leets_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Leets_Surprise1",
   "Leets_Hmm1",
   "Leets_Yes1",
   "Leets_Touch1"
  ],
  "upsetVoice": [
   "Leets_Anger1",
   "Leets_No1",
   "Leets_Anger2",
   "Leets_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Leets_CallPlayer1",
   "Leets_Sorrow1",
   "Leets_Hmm2",
   "Leets_TickleStart1"
  ],
  "greetVoice": [
   "Leets_Greeting",
   "Leets_Lobby",
   "Leets_Spawn1",
   "Leets_Joy1",
   "Leets_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Mad_1",
     "Mad_2",
     "Mad_3",
     "Mad_4",
     "Mad_5",
     "Mad_6",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Leets_Joy",
   "Proud_": "Leets_Pleasure",
   "Angry_": "Leets_Anger",
   "Sad_": "Leets_Sorrow",
   "Surprise_": "Leets_Surprise"
  }
 },
 {
  "id": "Lethe",
  "name": "勒忒",
  "en": "Lethe",
  "desc": "幽灵 · 1 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Lethe/phone-avatar.png",
   "present": "assets/art/Lethe/present.png",
   "album": "assets/art/Lethe/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Lethe",
    "dir": "assets/spine/Lethe",
    "name": "默认",
    "desc": "基础外观（58 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_Front_0",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Lethe_Touch1",
     "Lethe_Touch1_1",
     "Lethe_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Lethe_Touch2",
     "Lethe_Touch2_1",
     "Lethe_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Lethe_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Lethe_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Lethe_TickleStart1"
    ],
    "voiceMid": [
     "Lethe_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Lethe_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Lethe_Surprise1",
   "Lethe_Hmm1",
   "Lethe_Yes1",
   "Lethe_Touch1"
  ],
  "upsetVoice": [
   "Lethe_Anger1",
   "Lethe_No1",
   "Lethe_Anger2",
   "Lethe_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Lethe_CallPlayer1",
   "Lethe_Sorrow1",
   "Lethe_Hmm2",
   "Lethe_TickleStart1"
  ],
  "greetVoice": [
   "Lethe_Greeting",
   "Lethe_Lobby",
   "Lethe_Spawn1",
   "Lethe_Joy1",
   "Lethe_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Close_2",
     "Close_3",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Dance_2",
     "Laser_1",
     "Laser_2",
     "Laser_3",
     "Laser_4",
     "Laser_5",
     "Melong_1",
     "Melong_2",
     "Shy_1",
     "Shy_2",
     "Shy_3"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Lethe_Joy",
   "Proud_": "Lethe_Pleasure",
   "Angry_": "Lethe_Anger",
   "Sad_": "Lethe_Sorrow",
   "Surprise_": "Lethe_Surprise"
  }
 },
 {
  "id": "Levi",
  "name": "莱薇",
  "en": "Levi",
  "desc": "魔女 · 2 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Levi/phone-avatar.png",
   "present": "assets/art/Levi/present.png",
   "album": "assets/art/Levi/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Levi",
    "dir": "assets/spine/Levi",
    "name": "默认",
    "desc": "基础外观（40 动作）",
    "voiceSkin": ""
   },
   {
    "id": "LeviSkin1",
    "dir": "assets/spine/LeviSkin1",
    "name": "魔女王国剧场打工",
    "desc": "精灵们在魔女王国开设了剧场分店，莱薇也在…（40 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S2_Head"
   ],
   "headTop": [
    "S2_Hair_Front_Root"
   ],
   "face": [
    "S2_Face"
   ],
   "mouth": [
    "S2_F_Mouth"
   ],
   "cheekL": [
    "S2_F_Ball_L_Root"
   ],
   "cheekR": [
    "S2_F_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S2_F_Ball_Root"
   ],
   "ballMoveP": [
    "S2_F_Ball_R_Root",
    "S2_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S2_Head"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Levi_Touch1",
     "Levi_Touch1_1",
     "Levi_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Levi_Touch2",
     "Levi_Touch2_1",
     "Levi_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Levi_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Levi_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Levi_TickleStart1"
    ],
    "voiceMid": [
     "Levi_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Levi_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Levi_Surprise1",
   "Levi_Hmm1",
   "Levi_Yes1",
   "Levi_Touch1"
  ],
  "upsetVoice": [
   "Levi_Anger1",
   "Levi_No1",
   "Levi_Anger2",
   "Levi_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Levi_CallPlayer1",
   "Levi_Sorrow1",
   "Levi_Hmm2",
   "Levi_TickleStart1"
  ],
  "greetVoice": [
   "Levi_Greeting",
   "Levi_Lobby",
   "Levi_Spawn1",
   "Levi_Joy1",
   "Levi_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Quiet_1",
     "Smile_1",
     "Smile_2",
     "Sorry_1",
     "Sorry_2",
     "Sulky_1",
     "Sulky_2",
     "Talk_1",
     "Talk_2",
     "Thinking_1",
     "Thinking_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Levi_Joy",
   "Proud_": "Levi_Pleasure",
   "Angry_": "Levi_Anger",
   "Sad_": "Levi_Sorrow",
   "Surprise_": "Levi_Surprise"
  }
 },
 {
  "id": "LeviGraduate",
  "name": "莱薇（毕业）",
  "en": "LeviGraduate",
  "desc": "魔女 · 2 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/LeviGraduate/phone-avatar.png",
   "present": "assets/art/LeviGraduate/present.png",
   "album": "assets/art/LeviGraduate/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "LeviGraduate",
    "dir": "assets/spine/LeviGraduate",
    "name": "默认",
    "desc": "基础外观（60 动作）",
    "voiceSkin": ""
   },
   {
    "id": "LeviGraduateSkin1",
    "dir": "assets/spine/LeviGraduateSkin1",
    "name": "正式魔女的休息",
    "desc": "下班后的莱薇（毕业）。偶尔在工作时间之后…（60 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "LeviGraduate_Touch1",
     "LeviGraduate_Touch1_1",
     "LeviGraduate_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "LeviGraduate_Touch2",
     "LeviGraduate_Touch2_1",
     "LeviGraduate_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "LeviGraduate_DutchRubEnd1"
    ],
    "voiceEnd": [
     "LeviGraduate_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "LeviGraduate_TickleStart1"
    ],
    "voiceMid": [
     "LeviGraduate_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "LeviGraduate_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "LeviGraduate_Surprise1",
   "LeviGraduate_Hmm1",
   "LeviGraduate_Yes1",
   "LeviGraduate_Touch1"
  ],
  "upsetVoice": [
   "LeviGraduate_Anger1",
   "LeviGraduate_No1",
   "LeviGraduate_Anger2",
   "LeviGraduate_DutchRubEnd1"
  ],
  "hungryVoice": [
   "LeviGraduate_CallPlayer1",
   "LeviGraduate_Sorrow1",
   "LeviGraduate_Hmm2",
   "LeviGraduate_TickleStart1"
  ],
  "greetVoice": [
   "LeviGraduate_Greeting",
   "LeviGraduate_Lobby",
   "LeviGraduate_Spawn1",
   "LeviGraduate_Joy1",
   "LeviGraduate_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Happy_11",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Panic_7",
     "Panic_8",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Note_1",
     "Note_2",
     "Note_3",
     "Note_4",
     "Shy_1",
     "Shy_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "LeviGraduate_Joy",
   "Proud_": "LeviGraduate_Pleasure",
   "Angry_": "LeviGraduate_Anger",
   "Sad_": "LeviGraduate_Sorrow",
   "Surprise_": "LeviGraduate_Surprise"
  }
 },
 {
  "id": "Lion",
  "name": "里昂",
  "en": "Lion",
  "desc": "兽人 · 4 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Lion/phone-avatar.png",
   "present": "assets/art/Lion/present.png",
   "album": "assets/art/Lion/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Lion",
    "dir": "assets/spine/Lion",
    "name": "默认",
    "desc": "基础外观（51 动作）",
    "voiceSkin": ""
   },
   {
    "id": "LionSkin1",
    "dir": "assets/spine/LionSkin1",
    "name": "暖洋洋郊游",
    "desc": "里昂换掉大锤，挥舞小熊玩偶出游。途中若遇…（51 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "LionSkin2",
    "dir": "assets/spine/LionSkin2",
    "name": "饲料班班长",
    "desc": "戴着幼儿园帽，眼神明亮的里昂。班长的秘密…（51 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "LionSkin4",
    "dir": "assets/spine/LionSkin4",
    "name": "英雄的夏日假期",
    "desc": "英雄也需要休息。这是为了在海边尽情玩耍而…（51 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face_Emo",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [
    "Neck_Ribbon_Root"
   ],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_L"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Lion_Touch1",
     "Lion_Touch1_1",
     "Lion_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Lion_Touch2",
     "Lion_Touch2_1",
     "Lion_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Lion_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Lion_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Lion_TickleStart1"
    ],
    "voiceMid": [
     "Lion_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Lion_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Lion_Surprise1",
   "Lion_Hmm1",
   "Lion_Yes1",
   "Lion_Touch1"
  ],
  "upsetVoice": [
   "Lion_Anger1",
   "Lion_No1",
   "Lion_Anger2",
   "Lion_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Lion_CallPlayer1",
   "Lion_Sorrow1",
   "Lion_Hmm2",
   "Lion_TickleStart1"
  ],
  "greetVoice": [
   "Lion_Greeting",
   "Lion_Lobby",
   "Lion_Spawn1",
   "Lion_Joy1",
   "Lion_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Joke_1",
     "Joke_2",
     "Shy_1",
     "Shy_2",
     "Sleepy_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Lion_Joy",
   "Proud_": "Lion_Pleasure",
   "Angry_": "Lion_Anger",
   "Sad_": "Lion_Sorrow",
   "Surprise_": "Lion_Surprise"
  }
 },
 {
  "id": "MaestroMK2",
  "name": "大师2号",
  "en": "MaestroMK2",
  "desc": "精灵 · 2 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/MaestroMK2/phone-avatar.png",
   "present": "assets/art/MaestroMK2/present.png",
   "album": "assets/art/MaestroMK2/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "MaestroMK2",
    "dir": "assets/spine/MaestroMK2",
    "name": "默认",
    "desc": "基础外观（34 动作）",
    "voiceSkin": ""
   },
   {
    "id": "MaestroMK2Skin1",
    "dir": "assets/spine/MaestroMK2Skin1",
    "name": "年轻与叛逆",
    "desc": "达到青春期奇点的大师2号。机器人的反抗无…（35 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S1_Head",
    "S1_Head_IK"
   ],
   "headTop": [
    "S1_Head"
   ],
   "face": [],
   "mouth": [],
   "cheekL": [],
   "cheekR": [],
   "belly": [
    "S1_Body"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "S1_Ear_L"
   ],
   "earR": [
    "S1_Ear_R"
   ],
   "ballMove": [
    "Character_Ball_Move"
   ],
   "ballMoveP": [
    "S1_Head"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head",
    "S1_Head_IK"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "MaestroMK2_Touch1",
     "MaestroMK2_Touch1_1",
     "MaestroMK2_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "MaestroMK2_Touch2",
     "MaestroMK2_Touch2_1",
     "MaestroMK2_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "MaestroMK2_DutchRubEnd1"
    ],
    "voiceEnd": [
     "MaestroMK2_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "MaestroMK2_TickleStart1"
    ],
    "voiceMid": [
     "MaestroMK2_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "MaestroMK2_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "MaestroMK2_Surprise1",
   "MaestroMK2_Hmm1",
   "MaestroMK2_Yes1",
   "MaestroMK2_Touch1"
  ],
  "upsetVoice": [
   "MaestroMK2_Anger1",
   "MaestroMK2_No1",
   "MaestroMK2_Anger2",
   "MaestroMK2_DutchRubEnd1"
  ],
  "hungryVoice": [
   "MaestroMK2_CallPlayer1",
   "MaestroMK2_Sorrow1",
   "MaestroMK2_Hmm2",
   "MaestroMK2_TickleStart1"
  ],
  "greetVoice": [
   "MaestroMK2_Greeting",
   "MaestroMK2_Lobby",
   "MaestroMK2_Spawn1",
   "MaestroMK2_Joy1",
   "MaestroMK2_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Question_1",
     "Thinking_1",
     "Thinking_2",
     "Thinking_3",
     "Thinking_4",
     "Warning_1",
     "Smash",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "MaestroMK2_Joy",
   "Proud_": "MaestroMK2_Pleasure",
   "Angry_": "MaestroMK2_Anger",
   "Sad_": "MaestroMK2_Sorrow",
   "Surprise_": "MaestroMK2_Surprise"
  }
 },
 {
  "id": "Mago",
  "name": "玛戈",
  "en": "Mago",
  "desc": "兽人 · 2 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Mago/phone-avatar.png",
   "present": "assets/art/Mago/present.png",
   "album": "assets/art/Mago/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Mago",
    "dir": "assets/spine/Mago",
    "name": "默认",
    "desc": "基础外观（39 动作）",
    "voiceSkin": ""
   },
   {
    "id": "MagoSkin1",
    "dir": "assets/spine/MagoSkin1",
    "name": "牧羊少女",
    "desc": "为了和喜爱的动物朋友们去野餐而打扮的样子…（39 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S1_Head",
    "S2_Head_Flower_1"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_Root"
   ],
   "face": [],
   "mouth": [
    "S1_F_Mouth",
    "S1_Duck_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head",
    "S2_Head_Flower_1"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Mago_Touch1",
     "Mago_Touch1_1",
     "Mago_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Mago_Touch2",
     "Mago_Touch2_1",
     "Mago_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Mago_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Mago_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Mago_TickleStart1"
    ],
    "voiceMid": [
     "Mago_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Mago_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Mago_Surprise1",
   "Mago_Hmm1",
   "Mago_Yes1",
   "Mago_Touch1"
  ],
  "upsetVoice": [
   "Mago_Anger1",
   "Mago_No1",
   "Mago_Anger2",
   "Mago_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Mago_CallPlayer1",
   "Mago_Sorrow1",
   "Mago_Hmm2",
   "Mago_TickleStart1"
  ],
  "greetVoice": [
   "Mago_Greeting",
   "Mago_Lobby",
   "Mago_Spawn1",
   "Mago_Joy1",
   "Mago_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Taunt_1",
     "Taunt_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sulky_1",
     "Sulky_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Mago_Joy",
   "Proud_": "Mago_Pleasure",
   "Angry_": "Mago_Anger",
   "Sad_": "Mago_Sorrow",
   "Surprise_": "Mago_Surprise"
  }
 },
 {
  "id": "Maison",
  "name": "美空",
  "en": "Maison",
  "desc": "幽灵 · 1 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Maison/phone-avatar.png",
   "present": "assets/art/Maison/present.png",
   "album": "assets/art/Maison/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Maison",
    "dir": "assets/spine/Maison",
    "name": "默认",
    "desc": "基础外观（40 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Dizzy_1",
    "Dizzy_2"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Happy_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Maison_Touch1",
     "Maison_Touch1_1",
     "Maison_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Maison_Touch2",
     "Maison_Touch2_1",
     "Maison_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Maison_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Maison_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Maison_TickleStart1"
    ],
    "voiceMid": [
     "Maison_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Maison_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Maison_Surprise1",
   "Maison_Hmm1",
   "Maison_Yes1",
   "Maison_Touch1"
  ],
  "upsetVoice": [
   "Maison_Anger1",
   "Maison_No1",
   "Maison_Anger2",
   "Maison_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Maison_CallPlayer1",
   "Maison_Sorrow1",
   "Maison_Hmm2",
   "Maison_TickleStart1"
  ],
  "greetVoice": [
   "Maison_Greeting",
   "Maison_Lobby",
   "Maison_Spawn1",
   "Maison_Joy1",
   "Maison_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Dizzy_1",
     "Dizzy_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Shy_1",
     "Sleep_1",
     "Sorry_1"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Maison_Joy",
   "Proud_": "Maison_Pleasure",
   "Angry_": "Maison_Anger",
   "Sad_": "Maison_Sorrow",
   "Surprise_": "Maison_Surprise"
  }
 },
 {
  "id": "Makasha",
  "name": "玛卡莎",
  "en": "Makasha",
  "desc": "魔女 · 3 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Makasha/phone-avatar.png",
   "present": "assets/art/Makasha/present.png",
   "album": "assets/art/Makasha/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Makasha",
    "dir": "assets/spine/Makasha",
    "name": "默认",
    "desc": "基础外观（59 动作）",
    "voiceSkin": ""
   },
   {
    "id": "MakashaSkin1",
    "dir": "assets/spine/MakashaSkin1",
    "name": "汉堡桶魔女",
    "desc": "制作非汉堡的汉堡的玛卡莎跳出来了。不要抱…（59 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "MakashaSkin2",
    "dir": "assets/spine/MakashaSkin2",
    "name": "温泉桶魔女",
    "desc": "回想疲惫多事的过去，玛卡莎享受温泉浴，表…（59 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Makasha_Touch1",
     "Makasha_Touch1_1",
     "Makasha_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Makasha_Touch2",
     "Makasha_Touch2_1",
     "Makasha_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Makasha_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Makasha_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Makasha_TickleStart1"
    ],
    "voiceMid": [
     "Makasha_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Makasha_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Makasha_Surprise1",
   "Makasha_Hmm1",
   "Makasha_Yes1",
   "Makasha_Touch1"
  ],
  "upsetVoice": [
   "Makasha_Anger1",
   "Makasha_No1",
   "Makasha_Anger2",
   "Makasha_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Makasha_CallPlayer1",
   "Makasha_Sorrow1",
   "Makasha_Hmm2",
   "Makasha_TickleStart1"
  ],
  "greetVoice": [
   "Makasha_Greeting",
   "Makasha_Lobby",
   "Makasha_Spawn1",
   "Makasha_Joy1",
   "Makasha_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Serious_5",
     "Serious_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Calm_1",
     "Calm_2",
     "Calm_3",
     "Calm_4",
     "Dance_1",
     "Dance_2",
     "Groggy_1",
     "Sleepy_1",
     "Thinking_1",
     "Thinking_2",
     "Thinking_3",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Makasha_Joy",
   "Proud_": "Makasha_Pleasure",
   "Angry_": "Makasha_Anger",
   "Sad_": "Makasha_Sorrow",
   "Surprise_": "Makasha_Surprise"
  }
 },
 {
  "id": "Marie",
  "name": "玛丽",
  "en": "Marie",
  "desc": "妖精 · 1 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Marie/phone-avatar.png",
   "present": "assets/art/Marie/present.png",
   "album": "assets/art/Marie/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Marie",
    "dir": "assets/spine/Marie",
    "name": "默认",
    "desc": "基础外观（39 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "S1_Head",
    "S2_Headlight"
   ],
   "headTop": [
    "S1_Hair_9_0",
    "S1_Head"
   ],
   "face": [
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_Ball_L",
    "S1_Ball_L_Root"
   ],
   "cheekR": [
    "S1_Ball_R",
    "S1_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [
    "S1_Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_Ball_R",
    "S1_Ball_Root"
   ],
   "ballMoveP": [
    "S1_Ball_R_Root",
    "S1_Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head",
    "S2_Headlight"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Marie_Touch1",
     "Marie_Touch1_1",
     "Marie_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Marie_Touch2",
     "Marie_Touch2_1",
     "Marie_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Marie_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Marie_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Marie_TickleStart1"
    ],
    "voiceMid": [
     "Marie_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Marie_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Marie_Surprise1",
   "Marie_Hmm1",
   "Marie_Yes1",
   "Marie_Touch1"
  ],
  "upsetVoice": [
   "Marie_Anger1",
   "Marie_No1",
   "Marie_Anger2",
   "Marie_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Marie_CallPlayer1",
   "Marie_Sorrow1",
   "Marie_Hmm2",
   "Marie_TickleStart1"
  ],
  "greetVoice": [
   "Marie_Greeting",
   "Marie_Lobby",
   "Marie_Spawn1",
   "Marie_Joy1",
   "Marie_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Taunt_1",
     "Taunt_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Dehet_1",
     "Dehet_2",
     "Dehet_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Marie_Joy",
   "Proud_": "Marie_Pleasure",
   "Angry_": "Marie_Anger",
   "Sad_": "Marie_Sorrow",
   "Surprise_": "Marie_Surprise"
  }
 },
 {
  "id": "Mayo",
  "name": "玛约",
  "en": "Mayo",
  "desc": "妖精 · 2 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Mayo/phone-avatar.png",
   "present": "assets/art/Mayo/present.png",
   "album": "assets/art/Mayo/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Mayo",
    "dir": "assets/spine/Mayo",
    "name": "默认",
    "desc": "基础外观（41 动作）",
    "voiceSkin": ""
   },
   {
    "id": "MayoSkin1",
    "dir": "assets/spine/MayoSkin1",
    "name": "梦想中的收藏家",
    "desc": "玛约穿着舒适准备入睡。问她梦里会收集东西…（41 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_F_Hair_CT"
   ],
   "face": [
    "S1_F_Face_VCT",
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_Ball_Root"
   ],
   "belly": [
    "S1_Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Mayo_Touch1",
     "Mayo_Touch1_1",
     "Mayo_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Mayo_Touch2",
     "Mayo_Touch2_1",
     "Mayo_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Mayo_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Mayo_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Mayo_TickleStart1"
    ],
    "voiceMid": [
     "Mayo_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Mayo_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Mayo_Surprise1",
   "Mayo_Hmm1",
   "Mayo_Yes1",
   "Mayo_Touch1"
  ],
  "upsetVoice": [
   "Mayo_Anger1",
   "Mayo_No1",
   "Mayo_Anger2",
   "Mayo_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Mayo_CallPlayer1",
   "Mayo_Sorrow1",
   "Mayo_Hmm2",
   "Mayo_TickleStart1"
  ],
  "greetVoice": [
   "Mayo_Greeting",
   "Mayo_Lobby",
   "Mayo_Spawn1",
   "Mayo_Joy1",
   "Mayo_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Curious_1",
     "Curious_2",
     "Curious_3",
     "Curious_4",
     "Shame_1",
     "Smirking_1",
     "Smirking_2",
     "Sulky_1",
     "Sulky_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Mayo_Joy",
   "Proud_": "Mayo_Pleasure",
   "Angry_": "Mayo_Anger",
   "Sad_": "Mayo_Sorrow",
   "Surprise_": "Mayo_Surprise"
  }
 },
 {
  "id": "MayoCool",
  "name": "玛约(超帅)",
  "en": "MayoCool",
  "desc": "妖精 · 3 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/MayoCool/phone-avatar.png",
   "present": "assets/art/MayoCool/present.png",
   "album": "assets/art/MayoCool/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "MayoCool",
    "dir": "assets/spine/MayoCool",
    "name": "默认",
    "desc": "基础外观（63 动作）",
    "voiceSkin": ""
   },
   {
    "id": "MayoCoolSkin1",
    "dir": "assets/spine/MayoCoolSkin1",
    "name": "水手号的船长",
    "desc": "据说每当有人在元灵湖玩‘木筏游船’，就会…（63 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "MayoCoolSkin2",
    "dir": "assets/spine/MayoCoolSkin2",
    "name": "为了持续的收藏",
    "desc": "玛约（超帅）说自己一直在等待今天这一刻。…（63 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Bell_Head_2"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_AC_Root"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Bell_Head_2"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "MayoCool_Touch1",
     "MayoCool_Touch1_1",
     "MayoCool_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "MayoCool_Touch2",
     "MayoCool_Touch2_1",
     "MayoCool_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "MayoCool_DutchRubEnd1"
    ],
    "voiceEnd": [
     "MayoCool_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "MayoCool_TickleStart1"
    ],
    "voiceMid": [
     "MayoCool_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "MayoCool_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "MayoCool_Surprise1",
   "MayoCool_Hmm1",
   "MayoCool_Yes1",
   "MayoCool_Touch1"
  ],
  "upsetVoice": [
   "MayoCool_Anger1",
   "MayoCool_No1",
   "MayoCool_Anger2",
   "MayoCool_DutchRubEnd1"
  ],
  "hungryVoice": [
   "MayoCool_CallPlayer1",
   "MayoCool_Sorrow1",
   "MayoCool_Hmm2",
   "MayoCool_TickleStart1"
  ],
  "greetVoice": [
   "MayoCool_Greeting",
   "MayoCool_Lobby",
   "MayoCool_Spawn1",
   "MayoCool_Joy1",
   "MayoCool_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Beam_1",
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Dance_1",
     "Melong_1",
     "Melong_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sorry_1",
     "Sorry_2",
     "Sorry_3",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "MayoCool_Joy",
   "Proud_": "MayoCool_Pleasure",
   "Angry_": "MayoCool_Anger",
   "Sad_": "MayoCool_Sorrow",
   "Surprise_": "MayoCool_Surprise"
  }
 },
 {
  "id": "Meluna",
  "name": "梅芦娜",
  "en": "Meluna",
  "desc": "灵体 · 2 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Meluna/phone-avatar.png",
   "present": "assets/art/Meluna/present.png",
   "album": "assets/art/Meluna/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Meluna",
    "dir": "assets/spine/Meluna",
    "name": "默认",
    "desc": "基础外观（40 动作）",
    "voiceSkin": ""
   },
   {
    "id": "MelunaSkin1",
    "dir": "assets/spine/MelunaSkin1",
    "name": "最爱之人的使徒",
    "desc": "如彗星般崛起的新人偶像。出道时曾因实力问…（40 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S1_Head",
    "S3_Plants_Head_Root"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_Root"
   ],
   "face": [],
   "mouth": [
    "S1_F_Mouth",
    "S3_Plants_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_CT"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head",
    "S3_Plants_Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Meluna_Touch1",
     "Meluna_Touch1_1",
     "Meluna_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Meluna_Touch2",
     "Meluna_Touch2_1",
     "Meluna_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Meluna_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Meluna_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Meluna_TickleStart1"
    ],
    "voiceMid": [
     "Meluna_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Meluna_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Meluna_Surprise1",
   "Meluna_Hmm1",
   "Meluna_Yes1",
   "Meluna_Touch1"
  ],
  "upsetVoice": [
   "Meluna_Anger1",
   "Meluna_No1",
   "Meluna_Anger2",
   "Meluna_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Meluna_CallPlayer1",
   "Meluna_Sorrow1",
   "Meluna_Hmm2",
   "Meluna_TickleStart1"
  ],
  "greetVoice": [
   "Meluna_Greeting",
   "Meluna_Lobby",
   "Meluna_Spawn1",
   "Meluna_Joy1",
   "Meluna_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Shy_1",
     "Shy_2",
     "Singing_1",
     "Singing_2",
     "Singing_3",
     "Sulky_1",
     "Sulky_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Meluna_Joy",
   "Proud_": "Meluna_Pleasure",
   "Angry_": "Meluna_Anger",
   "Sad_": "Meluna_Sorrow",
   "Surprise_": "Meluna_Surprise"
  }
 },
 {
  "id": "Miro",
  "name": "米洛",
  "en": "Miro",
  "desc": "灵体 · 3 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Miro/phone-avatar.png",
   "present": "assets/art/Miro/present.png",
   "album": "assets/art/Miro/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Miro",
    "dir": "assets/spine/Miro",
    "name": "默认",
    "desc": "基础外观（42 动作）",
    "voiceSkin": ""
   },
   {
    "id": "MiroSkin1",
    "dir": "assets/spine/MiroSkin1",
    "name": "水面映出的童心",
    "desc": "水面映出的童心（42 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "MiroSkin2",
    "dir": "assets/spine/MiroSkin2",
    "name": "黑发大魔法师",
    "desc": "黑发大魔法师（42 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_total"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Miro_Touch1",
     "Miro_Touch1_1",
     "Miro_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Miro_Touch2",
     "Miro_Touch2_1",
     "Miro_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Miro_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Miro_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Miro_TickleStart1"
    ],
    "voiceMid": [
     "Miro_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Miro_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Miro_Surprise1",
   "Miro_Hmm1",
   "Miro_Yes1",
   "Miro_Touch1"
  ],
  "upsetVoice": [
   "Miro_Anger1",
   "Miro_No1",
   "Miro_Anger2",
   "Miro_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Miro_CallPlayer1",
   "Miro_Sorrow1",
   "Miro_Hmm2",
   "Miro_TickleStart1"
  ],
  "greetVoice": [
   "Miro_Greeting",
   "Miro_Lobby",
   "Miro_Spawn1",
   "Miro_Joy1",
   "Miro_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Mirror_1",
     "Mirror_2",
     "Mirror_3",
     "Mirror_4",
     "Mirror_5",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Miro_Joy",
   "Proud_": "Miro_Pleasure",
   "Angry_": "Miro_Anger",
   "Sad_": "Miro_Sorrow",
   "Surprise_": "Miro_Surprise"
  }
 },
 {
  "id": "Momo",
  "name": "小桃",
  "en": "Momo",
  "desc": "兽人 · 5 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Momo/phone-avatar.png",
   "present": "assets/art/Momo/present.png",
   "album": "assets/art/Momo/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Momo",
    "dir": "assets/spine/Momo",
    "name": "默认",
    "desc": "基础外观（48 动作）",
    "voiceSkin": ""
   },
   {
    "id": "MomoSkin1",
    "dir": "assets/spine/MomoSkin1",
    "name": "忍者的假日",
    "desc": "无论穿什么衣服都不忘修行的小桃。虽然是活…（48 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "MomoSkin2",
    "dir": "assets/spine/MomoSkin2",
    "name": "影级忍者小桃",
    "desc": "自称成为了雾之森超级忍者的小桃。长发飞扬…（48 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "MomoSkin3",
    "dir": "assets/spine/MomoSkin3",
    "name": "嘻哈满载忍法",
    "desc": "将精灵们之间流行的文化融入忍法修行的小桃…（48 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "MomoSkin4",
    "dir": "assets/spine/MomoSkin4",
    "name": "甜心忍者·雪影",
    "desc": "据说正在修炼名为雪之忍法的神秘技术的小桃…（48 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_L"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Happy_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Momo_Touch1",
     "Momo_Touch1_1",
     "Momo_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Momo_Touch2",
     "Momo_Touch2_1",
     "Momo_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Momo_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Momo_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Momo_TickleStart1"
    ],
    "voiceMid": [
     "Momo_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Momo_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Momo_Surprise1",
   "Momo_Hmm1",
   "Momo_Yes1",
   "Momo_Touch1"
  ],
  "upsetVoice": [
   "Momo_Anger1",
   "Momo_No1",
   "Momo_Anger2",
   "Momo_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Momo_CallPlayer1",
   "Momo_Sorrow1",
   "Momo_Hmm2",
   "Momo_TickleStart1"
  ],
  "greetVoice": [
   "Momo_Greeting",
   "Momo_Lobby",
   "Momo_Spawn1",
   "Momo_Joy1",
   "Momo_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Shy_1",
     "Shy_2",
     "Sorry_1",
     "Sorry_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Momo_Joy",
   "Proud_": "Momo_Pleasure",
   "Angry_": "Momo_Anger",
   "Sad_": "Momo_Sorrow",
   "Surprise_": "Momo_Surprise"
  }
 },
 {
  "id": "Mute",
  "name": "穆特",
  "en": "Mute",
  "desc": "灵体 · 3 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Mute/phone-avatar.png",
   "present": "assets/art/Mute/present.png",
   "album": "assets/art/Mute/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Mute",
    "dir": "assets/spine/Mute",
    "name": "默认",
    "desc": "基础外观（62 动作）",
    "voiceSkin": ""
   },
   {
    "id": "MuteSkin1",
    "dir": "assets/spine/MuteSkin1",
    "name": "危险的邻家间谍",
    "desc": "危险的邻家间谍（62 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "MuteSkin2",
    "dir": "assets/spine/MuteSkin2",
    "name": "池水余温",
    "desc": "池水余温（62 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Necktie_Root"
   ],
   "tail": [],
   "earL": [
    "Ear_AC"
   ],
   "earR": [],
   "ballMove": [
    "Ball_R",
    "Ball_L",
    "Character_Ball_Move"
   ],
   "ballMoveP": [
    "Ball_L",
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": "",
   "altBone": "Ball_R",
   "altBones": [
    "Ball_R",
    "Ball_L"
   ]
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Mute_Touch1",
     "Mute_Touch1_1",
     "Mute_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Mute_Touch2",
     "Mute_Touch2_1",
     "Mute_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Mute_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Mute_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Mute_TickleStart1"
    ],
    "voiceMid": [
     "Mute_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Mute_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Mute_Surprise1",
   "Mute_Hmm1",
   "Mute_Yes1",
   "Mute_Touch1"
  ],
  "upsetVoice": [
   "Mute_Anger1",
   "Mute_No1",
   "Mute_Anger2",
   "Mute_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Mute_CallPlayer1",
   "Mute_Sorrow1",
   "Mute_Hmm2",
   "Mute_TickleStart1"
  ],
  "greetVoice": [
   "Mute_Greeting",
   "Mute_Lobby",
   "Mute_Spawn1",
   "Mute_Joy1",
   "Mute_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3",
     "Idle_4"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Shy_1",
     "Shy_2",
     "Sorry_1",
     "Sorry_2",
     "Sorry_3",
     "Sorry_4",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Mute_Joy",
   "Proud_": "Mute_Pleasure",
   "Angry_": "Mute_Anger",
   "Sad_": "Mute_Sorrow",
   "Surprise_": "Mute_Surprise"
  }
 },
 {
  "id": "Mynx",
  "name": "米雪",
  "en": "Mynx",
  "desc": "兽人 · 1 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Mynx/phone-avatar.png",
   "present": "assets/art/Mynx/present.png",
   "album": "assets/art/Mynx/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Mynx",
    "dir": "assets/spine/Mynx",
    "name": "默认",
    "desc": "基础外观（44 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_L"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Mynx_Touch1",
     "Mynx_Touch1_1",
     "Mynx_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Mynx_Touch2",
     "Mynx_Touch2_1",
     "Mynx_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Mynx_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Mynx_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Mynx_TickleStart1"
    ],
    "voiceMid": [
     "Mynx_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Mynx_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Mynx_Surprise1",
   "Mynx_Hmm1",
   "Mynx_Yes1",
   "Mynx_Touch1"
  ],
  "upsetVoice": [
   "Mynx_Anger1",
   "Mynx_No1",
   "Mynx_Anger2",
   "Mynx_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Mynx_CallPlayer1",
   "Mynx_Sorrow1",
   "Mynx_Hmm2",
   "Mynx_TickleStart1"
  ],
  "greetVoice": [
   "Mynx_Greeting",
   "Mynx_Lobby",
   "Mynx_Spawn1",
   "Mynx_Joy1",
   "Mynx_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Serious_1",
     "Serious_2",
     "Serious_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Shy_1",
     "Shy_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Mynx_Joy",
   "Proud_": "Mynx_Pleasure",
   "Angry_": "Mynx_Anger",
   "Sad_": "Mynx_Sorrow",
   "Surprise_": "Mynx_Surprise"
  }
 },
 {
  "id": "Naia",
  "name": "奈亚",
  "en": "Naia",
  "desc": "灵体 · 5 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Naia/phone-avatar.png",
   "present": "assets/art/Naia/present.png",
   "album": "assets/art/Naia/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Naia",
    "dir": "assets/spine/Naia",
    "name": "默认",
    "desc": "基础外观（48 动作）",
    "voiceSkin": ""
   },
   {
    "id": "NaiaSkin1",
    "dir": "assets/spine/NaiaSkin1",
    "name": "超可爱元素学园生",
    "desc": "刚成为高阶元灵，开始学习各种东西的奈亚。…（48 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "NaiaSkin2",
    "dir": "assets/spine/NaiaSkin2",
    "name": "蹦跳水嬉",
    "desc": "她嘟囔着说既然有山兔为什么没有水兔，于是…（48 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "NaiaSkin3",
    "dir": "assets/spine/NaiaSkin3",
    "name": "节奏提升！应援新人！",
    "desc": "似乎很享受应援这件事，奈亚的情绪异常高涨…（48 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "NaiaSkin5",
    "dir": "assets/spine/NaiaSkin5",
    "name": "湖之海盗船长",
    "desc": "奈亚突然宣布要当海盗团船长，甚至换上了整…（48 动作）",
    "voiceSkin": "_Skin5"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Size"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face_HCT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Size"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1",
    "Proud_2"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Naia_Touch1",
     "Naia_Touch1_1",
     "Naia_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Naia_Touch2",
     "Naia_Touch2_1",
     "Naia_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Naia_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Naia_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Naia_TickleStart1"
    ],
    "voiceMid": [
     "Naia_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Naia_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Naia_Surprise1",
   "Naia_Hmm1",
   "Naia_Yes1",
   "Naia_Touch1"
  ],
  "upsetVoice": [
   "Naia_Anger1",
   "Naia_No1",
   "Naia_Anger2",
   "Naia_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Naia_CallPlayer1",
   "Naia_Sorrow1",
   "Naia_Hmm2",
   "Naia_TickleStart1"
  ],
  "greetVoice": [
   "Naia_Greeting",
   "Naia_Lobby",
   "Naia_Spawn1",
   "Naia_Joy1",
   "Naia_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Proud_1",
     "Proud_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Serious_1",
     "Serious_2",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Naia_Joy",
   "Proud_": "Naia_Pleasure",
   "Angry_": "Naia_Anger",
   "Sad_": "Naia_Sorrow",
   "Surprise_": "Naia_Surprise"
  }
 },
 {
  "id": "Ner",
  "name": "尼尔",
  "en": "Ner",
  "desc": "妖精 · 4 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Ner/phone-avatar.png",
   "present": "assets/art/Ner/present.png",
   "album": "assets/art/Ner/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Ner",
    "dir": "assets/spine/Ner",
    "name": "默认",
    "desc": "基础外观（60 动作）",
    "voiceSkin": ""
   },
   {
    "id": "NerSkin1",
    "dir": "assets/spine/NerSkin1",
    "name": "昔日荣光",
    "desc": "据说涅尔的毕业相册里记录着她过去的可怕样…（60 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "NerSkin2",
    "dir": "assets/spine/NerSkin2",
    "name": "私人授课出行",
    "desc": "涅尔带着埃尔芬进行户外授课时穿的外出服。…（60 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "NerSkin3",
    "dir": "assets/spine/NerSkin3",
    "name": "教团的圣宴派对",
    "desc": "在特别的教团之日，盛装打扮的涅尔。虽然担…（60 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "S1_Head",
    "S1_Head2"
   ],
   "headTop": [
    "S1_Hair_9_0",
    "S1_Head"
   ],
   "face": [
    "S1_F_Face_VCT",
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [
    "S1_Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_L_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head",
    "S1_Head2"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Ner_Touch1",
     "Ner_Touch1_1",
     "Ner_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Ner_Touch2",
     "Ner_Touch2_1",
     "Ner_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Ner_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Ner_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Ner_TickleStart1"
    ],
    "voiceMid": [
     "Ner_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Ner_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Ner_Surprise1",
   "Ner_Hmm1",
   "Ner_Yes1",
   "Ner_Touch1"
  ],
  "upsetVoice": [
   "Ner_Anger1",
   "Ner_No1",
   "Ner_Anger2",
   "Ner_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Ner_CallPlayer1",
   "Ner_Sorrow1",
   "Ner_Hmm2",
   "Ner_TickleStart1"
  ],
  "greetVoice": [
   "Ner_Greeting",
   "Ner_Lobby",
   "Ner_Spawn1",
   "Ner_Joy1",
   "Ner_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Proud_1",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Surprise_1"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Notmyfault_1",
     "Shame_1",
     "Shame_2",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Think_1",
     "Tired_1",
     "Tired_2",
     "Tired_3",
     "Tired_4",
     "Tired_5",
     "Worry_1",
     "Worry_2",
     "Aside_1",
     "Aside_2",
     "Idle_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Ner_Joy",
   "Proud_": "Ner_Pleasure",
   "Angry_": "Ner_Anger",
   "Sad_": "Ner_Sorrow",
   "Surprise_": "Ner_Surprise"
  }
 },
 {
  "id": "NerRage",
  "name": "涅尔（义愤）",
  "en": "NerRage",
  "desc": "妖精 · 3 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/NerRage/phone-avatar.png",
   "present": "assets/art/NerRage/present.png",
   "album": "assets/art/NerRage/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "NerRage",
    "dir": "assets/spine/NerRage",
    "name": "默认",
    "desc": "基础外观（64 动作）",
    "voiceSkin": ""
   },
   {
    "id": "NerRageSkin1",
    "dir": "assets/spine/NerRageSkin1",
    "name": "一日妖精女王",
    "desc": "受不了埃尔芬的央求，只好陪她玩角色扮演的…（64 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "NerRageSkin2",
    "dir": "assets/spine/NerRageSkin2",
    "name": "王冠的授予者",
    "desc": "在涅尔遇到非常特别之事的那天，盛装打扮的…（64 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_1_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "EyeBall_L"
   ],
   "cheekR": [
    "EyeBall_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "EyeBall_R"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "EyeBall_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "NerRage_Touch1",
     "NerRage_Touch1_1",
     "NerRage_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "NerRage_Touch2",
     "NerRage_Touch2_1",
     "NerRage_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "NerRage_DutchRubEnd1"
    ],
    "voiceEnd": [
     "NerRage_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "NerRage_TickleStart1"
    ],
    "voiceMid": [
     "NerRage_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "NerRage_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "NerRage_Surprise1",
   "NerRage_Hmm1",
   "NerRage_Yes1",
   "NerRage_Touch1"
  ],
  "upsetVoice": [
   "NerRage_Anger1",
   "NerRage_No1",
   "NerRage_Anger2",
   "NerRage_DutchRubEnd1"
  ],
  "hungryVoice": [
   "NerRage_CallPlayer1",
   "NerRage_Sorrow1",
   "NerRage_Hmm2",
   "NerRage_TickleStart1"
  ],
  "greetVoice": [
   "NerRage_Greeting",
   "NerRage_Lobby",
   "NerRage_Spawn1",
   "NerRage_Joy1",
   "NerRage_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Mad_1",
     "Mad_2",
     "Mad_3",
     "Mad_4",
     "Mad_5",
     "Mad_6",
     "Mad_7",
     "Pray_1",
     "Pray_2",
     "Pray_3",
     "Pray_4",
     "Pray_5",
     "Shy_1",
     "Shy_2",
     "Sulky_1",
     "Sulky_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "NerRage_Joy",
   "Proud_": "NerRage_Pleasure",
   "Angry_": "NerRage_Anger",
   "Sad_": "NerRage_Sorrow",
   "Surprise_": "NerRage_Surprise"
  }
 },
 {
  "id": "Neti",
  "name": "内蒂",
  "en": "Neti",
  "desc": "龙族 · 3 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Neti/phone-avatar.png",
   "present": "assets/art/Neti/present.png",
   "album": "assets/art/Neti/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Neti",
    "dir": "assets/spine/Neti",
    "name": "默认",
    "desc": "基础外观（50 动作）",
    "voiceSkin": ""
   },
   {
    "id": "NetiSkin1",
    "dir": "assets/spine/NetiSkin1",
    "name": "挖掘机龙",
    "desc": "内蒂不仅擅长发掘，也精通挖掘。取得莫纳蒂…（50 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "NetiSkin2",
    "dir": "assets/spine/NetiSkin2",
    "name": "鱼类学者流浪猫",
    "desc": "穿着黑猫睡衣的内蒂。按照她自己的说法，这…（50 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Drill_Head_Main"
   ],
   "headTop": [
    "Hair_Front_1_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Necklace_R_Root"
   ],
   "tail": [
    "Tail_2_Root"
   ],
   "earL": [
    "Ear_L_1"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_L_Root",
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Drill_Head_Main"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Neti_Touch1",
     "Neti_Touch1_1",
     "Neti_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Neti_Touch2",
     "Neti_Touch2_1",
     "Neti_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Neti_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Neti_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Neti_TickleStart1"
    ],
    "voiceMid": [
     "Neti_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Neti_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Neti_Surprise1",
   "Neti_Hmm1",
   "Neti_Yes1",
   "Neti_Touch1"
  ],
  "upsetVoice": [
   "Neti_Anger1",
   "Neti_No1",
   "Neti_Anger2",
   "Neti_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Neti_CallPlayer1",
   "Neti_Sorrow1",
   "Neti_Hmm2",
   "Neti_TickleStart1"
  ],
  "greetVoice": [
   "Neti_Greeting",
   "Neti_Lobby",
   "Neti_Spawn1",
   "Neti_Joy1",
   "Neti_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Serious_1",
     "Surprise_1"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Check_1",
     "Check_2",
     "Check_3",
     "Drill_1",
     "Drill_2",
     "Drill_3",
     "Pride_1",
     "Pride_2",
     "Pride_3",
     "Shy_1",
     "Shy_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Neti_Joy",
   "Proud_": "Neti_Pleasure",
   "Angry_": "Neti_Anger",
   "Sad_": "Neti_Sorrow",
   "Surprise_": "Neti_Surprise"
  }
 },
 {
  "id": "Nicole",
  "name": "妮可",
  "en": "Nicole",
  "desc": "灵体 · 2 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Nicole/phone-avatar.png",
   "present": "assets/art/Nicole/present.png",
   "album": "assets/art/Nicole/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Nicole",
    "dir": "assets/spine/Nicole",
    "name": "默认",
    "desc": "基础外观（57 动作）",
    "voiceSkin": ""
   },
   {
    "id": "NicoleSkin1",
    "dir": "assets/spine/NicoleSkin1",
    "name": "噼啪迸发的好手艺",
    "desc": "妮可突然主动说要替我准备小菜。不知为何，…（57 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neckless_Root"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Nicole_Touch1",
     "Nicole_Touch1_1",
     "Nicole_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Nicole_Touch2",
     "Nicole_Touch2_1",
     "Nicole_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Nicole_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Nicole_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Nicole_TickleStart1"
    ],
    "voiceMid": [
     "Nicole_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Nicole_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Nicole_Surprise1",
   "Nicole_Hmm1",
   "Nicole_Yes1",
   "Nicole_Touch1"
  ],
  "upsetVoice": [
   "Nicole_Anger1",
   "Nicole_No1",
   "Nicole_Anger2",
   "Nicole_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Nicole_CallPlayer1",
   "Nicole_Sorrow1",
   "Nicole_Hmm2",
   "Nicole_TickleStart1"
  ],
  "greetVoice": [
   "Nicole_Greeting",
   "Nicole_Lobby",
   "Nicole_Spawn1",
   "Nicole_Joy1",
   "Nicole_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Panic_7",
     "Panic_8",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Blank_5",
     "Concent_1",
     "Concent_2",
     "Lazy_1",
     "Lazy_2",
     "Shock_1",
     "Shock_2",
     "Shock_3",
     "Shy_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Nicole_Joy",
   "Proud_": "Nicole_Pleasure",
   "Angry_": "Nicole_Anger",
   "Sad_": "Nicole_Sorrow",
   "Surprise_": "Nicole_Surprise"
  }
 },
 {
  "id": "Opal",
  "name": "欧珀",
  "en": "Opal",
  "desc": "龙族 · 5 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Opal/phone-avatar.png",
   "present": "assets/art/Opal/present.png",
   "album": "assets/art/Opal/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Opal",
    "dir": "assets/spine/Opal",
    "name": "默认",
    "desc": "基础外观（52 动作）",
    "voiceSkin": ""
   },
   {
    "id": "OpalSkin1",
    "dir": "assets/spine/OpalSkin1",
    "name": "冬季派对策划者",
    "desc": "即使在严冬，欧珀的派对本能也不停歇。她穿…（52 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "OpalSkin2",
    "dir": "assets/spine/OpalSkin2",
    "name": "稍微不活泼的欧珀",
    "desc": "与平时不同，有点脾气的欧珀。虽然她稍微有…（52 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "OpalSkin3",
    "dir": "assets/spine/OpalSkin3",
    "name": "完全活泼的欧珀",
    "desc": "比平时眼睛更加闪亮的欧珀。今天她也加力在…（52 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "OpalSkin4",
    "dir": "assets/spine/OpalSkin4",
    "name": "天空上的惊喜",
    "desc": "成为负责面包舟派对的空乘欧珀。这次她又会…（52 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body",
    "Pelvis"
   ],
   "neck": [
    "Neck_Ac"
   ],
   "tail": [
    "Tail_0"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_L"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Opal_Touch1",
     "Opal_Touch1_1",
     "Opal_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Opal_Touch2",
     "Opal_Touch2_1",
     "Opal_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Opal_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Opal_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Opal_TickleStart1"
    ],
    "voiceMid": [
     "Opal_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Opal_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Opal_Surprise1",
   "Opal_Hmm1",
   "Opal_Yes1",
   "Opal_Touch1"
  ],
  "upsetVoice": [
   "Opal_Anger1",
   "Opal_No1",
   "Opal_Anger2",
   "Opal_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Opal_CallPlayer1",
   "Opal_Sorrow1",
   "Opal_Hmm2",
   "Opal_TickleStart1"
  ],
  "greetVoice": [
   "Opal_Greeting",
   "Opal_Lobby",
   "Opal_Spawn1",
   "Opal_Joy1",
   "Opal_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Sad_10",
     "Serious_1",
     "Serious_2",
     "Serious_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Shy_1",
     "Shy_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Opal_Joy",
   "Proud_": "Opal_Pleasure",
   "Angry_": "Opal_Anger",
   "Sad_": "Opal_Sorrow",
   "Surprise_": "Opal_Surprise"
  }
 },
 {
  "id": "Orr",
  "name": "欧尔",
  "en": "Orr",
  "desc": "精灵 · 3 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Orr/phone-avatar.png",
   "present": "assets/art/Orr/present.png",
   "album": "assets/art/Orr/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Orr",
    "dir": "assets/spine/Orr",
    "name": "默认",
    "desc": "基础外观（50 动作）",
    "voiceSkin": ""
   },
   {
    "id": "OrrSkin1",
    "dir": "assets/spine/OrrSkin1",
    "name": "农场兼职生",
    "desc": "为了赚取必要的材料费，在农场兼职。到处乱…（50 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "OrrSkin2",
    "dir": "assets/spine/OrrSkin2",
    "name": "次元开发研究员",
    "desc": "做出过一大堆新奇发明的欧尔。 这次，她开…（50 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_AC"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Orr_Touch1",
     "Orr_Touch1_1",
     "Orr_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Orr_Touch2",
     "Orr_Touch2_1",
     "Orr_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Orr_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Orr_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Orr_TickleStart1"
    ],
    "voiceMid": [
     "Orr_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Orr_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Orr_Surprise1",
   "Orr_Hmm1",
   "Orr_Yes1",
   "Orr_Touch1"
  ],
  "upsetVoice": [
   "Orr_Anger1",
   "Orr_No1",
   "Orr_Anger2",
   "Orr_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Orr_CallPlayer1",
   "Orr_Sorrow1",
   "Orr_Hmm2",
   "Orr_TickleStart1"
  ],
  "greetVoice": [
   "Orr_Greeting",
   "Orr_Lobby",
   "Orr_Spawn1",
   "Orr_Joy1",
   "Orr_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Recorder_1",
     "Recorder_2",
     "Recorder_3",
     "Shy_1",
     "Shy_2",
     "Sweat_1",
     "Sweat_2",
     "Work_1",
     "Work_2",
     "Work_3",
     "Work_4",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Orr_Joy",
   "Proud_": "Orr_Pleasure",
   "Angry_": "Orr_Anger",
   "Sad_": "Orr_Sorrow",
   "Surprise_": "Orr_Surprise"
  }
 },
 {
  "id": "Patula",
  "name": "帕特拉",
  "en": "Patula",
  "desc": "妖精 · 1 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Patula/phone-avatar.png",
   "present": "assets/art/Patula/present.png",
   "album": "assets/art/Patula/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Patula",
    "dir": "assets/spine/Patula",
    "name": "默认",
    "desc": "基础外观（44 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Back"
   ],
   "headTop": [
    "Hair_Front_M_L",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_Root"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Back"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_Root"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1",
    "Proud_2"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Patula_Touch1",
     "Patula_Touch1_1",
     "Patula_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Patula_Touch2",
     "Patula_Touch2_1",
     "Patula_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Patula_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Patula_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Patula_TickleStart1"
    ],
    "voiceMid": [
     "Patula_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Patula_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Patula_Surprise1",
   "Patula_Hmm1",
   "Patula_Yes1",
   "Patula_Touch1"
  ],
  "upsetVoice": [
   "Patula_Anger1",
   "Patula_No1",
   "Patula_Anger2",
   "Patula_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Patula_CallPlayer1",
   "Patula_Sorrow1",
   "Patula_Hmm2",
   "Patula_TickleStart1"
  ],
  "greetVoice": [
   "Patula_Greeting",
   "Patula_Lobby",
   "Patula_Spawn1",
   "Patula_Joy1",
   "Patula_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Proud_1",
     "Proud_2",
     "Proud_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Shy_1",
     "Shy_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Patula_Joy",
   "Proud_": "Patula_Pleasure",
   "Angry_": "Patula_Anger",
   "Sad_": "Patula_Sorrow",
   "Surprise_": "Patula_Surprise"
  }
 },
 {
  "id": "Picora",
  "name": "皮可拉",
  "en": "Picora",
  "desc": "魔女 · 4 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Picora/phone-avatar.png",
   "present": "assets/art/Picora/present.png",
   "album": "assets/art/Picora/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Picora",
    "dir": "assets/spine/Picora",
    "name": "默认",
    "desc": "基础外观（53 动作）",
    "voiceSkin": ""
   },
   {
    "id": "PicoraSkin1",
    "dir": "assets/spine/PicoraSkin1",
    "name": "闪耀星光魔女",
    "desc": "皮可拉为成为真正魔女准备的衣服。和她的星…（53 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "PicoraSkin2",
    "dir": "assets/spine/PicoraSkin2",
    "name": "天才才女魔女",
    "desc": "像是模仿贝利蒂恩天才幼儿园风格的皮可拉。…（53 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "PicoraSkin3",
    "dir": "assets/spine/PicoraSkin3",
    "name": "闪烁甜美丝带",
    "desc": "穿上自己想要的可爱服装参加派对的皮可拉。…（53 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Bag_Body"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Bag_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Picora_Touch1",
     "Picora_Touch1_1",
     "Picora_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Picora_Touch2",
     "Picora_Touch2_1",
     "Picora_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Picora_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Picora_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Picora_TickleStart1"
    ],
    "voiceMid": [
     "Picora_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Picora_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Picora_Surprise1",
   "Picora_Hmm1",
   "Picora_Yes1",
   "Picora_Touch1"
  ],
  "upsetVoice": [
   "Picora_Anger1",
   "Picora_No1",
   "Picora_Anger2",
   "Picora_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Picora_CallPlayer1",
   "Picora_Sorrow1",
   "Picora_Hmm2",
   "Picora_TickleStart1"
  ],
  "greetVoice": [
   "Picora_Greeting",
   "Picora_Lobby",
   "Picora_Spawn1",
   "Picora_Joy1",
   "Picora_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Dance_1",
     "Laugh_1",
     "Laugh_2",
     "Melong_1",
     "Melong_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Think_1",
     "V_1",
     "V_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Picora_Joy",
   "Proud_": "Picora_Pleasure",
   "Angry_": "Picora_Anger",
   "Sad_": "Picora_Sorrow",
   "Surprise_": "Picora_Surprise"
  }
 },
 {
  "id": "Pira",
  "name": "皮拉",
  "en": "Pira",
  "desc": "龙族 · 3 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Pira/phone-avatar.png",
   "present": "assets/art/Pira/present.png",
   "album": "assets/art/Pira/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Pira",
    "dir": "assets/spine/Pira",
    "name": "默认",
    "desc": "基础外观（45 动作）",
    "voiceSkin": ""
   },
   {
    "id": "PiraSkin1",
    "dir": "assets/spine/PiraSkin1",
    "name": "舞蹈团闪耀者",
    "desc": "跟朋友一起跳舞的皮拉形象。为了精彩的舞蹈…（45 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "PiraSkin2",
    "dir": "assets/spine/PiraSkin2",
    "name": "嚼过口香糖的龙族",
    "desc": "比起教室里，在校外更容易遇到皮拉。每天偷…（45 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head2"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face_RCT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_L",
    "Earring_Root"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head2"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Happy_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Pira_Touch1",
     "Pira_Touch1_1",
     "Pira_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Pira_Touch2",
     "Pira_Touch2_1",
     "Pira_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Pira_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Pira_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Pira_TickleStart1"
    ],
    "voiceMid": [
     "Pira_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Pira_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Pira_Surprise1",
   "Pira_Hmm1",
   "Pira_Yes1",
   "Pira_Touch1"
  ],
  "upsetVoice": [
   "Pira_Anger1",
   "Pira_No1",
   "Pira_Anger2",
   "Pira_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Pira_CallPlayer1",
   "Pira_Sorrow1",
   "Pira_Hmm2",
   "Pira_TickleStart1"
  ],
  "greetVoice": [
   "Pira_Greeting",
   "Pira_Lobby",
   "Pira_Spawn1",
   "Pira_Joy1",
   "Pira_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Serious_1",
     "Serious_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Money_1",
     "Shy_1",
     "Shy_2",
     "Sorry_1",
     "Sulky_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Pira_Joy",
   "Proud_": "Pira_Pleasure",
   "Angry_": "Pira_Anger",
   "Sad_": "Pira_Sorrow",
   "Surprise_": "Pira_Surprise"
  }
 },
 {
  "id": "Polan",
  "name": "破朗",
  "en": "Polan",
  "desc": "妖精 · 4 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Polan/phone-avatar.png",
   "present": "assets/art/Polan/present.png",
   "album": "assets/art/Polan/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Polan",
    "dir": "assets/spine/Polan",
    "name": "默认",
    "desc": "基础外观（62 动作）",
    "voiceSkin": ""
   },
   {
    "id": "PolanSkin1",
    "dir": "assets/spine/PolanSkin1",
    "name": "外出打扮",
    "desc": "为外出精心打扮的破朗。看到自己的装扮觉得…（62 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "PolanSkin2",
    "dir": "assets/spine/PolanSkin2",
    "name": "胜利为您",
    "desc": "埃尔皮恩传统长矛比赛中破朗的服装。据说众…（62 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "PolanSkin3",
    "dir": "assets/spine/PolanSkin3",
    "name": "苍空的操作员",
    "desc": "成为负责面包舟安全的空乘破朗。为了守护所…（62 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_Ac"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Polan_Touch1",
     "Polan_Touch1_1",
     "Polan_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Polan_Touch2",
     "Polan_Touch2_1",
     "Polan_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Polan_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Polan_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Polan_TickleStart1"
    ],
    "voiceMid": [
     "Polan_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Polan_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Polan_Surprise1",
   "Polan_Hmm1",
   "Polan_Yes1",
   "Polan_Touch1"
  ],
  "upsetVoice": [
   "Polan_Anger1",
   "Polan_No1",
   "Polan_Anger2",
   "Polan_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Polan_CallPlayer1",
   "Polan_Sorrow1",
   "Polan_Hmm2",
   "Polan_TickleStart1"
  ],
  "greetVoice": [
   "Polan_Greeting",
   "Polan_Lobby",
   "Polan_Spawn1",
   "Polan_Joy1",
   "Polan_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Eat_4",
     "Eat_5",
     "Eat_6",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Salute_1",
     "Salute_2",
     "Salute_3",
     "Salute_4",
     "Salute_5",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Speak_1",
     "Speak_2",
     "Speak_3",
     "Succession_1",
     "Succession_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Polan_Joy",
   "Proud_": "Polan_Pleasure",
   "Angry_": "Polan_Anger",
   "Sad_": "Polan_Sorrow",
   "Surprise_": "Polan_Surprise"
  }
 },
 {
  "id": "Posher",
  "name": "珀榭",
  "en": "Posher",
  "desc": "魔女 · 5 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Posher/phone-avatar.png",
   "present": "assets/art/Posher/present.png",
   "album": "assets/art/Posher/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Posher",
    "dir": "assets/spine/Posher",
    "name": "默认",
    "desc": "基础外观（37 动作）",
    "voiceSkin": ""
   },
   {
    "id": "PosherSkin1",
    "dir": "assets/spine/PosherSkin1",
    "name": "药水店的休息日",
    "desc": "久违地迎来店铺休息日，在家悠闲休息的珀榭…（37 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "PosherSkin2",
    "dir": "assets/spine/PosherSkin2",
    "name": "放学后的乐队活动",
    "desc": "暂时放下繁忙店务，为了演出而去练习吉他的…（37 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "PosherSkin3",
    "dir": "assets/spine/PosherSkin3",
    "name": "妙药实验室研究员",
    "desc": "珀榭为了以专业形象带来信赖感而准备的服装…（37 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "PosherSkin4",
    "dir": "assets/spine/PosherSkin4",
    "name": "恐怖护士",
    "desc": "珀榭受邀扮演在黑暗组织主导临床实验的护士…（37 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "S1_Head",
    "S1_Head_Back_Root"
   ],
   "headTop": [
    "S1_Hair_9_0",
    "S1_Head"
   ],
   "face": [],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head",
    "S1_Head_Back_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Posher_Touch1",
     "Posher_Touch1_1",
     "Posher_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Posher_Touch2",
     "Posher_Touch2_1",
     "Posher_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Posher_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Posher_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Posher_TickleStart1"
    ],
    "voiceMid": [
     "Posher_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Posher_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Posher_Surprise1",
   "Posher_Hmm1",
   "Posher_Yes1",
   "Posher_Touch1"
  ],
  "upsetVoice": [
   "Posher_Anger1",
   "Posher_No1",
   "Posher_Anger2",
   "Posher_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Posher_CallPlayer1",
   "Posher_Sorrow1",
   "Posher_Hmm2",
   "Posher_TickleStart1"
  ],
  "greetVoice": [
   "Posher_Greeting",
   "Posher_Lobby",
   "Posher_Spawn1",
   "Posher_Joy1",
   "Posher_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Shy_1",
     "Shy_2",
     "Sorry_1",
     "Sorry_2",
     "Sulky_1",
     "Sulky_2",
     "Thinking_1",
     "Thinking_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Posher_Joy",
   "Proud_": "Posher_Pleasure",
   "Angry_": "Posher_Anger",
   "Sad_": "Posher_Sorrow",
   "Surprise_": "Posher_Surprise"
  }
 },
 {
  "id": "Ran",
  "name": "兰",
  "en": "Ran",
  "desc": "兽人 · 4 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Ran/phone-avatar.png",
   "present": "assets/art/Ran/present.png",
   "album": "assets/art/Ran/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Ran",
    "dir": "assets/spine/Ran",
    "name": "默认",
    "desc": "基础外观（60 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RanSkin1",
    "dir": "assets/spine/RanSkin1",
    "name": "女仆中的女仆",
    "desc": "监狱也是教团的一部分，可丽饼对清洁的管理…（60 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RanSkin2",
    "dir": "assets/spine/RanSkin2",
    "name": "教团行动队长",
    "desc": "如果兰真正开始行动起来，或许就会以这副模…（60 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "RanSkin3",
    "dir": "assets/spine/RanSkin3",
    "name": "白蛇堂的巫女",
    "desc": "曾经扰乱世界的狼。如今她正反省自己的过错…（60 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_R_F_Root"
   ],
   "earR": [
    "Ear_R_F_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Ran_Touch1",
     "Ran_Touch1_1",
     "Ran_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Ran_Touch2",
     "Ran_Touch2_1",
     "Ran_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Ran_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Ran_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Ran_TickleStart1"
    ],
    "voiceMid": [
     "Ran_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Ran_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Ran_Surprise1",
   "Ran_Hmm1",
   "Ran_Yes1",
   "Ran_Touch1"
  ],
  "upsetVoice": [
   "Ran_Anger1",
   "Ran_No1",
   "Ran_Anger2",
   "Ran_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Ran_CallPlayer1",
   "Ran_Sorrow1",
   "Ran_Hmm2",
   "Ran_TickleStart1"
  ],
  "greetVoice": [
   "Ran_Greeting",
   "Ran_Lobby",
   "Ran_Spawn1",
   "Ran_Joy1",
   "Ran_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Close_3",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Baldo_1",
     "Baldo_2",
     "Baldo_3",
     "Baldo_4",
     "Baldo_5",
     "Baldo_6",
     "Baldo_7",
     "Baldo_8",
     "Baldo_9",
     "Baldo_10",
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Sulky_4",
     "Sulky_5",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Ran_Joy",
   "Proud_": "Ran_Pleasure",
   "Angry_": "Ran_Anger",
   "Sad_": "Ran_Sorrow",
   "Surprise_": "Ran_Surprise"
  }
 },
 {
  "id": "Renewa",
  "name": "莉纽阿",
  "en": "Renewa",
  "desc": "精灵 · 2 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/RenewaAwaken/phone-avatar.png",
   "present": "assets/art/RenewaAwaken/present.png",
   "album": "assets/art/RenewaAwaken/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Renewa",
    "dir": "assets/spine/Renewa",
    "name": "默认",
    "desc": "基础外观（56 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face",
    "Arm_R_IK_to_Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Renewa_Touch1",
     "Renewa_Touch1_1",
     "Renewa_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Renewa_Touch2",
     "Renewa_Touch2_1",
     "Renewa_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Renewa_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Renewa_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Renewa_TickleStart1"
    ],
    "voiceMid": [
     "Renewa_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": []
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Renewa_Touch1"
  ],
  "upsetVoice": [
   "Renewa_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Renewa_TickleStart1"
  ],
  "greetVoice": [
   "Renewa_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Groggy_1",
     "Groggy_2",
     "Hi_1",
     "Shy_1",
     "Shy_2",
     "Sulky_1",
     "Sulky_2",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Talk_4",
     "Tired_1",
     "Tired_2",
     "Tired_3",
     "Act1_1",
     "Act2_1",
     "Act3_1",
     "Angry1_1",
     "Eat1_1",
     "Idle",
     "Move",
     "Play1_1",
     "Sleep1_1",
     "Spawn",
     "Swim1_1"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {}
 },
 {
  "id": "RenewaAwaken",
  "name": "莉纽阿",
  "en": "RenewaAwaken",
  "desc": "精灵 · 3 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/RenewaAwaken/phone-avatar.png",
   "present": "assets/art/RenewaAwaken/present.png",
   "album": "assets/art/RenewaAwaken/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "RenewaAwaken",
    "dir": "assets/spine/RenewaAwaken",
    "name": "默认",
    "desc": "基础外观（54 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RenewaAwakenSkin1",
    "dir": "assets/spine/RenewaAwakenSkin1",
    "name": "女神降临",
    "desc": "莉纽阿穿上华丽礼服的样子。跨越无数时间降…（54 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RenewaAwakenSkin2",
    "dir": "assets/spine/RenewaAwakenSkin2",
    "name": "悠闲时光",
    "desc": "为剧场休闲出行穿上最新日常装的莉纽阿。小…（54 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Metal_Head_Root"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Metal_Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "RenewaAwaken_Touch1",
     "RenewaAwaken_Touch1_1",
     "RenewaAwaken_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "RenewaAwaken_Touch2",
     "RenewaAwaken_Touch2_1",
     "RenewaAwaken_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "RenewaAwaken_DutchRubEnd1"
    ],
    "voiceEnd": [
     "RenewaAwaken_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "RenewaAwaken_TickleStart1"
    ],
    "voiceMid": [
     "RenewaAwaken_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "RenewaAwaken_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "RenewaAwaken_Surprise1",
   "RenewaAwaken_Hmm1",
   "RenewaAwaken_Yes1",
   "RenewaAwaken_Touch1"
  ],
  "upsetVoice": [
   "RenewaAwaken_Anger1",
   "RenewaAwaken_No1",
   "RenewaAwaken_Anger2",
   "RenewaAwaken_DutchRubEnd1"
  ],
  "hungryVoice": [
   "RenewaAwaken_CallPlayer1",
   "RenewaAwaken_Sorrow1",
   "RenewaAwaken_Hmm2",
   "RenewaAwaken_TickleStart1"
  ],
  "greetVoice": [
   "RenewaAwaken_Greeting",
   "RenewaAwaken_Lobby",
   "RenewaAwaken_Spawn1",
   "RenewaAwaken_Joy1",
   "RenewaAwaken_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Groggy_1",
     "Groggy_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Smile_1",
     "Sulky_1",
     "Sulky_2",
     "Talk_1",
     "Talk_2",
     "Tired_1",
     "Tired_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "RenewaAwaken_Joy",
   "Proud_": "RenewaAwaken_Pleasure",
   "Angry_": "RenewaAwaken_Anger",
   "Sad_": "RenewaAwaken_Sorrow",
   "Surprise_": "RenewaAwaken_Surprise"
  }
 },
 {
  "id": "Ricota",
  "name": "里科塔",
  "en": "Ricota",
  "desc": "妖精 · 3 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Ricota/phone-avatar.png",
   "present": "assets/art/Ricota/present.png",
   "album": "assets/art/Ricota/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Ricota",
    "dir": "assets/spine/Ricota",
    "name": "默认",
    "desc": "基础外观（56 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RicotaSkin1",
    "dir": "assets/spine/RicotaSkin1",
    "name": "社交界的反派千金",
    "desc": "今天挑战社交界的晚宴料理的里科塔。看样子…（56 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RicotaSkin2",
    "dir": "assets/spine/RicotaSkin2",
    "name": "机餐准备完毕",
    "desc": "里科塔成为了负责教主机上膳食的乘务员。她…（56 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face_Con"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_1"
   ],
   "cheekR": [
    "Ball_R_1"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_1"
   ],
   "ballMoveP": [
    "Ball_R_1"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Ricota_Touch1",
     "Ricota_Touch1_1",
     "Ricota_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Ricota_Touch2",
     "Ricota_Touch2_1",
     "Ricota_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Ricota_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Ricota_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Ricota_TickleStart1"
    ],
    "voiceMid": [
     "Ricota_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Ricota_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Ricota_Surprise1",
   "Ricota_Hmm1",
   "Ricota_Yes1",
   "Ricota_Touch1"
  ],
  "upsetVoice": [
   "Ricota_Anger1",
   "Ricota_No1",
   "Ricota_Anger2",
   "Ricota_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Ricota_CallPlayer1",
   "Ricota_Sorrow1",
   "Ricota_Hmm2",
   "Ricota_TickleStart1"
  ],
  "greetVoice": [
   "Ricota_Greeting",
   "Ricota_Lobby",
   "Ricota_Spawn1",
   "Ricota_Joy1",
   "Ricota_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Happy_11",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Clap_1",
     "Clap_2",
     "Clap_3",
     "Clap_4",
     "Cook_1",
     "Cook_2",
     "Cook_3",
     "Cook_4",
     "Cook_5",
     "Shy_1",
     "Shy_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Ricota_Joy",
   "Proud_": "Ricota_Pleasure",
   "Angry_": "Ricota_Anger",
   "Sad_": "Ricota_Sorrow",
   "Surprise_": "Ricota_Surprise"
  }
 },
 {
  "id": "Rim",
  "name": "琳",
  "en": "Rim",
  "desc": "幽灵 · 4 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Rim/phone-avatar.png",
   "present": "assets/art/Rim/present.png",
   "album": "assets/art/Rim/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Rim",
    "dir": "assets/spine/Rim",
    "name": "默认",
    "desc": "基础外观（41 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RimSkin1",
    "dir": "assets/spine/RimSkin1",
    "name": "长曲棍球 琳球",
    "desc": "和幽灵沼泽外交的朋友们在莫纳蒂乌姆公园玩…（41 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RimSkin2",
    "dir": "assets/spine/RimSkin2",
    "name": "沉稳的派对主持人",
    "desc": "在自己筹办并主持的喜剧社团派对现场，琳正…（41 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "RimSkin3",
    "dir": "assets/spine/RimSkin3",
    "name": "和我一起郊游",
    "desc": "为了与教主郊游而打扮的琳。怀里的泰迪熊很…（41 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "S3_Head"
   ],
   "headTop": [
    "S3_Hair_Root"
   ],
   "face": [
    "S3_Face"
   ],
   "mouth": [
    "S3_F_Mouth"
   ],
   "cheekL": [
    "S3_F_Ball_L_Root"
   ],
   "cheekR": [
    "S3_F_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S3_F_Ball_Root"
   ],
   "ballMoveP": [
    "S3_F_Ball_R_Root",
    "S3_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S3_Head"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Rim_Touch1",
     "Rim_Touch1_1",
     "Rim_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Rim_Touch2",
     "Rim_Touch2_1",
     "Rim_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Rim_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Rim_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Rim_TickleStart1"
    ],
    "voiceMid": [
     "Rim_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Rim_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Rim_Surprise1",
   "Rim_Hmm1",
   "Rim_Yes1",
   "Rim_Touch1"
  ],
  "upsetVoice": [
   "Rim_Anger1",
   "Rim_No1",
   "Rim_Anger2",
   "Rim_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Rim_CallPlayer1",
   "Rim_Sorrow1",
   "Rim_Hmm2",
   "Rim_TickleStart1"
  ],
  "greetVoice": [
   "Rim_Greeting",
   "Rim_Lobby",
   "Rim_Spawn1",
   "Rim_Joy1",
   "Rim_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Serious_1",
     "Serious_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Shy_1",
     "Shy_2",
     "Smile_1",
     "Sulky_1",
     "Sulky_2",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Talk_4",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Rim_Joy",
   "Proud_": "Rim_Pleasure",
   "Angry_": "Rim_Anger",
   "Sad_": "Rim_Sorrow",
   "Surprise_": "Rim_Surprise"
  }
 },
 {
  "id": "RimChaos",
  "name": "混沌琳",
  "en": "RimChaos",
  "desc": "幽灵 · 5 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/RimChaos/phone-avatar.png",
   "present": "assets/art/RimChaos/present.png",
   "album": "assets/art/RimChaos/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "RimChaos",
    "dir": "assets/spine/RimChaos",
    "name": "默认",
    "desc": "基础外观（55 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RimChaosSkin1",
    "dir": "assets/spine/RimChaosSkin1",
    "name": "混沌围裙",
    "desc": "混沌围裙（54 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RimChaosSkin2",
    "dir": "assets/spine/RimChaosSkin2",
    "name": "夜市袭击者",
    "desc": "夜市袭击者（54 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "RimChaosSkin3",
    "dir": "assets/spine/RimChaosSkin3",
    "name": "宴会楼混沌夫人",
    "desc": "宴会楼混沌夫人（54 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "RimChaosSkin4",
    "dir": "assets/spine/RimChaosSkin4",
    "name": "幽灵沼泽人气王",
    "desc": "幽灵沼泽人气王（54 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Ribbon_1_1"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck"
   ],
   "tail": [],
   "earL": [
    "Ear_Ring"
   ],
   "earR": [
    "Ear_Ring"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Ribbon_1_1"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "RimChaos_Touch1",
     "RimChaos_Touch1_1",
     "RimChaos_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "RimChaos_Touch2",
     "RimChaos_Touch2_1",
     "RimChaos_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "RimChaos_DutchRubEnd1"
    ],
    "voiceEnd": [
     "RimChaos_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "RimChaos_TickleStart1"
    ],
    "voiceMid": [
     "RimChaos_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "RimChaos_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "RimChaos_Surprise1",
   "RimChaos_Hmm1",
   "RimChaos_Yes1",
   "RimChaos_Touch1"
  ],
  "upsetVoice": [
   "RimChaos_Anger1",
   "RimChaos_No1",
   "RimChaos_Anger2",
   "RimChaos_DutchRubEnd1"
  ],
  "hungryVoice": [
   "RimChaos_CallPlayer1",
   "RimChaos_Sorrow1",
   "RimChaos_Hmm2",
   "RimChaos_TickleStart1"
  ],
  "greetVoice": [
   "RimChaos_Greeting",
   "RimChaos_Lobby",
   "RimChaos_Spawn1",
   "RimChaos_Joy1",
   "RimChaos_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Groggy_1",
     "Groggy_2",
     "Groggy_3",
     "Heart_1",
     "Heart_2",
     "Heart_3",
     "Joke_1",
     "Joke_2",
     "Joke_3",
     "Laugh_1",
     "Laugh_2",
     "Laugh_3",
     "Laugh_4",
     "Laugh_5",
     "Mad_1",
     "Mad_2",
     "Mad_3",
     "Mad_4",
     "Mad_5",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sorry_1",
     "Sorry_2",
     "TIckle",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "RimChaos_Joy",
   "Proud_": "RimChaos_Pleasure",
   "Angry_": "RimChaos_Anger",
   "Sad_": "RimChaos_Sorrow",
   "Surprise_": "RimChaos_Surprise"
  }
 },
 {
  "id": "Risty",
  "name": "莉斯缇",
  "en": "Risty",
  "desc": "精灵 · 4 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Risty/phone-avatar.png",
   "present": "assets/art/Risty/present.png",
   "album": "assets/art/Risty/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Risty",
    "dir": "assets/spine/Risty",
    "name": "默认",
    "desc": "基础外观（49 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RistySkin1",
    "dir": "assets/spine/RistySkin1",
    "name": "可爱黑客兔",
    "desc": "可爱黑客兔（49 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RistySkin2",
    "dir": "assets/spine/RistySkin2",
    "name": "梦之国冒险家",
    "desc": "梦之国冒险家（49 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "RistySkin3",
    "dir": "assets/spine/RistySkin3",
    "name": "哦！我的会长",
    "desc": "哦！我的会长（49 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Doll_Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face",
    "Emo_Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Doll_Ear_L"
   ],
   "earR": [
    "Doll_Ear_R"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Doll_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Risty_Touch1",
     "Risty_Touch1_1",
     "Risty_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Risty_Touch2",
     "Risty_Touch2_1",
     "Risty_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Risty_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Risty_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Risty_TickleStart1"
    ],
    "voiceMid": [
     "Risty_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Risty_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Risty_Surprise1",
   "Risty_Hmm1",
   "Risty_Yes1",
   "Risty_Touch1"
  ],
  "upsetVoice": [
   "Risty_Anger1",
   "Risty_No1",
   "Risty_Anger2",
   "Risty_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Risty_CallPlayer1",
   "Risty_Sorrow1",
   "Risty_Hmm2",
   "Risty_TickleStart1"
  ],
  "greetVoice": [
   "Risty_Greeting",
   "Risty_Lobby",
   "Risty_Spawn1",
   "Risty_Joy1",
   "Risty_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Scouter_1",
     "Scouter_2",
     "Scouter_3",
     "Scouter_4",
     "Sulky_1",
     "Sulky_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Risty_Joy",
   "Proud_": "Risty_Pleasure",
   "Angry_": "Risty_Anger",
   "Sad_": "Risty_Sorrow",
   "Surprise_": "Risty_Surprise"
  }
 },
 {
  "id": "Rohne",
  "name": "洛涅",
  "en": "Rohne",
  "desc": "精灵 · 3 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Rohne/phone-avatar.png",
   "present": "assets/art/Rohne/present.png",
   "album": "assets/art/Rohne/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Rohne",
    "dir": "assets/spine/Rohne",
    "name": "默认",
    "desc": "基础外观（50 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RohneSkin1",
    "dir": "assets/spine/RohneSkin1",
    "name": "冬日间谍",
    "desc": "据说是弥补洛涅自认为不足的间谍元素“笨重…（50 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RohneSkin2",
    "dir": "assets/spine/RohneSkin2",
    "name": "莫纳蒂姆的情书",
    "desc": "不知吹了什么风，洛涅穿着暖和的衣服出现了…（50 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Hair_9_0",
    "S1_Head"
   ],
   "face": [
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_Ball_L",
    "S1_Ball_L_Root"
   ],
   "cheekR": [
    "S1_Ball_Root"
   ],
   "belly": [
    "S1_Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_Ball_Root"
   ],
   "ballMoveP": [
    "S1_Ball_R_Root",
    "S1_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2",
    "Taunt_3",
    "Taunt_4"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Rohne_Touch1",
     "Rohne_Touch1_1",
     "Rohne_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Rohne_Touch2",
     "Rohne_Touch2_1",
     "Rohne_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Rohne_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Rohne_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Rohne_TickleStart1"
    ],
    "voiceMid": [
     "Rohne_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Rohne_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Rohne_Surprise1",
   "Rohne_Hmm1",
   "Rohne_Yes1",
   "Rohne_Touch1"
  ],
  "upsetVoice": [
   "Rohne_Anger1",
   "Rohne_No1",
   "Rohne_Anger2",
   "Rohne_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Rohne_CallPlayer1",
   "Rohne_Sorrow1",
   "Rohne_Hmm2",
   "Rohne_TickleStart1"
  ],
  "greetVoice": [
   "Rohne_Greeting",
   "Rohne_Lobby",
   "Rohne_Spawn1",
   "Rohne_Joy1",
   "Rohne_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Taunt_1",
     "Taunt_2",
     "Taunt_3",
     "Taunt_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Call_1",
     "Call_2",
     "Call_3",
     "Call_4",
     "Call_5",
     "Lying_1",
     "Lying_2",
     "Lying_3",
     "Lying_4",
     "Lying_5",
     "Shame_1",
     "Tired_1",
     "Urcharyu_1",
     "Urcharyu_2",
     "Urcharyu_3",
     "Urcharyu_4"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Rohne_Joy",
   "Proud_": "Rohne_Pleasure",
   "Angry_": "Rohne_Anger",
   "Sad_": "Rohne_Sorrow",
   "Surprise_": "Rohne_Surprise"
  }
 },
 {
  "id": "RohneMayor",
  "name": "洛涅（市长）",
  "en": "RohneMayor",
  "desc": "精灵 · 3 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/RohneMayor/phone-avatar.png",
   "present": "assets/art/RohneMayor/present.png",
   "album": "assets/art/RohneMayor/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "RohneMayor",
    "dir": "assets/spine/RohneMayor",
    "name": "默认",
    "desc": "基础外观（63 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RohneMayorSkin1",
    "dir": "assets/spine/RohneMayorSkin1",
    "name": "偶像对决！市长",
    "desc": "为了不被舞蹈刺客击败，洛涅(市长)努力进…（63 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RohneMayorSkin2",
    "dir": "assets/spine/RohneMayorSkin2",
    "name": "莫纳蒂姆选美冠军",
    "desc": "与埃蕾娜一起参加的市长美貌竞赛！不知怎的…（63 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face",
    "Drop_Face"
   ],
   "mouth": [
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Ear"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2",
    "Taunt_3",
    "Taunt_4"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "RohneMayor_Touch1",
     "RohneMayor_Touch1_1",
     "RohneMayor_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "RohneMayor_Touch2",
     "RohneMayor_Touch2_1",
     "RohneMayor_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "RohneMayor_DutchRubEnd1"
    ],
    "voiceEnd": [
     "RohneMayor_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "RohneMayor_TickleStart1"
    ],
    "voiceMid": [
     "RohneMayor_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "RohneMayor_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "RohneMayor_Surprise1",
   "RohneMayor_Hmm1",
   "RohneMayor_Yes1",
   "RohneMayor_Touch1"
  ],
  "upsetVoice": [
   "RohneMayor_Anger1",
   "RohneMayor_No1",
   "RohneMayor_Anger2",
   "RohneMayor_DutchRubEnd1"
  ],
  "hungryVoice": [
   "RohneMayor_CallPlayer1",
   "RohneMayor_Sorrow1",
   "RohneMayor_Hmm2",
   "RohneMayor_TickleStart1"
  ],
  "greetVoice": [
   "RohneMayor_Greeting",
   "RohneMayor_Lobby",
   "RohneMayor_Spawn1",
   "RohneMayor_Joy1",
   "RohneMayor_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Taunt_1",
     "Taunt_2",
     "Taunt_3",
     "Taunt_4",
     "Taunt_5"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Lying_1",
     "Lying_2",
     "Lying_3",
     "Shame_1",
     "Shame_2",
     "Shame_3",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Talk_4",
     "Talk_5",
     "Tired_1",
     "Tired_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "RohneMayor_Joy",
   "Proud_": "RohneMayor_Pleasure",
   "Angry_": "RohneMayor_Anger",
   "Sad_": "RohneMayor_Sorrow",
   "Surprise_": "RohneMayor_Surprise"
  }
 },
 {
  "id": "Rollett",
  "name": "罗莱特",
  "en": "Rollett",
  "desc": "魔女 · 4 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Rollett/phone-avatar.png",
   "present": "assets/art/Rollett/present.png",
   "album": "assets/art/Rollett/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Rollett",
    "dir": "assets/spine/Rollett",
    "name": "默认",
    "desc": "基础外观（48 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RollettSkin1",
    "dir": "assets/spine/RollettSkin1",
    "name": "欢乐假期",
    "desc": "罗莱特假期中也在策划有趣的计划。今天感觉…（48 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RollettSkin2",
    "dir": "assets/spine/RollettSkin2",
    "name": "蓬蓬的组长",
    "desc": "蓬蓬的组长（48 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "RollettSkin3",
    "dir": "assets/spine/RollettSkin3",
    "name": "远程服务",
    "desc": "负责护卫教主的战斗女仆分队狙击手——罗莱…（48 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Bidul_Head"
   ],
   "headTop": [
    "Head",
    "Hair_Root"
   ],
   "face": [
    "Face_V_UCT",
    "FX_Face"
   ],
   "mouth": [
    "Mouth_1",
    "Bidul_Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Bidul_Body"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Earing_L_0"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Bidul_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Bidul_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Rollett_Touch1",
     "Rollett_Touch1_1",
     "Rollett_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Rollett_Touch2",
     "Rollett_Touch2_1",
     "Rollett_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Rollett_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Rollett_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Rollett_TickleStart1"
    ],
    "voiceMid": [
     "Rollett_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Rollett_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Rollett_Surprise1",
   "Rollett_Hmm1",
   "Rollett_Yes1",
   "Rollett_Touch1"
  ],
  "upsetVoice": [
   "Rollett_Anger1",
   "Rollett_No1",
   "Rollett_Anger2",
   "Rollett_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Rollett_CallPlayer1",
   "Rollett_Sorrow1",
   "Rollett_Hmm2",
   "Rollett_TickleStart1"
  ],
  "greetVoice": [
   "Rollett_Greeting",
   "Rollett_Lobby",
   "Rollett_Spawn1",
   "Rollett_Joy1",
   "Rollett_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Thinking_1",
     "Thinking_2",
     "Thinking_3",
     "Thinking_4",
     "Thinking_5",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Rollett_Joy",
   "Proud_": "Rollett_Pleasure",
   "Angry_": "Rollett_Anger",
   "Sad_": "Rollett_Sorrow",
   "Surprise_": "Rollett_Surprise"
  }
 },
 {
  "id": "Ronnie",
  "name": "罗尼",
  "en": "Ronnie",
  "desc": "妖精 · 2 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Ronnie/phone-avatar.png",
   "present": "assets/art/Ronnie/present.png",
   "album": "assets/art/Ronnie/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Ronnie",
    "dir": "assets/spine/Ronnie",
    "name": "默认",
    "desc": "基础外观（70 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RonnieSkin1",
    "dir": "assets/spine/RonnieSkin1",
    "name": "夕阳西下之时",
    "desc": "夕阳西下之时，罗尼悠然眺望远方的模样。（70 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Emo"
   ],
   "headTop": [
    "Hair_F_root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_root"
   ],
   "cheekR": [
    "Ball_R_CT"
   ],
   "belly": [
    "Body",
    "Pelvis"
   ],
   "neck": [
    "Neck_AC_1_root"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_CT"
   ],
   "ballMoveP": [
    "Ball_root",
    "Ball_R_CT"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Emo"
   ],
   "tickle": [
    "Character_Tickle",
    "Body",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Ronnie_Touch1",
     "Ronnie_Touch1_1",
     "Ronnie_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Ronnie_Touch2",
     "Ronnie_Touch2_1",
     "Ronnie_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Ronnie_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Ronnie_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Ronnie_TickleStart1"
    ],
    "voiceMid": [
     "Ronnie_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Ronnie_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Ronnie_Surprise1",
   "Ronnie_Hmm1",
   "Ronnie_Yes1",
   "Ronnie_Touch1"
  ],
  "upsetVoice": [
   "Ronnie_Anger1",
   "Ronnie_No1",
   "Ronnie_Anger2",
   "Ronnie_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Ronnie_CallPlayer1",
   "Ronnie_Sorrow1",
   "Ronnie_Hmm2",
   "Ronnie_TickleStart1"
  ],
  "greetVoice": [
   "Ronnie_Greeting",
   "Ronnie_Lobby",
   "Ronnie_Spawn1",
   "Ronnie_Joy1",
   "Ronnie_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Close_1",
     "Close_2",
     "Close_3",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Serious_5",
     "Serious_6",
     "Serious_7",
     "Serious_8",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Attack_1",
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Fight_1",
     "Fight_2",
     "Fight_3",
     "Fight_4",
     "Recoder_1",
     "Recoder_2",
     "Shy_1",
     "Shy_2",
     "Sit_1",
     "Sit_2",
     "Sit_3",
     "Sit_4",
     "Tease_1",
     "Tease_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Ronnie_Joy",
   "Proud_": "Ronnie_Pleasure",
   "Angry_": "Ronnie_Anger",
   "Sad_": "Ronnie_Sorrow",
   "Surprise_": "Ronnie_Surprise"
  }
 },
 {
  "id": "Rude",
  "name": "鲁德",
  "en": "Rude",
  "desc": "龙族 · 2 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Rude/phone-avatar.png",
   "present": "assets/art/Rude/present.png",
   "album": "assets/art/Rude/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Rude",
    "dir": "assets/spine/Rude",
    "name": "默认",
    "desc": "基础外观（41 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RudeSkin1",
    "dir": "assets/spine/RudeSkin1",
    "name": "健康红",
    "desc": "为了完成今天的训练计划，鲁德做好了万全准…（41 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S3_Head_Root"
   ],
   "headTop": [
    "S3_Hair_6_0"
   ],
   "face": [],
   "mouth": [
    "S3_F_Mouth"
   ],
   "cheekL": [
    "S3_F_Ball_L_Root"
   ],
   "cheekR": [
    "S3_F_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [
    "S3_F_Ear_L_1"
   ],
   "earR": [
    "S3_F_Ear_R_1"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S3_F_Ball_Root"
   ],
   "ballMoveP": [
    "S3_F_Ball_R_Root",
    "S3_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S3_Head_Root"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Rude_Touch1",
     "Rude_Touch1_1",
     "Rude_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Rude_Touch2",
     "Rude_Touch2_1",
     "Rude_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Rude_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Rude_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Rude_TickleStart1"
    ],
    "voiceMid": [
     "Rude_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Rude_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Rude_Surprise1",
   "Rude_Hmm1",
   "Rude_Yes1",
   "Rude_Touch1"
  ],
  "upsetVoice": [
   "Rude_Anger1",
   "Rude_No1",
   "Rude_Anger2",
   "Rude_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Rude_CallPlayer1",
   "Rude_Sorrow1",
   "Rude_Hmm2",
   "Rude_TickleStart1"
  ],
  "greetVoice": [
   "Rude_Greeting",
   "Rude_Lobby",
   "Rude_Spawn1",
   "Rude_Joy1",
   "Rude_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Smile_1",
     "Smile_2",
     "Squat_1",
     "Strong_1",
     "Strong_2",
     "Strong_3",
     "Strong_4",
     "Strong_5",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Rude_Joy",
   "Proud_": "Rude_Pleasure",
   "Angry_": "Rude_Anger",
   "Sad_": "Rude_Sorrow",
   "Surprise_": "Rude_Surprise"
  }
 },
 {
  "id": "Rufo",
  "name": "卢波",
  "en": "Rufo",
  "desc": "兽人 · 3 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Rufo/phone-avatar.png",
   "present": "assets/art/Rufo/present.png",
   "album": "assets/art/Rufo/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Rufo",
    "dir": "assets/spine/Rufo",
    "name": "默认",
    "desc": "基础外观（35 动作）",
    "voiceSkin": ""
   },
   {
    "id": "RufoSkin1",
    "dir": "assets/spine/RufoSkin1",
    "name": "孤独的天才忍者",
    "desc": "卢波说，就算是饲料帮的智囊，有时也必须亲…（35 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "RufoSkin2",
    "dir": "assets/spine/RufoSkin2",
    "name": "欢呼与流动",
    "desc": "卢波提出了“欢呼重在节奏”的理念，主张在…（35 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "S1_Head"
   ],
   "headTop": [
    "S1_Head",
    "S1_Hair_F"
   ],
   "face": [
    "S1_F_Face_VCT",
    "S1_Face"
   ],
   "mouth": [
    "S1_F_Mouth"
   ],
   "cheekL": [
    "S1_F_Ball_L_Root"
   ],
   "cheekR": [
    "S1_F_Ball_Root"
   ],
   "belly": [
    "S1_Body_1"
   ],
   "neck": [
    "S1_Neck"
   ],
   "tail": [
    "S1_Tail_1"
   ],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S1_F_Ball_Root"
   ],
   "ballMoveP": [
    "S1_F_Ball_R_Root",
    "S1_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S1_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "S1_Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2",
    "Taunt_3"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Rufo_Touch1",
     "Rufo_Touch1_1",
     "Rufo_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Rufo_Touch2",
     "Rufo_Touch2_1",
     "Rufo_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Rufo_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Rufo_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Rufo_TickleStart1"
    ],
    "voiceMid": [
     "Rufo_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Rufo_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Rufo_Surprise1",
   "Rufo_Hmm1",
   "Rufo_Yes1",
   "Rufo_Touch1"
  ],
  "upsetVoice": [
   "Rufo_Anger1",
   "Rufo_No1",
   "Rufo_Anger2",
   "Rufo_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Rufo_CallPlayer1",
   "Rufo_Sorrow1",
   "Rufo_Hmm2",
   "Rufo_TickleStart1"
  ],
  "greetVoice": [
   "Rufo_Greeting",
   "Rufo_Lobby",
   "Rufo_Spawn1",
   "Rufo_Joy1",
   "Rufo_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4",
     "Taunt_1",
     "Taunt_2",
     "Taunt_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Notmyfault_1",
     "Notmyfault_2",
     "Aside_1",
     "Aside_2",
     "Idle_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Rufo_Joy",
   "Proud_": "Rufo_Pleasure",
   "Angry_": "Rufo_Anger",
   "Sad_": "Rufo_Sorrow",
   "Surprise_": "Rufo_Surprise"
  }
 },
 {
  "id": "Sari",
  "name": "莎里",
  "en": "Sari",
  "desc": "幽灵 · 1 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Sari/phone-avatar.png",
   "present": "assets/art/Sari/present.png",
   "album": "assets/art/Sari/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Sari",
    "dir": "assets/spine/Sari",
    "name": "默认",
    "desc": "基础外观（42 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face_Con"
   ],
   "mouth": [
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Sari_Touch1",
     "Sari_Touch1_1",
     "Sari_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Sari_Touch2",
     "Sari_Touch2_1",
     "Sari_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Sari_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Sari_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Sari_TickleStart1"
    ],
    "voiceMid": [
     "Sari_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Sari_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Sari_Surprise1",
   "Sari_Hmm1",
   "Sari_Yes1",
   "Sari_Touch1"
  ],
  "upsetVoice": [
   "Sari_Anger1",
   "Sari_No1",
   "Sari_Anger2",
   "Sari_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Sari_CallPlayer1",
   "Sari_Sorrow1",
   "Sari_Hmm2",
   "Sari_TickleStart1"
  ],
  "greetVoice": [
   "Sari_Greeting",
   "Sari_Lobby",
   "Sari_Spawn1",
   "Sari_Joy1",
   "Sari_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Panic_1",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Shy_1",
     "Shy_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Sari_Joy",
   "Proud_": "Sari_Pleasure",
   "Angry_": "Sari_Anger",
   "Sad_": "Sari_Sorrow",
   "Surprise_": "Sari_Surprise"
  }
 },
 {
  "id": "Scizor",
  "name": "凯撒",
  "en": "Scizor",
  "desc": "灵体 · 2 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Scizor/phone-avatar.png",
   "present": "assets/art/Scizor/present.png",
   "album": "assets/art/Scizor/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Scizor",
    "dir": "assets/spine/Scizor",
    "name": "默认",
    "desc": "基础外观（50 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ScizorSkin1",
    "dir": "assets/spine/ScizorSkin1",
    "name": "鳄鱼是阿格！阿格！",
    "desc": "呲啊！拿着鳄鱼玩偶扑过来的凯撒说要咬你。…（50 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [
    "Neck_Root",
    "Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Scizor_Touch1",
     "Scizor_Touch1_1",
     "Scizor_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Scizor_Touch2",
     "Scizor_Touch2_1",
     "Scizor_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Scizor_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Scizor_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Scizor_TickleStart1"
    ],
    "voiceMid": [
     "Scizor_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Scizor_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Scizor_Surprise1",
   "Scizor_Hmm1",
   "Scizor_Yes1",
   "Scizor_Touch1"
  ],
  "upsetVoice": [
   "Scizor_Anger1",
   "Scizor_No1",
   "Scizor_Anger2",
   "Scizor_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Scizor_CallPlayer1",
   "Scizor_Sorrow1",
   "Scizor_Hmm2",
   "Scizor_TickleStart1"
  ],
  "greetVoice": [
   "Scizor_Greeting",
   "Scizor_Lobby",
   "Scizor_Spawn1",
   "Scizor_Joy1",
   "Scizor_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Taunt_1",
     "Taunt_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Shy_1",
     "Shy_2",
     "Sijeo_1",
     "Sijeo_2",
     "Sijeo_3",
     "Villain_1",
     "Villain_2",
     "Villain_3",
     "Villain_4",
     "Villain_5",
     "Villain_6",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Scizor_Joy",
   "Proud_": "Scizor_Pleasure",
   "Angry_": "Scizor_Anger",
   "Sad_": "Scizor_Sorrow",
   "Surprise_": "Scizor_Surprise"
  }
 },
 {
  "id": "Selline",
  "name": "赛琳娜",
  "en": "Selline",
  "desc": "幽灵 · 5 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Selline/phone-avatar.png",
   "present": "assets/art/Selline/present.png",
   "album": "assets/art/Selline/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Selline",
    "dir": "assets/spine/Selline",
    "name": "默认",
    "desc": "基础外观（53 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SellineSkin1",
    "dir": "assets/spine/SellineSkin1",
    "name": "无尾狐的传说",
    "desc": "打扮成九尾狐的赛琳娜在艾利亚斯各地神出鬼…（53 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "SellineSkin2",
    "dir": "assets/spine/SellineSkin2",
    "name": "大胆的礼物",
    "desc": "在莫纳蒂姆暗网论坛看到匿名玩笑贴后，为了…（53 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "SellineSkin3",
    "dir": "assets/spine/SellineSkin3",
    "name": "今日的挑衅是兔子",
    "desc": "她说每次有人中她挑衅就要来一记“兔子拳”…（53 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "SellineSkin4",
    "dir": "assets/spine/SellineSkin4",
    "name": "高雅的伙伴",
    "desc": "赛琳娜邀请我作为派对搭档出席。看来她不仅…（53 动作）",
    "voiceSkin": "_Skin4"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Hair_Front_1",
    "Head"
   ],
   "face": [
    "Face_HCT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Selline_Touch1",
     "Selline_Touch1_1",
     "Selline_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Selline_Touch2",
     "Selline_Touch2_1",
     "Selline_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Selline_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Selline_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Selline_TickleStart1"
    ],
    "voiceMid": [
     "Selline_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Selline_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Selline_Surprise1",
   "Selline_Hmm1",
   "Selline_Yes1",
   "Selline_Touch1"
  ],
  "upsetVoice": [
   "Selline_Anger1",
   "Selline_No1",
   "Selline_Anger2",
   "Selline_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Selline_CallPlayer1",
   "Selline_Sorrow1",
   "Selline_Hmm2",
   "Selline_TickleStart1"
  ],
  "greetVoice": [
   "Selline_Greeting",
   "Selline_Lobby",
   "Selline_Spawn1",
   "Selline_Joy1",
   "Selline_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Groggy_1",
     "Heart_1",
     "Heart_2",
     "Heart_3",
     "Heart_4",
     "Quiet_1",
     "Quiet_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Think_1",
     "Think_2",
     "Think_3",
     "Whisper_1",
     "Whisper_2",
     "Wink_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Selline_Joy",
   "Proud_": "Selline_Pleasure",
   "Angry_": "Selline_Anger",
   "Sad_": "Selline_Sorrow",
   "Surprise_": "Selline_Surprise"
  }
 },
 {
  "id": "Shady",
  "name": "夏迪",
  "en": "Shady",
  "desc": "幽灵 · 4 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Shady/phone-avatar.png",
   "present": "assets/art/Shady/present.png",
   "album": "assets/art/Shady/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Shady",
    "dir": "assets/spine/Shady",
    "name": "默认",
    "desc": "基础外观（39 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ShadySkin1",
    "dir": "assets/spine/ShadySkin1",
    "name": "幽灵国披萨公主",
    "desc": "突然开始兼职送披萨的夏迪。试着下单一次，…（39 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ShadySkin2",
    "dir": "assets/spine/ShadySkin2",
    "name": "我耳中的青春幽灵",
    "desc": "乐队的主唱兼领队夏迪。练习时尽情展示歌艺…（39 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "ShadySkin3",
    "dir": "assets/spine/ShadySkin3",
    "name": "次元篡夺幽灵",
    "desc": "不断打开次元门， 袭击这个次元、那个次元…（39 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "S2_Head"
   ],
   "headTop": [
    "S2_Hair_Root"
   ],
   "face": [
    "S2_Face"
   ],
   "mouth": [
    "S2_F_Mouth"
   ],
   "cheekL": [
    "S2_F_Ball_L_Root"
   ],
   "cheekR": [
    "S2_F_Ball_Root"
   ],
   "belly": [],
   "neck": [
    "S2_Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S2_F_Ball_Root"
   ],
   "ballMoveP": [
    "S2_F_Ball_R_Root",
    "S2_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S2_Head"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Shady_Touch1",
     "Shady_Touch1_1",
     "Shady_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Shady_Touch2",
     "Shady_Touch2_1",
     "Shady_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Shady_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Shady_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Shady_TickleStart1"
    ],
    "voiceMid": [
     "Shady_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Shady_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Shady_Surprise1",
   "Shady_Hmm1",
   "Shady_Yes1",
   "Shady_Touch1"
  ],
  "upsetVoice": [
   "Shady_Anger1",
   "Shady_No1",
   "Shady_Anger2",
   "Shady_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Shady_CallPlayer1",
   "Shady_Sorrow1",
   "Shady_Hmm2",
   "Shady_TickleStart1"
  ],
  "greetVoice": [
   "Shady_Greeting",
   "Shady_Lobby",
   "Shady_Spawn1",
   "Shady_Joy1",
   "Shady_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Taunt_1",
     "Taunt_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Joke_1",
     "Joke_2",
     "Joke_3",
     "Joke_4",
     "Shy_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Shady_Joy",
   "Proud_": "Shady_Pleasure",
   "Angry_": "Shady_Anger",
   "Sad_": "Shady_Sorrow",
   "Surprise_": "Shady_Surprise"
  }
 },
 {
  "id": "ShadyTwisted",
  "name": "夏迪（逆转）",
  "en": "ShadyTwisted",
  "desc": "幽灵 · 3 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/ShadyTwisted/phone-avatar.png",
   "present": "assets/art/ShadyTwisted/present.png",
   "album": "assets/art/ShadyTwisted/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "ShadyTwisted",
    "dir": "assets/spine/ShadyTwisted",
    "name": "默认",
    "desc": "基础外观（68 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ShadyTwistedSkin1",
    "dir": "assets/spine/ShadyTwistedSkin1",
    "name": "幽灵首领的双重生活",
    "desc": "承认了自己隐秘爱好的夏迪(逆转)。据说她…（68 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ShadyTwistedSkin2",
    "dir": "assets/spine/ShadyTwistedSkin2",
    "name": "甜蜜的上司大人",
    "desc": "在艰辛的职场生活中成为温暖支柱的上司夏迪…（68 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Rim_Head"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face_CT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_Ac_Root"
   ],
   "tail": [],
   "earL": [
    "Ear_Ac"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Rim_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "ShadyTwisted_Touch1",
     "ShadyTwisted_Touch1_1",
     "ShadyTwisted_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "ShadyTwisted_Touch2",
     "ShadyTwisted_Touch2_1",
     "ShadyTwisted_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "ShadyTwisted_DutchRubEnd1"
    ],
    "voiceEnd": [
     "ShadyTwisted_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "ShadyTwisted_TickleStart1"
    ],
    "voiceMid": [
     "ShadyTwisted_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "ShadyTwisted_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "ShadyTwisted_Surprise1",
   "ShadyTwisted_Hmm1",
   "ShadyTwisted_Yes1",
   "ShadyTwisted_Touch1"
  ],
  "upsetVoice": [
   "ShadyTwisted_Anger1",
   "ShadyTwisted_No1",
   "ShadyTwisted_Anger2",
   "ShadyTwisted_DutchRubEnd1"
  ],
  "hungryVoice": [
   "ShadyTwisted_CallPlayer1",
   "ShadyTwisted_Sorrow1",
   "ShadyTwisted_Hmm2",
   "ShadyTwisted_TickleStart1"
  ],
  "greetVoice": [
   "ShadyTwisted_Greeting",
   "ShadyTwisted_Lobby",
   "ShadyTwisted_Spawn1",
   "ShadyTwisted_Joy1",
   "ShadyTwisted_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Close_2",
     "Close_3",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3",
     "Idle_4"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Groggy_1",
     "Groggy_2",
     "Groggy_3",
     "Joke_1",
     "Joke_2",
     "Joke_3",
     "Joke_4",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Talk_1",
     "Talk_2",
     "Thinking_1",
     "Thinking_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "ShadyTwisted_Joy",
   "Proud_": "ShadyTwisted_Pleasure",
   "Angry_": "ShadyTwisted_Anger",
   "Sad_": "ShadyTwisted_Sorrow",
   "Surprise_": "ShadyTwisted_Surprise"
  }
 },
 {
  "id": "Shasha",
  "name": "夏夏",
  "en": "Shasha",
  "desc": "妖精 · 4 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Shasha/phone-avatar.png",
   "present": "assets/art/Shasha/present.png",
   "album": "assets/art/Shasha/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Shasha",
    "dir": "assets/spine/Shasha",
    "name": "默认",
    "desc": "基础外观（70 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ShashaSkin1",
    "dir": "assets/spine/ShashaSkin1",
    "name": "湿润的夏日祭",
    "desc": "夏夏跟着朋友参加了莫纳蒂姆夏日祭。据说那…（70 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ShashaSkin2",
    "dir": "assets/spine/ShashaSkin2",
    "name": "粉色珊瑚的妖精",
    "desc": "夏夏觉得珊瑚很漂亮，一直在努力收集。为了…（70 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "ShashaSkin3",
    "dir": "assets/spine/ShashaSkin3",
    "name": "航空救援",
    "desc": "成为负责面包舟消防的空乘夏夏。她以亲切应…（71 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root",
    "Eye_R_Cheek_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Necklace_AC"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Ball_R_Root",
    "Character_Ball_Move"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": "",
   "altBone": "Ball_R_Root",
   "altBones": [
    "Ball_R_Root"
   ]
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1",
    "Proud_2"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Dizzy_1",
    "Dizzy_2"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Shasha_Touch1",
     "Shasha_Touch1_1",
     "Shasha_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Shasha_Touch2",
     "Shasha_Touch2_1",
     "Shasha_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Shasha_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Shasha_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Shasha_TickleStart1"
    ],
    "voiceMid": [
     "Shasha_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Shasha_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Shasha_Surprise1",
   "Shasha_Hmm1",
   "Shasha_Yes1",
   "Shasha_Touch1"
  ],
  "upsetVoice": [
   "Shasha_Anger1",
   "Shasha_No1",
   "Shasha_Anger2",
   "Shasha_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Shasha_CallPlayer1",
   "Shasha_Sorrow1",
   "Shasha_Hmm2",
   "Shasha_TickleStart1"
  ],
  "greetVoice": [
   "Shasha_Greeting",
   "Shasha_Lobby",
   "Shasha_Spawn1",
   "Shasha_Joy1",
   "Shasha_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Dizzy_1",
     "Dizzy_2",
     "Dizzy_3",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Proud_1",
     "Proud_2",
     "Proud_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Annoy_1",
     "Annoy_2",
     "Annoy_3",
     "Annoy_4",
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Fear_1",
     "Fear_2",
     "Fear_3",
     "Fear_4",
     "Shy_1",
     "Sorry_1",
     "Sorry_2",
     "Sorry_3",
     "Sorry_4",
     "Splash_1",
     "Splash_2",
     "Splash_3",
     "Splash_4",
     "Splash_5",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Shasha_Joy",
   "Proud_": "Shasha_Pleasure",
   "Angry_": "Shasha_Anger",
   "Sad_": "Shasha_Sorrow",
   "Surprise_": "Shasha_Surprise"
  }
 },
 {
  "id": "Sherum",
  "name": "莎伦",
  "en": "Sherum",
  "desc": "魔女 · 4 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Sherum/phone-avatar.png",
   "present": "assets/art/Sherum/present.png",
   "album": "assets/art/Sherum/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Sherum",
    "dir": "assets/spine/Sherum",
    "name": "默认",
    "desc": "基础外观（53 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SherumSkin1",
    "dir": "assets/spine/SherumSkin1",
    "name": "唱片录音机",
    "desc": "唱片录音机（53 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "SherumSkin2",
    "dir": "assets/spine/SherumSkin2",
    "name": "粉色约会出游",
    "desc": "粉色约会出游（53 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "SherumSkin3",
    "dir": "assets/spine/SherumSkin3",
    "name": "小说与小说家",
    "desc": "小说与小说家（54 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [
    "Neck_Ac"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Sherum_Touch1",
     "Sherum_Touch1_1",
     "Sherum_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Sherum_Touch2",
     "Sherum_Touch2_1",
     "Sherum_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Sherum_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Sherum_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Sherum_TickleStart1"
    ],
    "voiceMid": [
     "Sherum_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Sherum_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Sherum_Surprise1",
   "Sherum_Hmm1",
   "Sherum_Yes1",
   "Sherum_Touch1"
  ],
  "upsetVoice": [
   "Sherum_Anger1",
   "Sherum_No1",
   "Sherum_Anger2",
   "Sherum_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Sherum_CallPlayer1",
   "Sherum_Sorrow1",
   "Sherum_Hmm2",
   "Sherum_TickleStart1"
  ],
  "greetVoice": [
   "Sherum_Greeting",
   "Sherum_Lobby",
   "Sherum_Spawn1",
   "Sherum_Joy1",
   "Sherum_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Question_1",
     "Read_1",
     "Read_2",
     "Read_3",
     "Shy_1",
     "Shy_2",
     "Sorry_1",
     "Sorry_2",
     "Sulky_1",
     "Sulky_2",
     "Write_1",
     "Write_2",
     "Write_3",
     "Write_4",
     "Write_5",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Sherum_Joy",
   "Proud_": "Sherum_Pleasure",
   "Angry_": "Sherum_Anger",
   "Sad_": "Sherum_Sorrow",
   "Surprise_": "Sherum_Surprise"
  }
 },
 {
  "id": "Shoupan",
  "name": "舒胖",
  "en": "Shoupan",
  "desc": "妖精 · 5 套外观",
  "tag": "🧚",
  "art": {
   "avatar": "assets/art/Shoupan/phone-avatar.png",
   "present": "assets/art/Shoupan/present.png",
   "album": "assets/art/Shoupan/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Shoupan",
    "dir": "assets/spine/Shoupan",
    "name": "默认",
    "desc": "基础外观（56 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ShoupanSkin1",
    "dir": "assets/spine/ShoupanSkin1",
    "name": "暴走族舒胖",
    "desc": "问她舒帕伏特去哪儿了，她却一脸疑惑，反问…（56 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ShoupanSkin2",
    "dir": "assets/spine/ShoupanSkin2",
    "name": "舒帕鼓点",
    "desc": "舒胖没有骑舒帕伏特，而是骑上了舒帕鼓伏特…（56 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "ShoupanSkin3",
    "dir": "assets/spine/ShoupanSkin3",
    "name": "天空物流",
    "desc": "成为负责面包舟服务的空乘舒胖。即使在天空…（57 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Vehicle_Headlight"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Bag_Body"
   ],
   "neck": [
    "Neck_Zipper_Root"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Vehicle_Headlight"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Bag_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Dizzy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Taunt_1",
    "Taunt_2",
    "Taunt_3",
    "Taunt_4"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Shoupan_Touch1",
     "Shoupan_Touch1_1",
     "Shoupan_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Shoupan_Touch2",
     "Shoupan_Touch2_1",
     "Shoupan_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Shoupan_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Shoupan_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Shoupan_TickleStart1"
    ],
    "voiceMid": [
     "Shoupan_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Shoupan_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Shoupan_Surprise1",
   "Shoupan_Hmm1",
   "Shoupan_Yes1",
   "Shoupan_Touch1"
  ],
  "upsetVoice": [
   "Shoupan_Anger1",
   "Shoupan_No1",
   "Shoupan_Anger2",
   "Shoupan_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Shoupan_CallPlayer1",
   "Shoupan_Sorrow1",
   "Shoupan_Hmm2",
   "Shoupan_TickleStart1"
  ],
  "greetVoice": [
   "Shoupan_Greeting",
   "Shoupan_Lobby",
   "Shoupan_Spawn1",
   "Shoupan_Joy1",
   "Shoupan_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Dizzy_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Taunt_1",
     "Taunt_2",
     "Taunt_3",
     "Taunt_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Break_1",
     "Break_2",
     "Check_1",
     "Dance_1",
     "Dash_1",
     "Dash_2",
     "Dash_3",
     "Drift_1",
     "Drift_2",
     "Drift_3",
     "Drive_1",
     "Drive_2",
     "Drive_3",
     "Shy_1",
     "Shy_2",
     "Sorry_1",
     "Track_1",
     "Act1_1",
     "Act2_1",
     "Act3_1",
     "Angry1_1",
     "Eat1_1",
     "Idle",
     "Move",
     "Play1_1",
     "Sleep1_1",
     "Spawn",
     "Swim1_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Shoupan_Joy",
   "Proud_": "Shoupan_Pleasure",
   "Angry_": "Shoupan_Anger",
   "Sad_": "Shoupan_Sorrow",
   "Surprise_": "Shoupan_Surprise"
  }
 },
 {
  "id": "Silphir",
  "name": "希菲尔",
  "en": "Silphir",
  "desc": "龙族 · 3 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Silphir/phone-avatar.png",
   "present": "assets/art/Silphir/present.png",
   "album": "assets/art/Silphir/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Silphir",
    "dir": "assets/spine/Silphir",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SilphirSkin1",
    "dir": "assets/spine/SilphirSkin1",
    "name": "青涩学生时代",
    "desc": "青涩学生时代（43 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "SilphirSkin2",
    "dir": "assets/spine/SilphirSkin2",
    "name": "西蓝提督",
    "desc": "西蓝提督（43 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "S3_Head_Root"
   ],
   "headTop": [
    "S3_Hair_Root"
   ],
   "face": [],
   "mouth": [
    "S3_F_Mouth"
   ],
   "cheekL": [
    "S3_F_Ball_L_Root"
   ],
   "cheekR": [
    "S3_F_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [
    "S3_Ear_L_1"
   ],
   "earR": [
    "S3_Ear_R_1"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "S3_F_Ball_Root"
   ],
   "ballMoveP": [
    "S3_F_Ball_R_Root",
    "S3_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S3_Head_Root"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Silphir_Touch1",
     "Silphir_Touch1_1",
     "Silphir_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Silphir_Touch2",
     "Silphir_Touch2_1",
     "Silphir_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Silphir_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Silphir_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Silphir_TickleStart1"
    ],
    "voiceMid": [
     "Silphir_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Silphir_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Silphir_Surprise1",
   "Silphir_Hmm1",
   "Silphir_Yes1",
   "Silphir_Touch1"
  ],
  "upsetVoice": [
   "Silphir_Anger1",
   "Silphir_No1",
   "Silphir_Anger2",
   "Silphir_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Silphir_CallPlayer1",
   "Silphir_Sorrow1",
   "Silphir_Hmm2",
   "Silphir_TickleStart1"
  ],
  "greetVoice": [
   "Silphir_Greeting",
   "Silphir_Lobby",
   "Silphir_Spawn1",
   "Silphir_Joy1",
   "Silphir_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Shy_1",
     "Smile_1",
     "Smile_2",
     "Smile_3",
     "Sorry_1",
     "Sulky_1",
     "Thinking_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Silphir_Joy",
   "Proud_": "Silphir_Pleasure",
   "Angry_": "Silphir_Anger",
   "Sad_": "Silphir_Sorrow",
   "Surprise_": "Silphir_Surprise"
  }
 },
 {
  "id": "Silvia",
  "name": "西尔维娅",
  "en": "Silvia",
  "desc": "龙族 · 4 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Silvia/phone-avatar.png",
   "present": "assets/art/Silvia/present.png",
   "album": "assets/art/Silvia/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Silvia",
    "dir": "assets/spine/Silvia",
    "name": "默认",
    "desc": "基础外观（68 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SilviaSkin1",
    "dir": "assets/spine/SilviaSkin1",
    "name": "我就是体育馆的明日之星",
    "desc": "听说西尔维娅为了学习防身术而决定去上培训…（68 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "SilviaSkin2",
    "dir": "assets/spine/SilviaSkin2",
    "name": "端庄少女的步履",
    "desc": "穿上色泽柔美衣装的西尔维娅。她展现出端庄…（68 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "SilviaSkin3",
    "dir": "assets/spine/SilviaSkin3",
    "name": "西尔维娅 Skin3",
    "desc": "西尔维娅的第三套外观。（67 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Silvia_Touch1",
     "Silvia_Touch1_1",
     "Silvia_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Silvia_Touch2",
     "Silvia_Touch2_1",
     "Silvia_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Silvia_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Silvia_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Silvia_TickleStart1"
    ],
    "voiceMid": [
     "Silvia_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Silvia_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Silvia_Surprise1",
   "Silvia_Hmm1",
   "Silvia_Yes1",
   "Silvia_Touch1"
  ],
  "upsetVoice": [
   "Silvia_Anger1",
   "Silvia_No1",
   "Silvia_Anger2",
   "Silvia_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Silvia_CallPlayer1",
   "Silvia_Sorrow1",
   "Silvia_Hmm2",
   "Silvia_TickleStart1"
  ],
  "greetVoice": [
   "Silvia_Greeting",
   "Silvia_Lobby",
   "Silvia_Spawn1",
   "Silvia_Joy1",
   "Silvia_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Serious_1",
     "Serious_2",
     "Serious_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Dere_1",
     "EasterEgg_Happy_1",
     "Laugh_1",
     "Laugh_2",
     "Laugh_3",
     "Merong_1",
     "Merong_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Shy_5",
     "Shy_6",
     "Shy_7",
     "Smile_1",
     "Smile_2",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Silvia_Joy",
   "Proud_": "Silvia_Pleasure",
   "Angry_": "Silvia_Anger",
   "Sad_": "Silvia_Sorrow",
   "Surprise_": "Silvia_Surprise"
  }
 },
 {
  "id": "Sist",
  "name": "茜斯特",
  "en": "Sist",
  "desc": "龙族 · 4 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Sist/phone-avatar.png",
   "present": "assets/art/Sist/present.png",
   "album": "assets/art/Sist/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Sist",
    "dir": "assets/spine/Sist",
    "name": "默认",
    "desc": "基础外观（61 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SistSkin1",
    "dir": "assets/spine/SistSkin1",
    "name": "绿色怪物 (TM)",
    "desc": "茜斯特购买了新作动画《绿色怪物的冒险》I…（61 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "SistSkin2",
    "dir": "assets/spine/SistSkin2",
    "name": "送货龙族",
    "desc": "开始新生意后，茜斯特忙着四处配送。据说多…（61 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "SistSkin3",
    "dir": "assets/spine/SistSkin3",
    "name": "应援代行服务",
    "desc": "茜斯特最近拼命跑应援代行服务。她说收到多…（61 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "S3_Head_Root"
   ],
   "headTop": [
    "S3_Hair_Root"
   ],
   "face": [],
   "mouth": [
    "S3_F_Mouth"
   ],
   "cheekL": [
    "S3_F_Ball_L_Root"
   ],
   "cheekR": [
    "S3_F_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S3_F_Ball_Root"
   ],
   "ballMoveP": [
    "S3_F_Ball_R_Root",
    "S3_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S3_Head_Root"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Sist_Touch1",
     "Sist_Touch1_1",
     "Sist_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Sist_Touch2",
     "Sist_Touch2_1",
     "Sist_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Sist_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Sist_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Sist_TickleStart1"
    ],
    "voiceMid": [
     "Sist_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Sist_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Sist_Surprise1",
   "Sist_Hmm1",
   "Sist_Yes1",
   "Sist_Touch1"
  ],
  "upsetVoice": [
   "Sist_Anger1",
   "Sist_No1",
   "Sist_Anger2",
   "Sist_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Sist_CallPlayer1",
   "Sist_Sorrow1",
   "Sist_Hmm2",
   "Sist_TickleStart1"
  ],
  "greetVoice": [
   "Sist_Greeting",
   "Sist_Lobby",
   "Sist_Spawn1",
   "Sist_Joy1",
   "Sist_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Dance_1",
     "Dance_2",
     "Pistol_1",
     "Pistol_2",
     "Pistol_3",
     "Revolver_1",
     "Revolver_2",
     "Revolver_3",
     "Rummage_1",
     "Rummage_2",
     "Rummage_3",
     "Rummage_4",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Sulky_1",
     "Sulky_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Sist_Joy",
   "Proud_": "Sist_Pleasure",
   "Angry_": "Sist_Anger",
   "Sad_": "Sist_Sorrow",
   "Surprise_": "Sist_Surprise"
  }
 },
 {
  "id": "Snorky",
  "name": "斯诺琪",
  "en": "Snorky",
  "desc": "魔女 · 3 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Snorky/phone-avatar.png",
   "present": "assets/art/Snorky/present.png",
   "album": "assets/art/Snorky/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Snorky",
    "dir": "assets/spine/Snorky",
    "name": "默认",
    "desc": "基础外观（51 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SnorkySkin1",
    "dir": "assets/spine/SnorkySkin1",
    "name": "购物女王帮派",
    "desc": "斯诺琪说要在打架以外的领域也当一回大人物…（50 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "SnorkySkin2",
    "dir": "assets/spine/SnorkySkin2",
    "name": "狂野派对新手",
    "desc": "派对和派对服对斯诺琪来说都很陌生。虽然还…（51 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Earring"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Snorky_Touch1",
     "Snorky_Touch1_1",
     "Snorky_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Snorky_Touch2",
     "Snorky_Touch2_1",
     "Snorky_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Snorky_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Snorky_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Snorky_TickleStart1"
    ],
    "voiceMid": [
     "Snorky_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Snorky_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Snorky_Surprise1",
   "Snorky_Hmm1",
   "Snorky_Yes1",
   "Snorky_Touch1"
  ],
  "upsetVoice": [
   "Snorky_Anger1",
   "Snorky_No1",
   "Snorky_Anger2",
   "Snorky_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Snorky_CallPlayer1",
   "Snorky_Sorrow1",
   "Snorky_Hmm2",
   "Snorky_TickleStart1"
  ],
  "greetVoice": [
   "Snorky_Greeting",
   "Snorky_Lobby",
   "Snorky_Spawn1",
   "Snorky_Joy1",
   "Snorky_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Close_1",
     "Close_2",
     "Close_3",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Jackson_1",
     "Jackson_2",
     "Knee_1",
     "Shy_1",
     "Shy_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Snorky_Joy",
   "Proud_": "Snorky_Pleasure",
   "Angry_": "Snorky_Anger",
   "Sad_": "Snorky_Sorrow",
   "Surprise_": "Snorky_Surprise"
  }
 },
 {
  "id": "Sparrot",
  "name": "斯帕洛特",
  "en": "Sparrot",
  "desc": "兽人 · 2 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Sparrot/phone-avatar.png",
   "present": "assets/art/Sparrot/present.png",
   "album": "assets/art/Sparrot/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Sparrot",
    "dir": "assets/spine/Sparrot",
    "name": "默认",
    "desc": "基础外观（57 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SparrotSkin1",
    "dir": "assets/spine/SparrotSkin1",
    "name": "横冲直撞的小鹦混混",
    "desc": "抱着“绝不后退”的觉悟只顾向前冲的斯帕洛…（58 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face",
    "Parrot_1_Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Neck_Ac_R_Root"
   ],
   "tail": [
    "Tail_Root"
   ],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R_Root"
   ],
   "ballMoveP": [
    "Character_Ball_Root",
    "Ball_R_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Sparrot_Touch1",
     "Sparrot_Touch1_1",
     "Sparrot_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Sparrot_Touch2",
     "Sparrot_Touch2_1",
     "Sparrot_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Sparrot_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Sparrot_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Sparrot_TickleStart1"
    ],
    "voiceMid": [
     "Sparrot_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Sparrot_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Sparrot_Surprise1",
   "Sparrot_Hmm1",
   "Sparrot_Yes1",
   "Sparrot_Touch1"
  ],
  "upsetVoice": [
   "Sparrot_Anger1",
   "Sparrot_No1",
   "Sparrot_Anger2",
   "Sparrot_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Sparrot_CallPlayer1",
   "Sparrot_Sorrow1",
   "Sparrot_Hmm2",
   "Sparrot_TickleStart1"
  ],
  "greetVoice": [
   "Sparrot_Greeting",
   "Sparrot_Lobby",
   "Sparrot_Spawn1",
   "Sparrot_Joy1",
   "Sparrot_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Happy_11",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Proud_1",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Curious_1",
     "Dance_1",
     "Dumb_1",
     "Parrot_1",
     "Shy_1",
     "Sneaky_1",
     "Sneaky_2",
     "Sneaky_3",
     "Sulky_1",
     "Sulky_2",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Sparrot_Joy",
   "Proud_": "Sparrot_Pleasure",
   "Angry_": "Sparrot_Anger",
   "Sad_": "Sparrot_Sorrow",
   "Surprise_": "Sparrot_Surprise"
  }
 },
 {
  "id": "Speaki",
  "name": "斯碧琪",
  "en": "Speaki",
  "desc": "幽灵 · 3 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Speaki/phone-avatar.png",
   "present": "assets/art/Speaki/present.png",
   "album": "assets/art/Speaki/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Speaki",
    "dir": "assets/spine/Speaki",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SpeakiSkin1",
    "dir": "assets/spine/SpeakiSkin1",
    "name": "纯南瓜",
    "desc": "问她这次又在模仿什么，她回答说是在“模仿…（43 动作）",
    "voiceSkin": "_Skin1"
   }
  ],
  "bones": {
   "head": [
    "S2_Head_Root"
   ],
   "headTop": [
    "S2_Hair_Root"
   ],
   "face": [],
   "mouth": [
    "S2_F_Mouth"
   ],
   "cheekL": [
    "S2_Ball_L_Root"
   ],
   "cheekR": [
    "S2_F_Ball_Root"
   ],
   "belly": [],
   "neck": [
    "S2_Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S2_F_Ball_Root"
   ],
   "ballMoveP": [
    "S2_F_Ball_R_Root",
    "S2_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S2_Head_Root"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Speaki_Touch1",
     "Speaki_Touch1_1",
     "Speaki_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Speaki_Touch2",
     "Speaki_Touch2_1",
     "Speaki_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Speaki_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Speaki_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Speaki_TickleStart1"
    ],
    "voiceMid": [
     "Speaki_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Speaki_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Speaki_Surprise1",
   "Speaki_Yes1",
   "Speaki_Touch1"
  ],
  "upsetVoice": [
   "Speaki_Anger1",
   "Speaki_No1",
   "Speaki_Anger2",
   "Speaki_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Speaki_CallPlayer1",
   "Speaki_Sorrow1",
   "Speaki_TickleStart1"
  ],
  "greetVoice": [
   "Speaki_Greeting",
   "Speaki_Lobby",
   "Speaki_Spawn1",
   "Speaki_Joy1",
   "Speaki_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Shy_1",
     "Shy_2",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Act_1_1",
     "Act_2_1",
     "Act_3_1",
     "Angry1_1",
     "Eat1_1",
     "Idle",
     "Move",
     "Play1_1",
     "Sleep1_1",
     "Spawn",
     "Swim1_1",
     "Touch"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Speaki_Joy",
   "Proud_": "Speaki_Pleasure",
   "Angry_": "Speaki_Anger",
   "Sad_": "Speaki_Sorrow",
   "Surprise_": "Speaki_Surprise"
  }
 },
 {
  "id": "SpeakiMaid",
  "name": "斯碧琪（女仆）",
  "en": "SpeakiMaid",
  "desc": "幽灵 · 3 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/SpeakiMaid/phone-avatar.png",
   "present": "assets/art/SpeakiMaid/present.png",
   "album": "assets/art/SpeakiMaid/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "SpeakiMaid",
    "dir": "assets/spine/SpeakiMaid",
    "name": "默认",
    "desc": "基础外观（51 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SpeakiMaidSkin1",
    "dir": "assets/spine/SpeakiMaidSkin1",
    "name": "蓬松的早晨",
    "desc": "斯碧琪（女仆）嫌必须穿得一丝不苟的女仆装…（51 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "SpeakiMaidSkin2",
    "dir": "assets/spine/SpeakiMaidSkin2",
    "name": "鸡服女仆",
    "desc": "穿着鸡睡衣的斯碧琪(女仆)。她似乎很羡慕…（51 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Cleaner_Head"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face_CT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Cleaner_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Happy_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "SpeakiMaid_Touch1",
     "SpeakiMaid_Touch1_1",
     "SpeakiMaid_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "SpeakiMaid_Touch2",
     "SpeakiMaid_Touch2_1",
     "SpeakiMaid_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "SpeakiMaid_DutchRubEnd1"
    ],
    "voiceEnd": [
     "SpeakiMaid_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "SpeakiMaid_TickleStart1"
    ],
    "voiceMid": [
     "SpeakiMaid_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "SpeakiMaid_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "SpeakiMaid_Surprise1",
   "SpeakiMaid_Hmm1",
   "SpeakiMaid_Yes1",
   "SpeakiMaid_Touch1"
  ],
  "upsetVoice": [
   "SpeakiMaid_Anger1",
   "SpeakiMaid_No1",
   "SpeakiMaid_Anger2",
   "SpeakiMaid_DutchRubEnd1"
  ],
  "hungryVoice": [
   "SpeakiMaid_CallPlayer1",
   "SpeakiMaid_Sorrow1",
   "SpeakiMaid_Hmm2",
   "SpeakiMaid_TickleStart1"
  ],
  "greetVoice": [
   "SpeakiMaid_Greeting",
   "SpeakiMaid_Lobby",
   "SpeakiMaid_Spawn1",
   "SpeakiMaid_Joy1",
   "SpeakiMaid_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Surprise_1"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Clean_1",
     "Clean_2",
     "Clean_3",
     "Dance_1",
     "Dance_2",
     "Hi_1",
     "Shy_1",
     "Sorry_1",
     "Sorry_2",
     "Stand_1",
     "Stand_2",
     "Stand_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Think_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "SpeakiMaid_Joy",
   "Proud_": "SpeakiMaid_Pleasure",
   "Angry_": "SpeakiMaid_Anger",
   "Sad_": "SpeakiMaid_Sorrow",
   "Surprise_": "SpeakiMaid_Surprise"
  }
 },
 {
  "id": "Suro",
  "name": "修罗",
  "en": "Suro",
  "desc": "兽人 · 4 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Suro/phone-avatar.png",
   "present": "assets/art/Suro/present.png",
   "album": "assets/art/Suro/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Suro",
    "dir": "assets/spine/Suro",
    "name": "默认",
    "desc": "基础外观（68 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SuroSkin1",
    "dir": "assets/spine/SuroSkin1",
    "name": "轻盈拖鞋",
    "desc": "即使睡觉也全力以赴的武士修罗。因为会在梦…（68 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "SuroSkin2",
    "dir": "assets/spine/SuroSkin2",
    "name": "病弱微笑蛇",
    "desc": "穿着宽松病号服的修罗。看到他玩弄点滴管，…（68 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "SuroSkin3",
    "dir": "assets/spine/SuroSkin3",
    "name": "阳光下的蛇",
    "desc": "这是来海边游玩的修罗。她还带来了能够遮挡…（69 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face_CT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "Necklace"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Proud_1",
    "Proud_2"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Suro_Touch1",
     "Suro_Touch1_1",
     "Suro_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Suro_Touch2",
     "Suro_Touch2_1",
     "Suro_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Suro_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Suro_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Suro_TickleStart1"
    ],
    "voiceMid": [
     "Suro_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Suro_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Suro_Surprise1",
   "Suro_Hmm1",
   "Suro_Yes1",
   "Suro_Touch1"
  ],
  "upsetVoice": [
   "Suro_Anger1",
   "Suro_No1",
   "Suro_Anger2",
   "Suro_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Suro_CallPlayer1",
   "Suro_Sorrow1",
   "Suro_Hmm2",
   "Suro_TickleStart1"
  ],
  "greetVoice": [
   "Suro_Greeting",
   "Suro_Lobby",
   "Suro_Spawn1",
   "Suro_Joy1",
   "Suro_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Panic_7",
     "Proud_1",
     "Proud_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Serious_5",
     "Serious_6",
     "Serious_7",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Hi_1",
     "Hi_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Suro_Joy",
   "Proud_": "Suro_Pleasure",
   "Angry_": "Suro_Anger",
   "Sad_": "Suro_Sorrow",
   "Surprise_": "Suro_Surprise"
  }
 },
 {
  "id": "Sylla",
  "name": "希拉",
  "en": "Sylla",
  "desc": "灵体 · 4 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Sylla/phone-avatar.png",
   "present": "assets/art/Sylla/present.png",
   "album": "assets/art/Sylla/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Sylla",
    "dir": "assets/spine/Sylla",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   },
   {
    "id": "SyllaSkin1",
    "dir": "assets/spine/SyllaSkin1",
    "name": "极限精灵",
    "desc": "心情愉快时，希拉以弓术为爱好的样子。由于…（43 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "SyllaSkin2",
    "dir": "assets/spine/SyllaSkin2",
    "name": "海边微风",
    "desc": "希拉准备了泳衣打算玩水。炎热夏日，只要坐…（43 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "SyllaSkin3",
    "dir": "assets/spine/SyllaSkin3",
    "name": "吹拂而来的征服之风",
    "desc": "以优雅征服者的姿态登场的希拉。 谁也不知…（43 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "S2_Head"
   ],
   "headTop": [
    "S2_Hair_Root"
   ],
   "face": [
    "S2_Face"
   ],
   "mouth": [
    "S2_F_Mouth"
   ],
   "cheekL": [
    "S2_Ball_L_Root"
   ],
   "cheekR": [
    "S2_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S2_Ball_Root"
   ],
   "ballMoveP": [
    "S2_Ball_R",
    "S2_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S2_Head"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Sylla_Touch1",
     "Sylla_Touch1_1",
     "Sylla_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Sylla_Touch2",
     "Sylla_Touch2_1",
     "Sylla_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Sylla_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Sylla_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Sylla_TickleStart1"
    ],
    "voiceMid": [
     "Sylla_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Sylla_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Sylla_Surprise1",
   "Sylla_Hmm1",
   "Sylla_Yes1",
   "Sylla_Touch1"
  ],
  "upsetVoice": [
   "Sylla_Anger1",
   "Sylla_No1",
   "Sylla_Anger2",
   "Sylla_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Sylla_CallPlayer1",
   "Sylla_Sorrow1",
   "Sylla_Hmm2",
   "Sylla_TickleStart1"
  ],
  "greetVoice": [
   "Sylla_Greeting",
   "Sylla_Lobby",
   "Sylla_Spawn1",
   "Sylla_Joy1",
   "Sylla_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Panic_1",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Serious_4",
     "Serious_5"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Dance_1",
     "Dance_2",
     "Dance_3",
     "Smile_1",
     "Sorry_1",
     "Sorry_2",
     "Sulky_1",
     "Sulky_2",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Sylla_Joy",
   "Proud_": "Sylla_Pleasure",
   "Angry_": "Sylla_Anger",
   "Sad_": "Sylla_Sorrow",
   "Surprise_": "Sylla_Surprise"
  }
 },
 {
  "id": "Taida",
  "name": "泰达",
  "en": "Taida",
  "desc": "精灵 · 1 套外观",
  "tag": "🧝",
  "art": {
   "avatar": "assets/art/Taida/phone-avatar.png",
   "present": "assets/art/Taida/present.png",
   "album": "assets/art/Taida/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Taida",
    "dir": "assets/spine/Taida",
    "name": "默认",
    "desc": "基础外观（51 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face_CT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Ear_L_CT"
   ],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Happy_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Taida_Touch1",
     "Taida_Touch1_1",
     "Taida_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Taida_Touch2",
     "Taida_Touch2_1",
     "Taida_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Taida_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Taida_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Taida_TickleStart1"
    ],
    "voiceMid": [
     "Taida_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Taida_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Taida_Surprise1",
   "Taida_Hmm1",
   "Taida_Yes1",
   "Taida_Touch1"
  ],
  "upsetVoice": [
   "Taida_Anger1",
   "Taida_No1",
   "Taida_Anger2",
   "Taida_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Taida_CallPlayer1",
   "Taida_Sorrow1",
   "Taida_Hmm2",
   "Taida_TickleStart1"
  ],
  "greetVoice": [
   "Taida_Greeting",
   "Taida_Lobby",
   "Taida_Spawn1",
   "Taida_Joy1",
   "Taida_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Boring_1",
     "Camera_1",
     "Camera_2",
     "Camera_3",
     "Camera_4",
     "Dance_1",
     "Dance_2",
     "Phone_1",
     "Phone_2",
     "Phone_3",
     "Phone_4",
     "Pose_1",
     "Sorry_1",
     "Sulky_1",
     "Sulky_2",
     "Think_1",
     "Think_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Taida_Joy",
   "Proud_": "Taida_Pleasure",
   "Angry_": "Taida_Anger",
   "Sad_": "Taida_Sorrow",
   "Surprise_": "Taida_Surprise"
  }
 },
 {
  "id": "Tig",
  "name": "提格",
  "en": "Tig",
  "desc": "兽人 · 4 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Tig/phone-avatar.png",
   "present": "assets/art/Tig/present.png",
   "album": "assets/art/Tig/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Tig",
    "dir": "assets/spine/Tig",
    "name": "默认",
    "desc": "基础外观（63 动作）",
    "voiceSkin": ""
   },
   {
    "id": "TigSkin1",
    "dir": "assets/spine/TigSkin1",
    "name": "流浪虎之剑圣",
    "desc": "传闻她会在艾利亚斯各处流浪、寻找强者，是…（63 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "TigSkin2",
    "dir": "assets/spine/TigSkin2",
    "name": "活力运动特长生",
    "desc": "校内以会打全垒打闻名的运动特长生提格。平…（63 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "TigSkin3",
    "dir": "assets/spine/TigSkin3",
    "name": "突击！征服队长",
    "desc": "据说设定是前来接管次元的可怕突击队的队长…（63 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_Root"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Necklace_Body"
   ],
   "neck": [
    "Necklace_Root"
   ],
   "tail": [
    "Tail_0"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_R_Root"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_Root"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Necklace_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Tig_Touch1",
     "Tig_Touch1_1",
     "Tig_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Tig_Touch2",
     "Tig_Touch2_1",
     "Tig_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Tig_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Tig_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Tig_TickleStart1"
    ],
    "voiceMid": [
     "Tig_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Tig_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Tig_Surprise1",
   "Tig_Hmm1",
   "Tig_Yes1",
   "Tig_Touch1"
  ],
  "upsetVoice": [
   "Tig_Anger1",
   "Tig_No1",
   "Tig_Anger2",
   "Tig_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Tig_CallPlayer1",
   "Tig_Sorrow1",
   "Tig_Hmm2",
   "Tig_TickleStart1"
  ],
  "greetVoice": [
   "Tig_Greeting",
   "Tig_Lobby",
   "Tig_Spawn1",
   "Tig_Joy1",
   "Tig_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Sad_10",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Doubt_1",
     "Doubt_2",
     "Ouch_1",
     "Ouch_2",
     "Pride_1",
     "Pride_2",
     "Pride_3",
     "Shy_1",
     "Shy_2",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Sulky_4",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Tig_Joy",
   "Proud_": "Tig_Pleasure",
   "Angry_": "Tig_Anger",
   "Sad_": "Tig_Sorrow",
   "Surprise_": "Tig_Surprise"
  }
 },
 {
  "id": "TigHero",
  "name": "提格（英雄）",
  "en": "TigHero",
  "desc": "兽人 · 3 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/TigHero/phone-avatar.png",
   "present": "assets/art/TigHero/present.png",
   "album": "assets/art/TigHero/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "TigHero",
    "dir": "assets/spine/TigHero",
    "name": "默认",
    "desc": "基础外观（72 动作）",
    "voiceSkin": ""
   },
   {
    "id": "TigHeroSkin1",
    "dir": "assets/spine/TigHeroSkin1",
    "name": "兽人村北方大公",
    "desc": "独自漫步在兽人村北方相接的迷雾森林、击退…（72 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "TigHeroSkin2",
    "dir": "assets/spine/TigHeroSkin2",
    "name": "苍穹的白翼",
    "desc": "从清晨白亮的天空到日落，守护艾利亚斯的守…（72 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [
    "Tail_2_Root"
   ],
   "earL": [
    "Ear_L",
    "Ear_L_1"
   ],
   "earR": [
    "Ear_R"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "TigHero_Touch1",
     "TigHero_Touch1_1",
     "TigHero_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "TigHero_Touch2",
     "TigHero_Touch2_1",
     "TigHero_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "TigHero_DutchRubEnd1"
    ],
    "voiceEnd": [
     "TigHero_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "TigHero_TickleStart1"
    ],
    "voiceMid": [
     "TigHero_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "TigHero_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "TigHero_Surprise1",
   "TigHero_Hmm1",
   "TigHero_Yes1",
   "TigHero_Touch1"
  ],
  "upsetVoice": [
   "TigHero_Anger1",
   "TigHero_No1",
   "TigHero_Anger2",
   "TigHero_DutchRubEnd1"
  ],
  "hungryVoice": [
   "TigHero_CallPlayer1",
   "TigHero_Sorrow1",
   "TigHero_Hmm2",
   "TigHero_TickleStart1"
  ],
  "greetVoice": [
   "TigHero_Greeting",
   "TigHero_Lobby",
   "TigHero_Spawn1",
   "TigHero_Joy1",
   "TigHero_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Angry_11",
     "Angry_12",
     "Angry_13",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Sad_10",
     "Sad_11",
     "Sad_12",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Shy_1",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Sword_1",
     "Sword_2",
     "Sword_3",
     "Sword_4",
     "Sword_5",
     "Sword_6",
     "Sword_7",
     "Sword_8",
     "Sword_9",
     "Sword_10",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "TigHero_Joy",
   "Proud_": "TigHero_Pleasure",
   "Angry_": "TigHero_Anger",
   "Sad_": "TigHero_Sorrow",
   "Surprise_": "TigHero_Surprise"
  }
 },
 {
  "id": "Ui",
  "name": "雨伊",
  "en": "Ui",
  "desc": "灵体 · 6 套外观",
  "tag": "🔮",
  "art": {
   "avatar": "assets/art/Ui/phone-avatar.png",
   "present": "assets/art/Ui/present.png",
   "album": "assets/art/Ui/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Ui",
    "dir": "assets/spine/Ui",
    "name": "默认",
    "desc": "基础外观（42 动作）",
    "voiceSkin": ""
   },
   {
    "id": "UiSkin1",
    "dir": "assets/spine/UiSkin1",
    "name": "童心的阳光",
    "desc": "对见到新朋友充满期待的雨伊。光看就让人想…（42 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "UiSkin2",
    "dir": "assets/spine/UiSkin2",
    "name": "清爽的幸福",
    "desc": "总觉得一靠近，她就会说着要给人抹泡沫追上…（42 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "UiSkin3",
    "dir": "assets/spine/UiSkin3",
    "name": "幸福的小公主",
    "desc": "公主雨伊总说幸福就在身边，要让艾利亚斯的…（42 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "UiSkin4",
    "dir": "assets/spine/UiSkin4",
    "name": "清澈祈祷的雨滴",
    "desc": "为了向大家传递幸福，今天也献上祈祷的祭司…（42 动作）",
    "voiceSkin": "_Skin4"
   },
   {
    "id": "UiSkin5",
    "dir": "assets/spine/UiSkin5",
    "name": "褪色的记忆",
    "desc": "失去了幸福的雨伊。每一步沉重踏下，都翻涌…（43 动作）",
    "voiceSkin": "_Skin5"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Eru_Head"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face_HCT",
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Eru_Body"
   ],
   "neck": [
    "Neck"
   ],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Eru_Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Eru_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Ui_Touch1",
     "Ui_Touch1_1",
     "Ui_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Ui_Touch2",
     "Ui_Touch2_1",
     "Ui_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Ui_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Ui_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Ui_TickleStart1"
    ],
    "voiceMid": [
     "Ui_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Ui_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Ui_Surprise1",
   "Ui_Hmm1",
   "Ui_Yes1",
   "Ui_Touch1"
  ],
  "upsetVoice": [
   "Ui_Anger1",
   "Ui_No1",
   "Ui_Anger2",
   "Ui_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Ui_CallPlayer1",
   "Ui_Sorrow1",
   "Ui_Hmm2",
   "Ui_TickleStart1"
  ],
  "greetVoice": [
   "Ui_Greeting",
   "Ui_Lobby",
   "Ui_Spawn1",
   "Ui_Joy1",
   "Ui_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Jump_1",
     "Sing_1",
     "Sing_2",
     "Smile_1",
     "Smile_2",
     "Smile_3",
     "Sulky_1",
     "Sulky_2",
     "Track_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Ui_Joy",
   "Proud_": "Ui_Pleasure",
   "Angry_": "Ui_Anger",
   "Sad_": "Ui_Sorrow",
   "Surprise_": "Ui_Surprise"
  }
 },
 {
  "id": "Uros",
  "name": "乌洛斯",
  "en": "Uros",
  "desc": "兽人 · 4 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Uros/phone-avatar.png",
   "present": "assets/art/Uros/present.png",
   "album": "assets/art/Uros/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Uros",
    "dir": "assets/spine/Uros",
    "name": "默认",
    "desc": "基础外观（68 动作）",
    "voiceSkin": ""
   },
   {
    "id": "UrosSkin1",
    "dir": "assets/spine/UrosSkin1",
    "name": "学生会长前辈",
    "desc": "乌洛斯往返于兽人村和教团，引导误入歧途之…（68 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "UrosSkin2",
    "dir": "assets/spine/UrosSkin2",
    "name": "湖边钓鱼大师",
    "desc": "乌洛斯外表严肃神秘，但假日里喜欢悠闲钓鱼…（68 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "UrosSkin3",
    "dir": "assets/spine/UrosSkin3",
    "name": "风暴中的黑翼",
    "desc": "从傍晚到黎明守护艾利亚斯的守护天使。似乎…（68 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Snake_Head_1_CT"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Snake_Head_1_CT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Uros_Touch1",
     "Uros_Touch1_1",
     "Uros_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Uros_Touch2",
     "Uros_Touch2_1",
     "Uros_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Uros_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Uros_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Uros_TickleStart1"
    ],
    "voiceMid": [
     "Uros_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Uros_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Uros_Surprise1",
   "Uros_Hmm1",
   "Uros_Yes1",
   "Uros_Touch1"
  ],
  "upsetVoice": [
   "Uros_Anger1",
   "Uros_No1",
   "Uros_Anger2",
   "Uros_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Uros_CallPlayer1",
   "Uros_Sorrow1",
   "Uros_Hmm2",
   "Uros_TickleStart1"
  ],
  "greetVoice": [
   "Uros_Greeting",
   "Uros_Lobby",
   "Uros_Spawn1",
   "Uros_Joy1",
   "Uros_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Close_1",
     "Close_2",
     "Close_3",
     "Close_4",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Panic_7",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Serious_1",
     "Serious_2",
     "Serious_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Cool_1",
     "Cool_2",
     "Mad_1",
     "Mad_2",
     "Mad_3",
     "Mad_4",
     "Mad_5",
     "Mad_6",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Uros_Joy",
   "Proud_": "Uros_Pleasure",
   "Angry_": "Uros_Anger",
   "Sad_": "Uros_Sorrow",
   "Surprise_": "Uros_Surprise"
  }
 },
 {
  "id": "Vela",
  "name": "贝拉",
  "en": "Vela",
  "desc": "幽灵 · 4 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Vela/phone-avatar.png",
   "present": "assets/art/Vela/present.png",
   "album": "assets/art/Vela/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Vela",
    "dir": "assets/spine/Vela",
    "name": "默认",
    "desc": "基础外观（58 动作）",
    "voiceSkin": ""
   },
   {
    "id": "VelaSkin1",
    "dir": "assets/spine/VelaSkin1",
    "name": "充满存在感的兔子装",
    "desc": "研究如何显得存在感十足的贝拉选择的服装。…（58 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "VelaSkin2",
    "dir": "assets/spine/VelaSkin2",
    "name": "充满存在感的人鱼装",
    "desc": "贝拉很喜欢在妖精王国剧场看到的电影，于是…（58 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "VelaSkin3",
    "dir": "assets/spine/VelaSkin3",
    "name": "存在感十足的九尾狐",
    "desc": "变身成迷人九尾狐模样的贝拉。在听到有趣的…（58 动作）",
    "voiceSkin": "_Skin3"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_F",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [
    "NeckLace_Ac"
   ],
   "tail": [
    "Pig Tail"
   ],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Vela_Touch1",
     "Vela_Touch1_1",
     "Vela_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Vela_Touch2",
     "Vela_Touch2_1",
     "Vela_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Vela_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Vela_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Vela_TickleStart1"
    ],
    "voiceMid": [
     "Vela_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Vela_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ko"
  ],
  "pokeVoice": [
   "Vela_Surprise1",
   "Vela_Hmm1",
   "Vela_Yes1",
   "Vela_Touch1"
  ],
  "upsetVoice": [
   "Vela_Anger1",
   "Vela_No1",
   "Vela_Anger2",
   "Vela_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Vela_CallPlayer1",
   "Vela_Sorrow1",
   "Vela_Hmm2",
   "Vela_TickleStart1"
  ],
  "greetVoice": [
   "Vela_Greeting",
   "Vela_Lobby",
   "Vela_Spawn1",
   "Vela_Joy1",
   "Vela_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Angry_9",
     "Angry_10",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Happy_8",
     "Happy_9",
     "Happy_10",
     "Happy_11",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Panic_6",
     "Panic_7",
     "Panic_8",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Sad_9",
     "Sad_10"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Shy_1",
     "Shy_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Vela_Joy",
   "Proud_": "Vela_Pleasure",
   "Angry_": "Vela_Anger",
   "Sad_": "Vela_Sorrow",
   "Surprise_": "Vela_Surprise"
  }
 },
 {
  "id": "Velvet",
  "name": "薇尔薇特",
  "en": "Velvet",
  "desc": "魔女 · 3 套外观",
  "tag": "🧙",
  "art": {
   "avatar": "assets/art/Velvet/phone-avatar.png",
   "present": "assets/art/Velvet/present.png",
   "album": "assets/art/Velvet/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Velvet",
    "dir": "assets/spine/Velvet",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   },
   {
    "id": "VelvetSkin1",
    "dir": "assets/spine/VelvetSkin1",
    "name": "停牌警察",
    "desc": "薇尔薇特决定把对权力的渴望发泄到别的领域…（43 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "VelvetSkin2",
    "dir": "assets/spine/VelvetSkin2",
    "name": "挥击与应援",
    "desc": "薇尔薇特自信满满地说自己开发了新的应援方…（43 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "S2_Head_Root"
   ],
   "headTop": [
    "S2_Hair_Root"
   ],
   "face": [
    "S2_Face"
   ],
   "mouth": [
    "S2_F_Mouth"
   ],
   "cheekL": [
    "S2_F_Ball_L_Root"
   ],
   "cheekR": [
    "S2_F_Ball_Root"
   ],
   "belly": [],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "S2_F_Ball_Root"
   ],
   "ballMoveP": [
    "S2_F_Ball_R_Root",
    "S2_F_Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "S2_Head_Root"
   ],
   "tickle": [
    "Character_Tickle"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Velvet_Touch1",
     "Velvet_Touch1_1",
     "Velvet_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Velvet_Touch2",
     "Velvet_Touch2_1",
     "Velvet_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Velvet_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Velvet_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Velvet_TickleStart1"
    ],
    "voiceMid": [
     "Velvet_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Velvet_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Velvet_Surprise1",
   "Velvet_Hmm1",
   "Velvet_Yes1",
   "Velvet_Touch1"
  ],
  "upsetVoice": [
   "Velvet_Anger1",
   "Velvet_No1",
   "Velvet_Anger2",
   "Velvet_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Velvet_CallPlayer1",
   "Velvet_Sorrow1",
   "Velvet_Hmm2",
   "Velvet_TickleStart1"
  ],
  "greetVoice": [
   "Velvet_Greeting",
   "Velvet_Lobby",
   "Velvet_Spawn1",
   "Velvet_Joy1",
   "Velvet_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sulky_1",
     "Sulky_2",
     "Sulky_3",
     "Sulky_4",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Velvet_Joy",
   "Proud_": "Velvet_Pleasure",
   "Angry_": "Velvet_Anger",
   "Sad_": "Velvet_Sorrow",
   "Surprise_": "Velvet_Surprise"
  }
 },
 {
  "id": "Veroo",
  "name": "贝鲁",
  "en": "Veroo",
  "desc": "幽灵 · 1 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/Veroo/phone-avatar.png",
   "present": "assets/art/Veroo/present.png",
   "album": "assets/art/Veroo/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Veroo",
    "dir": "assets/spine/Veroo",
    "name": "默认",
    "desc": "基础外观（53 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_HCT"
   ],
   "headTop": [
    "Hair_F_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_HCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Dizzy_1",
    "Dizzy_2"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Happy_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Veroo_Touch1",
     "Veroo_Touch1_1",
     "Veroo_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Veroo_Touch2",
     "Veroo_Touch2_1",
     "Veroo_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Veroo_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Veroo_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Veroo_TickleStart1"
    ],
    "voiceMid": [
     "Veroo_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Veroo_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Veroo_Surprise1",
   "Veroo_Hmm1",
   "Veroo_Yes1",
   "Veroo_Touch1"
  ],
  "upsetVoice": [
   "Veroo_Anger1",
   "Veroo_No1",
   "Veroo_Anger2",
   "Veroo_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Veroo_CallPlayer1",
   "Veroo_Sorrow1",
   "Veroo_Hmm2",
   "Veroo_TickleStart1"
  ],
  "greetVoice": [
   "Veroo_Greeting",
   "Veroo_Lobby",
   "Veroo_Spawn1",
   "Veroo_Joy1",
   "Veroo_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Closed_1",
     "Dizzy_1",
     "Dizzy_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Happy_7",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Aiming_1",
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Laugh_1",
     "Laugh_2",
     "Mad_1",
     "Mad_2",
     "Sulky_1",
     "Sulky_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Veroo_Joy",
   "Proud_": "Veroo_Pleasure",
   "Angry_": "Veroo_Anger",
   "Sad_": "Veroo_Sorrow",
   "Surprise_": "Veroo_Surprise"
  }
 },
 {
  "id": "Vivi",
  "name": "薇薇",
  "en": "Vivi",
  "desc": "龙族 · 6 套外观",
  "tag": "🐉",
  "art": {
   "avatar": "assets/art/Vivi/phone-avatar.png",
   "present": "assets/art/Vivi/present.png",
   "album": "assets/art/Vivi/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Vivi",
    "dir": "assets/spine/Vivi",
    "name": "默认",
    "desc": "基础外观（62 动作）",
    "voiceSkin": ""
   },
   {
    "id": "ViviSkin1",
    "dir": "assets/spine/ViviSkin1",
    "name": "最后的黑幕",
    "desc": "最后的黑幕（62 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "ViviSkin2",
    "dir": "assets/spine/ViviSkin2",
    "name": "魅惑龙族",
    "desc": "魅惑龙族（62 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "ViviSkin3",
    "dir": "assets/spine/ViviSkin3",
    "name": "满心魔法",
    "desc": "满心魔法（62 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "ViviSkin4",
    "dir": "assets/spine/ViviSkin4",
    "name": "浸染的灰幕",
    "desc": "浸染的灰幕（62 动作）",
    "voiceSkin": "_Skin4"
   },
   {
    "id": "ViviSkin5",
    "dir": "assets/spine/ViviSkin5",
    "name": "漆黑暗黑天鹅",
    "desc": "漆黑暗黑天鹅（62 动作）",
    "voiceSkin": "_Skin5"
   }
  ],
  "bones": {
   "head": [
    "Head",
    "Head_RCT"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [],
   "earL": [
    "Ear_L",
    "Ear_R_0"
   ],
   "earR": [
    "Ear_R_0"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head",
    "Head_RCT"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Vivi_Touch1",
     "Vivi_Touch1_1",
     "Vivi_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Vivi_Touch2",
     "Vivi_Touch2_1",
     "Vivi_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Vivi_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Vivi_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Vivi_TickleStart1"
    ],
    "voiceMid": [
     "Vivi_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Vivi_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Vivi_Surprise1",
   "Vivi_Hmm1",
   "Vivi_Yes1",
   "Vivi_Touch1"
  ],
  "upsetVoice": [
   "Vivi_Anger1",
   "Vivi_No1",
   "Vivi_Anger2",
   "Vivi_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Vivi_CallPlayer1",
   "Vivi_Sorrow1",
   "Vivi_Hmm2",
   "Vivi_TickleStart1"
  ],
  "greetVoice": [
   "Vivi_Greeting",
   "Vivi_Lobby",
   "Vivi_Spawn1",
   "Vivi_Joy1",
   "Vivi_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Eat_3",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Panic_4",
     "Panic_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Sad_8",
     "Serious_1",
     "Serious_2",
     "Serious_3",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Laugh_1",
     "Laugh_2",
     "Mad_1",
     "Mad_2",
     "Mad_3",
     "Nope_1",
     "Nope_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Shy_4",
     "Smile_1",
     "Smile_2",
     "Sulky_1",
     "Sulky_2",
     "Talk_1",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Vivi_Joy",
   "Proud_": "Vivi_Pleasure",
   "Angry_": "Vivi_Anger",
   "Sad_": "Vivi_Sorrow",
   "Surprise_": "Vivi_Surprise"
  }
 },
 {
  "id": "xXionx",
  "name": "x锡安x",
  "en": "xXionx",
  "desc": "幽灵 · 6 套外观",
  "tag": "👻",
  "art": {
   "avatar": "assets/art/xXionx/phone-avatar.png",
   "present": "assets/art/xXionx/present.png",
   "album": "assets/art/xXionx/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "xXionx",
    "dir": "assets/spine/xXionx",
    "name": "默认",
    "desc": "基础外观（63 动作）",
    "voiceSkin": ""
   },
   {
    "id": "xXionxSkin1",
    "dir": "assets/spine/xXionxSkin1",
    "name": "黑色兔子",
    "desc": "好像认真对待了暗网里开玩笑说的“面积越小…（63 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "xXionxSkin2",
    "dir": "assets/spine/xXionxSkin2",
    "name": "黑暗兼职生",
    "desc": "突破黑暗便利店，拒绝赊账的冷酷兼职生。偶…（63 动作）",
    "voiceSkin": "_Skin2"
   },
   {
    "id": "xXionxSkin3",
    "dir": "assets/spine/xXionxSkin3",
    "name": "暗网枪手",
    "desc": "枪手与暗网结合的惊人幻想cosplay，…（63 动作）",
    "voiceSkin": "_Skin3"
   },
   {
    "id": "xXionxSkin4",
    "dir": "assets/spine/xXionxSkin4",
    "name": "暗星 ★ 爆裂",
    "desc": "像爆裂中二病般施展华丽魔法的大魔法师暗星…（63 动作）",
    "voiceSkin": "_Skin4"
   },
   {
    "id": "xXionxSkin5",
    "dir": "assets/spine/xXionxSkin5",
    "name": "深渊行者霸主",
    "desc": "据说能穿行于深渊未知领域的传说级深渊行者…（63 动作）",
    "voiceSkin": "_Skin5"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_Root"
   ],
   "belly": [
    "Body_1",
    "Gun_Body"
   ],
   "neck": [],
   "tail": [],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_Root"
   ],
   "ballMoveP": [
    "Ball_R_Root",
    "Ball_Root"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Gun_Body"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2",
    "Panic_3"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "xXionx_Touch1",
     "xXionx_Touch1_1",
     "xXionx_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "xXionx_Touch2",
     "xXionx_Touch2_1",
     "xXionx_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "xXionx_DutchRubEnd1"
    ],
    "voiceEnd": [
     "xXionx_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "xXionx_TickleStart1"
    ],
    "voiceMid": [
     "xXionx_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "xXionx_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "xXionx_Surprise1",
   "xXionx_Hmm1",
   "xXionx_Yes1",
   "xXionx_Touch1"
  ],
  "upsetVoice": [
   "xXionx_Anger1",
   "xXionx_No1",
   "xXionx_Anger2",
   "xXionx_DutchRubEnd1"
  ],
  "hungryVoice": [
   "xXionx_CallPlayer1",
   "xXionx_Sorrow1",
   "xXionx_Hmm2",
   "xXionx_TickleStart1"
  ],
  "greetVoice": [
   "xXionx_Greeting",
   "xXionx_Lobby",
   "xXionx_Spawn1",
   "xXionx_Joy1",
   "xXionx_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Happy_6",
     "Panic_1",
     "Panic_2",
     "Panic_3",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Serious_1",
     "Serious_2",
     "Surprise_1",
     "Surprise_2"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Ganzi_1",
     "Ganzi_2",
     "Ganzi_3",
     "Ganzi_4",
     "Ganzi_5",
     "Laugh_1",
     "Laugh_2",
     "Nope_1",
     "Nope_2",
     "Nope_3",
     "Point_1",
     "Point_2",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Sulky_1",
     "Sulky_2",
     "Think_1",
     "Think_2",
     "Aside_1",
     "Aside_2",
     "Idle_3",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "xXionx_Joy",
   "Proud_": "xXionx_Pleasure",
   "Angry_": "xXionx_Anger",
   "Sad_": "xXionx_Sorrow",
   "Surprise_": "xXionx_Surprise"
  }
 },
 {
  "id": "Yomi",
  "name": "优米",
  "en": "Yomi",
  "desc": "神秘 · 3 套外观",
  "tag": "✨",
  "art": {
   "avatar": "assets/art/Yomi/phone-avatar.png",
   "present": "assets/art/Yomi/present.png",
   "album": "assets/art/Yomi/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Yomi",
    "dir": "assets/spine/Yomi",
    "name": "默认",
    "desc": "基础外观（56 动作）",
    "voiceSkin": ""
   },
   {
    "id": "YomiSkin1",
    "dir": "assets/spine/YomiSkin1",
    "name": "魔法月光",
    "desc": "接受月亮之力守护世界的魔法少女优米。喊着…（56 动作）",
    "voiceSkin": "_Skin1"
   },
   {
    "id": "YomiSkin2",
    "dir": "assets/spine/YomiSkin2",
    "name": "夜海水手",
    "desc": "优米喜欢在夜晚驾驶自己的船悠然航行。虽说…（56 动作）",
    "voiceSkin": "_Skin2"
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1",
    "Pelvis"
   ],
   "neck": [],
   "tail": [
    "Tail_L"
   ],
   "earL": [],
   "earR": [],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1",
    "Pelvis"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1",
    "Surprise_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Surprise_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Happy_1"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Happy_1"
   ],
   "serious": [
    "Happy_1"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Yomi_Touch1",
     "Yomi_Touch1_1",
     "Yomi_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Yomi_Touch2",
     "Yomi_Touch2_1",
     "Yomi_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Yomi_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Yomi_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Yomi_TickleStart1"
    ],
    "voiceMid": [
     "Yomi_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Yomi_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Yomi_Surprise1",
   "Yomi_Hmm1",
   "Yomi_Yes1",
   "Yomi_Touch1"
  ],
  "upsetVoice": [
   "Yomi_Anger1",
   "Yomi_No1",
   "Yomi_Anger2",
   "Yomi_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Yomi_CallPlayer1",
   "Yomi_Sorrow1",
   "Yomi_Hmm2",
   "Yomi_TickleStart1"
  ],
  "greetVoice": [
   "Yomi_Greeting",
   "Yomi_Lobby",
   "Yomi_Spawn1",
   "Yomi_Joy1",
   "Yomi_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Sad_6",
     "Sad_7",
     "Surprise_1",
     "Surprise_2",
     "Surprise_3",
     "Surprise_4"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Blank_1",
     "Blank_2",
     "Blank_3",
     "Blank_4",
     "Dance_1",
     "Dance_2",
     "Dance_3",
     "Pray_1",
     "Pray_2",
     "Pray_3",
     "Pray_4",
     "Shy_1",
     "Shy_2",
     "Shy_3",
     "Talk_1",
     "Talk_2",
     "Talk_3",
     "Aside_1",
     "Aside_2",
     "Spawn_1",
     "Upgrade_1",
     "Upgrade_2"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Yomi_Joy",
   "Proud_": "Yomi_Pleasure",
   "Angry_": "Yomi_Anger",
   "Sad_": "Yomi_Sorrow",
   "Surprise_": "Yomi_Surprise"
  }
 },
 {
  "id": "Yumimi",
  "name": "刘美美",
  "en": "Yumimi",
  "desc": "兽人 · 1 套外观",
  "tag": "🐾",
  "art": {
   "avatar": "assets/art/Yumimi/phone-avatar.png",
   "present": "assets/art/Yumimi/present.png",
   "album": "assets/art/Yumimi/album-strict.webp"
  },
  "skinCandidates": [
   "Normal",
   "default"
  ],
  "models": [
   {
    "id": "Yumimi",
    "dir": "assets/spine/Yumimi",
    "name": "默认",
    "desc": "基础外观（43 动作）",
    "voiceSkin": ""
   }
  ],
  "bones": {
   "head": [
    "Head"
   ],
   "headTop": [
    "Hair_Front_Root",
    "Head"
   ],
   "face": [
    "Face"
   ],
   "mouth": [
    "Mouth_Root",
    "Mouth"
   ],
   "cheekL": [
    "Ball_L_Root"
   ],
   "cheekR": [
    "Ball_R"
   ],
   "belly": [
    "Body_1"
   ],
   "neck": [],
   "tail": [
    "Tail_Root"
   ],
   "earL": [
    "Ear_L_Root",
    "Ear_L"
   ],
   "earR": [
    "Ear_R_Root"
   ],
   "ballMove": [
    "Character_Ball_Move",
    "Ball_R"
   ],
   "ballMoveP": [
    "Ball_R"
   ],
   "pat": [
    "Character_Pat",
    "Head"
   ],
   "tickle": [
    "Character_Tickle",
    "Body_1"
   ]
  },
  "pinch": {
   "ok": true,
   "reason": ""
  },
  "anim": {
   "idle": [
    "Idle_1"
   ],
   "patIdle": [
    "Pat_Idle"
   ],
   "patEnd": [
    "Pat_End",
    "Idle_1"
   ],
   "tickleIdle": [
    "Tickle_Idle_1"
   ],
   "tickleIdle2": [
    "Tickle_Idle_2"
   ],
   "tickleEnd": [
    "Tickle_End",
    "Idle_1"
   ],
   "touchIdle": [
    "Touch_Idle"
   ],
   "touchEnd": [
    "Touch_End",
    "Idle_1"
   ],
   "smash": [
    "Smash_End_1"
   ],
   "smash2": [
    "Smash_End_2"
   ],
   "eat": [
    "Eat_1",
    "Eat_2"
   ],
   "happy": [
    "Happy_1",
    "Happy_2",
    "Happy_3",
    "Happy_4",
    "Happy_5"
   ],
   "proud": [
    "Happy_1"
   ],
   "angry": [
    "Angry_1",
    "Angry_2",
    "Angry_3"
   ],
   "sad": [
    "Sad_1",
    "Sad_2",
    "Sad_3",
    "Sad_4"
   ],
   "surprise": [
    "Happy_1"
   ],
   "dizzy": [
    "Happy_1"
   ],
   "panic": [
    "Panic_1",
    "Panic_2"
   ],
   "taunt": [
    "Happy_1"
   ],
   "smell": [
    "Smell_1"
   ],
   "serious": [
    "Serious_1",
    "Serious_2"
   ],
   "close": [
    "Close_1"
   ]
  },
  "actions": {
   "pinch": {
    "label": "捏脸",
    "icon": "🤏",
    "zone": "cheek",
    "gesture": "drag",
    "deform": "cheek",
    "loop": "touchIdle",
    "end": "touchEnd",
    "sfxStart": {
     "name": "SFX_Common_PullCheek",
     "volume": 0.65
    },
    "sfxEnd": {
     "name": "SFX_Common_PullCheekEnd",
     "volume": 0.65
    },
    "voice": [
     "Yumimi_Touch1",
     "Yumimi_Touch1_1",
     "Yumimi_Touch1_2"
    ]
   },
   "pat": {
    "label": "摸头",
    "icon": "🖐",
    "zone": "head",
    "gesture": "drag",
    "loop": "patIdle",
    "end": "patEnd",
    "sfx": {
     "name": "SFX_Pat",
     "volume": 0.28
    },
    "sfxIntervalMs": 520,
    "fx": {
     "kind": "heart",
     "duration": 1600
    },
    "fxIntervalMs": 900,
    "voice": [
     "Yumimi_Touch2",
     "Yumimi_Touch2_1",
     "Yumimi_Touch2_2"
    ]
   },
   "bonk": {
    "label": "敲头",
    "icon": "🔨",
    "zone": "head",
    "gesture": "tap",
    "once": "smash",
    "second": "smash2",
    "sfx": [
     {
      "name": "SFX_DutchRub_Default",
      "volume": 0.62
     },
     {
      "name": "SFX_DutchRub_Max",
      "volume": 0.68
     }
    ],
    "fx": {
     "kind": "dutchRub",
     "duration": 1180
    },
    "voice": [
     "Yumimi_DutchRubEnd1"
    ],
    "voiceEnd": [
     "Yumimi_DutchRubEnd2"
    ]
   },
   "belly": {
    "label": "摸肚子",
    "icon": "🫳",
    "zone": "belly",
    "gesture": "drag",
    "loop": "tickleIdle",
    "loop2": "tickleIdle2",
    "end": "tickleEnd",
    "sfx": {
     "name": "SFX_Tickle",
     "volume": 0.38
    },
    "voice": [
     "Yumimi_TickleStart1"
    ],
    "voiceMid": [
     "Yumimi_TickleDuring1"
    ],
    "voiceEnd": []
   },
   "feed": {
    "label": "喂食",
    "icon": "🍖",
    "zone": "mouth",
    "gesture": "drop",
    "once": "eat",
    "voice": [
     "Yumimi_Eat1"
    ]
   }
  },
  "voiceDurations": {},
  "voiceLang": "ko",
  "voiceLangs": [
   "ja",
   "ko"
  ],
  "pokeVoice": [
   "Yumimi_Surprise1",
   "Yumimi_Hmm1",
   "Yumimi_Yes1",
   "Yumimi_Touch1"
  ],
  "upsetVoice": [
   "Yumimi_Anger1",
   "Yumimi_No1",
   "Yumimi_Anger2",
   "Yumimi_DutchRubEnd1"
  ],
  "hungryVoice": [
   "Yumimi_CallPlayer1",
   "Yumimi_Sorrow1",
   "Yumimi_Hmm2",
   "Yumimi_TickleStart1"
  ],
  "greetVoice": [
   "Yumimi_Greeting",
   "Yumimi_Lobby",
   "Yumimi_Spawn1",
   "Yumimi_Joy1",
   "Yumimi_Touch2"
  ],
  "moodActs": [
   "happy",
   "proud",
   "taunt",
   "smell",
   "serious",
   "dizzy"
  ],
  "animPanel": [
   {
    "group": "互动",
    "items": [
     "Eat_1",
     "Eat_2",
     "Pat_End",
     "Pat_Idle",
     "Smash_End_1",
     "Smash_End_2",
     "Tickle_End",
     "Tickle_Idle_1",
     "Tickle_Idle_2",
     "Touch_End",
     "Touch_Idle"
    ]
   },
   {
    "group": "情绪",
    "items": [
     "Angry_1",
     "Angry_2",
     "Angry_3",
     "Angry_4",
     "Angry_5",
     "Angry_6",
     "Angry_7",
     "Angry_8",
     "Close_1",
     "Close_2",
     "Happy_1",
     "Happy_2",
     "Happy_3",
     "Happy_4",
     "Happy_5",
     "Panic_1",
     "Panic_2",
     "Sad_1",
     "Sad_2",
     "Sad_3",
     "Sad_4",
     "Sad_5",
     "Serious_1",
     "Serious_2",
     "Smell_1"
    ]
   },
   {
    "group": "待机",
    "items": [
     "Idle_1",
     "Idle_2",
     "Idle_3"
    ]
   },
   {
    "group": "其他形态",
    "items": [
     "Attack_1",
     "Blank_1",
     "Blank_2",
     "Blank_3"
    ]
   }
  ],
  "animLabel": {},
  "voiceForAnim": {},
  "voiceForAnimSeries": {
   "Happy_": "Yumimi_Joy",
   "Proud_": "Yumimi_Pleasure",
   "Angry_": "Yumimi_Anger",
   "Sad_": "Yumimi_Sorrow",
   "Surprise_": "Yumimi_Surprise"
  }
 }
];
