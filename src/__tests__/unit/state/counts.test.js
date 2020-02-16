import counts from 'lib/state/counts';

test(`deincrement player 0's deck count`, () => {
  const { deincrementDeckCount } = counts;
  const ctx = { currentPlayer: '0' };
  const G = { counts: { '0': { deck: 1 } } };

  deincrementDeckCount(G, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].deck).toBe(0);
});

test(`deincrement player 0's hand count`, () => {
  const { deincrementHandCount } = counts;
  const ctx = { currentPlayer: '0' };
  const G = { counts: { '0': { hand: 1 } } };

  deincrementHandCount(G, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].hand).toBe(0);
});

test(`increment player's deck count`, () => {
  const { incrementDeckCount } = counts;
  const ctx = { currentPlayer: '0' };
  const G = { counts: { '0': { deck: 0 } } };

  incrementDeckCount(G, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].deck).toBe(1);
});

test(`increment player's hand count`, () => {
  const { incrementHandCount } = counts;
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: { '0': { hand: 0 } },
    players: { '0': { deck: ['SOME_CARD_ID'] } }
  };

  incrementHandCount(G, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].hand).toBe(1);
});
