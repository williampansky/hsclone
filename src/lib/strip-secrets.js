/**
 * Strips away the following nested fields
 * from the opposing player's client:
 *  - players
 *  - selectedCardObject
 *
 * @param {Object} G game state object.
 * @param {Number} playerID player's unique playOrder ID.
 * @see https://boardgame.io/documentation/#/secret-state
 */
const stripSecrets = (G, playerID) => ({
  ...G,
  deckInfo: { [playerID]: G.deckInfo[playerID] },
  players: { [playerID]: G.players[playerID] },
  initHandsSelection: { [playerID]: G.initHandsSelection[playerID] },
  selectedCardObject: { [playerID]: G.selectedCardObject[playerID] },
  selectedCardType: { [playerID]: G.selectedCardType[playerID] },
  selectedCardSpellType: { [playerID]: G.selectedCardSpellType[playerID] },
  selectedCardSpellContext: {
    [playerID]: G.selectedCardSpellContext[playerID]
  }
});

export default stripSecrets;
