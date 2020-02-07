const esmImport = require('esm')(module);
const { deincrementHandCount } = esmImport('../lib/moves/card-moves');

test(`deincrement player 0's hand count`, () => {
  const G = {
    counts: {
      0: {
        hand: 1
      }
    }
  };

  deincrementHandCount(G, 0);
  expect(G.counts[0].hand).toBe(0);
});
