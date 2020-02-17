import getCardByID from 'lib/utils/get-card-by-id';
import counts from 'lib/state/counts';
const { deincrementDeckCount, incrementHandCount } = counts;

/**
 * Draw a card from player's deck to their hand.
 * @param {{}} G
 * @param {string} player
 * @param {number} amountToDraw number of cards to draw
 */
const drawCard = (G, player, amountToDraw = 1) => {
  return amountToDraw >= 2
    ? drawMultipleCards(G, player, amountToDraw)
    : drawSingleCard(G, player);
};

// prettier-ignore
export const drawSingleCard = (G, player) => {
  deincrementDeckCount(G, player); // ............... set counts[player].deck
  incrementHandCount(G, player); // ................. set counts[player].hand

  if (G.players[player].deck.length === 0) return; // eject if deck is empty
  
  G.players[player].hand.push( // ................... pushes to hand
    getCardByID( // ................................. generates card object
      G.players[player].deck.splice(0, 1)[0] // ..... splices from deck
    )
  );
}

export const drawMultipleCards = (G, player, amountToDraw) => {
  for (let i = 0; i < amountToDraw; i++) drawSingleCard(G, player);
};

export default drawCard;