import boards from 'lib/state/boards';

test(`determines minion targets, no Guard on board`, () => {
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };

  // prettier-ignore
  const G = {
    boards: {
      '0': [
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false }
      ]
    },
    playerCanBeAttacked: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  boards.determineAttackTargets(G, ctx.currentPlayer);

  // prettier-ignore
  expect(G).toEqual({
    boards: {
      '0': [
        { canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: false, hasGuard: false }
      ]
    },
    playerCanBeAttacked: { '0': true, '1': false },
    turnOrder: TURN_ORDER
  });
});

test(`determines minion targets, one Guard minion on board`, () => {
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };

  // prettier-ignore
  const G = {
    boards: {
      '0': [
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: true },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false }
      ]
    },
    playerCanBeAttacked: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  boards.determineAttackTargets(G, ctx.currentPlayer);

  // prettier-ignore
  expect(G).toEqual({
    boards: {
      '0': [
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: false, hasGuard: true },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false }
      ]
    },
    playerCanBeAttacked: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  });
});

test(`determines minion targets, two Guard minions on board`, () => {
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };

  // prettier-ignore
  const G = {
    boards: {
      '0': [
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: true },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: true }
      ]
    },
    playerCanBeAttacked: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  boards.determineAttackTargets(G, ctx.currentPlayer);

  // prettier-ignore
  expect(G).toEqual({
    boards: {
      '0': [
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: false, hasGuard: true },
        { canAttack: false, canBeAttacked: false, canBeBuffed: false, canBeHealed: false, hasGuard: false },
        { canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: false, hasGuard: true }
      ]
    },
    playerCanBeAttacked: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  });
});
