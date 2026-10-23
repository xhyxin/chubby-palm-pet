// ★★★ 更新配置（第三十二轮新增；第四十一轮接入用户 GitHub + 镜像回退）★★★
//
// 数据源 = 用户 GitHub 仓库 https://github.com/xhyxin/chubby-palm-pet
//   · 公告.txt（必备）：第一行=版本号，第二行=公告日期，其余行=公告内容
//       2.9
//       2026-10-05
//       🎉 掌上坨坨 v2.9 上线啦！……
//     兼容旧格式（第一行=日期、其余=内容，版本只认 version.txt）；也认
//     「版本：2.9」「日期：10-05」这类带标签的写法。
//   · version.txt（可选）：纯版本号数字。存在且合法时优先生效，没有也没关系
//     （版本号改从 公告.txt 第一行读）。
//   · 热更新包：默认用仓库整包归档（archive/refs/heads/main.zip）——作者往仓库
//     推送网页文件即等于发版；也可换成 Releases 里的 update.zip 直链。
//
// 直连 GitHub 在部分网络环境不通，拉取失败会自动改走 MIRROR_PREFIX 镜像前缀
// （同一文件换前缀重试一次，成功的线路会被记住，本次会话内继续用）。
window.UPDATE_CONFIG = {
  APP_VERSION: "1.8.2",      // 本地版本号（打包时随包更新；与 安卓 build.gradle 的 versionName、
                           // 作者 GitHub 的 version.txt / 公告.txt 保持一致）
                           // ★ 第四十七轮：三端版本号统一为 1.2（以前的 2.9.3 是开发过程中的旧号，
                           //   正式对外公布从 1.2 起算；第五十一轮升到 1.3，
                           //   修了捏脸/摸头语音不随机 + 切后台不停音乐/切回变卡）。
                           // ★ 第五十六轮：1.4 → 1.4.1（修复 Mute 捏脸左右反绑）。
                           // ★ 第五十七轮：1.4.1 → 1.5（新增角色 UiMemory 雨伊（记忆）、
                           //   ViviDivine 薇薇（神圣）；Kidian 新增皮肤「星光探险队」）。
  VERSION_URL: "https://raw.githubusercontent.com/xhyxin/chubby-palm-pet/main/version.txt",
  UPDATE_ZIP_URL: "https://github.com/xhyxin/chubby-palm-pet/archive/refs/heads/main.zip",
  RELEASE_PAGE_URL: "https://github.com/xhyxin/chubby-palm-pet/releases/latest",
  /* ★ 第六十四轮（国内 403 修复）：镜像改成**有序列表**，逐个试，谁通用谁。
     实测（2026-10-21）：gh-proxy.com / ghfast.top / ghproxy.net 都能代理 raw；
     gh-proxy.top、hub.gitmirror.com 已失效，别再往列表里加。 */
  MIRROR_PREFIX: "https://gh-proxy.com/",            // 兼容旧代码，等价于 MIRROR_PREFIXES[0]
  MIRROR_PREFIXES: [
    "https://gh-proxy.com/",
    "https://ghfast.top/",
    "https://ghproxy.net/",
  ],
  // ★ 增量同步（第四十三轮）：仓库文件树 API。点「更新」时拉一次清单和本地比对，
  //   只下载有变化的文件（作者改个公告，客户端也只下几 KB，不用整包 2GB）。
  //   ⚠️ 第六十四轮起**只当兜底**：api.github.com 未认证是 60 次/小时/IP，
  //      国内大量用户共用出口 IP 很容易 403；而且镜像也不代理 api（gh-proxy 实测 403）。
  TREE_API_URL: "https://api.github.com/repos/xhyxin/chubby-palm-pet/git/trees/main?recursive=1",
  /* ★ 第六十四轮：**远端文件清单**（首选数据源，替代 api.github.com）。
     就是打包时生成、随包一起传到仓库的那份 `js/sync-manifest.js`
     （`{files: {路径: GitHub Blob SHA1}}`，与 TREE_API 的 sha 同算法），
     走 raw + 镜像就能拿，完全绕开 API 限流。 */
  REMOTE_MANIFEST_URL: "https://raw.githubusercontent.com/xhyxin/chubby-palm-pet/main/js/sync-manifest.js"
};

