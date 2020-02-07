const esmImport = require('esm')(module);
const { incrementDeckCount } = esmImport('../lib/moves/card-moves');

test(`increment player 0's deck count`, () => {
  const G = {
    counts: {
      0: {
        deck: 0
      }
    }
  };

  incrementDeckCount(G, 0);
  expect(G.counts[0].deck).toBe(1);
});
