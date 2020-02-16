import deincrementDeckCount from 'lib/utils/deincrement-deck-count';
import incrementHandCount from 'lib/utils/increment-hand-count';
import getCardByID from 'lib/utils/get-card-by-id';

/**
 * Draw a single card from your deck into your hand.
 *
 * @requires deincrementDeckCount()
 * @requires incrementHandCount()
 */
// prettier-ignore
const drawCard = (G, player) => {
  deincrementDeckCount(G, player); // ............... set counts[player].deck
  incrementHandCount(G, player); // ................. set counts[player].hand

  if (G.players[player].deck.length === 0) return; // eject if no deck

  G.players[player].hand.push( // ................... pushes to hand
    getCardByID( // ................................. generates card object
      G.players[player].deck.splice(0, 1)[0] // ..... splices from deck
    )
  );
}

export default drawCard;
