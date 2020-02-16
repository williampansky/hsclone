import drawCard from 'lib/moves/draw-card';

/**
 * Note that moves marked `client: false` are executed on the server.
 */
export default {
  drawCard: {
    client: false,
    move: (G, player, amountToDraw) => {
      return drawCard(G, player, amountToDraw);
    }
  }

  // playCard: {
  //   client: false,
  //   move: (G, ctx, index, cardId) => {
  //     return playCard(G, ctx, index, cardId);
  //   }
  // }
};
