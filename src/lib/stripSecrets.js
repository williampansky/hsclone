/**
 * Strips away the opposing player's hand and deck data from the client.
 *
 * @param {Object} G game state object.
 * @param {Number} playerID player's unique playOrder ID.
 * @see https://boardgame.io/documentation/#/secret-state
 */
export const stripSecrets = (G, playerID) => ({
  ...G,
  players: {
    [playerID]: G.players[playerID]
  }
});
