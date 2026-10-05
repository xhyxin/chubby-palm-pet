// ★ 公告功能（第四十轮建；第四十一轮接入用户 GitHub + 公告.txt 内置版本号）
//
// 数据源：GitHub 上与 version.txt 同目录的 公告.txt
//   新格式：第一行=版本号，第二行=公告日期，其余=内容（解析在 update-config.js 的 UPDATE_NET）
//   旧格式：第一行=日期，其余=内容 —— 也兼容
// 地址自动推导：UPDATE_CONFIG.VERSION_URL 的同目录 + 公告.txt（未配置则整个功能关闭）
// 版本号来源：version.txt 优先（可选文件，404 不报错），否则用 公告.txt 第一行
//
// 启动 2.5 秒后后台检查（8 秒超时，无网 / 超时 / 失败 一律静默跳过，绝不卡用户）：
//   弹窗条件 = 有新版本（远端 > 本机） 或 公告日期与本机上一次「不再提示」记录的不同
//   弹窗内容 = 先说明有最新版本（如有），再显示公告正文
//   按钮     = 知道了（仅关闭） / 不再提示（记住 日期+版本，直到下一个版本或新公告才再弹）
// 右上角「公告」按钮 = 随时查看（优先显示上次拉取的缓存，离线也能看）
(function () {
  'use strict';

  var cfg = window.UPDATE_CONFIG || {};

  function noticeUrl() {
    if (!cfg.VERSION_URL) return '';
    var i = cfg.VERSION_URL.lastIndexOf('/');
    return (i < 0 ? '' : cfg.VERSION_URL.slice(0, i + 1)) + encodeURIComponent('公告.txt');
  }

  function isNewer(a, b) {
    a = String(a == null ? '' : a).trim().split('.');
    b = String(b == null ? '' : b).trim().split('.');
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      var x = parseInt(a[i], 10) || 0;
      var y = parseInt(b[i], 10) || 0;
      if (x > y) return true;
      if (x < y) return false;
    }
    return false;
  }

  function seen() {
    try { return JSON.parse(localStorage.getItem('noticeSeen') || '{}') || {}; }
    catch (e) { return {}; }
  }
  function markSeen(date, ver) {
    try { localStorage.setItem('noticeSeen', JSON.stringify({ date: date, ver: ver })); } catch (e) { /* 忽略 */ }
  }
  function cacheNotice(obj) {
    try { localStorage.setItem('noticeCache', JSON.stringify(obj)); } catch (e) { /* 忽略 */ }
  }
  function cachedNotice() {
    try { return JSON.parse(localStorage.getItem('noticeCache') || 'null'); } catch (e) { return null; }
  }

  /* ---------------- 弹窗 ---------------- */
  var el = null;
  function t(key, vars) {
    try {
      var s = window.I18N && window.I18N.t ? window.I18N.t(key, vars) : key;
      return s === key && vars ? key : s;
    } catch (e) { return key; }
  }

  function buildModal() {
    if (el) return el;
    var overlay = document.createElement('div');
    overlay.id = 'notice-overlay';
    overlay.innerHTML =
      '<div id="notice-card" role="dialog">' +
      '  <div class="notice-head"><span class="notice-title"></span>' +
      '    <span class="notice-date"></span></div>' +
      '  <div class="notice-newver" style="display:none"></div>' +
      '  <div class="notice-body"></div>' +
      '  <div class="notice-btns">' +
      '    <button class="notice-btn" id="notice-dontshow"></button>' +
      '    <button class="notice-btn primary" id="notice-ok"></button>' +
      '  </div>' +
      '</div>';
    document.body.appendChild(overlay);
    el = overlay;
    return el;
  }

  function showPopup(info, manual) {
    var m = buildModal();
    m.querySelector('.notice-title').textContent = t('notice.title'); // i18n 里已含 📢，别再加
    m.querySelector('.notice-date').textContent = info.date || '';
    var nv = m.querySelector('.notice-newver');
    if (info.versionNew) {
      nv.style.display = 'block';
      nv.textContent = t('notice.newVer', { remote: info.remoteVer, local: cfg.APP_VERSION });
    } else {
      nv.style.display = 'none';
    }
    m.querySelector('.notice-body').textContent = info.content || t('notice.none');
    m.querySelector('#notice-ok').textContent = t('notice.ok');
    var dont = m.querySelector('#notice-dontshow');
    dont.textContent = t('notice.dontShow');
    dont.style.display = manual ? 'none' : 'inline-block'; // 手动查看时不出现「不再提示」

    dont.onclick = function () {
      markSeen(info.date, info.remoteVer);
      close();
    };
    m.querySelector('#notice-ok').onclick = close;
    function close() { el.classList.remove('show'); }

    m.classList.add('show');
  }
  function close() {
    if (el) el.classList.remove('show');
  }

  /* ---------------- 拉取与判断 ---------------- */
  function checkNow(manual) {
    var url = noticeUrl();
    if (!url) {
      if (manual) toast(t('upd.notConfigured', { v: cfg.APP_VERSION }));
      return;
    }
    var NET = window.UPDATE_NET || {};
    var doFetch = NET.fetchText || function (u, ms) {
      // 极旧包兜底：不该走到这里（update-config.js 同包发布）
      return Promise.reject(new Error('no UPDATE_NET'));
    };
    var doParse = NET.parseNotice || function (text) {
      var lines = String(text).replace(/^\uFEFF/, '').split(/\r?\n/);
      var date = (lines.shift() || '').trim();
      return { version: '', date: date, content: lines.join('\n').trim() };
    };
    var verP = doFetch(cfg.VERSION_URL, 8000)
      .then(function (t) { return /^[0-9]+(\.[0-9]+)*$/.test(t.trim()) ? t.trim() : ''; })
      .catch(function () { return ''; });   // version.txt 是可选文件，404/无网都不算错
    var noticeP = doFetch(url, 8000)
      .then(doParse)
      .catch(function () { return null; });
    Promise.all([verP, noticeP]).then(function (rs) {
      var verFile = rs[0];
      var notice = rs[1];
      if (!notice || (!notice.date && !notice.content)) {
        if (manual) toast(t('notice.none'));
        return;
      }
      // 版本号：version.txt 优先，否则公告.txt 第一行
      var remoteVer = verFile || notice.version || '';
      cacheNotice({ date: notice.date, content: notice.content, ver: remoteVer });
      var stored = seen();
      var versionNew = !!remoteVer && isNewer(remoteVer, cfg.APP_VERSION) &&
        !(stored.ver && !isNewer(remoteVer, stored.ver)); // 不再提示过的版本不再弹
      var noticeNew = !!notice.date && notice.date !== stored.date;
      if (!manual && !versionNew && !noticeNew) return; // 都不新 → 静默
      showPopup({
        date: notice.date,
        content: notice.content,
        remoteVer: remoteVer,
        versionNew: !!versionNew,
      }, !!manual);
    }).catch(function () { /* 无网/超时：静默放弃，等下次打开 */ });
  }

  function toast(text, ms) {
    // 复用 update.js 的提示条；元素还不存在就自己建一个（修复第四十一轮：
    // 先点「公告」且从未触发过更新提示时，update-toast 不存在 → 提示被静默丢弃）
    var el2 = document.getElementById('update-toast');
    if (!el2) {
      el2 = document.createElement('div');
      el2.id = 'update-toast';
      document.body.appendChild(el2);
    }
    el2.textContent = text;
    el2.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { el2.classList.remove('show'); }, ms || 3600);
  }

  /* ---------------- 启动 ---------------- */
  function init() {
    if (!noticeUrl()) return; // 更新源未配置 → 整个公告功能关闭
    // 「公告」按钮插在「更新」按钮前面
    var updateBtn = document.getElementById('btn-update');
    if (updateBtn && !document.getElementById('btn-notice')) {
      var b = document.createElement('button');
      b.className = 'tool';
      b.id = 'btn-notice';
      b.title = t('notice.title');
      b.setAttribute('data-i18n', 'btn.notice');
      b.textContent = t('btn.notice');
      b.addEventListener('click', function () { checkNow(true); });
      updateBtn.parentNode.insertBefore(b, updateBtn);
    }
    // 启动 2.5 秒后后台检查（不抢加载资源、不卡界面）
    // __NOTICE_NO_AUTO：测试钩子——测试台自己控制检查时机，不要这个定时器来捣乱
    if (!window.__NOTICE_NO_AUTO) setTimeout(function () { checkNow(false); }, 2500);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  /* 供调试/手动触发（checkAuto = 走启动时的自动弹窗逻辑，含 不再提示 按钮） */
  window.PetNotice = {
    check: function () { checkNow(true); },
    checkAuto: function () { checkNow(false); },
  };
})();
