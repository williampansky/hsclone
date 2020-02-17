import boards from 'lib/state/boards';

test(`disable currentPlayer's 4th minion canAttack`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [null, null, null, null, { canAttack: true }]
    }
  };

  boards.disableCanAttack(G, ctx.currentPlayer, 4);
  expect(G).toEqual({
    boards: {
      '0': [null, null, null, null, { canAttack: false }]
    }
  });
});

test(`enable currentPlayer's 2nd minion canAttack`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [null, null, { canAttack: false }, null, null]
    }
  };

  boards.enableCanAttack(G, ctx.currentPlayer, 2);
  expect(G).toEqual({
    boards: {
      '0': [null, null, { canAttack: true }, null, null]
    }
  });
});
