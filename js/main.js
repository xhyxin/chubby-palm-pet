/* ------------------------------------------------------------------
 * main.js —— 启动、主循环、UI 联动、动作面板、热区调试
 * ------------------------------------------------------------------ */
(() => {
  const $ = (id) => document.getElementById(id);
  const canvas = $('pet-canvas');
  const dbg = $('debug-canvas');
  const DEBUG = /(?:^|[?&])debug=1/.test(location.search);

  let bubbleTimer = null;
  let prefBubbleTimer = null;
  let autoOn = false;
  let skinIndex = 0;

  /** 简易防抖：连续调用只在最后一次 ms 毫秒后执行 */
  function debounce(fn, ms) {
    let t;
    return function() { clearTimeout(t); t = setTimeout(fn, ms); };
  }

  /* ---------------------------------------------------------- 气泡 */
  function showBubble(text, holdMs) {
    if (!text) return;
    const b = $('bubble');
    $('bubble-icon').classList.add('hidden');   // 文字模式：藏掉喜好图标
    b.classList.remove('icon-only');
    $('bubble-text').textContent = text;
    b.classList.toggle('long', text.length > 120);   // 超长台词小一号字，防溢出
    let px = window.innerWidth / 2;
    let py = window.innerHeight * 0.3;
    if (Pet.ready) {
      const p = Pet.zoneScreen('head');
      px = p.x;
      py = Math.min(Pet.topScreenY(), p.y - p.r) - 10;
    }
    b.classList.remove('hidden');
    /* ★ 第四十五轮：长台词居中悬在**人物正上方**——底边贴人物顶、台词内层滚动限高，
       永远不压到人物、不出屏；短台词维持原来的"悬在人物头顶上方"。
       ★ 第四十七轮：两种都加一道"别钻进顶部按钮区"的护栏（气泡是 translate(-50%,-100%)，
       style.top 就是气泡的**底边**）—— 阿莱特/艾蜜莉雅R41 那种头顶高的角色，
       以前气泡会飘到按钮上被挡住。 */
    const bubbleMinBottom = () => uiBand().top + (b.offsetHeight || 62) + 6;
    if (b.classList.contains('long')) {
      const topY = Pet.ready ? Pet.topScreenY() : window.innerHeight * 0.35;
      b.style.left = Math.max(178, Math.min(window.innerWidth - 178, px)) + 'px';
      b.style.top = Math.max(bubbleMinBottom(), topY - 8) + 'px';
      b.style.transform = '';
      b.style.maxWidth = '340px';
      /* 台词内层的可滚动高度 = 气泡顶边距屏顶 12px 的余量（padding+边框+尾巴约占 32px） */
      $('bubble-text').style.maxHeight = Math.max(120, topY - 44) + 'px';
    } else {
      b.style.left = Math.max(130, Math.min(window.innerWidth - 130, px)) + 'px';
      b.style.top = Math.max(bubbleMinBottom(), Math.min(py, window.innerHeight - 24)) + 'px';
      b.style.transform = '';
      b.style.maxWidth = '';
      $('bubble-text').style.maxHeight = '';
    }
    b.classList.add('show');
    if (bubbleTimer) clearTimeout(bubbleTimer);
    /* ★ 可传停留时长 —— 语音图鉴点播长语音时，对话框要陪到语音播完 */
    bubbleTimer = setTimeout(() => b.classList.remove('show'), holdMs || 3000);
  }

  /** 稍等片刻再收起对话框（给"语音播完"的收尾用） */
  function closeBubbleSoon() {
    if (bubbleTimer) clearTimeout(bubbleTimer);
    bubbleTimer = setTimeout(() => $('bubble').classList.remove('show'), 400);
  }

  /** ★ 语音图鉴点播：对话框**陪到语音真的播完**才消失。
      不再依赖 ogg 元数据时长（Chrome 对部分长 ogg 报 Infinity，上一版因此提前消失）——
      直接监听该条音频的 ended 事件；时长只作为一道保险；完全拿不到音频才退回 3 秒。
      ★ 第七十八轮：加"代际令牌"并把互动台词也接到这条路上 ——
        连续语音（敲头哎呀→好痛、摸肚子三连播）会把前一条气泡顶掉，
        旧一条的 durationOf 计时器若不失效，会把**新一条**的气泡提前收走
        （用户观感就是"台词没等说完就不见了"）。每次调用自增 token，
        只有最新一代的收起回调才生效。 */
  let sayToken = 0;
  function sayUntilDone(text, key, L) {
    if (!key) { showBubble(text); return; }
    const tok = ++sayToken;
    const close = () => { if (tok === sayToken) closeBubbleSoon(); };
    const hooked = Voice.onEnded(key, close, L);
    if (hooked) {
      showBubble(text, 180000);            // 上限兜底：ended 万一不触发
      Voice.durationOf(key, L).then((d) => {
        if (d && tok === sayToken) setTimeout(close, (d + 0.8) * 1000);
      });
    } else {
      showBubble(text);                    // 拿不到音频：默认 3 秒
    }
  }

  /** 播放一条语音并让对话框陪到播完（语音图鉴用） */

  /* ★ 把"互动会用到"的语音**全部预加载**（第二十八轮修"敲头好痛不稳定"）。
     以前只预热了 pat/pinch/belly/bonk 的 voice，**漏了 voiceEnd**：
     敲头第二段（好痛）的音频是"要播的那一刻"才 new Audio 开始下载，
     第一次敲头时它还没下载完 → play() 静默失败 → 用户只听到"哎呀"，
     多试几次（缓存好了）才有"好痛" —— 就是用户报的"不稳定"。
     这里把互动相关的**每一条**（含结尾语音、戳一下/饿了/生气/打招呼）都预热。
     ★ 切角色 / 换外观后必须重跑（每个角色的语音键不一样）。 */
  function preloadInteractionVoices() {
    const A = CONFIG.actions || {};
    const preV = [
      A.bonk && A.bonk.voice, A.bonk && A.bonk.voiceEnd,
      A.pat && A.pat.voice,
      A.pinch && A.pinch.voice,
      A.belly && A.belly.voice, A.belly && A.belly.voiceMid, A.belly && A.belly.voiceEnd,
      A.feed && A.feed.voice,
      CONFIG.pokeVoice, CONFIG.upsetVoice, CONFIG.hungryVoice, CONFIG.greetVoice,
      CONFIG.moodActs,
    ].filter((k) => k && (!Array.isArray(k) || k.length));
    /* ★ 第七十八轮：预热改分批（每批 4 条、间隔 250ms）——
       一口气 new 二十多个 Audio 并发下载，弱网低端机会把首屏带宽/内存全占了。
       分批只是把预热摊开几百毫秒到两秒，"第一次敲头就有好痛"的体验保得住
       （最常用的敲头/摸头/捏脸排在最前面，第一批就预热到）。
       批次带令牌：快速连续切角色时，旧角色的预热批次自动作废。 */
    const tok = ++preloadToken;
    let i = 0;
    const step = () => {
      if (tok !== preloadToken) return;          // 已经切到别的角色了
      const end = Math.min(i + 4, preV.length);
      for (; i < end; i++) Voice.preload(preV[i]);
      if (i < preV.length) setTimeout(step, 250);
    };
    step();
  }
  let preloadToken = 0;

  /** ★ 喂食结束（第三十一轮）：按角色对该食物的喜好弹图标 + 出表情。
      love/like → 随机一个开心表情；hate → 随机一个伤心表情；plain → 只弹图标。 */
  function onFed(food, pref) {
    showPrefBadge(food, pref);
    if (pref === 'love' || pref === 'like') {
      Pet.playRandomMood(['happy', 'proud'], 'idle');
    } else if (pref === 'hate') {
      Pet.playRandomMood(['sad', 'panic'], 'idle');
    }
  }

  /** 喂食后的喜好反馈（第三十一轮按用户要求改）：复用人物头上的**对话框**，
      把台词文字换成**小小的**喜好图标（不再是左上角的大图片），约 2.5 秒后淡出 */
  function showPrefBadge(food, pref) {
    const icon = (typeof FOOD_DATA !== 'undefined' && FOOD_DATA.prefIcon[pref]) || null;
    if (!icon) return;
    const b = $('bubble');
    if (!b) return;
    $('bubble-text').textContent = '';          // 吃完台词条 → 换成图标
    const img = $('bubble-icon');
    img.src = icon;
    img.classList.remove('hidden');
    b.classList.add('icon-only');
    let px = window.innerWidth / 2;
    let py = window.innerHeight * 0.3;
    if (Pet.ready && Pet.setupWorld) {
      const p = Pet.zoneScreen('head');
      /* ★ 用户圈的位置：气泡贴着头部左上——底缘 ≈ 人物顶边往下 17% 身高。
         用**加载时的待机几何**换算（实时 bounds 会跟着开心跳跃动画变，位置会抖） */
      const topY = Pet.worldToScreen(Pet.setupWorld.x, Pet.setupWorld.top).y;
      const botY = Pet.worldToScreen(Pet.setupWorld.x, Pet.setupWorld.bottom).y;
      const Hs = Math.max(1, botY - topY);
      px = p.x - p.r - 50;
      py = topY + Hs * 0.17;
    }
    b.style.left = Math.max(50, Math.min(window.innerWidth - 50, px)) + 'px';
    /* ★ 第四十七轮：同样不许钻进顶部按钮区 */
    b.style.top = Math.max(uiBand().top + (b.offsetHeight || 90) + 6,
      Math.min(py, window.innerHeight - 140)) + 'px';
    b.classList.remove('hidden');
    b.classList.add('show');
    if (prefBubbleTimer) clearTimeout(prefBubbleTimer);
    prefBubbleTimer = setTimeout(() => {
      b.classList.remove('show');
      img.classList.add('hidden');
      b.classList.remove('icon-only');
    }, 2500);
  }

  /* ---------------------------------------------------------- 状态条
     ★ 第二十八轮（用户要求）：心情 / 饱食 / 亲密 / 开不开心 的显示已从界面移除。
       这里保留函数（多处会调），但改成"元素不存在就跳过"，
       这样以后想加回来只要把 index.html 的 DOM 恢复即可，不用改这里。 */
  function refreshStats() {
    const d = PetState.data;
    const setW = (id, v) => { const el = $(id); if (el) el.style.width = v + '%'; };
    const setT = (id, v) => { const el = $(id); if (el) el.textContent = Math.round(v); };
    setW('bar-mood', d.mood); setT('val-mood', d.mood);
    setW('bar-full', d.full); setT('val-full', d.full);
    setW('bar-bond', d.bond); setT('val-bond', d.bond);
    const badge = $('mood-badge');
    if (badge) badge.textContent = PetState.moodLabel();
  }

  /* ---------------------------------------------------------- 喂食（第三十一轮重做）
     数据在 js/food-data.js（91 种游戏食物 + 每角色 love/like/hate 喜好表）。
     面板出现在**右侧空白处**（不遮挡人物）：搜索框 + 分类筛选 + 食物网格。
     交互：**长按食物 → 拖动**（拖影跟随）→ 松手在人物嘴边 → 喂食。
     喂完后由 interact.js 回调 onFed → 弹喜好图标 + 开心/伤心表情。 */

  /* ★ 用户要求：取消食物分类筛选，只保留搜索（第三十一轮追加） */
  let foodDragEl = null;

  function foodOf(id) {
    return (typeof FOOD_DATA !== 'undefined' ? FOOD_DATA.foods : []).find((f) => f.id === id) || null;
  }

  /** 当前角色对某食物的喜好：love / like / hate / plain（没记录 = 一般般） */
  function prefOf(charId, foodId) {
    if (typeof FOOD_DATA === 'undefined') return 'plain';
    const p = FOOD_DATA.prefs[charId];
    if (!p) return 'plain';
    if (p.love.indexOf(foodId) >= 0) return 'love';
    if (p.like.indexOf(foodId) >= 0) return 'like';
    if (p.hate.indexOf(foodId) >= 0) return 'hate';
    return 'plain';
  }

  function buildFoodPanel() {
    if (typeof FOOD_DATA === 'undefined') return;
    const box = $('food-grid');
    if (!box) return;
    const q = (($('food-search') && $('food-search').value) || '').trim().toLowerCase();
    box.innerHTML = '';
    const frag = document.createDocumentFragment();
    let n = 0;
    FOOD_DATA.foods.forEach((f) => {
      if (q && !I18N.foodMatch(f, q)) return;
      const el = document.createElement('div');
      el.className = 'food-card';
      el.title = f.name;
      const img = document.createElement('img');
      img.src = f.img;
      img.alt = f.name;
      img.draggable = false;
      const name = document.createElement('span');
      name.textContent = I18N.foodName(f);
      el.appendChild(img);
      el.appendChild(name);
      attachFoodDrag(el, f);
      frag.appendChild(el);
      n++;
    });
    if (!n) box.innerHTML = '<p class="muted">没有匹配的食物</p>';
    else box.appendChild(frag);
  }

  /** 长按（220ms）后开始拖动：拖影跟随，松手在嘴边即喂食 */
  function attachFoodDrag(el, food) {
    let timer = null;
    let active = false;
    const startDrag = (e) => {
      active = true;
      el.classList.add('dragging');
      if (!foodDragEl) {
        foodDragEl = document.createElement('div');
        foodDragEl.id = 'drag-food';
        document.body.appendChild(foodDragEl);
      }
      foodDragEl.innerHTML = '';
      const img = document.createElement('img');
      img.src = food.img;
      img.alt = '';
      foodDragEl.appendChild(img);
      foodDragEl.style.display = 'block';
      foodDragEl.style.left = e.clientX + 'px';
      foodDragEl.style.top = e.clientY + 'px';
      const move = (ev) => {
        /* ★ 第三十三轮：拖影必须留在窗口内（用户反馈"拖拽能超出窗口看不见"） */
        const x = Math.max(26, Math.min(window.innerWidth - 26, ev.clientX));
        const y = Math.max(26, Math.min(window.innerHeight - 26, ev.clientY));
        foodDragEl.style.left = x + 'px';
        foodDragEl.style.top = y + 'px';
      };
      const up = (ev) => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        window.removeEventListener('pointercancel', up);
        el.classList.remove('dragging');
        foodDragEl.style.display = 'none';
        if (active) {
          const x = Math.max(26, Math.min(window.innerWidth - 26, ev.clientX));
          const y = Math.max(26, Math.min(window.innerHeight - 26, ev.clientY));
          Interact.feed(food, x, y);
        }
        active = false;
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
      window.addEventListener('pointercancel', up);
    };
    el.addEventListener('pointerdown', (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      e.preventDefault();
      timer = setTimeout(() => { timer = null; startDrag(e); }, 220);   // 长按 220ms 才算"抓住"
    });
    const cancel = () => { if (timer) { clearTimeout(timer); timer = null; } };
    el.addEventListener('pointermove', (e) => {
      /* 没按住拖够距离之前就当普通滚动/点击处理。
         ★ 第四十五轮：横竖位移都算 —— 横排食物模式下面板靠横向滚动，
         手指一横向滑必须让位给滚动，不能被当成"长按抓住食物"。 */
      if (timer && (Math.abs(e.movementX || 0) > 6 || Math.abs(e.movementY || 0) > 6)) cancel();
    });
    el.addEventListener('pointerup', cancel);
    el.addEventListener('pointercancel', cancel);
    el.addEventListener('pointerleave', cancel);
  }

  /* ★ 喂食面板的图片在后台预热一次，第一次拖动不会是空图
     ★ 性能优化：分批加载（每批 10 张，间隔 200ms），避免一口气发 91 个请求 */
  function preloadFoodImages() {
    if (typeof FOOD_DATA === 'undefined') return;
    const foods = FOOD_DATA.foods;
    const BATCH = 10, DELAY = 200;
    let i = 0;
    function loadBatch() {
      const end = Math.min(i + BATCH, foods.length);
      for (; i < end; i++) { const im = new Image(); im.src = foods[i].img; }
      if (i < foods.length) setTimeout(loadBatch, DELAY);
    }
    loadBatch();
  }

  function toggleFoodPanel(show) {
    const p = $('food-panel');
    if (!p) return;
    const willShow = show === undefined ? p.classList.contains('hidden') : show;
    /* ★ 第七十四轮：喂食面板也参与互斥 —— 开它就把动作 / 角色面板收起来 */
    if (willShow) closeAllPanels('food-panel');
    p.classList.toggle('hidden', !willShow);
    if (willShow) { buildFoodPanel(); placePanel(p); }
  }

  /* ---------------------------------------------------------- 角色 / 换装 */
  /* 面板分两段：上面列「角色」，下面列当前角色的「外观」。 */
  function buildCharList() {
    const box = $('char-list');
    if (!box) return;
    box.innerHTML = '';
    /* ★ 角色上百个之后必须能搜：按中文名 / 英文名 / ID 过滤 */
    const q = (($('char-search') && $('char-search').value) || '').trim().toLowerCase();
    const hit = CONFIG.characters
      .map((c, i) => ({ c, i }))
      .filter(({ c }) => !q || I18N.charMatch(c.id, c.name, q));
    if (!hit.length) {
      box.innerHTML = '<p class="muted">没有匹配的角色</p>';
      return;
    }
    const frag = document.createDocumentFragment();
    hit.forEach(({ c, i }) => {
      const el = document.createElement('div');
      el.className = 'skin-item char-item' + (i === CONFIG.characterIndex ? ' on' : '');
      const txt = document.createElement('span');
      txt.className = 'char-text';
      /* ★ 第二十八轮去图标/种族；★ 第三十一轮用户要求连"N 套外观/（N 动作）"
         这些计数字样也一并去掉 —— 列表只显示角色名（desc 数据保留在角色文件里）。 */
      txt.innerHTML = `${I18N.charName(c.id, c.name)}`;
      if (c.art && c.art.avatar) {
        const img = document.createElement('img');
        img.className = 'char-avatar';
        img.loading = 'lazy';
        img.alt = '';
        /* ★ 站上确实有角色没有官方立绘（实测：Renewa）。
           加载失败就把破图换成「名字首字」占位块，不让列表里出现叉图。 */
        img.onerror = () => { img.remove(); el.insertBefore(avatarPlaceholder(c), el.firstChild); };
        img.src = c.art.avatar;
        el.appendChild(img);
      } else {
        el.appendChild(avatarPlaceholder(c));
      }
      el.appendChild(txt);
      /* ★ 捏脸不可用的角色给个可见标记（42/134）。
         这些角色的脸皮在官方骨架里绑在整头色块上，一捏就崩，
         所以自动降级成"普通戳"。不标出来的话用户只会觉得"这角色怎么捏不动"。 */
      if (c.pinch && c.pinch.ok === false) {
        const badge = document.createElement('span');
        badge.className = 'char-badge';
        badge.textContent = I18N.t('char.noPinch');
        badge.title = c.pinch.reason || '这个角色的骨架不支持捏脸';
        el.appendChild(badge);
      }
      /* ★ 第六十六轮：NPC 角色挂一个可见的「NPC」小标（用户要求"加个标签 npc"）。
         数据侧：generated.js 的 tag === 'npc'（批量生成角色文件.js 写入）。 */
      if (c.tag === 'npc') {
        const badge = document.createElement('span');
        badge.className = 'char-badge npc';
        badge.textContent = I18N.t('char.npc');
        el.appendChild(badge);
      }
      el.addEventListener('click', () => switchCharacter(i));
      frag.appendChild(el);
    });
    box.appendChild(frag);
    /* ★ 第四十五轮：136 个角色里把"当前角色"滚进可视区 ——
       否则用户打开面板根本不知道自己现在用的是谁（要一路翻到底）。
       只在面板已经打开时滚，避免开机时就动列表。
       ⚠️ 第五十九轮修 bug：原来用 `cur.scrollIntoView({block:'nearest'})`，
       它会**把外层能滚的都滚一遍**。点「角色」时面板刚显示、还没被 placePanel 定位
       （高度 auto、138 个角色全摊开），整页因此变得超高 → 浏览器为了露出当前角色
       把 **body 滚到底（+84px，正好是 #stage::after 那个装饰圆溢出的高度）**，
       #stage 被顶出屏幕上方 → 顶栏按钮全部消失、随后 placePanel 量到的 uiBand 变成负值，
       面板被塞到屏幕外面（用户看到的就是"人物突然放大、按钮都不见了"）。
       改成只滚 #char-list 自己，绝不碰祖先。 */
    const cur = box.querySelector('.char-item.on');
    if (cur && !$('skin-panel').classList.contains('hidden')) {
      const cr = cur.getBoundingClientRect(), br = box.getBoundingClientRect();
      if (cr.top < br.top || cr.bottom > br.bottom) {
        box.scrollTop += Math.round((cr.top - br.top) - (br.height - cr.height) / 2);
      }
    }
  }

  /** 没有立绘时用的占位头像：角色名第一个字 */
  function avatarPlaceholder(c) {
    const s = document.createElement('span');
    s.className = 'char-avatar char-avatar-ph';
    s.textContent = String(c.name || c.id || '?').trim().charAt(0) || '?';
    return s;
  }

  /** 把角色的名字/标题/立绘/语言按钮等"外壳"刷新一遍 */
  /** ★ 当前角色的「界面语言显示名」（英/日/韩名来自用户的译名表，缺则回退中文名） */
  function dispName() {
    return window.I18N ? I18N.charName(CONFIG.id, CONFIG.name) : CONFIG.name;
  }

  function refreshCharacterShell() {
    const dn = dispName();
    document.title = `掌上坨坨 · ${dn}`;
    const nameEl = document.querySelector('.hud-stats .name');
    if (nameEl) nameEl.textContent = dn;
    const art = $('loader-art');
    if (art && CONFIG.art && CONFIG.art.avatar) {
      /* 没有立绘的角色（Renewa）→ 加载层那张图直接隐藏，别留破图 */
      art.onerror = () => { art.style.display = 'none'; };
      art.onload = () => { art.style.display = ''; };
      art.src = CONFIG.art.avatar;
    }
    const trayTitle = $('food-char-name');
    if (trayTitle) trayTitle.textContent = dn;
    syncLangButton();
  }

  /** ★ 切换角色：把该角色的配置摊平 → 换语音语言 → 换存档 → 重新加载模型 → 重建面板 */
  async function switchCharacter(i) {
    const prevIndex = CONFIG.characterIndex;
    Interact.abort();                 // ★ 先中断上个角色没做完的互动，否则 mode 会卡住
    Interact.clearSmashVoice();       // ★ 清掉敲头待播语音，免得跨角色叠音
    const c = CONFIG.applyCharacter(i);
    skinIndex = 0;
    $('skin-panel').classList.add('hidden');
    $('loader').classList.remove('hide');
    $('loader-tip').textContent = I18N.t('loader.callChar', { name: I18N.charName(c.id, c.name) });
    /* ★ 先把语音语言切到新角色，再刷新外壳（语言按钮）。
       优先使用用户上次选择的语言；不支持则退回角色默认。 */
    applySavedVoiceLang();
    Voice.useCharacter(c.id, c.voiceLang);
    refreshCharacterShell();
    PetState.useCharacter(c.id);
    preloadInteractionVoices();       // ★ 新角色的互动语音（含 voiceEnd）立刻预热
    refreshStats();
    buildCharList();
    buildSkins();
    voiceTabBuilt = false;
    animTabBuilt = false;
    try {
      await Pet.loadModel(CONFIG.models[0]);
      buildAnimPanel();
      showBubble(I18N.t('bubble.turn'));
      const r = Voice.play(CONFIG.greetVoice);
      if (r && r.text) setTimeout(() => showBubble(r.text), 900);
      try { localStorage.setItem('pet-character', c.id); } catch (e) { /* 忽略 */ }
    } catch (e) {
      console.error(e);
      $('loader-tip').textContent = I18N.t('loader.charFail');
      try {
        CONFIG.applyCharacter(prevIndex);
        refreshCharacterShell();
        Voice.useCharacter(CONFIG.id, CONFIG.voiceLang);
        PetState.useCharacter(CONFIG.id);
        skinIndex = 0;
        buildCharList(); buildSkins();
        await Pet.loadModel(CONFIG.models[0]);
        buildAnimPanel();
        showBubble(I18N.t('bubble.charFailBack'));
      } catch (e2) {
        console.error(e2);
        showBubble(I18N.t('bubble.fail'));
      }
    }
    $('loader').classList.add('hide');
  }

  function buildSkins() {
    const box = $('skin-list');
    box.innerHTML = '';
    const title = $('skin-group-title');
    if (title) title.textContent = I18N.t('skin.outfitsOf', { name: dispName() });
    const frag = document.createDocumentFragment();
    CONFIG.models.forEach((m, i) => {
      const el = document.createElement('div');
      el.className = 'skin-item' + (i === skinIndex ? ' on' : '');
      /* ★ 第四十五轮（用户要求）：皮肤项**只留皮肤名**。
         原来名字下面还挂一行 <small>（"基础外观（34 动作）"），
         现在全部删除 —— 电脑端 / 网页端 / 安卓端三端一致。
         ★ 第六十七轮：切到英文 / 日文 / 韩文界面时，皮肤名也换成对应语言
           （`js/skins-i18n.js`，官方没翻的皮肤回退中文名，不显示 "Skin 3" 这种半成品）。 */
      el.textContent = skinDisplay(m.voiceSkin, m.name);
      el.addEventListener('click', () => switchSkin(i));
      frag.appendChild(el);
    });
    box.appendChild(frag);
  }

  /** 皮肤名按界面语言显示：官方有译文就用译文，没有就保持中文名 */
  function skinDisplay(voiceSkin, zhName) {
    const lang = (window.I18N && I18N.lang) || 'zh';
    if (lang === 'zh' || !voiceSkin) return zhName;
    const table = window.SKINS_I18N || {};
    const row = table[CONFIG.id] || table[String(CONFIG.id || '').toLowerCase()];
    const n = String(voiceSkin).replace('_Skin', '');
    const hit = row && row['Skin' + n] && row['Skin' + n][lang];
    return hit || zhName;
  }

  /** 当前角色「中文皮肤名 → 该语言皮肤名」的反查表（图鉴条目名里的「（皮肤名）」用它翻译） */
  function skinNameMap() {
    const map = {};
    (CONFIG.models || []).forEach((m) => {
      if (m.voiceSkin && m.name) map[m.name] = skinDisplay(m.voiceSkin, m.name);
    });
    return map;
  }

  async function switchSkin(i) {
    const prev = skinIndex;
    Interact.abort();                 // ★ 换外观同样要先中断互动，别把形变/状态带过去
    skinIndex = i;
    buildSkins();
    preloadInteractionVoices();       // ★ 皮肤可能有专属语音，切完重新预热
    $('skin-panel').classList.add('hidden');
    $('loader').classList.remove('hide');
    $('loader-tip').textContent = I18N.t('loader.skin');
    try {
      await Pet.loadModel(CONFIG.models[i]);
      buildAnimPanel();
      showBubble(I18N.t('bubble.skin'));
      const r = Voice.play(CONFIG.greetVoice, CONFIG.models[i].voiceSkin);
      if (r && r.text) setTimeout(() => showBubble(r.text), 900);
    } catch (e) {
      console.error(e);
      /* ★ 失败时不能就这么算了：loadModel 一开始就把 ready 置成 false，
         不收尾的话应用会永远停在加载层（点哪都没反应）。
         这里退回上一个能用的外观，保证"切坏了也还能玩"。 */
      $('loader-tip').textContent = I18N.t('loader.skinFail');
      let recovered = false;
      if (prev !== i && CONFIG.models[prev]) {
        try { await Pet.loadModel(CONFIG.models[prev]); skinIndex = prev; buildSkins(); buildAnimPanel(); recovered = true; } catch (e2) { console.error(e2); }
      }
      if (!recovered && i !== 0) {
        try { await Pet.loadModel(CONFIG.models[0]); skinIndex = 0; buildSkins(); buildAnimPanel(); recovered = true; } catch (e3) { console.error(e3); }
      }
      showBubble(I18N.t('loader.skinFail'));
    }
    $('loader').classList.add('hide');
  }

  /* ---------------------------------------------------------- 动作面板 */
  /* 面板直接列骨架原始动作名（与参考站角色页一致）。
     ★ 第二十八轮：用户要求"选中的动作要一直持续，直到选其他"，
       所以面板里每个动作都循环播（playRaw(name, true)），不再区分待机/一次性。 */
  let animTabBuilt = false;
  let voiceTabBuilt = false;

  function buildAnimPanel() {
    const box = $('tab-anim');
    box.innerHTML = '';
    /* ★ 第七十五轮（用户要求"不要有旁白"）：原来顶部有一行
       「当前外观：默认 · 40 个动作」的说明，已删除 —— 动作图鉴直接就是动作分组。
       （动作是每套外观各自一套的，换皮肤后这里本来就会重建。） */
    CONFIG.animPanel.forEach((grp) => {
      const items = grp.items.filter((n) => Pet.animations.includes(n));
      if (!items.length) return;
      const h = document.createElement('div');
      h.className = 'group-title';
      h.textContent = I18N.groupName(grp.group);
      box.appendChild(h);
      const grid = document.createElement('div');
      grid.className = 'chip-grid';
      items.forEach((n) => {
        const b = document.createElement('button');
        b.className = 'chip';
        b.textContent = I18N.animLabel(CONFIG.animLabel[n]) || CONFIG.animLabel[n] || n;
        b.addEventListener('click', () => playAnimKey(n));
        grid.appendChild(b);
      });
      box.appendChild(grid);
    });
    animTabBuilt = true;
  }

  /* 动作 → 语音对照（官方对应关系，见交接文档 3.2/3.3）。
     ★ 多角色：对照表放在**角色文件**里（CONFIG.voiceForAnim / voiceForAnimSeries），
       这里只负责查表 —— 加角色不用再改这个文件。
     摸头=抚摸(Touch2)、捏脸=薅脸(Touch1)、敲头两段、喂食、摸肚子两相位是四个互动共用的，
     直接取 CONFIG.actions；其余按角色的表查。
     没配语音的动作就安静地做动作 —— Voice.play 的候选制会自动跳过不存在的键。 */
  function voiceForAnim(name) {
    const A = CONFIG.actions;
    const common = {
      Pat_Idle: A.pat.voice, Pat_End: A.pat.voice,
      Touch_Idle: A.pinch.voice, Touch_End: A.pinch.voice,
      Smash_End_1: A.bonk.voice, Smash_End_2: A.bonk.voiceEnd,
      Eat_1: A.feed.voice, Eat_2: A.feed.voice,
      Tickle_Idle_1: A.belly.voice, Tickle_Idle_2: A.belly.voiceMid, Tickle_End: A.belly.voiceMid,
    };
    if (common[name]) return common[name];
    const per = CONFIG.voiceForAnim || {};
    if (per[name]) return per[name];
    const series = CONFIG.voiceForAnimSeries || {};
    for (const [pfx, vk] of Object.entries(series)) {
      if (name.startsWith(pfx)) return [vk + name.slice(pfx.length)];
    }
    return null;
  }

  function playAnimKey(name) {
    /* ★ 第二十八轮（用户要求）："选开心就应该一直开心，直到我选其他"。
       所以动作面板里**点哪个都循环播**（不再只循环待机类），
       要换动作再点别的即可。 */
    const played = Pet.playRaw(name, true);
    if (!played) return;
    // 动作对应的语音（有就播，没有就安静地做动作）
    const keys = voiceForAnim(name);
    if (keys) {
      const r = Voice.play(keys, (Pet.modelDef && Pet.modelDef.voiceSkin) || '');
      if (r && r.text) showBubble(r.text);
    }
    if (name === 'Pat_Idle') Pet.setOverride('headDown', Pet.bounds.h * 0.045, true);
    else Pet.setOverride('headDown', 0, true);
  }

  /* ★ 第七十五轮（用户要求）语音图鉴重排：
     ① **按皮肤排班**：默认（公用语音都放这里）→ 该角色每套外观（按外观列表顺序），
        每段下面就是这套外观自己的语音；没有专属语音的外观不占空段。
     ② **不要旁白**：顶部的完整度说明、皮肤段的"官方暂无语音"提示、
        「仅日语 / 仅韩语 / 共用录音」小标签、鼠标悬停的序号解释，全部去掉 ——
        图鉴只剩「皮肤名 → 分组 → 条目（名字 + 台词）」。
     ③ 条目名里的「（皮肤名）」后缀也去掉（段头已经说明是哪套外观）。 */
  function buildVoicePanel() {
    const box = $('tab-voice');
    box.innerHTML = '';
    /* ★ 多角色：只列**当前角色**的语音（合并后的 voice-text.json 里带 char 字段） */
    const cat = Voice.catalog(CONFIG.id);
    if (!cat.length) {
      box.innerHTML = '<p class="muted">没有读取到语音清单。</p>';
      return;
    }

    /* 段头皮肤名：模型里的官方皮肤名 > 图鉴数据里的 skinName > 「第N套外观」 */
    const skinZh = (vs) => {
      const m = (CONFIG.models || []).find((x) => (x.voiceSkin || '') === vs);
      if (m && m.name) return m.name;
      const c = cat.find((x) => x.skin === vs);
      if (c && c.skinName) return c.skinName;
      return I18N.t('voice.outfitN', { n: String(vs).replace(/^_Skin/, '') });
    };
    /* 该角色所有皮肤名（中/译文都算），用来判断名字尾巴上的括号是不是皮肤后缀 */
    const skinNameSet = new Set();
    (CONFIG.models || []).forEach((m) => { if (m.name) skinNameSet.add(m.name); });
    cat.forEach((c) => { if (c.skinName) skinNameSet.add(c.skinName); });
    const skinLang = skinNameMap();
    Object.keys(skinLang).forEach((k) => skinNameSet.add(k));

    /* 条目名：剥掉皮肤后缀 + 动作名跟着界面语言走 + 中文与数字之间补空格 */
    const spaced = (t) => t.replace(/([\u4e00-\u9fa5])(\d)/g, '$1 $2');
    const label = (name) => {
      if (typeof name !== 'string') return name;
      const m = /^(.*?)（([^）]*)）\s*$/.exec(name);
      if (!m) return spaced(I18N.animLabel(name));
      const inner = m[2];
      const isSkin = skinNameSet.has(inner) || skinLang[inner]
        || /^第\d*套外观$/.test(inner) || /^皮肤\s*\d+$/.test(inner);
      if (!isSkin) return spaced(I18N.animLabel(name));   // 不是皮肤后缀 → 原样保留
      return spaced(I18N.animLabel(m[1]));
    };

    /* ★ 第七十五轮（用户反馈"语音图鉴上下排版 2、3、1 这种顺序不对"）：
       数据是按**键名**排的 —— `X_Touch1_1_Skin1`（薅脸2）、`X_Touch1_2_Skin1`（薅脸3）
       会排在 `X_Touch1_Skin1`（薅脸1）**前面**，因为 '1' < '2' < 'S'。
       所以显示前按**名字的自然顺序**重排：
         · 同一个系列（把数字/下划线/连字符去掉后同名）内部按数字升序（1 < 2 < 10）；
         · 系列之间保持数据里第一次出现的先后（不把整段打乱）。 */
    const namePrefix = (n) => String(n == null ? '' : n).replace(/[\d_\-]+/g, '');
    const nameNums = (n) => (String(n == null ? '' : n).match(/\d+/g) || []).map(Number);
    const naturalSort = (arr) => {
      const first = new Map();
      arr.forEach((c, i) => {
        const p = namePrefix(c.name);
        if (!first.has(p)) first.set(p, i);
      });
      return arr.slice().sort((a, b) => {
        const pa = namePrefix(a.name);
        const pb = namePrefix(b.name);
        if (pa !== pb) return first.get(pa) - first.get(pb);
        const na = nameNums(a.name);
        const nb = nameNums(b.name);
        for (let k = 0; k < Math.max(na.length, nb.length); k++) {
          const x = na[k] === undefined ? -1 : na[k];   // 没数字的排在本系列最前
          const y = nb[k] === undefined ? -1 : nb[k];
          if (x !== y) return x - y;
        }
        return 0;
      });
    };

    /* 段序：默认在最前，其余按外观列表顺序；数据里多出来的皮肤排在后面 */
    const skinOrder = [''];
    (CONFIG.models || []).forEach((m) => {
      const vs = m.voiceSkin || '';
      if (vs && skinOrder.indexOf(vs) < 0) skinOrder.push(vs);
    });
    cat.forEach((c) => { if (c.skin && skinOrder.indexOf(c.skin) < 0) skinOrder.push(c.skin); });

    skinOrder.forEach((vs) => {
      const items = cat.filter((c) => (c.skin || '') === vs);
      if (!items.length) return;                 // 这套外观没有专属语音 → 不列空段
      const sec = document.createElement('div');
      sec.className = 'vs-section' + (vs ? '' : ' vs-base');
      const sh = document.createElement('div');
      sh.className = 'vs-skin';
      sh.textContent = vs ? skinDisplay(vs, skinZh(vs)) : I18N.t('voice.defaultSkin');
      sec.appendChild(sh);
      /* 分组顺序 = 数据里第一次出现的顺序（互动 / 情绪 / 剧情 / 战斗 / 养成 …） */
      const groups = {};
      items.forEach((c) => { (groups[c.group] = groups[c.group] || []).push(c); });
      Object.keys(groups).forEach((g) => {
        const h = document.createElement('div');
        h.className = 'group-title';
        h.textContent = I18N.groupName(g);
        sec.appendChild(h);
        const list = document.createElement('div');
        list.className = 'voice-list';
        naturalSort(groups[g]).forEach((c) => {
          const row = document.createElement('button');
          row.className = 'voice-row';
          row.dataset.key = c.key;      // 给回归脚本核对"有没有漏/重"用
          /* 台词：没有官方中文台词的写「官方未收录台词」；有韩语原文就小字列在下面 */
          const main = c.text || I18N.t('voice.noText');
          const ko = c.textKo ? `<span class="v-ko">${c.textKo}</span>` : '';
          row.innerHTML = `<span class="v-name">${label(c.name)}</span><span class="v-text">${main}${ko}</span>`;
          row.addEventListener('click', () => {
            const r = Voice.playKey(c.key);
            /* ★ 第三十一轮：长语音（打电话独白等）的对话框要陪到播完 */
            sayUntilDone((r && r.text) || c.text || label(c.name), r && r.key, r && r.lang);
          });
          list.appendChild(row);
        });
        sec.appendChild(list);
      });
      box.appendChild(sec);
    });

    /* ★ 第六十七轮：皮肤语音策略开关（默认"跟随语言"= 选韩语就韩语）。
       用户想听只有日语的新皮肤专属语音时可以切到"优先皮肤"。
       ★ 第七十五轮：开关下面那行说明文字（旁白）已删除，只留开关本身。 */
    const foot = document.createElement('div');
    foot.className = 'vs-foot';
    const btn = document.createElement('button');
    btn.className = 'vs-toggle' + (Voice.isSkinFirst() ? ' on' : '');
    btn.textContent = I18N.t(Voice.isSkinFirst() ? 'voice.skinFirstOn' : 'voice.skinFirstOff');
    btn.addEventListener('click', () => {
      Voice.setSkinFirst(!Voice.isSkinFirst());
      voiceTabBuilt = false;
      buildVoicePanel();
    });
    foot.appendChild(btn);
    box.appendChild(foot);
    voiceTabBuilt = true;
  }

  /* ★ 第七十四轮（用户反馈）：面板**互斥 + 点外面就关**。
     以前动作面板和角色面板能同时开着，切到别的按钮也不收起，屏幕上叠一大堆；
     现在任何时刻最多只有一个面板，点工具栏 / 底部按钮 / 角色空白处 / 按 Esc 全部收起。 */
  const PANEL_IDS = ['food-panel', 'action-panel', 'skin-panel'];
  function closeAllPanels(except) {
    PANEL_IDS.forEach((id) => {
      if (id === except) return;
      const el = $(id);
      if (el && !el.classList.contains('hidden')) el.classList.add('hidden');
    });
  }
  function isPanelOpen(id) {
    const el = $(id);
    return !!(el && !el.classList.contains('hidden'));
  }

  /** 切到「动作」或「语音」页（面板内页签、顶栏按钮共用这一套，保证状态永远一致） */
  function showTab(isAnim) {
    const p = $('action-panel');
    document.querySelectorAll('#action-tabs .tab').forEach((x) => {
      x.classList.toggle('on', (x.dataset.tab === 'anim') === isAnim);
    });
    $('tab-anim').classList.toggle('hidden', !isAnim);
    $('tab-voice').classList.toggle('hidden', isAnim);
    /* ★ 第六十七轮：语音图鉴是"长文本"，窄面板里一行只能放几个字。
       切到语音页时给面板挂 voice-mode（放宽到 92vw），切回动作页再摘掉。 */
    p.classList.toggle('voice-mode', !isAnim);
    if (isAnim) { if (!animTabBuilt) buildAnimPanel(); }
    else if (!voiceTabBuilt) buildVoicePanel();
  }

  /** 打开动作面板。which = 'anim' | 'voice'
      ★ 第七十五轮（用户要求"我选了语音，想换成动作应该点一下动作就切过去"）：
      面板已经开着、但停在另一页时，点「动作」= **一次点击直接切页**，
      不再"先关掉、再点一次才重新打开"。同一页再点才收起。 */
  function openPanel(which) {
    const wantAnim = which !== 'voice';
    const p = $('action-panel');
    if (isPanelOpen('action-panel')) {
      const curAnim = !$('tab-anim').classList.contains('hidden');
      if (curAnim === wantAnim) { p.classList.add('hidden'); return; }   // 同页再点 = 收起
      showTab(wantAnim);
      placePanel(p);
      return;
    }
    closeAllPanels('action-panel');
    showTab(wantAnim);
    p.classList.remove('hidden');
    placePanel(p);
  }

  /* ---------------------------------------------------------- 热区调试层 */
  function drawDebug() {
    if (!DEBUG) return;
    const cw = dbg.clientWidth || 1;
    const ch = dbg.clientHeight || 1;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (dbg.width !== Math.floor(cw * dpr)) {
      dbg.width = Math.floor(cw * dpr);
      dbg.height = Math.floor(ch * dpr);
    }
    const g = dbg.getContext('2d');
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.clearRect(0, 0, cw, ch);
    if (!Pet.ready) return;

    const z = Pet.zones();
    const colors = {
      head: '#e8590c', cheekL: '#c2255c', cheekR: '#c2255c',
      mouth: '#1971c2', belly: '#2f9e44',
    };
    for (const [k, v] of Object.entries(z)) {
      const zp = Pet.zoneScreen(k);
      g.beginPath();
      g.arc(zp.x, zp.y, zp.r, 0, Math.PI * 2);
      g.strokeStyle = colors[k] || '#888';
      g.lineWidth = 2;
      g.stroke();
      g.fillStyle = (colors[k] || '#888') + '33';
      g.fill();
      g.fillStyle = colors[k] || '#888';
      g.font = '11px system-ui';
      g.fillText(k, zp.x - 10, zp.y - zp.r - 4);
    }
    const H = Pet.bounds;
    const tl = Pet.worldToScreen(H.x, H.y + H.h);
    const br = Pet.worldToScreen(H.x + H.w, H.y);
    g.strokeStyle = 'rgba(0,0,0,.25)';
    g.setLineDash([4, 4]);
    g.strokeRect(tl.x, tl.y, br.x - tl.x, br.y - tl.y);
    g.setLineDash([]);
  }

  /* ---------------------------------------------------------- 主循环 */
  let lastTs = 0;
  let saveAcc = 0;
  let rafId = 0;
  let running = false;
  let booted = false;      // 首次启动完成前不许提前起循环（模型还没加载好）

  /* ★ 第七十八轮引入 / 第八十轮改成自适应：空闲降帧（低端手机流畅度）。
     旧版对所有设备一律"待机隔帧 30fps"，快设备被用户感知为"帧数好低"（本轮反馈）。
     现在按**每帧实际 CPU 开销**的指数滑动平均判断这台设备带不带得动：
     · 帧开销 > 12ms（60fps 预算 16.7ms 会被吃掉大半）→ 待机降到 ~30fps；
     · 帧开销 < 7ms → 恢复满帧（60/120Hz 跟显示器走）；
     · 7~12ms 之间保持现状（滞后带，防止来回抖）。
     互动/表情/非待机动作仍然永远满帧。跳帧时不动 lastTs，
     下一渲染帧的 dt 自然变成 ~33ms，动画时间连续不跳变。 */
  const IDLE_FRAME_MS = 1000 / 30;
  const WORK_SLOW_MS = 12, WORK_FAST_MS = 7;
  let workEma = 0;          // 每帧 CPU 开销的指数滑动平均（ms）
  let deviceSlow = false;   // 实测带不动 → 空闲才降帧
  function idleThrottle() {
    return deviceSlow
      && Pet.ready
      && !Interact.mode
      && Pet.currentAnim === Pet.animName('idle');
  }

  function loop(ts) {
    if (!running) { rafId = 0; return; }
    rafId = requestAnimationFrame(loop);
    if (lastTs && idleThrottle() && ts - lastTs < IDLE_FRAME_MS) return;   // 空闲：隔帧渲染
    const dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0;
    lastTs = ts;

    PetState.tick(dt);
    Interact.tick();          // 看门狗：指针抬起但动作没收尾就强制结束，防形变残留
    const t0 = performance.now();
    Pet.update(dt);
    Pet.draw();
    drawDebug();
    /* 帧开销只统计 update+draw（渲染本体），EMA 平滑掉单帧毛刺（存档/编译抖动） */
    const work = performance.now() - t0;
    workEma = workEma ? workEma * 0.9 + work * 0.1 : work;
    if (workEma > WORK_SLOW_MS) deviceSlow = true;
    else if (workEma < WORK_FAST_MS) deviceSlow = false;

    /* ★ 第七十八轮：周期存档 5 秒 → 30 秒（localStorage 是同步 IO，低端机"每几秒
       规律性顿一下"多半是它；真正改数据的互动结算在 PetState.reward() 里即时存，不丢进度）。 */
    saveAcc += dt;
    if (saveAcc > 30) { saveAcc = 0; PetState.save(); refreshStats(); }
  }

  /* ★ 第五十轮：切后台真的停下来，切回前台只重启**一次**。
     以前切回时如果直接再调一次 requestAnimationFrame(loop)，而旧循环因浏览器
     恢复可见又活过来，就会变成**两个循环并行**（每帧跑两遍、越切越多），
     这正是"切一会儿后台再切回来就变卡"的典型原因。
     用 running + rafId 保证任何时刻只有一个循环在跑。 */
  function startLoop() {
    if (running) return;
    running = true;
    lastTs = 0;                 // 丢掉后台那段的时间差，避免恢复瞬间算出巨大的 dt
    rafId = requestAnimationFrame(loop);
  }
  function stopLoop() {
    running = false;
    if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
  }

  /* ★ 第五十轮：页面切到后台 → 停主循环 + 停背景音乐 + 停语音 + 收掉进行中的互动；
     切回前台 → 重启循环 + 接着放音乐。
     （互动模块自己也在 visibilitychange 里收尾，这里是"运行/音频"这一层。） */
  function onAppHidden() {
    stopLoop();
    if (window.Music) Music.suspend();
    Voice.stop();
    Interact.abort();
    /* ★ 第七十八轮：周期存档拉长到 30 秒后，切后台前补一次，进度不丢 */
    try { PetState.save(); } catch (e) { /* 忽略 */ }
  }
  function onAppVisible() {
    if (booted) startLoop();          // 还没启动完就先别起循环（Pet 还没 ready）
    if (window.Music) Music.resume();
  }
  document.addEventListener('visibilitychange', () => {
    try { if (document.hidden) onAppHidden(); else onAppVisible(); }
    catch (e) { /* 启动过程中切后台等边缘情况：忽略，别让监听抛错 */ }
  });
  /* ★ 安卓壳的 onPause / onResume 会直接调这两个钩子 —— 双保险：
     个别 ROM 的 WebView 不派发 visibilitychange，光靠事件会漏。
     两个方向都是幂等的，和事件重复触发也安全。 */
  window.__petBackground = function () { try { onAppHidden(); } catch (e) { /* 忽略 */ } };
  window.__petForeground = function () { try { onAppVisible(); } catch (e) { /* 忽略 */ } };

  /* 读取用户上次选择的语音语言；如果当前角色支持，就覆盖角色自己的默认语言。
     让用户切一次日语/韩语后，后续启动 / 切角色都保持这个偏好，不再跳回默认。 */
  function applySavedVoiceLang() {
    try {
      const saved = localStorage.getItem('pet-voice-lang');
      if (saved && CONFIG.voiceLangs && CONFIG.voiceLangs.indexOf(saved) >= 0) {
        CONFIG.voiceLang = saved;
      }
    } catch (e) { /* 忽略 */ }
  }

  /* ---------------------------------------------------------- 启动 */
  async function boot() {
    const fill = $('loader-fill');
    const tip = $('loader-tip');

    Pet.init(canvas);
    if (DEBUG) dbg.classList.add('on');
    fill.style.width = '25%';
    tip.textContent = I18N.t('loader.tip');
    /* ★ 第四十六轮：背景音乐尽早起（默认开；关过就保持关）。
       放在模型加载前，这样加载那几秒就有音乐，不会干等。 */
    if (window.Music) Music.init();
    await Voice.load();

    /* ★ 记住上次玩的是谁（多角色）：启动时直接回到那个角色。
       尽早应用，这样加载层头像、标题、语言按钮一出来就是上次的，
       不会先显示默认黄油再闪切。 */
    try {
      const saved = localStorage.getItem('pet-character');
      const k = CONFIG.characters.findIndex((c) => c.id === saved);
      if (k > 0) CONFIG.applyCharacter(k);
    } catch (e) { /* 忽略 */ }
    /* ★ 语音语言也记用户偏好：有上次选择且当前角色支持就优先用它。 */
    applySavedVoiceLang();
    Voice.useCharacter(CONFIG.id, CONFIG.voiceLang);
    PetState.useCharacter(CONFIG.id);
    refreshCharacterShell();
    fill.style.width = '55%';

    preloadInteractionVoices();
    Voice.preloadSfx([
      'SFX_Pat', 'SFX_Tickle', 'SFX_Common_PullCheek',
      'SFX_Common_PullCheekEnd', 'SFX_DutchRub_Default', 'SFX_DutchRub_Max',
    ]);
    /* ★ 预加载互动特效图（爱心 / 敲头星芒）。
       不预加载的话首次敲头会因 PNG 未下载完而"看不到特效"（第二十七轮修的 bug）。 */
    Fx.preload();

    tip.textContent = I18N.t('loader.tipModel');
    fill.style.width = '70%';
    try {
      await Pet.loadModel(CONFIG.models[0]);
    } catch (e) {
      console.error('模型加载失败', e);
      tip.textContent = I18N.t('loader.modelFail', { msg: e.message });
      return;
    }
    fill.style.width = '100%';

    Interact.attach(canvas, {
      /* ★ 第七十八轮（用户要求"互动结束会出现台词再结束"）：
         互动台词从固定 3 秒改成**陪到语音播完**——语音多长，台词就陪多长；
         语音被下一条顶掉时气泡跟着换（token 保证旧计时器不误收新气泡）。
         拿不到音频（解析失败）时 sayUntilDone 内部回退 3 秒，行为与旧版一致。 */
      onSay: (text, key, L) => sayUntilDone(text, key, L),
      onState: refreshStats,
      onWantFood: () => toggleFoodPanel(true),
      onFeed: () => refreshStats(),
      onFed: onFed,
    });

    /* ★ 启动时只构建皮肤列表；角色/食物面板打开时再构建，减少首屏 DOM，降低低端机卡顿。 */
    buildSkins();
    refreshStats();
    /* 食物图预热延迟 10 秒再跑：91 张图不该和首屏模型/语音抢带宽。 */
    setTimeout(preloadFoodImages, 10000);

    setTimeout(() => {
      $('loader').classList.add('hide');
      /* ★ 第七十八轮：启动问候同样陪到语音播完（与互动台词口径一致） */
      const r = Voice.play(CONFIG.greetVoice);
      sayUntilDone((r && r.text) || I18N.t('bubble.back'), r && r.key, r && r.lang);
    }, 350);

    booted = true;
    startLoop();          // ★ 第五十轮：主循环由 startLoop/stopLoop 管（切后台要停）
  }

  /* ---------------------------------------------------------- ★ 面板避让人物
     （第三十三轮起；第四十五轮按用户反馈重做"喂食面板优先落空白处 + 横竖滑动方向"）

     统一先算两条几何：
       box  = 人物在屏幕上的包围盒（Pet.bounds 换算，含 5% 动画余量）
       band = **顶部功能按钮下缘 ↔ 底部互动条上缘** 之间的可放置竖带
              —— 面板/内容一律不许越出这条带，从根上杜绝"挡住按钮"。
     然后按面板类型放：
       · 角色/皮肤面板：占满这条带（左/居中），允许盖住人物（用户明确允许），
         高度写死 → 里面的角色列表 / 皮肤列表各自滚动（安卓也能滑）。
       · 喂食面板：优先人物**上方或下方那条空白横带**（用户："你看这上面是不是有空白的"），
         放进去就用**横排食物 + 只左右滑**；上下都塞不下才退回左右竖排（只上下滑）。
       · 其他面板（动作/语音）：右边空白 → 左边空白 → 人物头顶上方 → 压缩贴边。 */
  function petScreenBox() {
    if (!Pet.ready) return null;
    const b = Pet.bounds;
    if (!b || !b.w || !b.h) return null;
    const l = Pet.worldToScreen(b.x, 0).x;
    const r = Pet.worldToScreen(b.x + b.w, 0).x;
    const t = Pet.worldToScreen(0, b.y + b.h).y;
    const bo = Pet.worldToScreen(0, b.y).y;
    const mx = (r - l) * 0.05, my = (bo - t) * 0.05;   /* 呼吸/跳跃等动画余量 */
    return { left: l - mx, right: r + mx, top: t - my, bottom: bo + my };
  }

  /** 顶部功能按钮与底部互动按钮之间可用的竖带（面板一律待在这条带里，不压按钮） */
  function uiBand() {
    let top = 10, bottom = window.innerHeight - 10;
    const t = document.querySelector('.hud-tools');
    const a = document.querySelector('.hud-actions');
    if (t) { const r = t.getBoundingClientRect(); if (r.height > 0) top = Math.max(top, r.bottom + 8); }
    if (a) { const r = a.getBoundingClientRect(); if (r.height > 0) bottom = Math.min(bottom, r.top - 8); }
    return { top: top, bottom: bottom, h: Math.max(160, bottom - top) };
  }

  const clampToBand = (y, ph, band) => Math.max(band.top, Math.min(band.bottom - ph, y));

  function placePanel(el) {
    if (!el || el.classList.contains('hidden')) return;
    el.classList.remove('panel-snug', 'fp-h');
    /* ★ 第五十九轮：量之前先把页面滚动复位。
       只要 body / html 被任何原因滚过（例如别处调用 scrollIntoView），
       .hud-tools 的 rect 就会变成负数，uiBand 算出负的可用带，
       面板会被塞到屏幕外面、顶栏按钮也一起消失。 */
    try {
      if (document.body.scrollTop) document.body.scrollTop = 0;
      if (document.documentElement.scrollTop) document.documentElement.scrollTop = 0;
      if (window.scrollY || window.pageYOffset) window.scrollTo(0, 0);
    } catch (e) { /* 忽略 */ }
    /* 居中面板带 translate(-50%,-50%)，先转成绝对定位才好量好放 */
    if (getComputedStyle(el).transform !== 'none') el.style.transform = 'none';
    el.style.transform = 'none';
    el.style.left = '0px'; el.style.top = '0px';
    el.style.right = 'auto';                            /* 原样式锚 right，改由 left 定位 */
    el.style.bottom = 'auto';                           /* 原样式锚 bottom，改由 top 定位 */
    el.style.width = '';
    el.style.height = '';
    el.style.maxHeight = '';

    const W = window.innerWidth;
    const band = uiBand();
    const gap = 12, edge = 8;
    const box = petScreenBox();

    /* ① 角色 / 皮肤面板：吃满可用带，给确定高度让两个列表各自滚动 */
    if (el.id === 'skin-panel') {
      el.style.height = Math.round(Math.min(band.h, Math.max(320, window.innerHeight * 0.66))) + 'px';
      el.style.top = Math.round(band.top) + 'px';
      el.style.left = Math.round(Math.max(edge, (W - el.offsetWidth) / 2)) + 'px';
      return;
    }

    /* ② 喂食面板：窄窗（手机）优先落在人物上方/下方的空白横带（横排食物，只左右滑）；
         大窗（电脑/网页）左右有富余，仍旧竖排在旁边（横条拉满整屏不好看）。 */
    if (el.id === 'food-panel') {
      const pwDefault = el.offsetWidth;                  /* CSS clamp 算出来的默认竖排宽度 */
      const sideOk = box && band.h >= 340 &&
        (W - box.right >= pwDefault + gap + 6 || box.left >= pwDefault + gap + 6);
      if (!sideOk && box) {
        const STRIP_MIN = 106;                           /* 横条模式"表头一行 + 食物一行"的最低高度 */
        const above = box.top - band.top - gap;
        const below = band.bottom - box.bottom - gap;
        if (Math.max(above, below) >= STRIP_MIN) {
          const h = Math.round(Math.min(Math.max(above, below),
            Math.min(250, Math.max(158, window.innerHeight * 0.26))));
          el.classList.add('fp-h');                      /* ★ 横排食物 = 只允许左右滑 */
          el.style.width = Math.round(W - edge * 2) + 'px';
          el.style.height = h + 'px';
          el.style.left = edge + 'px';
          el.style.top = Math.round(above >= below ? band.top : band.bottom - h) + 'px';
          return;
        }
      }
      /* 上下都塞不下 → 竖排（默认样式：只上下滑），优先右边空白，其次左边 */
      el.style.height = Math.round(band.h) + 'px';
      const pw = el.offsetWidth;
      let x = null;
      if (box) {
        if (W - box.right >= pw + gap + 6) x = Math.min(W - pw - edge, box.right + gap);
        else if (box.left >= pw + gap + 6) x = Math.max(edge, box.left - gap - pw);
      }
      if (x === null) {
        el.classList.add('panel-snug');                 /* 两侧也挤：压缩成细条贴空隙更大的一边 */
        el.style.height = Math.round(Math.min(band.h, window.innerHeight * 0.6)) + 'px';
        const w2 = el.offsetWidth;
        const fr = box ? W - box.right : W, fl = box ? box.left : 0;
        x = fr >= fl
          ? Math.max(edge, Math.min(W - w2 - edge, (box ? box.right + gap : edge)))
          : Math.max(edge, Math.min(W - w2 - edge, (box ? box.left - gap - w2 : edge)));
      }
      el.style.left = Math.round(x) + 'px';
      el.style.top = Math.round(clampToBand((window.innerHeight - el.offsetHeight) / 2, el.offsetHeight, band)) + 'px';
      return;
    }

    /* ③ 其他面板（动作 / 语音 / 皮肤以外的）：右边空白 → 左边空白 → 头顶上方 → 压缩贴边 */
    el.style.maxHeight = Math.round(band.h) + 'px';
    const pw = el.offsetWidth, ph = el.offsetHeight;
    let x = null, y = null;
    if (box) {
      const freeRight = W - box.right, freeLeft = box.left;
      const fits = (free, w) => free >= w + gap + 6;
      if (fits(freeRight, pw)) {
        x = Math.min(W - pw - edge, box.right + gap);
        y = (window.innerHeight - ph) / 2;
      } else if (fits(freeLeft, pw)) {
        x = Math.max(edge, box.left - gap - pw);
        y = (window.innerHeight - ph) / 2;
      } else if (box.top - band.top >= ph + gap) {
        /* 头顶上方整块空白放得下 */
        x = Math.max(edge, Math.min(W - pw - edge, (W - pw) / 2));
        y = Math.max(band.top, Math.min(box.top - ph - gap, band.bottom - ph));
      } else {
        el.classList.add('panel-snug');                 /* 压缩再放：贴空隙更大的一边 */
        const w2 = el.offsetWidth, h2 = el.offsetHeight;
        x = freeRight >= freeLeft
          ? Math.max(edge, Math.min(W - w2 - edge, box.right + gap))
          : Math.max(edge, Math.min(W - w2 - edge, box.left - gap - w2));
        y = band.bottom - h2;
      }
    }
    if (x === null) x = Math.max(edge, (W - el.offsetWidth) / 2);
    if (y === null) y = clampToBand((window.innerHeight - el.offsetHeight) / 2, el.offsetHeight, band);
    el.style.left = Math.round(x) + 'px';
    el.style.top = Math.round(clampToBand(y, el.offsetHeight, band)) + 'px';
  }

  function placeVisiblePanels() {
    ['food-panel', 'action-panel', 'skin-panel'].forEach((id) => {
      const el = $(id);
      if (el && !el.classList.contains('hidden')) placePanel(el);
    });
  }

  /* ---------------------------------------------------------- UI 事件 */
  $('btn-skin').addEventListener('click', () => {
    const p = $('skin-panel');
    /* ★ 第七十四轮：先判"是不是要打开" —— 打开就关掉别的面板；再点一次才是收起 */
    if (p.classList.contains('hidden')) closeAllPanels('skin-panel');
    p.classList.toggle('hidden');
    if (!p.classList.contains('hidden')) {
      /* 打开面板时把角色数显示在搜索框占位符里，顺便刷新一次列表 */
      const s = $('char-search');
      if (s) s.placeholder = I18N.t('skin.search', { n: CONFIG.characters.length });
      buildCharList();
      placePanel(p);
    }
  });
  /* ★ 角色搜索：输入即时过滤（防抖 150ms，避免每次按键重建整个列表） */
  $('char-search').addEventListener('input', debounce(buildCharList, 150));
  $('food-close').addEventListener('click', () => toggleFoodPanel(false));
  $('food-search').addEventListener('input', debounce(buildFoodPanel, 150));
  $('btn-actions').addEventListener('click', () => openPanel('anim'));
  $('action-close').addEventListener('click', () => $('action-panel').classList.add('hidden'));

  $('action-tabs').addEventListener('click', (e) => {
    const t = e.target.closest('.tab');
    if (!t) return;
    /* ★ 第七十五轮：页签与顶栏按钮走同一个 showTab，点哪页就切哪页（一次点击）。 */
    showTab(t.dataset.tab === 'anim');
    placePanel($('action-panel'));
  });

  /* 语音语言切换（★ 第五十四轮重写）：菜单全列日语/韩语，选了就记住（localStorage），
     不随角色变化；角色缺所选语言的条目由播放层（Voice.resolveAny / playKey）
     直接回退到另一门语言播放，不会再把按钮/偏好跳回默认。 */
  const LANG_LABEL = { ja: '日语', ko: '韩语' };

  function syncLangButton() {
    const btn = $('btn-lang');
    const cur = Voice.getLang();
    /* ★ 第五十四轮：语言菜单全列（日语/韩语），不再按"该角色有没有"过滤 ——
       用户选了日语就一直显示日语；角色缺日语的条目由播放层直接回退韩语。
       以前按角色过滤 → 选日语后换到只有韩语的角色，按钮跳回"韩语（唯一）"，
       用户以为偏好被重置了。 */
    btn.textContent = I18N.voiceLangName(cur);
    btn.classList.remove('disabled');
  }

  $('btn-lang').addEventListener('click', () => {
    const usable = Voice.allLangs();
    if (!usable.length) return;
    /* ★ 第四十五轮（用户要求）：语言菜单一律用**当前界面语言**的写法
       （中文界面就是"日语 / 韩语"）。原来固定显示原生写法（日本語 / 한국어），
       中国玩家看不懂한국어那一条。 */
    showLangMenu($('btn-lang'),
      usable.map((v) => ({ id: v, label: I18N.voiceLangName(v), on: v === Voice.getLang() })),
      (next) => {
        if (next === Voice.getLang()) return;
        Voice.setLang(next);
        syncLangButton();
        voiceTabBuilt = false;
        if (!$('tab-voice').classList.contains('hidden')) buildVoicePanel();
        showBubble(I18N.t('bubble.toLang', { lang: I18N.voiceLangName(next) }));
      });
  });

  /* ---------------------------------------------------------- ★ 背景音乐（第四十六轮）
     三个按钮：音乐:开/关（记状态）、换音乐（13 首里挑）、音量（总/音乐/语音/音效 四条滑杆）。
     播放逻辑全在 js/music.js，这里只做 UI 联动。 */
  function syncMusicButton() {
    const b = $('btn-music');
    if (!b || !window.Music) return;
    const on = Music.isOn();
    b.textContent = I18N.t(on ? 'btn.musicOn' : 'btn.musicOff');
    b.classList.toggle('on', on);
    b.classList.toggle('dim', !on);
    b.title = I18N.t(on ? 'btn.musicOn' : 'btn.musicOff');
  }

  $('btn-music').addEventListener('click', () => {
    if (!window.Music) return;
    const on = Music.toggle();
    syncMusicButton();
    showBubble(I18N.t(on ? 'bubble.musicOn' : 'bubble.musicOff'));
  });

  $('btn-music-pick').addEventListener('click', () => {
    if (!window.Music) return;
    const cur = Music.current();
    /* 复用语言菜单那套弹出列表：曲名一列，当前这首高亮 */
    showLangMenu($('btn-music-pick'),
      Music.tracks.map((t) => ({ id: t.id, label: t.name, on: !!cur && cur.id === t.id })),
      (id) => { Music.select(id); syncMusicButton(); });
  });

  $('btn-volume').addEventListener('click', () => showVolumeMenu($('btn-volume')));
  /* ★ 第七十四轮：界面透明度（面板挡人物 → 调淡面板底色） */
  $('btn-alpha').addEventListener('click', () => showAlphaMenu($('btn-alpha')));

  $('btn-auto').addEventListener('click', (e) => {
    autoOn = !autoOn;
    e.target.classList.toggle('on', autoOn);
    Interact.setAuto(autoOn);
    showBubble(I18N.t(autoOn ? 'bubble.autoOn' : 'bubble.autoOff'));
  });

  /* ★ 语言选择菜单（第三十七轮，用户要求"点按钮给选择框而不是一个个换"）：
     btn 下方弹一个小菜单，列出可选项（当前项高亮），点外面/Esc 关闭。
     界面语言按钮（4 选 1）和语音语言按钮（按角色可用列表选）共用。 */
  let langMenu = null;
  function closeLangMenu() {
    if (langMenu) { langMenu.remove(); langMenu = null; }
    window.removeEventListener('pointerdown', onMenuOutside, true);
  }
  function onMenuOutside(e) {
    if (langMenu && !langMenu.contains(e.target)) closeLangMenu();
  }
  function showLangMenu(btn, items, onPick) {
    closeLangMenu();
    closeVolumeMenu();
    langMenu = document.createElement('div');
    langMenu.id = 'lang-menu';
    items.forEach((it) => {
      const o = document.createElement('div');
      o.className = 'lang-item' + (it.on ? ' on' : '');
      o.textContent = it.label;
      o.addEventListener('click', () => { closeLangMenu(); onPick(it.id); });
      langMenu.appendChild(o);
    });
    document.body.appendChild(langMenu);
    const r = btn.getBoundingClientRect();
    const mw = langMenu.offsetWidth;
    langMenu.style.left = Math.max(8, Math.min(window.innerWidth - mw - 8, r.right - mw)) + 'px';
    langMenu.style.top = Math.min(window.innerHeight - langMenu.offsetHeight - 8, r.bottom + 6) + 'px';
    setTimeout(() => window.addEventListener('pointerdown', onMenuOutside, true), 0);
  }
  /* ---------------------------------------------------------- ★ 音量面板（第四十六轮）
     用户要求："分成音乐+语音+音效三种分别设置，再加个总音量，四个"。
     四条滑杆：总音量 / 音乐 / 语音 / 音效 —— 数值存 sound.js（localStorage）。
     和语言菜单一样是"按钮下方弹出、点外面关闭"的浮层。 */
  let volMenu = null;
  const VOL_ROWS = [
    { ch: 'master', key: 'vol.master' },
    { ch: 'music', key: 'vol.music' },
    { ch: 'voice', key: 'vol.voice' },
    { ch: 'sfx', key: 'vol.sfx' },
  ];

  function closeVolumeMenu() {
    if (volMenu) { volMenu.remove(); volMenu = null; }
    window.removeEventListener('pointerdown', onVolOutside, true);
  }
  function onVolOutside(e) {
    if (volMenu && !volMenu.contains(e.target)) closeVolumeMenu();
  }

  function showVolumeMenu(btn) {
    if (!window.Sound) return;
    closeLangMenu();
    closeVolumeMenu();
    const box = document.createElement('div');
    box.id = 'volume-menu';
    VOL_ROWS.forEach((r) => {
      const row = document.createElement('div');
      row.className = 'vol-row';
      const lab = document.createElement('label');
      lab.textContent = I18N.t(r.key);
      const range = document.createElement('input');
      range.type = 'range';
      range.min = '0'; range.max = '100'; range.step = '5';
      range.value = String(Math.round(Sound.value(r.ch) * 100));
      const val = document.createElement('b');
      val.textContent = Math.round(Sound.value(r.ch) * 100) + '%';
      range.addEventListener('input', () => {
        const v = Sound.setVolume(r.ch, Number(range.value) / 100);
        val.textContent = Math.round(v * 100) + '%';
      });
      row.appendChild(lab); row.appendChild(range); row.appendChild(val);
      box.appendChild(row);
    });
    const hint = document.createElement('div');
    hint.className = 'vol-hint';
    hint.textContent = I18N.t('vol.hint');
    box.appendChild(hint);
    document.body.appendChild(box);
    const r0 = btn.getBoundingClientRect();
    const mw = box.offsetWidth, mh = box.offsetHeight;
    box.style.left = Math.max(8, Math.min(window.innerWidth - mw - 8, r0.right - mw)) + 'px';
    box.style.top = Math.min(window.innerHeight - mh - 8, r0.bottom + 6) + 'px';
    volMenu = box;
    setTimeout(() => window.addEventListener('pointerdown', onVolOutside, true), 0);
  }

  /* ---------------------------------------------------------- ★ 界面透明度（第七十四轮）
     用户反馈："选动作、语音时面板有点遮挡角色，想能调节 UI 透明度"。
     做法：面板 / 工具栏 / 内部卡片的**底色**都用 :root 上的 --ui-alpha 算，
     这里只负责把用户选的值写进去并记住（localStorage）；文字颜色不受影响。
     菜单样式复用音量菜单的浮层（点外面关闭）。 */
  const ALPHA_MIN = 0.25;
  const ALPHA_KEY = 'pet-ui-alpha';

  function currentAlpha() {
    let v = NaN;
    try { v = parseFloat(localStorage.getItem(ALPHA_KEY)); } catch (e) { /* 忽略 */ }
    if (!isFinite(v)) v = 1;
    return Math.min(1, Math.max(ALPHA_MIN, v));
  }
  function applyAlpha(v) {
    v = Math.min(1, Math.max(ALPHA_MIN, v));
    document.documentElement.style.setProperty('--ui-alpha', String(v));
    try { localStorage.setItem(ALPHA_KEY, String(v)); } catch (e) { /* 忽略 */ }
    return v;
  }

  let alphaMenu = null;
  function closeAlphaMenu() {
    if (alphaMenu) { alphaMenu.remove(); alphaMenu = null; }
    window.removeEventListener('pointerdown', onAlphaOutside, true);
  }
  function onAlphaOutside(e) {
    if (alphaMenu && !alphaMenu.contains(e.target)) closeAlphaMenu();
  }

  function showAlphaMenu(btn) {
    closeLangMenu();
    closeVolumeMenu();
    closeAlphaMenu();
    const box = document.createElement('div');
    box.id = 'alpha-menu';

    const row = document.createElement('div');
    row.className = 'vol-row';
    const lab = document.createElement('label');
    lab.textContent = I18N.t('alpha.value');
    const range = document.createElement('input');
    range.type = 'range';
    range.min = String(Math.round(ALPHA_MIN * 100));
    range.max = '100';
    range.step = '5';
    range.value = String(Math.round(currentAlpha() * 100));
    const val = document.createElement('b');
    val.textContent = Math.round(currentAlpha() * 100) + '%';
    range.addEventListener('input', () => {
      const v = applyAlpha(Number(range.value) / 100);
      val.textContent = Math.round(v * 100) + '%';
      /* 面板开着时立刻按新宽度重排（透明了以后也尽量别压住角色脸） */
      placeVisiblePanels();
    });
    row.appendChild(lab); row.appendChild(range); row.appendChild(val);
    box.appendChild(row);

    const reset = document.createElement('button');
    reset.className = 'vol-reset';
    reset.textContent = I18N.t('alpha.reset');
    reset.addEventListener('click', () => {
      applyAlpha(1);
      range.value = '100';
      val.textContent = '100%';
      placeVisiblePanels();
    });
    box.appendChild(reset);

    const hint = document.createElement('div');
    hint.className = 'vol-hint';
    hint.textContent = I18N.t('alpha.hint');
    box.appendChild(hint);

    document.body.appendChild(box);
    const r0 = btn.getBoundingClientRect();
    const mw = box.offsetWidth, mh = box.offsetHeight;
    box.style.left = Math.max(8, Math.min(window.innerWidth - mw - 8, r0.right - mw)) + 'px';
    box.style.top = Math.min(window.innerHeight - mh - 8, r0.bottom + 6) + 'px';
    alphaMenu = box;
    setTimeout(() => window.addEventListener('pointerdown', onAlphaOutside, true), 0);
  }

  /* 启动时恢复上次的透明度（老用户升级后第一次进来还是 100%，不会突然变透明） */
  applyAlpha(currentAlpha());

  /* ---------------------------------------------------------- ★ 点别处 / Esc 收起面板（第七十四轮）
     用户反馈："有一些界面不能自动选择其他按钮时关闭"。
     · 点工具栏任意按钮 → 先收起所有面板（动作 / 角色两个按钮自己有开关逻辑，跳过）
     · 点底部互动按钮、点角色空白处 → 同样收起
     · 点面板内部（含拖动、滚动、选皮肤、点语音试听）→ 不动
     · Esc → 收起面板 + 关掉所有浮层菜单
     用捕获阶段，保证在按钮自己的 click 之前就把别的面板收掉。 */
  window.addEventListener('pointerdown', (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    /* 面板内部 / 弹出菜单内部：不关 */
    if (t.closest('.panel, .food-panel, #lang-menu, #volume-menu, #alpha-menu, #notice-overlay, #notice-card')) return;
    /* 「动作」「角色」「喂食」按钮自己会 toggle，交给它们处理
       （否则点了会被这里先关掉，变成"只能开不能关"） */
    if (t.closest('#btn-actions, #btn-skin, .act[data-act="feed"]')) {
      closeLangMenu(); closeVolumeMenu(); closeAlphaMenu();
      return;
    }
    /* 工具栏其它按钮 / 底部互动条 / 角色画布 / 舞台空白：全部收起 */
    if (t.closest('.tool, .act, .hud, .hud-actions, #pet-canvas, #stage, body, html')) {
      closeAllPanels();
    }
  }, true);

  window.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' && e.key !== 'Esc') return;
    closeAllPanels();
    closeLangMenu(); closeVolumeMenu(); closeAlphaMenu();
    const no = document.getElementById('notice-overlay');
    if (no && no.classList.contains('show')) no.classList.remove('show');
  });

  function afterUiLangChange() {
    syncUiLangButton();
    refreshCharacterShell();
    buildCharList(); buildSkins(); buildFoodPanel();
    animTabBuilt = false; voiceTabBuilt = false;
    if (!$('tab-anim').classList.contains('hidden')) buildAnimPanel();
    if (!$('tab-voice').classList.contains('hidden')) buildVoicePanel();
    syncLangButton();
    syncMusicButton();                 // ★ 音乐按钮文案跟着界面语言走
    try { window.dispatchEvent(new CustomEvent('uilang-changed')); } catch (e) { /* 忽略 */ }
  }
  function syncUiLangButton() {
    const b = $('btn-uilang');
    if (!b) return;
    b.textContent = I18N.LANG_NAME[I18N.lang];
    b.title = 'UI: ' + I18N.LANG_NAME[I18N.lang];
  }
  $('btn-uilang').addEventListener('click', () => {
    showLangMenu($('btn-uilang'),
      I18N.LANGS.map((l) => ({ id: l, label: I18N.LANG_NAME[l], on: l === I18N.lang })),
      (l) => {
        if (l === I18N.lang) return;
        I18N.setLang(l);
        afterUiLangChange();
      });
  });
  syncUiLangButton();
  syncMusicButton();                   // ★ 开机把「音乐:开/关」按上次记住的状态显示出来

  /* 面板可拖动：按住标题栏拖走，不挡人物（用户要边看动作边看反应）。
     ★ 第四十八轮：**喂食面板也支持拖动**（用户："喂食会挡住角色太可惜了"）。
     喂食面板的标题栏是 `.food-head`，它里面还塞着搜索框和关闭按钮，
     所以这两处必须让开，不然点搜索框/关面板会被当成拖动。 */
  const NO_DRAG = 'input, textarea, button, .tab, .chip, .food-close, .panel-x';

  function makeDraggable(panel, handleSel) {
    if (!panel) return;
    const handle = panel.querySelector(handleSel || '.panel-head');
    if (!handle) return;
    handle.addEventListener('pointerdown', (e) => {
      if (e.target.closest(NO_DRAG)) return;         // 搜索框 / 关闭按钮 / 页签 不触发拖动
      const r = panel.getBoundingClientRect();
      // 从"居中 transform"切换为"绝对 left/top"，再开始跟手
      panel.style.left = r.left + 'px';
      panel.style.top = r.top + 'px';
      panel.style.transform = 'none';
      panel.style.bottom = 'auto';
      handle.classList.add('dragging');
      const ox = e.clientX - r.left, oy = e.clientY - r.top;
      const move = (ev) => {
        /* ★ 第三十三轮：面板拖走也必须留一大半在窗口里，别拖到看不见 */
        const x = Math.max(64 - r.width, Math.min(window.innerWidth - 64, ev.clientX - ox));
        const y = Math.max(0, Math.min(window.innerHeight - 48, ev.clientY - oy));
        panel.style.left = x + 'px';
        panel.style.top = y + 'px';
      };
      const up = () => {
        handle.classList.remove('dragging');
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        window.removeEventListener('pointercancel', up);
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
      window.addEventListener('pointercancel', up);
      e.preventDefault();
    });
  }
  makeDraggable($('action-panel'));
  makeDraggable($('skin-panel'));
  makeDraggable($('food-panel'), '.food-head');   // ★ 第四十八轮：喂食面板也能拖

  /* 底部互动按钮：直接触发一次对应动作（走同一套官方资源） */
  document.querySelectorAll('.act').forEach((btn) => {
    btn.addEventListener('click', () => {
      const act = btn.dataset.act;
      const suffix = (Pet.modelDef || {}).voiceSkin || '';

      if (act === 'feed') { toggleFoodPanel(); return; }
      if (act === 'bonk') { Interact.doSmash(); return; }
      if (act === 'belly') { Interact.beginBelly(); return; }
      // 摸头：先摸一会儿，收尾（松手）时才出语音
      if (act === 'pat') {
        Interact.beginPat();
        setTimeout(() => Interact.finish(), 1800);
        return;
      }

      const A = CONFIG.actions[act];
      if (!A) return;

      // 捏脸：与手势捏脸走**同一条**官方管线（Interact.autoPinch）——
      // 屏幕像素位移 → 官方 Uf 方向性限幅 → cs 48° 锥包络。
      // 之前这里自己乘 H×0.2 各向同性放行，方向也不对，
      // 欧若拉那种脸皮绑在整颗头上的模型会被拽成尖嘴（用户报"模型崩坏"）。
      if (act === 'pinch') {
        if (!Pet.pinchAvailable()) {
          // 骨架里脸没绑到捏脸骨骼上，硬捏只会"有语音没动作"，
          // 明确告诉用户，并降级成普通戳一下。
          const why = Pet.pinchReason || (CONFIG.pinch && CONFIG.pinch.reason) || '这个角色的骨架不支持捏脸';
          showBubble(I18N.t('bubble.noPinch'));
          Interact.abort();
          Pet.playRandomMood(['taunt', 'surprise'], 'idle');
          const r0 = Voice.play(CONFIG.pokeVoice, suffix);
          if (r0 && r0.text) showBubble(r0.text);
          console.warn('[捏脸降级]', CONFIG.id, why);
          return;
        }
        Interact.autoPinch();
        PetState.reward('pinch');
        refreshStats();
        return;
      }
    });
  });

  /* ★ 性能优化：resize 事件每秒可触发数十次，placeVisiblePanels 读布局开销不小，
     用 rAF 节流保证每帧最多执行一次面板重排 */
  let resizeRafPending = false;
  window.addEventListener('resize', () => {
    Pet.resize();
    if (!resizeRafPending) {
      resizeRafPending = true;
      requestAnimationFrame(() => { resizeRafPending = false; placeVisiblePanels(); });
    }
  });

  /* 调试/自测入口：只读挂载，供验证工具（自测台、诊断台）驱动页面。
     不影响正常使用 —— 就是几个函数引用。 */
  window.__pet = {
    switchCharacter, switchSkin, CONFIG, Pet, Voice, Interact, PetState, Fx,
    get skinIndex() { return skinIndex; },
    /* 第八十轮：空闲降帧实况（验证探针按"设备实测快慢"分支断言用） */
    get perf() { return { workEma, deviceSlow }; },
  };

  boot();
})();
