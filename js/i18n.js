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
      'char.noPinch': '无捏脸',
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
      'upd.syncDone': '舒胖把最新版本送到啦（v{ver}）',
      'upd.syncNoChange': '舒胖跑了一趟：内容已经是最新的（v{ver}）',
      'upd.noSyncBridge': '检测到 v{remote} 有变化，但本程序版本较旧，请重新下载一次新版程序',
      'upd.fail': '检查更新失败：{msg}',
      'upd.pcConfirm': '发现新版本 v{remote}（当前 v{local}）。\n立即在线热更新？下载完成后会自动替换文件并重启，无需重新安装。',
      'upd.downloading': '正在下载更新包…请保持网络畅通',
      'upd.done': '舒胖送完啦！正在重新加载…',
      'upd.error': '更新失败：{msg}',
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
      'char.noPinch': 'No pinch',
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
      'upd.syncDone': 'Shoupan delivered the latest version (v{ver})',
      'upd.syncNoChange': 'Shoupan made the round — already up to date (v{ver})',
      'upd.noSyncBridge': 'v{remote} is available, but this build is too old — please download the new build once',
      'upd.fail': 'Update check failed: {msg}',
      'upd.pcConfirm': 'New version v{remote} found (current v{local}).\nHot-update now? It downloads and applies automatically \u2014 no reinstall.',
      'upd.downloading': 'Downloading update\u2026 keep the network on',
      'upd.done': 'Delivered! Reloading\u2026',
      'upd.error': 'Update failed: {msg}',
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
      'char.noPinch': 'つめない',
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
      'upd.syncDone': 'シュパンが最新版をとどけたよ（v{ver}）',
      'upd.syncNoChange': 'シュパンがはしったよ：中身はもう最新（v{ver}）',
      'upd.noSyncBridge': 'v{remote} があるよ、でもこのビルドは古いからしんばんをもう一度ダウンロードしてね',
      'upd.fail': 'アップデートチェックしっぱい：{msg}',
      'upd.pcConfirm': '新しいバージョン v{remote}（現在 v{local}）。\nいますぐホットアップデートする？おわったらじどうでさいきどうするよ。',
      'upd.downloading': 'アップデートをダウンロード中…ネットをつなげてね',
      'upd.done': 'おとどけ完了！さいよみこみ中…',
      'upd.error': 'アップデートしっぱい：{msg}',
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
      'char.noPinch': '핀치 불가',
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
      'upd.syncDone': '슈팡이 최신 버전을 배달했어 (v{ver})',
      'upd.syncNoChange': '슈팡이 다녀왔어: 내용은 이미 최신이야 (v{ver})',
      'upd.noSyncBridge': 'v{remote} 이 있지만 이 빌드는 너무 오래돼서, 새 빌드를 한 번 다시 받아 줘',
      'upd.fail': '업데이트 확인 실패: {msg}',
      'upd.pcConfirm': '새 버전 v{remote} 발견 (현재 v{local}).\n지금 핫 업데이트 할까? 다운로드 후 자동으로 적용돼.',
      'upd.downloading': '업데이트 다운로드 중… 네트워크 유지해 줘',
      'upd.done': '배달 완료! 새로고침 중…',
      'upd.error': '업데이트 실패: {msg}',
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
      var m = segs[i].match(/^([^\d]+?)(\s*\d+)?$/);
      var head = m ? m[1].trim() : segs[i];
      var num = m && m[2] ? m[2] : '';
      var v = ANIM_VOCAB[head];
      if (!v) return zhLabel;                 /* 有不认识的词 → 整条回退中文，避免中英混杂 */
      out.push((v[lang] || head) + num);
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
