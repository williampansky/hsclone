/**
 * Disables `canAttack` of the player's board index object.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 */
export const disableMinionCanAttack = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].canAttack = false);
};

/**
 * Enables `canAttack` of the player's board index object.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 */
export const enableMinionCanAttack = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].canAttack = true);
};

/**
 * Disables `canBeAttacked` of the player's board index object.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 */
export const disableMinionCanBeAttacked = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].canBeAttacked = false);
};

/**
 * Enables `canBeAttacked` of the player's board index object.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 */
export const enableMinionCanBeAttacked = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].canBeAttacked = true);
};

/**
 * Disables `hasGuard` of the player's board index object.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 */
export const disableMinionHasGuard = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].hasGuard = false);
};

/**
 * Enables `hasGuard` of the player's board index object.
 * @param {{}} G
 * @param {Number} player
 * @param {Number} index
 */
export const enableMinionHasGuard = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].hasGuard = true);
};

/**
 * Sets `selectedMinionIndex` and `selectedMinionObject` of the current player.
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} minion
 * @param {Number} index
 * @requires selectAttackingMinionIndex()
 * @requires selectAttackingMinionObject()
 */
export const selectAttackingMinion = (G, ctx, minion, index) => {
  selectAttackingMinionIndex(G, ctx, index);
  selectAttackingMinionObject(G, ctx, minion);
};

/**
 * Sets `selectedMinionIndex` of the current player.
 * @param {{}} G
 * @param {{}} ctx
 * @param {Number} index
 */
export const selectAttackingMinionIndex = (G, ctx, index) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedMinionIndex[0] = index)
    : (G.selectedMinionIndex[1] = index);
};

/**
 * Sets `selectAttackingMinionObject` of the current player.
 * @param {{}} G
 * @param {{}} ctx
 * @param {Number} index
 */
export const selectAttackingMinionObject = (G, ctx, minion) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedMinionObject[0] = minion)
    : (G.selectedMinionObject[1] = minion);
};
