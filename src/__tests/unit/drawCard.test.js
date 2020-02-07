const esmImport = require('esm')(module);
const { drawCard } = esmImport('../lib/moves/card-moves');

test(`draw a single card from your deck to your hand`, () => {
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

  drawCard(G, 0);
  expect(G.counts[0].deck).toBe(29);
  expect(G.counts[0].hand).toBe(1);
  expect(G.players[0].hand).toHaveLength(1);
});
