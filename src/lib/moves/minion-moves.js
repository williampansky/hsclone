import {
  disablePlayerCanBeAttacked,
  enablePlayerCanBeAttacked
} from './player-moves';

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
 * Sets `selectedMinionIndex` & `selectedMinionObject` of the current player.
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} minion
 * @param {Number} index
 * @requires selectAttackingMinionIndex()
 * @requires selectAttackingMinionObject()
 * @requires determineAttackingMinionTargets()
 */
export const selectAttackingMinion = (G, ctx, minion, index) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  selectAttackingMinionIndex(G, currentPlayer, index);
  selectAttackingMinionObject(G, currentPlayer, minion);

  if (minion !== null || index !== null)
    determineAttackingMinionTargets(G, otherPlayer);
};

/**
 * Resets `selectedMinionIndex` & `selectedMinionObject` of the current player.
 * @param {{}} G
 * @param {{}} ctx
 * @requires selectAttackingMinionIndex()
 * @requires selectAttackingMinionObject()
 */
export const deselectAttackingMinion = (G, ctx) => {
  const { currentPlayer } = ctx;
  selectAttackingMinionIndex(G, currentPlayer, null);
  selectAttackingMinionObject(G, currentPlayer, null);
};

/**
 * Sets `selectedMinionIndex` of the current player.
 * @param {{}} G
 * @param {string|number} player
 * @param {Number} index
 */
export const selectAttackingMinionIndex = (G, player, index) => {
  G.selectedMinionIndex[player] = index;
};

/**
 * Sets `selectedMinionObject` of the current player.
 * @param {{}} G
 * @param {string|number} player
 * @param {Number} index
 */
export const selectAttackingMinionObject = (G, player, minion) => {
  G.selectedMinionObject[player] = minion;
};

/**
 * When a player selects a minion that can attack, we need to determine
 * its possible targets—both opposing minions and the opposing player.
 * @param {{}} G
 * @param {string|number} player
 */
export const determineAttackingMinionTargets = (G, player) => {
  const { boards } = G;
  const BOARD = boards[player];
  const MINION_HAS_GUARD = BOARD.find(b => b.hasGuard === true) ? true : false;

  if (MINION_HAS_GUARD) disablePlayerCanBeAttacked(G, player);
  else if (!MINION_HAS_GUARD) enablePlayerCanBeAttacked(G, player);

  // first, enable all minions to be attackable
  for (let i = 0; i < G.boards[player].length; i++)
    enableMinionCanBeAttacked(G, player, i);

  // then loop again and disable ones that don't have guard?
  for (let i = 0; i < G.boards[player].length; i++)
    if (!G.boards[player].hasGuard === false)
      disableMinionCanBeAttacked(G, player, i);
};
