// ★ 公告功能（第四十轮建；第四十一轮接入用户 GitHub；第四十二轮提速改造）
//
// 数据源：GitHub 上与 version.txt 同目录的 公告.txt
//   新格式：第一行=版本号，第二行=公告日期，其余=内容（解析在 update-config.js 的 UPDATE_NET）
//   旧格式：第一行=日期，其余=内容 —— 也兼容
// 地址自动推导：UPDATE_CONFIG.VERSION_URL 的同目录 + 公告.txt（未配置则整个功能关闭）
// 版本号来源：version.txt 优先（可选文件，404 不报错），否则用 公告.txt 第一行
//
// ★ 速度（第四十二轮，用户反馈"点击公告五六秒才弹、启动检测慢"）：
//   · 启动后 0.3 秒即开始后台拉取（fetch 本来就是异步的，不抢加载资源）；
//   · 点「公告」按钮：本地缓存**立即上屏**（0 等待），后台再去拉最新——
//     拉到的和缓存一样就什么都不动；拉到新公告（日期/内容/版本变了）就刷新弹窗
//     （开着就原位刷新，关了会重新弹出一次）；
//   · 无缓存且拉取失败 → 明确提示（原来失败是静默的，用户点按钮"没反应"就是这个原因）。
//
// 弹窗条件（自动检查）：远端版本号 > 本机，或公告日期与上次「不再提示」记录的不同
// 弹窗内容 = 先说明有最新版本（如有），再显示公告正文
// 按钮     = 知道了（仅关闭） / 不再提示（记住 日期+版本，直到下一个版本或新公告才再弹）
// 右上角「公告」按钮 = 随时查看；**哪怕按过「不再提示」，点按钮也照样弹出来**
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

  /* 公告指纹：日期/版本/内容 任一不同 = 另一条公告
     （用户：一天可以发两条公告，点过旧公告的"不再提示"，新公告照样要弹） */
  function noticeKey(date, ver, content) {
    var s = String(date || '') + '|' + String(ver || '') + '|' + String(content || '');
    var h = 5381;
    for (var i = 0; i < s.length; i++) { h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; }
    return 'k' + h.toString(36);
  }
  function seen() {
    try { return JSON.parse(localStorage.getItem('noticeSeen') || '{}') || {}; }
    catch (e) { return {}; }
  }
  function markSeen(key) {
    try { localStorage.setItem('noticeSeen', JSON.stringify({ key: key })); } catch (e) { /* 忽略 */ }
  }
  /* 上次同步到的 GitHub 版本（update.js 维护），用于"版本行"是否显示 */
  function syncedVer() {
    try {
      var r = JSON.parse(localStorage.getItem('chubbySync') || 'null');
      return r && r.ver ? r.ver : cfg.APP_VERSION;
    } catch (e) { return cfg.APP_VERSION; }
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
    // 版本行：GitHub 上的版本和本地已同步的不一样 → 提醒点「更新」同步
    if (info.remoteVer && info.remoteVer !== syncedVer()) {
      nv.style.display = 'block';
      nv.textContent = t('notice.newVer', { remote: info.remoteVer });
    } else {
      nv.style.display = 'none';
    }
    m.querySelector('.notice-body').textContent = info.content || t('notice.none');
    m.querySelector('#notice-ok').textContent = t('notice.ok');
    var dont = m.querySelector('#notice-dontshow');
    dont.textContent = t('notice.dontShow');
    dont.style.display = manual ? 'none' : 'inline-block'; // 手动查看时不出现「不再提示」

    dont.onclick = function () {
      markSeen(info.key);
      close();
    };
    m.querySelector('#notice-ok').onclick = close;
    function close() { el.classList.remove('show'); }

    m.classList.add('show');
  }
  function close() {
    if (el) el.classList.remove('show');
  }

  /* ---------------- 缓存即时弹（手动快速路径） ---------------- */
  function showCached(manual) {
    var c = cachedNotice();
    if (!c || (!c.date && !c.content)) return false;
    showPopup({ date: c.date, content: c.content, remoteVer: c.ver || '',
                key: noticeKey(c.date, c.ver, c.content) }, manual);
    return true;
  }

  /* ---------------- 拉取与判断 ---------------- */
  function checkNow(manual) {
    var url = noticeUrl();
    if (!url) {
      if (manual) toast(t('upd.notConfigured', { v: cfg.APP_VERSION }));
      return;
    }
    // ★ 手动点击：缓存先上屏（0 等待），后台再刷新
    var showed = false;
    if (manual) {
      showed = showCached(true);
      if (!showed) toast(t('notice.fetching'), 2500);
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
    var netFailN = false;   // 公告拉取是"网络不通"还是"服务器说没有"（决定手动点击给哪个提示）
    function isNetErr(e) {
      var m = String(e && e.message || e);
      return m.indexOf('HTTP') !== 0;   // 'HTTP 404' 是服务器应答；其余（timeout/Failed to fetch）当网络问题
    }
    var verP = doFetch(cfg.VERSION_URL, 8000)
      .then(function (t) { return /^[0-9]+(\.[0-9]+)*$/.test(t.trim()) ? t.trim() : ''; })
      .catch(function () { return ''; });   // version.txt 是可选文件，404/无网都不算错
    var noticeP = doFetch(url, 8000)
      .then(doParse)
      .catch(function (e) { netFailN = isNetErr(e); return null; });
    Promise.all([verP, noticeP]).then(function (rs) {
      var verFile = rs[0];
      var notice = rs[1];
      if (!notice || (!notice.date && !notice.content)) {
        // 手动点击必须有反应：网络不通 → 无网提示；服务器上没有 → 暂无公告
        if (manual && !showed) toast(t(netFailN ? 'upd.offline' : 'notice.none'));
        return;
      }
      // 版本号：version.txt 优先，否则公告.txt 第一行
      var remoteVer = verFile || notice.version || '';
      var prev = cachedNotice();
      var changed = !prev || prev.date !== notice.date ||
        prev.content !== notice.content || (prev.ver || '') !== remoteVer;
      cacheNotice({ date: notice.date, content: notice.content, ver: remoteVer });
      var key = noticeKey(notice.date, remoteVer, notice.content);
      var isNew = key !== seen().key;   // 和上一次"不再提示"的那条不一样 = 新公告
      if (!manual && !isNew) return;    // 旧公告且点过不再提示 → 静默
      if (manual) {
        // 缓存已上屏且内容没变 → 不折腾；变了（拉到新公告）→ 刷新/重弹
        if (showed && !changed) return;
        showPopup({ date: notice.date, content: notice.content, remoteVer: remoteVer,
                    key: key }, true);
      } else {
        showPopup({ date: notice.date, content: notice.content, remoteVer: remoteVer,
                    key: key }, false);
      }
    }).catch(function () {
      // ★ 拉取失败不能再静默：没缓存时点按钮要给个说法（"没反应"就是这个）
      if (manual && !showed) toast(t('upd.offline'), 5000);
    });
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
    // 「公告」按钮：index.html 里有静态按钮（第四十二轮发现的关键 bug——
    // 旧逻辑"按钮不存在才创建"，静态按钮存在 → 从来没人给它绑点击 → 点了没反应！）
    // 现在两种来源都统一在这里绑事件
    var updateBtn = document.getElementById('btn-update');
    var b = document.getElementById('btn-notice');
    if (!b) {
      b = document.createElement('button');
      b.className = 'tool';
      b.id = 'btn-notice';
      b.setAttribute('data-i18n', 'btn.notice');
      if (updateBtn) updateBtn.parentNode.insertBefore(b, updateBtn);
      else document.body.appendChild(b);
    }
    b.title = t('notice.title');
    b.textContent = t('btn.notice');
    b.addEventListener('click', function () { checkNow(true); });
    // ★ 启动 0.3 秒后立即后台检查（fetch 异步不卡界面；原来等 2.5 秒纯属浪费）
    // __NOTICE_NO_AUTO：测试钩子——测试台自己控制检查时机
    if (!window.__NOTICE_NO_AUTO) setTimeout(function () { checkNow(false); }, 300);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  /* 供调试/手动触发（checkAuto = 走启动时的自动弹窗逻辑，含 不再提示 按钮） */
  window.PetNotice = {
    check: function () { checkNow(true); },
    checkAuto: function () { checkNow(false); },
  };
})();
