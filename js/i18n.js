/* ------------------------------------------------------------------
 * i18n.js —— 界面多语言（第三十六轮）
 *
 * · 默认简体中文；可切 English / 日本語 / 한국어（右上角语言按钮循环切换，存 localStorage）
 * · 人物名 / 食物名来自 js/names-i18n.js（用户整理的译名表，权威）；
 *   缺失时回退英文名 → 中文名
 * · 界面文案按《嘟嘟脸恶作剧》的软萌语气翻译（信达雅：不逐字、要可爱、要顺口）
 * · 动作标签（生气 1 / 被摸头…）用「精确表 + 词表」两种方式翻译，未收录的回退中文
 * ------------------------------------------------------------------ */
window.I18N = (function () {
  'use strict';

  var LANGS = ['zh', 'en', 'ja', 'ko'];
  var LANG_NAME = { zh: '中文', en: 'English', ja: '日本語', ko: '한국어' };

  /* 语音语言的名字（语言按钮/提示里用；语音本身只有日语/韩语两种） */
  var VOICE_LANG_NAME = {
    zh: { ja: '日语', ko: '韩语', en: '英语' },
    en: { ja: 'Japanese', ko: 'Korean', en: 'English' },
    ja: { ja: '日本語', ko: '韓国語', en: '英語' },
    ko: { ja: '일본어', ko: '한국어', en: '영어' },
  };

  /* ---------------- 界面文案 ---------------- */
  var S = {
    zh: {
      'btn.actions': '动作', 'btn.chars': '角色', 'btn.auto': '自动', 'btn.update': '更新',
      'act.pat': '摸头', 'act.bonk': '敲头', 'act.pinch': '捏脸', 'act.belly': '摸肚子', 'act.feed': '喂食',
      /* ★ 第四十六轮：背景音乐 + 四通道音量 */
      'btn.musicOn': '音乐:开', 'btn.musicOff': '音乐:关', 'btn.musicPick': '换音乐', 'btn.volume': '音量',
      /* ★ 第七十四轮（用户要求）：动作 / 语音面板挡人物 → 加界面透明度调节 */
      'btn.alpha': '透明',
      'alpha.title': '界面透明度', 'alpha.value': '不透明度', 'alpha.hint': '拉低后动作 / 语音面板会变透明，能看见后面的角色；点面板外或 Esc 收起面板',
      'alpha.reset': '恢复 100%',
      'vol.title': '音量', 'vol.master': '总音量', 'vol.music': '音乐', 'vol.voice': '语音', 'vol.sfx': '音效',
      'vol.hint': '只影响本应用（音乐 · 语音 · 音效），不改变其他应用',
      'bubble.musicOn': '音乐开啦～', 'bubble.musicOff': '音乐先关掉～',
      'loader.title': '小伙伴正在赶来…', 'loader.tip': '正在加载模型', 'loader.tipModel': '加载模型…',
      'loader.callChar': '正在请 {name} 过来…', 'loader.skin': '切换外观中…',
      'loader.charFail': '这个角色加载失败了，正在退回…', 'loader.skinFail': '这个外观加载失败，正在退回上一个…',
      'loader.modelFail': '模型加载失败：{msg}',
      'panel.title': '自主选择', 'panel.tabAnim': '动作表情', 'panel.tabVoice': '语音图鉴',
      'skin.title': '选择角色与皮肤', 'skin.chars': '角色', 'skin.search': '搜索角色（共 {n} 个）',
      'skin.outfits': '外观', 'skin.outfitsOf': '{name}的外观',
      'food.title': '给{name}喂食', 'food.search': '搜索食物…',
      'food.tip': '长按食物拖到嘴边喂她 · 按住标题可拖动面板 · 好感图标见', 'food.love': '超喜欢', 'food.like': '喜欢',
      'food.plain': '一般', 'food.hate': '讨厌',
      'food.none': '没有匹配的食物', 'char.none': '没有匹配的角色',
      'char.noPinch': '无捏脸', 'char.npc': 'NPC',
      /* ★ 第六十七轮：语音图鉴按皮肤分区 + 完整度 + 皮肤语音开关；动作图鉴顶部写当前外观 */
      'voice.summary': '语音共 {n} 条 · 缺中文台词 {m} 条',
      'voice.count': '{n} 条',
      'voice.defaultSkin': '默认外观',
      'voice.onlyJa': '仅日语',
      'voice.onlyKo': '仅韩语',
      'voice.alias': '共用录音',
      'voice.noText': '（官方未收录台词）',
      'voice.noSkinVoice': '这套外观官方没有专属语音，播的是本体语音',
      'voice.skinFirstOff': '皮肤语音：跟随语言',
      'voice.skinFirstOn': '皮肤语音：优先皮肤（跨语言）',
      'voice.skinFirstHint': '跟随语言 = 选韩语就播韩语；优先皮肤 = 本语言缺这套皮肤时用其它语言的皮肤语音',
      'anim.summary': '当前外观：{skin} · {n} 个动作',
      'voice.outfitN': '第{n}套外观',
      'voice.numberHint': '名字末尾的数字 = 同一条语音的第几个录音版本（不是皮肤编号）',
      'grp.互动': '互动', 'grp.情绪': '情绪', 'grp.待机': '待机', 'grp.迷你形态': '迷你形态',
      'bubble.turn': '轮到我啦～', 'bubble.skin': '换个样子～好看吗？', 'bubble.back': '你回来啦！',
      'bubble.charFailBack': '这个角色加载失败了，先换回来～', 'bubble.fail': '加载失败了…',
      'bubble.feedWhere': '食物要放到嘴边呀～', 'bubble.autoOn': '我会自己找乐子啦～',
      'bubble.autoOff': '安静一会儿…', 'bubble.toLang': '换成{lang}啦～',
      'bubble.onlyVoice': '{name}只有{lang}语音哦～', 'bubble.noPinch': '这个角色捏不了脸哦～',
      'lang.unique': '（唯一）',
      'btn.title.update': '检查更新（当前版本 v{v}）',
      'upd.checking': '送达中',
      'upd.notConfigured': '更新源尚未配置，当前版本 v{v}（等作者发布 GitHub 地址后即可在线更新）',
      'upd.latest': '舒胖看了看：已经是最新版本啦（v{v}）',
      'upd.syncing': '舒胖正在送达最新版本…',
      'upd.forceSync': '强制同步中（忽略公告是否变化）…',
      'upd.syncDone': '舒胖把最新版本送到啦（v{ver}）',
      'upd.syncNoChange': '舒胖跑了一趟：内容已经是最新的（v{ver}）',
      'upd.noSyncBridge': '检测到 v{remote} 有变化，但本程序版本较旧，请重新下载一次新版程序',
      'upd.fail': '检查更新失败：{msg}',
      'upd.pcConfirm': '发现新版本 v{remote}（当前 v{local}）。\n立即在线热更新？下载完成后会自动替换文件并重启，无需重新安装。',
      'upd.downloading': '正在下载更新包…请保持网络畅通',
      'upd.done': '舒胖送完啦！正在重新加载…',
      'upd.error': '更新失败：{msg}',
      'upd.blocked': '线路被拦住了（403，GitHub 接口限流）。换个网络再点一次「更新」，或开代理后重试。',
      'upd.androidConfirm': '发现新版本 v{remote}（当前 v{local}）。\n安卓端需要安装新 APK，现在打开发布页下载吗？',
      'upd.androidNoUrl': '发现新版本 v{remote}，但发布页地址未配置',
      'upd.androidOpenFail': '打开发布页失败：{msg}',
      'upd.web': '发现新版本 v{remote}：网页版以托管站点为准，刷新页面即可获取最新版',
      'btn.notice': '公告', 'notice.title': '📢 公告', 'notice.ok': '知道了', 'notice.dontShow': '不再提示', 'notice.newVer': 'GitHub 最新版本 v{remote}，点「更新」按钮同步', 'notice.none': '暂无公告', 'notice.fetching': '正在获取公告…',
      'upd.noZipUrl': '发现新版本 v{remote}，但热更新包地址未配置',
      'upd.openFail': '打不开浏览器：{msg}',
      'upd.offline': '当前没有网络，连上网再试一次吧',
      'upd.noVersion': '更新源还没有版本号（作者还没发布新公告）',
      'upd.androidHot': '发现新版本 v{remote}（当前 v{local}）。\n立即在线热更新？下载完成后自动生效，无需重新安装。',
    },
    en: {
      'btn.actions': 'Actions', 'btn.chars': 'Chars', 'btn.auto': 'Auto', 'btn.update': 'Update',
      'act.pat': 'Pat', 'act.bonk': 'Bonk', 'act.pinch': 'Pinch', 'act.belly': 'Tummy', 'act.feed': 'Feed',
      'btn.musicOn': 'Music: On', 'btn.musicOff': 'Music: Off', 'btn.musicPick': 'Tracks', 'btn.volume': 'Volume',
      'btn.alpha': 'Opacity',
      'alpha.title': 'UI opacity', 'alpha.value': 'Opacity', 'alpha.hint': 'Lower it to see the character through the action / voice panel; click outside the panel or press Esc to close it',
      'alpha.reset': 'Reset to 100%',
      'vol.title': 'Volume', 'vol.master': 'Master', 'vol.music': 'Music', 'vol.voice': 'Voice', 'vol.sfx': 'SFX',
      'vol.hint': 'This app only (music · voice · SFX)',
      'bubble.musicOn': 'Music on~', 'bubble.musicOff': 'Music off~',
      'loader.title': 'Your buddy is on the way…', 'loader.tip': 'Loading model', 'loader.tipModel': 'Loading model…',
      'loader.callChar': 'Calling {name} over…', 'loader.skin': 'Changing outfit…',
      'loader.charFail': 'That character failed to load, going back…', 'loader.skinFail': 'Outfit failed to load, reverting…',
      'loader.modelFail': 'Model load failed: {msg}',
      'panel.title': 'Choose & Play', 'panel.tabAnim': 'Actions', 'panel.tabVoice': 'Voice Dex',
      'skin.title': 'Characters & Outfits', 'skin.chars': 'Characters', 'skin.search': 'Search characters ({n})',
      'skin.outfits': 'Outfits', 'skin.outfitsOf': "{name}'s outfits",
      'food.title': 'Feed {name}', 'food.search': 'Search foods…',
      'food.tip': 'Hold a snack and drag it to her mouth · Drag the title to move this panel · Reactions:', 'food.love': 'Love', 'food.like': 'Like',
      'food.plain': 'Meh', 'food.hate': 'Hate',
      'food.none': 'No matching foods', 'char.none': 'No matching characters',
      'char.noPinch': 'No pinch', 'char.npc': 'NPC',
      'voice.summary': '{n} voice lines · {m} without Chinese text',
      'voice.count': '{n} lines',
      'voice.defaultSkin': 'Default look',
      'voice.onlyJa': 'JA only',
      'voice.onlyKo': 'KO only',
      'voice.alias': 'Shared audio',
      'voice.noText': '(no official line)',
      'voice.noSkinVoice': 'This look has no official voice of its own — the base voice is used',
      'voice.skinFirstOff': 'Skin voice: follow language',
      'voice.skinFirstOn': 'Skin voice: skin first (cross-language)',
      'voice.skinFirstHint': 'Follow language = Korean stays Korean; Skin first = use another language voice when this look lacks it',
      'anim.summary': 'Current look: {skin} · {n} actions',
      'voice.outfitN': 'Outfit {n}',
      'voice.numberHint': 'The trailing number = which take of the same line (not a skin number)',
      'grp.互动': 'Play', 'grp.情绪': 'Moods', 'grp.待机': 'Idle', 'grp.迷你形态': 'Mini',
      'bubble.turn': "My turn~!", 'bubble.skin': 'New look~ cute, right?', 'bubble.back': "You're back!",
      'bubble.charFailBack': "That one failed to load, going back~", 'bubble.fail': 'Load failed…',
      'bubble.feedWhere': 'Right at my mouth, please~', 'bubble.autoOn': "I'll play by myself~",
      'bubble.autoOff': 'Quiet time…', 'bubble.toLang': 'Switched to {lang}~',
      'bubble.onlyVoice': '{name} only has {lang} voices~', 'bubble.noPinch': "This one's cheeks can't be pinched~",
      'lang.unique': ' (only)',
      'btn.title.update': 'Check update (current v{v})',
      'upd.checking': 'Delivering…',
      'upd.notConfigured': 'Update source not set up yet (current v{v}) — updates go live once the dev\u2019s GitHub is ready',
      'upd.latest': 'Shoupan checked: you already have the latest (v{v})',
      'upd.syncing': 'Shoupan is delivering the latest version…',
      'upd.forceSync': 'Force syncing (ignoring whether the notice changed)…',
      'upd.syncDone': 'Shoupan delivered the latest version (v{ver})',
      'upd.syncNoChange': 'Shoupan made the round — already up to date (v{ver})',
      'upd.noSyncBridge': 'v{remote} is available, but this build is too old — please download the new build once',
      'upd.fail': 'Update check failed: {msg}',
      'upd.pcConfirm': 'New version v{remote} found (current v{local}).\nHot-update now? It downloads and applies automatically \u2014 no reinstall.',
      'upd.downloading': 'Downloading update\u2026 keep the network on',
      'upd.done': 'Delivered! Reloading\u2026',
      'upd.error': 'Update failed: {msg}',
      'upd.blocked': 'The update line is blocked (403, GitHub rate limit). Retry on another network, or use a proxy.',
      'upd.androidConfirm': 'New version v{remote} found (current v{local}).\nAndroid needs a new APK \u2014 open the release page to download?',
      'upd.androidNoUrl': 'New version v{remote} found, but the release page URL is not set up',
      'upd.androidOpenFail': 'Could not open the release page: {msg}',
      'upd.web': 'New version v{remote}: the hosted site is always the latest \u2014 just refresh the page',
      'btn.notice': 'Notice', 'notice.title': '📢 Announcement', 'notice.ok': 'Got it', 'notice.dontShow': 'Do not show again', 'notice.newVer': 'GitHub latest v{remote} — press Update to sync', 'notice.none': 'No announcement yet', 'notice.fetching': 'Fetching the announcement…',
      'upd.noZipUrl': 'New version v{remote} found, but the update package URL is not set up',
      'upd.openFail': 'Could not open browser: {msg}',
      'upd.offline': 'No network right now — reconnect and try again',
      'upd.noVersion': 'The update source has no version number yet (no new announcement published)',
      'upd.androidHot': 'New version v{remote} found (current v{local}).\nHot-update now? It applies automatically — no reinstall.',
    },
    ja: {
      'btn.actions': 'アクション', 'btn.chars': 'キャラ', 'btn.auto': 'オート', 'btn.update': '更新',
      'act.pat': 'なでなで', 'act.bonk': 'コツン', 'act.pinch': 'つねつね', 'act.belly': 'おなか', 'act.feed': 'ごはん',
      'btn.musicOn': '音楽:オン', 'btn.musicOff': '音楽:オフ', 'btn.musicPick': 'きょく変更', 'btn.volume': '音量',
      'btn.alpha': '透明度',
      'alpha.title': 'UIの透明度', 'alpha.value': '不透明度', 'alpha.hint': 'さげるとアクション / ボイスパネルがすきとおって、うしろのキャラが見えるよ。パネルの外か Esc でとじる',
      'alpha.reset': '100%にもどす',
      'vol.title': '音量', 'vol.master': '全体', 'vol.music': '音楽', 'vol.voice': 'ボイス', 'vol.sfx': '効果音',
      'vol.hint': 'このアプリだけ（音楽・ボイス・効果音）',
      'bubble.musicOn': '音楽スタート〜', 'bubble.musicOff': '音楽とめたよ〜',
      'loader.title': 'なかまがかけてくる…', 'loader.tip': 'モデル読みこみ中', 'loader.tipModel': 'モデル読みこみ中…',
      'loader.callChar': '{name}をよんでる…', 'loader.skin': 'きがえ中…',
      'loader.charFail': 'このキャラはよみこみ失敗、もどる…', 'loader.skinFail': 'このきがえはしっぱい、まえのにもどる…',
      'loader.modelFail': 'モデルよみこみしっぱい：{msg}',
      'panel.title': 'じざいにえらぶ', 'panel.tabAnim': 'アクション', 'panel.tabVoice': 'ボイス図鑑',
      'skin.title': 'キャラときがえ', 'skin.chars': 'キャラ', 'skin.search': 'キャラをさがす（{n}にん）',
      'skin.outfits': 'きがえ', 'skin.outfitsOf': '{name}のきがえ',
      'food.title': '{name}にごはん', 'food.search': 'たべものをさがす…',
      'food.tip': 'ながおしでこうちょうへドラッグ · タイトルをつかむとパネルをうごかせるよ · こうかんアイコン：', 'food.love': 'だいすき', 'food.like': 'すき',
      'food.plain': 'ふつう', 'food.hate': 'にがて',
      'food.none': 'あうたべものがない', 'char.none': 'あうキャラがいない',
      'char.noPinch': 'つめない', 'char.npc': 'NPC',
      'voice.summary': 'ボイス {n} 件 · 中国語セリフなし {m} 件',
      'voice.count': '{n} 件',
      'voice.defaultSkin': 'デフォルト',
      'voice.onlyJa': '日本語のみ',
      'voice.onlyKo': '韓国語のみ',
      'voice.alias': '音源共有',
      'voice.noText': '（公式セリフなし）',
      'voice.noSkinVoice': 'このコーデ専用の公式ボイスはなく、基本ボイスを使います',
      'voice.skinFirstOff': 'コーデボイス：言語に従う',
      'voice.skinFirstOn': 'コーデボイス：コーデ優先（言語またぎ）',
      'voice.skinFirstHint': '言語に従う＝韓国語なら韓国語／コーデ優先＝その言語に無ければ他言語のコーデボイス',
      'anim.summary': 'いまのコーデ：{skin} · アクション {n} 個',
      'voice.outfitN': 'コーデ{n}',
      'voice.numberHint': '末尾の数字は同じセリフの何番目の録音か（コーデ番号ではない）',
      'grp.互动': 'インタラクト', 'grp.情绪': 'きもち', 'grp.待机': 'たいき', 'grp.迷你形态': 'ミニ形態',
      'bubble.turn': 'わたしのばん〜!', 'bubble.skin': 'きがえした〜、かわいい?', 'bubble.back': 'おかえり！',
      'bubble.charFailBack': 'よみこみしっぱい、もどるね〜', 'bubble.fail': 'よみこみしっぱい…',
      'bubble.feedWhere': 'くちもとへちょうだい〜', 'bubble.autoOn': 'ひとりであそぶね〜',
      'bubble.autoOff': 'しずかにする…', 'bubble.toLang': '{lang}にきりかえたよ〜',
      'bubble.onlyVoice': '{name}は{lang}ボイスだけだよ〜', 'bubble.noPinch': 'このこのほっぺはつめないよ〜',
      'lang.unique': '（唯一）',
      'btn.title.update': 'アップデートをチェック（現在 v{v}）',
      'upd.checking': 'おとどけ中',
      'upd.notConfigured': 'アップデート元はまだ設定されてないよ（現在 v{v}）',
      'upd.latest': 'シュパンいわく：もう最新版だよ（v{v}）',
      'upd.syncing': 'シュパンが最新版をおとどけ中…',
      'upd.forceSync': 'きょうせいどうきちゅう（おしらせのへんかはむし）…',
      'upd.syncDone': 'シュパンが最新版をとどけたよ（v{ver}）',
      'upd.syncNoChange': 'シュパンがはしったよ：中身はもう最新（v{ver}）',
      'upd.noSyncBridge': 'v{remote} があるよ、でもこのビルドは古いからしんばんをもう一度ダウンロードしてね',
      'upd.fail': 'アップデートチェックしっぱい：{msg}',
      'upd.pcConfirm': '新しいバージョン v{remote}（現在 v{local}）。\nいますぐホットアップデートする？おわったらじどうでさいきどうするよ。',
      'upd.downloading': 'アップデートをダウンロード中…ネットをつなげてね',
      'upd.done': 'おとどけ完了！さいよみこみ中…',
      'upd.error': 'アップデートしっぱい：{msg}',
      'upd.blocked': 'アップデート回線が止められてるみたい（403）。ネットを変えてもう一度試してね。',
      'upd.androidConfirm': '新しいバージョン v{remote}（現在 v{local}）。\nアンドロイドは新しい APK がいるよ、ばんはいページをあける？',
      'upd.androidNoUrl': '新しいバージョン v{remote}、でもばんはいページが未設定',
      'upd.androidOpenFail': 'ばんはいページがひらけない：{msg}',
      'upd.web': '新しいバージョン v{remote}：ページをさいよみこみしてね',
      'btn.notice': '公告', 'notice.title': '📢 お知らせ', 'notice.ok': 'わかった', 'notice.dontShow': '今後表示しない', 'notice.newVer': 'GitHub のさいしんばん v{remote}、「更新」ボタンで同期してね', 'notice.none': 'お知らせはまだないよ', 'notice.fetching': 'お知らせをとってきてるよ…',
      'upd.noZipUrl': '新しいバージョン v{remote}、でもアップデートパッケージが未設定',
      'upd.openFail': 'ブラウザがひらけない：{msg}',
      'upd.offline': 'ネットにつながってないよ、つないでからまたね',
      'upd.noVersion': 'アップデート元にまだバージョン番号がないよ（新しいお知らせはまだ）',
      'upd.androidHot': '新しいバージョン v{remote}（現在 v{local}）。\nいますぐホットアップデートする？さいインストールいらないよ。',
    },
    ko: {
      'btn.actions': '액션', 'btn.chars': '캐릭', 'btn.auto': '자동', 'btn.update': '업데이트',
      'act.pat': '쓰다듬기', 'act.bonk': '똑', 'act.pinch': '볼 땡기기', 'act.belly': '배 만지기', 'act.feed': '먹이 주기',
      'btn.musicOn': '음악: 켬', 'btn.musicOff': '음악: 끔', 'btn.musicPick': '음악 변경', 'btn.volume': '볼륨',
      'btn.alpha': '투명도',
      'alpha.title': 'UI 투명도', 'alpha.value': '불투명도', 'alpha.hint': '낮추면 액션 / 보이스 패널이 투명해져서 뒤의 캐릭터가 보여요. 패널 밖을 누르거나 Esc로 닫기',
      'alpha.reset': '100%로 되돌리기',
      'vol.title': '볼륨', 'vol.master': '전체', 'vol.music': '음악', 'vol.voice': '보이스', 'vol.sfx': '효과음',
      'vol.hint': '이 앱만 (음악 · 보이스 · 효과음)',
      'bubble.musicOn': '음악 켰어~', 'bubble.musicOff': '음악 껐어~',
      'loader.title': '친구가 달려오는 중…', 'loader.tip': '모델 불러오는 중', 'loader.tipModel': '모델 불러오는 중…',
      'loader.callChar': '{name} 부르는 중…', 'loader.skin': '갈아입는 중…',
      'loader.charFail': '이 캐릭터 불러오기 실패, 돌아가는 중…', 'loader.skinFail': '이 옷 입히기 실패, 이전으로 돌아가는 중…',
      'loader.modelFail': '모델 불러오기 실패: {msg}',
      'panel.title': '골라 겜하기', 'panel.tabAnim': '액션', 'panel.tabVoice': '보이스 도감',
      'skin.title': '캐릭터와 코디', 'skin.chars': '캐릭터', 'skin.search': '캐릭터 검색 ({n}명)',
      'skin.outfits': '코디', 'skin.outfitsOf': '{name}의 코디',
      'food.title': '{name}에게 먹이 주기', 'food.search': '음식 검색…',
      'food.tip': '음식을 길게 눌러 입가로 끌어다 주기 · 제목을 잡으면 패널 이동 · 호감 아이콘:', 'food.love': '최애', 'food.like': '좋아',
      'food.plain': '무난', 'food.hate': '싫어',
      'food.none': '맞는 음식이 없어', 'char.none': '맞는 캐릭터가 없어',
      'char.noPinch': '핀치 불가', 'char.npc': 'NPC',
      'voice.summary': '보이스 {n}개 · 중국어 대사 없음 {m}개',
      'voice.count': '{n}개',
      'voice.defaultSkin': '기본 모습',
      'voice.onlyJa': '일본어만',
      'voice.onlyKo': '한국어만',
      'voice.alias': '음원 공유',
      'voice.noText': '（공식 대사 없음）',
      'voice.noSkinVoice': '이 코디 전용 공식 보이스가 없어 기본 보이스를 재생해요',
      'voice.skinFirstOff': '코디 보이스: 언어 따르기',
      'voice.skinFirstOn': '코디 보이스: 코디 우선 (언어 넘나들기)',
      'voice.skinFirstHint': '언어 따르기 = 한국어면 한국어 / 코디 우선 = 그 언어에 없으면 다른 언어의 코디 보이스',
      'anim.summary': '현재 코디: {skin} · 액션 {n}개',
      'voice.outfitN': '코디 {n}',
      'voice.numberHint': '끝자리 숫자는 같은 대사의 몇 번째 녹음인지 (코디 번호 아님)',
      'grp.互动': '교감', 'grp.情绪': '감정', 'grp.待机': '대기', 'grp.迷你形态': '미니 형태',
      'bubble.turn': '내 차례~!', 'bubble.skin': '갈아입었어~ 귀엽지?', 'bubble.back': '다녀왔어!',
      'bubble.charFailBack': '불러오기 실패, 돌아갈게~', 'bubble.fail': '불러오기 실패…',
      'bubble.feedWhere': '입가로 가져다 줘~', 'bubble.autoOn': '혼자 놀게 됐어~',
      'bubble.autoOff': '조용히 할게…', 'bubble.toLang': '{lang}(으)로 바꿨어~',
      'bubble.onlyVoice': '{name}는 {lang} 보이스만 있어~', 'bubble.noPinch': '이 아이는 볼을 땡길 수 없어~',
      'lang.unique': '(유일)',
      'btn.title.update': '업데이트 확인 (현재 v{v})',
      'upd.checking': '배달 중',
      'upd.notConfigured': '업데이트 출처가 아직 설정 안 됐어 (현재 v{v})',
      'upd.latest': '슈팡이 확인했어: 이미 최신 버전이야 (v{v})',
      'upd.syncing': '슈팡이 최신 버전을 배달 중…',
      'upd.forceSync': '강제 동기화 중 (공지 변경 무시)…',
      'upd.syncDone': '슈팡이 최신 버전을 배달했어 (v{ver})',
      'upd.syncNoChange': '슈팡이 다녀왔어: 내용은 이미 최신이야 (v{ver})',
      'upd.noSyncBridge': 'v{remote} 이 있지만 이 빌드는 너무 오래돼서, 새 빌드를 한 번 다시 받아 줘',
      'upd.fail': '업데이트 확인 실패: {msg}',
      'upd.pcConfirm': '새 버전 v{remote} 발견 (현재 v{local}).\n지금 핫 업데이트 할까? 다운로드 후 자동으로 적용돼.',
      'upd.downloading': '업데이트 다운로드 중… 네트워크 유지해 줘',
      'upd.done': '배달 완료! 새로고침 중…',
      'upd.error': '업데이트 실패: {msg}',
      'upd.blocked': '업데이트 회선이 막혔어 (403). 다른 네트워크에서 다시 시도해 줘.',
      'upd.androidConfirm': '새 버전 v{remote} 발견 (현재 v{local}).\n안드로이드는 새 APK가 필요해, 배포 페이지 열까?',
      'upd.androidNoUrl': '새 버전 v{remote} 발견, 그런데 배포 페이지 주소가 설정 안 됐어',
      'upd.androidOpenFail': '배포 페이지를 열 수 없어: {msg}',
      'upd.web': '새 버전 v{remote}: 웹판은 호스팅 사이트 기준, 새로고침하면 최신이야',
      'btn.notice': '공지', 'notice.title': '📢 공지', 'notice.ok': '알겠어요', 'notice.dontShow': '다시 표시 안 함', 'notice.newVer': 'GitHub 최신 버전 v{remote}, 「업데이트」버튼으로 동기화해 줘', 'notice.none': '아직 공지가 없어', 'notice.fetching': '공지를 가져오는 중…',
      'upd.noZipUrl': '새 버전 v{remote} 발견, 그런데 업데이트 패키지 주소가 설정 안 됐어',
      'upd.openFail': '브라우저를 열 수 없어: {msg}',
      'upd.offline': '지금 네트워크가 없어, 연결하고 다시 시도해 줘',
      'upd.noVersion': '업데이트 출처에 아직 버전 번호가 없어 (새 공지가 아직)',
      'upd.androidHot': '새 버전 v{remote} 발견 (현재 v{local}).\n지금 핫 업데이트 할까? 자동으로 적용돼, 재설치 필요 없어.',
    },
  };

  /* ---------------- 动作标签：精确表（互动类，含·的） ---------------- */
  var ANIM_EXACT = {
    'zh': {},
    'en': {
      '摸头结束': 'Pat done', '被摸头': 'Getting pats', '捏脸结束': 'Pinch done', '被捏脸': 'Cheek pulled',
      '敲头·敲下去': 'Bonk!', '敲头·哭了': 'Bonk·crying',
      '摸肚子·开始': 'Tummy·start', '摸肚子·笑不停': 'Tummy·giggles', '摸肚子·大笑收尾': 'Tummy·big laugh',
    },
    'ja': {
      '摸头结束': 'なでなでおわり', '被摸头': 'なでなでされる', '捏脸结束': 'つねつねおわり', '被捏脸': 'ほっぺをつねられる',
      '敲头·敲下去': 'コツン!', '敲头·哭了': 'コツン·なき',
      '摸肚子·开始': 'おなか·はじまり', '摸肚子·笑不停': 'おなか·きゃっきゃ', '摸肚子·大笑收尾': 'おなか·だいわらい',
    },
    'ko': {
      '摸头结束': '쓰다듬 끝', '被摸头': '쓰다듬 당함', '捏脸结束': '볼 땡기기 끝', '被捏脸': '볼 잡아당겨짐',
      '敲头·敲下去': '똑!', '敲头·哭了': '똑·우는중',
      '摸肚子·开始': '배·시작', '摸肚子·笑不停': '배·킥킥', '摸肚子·大笑收尾': '배·바닥 구르기',
    },
  };

  /* ---------------- 动作标签：词表（「词 + 序号」模式） ---------------- */
  var ANIM_VOCAB = {
    '生气':   { en: 'Angry', ja: 'おこり', ko: '화남' },
    '开心':   { en: 'Happy', ja: 'るんるん', ko: '기쁨' },
    '难过':   { en: 'Sad', ja: 'しょんぼり', ko: '슬픔' },
    '惊讶':   { en: 'Surprised', ja: 'びっくり', ko: '놀람' },
    '挑衅':   { en: 'Taunt', ja: 'からかい', ko: '도발' },
    '慌张':   { en: 'Panic', ja: 'あわて', ko: '당황' },
    '无视':   { en: 'Ignore', ja: 'むし', ko: '무시' },
    '闭眼':   { en: 'Eyes shut', ja: 'つぶら', ko: '감은눈' },
    '吃东西': { en: 'Eat', ja: 'もぐもぐ', ko: '먹기' },
    '待机':   { en: 'Idle', ja: 'たいき', ko: '대기' },
    '睡觉':   { en: 'Sleep', ja: 'おやすみ', ko: '취침' },
    '道歉':   { en: 'Sorry', ja: 'ごめん', ko: '사과' },
    '闹别扭': { en: 'Sulky', ja: 'ぷくー', ko: '삐죽' },
    '说话':   { en: 'Talk', ja: 'おしゃべり', ko: '말하기' },
    '跳舞':   { en: 'Dance', ja: 'ダンス', ko: '춤' },
    '无表情': { en: 'Blank', ja: 'むひょう', ko: '무표정' },
    '登场':   { en: 'Spawn', ja: 'とうじょう', ko: '등장' },
    '升级':   { en: 'Upgrade', ja: 'アップグレード', ko: '업그레이드' },
    '跟随镜头': { en: 'Track cam', ja: 'カメラ追従', ko: '카메라 따라가기' },
    '坨格形态': { en: 'Chibi form', ja: 'チビ形態', ko: '또그 형태' },
    '迷你形态': { en: 'Mini form', ja: 'ミニ形態', ko: '미니 형태' },
    '走路':   { en: 'Move', ja: 'あるく', ko: '이동' },
    '游泳':   { en: 'Swim', ja: 'およぐ', ko: '헤엄' },
    '玩耍':   { en: 'Play', ja: 'あそぶ', ko: '놀기' },
    '动作':   { en: 'Act', ja: 'アクション', ko: '액션' },
    '得意':   { en: 'Proud', ja: 'どやぁ', ko: '우쭐' },
    '晕':     { en: 'Dizzy', ja: 'ふらふら', ko: '어지러움' },
    '闻':     { en: 'Sniff', ja: 'くんくん', ko: '킁킁' },
    '认真':   { en: 'Serious', ja: 'しんけん', ko: '진지' },
    '抓狂':   { en: 'Freakout', ja: 'パニック', ko: '폭주' },
    '哭':     { en: 'Crying', ja: 'なく', ko: '우는' },
    '唱':     { en: 'Sing', ja: 'うた', ko: '노래' },
    '笑':     { en: 'Laugh', ja: 'えがお', ko: '웃음' },
    /* ★ 第五十九轮：语音图鉴的动作名也要跟着界面语言走，补一批图鉴里高频的标签。
       命中就翻译；**任何一个词不认识就整条回退中文**（保持"不中英混杂"的既定原则）。 */
    '好感度':   { en: 'Bond', ja: 'なかよし度', ko: '호감도' },
    '受击':     { en: 'Hit', ja: '被弾', ko: '피격' },
    '喊叫':     { en: 'Shout', ja: 'さけび', ko: '외침' },
    '呼唤教主': { en: 'Call leader', ja: '教主よび', ko: '교주 부르기' },
    '呼唤使徒': { en: 'Call apostle', ja: '使徒よび', ko: '사도 부르기' },
    '高兴':     { en: 'Happy', ja: 'うれしい', ko: '기쁨' },
    '愉悦':     { en: 'Pleased', ja: 'ごきげん', ko: '즐거움' },
    '伤心':     { en: 'Sad', ja: 'かなしい', ko: '슬픔' },
    '高年级技能': { en: 'High skill', ja: '高学年スキル', ko: '고학년 스킬' },
    '低年级技能': { en: 'Low skill', ja: '低学年スキル', ko: '저학년 스킬' },
    '普通攻击': { en: 'Normal attack', ja: '通常攻撃', ko: '일반 공격' },
    '强力攻击': { en: 'Power attack', ja: '強攻撃', ko: '강공격' },
    '抽卡':     { en: 'Gacha', ja: 'ガチャ', ko: '가챠' },
    '台词':     { en: 'Line', ja: 'セリフ', ko: '대사' },
    '薅脸':     { en: 'Cheek pull', ja: 'ほっぺつね', ko: '볼 땡기기' },
    '抚摸':     { en: 'Petting', ja: 'なでなで', ko: '쓰다듬기' },
    '成长':     { en: 'Growth', ja: 'せいちょう', ko: '성장' },
    '思考':     { en: 'Think', ja: 'しこう', ko: '사고' },
    '否定':     { en: 'No', ja: 'ひてい', ko: '부정' },
    '肯定':     { en: 'Yes', ja: 'こうてい', ko: '긍정' },
    '被击倒':   { en: 'Down', ja: 'たおれ', ko: '쓰러짐' },
    '入队':     { en: 'Join', ja: 'なかま入り', ko: '합류' },
    '爆栗':     { en: 'Bonk', ja: 'デコピン', ko: '딱밤' },
    '战败':     { en: 'Defeat', ja: '敗北', ko: '패배' },
    '胜利':     { en: 'Victory', ja: '勝利', ko: '승리' },
    '入场':     { en: 'Enter', ja: '入場', ko: '입장' },
    '挠痒中':   { en: 'Tickling', ja: 'くすぐり中', ko: '간지럼 중' },
    '挠痒开始': { en: 'Tickle start', ja: 'くすぐり開始', ko: '간지럼 시작' },
    '生日':     { en: 'Birthday', ja: 'たんじょうび', ko: '생일' },
    '进食':     { en: 'Eat', ja: 'もぐもぐ', ko: '먹기' },
    '涂色板':   { en: 'Coloring', ja: 'ぬりえ', ko: '색칠판' },
    '装备':     { en: 'Gear', ja: 'そうび', ko: '장비' },
    '问候':     { en: 'Greeting', ja: 'あいさつ', ko: '인사' },
    '升星':     { en: 'Star up', ja: '星上げ', ko: '성급 상승' },
    '大厅':     { en: 'Lobby', ja: 'ロビー', ko: '로비' },
    '打电话':   { en: 'Phone call', ja: 'でんわ', ko: '전화' },
    '旅程开始': { en: 'Journey start', ja: 'たびのはじまり', ko: '여정 시작' },
    '解锁坨格': { en: 'Unlock chibi', ja: 'チビ解禁', ko: '또그 해금' },
    '坨格升级': { en: 'Chibi up', ja: 'チビ強化', ko: '또그 강화' },
    '商店':     { en: 'Shop', ja: 'ショップ', ko: '상점' },
    '特别场景': { en: 'Special scene', ja: '特別シーン', ko: '특별 장면' },
    '主题剧场': { en: 'Theme theater', ja: 'テーマ劇場', ko: '테마극장' },
    '接受救援': { en: 'Accept rescue', ja: '救助を受ける', ko: '구조 수락' },
    '拒绝救援': { en: 'Refuse rescue', ja: '救助を断る', ko: '구조 거절' },
    '彩蛋':     { en: 'Easter egg', ja: 'おまけ', ko: '이스터에그' },
    '宴会':     { en: 'Party', ja: '宴会', ko: '연회' },
    '特殊':     { en: 'Special', ja: '特殊', ko: '특수' },
    '攻塔':     { en: 'Tower', ja: 'タワー攻め', ko: '탑 공략' },
    '做作业':   { en: 'Homework', ja: '宿題', ko: '숙제' },
    '共鸣':     { en: 'Resonance', ja: '共鳴', ko: '공명' },
    '冷淡':     { en: 'Cool', ja: 'クール', ko: '냉정' },
    '忧郁':     { en: 'Gloomy', ja: 'ゆううつ', ko: '우울' },
    '快活':     { en: 'Jolly', ja: 'ようき', ko: '쾌활' },
    '愤怒':     { en: 'Mad', ja: 'ふんぬ', ko: '분노' },
    '天真':     { en: 'Naive', ja: 'むじゃき', ko: '순수' },
    /* ★ 第六十七轮：图鉴名全汉化之后，**新出现的词**也要能跟着界面语言走。
       用户要求"这些名称要翻译成中文，用户选择其他语言也要适配"——
       中文名已经写进 voice-text.json / 公共.js，这里补 en / ja / ko。
       （专有名词——游戏名、角色名、地名——各语言保持同一写法。） */
    '游戏名':   { en: 'Game title', ja: 'ゲーム名', ko: '게임명' },
    '约会':     { en: 'Date', ja: 'デート', ko: '데이트' },
    '海滩':     { en: 'Beach', ja: 'ビーチ', ko: '해변' },
    '湖畔':     { en: 'Lakeside', ja: '湖畔', ko: '호숫가' },
    '夜空':     { en: 'Night sky', ja: '夜空', ko: '밤하늘' },
    '野餐':     { en: 'Picnic', ja: 'ピクニック', ko: '피크닉' },
    '通用':     { en: 'Common', ja: '共通', ko: '공통' },
    '开始':     { en: 'Start', ja: '開始', ko: '시작' },
    '结束':     { en: 'End', ja: '終了', ko: '종료' },
    '进行中':   { en: 'In progress', ja: '進行中', ko: '진행 중' },
    '重访':     { en: 'Revisit', ja: '再訪', ko: '재방문' },
    '细雨':     { en: 'Drizzle', ja: '小雨', ko: '가랑비' },
    '海鸟':     { en: 'Seabirds', ja: '海鳥', ko: '바닷새' },
    '浪花':     { en: 'Waves', ja: '波', ko: '파도' },
    '触碰':     { en: 'Touch', ja: 'タッチ', ko: '접촉' },
    '继续':     { en: 'Continue', ja: 'つづける', ko: '계속' },
    '送礼':     { en: 'Gift', ja: 'プレゼント', ko: '선물' },
    '等待':     { en: 'Waiting', ja: 'まち', ko: '대기' },
    '萤火':     { en: 'Fireflies', ja: 'ほたる', ko: '반딧불' },
    '薄雾':     { en: 'Mist', ja: 'きり', ko: '안개' },
    '满月':     { en: 'Full moon', ja: '満月', ko: '보름달' },
    '极光':     { en: 'Aurora', ja: 'オーロラ', ko: '오로라' },
    '烟花':     { en: 'Fireworks', ja: '花火', ko: '불꽃놀이' },
    '流星':     { en: 'Shooting star', ja: '流れ星', ko: '별똥별' },
    '落花':     { en: 'Falling petals', ja: '花びら', ko: '꽃잎' },
    '彩虹':     { en: 'Rainbow', ja: '虹', ko: '무지개' },
    '暖阳':     { en: 'Warm sun', ja: '陽だまり', ko: '따스한 햇살' },
    '过来':     { en: 'Come here', ja: 'こっち来て', ko: '이리 와' },
    '跟我来':   { en: 'Follow me', ja: 'ついてきて', ko: '따라와' },
    '给你':     { en: 'Here you go', ja: 'あげる', ko: '여기 줄게' },
    '力量':     { en: 'Power', ja: 'ちから', ko: '힘' },
    '打招呼':   { en: 'Greeting', ja: 'あいさつ', ko: '인사' },
    '大笑收尾': { en: 'Big laugh end', ja: '大笑い締め', ko: '큰웃음 마무리' },
    '摸肚子':   { en: 'Tummy', ja: 'おなか', ko: '배 만지기' },
    'NPC台词':  { en: 'NPC line', ja: 'NPCセリフ', ko: 'NPC 대사' },
    '大厅活动': { en: 'Lobby event', ja: 'ロビーイベント', ko: '로비 이벤트' },
    '大厅主题': { en: 'Lobby theme', ja: 'ロビーテーマ', ko: '로비 테마' },
    '大厅开场': { en: 'Lobby opening', ja: 'ロビー開幕', ko: '로비 개막' },
    '主题战斗': { en: 'Theme battle', ja: 'テーマバトル', ko: '테마 배틀' },
    '主题互动': { en: 'Theme interaction', ja: 'テーマ交流', ko: '테마 교감' },
    '小游戏':   { en: 'Minigame', ja: 'ミニゲーム', ko: '미니게임' },
    '混合活动': { en: 'Mixed event', ja: '複合イベント', ko: '혼합 이벤트' },
    '子内容':   { en: 'Sub content', ja: 'サブ内容', ko: '서브 콘텐츠' },
    '假商店':   { en: 'Fake shop', ja: '偽ショップ', ko: '가짜 상점' },
    '伪装':     { en: 'Disguise', ja: '変装', ko: '위장' },
    '伪装事件': { en: 'Fake event', ja: '偽イベント', ko: '위장 이벤트' },
    '冷笑话':   { en: 'Dad joke', ja: 'ダジャレ', ko: '아재개그' },
    '留言':     { en: 'Memo', ja: '伝言', ko: '메모' },
    '占位':     { en: 'Dummy', ja: 'ダミー', ko: '더미' },
    '技能施放': { en: 'Skill cast', ja: 'スキル発動', ko: '스킬 시전' },
    '技能台词': { en: 'Skill line', ja: 'スキルセリフ', ko: '스킬 대사' },
    '技能名称': { en: 'Skill name', ja: 'スキル名', ko: '스킬명' },
    '技能喊声': { en: 'Skill shout', ja: 'スキル叫び', ko: '스킬 외침' },
    '技能受击': { en: 'Skill hit', ja: 'スキル被弾', ko: '스킬 피격' },
    '喊声':     { en: 'Shout', ja: 'さけび', ko: '외침' },
    '名称':     { en: 'Name', ja: '名称', ko: '명칭' },
    '特殊动作': { en: 'Special action', ja: '特殊動作', ko: '특수 동작' },
    '特殊开始': { en: 'Special start', ja: '特殊開始', ko: '특수 시작' },
    '特殊收尾': { en: 'Special end', ja: '特殊終了', ko: '특수 마무리' },
    '混沌':     { en: 'Chaos', ja: '混沌', ko: '혼돈' },
    '平和':     { en: 'Peace', ja: '平和', ko: '평화' },
    '好感度扩展': { en: 'Bond extra', ja: '好感度拡張', ko: '호감도 확장' },
    '未受击':   { en: 'No hit', ja: '未被弾', ko: '피격 없음' },
    '娜塔':     { en: 'Nata', ja: 'ナタ', ko: '나타' },
    '艾德':     { en: 'Ed', ja: 'エド', ko: '에드' },
    '莫纳蒂乌姆': { en: 'Monatium', ja: 'モナティウム', ko: '모나티움' },
    '乌洛斯入队': { en: 'Uros joins', ja: 'ウロス加入', ko: '우로스 합류' },
    '乌洛斯大厅': { en: 'Uros lobby', ja: 'ウロスロビー', ko: '우로스 로비' },
    '乌洛斯胜利': { en: 'Uros victory', ja: 'ウロス勝利', ko: '우로스 승리' },
    '兰入队':   { en: 'Ran joins', ja: 'ラン加入', ko: '란 합류' },
    '提格入队': { en: 'Tig joins', ja: 'ティグ加入', ko: '티그 합류' },
    '提格大厅': { en: 'Tig lobby', ja: 'ティグロビー', ko: '티그 로비' },
    '提格胜利': { en: 'Tig victory', ja: 'ティグ勝利', ko: '티그 승리' },
    '与戴安娜': { en: 'With Diana', ja: 'ディアナと', ko: '디아나와' },
    '与苏罗':   { en: 'With Suro', ja: 'スロと', ko: '수로와' },
    '与提格':   { en: 'With Tig', ja: 'ティグと', ko: '티그와' },
    '与薇薇':   { en: 'With Vivi', ja: 'ビビと', ko: '비비와' },
    '与西尔维娅': { en: 'With Silvia', ja: 'シルビアと', ko: '실비아와' },
    '与缪特':   { en: 'With Mute', ja: 'ミュートと', ko: '뮤트와' },
    '与暴怒涅尔': { en: 'With Ner Rage', ja: 'ネル(激怒)と', ko: '격노 네르와' },
    '与康复艾德': { en: 'With Ed Rehab', ja: 'エド(療養)と', ko: '재활 에드와' },
    '与尔凭罗亚尔': { en: 'With Erpin Royale', ja: 'エルピン(ロワイヤル)と', ko: '에르핀 로열와' },
    '大厅与薇薇': { en: 'Lobby with Vivi', ja: 'ロビーでビビと', ko: '로비에서 비비와' },
    '大厅与西尔维娅': { en: 'Lobby with Silvia', ja: 'ロビーでシルビアと', ko: '로비에서 실비아와' },
    'a': { en: 'a', ja: 'a', ko: 'a' },
    'b': { en: 'b', ja: 'b', ko: 'b' },
  };

  var lang = 'zh';
  try {
    var saved = localStorage.getItem('pet-uilang');
    if (saved && LANGS.indexOf(saved) >= 0) lang = saved;
  } catch (e) { /* 忽略 */ }

  function t(key, vars) {
    var table = S[lang] || S.zh;
    var s = table[key];
    if (s === undefined) s = S.zh[key];
    if (s === undefined) return key;
    if (vars) for (var k in vars) s = s.split('{' + k + '}').join(String(vars[k]));
    return s;
  }

  /* 动作标签翻译：先精确表，再「词 + 序号」模式，最后回退中文 */
  function animLabel(zhLabel) {
    if (!zhLabel) return zhLabel;
    var exact = ANIM_EXACT[lang] || {};
    if (exact[zhLabel]) return exact[zhLabel];
    if (lang === 'zh') return zhLabel;
    var segs = String(zhLabel).split('·');
    var out = [];
    for (var i = 0; i < segs.length; i++) {
      /* ★ 第五十九轮：尾巴不只认「空格+数字」，还要认 `-01` / `_1` 这种
         （图鉴里大量 BasicAttack1-01 / 好感度1_1 / 高年级技能2-01）。 */
      var m = segs[i].match(/^([^\d]+?)((?:[\s\-_]*\d+)*)$/);
      var head = m ? m[1].trim() : segs[i];
      var num = m && m[2] ? m[2] : '';
      var v = ANIM_VOCAB[head];
      if (!v) return zhLabel;                 /* 有不认识的词 → 整条回退中文，避免中英混杂 */
      /* ★ 第五十九轮：英文是「词 + 空格 + 序号」，中文/日文/韩文直接贴（Cheek pull 1 / ほっぺつね1） */
      var tail = num;
      if (lang === 'en' && tail && !/^\s/.test(tail)) tail = ' ' + tail;
      out.push((v[lang] || head) + tail);
    }
    return out.join('·');
  }

  function groupName(zhGroup) {
    var v = S[lang]['grp.' + zhGroup];
    return v === undefined ? zhGroup : v;
  }

  /* 人物显示名：界面语言 → 英文名 → 中文名（zh 由调用方传入） */
  function charName(id, zhName) {
    if (lang === 'zh') return zhName || id;          /* 中文界面直接用中文名 */
    var c = (window.NAMES_I18N && window.NAMES_I18N.chars[id]) || null;
    if (c) {
      if (c[lang]) return c[lang];
      if (c.en) return c.en;                          /* 该语言缺译 → 英文名兜底 */
    }
    return zhName || id;                              /* 最后回退中文名 */
  }

  /* 食物显示名：界面语言 → 中文名 */
  function foodName(food) {
    var f = window.NAMES_I18N && window.NAMES_I18N.foods[food && food.id];
    if (f) {
      var v = f[lang];
      if (v) return v;
    }
    return food ? food.name : '';
  }

  /* 食物搜索：任何一种语言的名字命中都算 */
  function foodMatch(food, q) {
    if (!q) return true;
    var f = window.NAMES_I18N && window.NAMES_I18N.foods[food.id];
    var pool = [food.name, food.id];
    if (f) pool = pool.concat([f.en, f.ja, f.ko]);
    for (var i = 0; i < pool.length; i++) {
      if (pool[i] && pool[i].toLowerCase().indexOf(q) >= 0) return true;
    }
    return false;
  }

  /* 角色/食物搜索（角色名任何语言命中都算） */
  function charMatch(charObj, zhName, q) {
    if (!q) return true;
    var c = window.NAMES_I18N && window.NAMES_I18N.chars[charObj];
    var pool = [zhName, charObj];
    if (c) pool = pool.concat([c.en, c.ja, c.ko]);
    for (var i = 0; i < pool.length; i++) {
      if (pool[i] && String(pool[i]).toLowerCase().indexOf(q) >= 0) return true;
    }
    return false;
  }

  /* 静态 DOM 应用：<element data-i18n="key">、<input data-i18n-ph="key"> */
  function applyDOM(root) {
    var list = (root || document).querySelectorAll('[data-i18n]');
    for (var i = 0; i < list.length; i++) {
      var el = list[i];
      var key = el.getAttribute('data-i18n');
      if (S[lang][key] !== undefined || S.zh[key] !== undefined) el.textContent = t(key);
    }
    var phs = (root || document).querySelectorAll('[data-i18n-ph]');
    for (var j = 0; j < phs.length; j++) {
      var k2 = phs[j].getAttribute('data-i18n-ph');
      if (S[lang][k2] !== undefined || S.zh[k2] !== undefined) phs[j].placeholder = t(k2);
    }
  }

  function setLang(l) {
    if (LANGS.indexOf(l) < 0) return;
    lang = l;
    try { localStorage.setItem('pet-uilang', l); } catch (e) { /* 忽略 */ }
    applyDOM();
  }

  function voiceLangName(v) {
    var m = VOICE_LANG_NAME[lang] || VOICE_LANG_NAME.zh;
    return m[v] || v;
  }

  return {
    LANGS: LANGS, LANG_NAME: LANG_NAME,
    get lang() { return lang; },
    setLang: setLang, applyDOM: applyDOM, t: t,
    animLabel: animLabel, groupName: groupName,
    charName: charName, foodName: foodName, foodMatch: foodMatch, charMatch: charMatch,
    voiceLangName: voiceLangName,
  };
})();
