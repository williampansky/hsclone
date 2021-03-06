/**
 * Places a slot object in the specific `index` of a player's board.
 *
 * @param {{}} G
 * @param {string} player
 * @param {{}} boardSlotObject
 * @param {number} index defaults to zero
 */
export const _pC = (G, player, boardSlotObject, index = 0) => {
  const newBoard = [
    ...G.boards[player].slice(0, index),
    boardSlotObject,
    ...G.boards[player].slice(index)
  ];

  // swap new board in
  G.boards[player] = newBoard;
};
