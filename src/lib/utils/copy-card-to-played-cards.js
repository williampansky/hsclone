/**
 * Copies card to a player's playedCard array.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 */
const copyCardToPlayedCards = (G, player, cardId) => {
  const cardToPushId = G.players[player].hand.find(c => c.id === cardId).id;
  G.playedCards[player].push(cardToPushId);
};

export default copyCardToPlayedCards;
