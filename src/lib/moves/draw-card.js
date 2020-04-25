import counts from 'lib/state/counts';
import getCardByID from 'lib/utils/get-card-by-id';

/**
 * Draw a card from player's deck to their hand.
 *
 * @param {{}} G
 * @param {string} player
 * @param {number} amountToDraw number of cards to draw
 * @requires counts.deincrementDeck()
 * @requires counts.incrementHand()
 */
const drawCard = (G, ctx, player, amountToDraw = 1) => {
  return amountToDraw >= 2
    ? drawMultipleCards(G, player, amountToDraw)
    : drawSingleCard(G, player);
};

// prettier-ignore
export const drawSingleCard = (G, player) => {
  if (G.players[player].deck.length === 0) return;  // eject if deck is empty
  if (G.players[player].hand.length === 10) return; // eject if hand is full

  counts.deincrementDeck(G, player); // .............. set counts[player].deck
  counts.incrementHand(G, player); // ................ set counts[player].hand
  
  G.players[player].hand.push( // .................... pushes to hand
    getCardByID( // .................................. generates card object
      G.players[player].deck.splice(0, 1)[0] // ...... splices from deck
    )
  );
}

// prettier-ignore
export const drawSpecificCard = (G, player, cardId) => {
  if (G.players[player].deck.length === 0) return;  // eject if deck is empty
  if (G.players[player].hand.length === 10) return; // eject if hand is full

  counts.deincrementDeck(G, player); // .............. set counts[player].deck
  counts.incrementHand(G, player); // ................ set counts[player].hand
  
  G.players[player].hand.push( // .................... pushes to hand
    getCardByID( // .................................. generates card object
      cardId // ...................................... card by id
    )
  );
}

export const drawMultipleCards = (G, player, amountToDraw) => {
  for (let i = 0; i < amountToDraw; i++) drawSingleCard(G, player);
};

export default drawCard;
