import incrementHandCount from 'lib/utils/increment-hand-count';

test(`increment player's hand count`, () => {
  const G = {
    counts: {
      '0': {
        hand: 0
      }
    },
    players: {
      '0': {
        deck: ['SOME_CARD_ID']
      }
    }
  };

  incrementHandCount(G, 0);
  expect(G.counts[0].hand).toBe(1);
});
