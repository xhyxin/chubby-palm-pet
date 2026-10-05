/* ------------------------------------------------------------------
 * state.js —— 互动次数计数（多角色：**每个角色各存一份**）
 *
 * ★ 第三十四轮（用户要求）：**饱食度 / 心情 / 亲密等后台数值系统已整体取消**——
 *   喂多少都吃（没有"吃不下"判定）、没有饥饿/低落的自动演出、没有自然衰减。
 *   本模块保留原来的对外接口（tick / add / reward / save / moodLabel /
 *   isUpset / isHungry / reset / useCharacter），但全部变成无害的空操作或计数，
 *   这样调用方（interact.js / main.js / 自测台）一行都不用改。
 *   仍然保留的只有 feeds / pats 两个"玩了多少次"的纯计数（不参与任何判定）。
 * ------------------------------------------------------------------ */
const PetState = (() => {
  /* ★ 存档键按角色区分 */
  const keyFor = (id) => 'pet-state-' + String(id).toLowerCase() + '-v1';
  let KEY = keyFor(CONFIG.id);

  function fresh() {
    return {
      mood: 100, full: 100, bond: 0,   // ★ 数值已废弃：恒为满，仅为兼容旧存档字段
      lastTs: Date.now(),
      feeds: 0,
      pats: 0,
    };
  }
  let data = fresh();

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const d = JSON.parse(raw);
        /* 旧存档里可能带着被衰减过的 mood/full，一律拉回满（数值已废弃） */
        data.mood = 100; data.full = 100;
        data.feeds = d.feeds || 0;
        data.pats = d.pats || 0;
      }
    } catch (e) { /* 忽略 */ }
    data.lastTs = Date.now();
  }

  function save() {
    data.lastTs = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* 忽略 */ }
  }

  /** ★ 原自然衰减：数值系统已取消，空操作（保留接口） */
  function tick(dtSec) { /* no-op */ }

  /** ★ 原数值增减：空操作（保留接口） */
  function add(stat, v) { /* no-op */ }

  /** 一次互动的结算：只记"玩了多少次"，不再加减任何数值 */
  function reward(kind, food) {
    if (kind === 'feed') data.feeds++;
    else if (kind === 'pat') data.pats++;
    save();
  }

  /** ★ 原情绪标签：数值已取消，恒为开心 */
  function moodLabel() { return '超级开心！'; }

  /** ★ 原状态判定：数值已取消，恒为否 */
  function isUpset() { return false; }
  function isHungry() { return false; }

  load();

  return {
    get data() { return data; },
    get key() { return KEY; },
    tick, add, reward, save, moodLabel, isUpset, isHungry,
    reset() {
      data = fresh();
      save();
    },
    /** 切换角色：换存档键并重新读该角色的计数（不共用） */
    useCharacter(id) {
      KEY = keyFor(id);
      data = fresh();
      load();
      return data;
    },
  };
})();
