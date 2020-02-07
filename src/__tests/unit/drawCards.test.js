const esmImport = require('esm')(module);
const { drawCards } = esmImport('../lib/moves/card-moves');

test(`draw cards equal to the provided value`, () => {
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

  drawCards(G, 0, 3);
  expect(G.counts[0].deck).toBe(27);
  expect(G.counts[0].hand).toBe(3);
  expect(G.players[0].hand).toHaveLength(3);
});
