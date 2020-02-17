/**
 * Removes card from your hand.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 */
const removeCardFromHand = (G, player, cardId) => {
  const newHand = G.players[player].hand.filter(c => c.id !== cardId);
  G.players[player].hand = newHand;
};

export default removeCardFromHand;
