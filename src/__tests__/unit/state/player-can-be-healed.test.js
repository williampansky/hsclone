import playerCanBeHealed from 'lib/state/player-can-be-healed';

test(`should disable player 0's ability to be healed`, () => {
  const G = { playerCanBeHealed: { '0': true } };
  const ctx = { currentPlayer: '0' };
  playerCanBeHealed.disable(G, ctx.currentPlayer);
  expect(G).toEqual({ playerCanBeHealed: { '0': false } });
});

test(`should enable player 1's ability to be healed`, () => {
  const G = { playerCanBeHealed: { '1': false } };
  const ctx = { currentPlayer: '1' };
  playerCanBeHealed.enable(G, ctx.currentPlayer);
  expect(G).toEqual({ playerCanBeHealed: { '1': true } });
});