// ★ 共享网络小工具（第四十一轮）：带镜像回退的 fetch + 公告.txt 解析。
// 放在本文件是因为它在 notice.js / update.js 之前加载，两个功能共用。
window.UPDATE_NET = (function () {
  'use strict';
  var cfg = window.UPDATE_CONFIG || {};
  /* ★ 第六十四轮：单镜像改成**镜像列表 + 逐条试**。
     directOk=直连是否已验证可用；goodPrefix=已验证可用的镜像前缀（''=直连）。
     两者都是"提示"而不是硬绑定 —— 首选线路失败时仍会把其余候选全试一遍。
     ⚠️ MIRROR_PREFIX 排第一：老代码/测试台只改这一个字段，仍要生效。 */
  /* ⚠️ 每次现算，不缓存 —— 测试台是"加载完再改 UPDATE_CONFIG.MIRROR_PREFIX"的，
     缓存到 IIFE 初始化时会拿不到覆盖值（第五十二轮那套用例就是这么写的）。 */
  function prefixes() {
    var list = [];
    var push = function (p) { if (p && list.indexOf(p) < 0) list.push(p); };
    push(cfg.MIRROR_PREFIX);
    (cfg.MIRROR_PREFIXES || []).forEach(push);
    return list;
  }
  var directOk = null;
  var goodPrefix = '';

  function prefixOf(url) {
    var ps = prefixes();
    for (var i = 0; i < ps.length; i++) {
      if (url.indexOf(ps[i]) === 0) return ps[i];
    }
    return '';
  }
  function mirrorOf(url) {
    var ps = prefixes();
    var p = goodPrefix || ps[0] || '';
    if (!p || url.indexOf(p) === 0) return '';
    return p + url;
  }

  /* 候选线路：已知能用的排第一，其余全部跟在后面兜底 */
  function candidateUrls(url) {
    var out = [];
    if (directOk === true) out.push(url);
    else if (goodPrefix) out.push(goodPrefix + url);
    var all = [url];
    var ps = prefixes();
    for (var i = 0; i < ps.length; i++) all.push(ps[i] + url);
    for (var j = 0; j < all.length; j++) if (out.indexOf(all[j]) < 0) out.push(all[j]);
    return out;
  }

  function rawFetch(url, timeoutMs) {
    return new Promise(function (resolve, reject) {
      var ctrl = null;
      try { ctrl = new AbortController(); } catch (e) { ctrl = null; }
      var timer = setTimeout(function () {
        if (ctrl) try { ctrl.abort(); } catch (e2) { /* 忽略 */ }
        reject(new Error('timeout'));
      }, timeoutMs || 8000);
      fetch(url + (url.indexOf('?') >= 0 ? '&' : '?') + 't=' + Date.now(), {
        cache: 'no-store',
        signal: ctrl ? ctrl.signal : undefined,
      }).then(function (r) {
        clearTimeout(timer);
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.text();
      }).then(function (t) { resolve(String(t)); })
        .catch(function (e) { clearTimeout(timer); reject(e); });
    });
  }

  /* 直连优先 → 镜像逐个试；记住这次哪条线路通（zip 下载 / 逐文件下载也用它选路） */
  function fetchText(url, timeoutMs) {
    var urls = candidateUrls(url);
    var lastErr = null;
    function step(i) {
      if (i >= urls.length) return Promise.reject(lastErr || new Error('network'));
      return rawFetch(urls[i], timeoutMs).then(function (t) {
        if (i === 0 && urls[0] === url) { directOk = true; goodPrefix = ''; }
        else {
          directOk = false;
          goodPrefix = prefixOf(urls[i]);
        }
        return t;
      }, function (e) {
        lastErr = e;
        return step(i + 1);
      });
    }
    return step(0);
  }

  /* ---------------- 公告.txt 解析 ----------------
   * 新格式：第一行=版本号，第二行=公告日期，其余=内容
   * 旧格式：第一行=公告日期，其余=内容（版本只认 version.txt / 标签行）
   * 标签写法「版本：2.9」「日期：10-05」任何位置都认，且优先于位置规则 */
  function looksLikeDate(s) {
    return /^\d{4}[-/.年]\s*\d{1,2}([-/.月]\s*\d{1,2}日?)?$/.test(s) ||
           /^\d{1,2}[-/.月]\d{1,2}日?$/.test(s) ||
           (/\d{4}\s*年/.test(s) && /\d{1,2}\s*月/.test(s));
  }
  function looksLikeVersion(s) {
    return /^v?\d+(\.\d+){1,2}$/i.test(s);
  }
  function parseNotice(text) {
    var lines = String(text).replace(/^\uFEFF/, '').split(/\r?\n/);
    var version = '', date = '';
    var consumed = {};
    var i, m;
    // ① 带标签的行（任何位置，优先）
    for (i = 0; i < lines.length; i++) {
      var L = lines[i].trim();
      if (!L) continue;
      if (!version) {
        m = L.match(/^(?:版本|version)\s*[:：]?\s*(v?\d+(?:\.\d+){1,2})$/i);
        if (m) { version = m[1].replace(/^v/i, ''); consumed[i] = true; continue; }
      }
      if (!date) {
        m = L.match(/^(?:日期|date)\s*[:：]?\s*(.+)$/i);
        if (m && looksLikeDate(m[1].trim())) { date = m[1].trim(); consumed[i] = true; continue; }
      }
    }
    // ② 位置规则（第一行=版本，第二行=日期；旧格式第一行=日期）
    if (!version && !date && lines.length) {
      var l0 = (lines[0] || '').trim();
      var l1 = (lines[1] || '').trim();
      if (l0) {
        if (looksLikeVersion(l0)) {
          // 第一行是版本号（如 2.9）；若它同时长得像 M.D 日期（10.2），按用户格式视为版本
          version = l0.replace(/^v/i, ''); consumed[0] = true;
        } else if (looksLikeDate(l0)) {
          date = l0; consumed[0] = true; // 旧格式：第一行=日期
        }
      }
      if (version && !date) {
        for (i = 1; i < Math.min(lines.length, 4); i++) {
          var li = (lines[i] || '').trim();
          if (li && looksLikeDate(li)) { date = li; consumed[i] = true; break; }
        }
      }
    }
    var content = [];
    for (i = 0; i < lines.length; i++) {
      if (consumed[i]) continue;
      content.push(lines[i]);
    }
    return { version: version, date: date, content: content.join('\n').trim() };
  }

  return {
    fetchText: fetchText,
    parseNotice: parseNotice,
    mirrorInUse: function () { return !!goodPrefix; },
    /* 当前可用的镜像前缀（没走镜像时返回 ''）—— zip / 逐文件下载选路用 */
    prefix: function () { return goodPrefix || ''; },
    firstPrefix: function () { return prefixes()[0] || ''; },
    prefixes: prefixes,
  };
})();
