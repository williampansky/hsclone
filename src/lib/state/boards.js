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
  },
  placeCardOnBoard: (G, player, boardSlotObject, index) => {
    return placeCardOnBoard(G, player, boardSlotObject, index);
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

/**
 * Places a slot object in the specific `index` of a player's board.
 *
 * @param {{}} G
 * @param {string} player
 * @param {{}} boardSlotObject
 * @param {number} index defaults to zero
 */
export const placeCardOnBoard = (G, player, boardSlotObject, index = 0) => {
  const newBoard = [
    ...G.boards[player].slice(0, index),
    boardSlotObject,
    ...G.boards[player].slice(index)
  ];

  // swap new board in
  G.boards[player] = newBoard;
};

export default boards;
