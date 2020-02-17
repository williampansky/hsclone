const boards = {
  __DATA_MODEL: {
    '0': [],
    '1': []
  },
  disableCanAttack: (G, player, index) => {
    return disableMinionCanAttack(G, player, index);
  },
  disableCanBeAttacked: (G, player, index) => {
    return disableMinionCanBeAttacked(G, player, index);
  },
  enableCanAttack: (G, player, index) => {
    return enableMinionCanAttack(G, player, index);
  },
  enableCanBeAttacked: (G, player, index) => {
    return enableMinionCanBeAttacked(G, player, index);
  }
};

/**
 * Disables `canAttack` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const disableMinionCanAttack = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canAttack = false;
};

/**
 * Disables `canBeAttacked` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const disableMinionCanBeAttacked = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeAttacked = false;
};

/**
 * Enables `canAttack` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const enableMinionCanAttack = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canAttack = true;
};

/**
 * Enables `canBeAttacked` of the player's board index object.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
export const enableMinionCanBeAttacked = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].canBeAttacked = true;
};

export default boards;
