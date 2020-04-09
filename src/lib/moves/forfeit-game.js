import health from 'lib/state/health';
import winner from 'lib/state/winner';

/**
 * Forfeits the game by setting player's health to zero.
 * @param {{}} G
 * @param {string} player
 * @requires health.subtract()
 */
const forfeitGame = (G, ctx, player) => {
  const { turnOrder } = G;
  const otherPlayer = turnOrder.find(p => p !== player);
  health.subtract(G, player, 1000);
  // winner.set(G, otherPlayer);
};

export default forfeitGame;
