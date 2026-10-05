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
      直接监听该条音频的 ended 事件；时长只作为一道保险；完全拿不到音频才退回 3 秒。 */
  function sayUntilDone(text, key) {
    if (!key) { showBubble(text); return; }
    const hooked = Voice.onEnded(key, closeBubbleSoon);
    if (hooked) {
      showBubble(text, 180000);            // 上限兜底：ended 万一不触发
      Voice.durationOf(key).then((d) => {
        if (d) setTimeout(closeBubbleSoon, (d + 0.8) * 1000);
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
      A.pat && A.pat.voice,
      A.pinch && A.pinch.voice,
      A.belly && A.belly.voice, A.belly && A.belly.voiceMid, A.belly && A.belly.voiceEnd,
      A.bonk && A.bonk.voice, A.bonk && A.bonk.voiceEnd,
      A.feed && A.feed.voice,
      CONFIG.pokeVoice, CONFIG.upsetVoice, CONFIG.hungryVoice, CONFIG.greetVoice,
      CONFIG.moodActs,
    ];
    preV.forEach((k) => { if (k && (!Array.isArray(k) || k.length)) Voice.preload(k); });
  }

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
      box.appendChild(el);
      n++;
    });
    if (!n) box.innerHTML = '<p class="muted">没有匹配的食物</p>';
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

  /* ★ 喂食面板的图片在后台预热一次，第一次拖动不会是空图 */
  function preloadFoodImages() {
    if (typeof FOOD_DATA === 'undefined') return;
    FOOD_DATA.foods.forEach((f) => { const im = new Image(); im.src = f.img; });
  }

  function toggleFoodPanel(show) {
    const p = $('food-panel');
    if (!p) return;
    const willShow = show === undefined ? p.classList.contains('hidden') : show;
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
      el.addEventListener('click', () => switchCharacter(i));
      box.appendChild(el);
    });
    /* ★ 第四十五轮：136 个角色里把"当前角色"滚进可视区 ——
       否则用户打开面板根本不知道自己现在用的是谁（要一路翻到底）。
       只在面板已经打开时滚，避免开机时就动列表。 */
    const cur = box.querySelector('.char-item.on');
    if (cur && !$('skin-panel').classList.contains('hidden')) {
      try { cur.scrollIntoView({ block: 'nearest' }); } catch (e) { /* 忽略 */ }
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
    /* ★ 先把语音语言切到新角色，再刷新外壳（语言按钮）——
       以前反着来，按钮会显示上一个角色的语言（韩语角色显示"日语（唯一）"）。 */
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
    CONFIG.models.forEach((m, i) => {
      const el = document.createElement('div');
      el.className = 'skin-item' + (i === skinIndex ? ' on' : '');
      /* ★ 第四十五轮（用户要求）：皮肤项**只留皮肤名**。
         原来名字下面还挂一行 <small>（"基础外观（34 动作）"），
         现在全部删除 —— 电脑端 / 网页端 / 安卓端三端一致。 */
      el.textContent = m.name;
      el.addEventListener('click', () => switchSkin(i));
      box.appendChild(el);
    });
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

  function buildVoicePanel() {
    const box = $('tab-voice');
    box.innerHTML = '';
    /* ★ 多角色：只列**当前角色**的语音（合并后的 voice-text.json 里带 char 字段） */
    const cat = Voice.catalog(CONFIG.id);
    if (!cat.length) {
      box.innerHTML = '<p class="muted">没有读取到语音清单。</p>';
      return;
    }
    const groups = {};
    cat.forEach((c) => { (groups[c.group] = groups[c.group] || []).push(c); });
    Object.keys(groups).forEach((g) => {
      const h = document.createElement('div');
      h.className = 'group-title';
      h.textContent = `${g}（${groups[g].length}）`;
      box.appendChild(h);
      const list = document.createElement('div');
      list.className = 'voice-list';
      groups[g].forEach((c) => {
        const row = document.createElement('button');
        row.className = 'voice-row';
        /* ★ 第二十九轮：
           · 没有官方中文台词的（站点任何语言包都没有那句话），标"官方未收录台词"，
             不再显示成空的"（无台词）"；
           · 有韩语原文（textKo）就列在下面 —— 游戏原文是韩语，
             用户可以对照原文核听，发现汉化不对的能直接指认。 */
        const main = c.text || '（官方未收录台词）';
        const ko = c.textKo ? `<span class="v-ko">${c.textKo}</span>` : '';
        row.innerHTML = `<span class="v-name">${c.name}</span><span class="v-text">${main}${ko}</span>`;
        row.addEventListener('click', () => {
          const r = Voice.playKey(c.key);
          /* ★ 第三十一轮：长语音（打电话独白等）的对话框要陪到播完 */
          sayUntilDone((r && r.text) || c.text || c.name, r && r.key);
        });
        list.appendChild(row);
      });
      box.appendChild(list);
    });
    voiceTabBuilt = true;
  }

  function openPanel() {
    if (!animTabBuilt) buildAnimPanel();
    if (!voiceTabBuilt) buildVoicePanel();
    $('action-panel').classList.remove('hidden');
    placePanel($('action-panel'));
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

  function loop(ts) {
    const dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0;
    lastTs = ts;

    PetState.tick(dt);
    Interact.tick();          // 看门狗：指针抬起但动作没收尾就强制结束，防形变残留
    Pet.update(dt);
    Pet.draw();
    drawDebug();

    saveAcc += dt;
    if (saveAcc > 5) { saveAcc = 0; PetState.save(); refreshStats(); }

    requestAnimationFrame(loop);
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

    /* ★ 记住上次玩的是谁（多角色）：启动时直接回到那个角色 */
    try {
      const saved = localStorage.getItem('pet-character');
      const k = CONFIG.characters.findIndex((c) => c.id === saved);
      if (k > 0) CONFIG.applyCharacter(k);
    } catch (e) { /* 忽略 */ }
    Voice.useCharacter(CONFIG.id, CONFIG.voiceLang);
    PetState.useCharacter(CONFIG.id);
    refreshCharacterShell();   // ★ 必须等 Voice.load() 之后（要按角色挑语言）
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
      onSay: showBubble,
      onState: refreshStats,
      onWantFood: () => toggleFoodPanel(true),
      onFeed: () => refreshStats(),
      onFed: onFed,
    });

    buildFoodPanel();
    buildCharList();
    buildSkins();
    refreshStats();
    /* 食物图预热延迟几秒再跑：91 张图不该和首屏模型加载抢带宽（无头虚拟时间下会挤抖切换角色） */
    setTimeout(preloadFoodImages, 5000);

    setTimeout(() => {
      $('loader').classList.add('hide');
      const r = Voice.play(CONFIG.greetVoice);
      showBubble((r && r.text) || I18N.t('bubble.back'));
    }, 350);

    requestAnimationFrame(loop);
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
    p.classList.toggle('hidden');
    if (!p.classList.contains('hidden')) {
      /* 打开面板时把角色数显示在搜索框占位符里，顺便刷新一次列表 */
      const s = $('char-search');
      if (s) s.placeholder = I18N.t('skin.search', { n: CONFIG.characters.length });
      buildCharList();
      placePanel(p);
    }
  });
  /* ★ 角色搜索：输入即时过滤 */
  $('char-search').addEventListener('input', buildCharList);
  $('food-close').addEventListener('click', () => toggleFoodPanel(false));
  $('food-search').addEventListener('input', buildFoodPanel);
  $('btn-actions').addEventListener('click', openPanel);
  $('action-close').addEventListener('click', () => $('action-panel').classList.add('hidden'));

  $('action-tabs').addEventListener('click', (e) => {
    const t = e.target.closest('.tab');
    if (!t) return;
    document.querySelectorAll('#action-tabs .tab').forEach((x) => x.classList.toggle('on', x === t));
    const isAnim = t.dataset.tab === 'anim';
    $('tab-anim').classList.toggle('hidden', !isAnim);
    $('tab-voice').classList.toggle('hidden', isAnim);
    if (!isAnim && !voiceTabBuilt) buildVoicePanel();
  });

  /* 语音语言切换：只在"该角色真的有音频"的语言之间切。
     ★ 黄油日韩都有 → 按钮显示「🗣 日语」、点一下切韩语；
       斯琪娅只有韩语 → 按钮显示「🗣 韩语（唯一）」、点了只提示不切
       （切到没有音频的语言会导致所有语音都不出声）。 */
  const LANG_LABEL = { ja: '日语', ko: '韩语' };

  function syncLangButton() {
    const btn = $('btn-lang');
    const cur = Voice.getLang();
    const avail = Voice.langsFor(CONFIG.id);
    const usable = (avail.length ? avail : (CONFIG.voiceLangs || []));
    btn.textContent = I18N.voiceLangName(cur) + (usable.length > 1 ? '' : I18N.t('lang.unique'));
    btn.classList.toggle('disabled', usable.length <= 1);
  }

  $('btn-lang').addEventListener('click', () => {
    const avail = Voice.langsFor(CONFIG.id);
    const usable = (avail.length ? avail : (CONFIG.voiceLangs || []));
    if (usable.length <= 1) {
      showBubble(I18N.t('bubble.onlyVoice', { name: dispName(), lang: I18N.voiceLangName(usable[0]) }));
      return;
    }
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

  window.addEventListener('resize', () => { Pet.resize(); placeVisiblePanels(); });

  /* 调试/自测入口：只读挂载，供验证工具（自测台、诊断台）驱动页面。
     不影响正常使用 —— 就是几个函数引用。 */
  window.__pet = {
    switchCharacter, switchSkin, CONFIG, Pet, Voice, Interact, PetState, Fx,
    get skinIndex() { return skinIndex; },
  };

  boot();
})();
