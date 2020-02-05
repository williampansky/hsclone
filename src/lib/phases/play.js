import { TurnOrder } from 'boardgame.io/core';
import { deincrementDeck, incrementHand } from '../moves/card-moves';

const onBegin = (G, ctx) => {
  // Increments the `total` energy of the `currentPlayer`
  // by one; but not more than ten.
  if (G.energy[ctx.currentPlayer].total !== 10)
    G.energy[ctx.currentPlayer].total++;

  // Then, sets the `current` value to the total; which allows
  // the `currentPlayer` to spend said energy on card play functions.
  G.energy[ctx.currentPlayer].current = G.energy[ctx.currentPlayer].total;

  // draw a card every turn; you can hold a max of ten cards at a time.
  if (G.players[ctx.currentPlayer].hand.length <= 9) {
    deincrementDeck(G, ctx, ctx.currentPlayer); // set counts[player].deck
    incrementHand(G, ctx, ctx.currentPlayer); // set counts[player].hand

    G.players[ctx.currentPlayer].hand.push(
      G.players[ctx.currentPlayer].deck.splice(0, 1)[0]
    );
  } else {
    // if you are holding ten cards, your next card will be discarded
    G.playedCards[ctx.currentPlayer].push(
      G.players[ctx.currentPlayer].deck.splice(0, 1)[0]
    );
  }
};

export default {
  turn: {
    order: TurnOrder.CUSTOM_FROM('turnOrder'),
    onBegin: (G, ctx) => onBegin(G, ctx)
  }
};
