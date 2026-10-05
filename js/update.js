// ★ 内置「检查更新」（第三十二轮建；第四十三轮按用户模型重做）——自包含，不碰引擎
//
// ★ 用户定的模型（第四十三轮，GitHub 是唯一标准）：
//   · 本地记录（localStorage 的 chubbySync）只是"上次同步到 GitHub 哪里了"的标记，
//     用来比对，不是权威；
//   · 点「更新」：拉 公告.txt → 版本号或日期和本地记录**不一致**（不管谁高谁低，
//     哪怕作者回退到 0.1）→ 立刻同步 GitHub 的开源文件，就地热替换；
//     完全一致 → 才提示"已是最新"；
//   · 同步是**增量**的：拉一次仓库文件树 API，和打包时生成的本地清单
//     （js/sync-manifest.js，文件→Blob SHA1）比对，只下载有变化的文件——
//     作者改个公告，客户端也只下几 KB；
//   · 下载/替换由壳完成（电脑 perform-files / 安卓 syncFiles），完成后：
//     改了 js/html/css → 页面自动刷新；只改了图片音频 → 不刷新直接生效；
//     全程不用重下 APK/EXE，不用用户手动重启；
//   · 旧壳没有 syncFiles/perform-files 桥 → 退回整包 zip 热更新流程。
//
// 公告弹窗（js/notice.js）：打开软件后台检查，公告（日期/版本/内容）和上一次
// 「不再提示」的那条不一样就弹，弹窗带「不再提示」；点过不再提示的旧公告不再弹，
// 新公告照弹。
(function () {
  'use strict';

  var cfg = window.UPDATE_CONFIG || {};
  var plat = detectPlatform();
  var SYNC_KEY = 'chubbySync';   // {ver, date} 上次同步到的 GitHub 状态
  var EXTRA_KEY = 'chubbyExtra'; // {path: sha} 被同步覆盖过的文件（叠加在打包清单上）
  var pendingSync = null;        // 正在进行的同步 {ver, date, changed:[{path,sha}]}

  function detectPlatform() {
    try {
      if (window.AndroidBridge && typeof window.AndroidBridge.openUrl === 'function') return 'android';
      if (window.HostBridge || (window.chrome && window.chrome.webview && window.chrome.webview.postMessage)) return 'pc';
    } catch (e) { /* 忽略检测失败，按网页端处理 */ }
    return 'web';
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

  /* ---------------- 本地同步记录 ---------------- */
  function getRecord() {
    try { return JSON.parse(localStorage.getItem(SYNC_KEY) || 'null'); } catch (e) { return null; }
  }
  function setRecord(r) {
    try { localStorage.setItem(SYNC_KEY, JSON.stringify(r)); } catch (e) { /* 忽略 */ }
  }
  function getExtra() {
    try { return JSON.parse(localStorage.getItem(EXTRA_KEY) || '{}') || {}; } catch (e) { return {}; }
  }
  function mergeExtra(map) {
    var ex = getExtra();
    for (var k in map) ex[k] = map[k];
    try { localStorage.setItem(EXTRA_KEY, JSON.stringify(ex)); } catch (e) { /* 忽略 */ }
  }

  /* ---------------- 拉公告（版本+日期+内容） ---------------- */
  function fetchNotice() {
    var NET = window.UPDATE_NET || {};
    var doFetch = NET.fetchText;
    if (!doFetch) return Promise.reject(new Error('UPDATE_NET 未加载'));
    var doParse = NET.parseNotice || function (t) { return { version: '', date: '', content: t }; };
    var i = cfg.VERSION_URL.lastIndexOf('/');
    var noticeUrl = (i < 0 ? '' : cfg.VERSION_URL.slice(0, i + 1)) + encodeURIComponent('公告.txt');
    function isNetErr(e) {
      var m = String(e && e.message || e);
      return m.indexOf('HTTP') !== 0;   // 'HTTP 404' 是服务器应答；其余当网络问题
    }
    var netFail = false;
    return doFetch(noticeUrl, 8000)
      .then(doParse)
      .catch(function (e) { netFail = isNetErr(e); return null; })
      .then(function (notice) {
        return { notice: notice, netFail: netFail };
      });
  }

  /* ---------------- 增量同步 ---------------- */
  function rawUrls(path) {
    var i = cfg.VERSION_URL.lastIndexOf('/');
    var base = i < 0 ? '' : cfg.VERSION_URL.slice(0, i + 1);
    var direct = base + path.split('/').map(encodeURIComponent).join('/');
    var urls = [direct];
    try {
      var p = cfg.MIRROR_PREFIX || '';
      if (p) urls.push(p + direct);
    } catch (e) { /* 忽略 */ }
    return urls;
  }

  function loadBundledManifest() {
    if (window.SYNC_MANIFEST) return Promise.resolve(window.SYNC_MANIFEST.files || {});
    return new Promise(function (resolve) {
      var sc = document.createElement('script');
      sc.src = 'js/sync-manifest.js';
      sc.onload = function () { resolve((window.SYNC_MANIFEST && window.SYNC_MANIFEST.files) || {}); };
      sc.onerror = function () { resolve({}); };   // 没有清单就当全空（全部按仓库为准）
      document.head.appendChild(sc);
    });
  }

  function fetchTree() {
    var NET = window.UPDATE_NET || {};
    if (!cfg.TREE_API_URL) return Promise.reject(new Error('TREE_API_URL 未配置'));
    return NET.fetchText(cfg.TREE_API_URL, 30000).then(function (t) {
      var j = JSON.parse(t);
      if (!j || !j.tree) throw new Error('文件树格式不对');
      return j;
    });
  }

  /* 计算需要下载的文件：仓库树 vs (打包清单 + 已同步覆盖) */
  function computeChanged(tree) {
    return loadBundledManifest().then(function (base) {
      var extra = getExtra();
      var changed = [];
      for (var i = 0; i < tree.length; i++) {
        var f = tree[i];
        if (f.type !== 'blob') continue;
        var known = extra[f.path] !== undefined ? extra[f.path] : base[f.path];
        if (known !== f.sha) changed.push({ path: f.path, sha: f.sha, size: f.size || 0 });
      }
      return changed;
    });
  }

  function needsReload(changed) {
    for (var i = 0; i < changed.length; i++) {
      if (/\.(js|html|htm|css)$/i.test(changed[i].path)) return true;
    }
    return false;
  }

  function startSync(ver, date) {
    if (plat === 'web') { toast(I18N.t('upd.web', { remote: ver }), 6000); return; }
    var hasBridge =
      (plat === 'pc' && window.chrome && window.chrome.webview && window.chrome.webview.postMessage) ||
      (plat === 'android' && window.AndroidBridge && typeof window.AndroidBridge.syncFiles === 'function');
    if (!hasBridge) { toast(I18N.t('upd.noSyncBridge', { remote: ver }), 6000); return; }
    toast(I18N.t('upd.syncing'), 10000);
    var NET = window.UPDATE_NET || {};
    var treeSha = null;
    fetchTree()
      .then(function (tree) {
        if (tree.truncated) throw new Error('仓库文件过多，无法增量比对');
        treeSha = tree.sha || '';
        return computeChanged(tree.tree);
      })
      .then(function (changed) {
        if (!changed.length) {
          setRecord({ ver: ver, date: date });
          toast(I18N.t('upd.syncNoChange', { ver: ver }), 5000);
          return;
        }
        pendingSync = { ver: ver, date: date, changed: changed };
        // 紧凑行格式给壳：首行 ver\tdate，其后每行 path\turl1\turl2
        var lines = [ver + '\t' + date];
        for (var i = 0; i < changed.length; i++) {
          lines.push(changed[i].path + '\t' + rawUrls(changed[i].path).join('\t'));
        }
        var msg = 'perform-files:' + lines.join('\n');
        if (plat === 'android') {
          window.AndroidBridge.syncFiles(msg.slice('perform-files:'.length));
        } else {
          window.chrome.webview.postMessage(msg);
        }
        armWatchdog(ver, date, changed);
      })
      .catch(function (err) {
        toast(I18N.t('upd.error', { msg: err.message }), 8000);
      });
  }

  /* 看门狗：旧壳不认识 perform-files，永远不回信 → 超时就退回整包 zip 热更新。
     新壳每完成一个文件回一次 update-progress，看门狗随之顺延，不会误触发 */
  var watchdogTimer = null;
  function armWatchdog(ver, date, changed) {
    clearTimeout(watchdogTimer);
    watchdogTimer = setTimeout(function () {
      if (!pendingSync) return;
      pendingSync = null;
      toast(I18N.t('upd.syncFallback'), 8000);
      var zipUrl = zipUrlFor();
      if (!zipUrl) { toast(I18N.t('upd.noZipUrl', { remote: ver }), 5000); return; }
      if (plat === 'pc') {
        window.chrome.webview.postMessage('perform-update:' + JSON.stringify({ zipUrl: zipUrl, version: ver }));
      } else if (window.AndroidBridge && typeof window.AndroidBridge.performUpdate === 'function') {
        window.AndroidBridge.performUpdate(JSON.stringify({ zipUrl: zipUrl, version: ver }));
      } else if (window.AndroidBridge && typeof window.AndroidBridge.openUrl === 'function' && cfg.RELEASE_PAGE_URL) {
        try { window.AndroidBridge.openUrl(cfg.RELEASE_PAGE_URL); } catch (e) { /* 忽略 */ }
      }
    }, 20000);
  }
  function progress(text) {
    if (!pendingSync) return;
    if (pendingSync) armWatchdog(pendingSync.ver, pendingSync.date, pendingSync.changed);
    toast(I18N.t('upd.syncing') + ' (' + text + ')', 10000);
  }

  /* 整包兜底用的 zip 地址（沿用镜像选路） */
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

  function onSyncDone() {
    var ps = pendingSync;
    pendingSync = null;
    if (!ps) return false;
    setRecord({ ver: ps.ver, date: ps.date });
    var map = {};
    for (var i = 0; i < ps.changed.length; i++) map[ps.changed[i].path] = ps.changed[i].sha;
    mergeExtra(map);
    if (needsReload(ps.changed)) {
      toast(I18N.t('upd.syncDone', { ver: ps.ver }), 8000);
      setTimeout(function () { location.href = location.pathname + '?v=' + Date.now(); }, 600);
    } else {
      // 只改了图片/音频等资源：不刷新，直接生效
      toast(I18N.t('upd.syncDone', { ver: ps.ver }), 6000);
    }
    return true;
  }

  /* ---------------- 点「更新」 ---------------- */
  function checkUpdate() {
    var btn = document.getElementById('btn-update');
    if (!cfg.VERSION_URL) {
      toast(I18N.t('upd.notConfigured', { v: cfg.APP_VERSION }), 5000);
      return;
    }
    if (offline()) { toast(I18N.t('upd.offline'), 5000); return; }   // ★ 先提示有没有网络
    if (btn) { btn.disabled = true; btn.textContent = I18N.t('upd.checking'); }
    fetchNotice()
      .then(function (r) {
        var notice = r.notice;
        if (!notice || (!notice.date && !notice.content && !notice.version)) {
          toast(I18N.t(r.netFail ? 'upd.offline' : 'upd.noVersion', { v: cfg.APP_VERSION }), 5000);
          return;
        }
        if (r.netFail && !notice) { toast(I18N.t('upd.offline'), 5000); return; }
        var ver = notice.version || '';
        var date = notice.date || '';
        var record = getRecord();
        if (record && record.ver === ver && record.date === date) {
          // ★ 只有一致才叫"已是最新"（版本号谁高谁低无所谓，GitHub 是唯一标准）
          toast(I18N.t('upd.latest', { v: ver }), 5000);
          return;
        }
        startSync(ver, date);
      })
      .catch(function (err) {
        toast(I18N.t(offline() ? 'upd.offline' : 'upd.fail', { msg: err.message }), 5000);
      })
      .then(function () {
        if (btn) { btn.disabled = false; btn.textContent = I18N.t('btn.update'); }
      });
  }

  /* ---------------- 壳的回信 ---------------- */
  function bindHostReply() {
    if (!(window.chrome && window.chrome.webview && window.chrome.webview.addEventListener)) return;
    window.chrome.webview.addEventListener('message', function (e) {
      var msg = e.data == null ? '' : String(e.data);
      if (msg === 'update-done') {
        clearTimeout(watchdogTimer);
        if (onSyncDone()) return;   // 增量同步完成：存记录，按需刷新
        toast(I18N.t('upd.done'), 8000);
        setTimeout(function () { location.href = location.pathname + '?v=' + Date.now(); }, 600);
      } else if (msg.indexOf('update-error:') === 0) {
        clearTimeout(watchdogTimer);
        pendingSync = null;
        toast(I18N.t('upd.error', { msg: msg.slice(14) }), 8000);
      } else if (msg.indexOf('update-progress:') === 0) {
        progress(msg.slice(17));
      }
    });
  }

  function init() {
    bindHostReply();
    // 安卓壳的回信入口常驻安装（syncFiles / performUpdate 都走它）
    if (plat === 'android') {
      window.__petUpdateResult = function (m) {
        m = String(m || '');
        if (m === 'update-done') {
          clearTimeout(watchdogTimer);
          if (onSyncDone()) return;
          toast(I18N.t('upd.done'), 8000);
          setTimeout(function () { location.href = location.pathname + '?v=' + Date.now(); }, 600);
        } else if (m.indexOf('update-error:') === 0) {
          clearTimeout(watchdogTimer);
          pendingSync = null;
          toast(I18N.t('upd.error', { msg: m.slice(14) }), 8000);
        } else if (m.indexOf('update-progress:') === 0) {
          progress(m.slice(17));
        }
      };
    }
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
