/**
 * Forfeits the game by setting playerID's health to zero.
 * @param {{}} G
 * @param {string} playerID
 */
const forfeitGame = (G, playerID) => {
  G.health[playerID] = 0;
};

export default forfeitGame;
