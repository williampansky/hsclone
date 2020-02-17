import counts from 'lib/state/counts';

test(`deincrement player 0's deck count`, () => {
  const { deincrementDeck } = counts;
  const ctx = { currentPlayer: '0' };
  const G = { counts: { '0': { deck: 1 } } };

  deincrementDeck(G, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].deck).toBe(0);
});

test(`deincrement player 0's hand count`, () => {
  const { deincrementHand } = counts;
  const ctx = { currentPlayer: '0' };
  const G = { counts: { '0': { hand: 1 } } };

  deincrementHand(G, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].hand).toBe(0);
});

test(`increment player's deck count`, () => {
  const { incrementDeck } = counts;
  const ctx = { currentPlayer: '0' };
  const G = { counts: { '0': { deck: 0 } } };

  incrementDeck(G, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].deck).toBe(1);
});

test(`increment player's hand count`, () => {
  const { incrementHand } = counts;
  const ctx = { currentPlayer: '0' };
  const G = {
    counts: { '0': { hand: 0 } },
    players: { '0': { deck: ['SOME_CARD_ID'] } }
  };

  incrementHand(G, ctx.currentPlayer);
  expect(G.counts[ctx.currentPlayer].hand).toBe(1);
});
