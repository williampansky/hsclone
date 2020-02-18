import canBeAttacked from 'lib/state/can-be-attacked';
const { disable, enable } = canBeAttacked;

test(`should disable player 0's ability to be attacked`, () => {
  const G = { canBeAttacked: { '0': true } };
  const ctx = { currentPlayer: '0' };
  disable(G, ctx.currentPlayer);
  expect(G).toEqual({ canBeAttacked: { '0': false } });
});

test(`should enable player 1's ability to be attacked`, () => {
  const G = { canBeAttacked: { '1': false } };
  const ctx = { currentPlayer: '1' };
  enable(G, ctx.currentPlayer);
  expect(G).toEqual({ canBeAttacked: { '1': true } });
});
