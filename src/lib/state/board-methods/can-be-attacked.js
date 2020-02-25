/**
 * Disables `canBeAttacked` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const _dMCBA = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeAttacked = false;
};

/**
 * Enables `canBeAttacked` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const _eMCBA = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeAttacked = true;
};

/**
 * Disables `canBeAttacked` on all of the player's minions.
 * @param {{}} G
 * @param {string} player
 */
export const _dAMCBA = (G, player) => {
  G.boards[player].forEach((_, i) => _dMCBA(G, player, i));
};

/**
 * Enables `canBeAttacked` on all of the player's minions.
 * @param {{}} G
 * @param {string} player
 */
export const _eAMCBA = (G, player, index) => {
  G.boards[player].forEach((_, i) => _eMCBA(G, player, i));
};