/**
 * Removes card from your hand.
 * @param {{}} G
 * @param {string|number} player
 * @param {string} cardId
 */
export const removeCardFromHand = (G, player, cardId) => {
  const newHand = G.players[player].hand.filter(c => c.id !== cardId);
  G.players[player].hand = newHand;
};
