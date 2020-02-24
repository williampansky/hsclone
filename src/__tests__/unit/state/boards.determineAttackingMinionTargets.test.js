import boards from 'lib/state/boards';

test(`determines minion targets, no guard on board`, () => {
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };

  const G = {
    boards: {
      '0': [
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: false, hasGuard: false }
      ]
    },
    playerCanBeAttacked: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  boards.determineAttackTargets(G, ctx.currentPlayer);
  expect(G).toEqual({
    boards: {
      '0': [
        { canBeAttacked: true, hasGuard: false },
        { canBeAttacked: true, hasGuard: false },
        { canBeAttacked: true, hasGuard: false },
        { canBeAttacked: true, hasGuard: false },
        { canBeAttacked: true, hasGuard: false }
      ]
    },
    playerCanBeAttacked: { '0': true, '1': false },
    turnOrder: TURN_ORDER
  });
});

test(`determines minion targets, one guard minion on board`, () => {
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };

  const G = {
    boards: {
      '0': [
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: false, hasGuard: true },
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: false, hasGuard: false }
      ]
    },
    playerCanBeAttacked: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  boards.determineAttackTargets(G, ctx.currentPlayer);
  expect(G).toEqual({
    boards: {
      '0': [
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: true, hasGuard: true },
        { canBeAttacked: false, hasGuard: false },
        { canBeAttacked: false, hasGuard: false }
      ]
    },
    playerCanBeAttacked: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  });
});
