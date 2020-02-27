/**
 * Disables `canBeBuffed` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const _dMCBB = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeBuffed = false;
};

/**
 * Enables `canBeBuffed` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const _eMCBB = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeBuffed = true;
};
