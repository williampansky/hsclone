import boards from 'lib/state/boards';

test(`disable currentPlayer's 3rd minion canBeAttacked`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [null, null, null, { canBeAttacked: true }, null]
    }
  };

  boards.disableCanBeAttacked(G, ctx.currentPlayer, 3);
  expect(G).toEqual({
    boards: {
      '0': [null, null, null, { canBeAttacked: false }, null]
    }
  });
});

test(`enable currentPlayer's 5th minion canBeAttacked`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [null, null, null, null, null, { canBeAttacked: false }]
    }
  };

  boards.enableCanBeAttacked(G, ctx.currentPlayer, 5);
  expect(G).toEqual({
    boards: {
      '0': [null, null, null, null, null, { canBeAttacked: true }]
    }
  });
});
