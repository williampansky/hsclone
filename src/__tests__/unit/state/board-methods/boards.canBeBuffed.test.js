import boards from 'lib/state/boards';

test(`disable currentPlayer's 3rd minion canBeBuffed`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [null, null, null, { canBeBuffed: true }, null]
    }
  };

  boards.disableCanBeBuffed(G, ctx.currentPlayer, 3);
  expect(G).toEqual({
    boards: {
      '0': [null, null, null, { canBeBuffed: false }, null]
    }
  });
});

test(`enable currentPlayer's 5th minion canBeBuffed`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [null, null, null, null, null, { canBeBuffed: false }]
    }
  };

  boards.enableCanBeBuffed(G, ctx.currentPlayer, 5);
  expect(G).toEqual({
    boards: {
      '0': [null, null, null, null, null, { canBeBuffed: true }]
    }
  });
});
