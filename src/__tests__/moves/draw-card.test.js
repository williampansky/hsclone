import drawCard from 'lib/moves/draw-card';

/**
 * card-moves::drawCard()
 */
test(`draw a single card from your deck to your hand`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: {
      0: {
        deck: 30,
        hand: 0
      }
    },
    players: {
      0: {
        deck: [1, 2, 3],
        hand: []
      }
    }
  };

  drawCard(G, ctx.currentPlayer);
  expect(G.counts[0].deck).toBe(29);
  expect(G.counts[0].hand).toBe(1);
  expect(G.players[0].hand).toHaveLength(1);
});
