/**
 * Places a `minion` in the specific `index` of a player's board.
 * @param {{}} G
 * @param {string|number} player
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
