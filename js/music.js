/* ------------------------------------------------------------------
 * music.js —— 背景音乐（第四十六轮新增）
 *
 * 用户要求：
 *   · 「音乐:开 / 音乐:关」按钮，**默认开**；关掉后下次打开还是关，用户点开才再响；
 *   · 「换音乐」从用户给的 13 首官方 BGM 里挑一首；
 *   · 开着的时候**一首播完随机换下一首**；
 *   · 从"关"变成"开"时，**随机一首从头播**；
 *   · 音量跟 sound.js 的 music 通道（还要乘总音量）。
 *
 * 曲目清单在 js/music-data.js（由 03_工具\生成音乐数据.py 生成），
 * mp3 在 assets/music/mNN.mp3（ASCII 文件名），原始中文名归档在 02_原始素材\音乐_原始mp3\。
 *
 * 自动播放：安卓壳设了 setMediaPlaybackRequiresUserGesture(false)、电脑壳是 WebView2，
 * 都能直接播；纯浏览器（网页端）大概率会被拦 —— 被拦时不报错，挂一次
 * pointerdown/keydown 监听，用户第一次点屏幕/按键就补上。
 * ------------------------------------------------------------------ */
window.Music = (function () {
  'use strict';

  var KEY_ON = 'pet-music-on';        // '1' 开 / '0' 关
  var KEY_TRACK = 'pet-music-track';  // 上次播到哪首（id），下次开还从它开始？——不，按用户要求随机
  var tracks = (window.MUSIC_DATA && window.MUSIC_DATA.tracks) || [];

  var audio = null;
  var idx = -1;          // 当前曲目下标，-1 = 还没播过
  var on = true;         // 默认开
  var armed = false;     // 自动播放被拦，已挂好"等第一次用户操作"的补播
  var lastError = '';

  /* ---------------- 偏好读写 ---------------- */
  function readPrefs() {
    try {
      var o = localStorage.getItem(KEY_ON);
      if (o === '0') on = false;
      else if (o === '1') on = true;
    } catch (e) { /* 忽略 */ }
  }
  function saveOn() {
    try { localStorage.setItem(KEY_ON, on ? '1' : '0'); } catch (e) { /* 忽略 */ }
  }
  function saveTrack(t) {
    try { localStorage.setItem(KEY_TRACK, t ? t.id : ''); } catch (e) { /* 忽略 */ }
  }

  function musicVol() {
    return window.Sound ? Sound.volumeOf('music') : 1;
  }

  /* ★ 模块加载时就把"上次开没开"读进来 —— main.js 开机时会先 syncMusicButton()
     把按钮文案摆好，那时还没走到 Music.init()，所以这里必须提前读。 */
  readPrefs();

  /* ---------------- 音频对象 ---------------- */
  function ensure() {
    if (audio) return audio;
    audio = new Audio();
    audio.preload = 'auto';
    audio.loop = false;
    audio.volume = musicVol();
    /* ★ 一首播完 → 随机下一首（用户要求） */
    audio.addEventListener('ended', function () {
      if (on) playRandom();
    });
    /* 文件坏了/读不到 → 别卡死在静音，过一会儿换一首继续 */
    audio.addEventListener('error', function () {
      lastError = audio && audio.src ? audio.src : '';
      if (!on) return;
      setTimeout(function () { if (on) playRandom(); }, 1500);
    });
    return audio;
  }

  function armAutoplay() {
    if (armed) return;
    armed = true;
    var kick = function () {
      window.removeEventListener('pointerdown', kick, true);
      window.removeEventListener('keydown', kick, true);
      armed = false;
      if (!on) return;
      var a = ensure();
      a.volume = musicVol();
      var p = a.play();
      if (p && p.catch) p.catch(function () { /* 还是不行就算了，别再挂 */ });
    };
    window.addEventListener('pointerdown', kick, true);
    window.addEventListener('keydown', kick, true);
  }

  /* ---------------- 播放控制 ---------------- */
  /** 播第 i 首（从头） */
  function start(i) {
    if (!tracks.length) return;
    i = ((i % tracks.length) + tracks.length) % tracks.length;
    var t = tracks[i];
    var a = ensure();
    try {
      a.src = t.file;          // 换源 = 从头开始
      a.currentTime = 0;
      a.volume = musicVol();
      idx = i;
      saveTrack(t);
      var p = a.play();
      if (p && p.catch) p.catch(function () { armAutoplay(); });
    } catch (e) { /* 忽略 */ }
  }

  /** 随机一首（尽量不是当前这首） */
  function playRandom() {
    if (!tracks.length) return;
    if (tracks.length === 1) { start(0); return; }
    var i = idx;
    while (i === idx) i = Math.floor(Math.random() * tracks.length);
    start(i);
  }

  function pause() {
    if (audio) { try { audio.pause(); } catch (e) { /* 忽略 */ } }
  }

  /** 开关；★ 从关变开 = 随机一首从头播 */
  function setOn(v) {
    v = !!v;
    if (v === on) return on;
    on = v;
    saveOn();
    if (on) playRandom(); else { pause(); wasPlaying = false; }
    return on;
  }

  /* ★ 第五十轮：切到后台要**主动停播**。
     用户反馈"切回后台还在响" —— <audio> 不受页面可见性影响，不管就会一直放，
     既费电，又会在切回时和模型/语音抢解码（表现为"切回来卡一下"）。
     这里记住"后台之前是不是正在播"，切回前台再接着放，不丢状态。
     ★ 必须幂等：安卓壳（onPause）和网页端（visibilitychange）会各通知一次。
       只在"确实正在播"时才置 wasPlaying，重复调用就不会把标记冲掉。 */
  var wasPlaying = false;
  function suspend() {
    if (audio && audio.src && !audio.paused) wasPlaying = true;
    if (audio) { try { audio.pause(); } catch (e) { /* 忽略 */ } }
  }
  function resume() {
    if (!wasPlaying) return;
    wasPlaying = false;
    if (!on) return;
    var a = ensure();
    a.volume = musicVol();
    var p = a.play();
    if (p && p.catch) p.catch(function () { /* 还是不行就算了 */ });
  }

  /** 选一首播（换音乐）；如果当前是关，选歌就顺手打开 */
  function select(id) {
    var i = -1;
    for (var k = 0; k < tracks.length; k++) if (tracks[k].id === id) { i = k; break; }
    if (i < 0) return false;
    if (!on) { on = true; saveOn(); }
    start(i);
    return true;
  }

  /* ---------------- 对外 ---------------- */
  function init() {
    readPrefs();                 // 兜底再读一次（模块加载时已读过）
    if (!tracks.length) return;
    ensure();
    if (on) playRandom();        // 默认开：进来先随机放一首
  }

  return {
    init: init,
    tracks: tracks,
    isOn: function () { return on; },
    setOn: setOn,
    toggle: function () { return setOn(!on); },
    /** ★ 切后台 = 暂停并记住位置；切回前台 = 接着放（用户要求"后台别响"） */
    suspend: suspend,
    resume: resume,
    isPaused: function () { return !audio || audio.paused; },
    playRandom: playRandom,
    select: select,
    next: playRandom,
    current: function () { return idx >= 0 ? tracks[idx] : null; },
    currentIndex: function () { return idx; },
    /** 音量（含总音量）变了 → 立刻套到正在播的这首上 */
    applyVolume: function () { if (audio) { try { audio.volume = musicVol(); } catch (e) { /* 忽略 */ } } },
    /** 音频元素（自测/探针用） */
    element: function () { return audio; },
    /** 自检/测试用 */
    state: function () {
      return { on: on, index: idx, track: idx >= 0 ? tracks[idx].id : '', volume: musicVol(),
               paused: audio ? audio.paused : true, error: lastError, count: tracks.length };
    },
  };
})();
