import deincrementHandCount from 'lib/utils/deincrement-hand-count';

test(`deincrement player 0's hand count`, () => {
  const G = {
    counts: {
      '0': {
        hand: 1
      }
    }
  };

  deincrementHandCount(G, '0');

  expect(G.counts['0'].hand).toBe(0);
});
