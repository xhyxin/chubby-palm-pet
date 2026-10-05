// ★ 内置「检查更新」（第三十二轮新增；第四十一轮改造）——自包含，不依赖 main.js，不碰引擎
//
// 版本号来源：GitHub 仓库里的 version.txt（可选，存在且合法时优先），
//             没有就用 公告.txt 第一行（UPDATE_NET.parseNotice 解析）。
// 网络策略：点按钮先查 navigator.onLine，无网直接提示；拉取失败自动换镜像线路重试一次。
//
// 三端行为：
//   电脑端（WebView2 壳）：有新版 → 下载热更新包(zip，默认仓库整包归档) → 壳解压覆盖 app 目录 → 自动重载（热更新，免重装）
//   安卓端（WebView 壳）  ：新版壳支持热更新（下载 zip 覆盖到应用数据目录的覆盖层）；
//                           旧版壳没有 performUpdate 桥 → 退回跳发布页下载新 APK
//   网页端（静态托管）    ：提示刷新托管站点（托管的内容本身就是最新）
//
// 更新源未配置时按钮会提示"更新源未配置"，不会报错。
(function () {
  'use strict';

  var cfg = window.UPDATE_CONFIG || {};
  var plat = detectPlatform();

  function detectPlatform() {
    try {
      if (window.AndroidBridge && typeof window.AndroidBridge.openUrl === 'function') return 'android';
      if (window.HostBridge || (window.chrome && window.chrome.webview && window.chrome.webview.postMessage)) return 'pc';
    } catch (e) { /* 忽略检测失败，按网页端处理 */ }
    return 'web';
  }

  // 版本号比较：按"."分段逐段比数字（2.0 < 2.1 < 2.10）
  function isNewer(remote, local) {
    var a = String(remote).trim().split('.');
    var b = String(local).trim().split('.');
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      var x = parseInt(a[i], 10) || 0;
      var y = parseInt(b[i], 10) || 0;
      if (x > y) return true;
      if (x < y) return false;
    }
    return false;
  }

  // 轻量提示条（复用底部互动按钮的配色风格）
  var toastEl = null;
  function toast(text, ms) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.id = 'update-toast';
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = text;
    toastEl.classList.add('show');
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { toastEl.classList.remove('show'); }, ms || 3600);
  }

  function offline() {
    try { if (navigator.onLine === false) return true; } catch (e) { /* 忽略 */ }
    return false;
  }

  /* 拉远端版本号 + 公告。返回 {ver, date, netFail}
   * ver 为空串表示远端没给版本号；netFail=true 表示两个文件都因网络问题没拉到 */
  function fetchRemote() {
    var NET = window.UPDATE_NET || {};
    var doFetch = NET.fetchText;
    if (!doFetch) return Promise.reject(new Error('UPDATE_NET 未加载'));
    var doParse = NET.parseNotice || function (t) { return { version: '', date: '', content: t }; };
    var noticeUrl = '';
    var i = cfg.VERSION_URL.lastIndexOf('/');
    noticeUrl = (i < 0 ? '' : cfg.VERSION_URL.slice(0, i + 1)) + encodeURIComponent('公告.txt');
    function isNetErr(e) {
      var m = String(e && e.message || e);
      return m.indexOf('HTTP') !== 0;   // 'HTTP 404' 是服务器应答；其余（timeout/Failed to fetch）当网络问题
    }
    var netFail = { ver: false, notice: false };
    var verP = doFetch(cfg.VERSION_URL, 8000)
      .then(function (t) { return /^[0-9]+(\.[0-9]+)*$/.test(t.trim()) ? t.trim() : ''; })
      .catch(function (e) { netFail.ver = isNetErr(e); return ''; });   // version.txt 可选，没有不算失败
    var noticeP = doFetch(noticeUrl, 8000)
      .then(doParse)
      .catch(function (e) { netFail.notice = isNetErr(e); return null; }); // 公告拉不到 → 只信 version.txt
    return Promise.all([verP, noticeP]).then(function (rs) {
      var notice = rs[1];
      var ver = rs[0] || (notice && notice.version) || '';
      var date = notice && notice.date || '';
      return { ver: ver, date: date, netFail: netFail.ver && netFail.notice };
    });
  }

  function checkUpdate() {
    var btn = document.getElementById('btn-update');
    if (!cfg.VERSION_URL) {
      toast(I18N.t('upd.notConfigured', { v: cfg.APP_VERSION }), 5000);
      return;
    }
    if (offline()) { toast(I18N.t('upd.offline'), 5000); return; }   // ★ 先提示有没有网络
    if (btn) { btn.disabled = true; btn.textContent = I18N.t('upd.checking'); }
    fetchRemote()
      .then(function (r) {
        if (r.netFail) { toast(I18N.t('upd.offline'), 5000); return; }  // 直连+镜像都不通 = 没网
        if (!r.ver) {
          // 远端既没有 version.txt 也没有公告版本号（比如作者还没填公告）
          toast(I18N.t('upd.noVersion', { v: cfg.APP_VERSION }), 5000);
          return;
        }
        if (!isNewer(r.ver, cfg.APP_VERSION)) {
          toast(I18N.t('upd.latest', { v: cfg.APP_VERSION }), 3600);
          return;
        }
        onNewer(r.ver);
      })
      .catch(function (err) {
        toast(I18N.t(offline() ? 'upd.offline' : 'upd.fail', { msg: err.message }), 5000);
      })
      .then(function () {
        if (btn) { btn.disabled = false; btn.textContent = I18N.t('btn.update'); }
      });
  }

  /* 选热更新包直链：检查更新时哪条线路通就用哪条（直连 / 镜像） */
  function zipUrlFor() {
    var url = cfg.UPDATE_ZIP_URL || '';
    try {
      if (window.UPDATE_NET && window.UPDATE_NET.mirrorInUse && window.UPDATE_NET.mirrorInUse()) {
        var p = cfg.MIRROR_PREFIX || '';
        if (p && url && url.indexOf(p) !== 0) return p + url;
      }
    } catch (e) { /* 忽略 */ }
    return url;
  }

  function onNewer(remote) {
    if (plat === 'pc') {
      if (!cfg.UPDATE_ZIP_URL) { toast(I18N.t('upd.noZipUrl', { remote: remote }), 5000); return; }
      if (!confirm(I18N.t('upd.pcConfirm', { remote: remote, local: cfg.APP_VERSION }))) return;
      toast(I18N.t('upd.downloading'), 8000);
      window.chrome.webview.postMessage('perform-update:' + JSON.stringify({ zipUrl: zipUrlFor(), version: remote }));
    } else if (plat === 'android') {
      if (window.AndroidBridge && typeof window.AndroidBridge.performUpdate === 'function') {
        // ★ 新版壳：安卓也走热更新（下载 zip 解压进应用数据目录的覆盖层，免重装）
        if (!cfg.UPDATE_ZIP_URL) { toast(I18N.t('upd.noZipUrl', { remote: remote }), 5000); return; }
        if (!confirm(I18N.t('upd.androidHot', { remote: remote, local: cfg.APP_VERSION }))) return;
        toast(I18N.t('upd.downloading'), 8000);
        window.__petUpdateResult = function (msg) {
          msg = String(msg || '');
          if (msg === 'update-done') {
            toast(I18N.t('upd.done'), 8000);
            setTimeout(function () { location.href = location.pathname + '?v=' + Date.now(); }, 600);
          } else if (msg.indexOf('update-error:') === 0) {
            toast(I18N.t('upd.error', { msg: msg.slice(14) }), 8000);
          }
        };
        try {
          window.AndroidBridge.performUpdate(JSON.stringify({ zipUrl: zipUrlFor(), version: remote }));
        } catch (e) {
          toast(I18N.t('upd.error', { msg: e.message }), 8000);
        }
        return;
      }
      // 旧版壳：没有热更新桥 → 跳发布页下新 APK
      if (!cfg.RELEASE_PAGE_URL) { toast(I18N.t('upd.androidNoUrl', { remote: remote }), 5000); return; }
      if (!confirm(I18N.t('upd.androidConfirm', { remote: remote, local: cfg.APP_VERSION }))) return;
      try { window.AndroidBridge.openUrl(cfg.RELEASE_PAGE_URL); } catch (e) { toast(I18N.t('upd.androidOpenFail', { msg: e.message })); }
    } else {
      toast(I18N.t('upd.web', { remote: remote }), 6000);
    }
  }

  // 电脑端壳的回信（更新完成 / 失败）
  function bindHostReply() {
    if (!(window.chrome && window.chrome.webview && window.chrome.webview.addEventListener)) return;
    window.chrome.webview.addEventListener('message', function (e) {
      var msg = e.data == null ? '' : String(e.data);
      if (msg === 'update-done') {
        toast(I18N.t('upd.done'), 8000);
        setTimeout(function () { location.href = location.pathname + '?v=' + Date.now(); }, 600);
      } else if (msg.indexOf('update-error:') === 0) {
        toast(I18N.t('upd.error', { msg: msg.slice(14) }), 8000);
      }
    });
  }

  function init() {
    bindHostReply();
    var btn = document.getElementById('btn-update');
    if (btn) {
      btn.title = I18N.t('btn.title.update', { v: cfg.APP_VERSION });
      btn.addEventListener('click', checkUpdate);
    }
    try {
      window.addEventListener('uilang-changed', function () {
        if (btn) btn.title = I18N.t('btn.title.update', { v: cfg.APP_VERSION });
      });
    } catch (e) { /* 忽略 */ }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
