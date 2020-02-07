const esmImport = require('esm')(module);
const { deincrementDeckCount, deincrementHandCount } = esmImport(
  '../../lib/moves/card-moves'
);

test(`deincrement player 0's deck count`, () => {
  const G = {
    counts: {
      0: {
        deck: 1
      }
    }
  };

  deincrementDeckCount(G, 0);
  expect(G.counts[0].deck).toBe(0);
});

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
