import deincrementDeckCount from 'lib/utils/deincrement-deck-count';

/**
 * Discard a single card from your deck into your `playedCards` array.
 * @param {{}} G
 * @param {string} player
 * @requires deincrementDeckCount()
 */
// prettier-ignore
export const discardCard = (G, player) => {
  deincrementDeckCount(G, player); // ............. set counts[player].deck
  G.playedCards[player].push( // .................. pushes to playedCards
    G.players[player].deck.splice(0, 1)[0] // ..... splices from deck
  );
};
