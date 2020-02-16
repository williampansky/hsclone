import deincrementDeckCount from 'lib/utils/deincrement-deck-count';

test(`deincrement player 0's deck count`, () => {
  const G = {
    counts: {
      '0': {
        deck: 1
      }
    }
  };

  deincrementDeckCount(G, '0');

  expect(G).toEqual({
    counts: {
      '0': {
        deck: 0
      }
    }
  });
});
