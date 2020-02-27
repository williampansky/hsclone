import boards from 'lib/state/boards';

test(`determines healable targets`, () => {
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };

  // prettier-ignore
  const G = {
    boards: {
      '0': [
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false }
      ]
    },
    playerCanBeAttacked: { '0': false },
    playerCanBeHealed: { '0': false },
    turnOrder: TURN_ORDER
  };

  boards.determineHealTargets(G, ctx.currentPlayer);

  // prettier-ignore
  expect(G).toEqual({
    boards: {
      '0': [
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: true },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: true },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: true },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: true },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: true }
      ]
    },
    playerCanBeAttacked: { '0': false },
    playerCanBeHealed: { '0': true },
    turnOrder: TURN_ORDER
  });
});
