/**
 * Copies card to a player's playedCard array.
 * @param {{}} G
 * @param {string|number} player
 * @param {string} cardId
 */
export const moveCardToPlayedCards = (G, player, cardId) => {
  // prettier-ignore
  G.playedCards[player].push(
    G.players[player].hand.find(c => c.id === cardId)
  );
};
