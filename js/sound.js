/* ------------------------------------------------------------------
 * sound.js —— 声音音量（第四十六轮新增）
 *
 * 用户要求（原话）："分成音乐+语音+音效三种分别设置，再加个总音量，四个"。
 * 所以这里有 **4 条音量**，都存 localStorage、下次打开还在：
 *
 *   master（总音量）—— 乘在下面三条上，一个滑杆整体大小声
 *   music （音乐）  —— music.js 的背景音乐
 *   voice （语音）  —— voice.js 播的角色语音（含敲头那两段）
 *   sfx   （音效）  —— voice.js 播的互动音效（摸头/敲头/捏脸那几声）
 *
 * 实际生效音量 = master × 该通道（`volumeOf(ch)`）。
 * 默认四条都是 100%（不改动原有听感）；语音/音效在**每次播放时**读一次，
 * 所以调完下一句就生效；音乐由 Music.applyVolume() 立刻套上。
 * ------------------------------------------------------------------ */
window.Sound = (function () {
  'use strict';

  var CHANNELS = ['master', 'music', 'voice', 'sfx'];
  var STORE_KEY = {
    master: 'pet-vol-master',
    music: 'pet-vol-music',
    voice: 'pet-vol-voice',
    sfx: 'pet-vol-sfx',
  };

  var val = { master: 1, music: 1, voice: 1, sfx: 1 };
  CHANNELS.forEach(function (ch) {
    try {
      var s = parseFloat(localStorage.getItem(STORE_KEY[ch]));
      if (!isNaN(s) && s >= 0 && s <= 1) val[ch] = s;
    } catch (e) { /* 忽略：读不到就用默认 1 */ }
  });

  function clamp(x) { return Math.max(0, Math.min(1, x)); }

  return {
    channels: CHANNELS,

    /** 该通道自己的滑杆值（0~1，不含总音量） */
    value: function (ch) { return val[ch] === undefined ? 1 : val[ch]; },

    /** ★ 实际生效音量：总音量 × 通道 */
    volumeOf: function (ch) {
      if (ch === 'master') return val.master;
      return val.master * (val[ch] === undefined ? 1 : val[ch]);
    },

    /** 设置某条通道（0~1），持久化；音乐/总音量改完立刻作用到正在播的背景音乐 */
    setVolume: function (ch, x) {
      if (val[ch] === undefined) return val.master;
      var n = clamp(Number(x));
      val[ch] = isNaN(n) ? 1 : n;
      try { localStorage.setItem(STORE_KEY[ch], String(val[ch])); } catch (e) { /* 忽略 */ }
      if ((ch === 'music' || ch === 'master') && window.Music
          && typeof Music.applyVolume === 'function') Music.applyVolume();
      return val[ch];
    },

    /** 一次性把四条都复位到 100%（给"恢复默认"用） */
    reset: function () {
      CHANNELS.forEach(function (ch) { val[ch] = 1; try { localStorage.removeItem(STORE_KEY[ch]); } catch (e) {} });
      if (window.Music && typeof Music.applyVolume === 'function') Music.applyVolume();
    },
  };
})();
