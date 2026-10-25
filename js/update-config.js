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
  APP_VERSION: "1.8.5",      // 本地版本号（打包时随包更新；与 安卓 build.gradle 的 versionName、
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
     ★ 第七十五轮（提速）：实测（2026-10-23，无代理）gh-proxy.com 波动极大
       （3.2MB 清单 0.7s ~ 24.6s，131KB/s~4.6MB/s），而 jsDelivr 是真 CDN 且 gzip，
       fastly 节点实测 872KB/s~1.1MB/s，ghfast.top ~700KB/s。
       所以内置镜像列表升级为「jsDelivr(fastly/cdn/gcore) + ghfast + gh-proxy + ghproxy」，
       并在运行时**并发竞速选最快的一条**、把赢家记住（localStorage，跨会话）。 */
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

  /* ================================================================
     ★ 第七十五轮重写：不翻墙时的更新提速
     ----------------------------------------------------------------
     实测（2026-10-23，无代理，3.2MB 的 sync-manifest.js）：
       gh-proxy.com    0.7s ~ 24.6s（波动极大，慢档只有 131KB/s）
       fastly.jsdelivr  2.8s（约 1.1MB/s，gzip）
       ghfast.top       4.8s（约 700KB/s）
       gcore.jsdelivr   4.1s / cdn.jsdelivr 7.2s / ghproxy.net 28s
       直连 raw.githubusercontent.com   连不上
     结论：
       ① 镜像不止 gh-proxy 一家，jsDelivr 系（真 CDN + gzip）普遍更快；
       ② 每家速度波动都大，谁快得**当场测**（并发竞速）；
       ③ 赢家要**记到 localStorage**，下次会话直接用，不用再赌。

     镜像形态（kind）：
       raw      直连（原样）
       prefix   url + 完整 raw 地址          （gh-proxy / ghfast / ghproxy 形态）
       jsdelivr url + 去掉 raw 前缀的相对路径（jsDelivr 形态，真 CDN）
     ================================================================ */
  var RAW_HOST = 'https://raw.githubusercontent.com/';
  var PKEY = 'pet-net-mirror';          // 记住的最快线路（存 name，跨会话）

  /* raw 地址 → 去掉 "https://raw.githubusercontent.com/user/repo/branch/" 的相对路径；
     不是 raw 地址（比如测试台的 mock 地址）就返回 null */
  function rawRest(url) {
    if (!url || url.indexOf(RAW_HOST) !== 0) return null;
    return url.slice(RAW_HOST.length);
  }
  function rawBase() {
    var rest = rawRest(cfg.VERSION_URL || '');
    if (!rest) return '';
    var seg = rest.split('/');
    return RAW_HOST + seg[0] + '/' + seg[1] + '/' + seg[2] + '/';
  }

  /* 内置镜像：按实测速度大致排序（jsDelivr 系在前） */
  function builtinMirrors() {
    var out = [];
    var base = rawBase();
    if (base) {
      /* slug 形如 user/repo@branch/（jsDelivr 的 gh 地址格式） */
      var seg = base.slice(RAW_HOST.length).split('/');   // [user, repo, branch, '']
      var slug = seg[0] + '/' + seg[1] + '@' + seg[2] + '/';
      out.push({ kind: 'jsdelivr', url: 'https://fastly.jsdelivr.net/gh/' + slug, name: 'jsdelivr-fastly' });
      out.push({ kind: 'prefix',   url: 'https://ghfast.top/', name: 'ghfast' });
      out.push({ kind: 'jsdelivr', url: 'https://cdn.jsdelivr.net/gh/' + slug, name: 'jsdelivr-cdn' });
      out.push({ kind: 'jsdelivr', url: 'https://gcore.jsdelivr.net/gh/' + slug, name: 'jsdelivr-gcore' });
      out.push({ kind: 'prefix',   url: 'https://gh-proxy.com/', name: 'gh-proxy' });
      out.push({ kind: 'prefix',   url: 'https://ghproxy.net/', name: 'ghproxy-net' });
    }
    return out;
  }
  /* 测试台兼容：只改 cfg.MIRROR_PREFIX / MIRROR_PREFIXES 的旧用例要继续生效 */
  function legacyPrefixes() {
    var out = [];
    if (cfg.MIRROR_PREFIX) out.push({ kind: 'prefix', url: cfg.MIRROR_PREFIX, name: 'mirror-prefix', legacy: true });
    (cfg.MIRROR_PREFIXES || []).forEach(function (p) {
      out.push({ kind: 'prefix', url: p, name: 'mirror:' + p, legacy: true });
    });
    return out;
  }
  function savedMirror() {
    try {
      var n = localStorage.getItem(PKEY);
      if (!n) return null;
      var all = legacyPrefixes().concat(builtinMirrors());
      for (var i = 0; i < all.length; i++) if (all[i].name === n) return all[i];
    } catch (e) { /* 忽略 */ }
    return null;
  }
  var winner = null;          // 本次会话已验证最快的线路（null = 直连）

  /* 全部候选镜像（按优先级）：记住的 → 测试台兼容前缀 → 内置镜像 */
  function mirrorList() {
    var list = [];
    var push = function (m) {
      if (!m || !m.url) return;
      for (var i = 0; i < list.length; i++) {
        if (list[i].url === m.url && list[i].kind === m.kind) return;
      }
      list.push(m);
    };
    push(savedMirror());
    builtinMirrors().forEach(push);
    legacyPrefixes().forEach(push);         // 测试台兼容项排最后（mock 地址只有它表达得了）
    return list;
  }
  /* 这条镜像能不能表达这个 raw 地址（mock 地址只有 prefix 形态能表达） */
  function applicable(m, raw) {
    if (m.kind === 'prefix') return !!m.legacy || rawRest(raw) !== null;
    if (m.kind === 'jsdelivr') return rawRest(raw) !== null;
    return false;
  }
  function urlVia(m, raw) {
    if (m.kind === 'prefix') return m.url + raw;
    if (m.kind === 'jsdelivr') {
      var rest = rawRest(raw);
      if (rest === null) return m.url + raw;
      var seg = rest.split('/');            // [user, repo, branch, 路径...]
      return seg.length > 3 ? m.url + seg.slice(3).join('/') : m.url + raw;
    }
    return raw;
  }
  /* 候选镜像 URL（最快优先，不含直连 —— 直连由调用方放最后） */
  function mirrorUrlsFor(raw) {
    var out = [];
    mirrorList().forEach(function (m) {
      if (!applicable(m, raw)) return;
      var u = urlVia(m, raw);
      if (out.indexOf(u) < 0) {
        if (winner && m === winner) out.unshift(u);   // 记住的赢家排最前
        else out.push(u);
      }
    });
    return out;
  }
  /* 只用 prefix 形态镜像包某个 URL（记住的排前）—— jsDelivr 不代理整包 zip 归档，
     ★ 第七十六轮起它也是"新鲜线路"的主力（prefix 镜像缓存 ≤5 分钟） */
  function prefixUrlsFor(raw) {
    var out = [];
    mirrorList().forEach(function (m) {
      if (m.kind !== 'prefix') return;
      var u = m.url + raw;
      if (out.indexOf(u) < 0) out.push(u);
    });
    return out;
  }
  function markWinner(u, directUrl) {
    if (u === directUrl) { winner = null; return; }
    var list = mirrorList();
    for (var i = 0; i < list.length; i++) {
      if (urlVia(list[i], directUrl) === u) {
        winner = list[i];
        try { localStorage.setItem(PKEY, winner.name); } catch (e) { /* 忽略 */ }
        return;
      }
    }
  }

  /* ================================================================
     ★ 第七十六轮（修"更新后还弹旧版公告"）：新鲜度优先的拉取路径
     ----------------------------------------------------------------
     实测（2026-10-24，响应头）各线路对 @main 分支文件的服务端缓存：
       jsDelivr(fastly)  s-maxage=43200 → **共享缓存 12 小时**，且忽略 ?t=
                          穿透参数 → 作者推新版后最长 12 小时内还在发旧文件；
       ghfast.top        max-age=300（5 分钟）
       gh-proxy.com      max-age=60（60 秒）
     第七十五轮的"并发竞速谁先响应用谁"会让缓存命中的 jsDelivr 稳定赢下
     竞速（缓存命中恰恰最快）→ 公告检测拿到 12 小时前的旧公告弹出
     （用户报的"GitHub 已 1.8.3、更新后还弹 1.8.2 老公告"就是它；
     清单走同样线路还会"点了更新却判已是最新、文件根本没换"）。

     修法：**新鲜度敏感**的拉取（公告.txt / version.txt / sync-manifest.js /
     逐文件下载）一律以 prefix 形态镜像 + 直连为准（缓存 ≤5 分钟，且
     rawFetch 带 ?t= 时间戳，对 Fastly/Cloudflare 形态的镜像等效不缓存）；
     jsDelivr 只当"其它线路全挂"的最后兜底（宁可 12 小时旧，好过没有），
     且不把它记成赢家（别让下一轮又优先它）。
     ================================================================ */
  function jsdelivrUrlsFor(raw) {
    var out = [];
    mirrorList().forEach(function (m) {
      if (m.kind !== 'jsdelivr' || !applicable(m, raw)) return;
      var u = urlVia(m, raw);
      if (out.indexOf(u) < 0) out.push(u);
    });
    return out;
  }
  /* 新鲜线路（prefix 镜像，记住的排最前）+ 直连 */
  function freshPrimaryUrls(raw) {
    var out = [];
    try { out = prefixUrlsFor(raw).slice(0); } catch (e) { out = []; }
    if (out.indexOf(raw) < 0) out.push(raw);
    return out;
  }
  /* jsDelivr 兜底（并发竞速——只用于小文件；noMark：命中也不记线路，12h 旧缓存别让下次优先它） */
  function jsDelivrLast(url, timeoutMs) {
    var js = jsdelivrUrlsFor(url);
    if (!js.length) return Promise.reject(new Error('network'));
    return probeAndFetchNoWinner(url, timeoutMs, js, true);
  }
  /* ★ 小文件用（公告.txt / version.txt）：新鲜线路并发竞速 → 全挂才问 jsDelivr */
  function probeAndFetchFresh(url, timeoutMs) {
    var primary = freshPrimaryUrls(url);
    if (winner && winner.kind === 'prefix') {
      var best = urlVia(winner, url);
      var rest = primary.filter(function (u) { return u !== best; });
      return rawFetch(best, timeoutMs).catch(function () {
        return probeAndFetchNoWinner(url, timeoutMs, rest);
      }).catch(function () {
        return jsDelivrLast(url, timeoutMs);
      });
    }
    return probeAndFetchNoWinner(url, timeoutMs, primary)
      .catch(function () { return jsDelivrLast(url, timeoutMs); });
  }
  /* ★ 大文件用（sync-manifest.js，3MB+ 不能竞速——会同时下好几份）：
     顺序尝试：prefix 镜像 → jsDelivr 兜底 → 直连垫底 */
  function freshText(url, timeoutMs) {
    var list = freshPrimaryUrls(url);
    var js = jsdelivrUrlsFor(url);
    var direct = list.pop();                       // 直连抽出，垫到最后
    list = list.concat(js).concat([direct]);
    var i = 0;
    function step() {
      if (i >= list.length) return Promise.reject(lastErr || new Error('network'));
      var u = list[i];
      return rawFetch(u, timeoutMs).then(function (t) {
        /* jsDelivr 是过期兜底：赢了也不记线路，免得下次公告检测又优先它 */
        var isJs = js.indexOf(u) >= 0;
        if (!isJs) markWinner(u, url);
        return t;
      }, function (e) { lastErr = e; i++; return step(); });
    }
    return step();
  }

  /* ---- 带超时、可取消的 fetch ---- */
  function rawFetch(url, timeoutMs, ctrlOut) {
    return new Promise(function (resolve, reject) {
      var ctrl = null;
      try { ctrl = new AbortController(); } catch (e) { ctrl = null; }
      if (ctrl && ctrlOut) ctrlOut.push(ctrl);
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

  /* 顺序回退：赢家优先 → 其余镜像 → 直连最后 */
  var lastErr = null;
  function fetchText(url, timeoutMs) {
    var list = mirrorUrlsFor(url).concat([url]);      // 直连垫底
    var i = 0;
    function step() {
      if (i >= list.length) return Promise.reject(lastErr || new Error('network'));
      var u = list[i];
      return rawFetch(u, timeoutMs).then(function (t) {
        markWinner(u, url);
        return t;
      }, function (e) { lastErr = e; i++; return step(); });
    }
    return step();
  }

  /* ★ 并发竞速：所有线路一起发，谁先回来用谁（只用于小文件，比如公告.txt）。
     大文件别用它 —— 会同时下好几份。
     ★ 有"记住的赢家"时先单独试它（多数时候一发就中，不发竞速）；失败再竞速其余线路。
     冷启动（没记住）时首响应可能要十几秒，所以 timeout 别给太短。 */
  function probeAndFetch(url, timeoutMs) {
    var all = mirrorUrlsFor(url);
    if (winner) {
      var best = urlVia(winner, url);
      var rest = all.filter(function (u) { return u !== best; }).concat([url]);
      return rawFetch(best, timeoutMs).then(function (t) {
        return t;                                   // 赢家依旧最快，直接用
      }, function () {
        return probeAndFetchNoWinner(url, timeoutMs, rest);
      });
    }
    return probeAndFetchNoWinner(url, timeoutMs, all.concat([url]));
  }
  function probeAndFetchNoWinner(url, timeoutMs, list, noMark) {
    if (list.length <= 1) {
      return rawFetch(list[0] || url, timeoutMs).then(function (t) {
        if (!noMark) markWinner(list[0] || url, url);
        return t;
      });
    }
    return new Promise(function (resolve, reject) {
      var done = false, errs = [], ctrls = [], n = list.length;
      list.forEach(function (u) {
        rawFetch(u, timeoutMs, ctrls).then(function (t) {
          if (done) return;
          done = true;
          ctrls.forEach(function (c) { try { c.abort(); } catch (e) { /* 忽略 */ } });
          if (!noMark) markWinner(u, url);
          resolve(t);
        }, function (e) {
          errs.push(e);
          if (!done && errs.length >= n) { done = true; reject(errs[0]); }
        });
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
          version = l0.replace(/^v/i, ''); consumed[0] = true;
        } else if (looksLikeDate(l0)) {
          date = l0; consumed[0] = true;
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
    probeAndFetch: probeAndFetch,
    /* ★ 第七十六轮：新鲜度优先版（公告.txt / version.txt 用，别再用会拿到
       12 小时旧缓存的 probeAndFetch —— 见上面"新鲜度优先"注释块） */
    probeAndFetchFresh: probeAndFetchFresh,
    /* ★ 第七十六轮：新鲜度优先版（sync-manifest.js 等大文件用） */
    freshText: freshText,
    parseNotice: parseNotice,
    /* ---- 兼容旧接口（notice.js / 老代码在用） ---- */
    mirrorInUse: function () { return !!(winner && winner.kind !== 'raw'); },
    prefix: function () {
      if (winner && winner.kind === 'prefix') return winner.url;
      var l = legacyPrefixes();
      return l[0] ? l[0].url : '';
    },
    firstPrefix: function () {
      var l = legacyPrefixes();
      return l[0] ? l[0].url : '';
    },
    prefixes: function () {
      return legacyPrefixes().map(function (m) { return m.url; });
    },
    /* ---- ★ 新接口：给"逐文件下载 / 整包"用 ---- */
    /* 最快镜像在前（不含直连，直连由调用方垫底） */
    mirrorUrlsFor: mirrorUrlsFor,
    bestMirrorName: function () { return winner ? winner.name : ''; },
    /* 只用 prefix 形态镜像包某个 URL —— jsDelivr 不代理整包 zip 归档 */
    prefixUrlsFor: prefixUrlsFor,
  };
})();
