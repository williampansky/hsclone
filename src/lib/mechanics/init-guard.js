/**
 * Enables `hasGuard` of the player's board index object.
 * @param {{}} G
 * @param {number} player
 * @param {number} index
 */
const enableMinionHasGuard = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].hasGuard = true);
};

const initGuard = (G, ctx, index) => {
  const { currentPlayer } = ctx;
  return enableMinionHasGuard(G, currentPlayer, index);
};

export default initGuard;
