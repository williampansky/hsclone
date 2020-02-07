const esmImport = require('esm')(module);
const { incrementHandCount } = esmImport('../../lib/moves/card-moves');

test(`increment player 0's hand count`, () => {
  const G = {
    counts: {
      0: {
        hand: 0
      }
    }
  };

  incrementHandCount(G, 0);
  expect(G.counts[0].hand).toBe(1);
});
