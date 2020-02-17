import health from 'lib/state/health';

/**
 * Forfeits the game by setting player's health to zero.
 * @param {{}} G
 * @param {string} player
 * @requires health.subtract()
 */
const forfeitGame = (G, player) => {
  console.log(G, player);
  health.subtract(G, player, 1000);
};

export default forfeitGame;
