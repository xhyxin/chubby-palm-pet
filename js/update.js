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

  // 轻量提示条。
  // ★ 第七十五轮（用户反馈）：①「舒胖正在送达最新版本…」会折成两行 → 现在文字**强制一行**（超出省略）；
  //   ② 更新进度"一会就消失" → 更新期间（sticky）**常驻不消失**，只有完成/失败才收。
  //   元素结构：#update-toast > #update-toast-text + #update-toast-fill（底部细进度条）
  var barEl = null, barText = null, barFill = null, hideTimer = null;
  function ensureBar() {
    if (barEl && barEl.parentNode && barText && barText.parentNode) return barEl;
    /* ★ 第七十五轮：notice.js 也会用这个提示条（它比本文件先加载，可能已经建过）。
       以前这里直接 createElement 会**造出第二个同 id 的 div** —— getElementById 拿到的是
       第一个，写进去的字看不见（用户看到的"进度一会就消失"就是这个坑）。
       现在先接管页面上已有的那个。 */
    var exist = document.getElementById('update-toast');
    barEl = exist || document.createElement('div');
    barEl.id = 'update-toast';
    barEl.innerHTML = '';
    barText = document.createElement('span');
    barText.id = 'update-toast-text';
    barFill = document.createElement('i');
    barFill.id = 'update-toast-fill';
    barEl.appendChild(barText);
    barEl.appendChild(barFill);
    if (!exist) document.body.appendChild(barEl);
    return barEl;
  }
  /* sticky=true：一直显示（更新进行中）；pct：0~100（null = 不显示进度条） */
  function showBar(text, pct, sticky) {
    ensureBar();
    barText.textContent = text;
    barFill.style.width = (pct == null ? 0 : Math.max(0, Math.min(100, pct))) + '%';
    barEl.classList.toggle('progress', !!sticky);
    barEl.classList.toggle('has-pct', pct != null);
    barEl.classList.add('show');
    clearTimeout(hideTimer);
    if (!sticky) hideTimer = setTimeout(function () { barEl.classList.remove('show'); }, 4200);
  }
  function hideBar(delay) {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () { if (barEl) barEl.classList.remove('show'); }, delay || 0);
  }
  /* 一次性提示（错误、已是最新…）：ms 后自动消失 */
  function toast(text, ms) {
    ensureBar();
    showBar(text, null, false);
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () { barEl.classList.remove('show'); }, ms || 3600);
  }

  /* 整页重载（热更完成后）。★ 第七十五轮：留一个测试钩子 —— 回归测试台要连着跑几十条断言，
     中途整页重载会把查询串（?plat=pc）丢掉、后面的用例全跑成网页场景。 */
  function reloadPage() {
    if (typeof window.__petReloadHook === 'function') {
      try { window.__petReloadHook(); return; } catch (e) { /* 钩子出错就走正常重载 */ }
    }
    location.href = location.pathname + '?v=' + Date.now();
  }

  /* 「更新」按钮复位（第七十五轮）：同步过程中按钮保持"送达中"是故意的，
     但**结束（成功/失败/回退）一定要复位**，否则按钮永远 disabled，后面再点没反应。 */
  function resetUpdateBtn() {
    var b = document.getElementById('btn-update');
    if (b) { b.disabled = false; b.textContent = I18N.t('btn.update'); }
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
    var race = NET.probeAndFetch || doFetch;   // ★ 竞速：全部线路一起发，谁快用谁（还顺便选出全程要用的线路）
    /* 25s：冷启动时最快的线路首响应也可能要十几秒，给太短会把好线路掐死 */
    return race(noticeUrl, 25000)
      .then(doParse)
      .catch(function (e) { netFail = isNetErr(e); return null; })
      .then(function (notice) {
        return { notice: notice, netFail: netFail };
      });
  }

  /* ---------------- 增量同步 ---------------- */
  /* 每个文件给壳两条 URL（壳只认两列）。★ 第六十四轮：
     直连 raw 在国内基本不通，所以**已经确认走镜像时把镜像排第一**，
     否则壳会先在死线路上耗一次超时，几百个文件累积起来就是"卡住不动"。 */
  function rawUrls(path) {
    var i = cfg.VERSION_URL.lastIndexOf('/');
    var base = i < 0 ? '' : cfg.VERSION_URL.slice(0, i + 1);
    var direct = base + path.split('/').map(encodeURIComponent).join('/');
    var NET = window.UPDATE_NET || {};
    /* ★ 第七十五轮（提速）：NET.mirrorUrlsFor 返回"测出来最快的镜像在前"的列表。
       给壳前 3 条镜像 + 直连垫底（直连国内基本不通，放最后免得白等超时）。 */
    var ms = [];
    try { ms = (NET.mirrorUrlsFor && NET.mirrorUrlsFor(direct)) || []; } catch (e) { ms = []; }
    var out = ms.slice(0, 3);
    out.push(direct);
    return out;
  }

  /* 远端文件清单：★ 第六十四轮改成**优先读仓库里的静态清单**。
     原因：api.github.com 未认证只有 60 次/小时/IP，国内大量用户共用出口 IP → 403；
     而镜像（gh-proxy 等）**不代理 api**（实测 403），所以老路子在国内必然失败。
     仓库里随包上传的 `js/sync-manifest.js` 就是同一份 sha 表（GitHub Blob SHA1），
     走 raw + 镜像就能拿（实测 200），完全绕开限流。API 只留作兜底。 */
  function treeFromManifest() {
    var NET = window.UPDATE_NET || {};
    if (!cfg.REMOTE_MANIFEST_URL) return Promise.reject(new Error('REMOTE_MANIFEST_URL 未配置'));
    return NET.fetchText(cfg.REMOTE_MANIFEST_URL, 60000).then(function (t) {
      var m = /SYNC_MANIFEST\s*=\s*(\{[\s\S]*\})\s*;?\s*$/.exec(String(t));
      if (!m) throw new Error('远端清单格式不对');
      var files = (JSON.parse(m[1]).files) || {};
      var tree = [];
      for (var p in files) {
        if (Object.prototype.hasOwnProperty.call(files, p)) {
          tree.push({ type: 'blob', path: p, sha: files[p], size: 0 });
        }
      }
      if (!tree.length) throw new Error('远端清单是空的');
      return { tree: tree, truncated: false, sha: '' };
    });
  }

  function treeFromApi() {
    var NET = window.UPDATE_NET || {};
    if (!cfg.TREE_API_URL) return Promise.reject(new Error('TREE_API_URL 未配置'));
    return NET.fetchText(cfg.TREE_API_URL, 30000).then(function (t) {
      var j = JSON.parse(t);
      if (!j || !j.tree) throw new Error('文件树格式不对');
      return j;
    });
  }

  function fetchTree() {
    return treeFromManifest().catch(function (e) {
      /* 清单拿不到（作者还没把 sync-manifest.js 传上去 / 镜像全挂）→ 退回 API */
      return treeFromApi().catch(function (e2) {
        var msg = String((e2 && e2.message) || '');
        if (/HTTP\s*403/.test(msg)) {
          /* 403 基本都是 api 限流或镜像不代理 api —— 给用户一句能照做的提示 */
          throw new Error(I18N.t('upd.blocked'));
        }
        throw e2;
      });
    });
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
    busy = true;
    lastPct = null;
    showBar(I18N.t('upd.syncing'), null, true);   // ★ 常驻，不再 10 秒消失
    var NET = window.UPDATE_NET || {};
    var treeSha = null;
    /* 拉清单可能要几十秒（国内走镜像，3MB 的 sync-manifest.js 实测 20~40 秒），
       这段时间也要有"活着"的反馈，否则用户以为卡死了。 */
    showBar(I18N.t('upd.checkingList'), null, true);
    fetchTree()
      .then(function (tree) {
        if (tree.truncated) throw new Error('仓库文件过多，无法增量比对');
        treeSha = tree.sha || '';
        return computeChanged(tree.tree);
      })
      .then(function (changed) {
        if (!changed.length) {
          setRecord({ ver: ver, date: date });
          busy = false;
          resetUpdateBtn();
          toast(I18N.t('upd.syncNoChange', { ver: ver }), 5000);
          return;
        }
        pendingSync = { ver: ver, date: date, changed: changed, slowShown: false };
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
        busy = false;
        pendingSync = null;
        resetUpdateBtn();
        toast(I18N.t('upd.error', { msg: err.message }), 8000);
      });
  }

  /* 看门狗：旧壳不认识 perform-files，永远不回信 → 超时才退回整包 zip 热更新。
     新壳每完成一个文件回一次 update-progress，看门狗随之顺延，不会误触发。
     ★ 第七十五轮（用户反馈"没翻墙时点一下过一会就提示失败"）：
       国内走镜像时单个文件可能要十几秒，原来 20 秒就判死太急。现在分两段：
       ① 25 秒没回信 → 只提示"网络有点慢"，**继续等**（壳其实还在下）；
       ② 再等 90 秒仍一条回信都没有 → 才退回整包，并且明确告诉用户在干什么。
       （镜像 100~200KB/s 时，一个几 MB 的文件就要十几秒，20 秒判死必然误伤。） */
  var watchdogTimer = null;
  var lastPct = null;
  var busy = false;
  function armWatchdog(ver, date, changed, phase) {
    clearTimeout(watchdogTimer);
    watchdogTimer = setTimeout(function () {
      if (!pendingSync) return;
      if (phase !== 'slow') {
        pendingSync.slowShown = true;
        showBar(I18N.t('upd.slow'), lastPct, true);   // 常驻，不打断壳
        armWatchdog(ver, date, changed, 'slow');
        return;
      }
      pendingSync = null;
      busy = false;
      resetUpdateBtn();
      showBar(I18N.t('upd.syncFallback'), null, true);
      var zipUrl = zipUrlFor();
      if (!zipUrl) {
        hideBar(4000);
        toast(I18N.t('upd.noZipUrl', { remote: ver }), 5000);
        return;
      }
      if (plat === 'pc') {
        window.chrome.webview.postMessage('perform-update:' + JSON.stringify({ zipUrl: zipUrl, version: ver }));
      } else if (window.AndroidBridge && typeof window.AndroidBridge.performUpdate === 'function') {
        window.AndroidBridge.performUpdate(JSON.stringify({ zipUrl: zipUrl, version: ver }));
      } else if (window.AndroidBridge && typeof window.AndroidBridge.openUrl === 'function' && cfg.RELEASE_PAGE_URL) {
        try { window.AndroidBridge.openUrl(cfg.RELEASE_PAGE_URL); } catch (e) { /* 忽略 */ }
      }
    }, phase === 'slow' ? 90000 : 25000);
  }
  /* 壳每下完一个文件回一次 "update-progress:done/total" */
  function progress(text) {
    if (!pendingSync) return;
    armWatchdog(pendingSync.ver, pendingSync.date, pendingSync.changed);   // 有回信就重新计时
    var m = /^\s*(\d+)\s*\/\s*(\d+)\s*$/.exec(String(text));
    if (m) {
      var done = parseInt(m[1], 10) || 0;
      var total = Math.max(1, parseInt(m[2], 10) || 1);
      lastPct = Math.round(done * 100 / total);
      showBar(I18N.t('upd.syncingShort') + ' ' +
        I18N.t('upd.progress', { done: done, total: total, pct: lastPct }), lastPct, true);
    } else {
      showBar(I18N.t('upd.syncingShort') + ' ' + text, lastPct, true);
    }
  }

  /* 整包兜底用的 zip 地址。
     ★ 第七十五轮：只走 prefix 形态的镜像（gh-proxy / ghfast …）——
     jsDelivr 不代理 github 的整包归档，拿 prefix() 拼会得到一个 404 地址。 */
  function zipUrlFor() {
    var url = cfg.UPDATE_ZIP_URL || '';
    try {
      var NET = window.UPDATE_NET || {};
      var ps = (NET.prefixUrlsFor && NET.prefixUrlsFor(url)) || [];
      if (ps.length) return ps[0];
      var p = (NET.prefix && NET.prefix()) || (NET.firstPrefix && NET.firstPrefix()) || cfg.MIRROR_PREFIX || '';
      if (p && url && url.indexOf(p) !== 0) return p + url;
    } catch (e) { /* 忽略 */ }
    return url;
  }

  function onSyncDone() {
    var ps = pendingSync;
    pendingSync = null;
    busy = false;
    resetUpdateBtn();
    if (!ps) return false;
    setRecord({ ver: ps.ver, date: ps.date });
    var map = {};
    for (var i = 0; i < ps.changed.length; i++) map[ps.changed[i].path] = ps.changed[i].sha;
    mergeExtra(map);
    // ★ 第五十二轮：只要同步下来东西就**整页重载**。
    //   以前"只改了图片/音频就不刷新、直接生效"其实不成立 —— 已经加载进内存的旧资源
    //   不会重新请求，用户会以为没更新。本地资源重载很快，刷新最确定。
    // ★ 第七十五轮：完成时进度条拉到 100%，停 0.9 秒再刷新（别让人以为"没反应就跳走了"）。
    showBar(I18N.t('upd.syncDone', { ver: ps.ver }), 100, true);
    setTimeout(reloadPage, 900);
    return true;
  }

  /* ---------------- 点「更新」 ----------------
     force=true 时忽略"公告没变就算最新"的短路，强制比对一次
     （长按「更新」按钮触发；作者只推了网页文件、忘了改公告时用） */
  function checkUpdate(force) {
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
        if (!force && record && record.ver === ver && record.date === date) {
          // ★ 只有一致才叫"已是最新"（版本号谁高谁低无所谓，GitHub 是唯一标准）
          toast(I18N.t('upd.latest', { v: ver }), 5000);
          return;
        }
        if (force) toast(I18N.t('upd.forceSync'), 4000);
        startSync(ver, date);
      })
      .catch(function (err) {
        toast(I18N.t(offline() ? 'upd.offline' : 'upd.fail', { msg: err.message }), 5000);
      })
      .then(function () {
        /* ★ 第七十五轮：正在同步时按钮保持"送达中"，别在下载途中变回「更新」让人以为失败了 */
        if (btn && !busy) { btn.disabled = false; btn.textContent = I18N.t('btn.update'); }
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
        busy = false;
        showBar(I18N.t('upd.done'), 100, true);
        setTimeout(reloadPage, 600);
      } else if (msg.indexOf('update-error:') === 0) {
        /* ⚠️ 'update-error:' 长度是 13，别写成 14（会吃掉错误信息的第一个字） */
        clearTimeout(watchdogTimer);
        pendingSync = null;
        busy = false;
        resetUpdateBtn();
        toast(I18N.t('upd.error', { msg: msg.slice('update-error:'.length) }), 8000);
      } else if (msg.indexOf('update-progress:') === 0) {
        /* ⚠️ 'update-progress:' 长度是 16，别写成 17（以前进度就变成 "/4"） */
        progress(msg.slice('update-progress:'.length));
      }
    });
  }

  /* 热更新自诊断（第五十二轮）：把当前热更状态吐出来，方便排障；探针也读它。
     channel：incremental=能增量热更（最好）/ zip=只能整包热更 / none=壳太旧不能热更 */
  window.__petUpdateDiag = function () {
    var rec = getRecord();
    var ex = getExtra();
    var n = 0;
    for (var k in ex) if (Object.prototype.hasOwnProperty.call(ex, k)) n++;
    var hasSync = !!(window.AndroidBridge && typeof window.AndroidBridge.syncFiles === 'function');
    var hasZip = (plat === 'pc' && !!(window.chrome && window.chrome.webview)) ||
                 !!(window.AndroidBridge && typeof window.AndroidBridge.performUpdate === 'function');
    return {
      platform: plat,
      appVersion: cfg.APP_VERSION,
      syncedTo: rec ? (rec.ver + ' / ' + rec.date) : '',
      overlaid: n,
      channel: hasSync ? 'incremental' : (hasZip ? 'zip' : 'none')
    };
  };

  function init() {
    window.__petToast = toast;   // ★ 让 notice.js 复用同一个提示条（别再各建一个）
    bindHostReply();
    // 安卓壳的回信入口常驻安装（syncFiles / performUpdate 都走它）
    if (plat === 'android') {
      window.__petUpdateResult = function (m) {
        m = String(m || '');
        if (m === 'update-done') {
          clearTimeout(watchdogTimer);
          if (onSyncDone()) return;
          busy = false;
          showBar(I18N.t('upd.done'), 100, true);
          setTimeout(reloadPage, 600);
        } else if (m.indexOf('update-error:') === 0) {
          clearTimeout(watchdogTimer);
          pendingSync = null;
          busy = false;
          resetUpdateBtn();
          toast(I18N.t('upd.error', { msg: m.slice('update-error:'.length) }), 8000);
        } else if (m.indexOf('update-progress:') === 0) {
          progress(m.slice('update-progress:'.length));
        }
      };
    }
    var btn = document.getElementById('btn-update');
    if (btn) {
      btn.title = I18N.t('btn.title.update', { v: cfg.APP_VERSION });
      // ★ 第五十二轮：单击 = 普通检查；长按 0.7 秒 = 强制同步
      //   （忽略"公告没变就算最新"的短路 —— 只推了网页文件、忘了改公告时用）
      var wantForce = false;
      var holdTimer = null;
      btn.addEventListener('pointerdown', function () {
        clearTimeout(holdTimer);
        holdTimer = setTimeout(function () { wantForce = true; }, 700);
      });
      ['pointerup', 'pointerleave', 'pointercancel'].forEach(function (ev) {
        btn.addEventListener(ev, function () { clearTimeout(holdTimer); });
      });
      // ★ 注意：这里不能直接把 checkUpdate 当监听器（Event 会被当成 force 参数）
      btn.addEventListener('click', function () {
        var f = wantForce;
        wantForce = false;
        checkUpdate(f);
      });
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
