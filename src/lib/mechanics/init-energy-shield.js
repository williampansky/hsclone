/**
 * Enables `hasEnergyShield` of the player's board index object.
 * @param {{}} G
 * @param {number} player
 * @param {number} index
 */
const enableMinionHasEnergyShield = (G, player, index) => {
  if (!G.boards[player][index]) return;
  G.boards[player][index].hasEnergyShield = true;
};

const initEnergyShield = (G, ctx, index) => {
  const { currentPlayer } = ctx;
  return enableMinionHasEnergyShield(G, currentPlayer, index);
};

export default initEnergyShield;
