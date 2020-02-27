import gainShieldPoints from 'lib/class-skills/gain-shield-points';

test(`should provide X number of shield points to current player`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    playerShieldPoints: { '0': 0, '1': 0 },
    turnOrder: ['0', '1']
  };

  gainShieldPoints(G, ctx, 5);
  expect(G.playerShieldPoints).toEqual({ '0': 5, '1': 0 });
});
