import playerCanBeAttacked from 'lib/state/player-can-be-attacked';

test(`should disable player 0's ability to be attacked`, () => {
  const G = { playerCanBeAttacked: { '0': true } };
  const ctx = { currentPlayer: '0' };
  playerCanBeAttacked.disable(G, ctx.currentPlayer);
  expect(G).toEqual({ playerCanBeAttacked: { '0': false } });
});

test(`should enable player 1's ability to be attacked`, () => {
  const G = { playerCanBeAttacked: { '1': false } };
  const ctx = { currentPlayer: '1' };
  playerCanBeAttacked.enable(G, ctx.currentPlayer);
  expect(G).toEqual({ playerCanBeAttacked: { '1': true } });
});
