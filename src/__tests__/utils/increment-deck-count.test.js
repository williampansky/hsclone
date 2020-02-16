import incrementDeckCount from 'lib/utils/increment-deck-count';

test(`increment player's deck count`, () => {
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
