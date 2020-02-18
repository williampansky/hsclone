import forfeitGame from 'lib/moves/forfeit-game';

test(`should forfeit the game`, () => {
  const ctx = { currentPlayer: '0' };
  const G = {
    health: { '0': 30, '1': 30 }
  };

  forfeitGame(G, ctx, ctx.currentPlayer);
  expect(G.health[ctx.currentPlayer]).toBe(0);
});
