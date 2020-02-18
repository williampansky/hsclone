/**
 * Copies card to a player's playedCard array.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 */
const copyCardToPlayedCards = (G, player, cardId) => {
  // prettier-ignore
  G.playedCards[player].push(
    G.players[player].hand.find(c => c.id === cardId)
  );
};

export default copyCardToPlayedCards;
