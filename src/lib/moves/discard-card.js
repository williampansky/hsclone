import counts from 'lib/state/counts';
const { deincrementDeckCount } = counts;

/**
 * Discard a single card from your deck into your `playedCards` array.
 * @param {{}} G
 * @param {string} player
 * @requires deincrementDeckCount()
 */
const discardCard = (G, player, amountToDiscard = 1) => {
  return amountToDiscard >= 2
    ? discardMultipleCards(G, player, amountToDiscard)
    : discardSingleCard(G, player);
};

// prettier-ignore
export const discardSingleCard = (G, player) => {
  deincrementDeckCount(G, player); // ............. set counts[player].deck
  G.playedCards[player].push( // .................. pushes to playedCards
    G.players[player].deck.splice(0, 1)[0] // ..... splices from deck
  );
}

export const discardMultipleCards = (G, player, amountToDiscard) => {
  for (let i = 0; i < amountToDiscard; i++) discardSingleCard(G, player);
};

export default discardCard;