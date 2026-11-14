/**
 * 模型显示大小人工微调表（第一百零七轮 · 2026-11-14）
 *
 * 背景：pet.js 的 fitCamera() 按 Spine 的 skeleton.getBounds() 把**每个模型**归一化到
 * 同样的屏幕包围盒高度，所以「包围盒」看起来一样大；但官方导出时各模型包围盒里
 * "有效角色内容" 的占比差很多，肉眼大小就不齐：
 *
 *   实测（06_临时缓存\第一百零七轮\模型显示尺寸_第一百零七轮.json，画布 1184x749）：
 *     Vela              944 x 1436   ← 原皮包围盒明显偏高（幽灵飘带等附件撑大）
 *     VelaSkin1         576 x 1113
 *     VelaSkin2         761 x 1075
 *     VelaSkin3        1170 x 1179
 *     VelaSkin4        1087 x 1004   皮肤均值 h ≈ 1093
 *     Youngchun         317 x  292   ← 全系列包围盒只有黄油(676)的一半左右
 *     YoungchunSkin1..5 280~462 x 292~483
 *     Butter            546 x  676   （正常基准）
 *   各模型屏幕包围盒高度都是 559px（74.6% 画布），证明归一化生效、差异来自内容占比。
 *
 * 因此：
 *   · Vela 原皮 ×(1436 / 1093) ≈ 1.31，角色本体就和其他皮肤一样大；
 *   · Youngchun 全系列按用户要求「改成现在二分之一」= 0.5。
 *
 * 用法：本表由 index.html 在 pet.js 之前引入，fitCamera() 算完视口后统一乘 1/倍率。
 * 倍率 >1 = 放大（视口缩小），<1 = 缩小（视口放大）；1 = 不动。
 * 这是**手写配置**，不经过生成链，不会被 批量生成角色文件.js / 同步素材 覆盖。
 * 以后要微调某个模型，直接改这里的数值即可，不用重跑任何生成脚本。
 *
 * ★ 第一百零八轮追加：垂直位置微调 OFFSET_Y
 *   放大后用户反馈「贝拉原皮太下了，和其他皮肤保持在中间」。实测
 *   （06_临时缓存\第一百零八轮\模型垂直位置_第一百零八轮.json，画布 1184x749）：
 *     Vela        脚底投影 y=773、顶部 y=41、内容质心 0.5458  ← 脚超出画布(749)被裁
 *     VelaSkin1~4 脚底投影 y=679、顶部 y=120、质心均值 0.513  ← 正常
 *     Butter 全系 脚底 y=679（同样基准）
 *   根因：centerY 按 off.y + size.y*0.5448 算，原皮包围盒被幽灵飘带撑高到 1436
 *   （皮肤 1004~1179），相机中心被抬到更高的世界坐标，角色本体就往下沉。
 *   修法：把相机中心按「视口高度 vh 的比例」下移 —— 正值 = 相机下移 = 角色在画面里上移。
 *   Vela 填 0.12 → 上移 0.12*749 ≈ 90px，脚底 773→683，与皮肤 679 基本重合。
 *   ★ 用 vh 比例而不是绝对像素：宽屏 / 窄屏（pet.js 两条 vh 分支）与任意窗口高度都自适应。
 */
(function () {
  var EXACT = {
    // 贝拉原皮：补回被撑大的包围盒吃掉的尺寸，与 4 套皮肤对齐
    Vela: 1.31,

    // 永春（用户口语叫「咏春」）全皮肤：用户指定缩到现在的一半
    Youngchun: 0.5,
    YoungchunSkin1: 0.5,
    YoungchunSkin2: 0.5,
    YoungchunSkin3: 0.5,
    YoungchunSkin4: 0.5,
    YoungchunSkin5: 0.5
  };

  window.MODEL_VIEW_SCALE = EXACT;

  // 垂直位置微调：单位 = 视口高度 vh 的比例；正值 = 相机下移 = 角色在画面里上移。
  var OFFSET_Y = {
    // 贝拉原皮：脚底 773 → 683，和 4 套皮肤的 679 对齐，不再压到底部按钮栏
    Vela: 0.12
  };
  window.MODEL_VIEW_OFFSET_Y = OFFSET_Y;

  /**
   * 按模型 id 取显示倍率。
   * 先查精确表；再对「YoungchunSkinN」做前缀兜底 —— 以后游戏若再出永春新皮肤，
   * 不用改这张表也会自动沿用 0.5（和历史 6 套保持一致）。
   */
  window.modelViewScale = function (id) {
    if (!id) return 1;
    if (Object.prototype.hasOwnProperty.call(EXACT, id)) return EXACT[id];
    if (/^YoungchunSkin\d+$/.test(id)) return 0.5;
    return 1;
  };

  /** 按模型 id 取垂直偏移（vh 比例）；没配的模型返回 0，零影响。 */
  window.modelViewOffsetY = function (id) {
    if (!id) return 0;
    return Object.prototype.hasOwnProperty.call(OFFSET_Y, id) ? OFFSET_Y[id] : 0;
  };
})();
