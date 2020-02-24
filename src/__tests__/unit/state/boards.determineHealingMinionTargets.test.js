import boards from 'lib/state/boards';

test(`determines healable targets`, () => {
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };

  const G = {
    boards: {
      '0': [
        { canBeHealed: false },
        { canBeHealed: false },
        { canBeHealed: false },
        { canBeHealed: false },
        { canBeHealed: false }
      ]
    },
    playerCanBeHealed: { '0': false },
    turnOrder: TURN_ORDER
  };

  boards.determineHealTargets(G, ctx.currentPlayer);
  expect(G).toEqual({
    boards: {
      '0': [
        { canBeHealed: true },
        { canBeHealed: true },
        { canBeHealed: true },
        { canBeHealed: true },
        { canBeHealed: true }
      ]
    },
    playerCanBeHealed: { '0': true },
    turnOrder: TURN_ORDER
  });
});
