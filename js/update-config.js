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
  APP_VERSION: "1.2",      // 本地版本号（打包时随包更新；与 安卓 build.gradle 的 versionName、
                           // 作者 GitHub 的 version.txt / 公告.txt 保持一致）
                           // ★ 第四十七轮：三端版本号统一为 1.2（以前的 2.9.3 是开发过程中的旧号，
                           //   正式对外公布从 1.2 起算）。
  VERSION_URL: "https://raw.githubusercontent.com/xhyxin/chubby-palm-pet/main/version.txt",
  UPDATE_ZIP_URL: "https://github.com/xhyxin/chubby-palm-pet/archive/refs/heads/main.zip",
  RELEASE_PAGE_URL: "https://github.com/xhyxin/chubby-palm-pet/releases/latest",
  MIRROR_PREFIX: "https://gh-proxy.com/",
  // ★ 增量同步（第四十三轮）：仓库文件树 API。点「更新」时拉一次清单和本地比对，
  //   只下载有变化的文件（作者改个公告，客户端也只下几 KB，不用整包 2GB）。
  TREE_API_URL: "https://api.github.com/repos/xhyxin/chubby-palm-pet/git/trees/main?recursive=1"
};

// ★ 共享网络小工具（第四十一轮）：带镜像回退的 fetch + 公告.txt 解析。
// 放在本文件是因为它在 notice.js / update.js 之前加载，两个功能共用。
window.UPDATE_NET = (function () {
  'use strict';
  var cfg = window.UPDATE_CONFIG || {};
  var goodMirror = null; // null=还没试过；true=直连可用；false=走镜像

  function mirrorOf(url) {
    var p = cfg.MIRROR_PREFIX || '';
    if (!p || url.indexOf(p) === 0) return '';
    return p + url;
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

  /* 直连优先，失败换镜像；记住这次哪条线路通（zip 下载也用它选路） */
  function fetchText(url, timeoutMs) {
    if (goodMirror === false) {
      var m = mirrorOf(url);
      if (m) return rawFetch(m, timeoutMs);
    }
    return rawFetch(url, timeoutMs).then(function (t) {
      goodMirror = true;
      return t;
    }, function (err) {
      var m = mirrorOf(url);
      if (!m) throw err;
      return rawFetch(m, timeoutMs).then(function (t) {
        goodMirror = false; // 直连不通，镜像可用
        return t;
      });
    });
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
    mirrorInUse: function () { return goodMirror === false; },
  };
})();
