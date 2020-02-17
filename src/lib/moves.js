import discardCard from 'lib/moves/discard-card';
import drawCard from 'lib/moves/draw-card';
import hoverCard from 'lib/moves/hover-card';
import selectCard from 'lib/moves/select-card';

/**
 * Note that moves marked `client: false` are executed on the server.
 */
export default {
  drawCard: {
    client: false,
    move: (G, player, amountToDraw) => {
      return drawCard(G, player, amountToDraw);
    }
  },
  discardCard: {
    client: false,
    move: (G, player, amountToDiscard) => {
      return discardCard(G, player, amountToDiscard);
    }
  },
  hoverCard: {
    client: false,
    move: (G, ctx, index) => {
      return hoverCard(G, ctx, index);
    }
  },
  selectCard: {
    client: false,
    move: (G, ctx, cardObject, index) => {
      return selectCard(G, ctx, cardObject, index);
    }
  }

  // playCard: {
  //   client: false,
  //   move: (G, ctx, index, cardId) => {
  //     return playCard(G, ctx, index, cardId);
  //   }
  // }
};
