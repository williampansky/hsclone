import health from 'lib/state/health';
const { add, subtract } = health;

test(`adds provided amount to the target player's health value`, () => {
  const G = { health: { '0': 25 } };
  const ctx = { currentPlayer: '0' };
  add(G, ctx.currentPlayer, 2);
  expect(G).toEqual({ health: { '0': 27 } });
});

test(`healths the player to max health`, () => {
  const G = { health: { '0': 25 } };
  const ctx = { currentPlayer: '0' };
  add(G, ctx.currentPlayer, 8);
  expect(G).toEqual({ health: { '0': 30 } });
});

test(`subtracts provided amount from the target player's health value`, () => {
  const G = { health: { '0': 15 } };
  const ctx = { currentPlayer: '0' };
  subtract(G, ctx.currentPlayer, 5);
  expect(G).toEqual({ health: { '0': 10 } });
});

test(`kills the player by setting health to zero`, () => {
  const G = { health: { '0': 5 } };
  const ctx = { currentPlayer: '0' };
  subtract(G, ctx.currentPlayer, 7);
  expect(G).toEqual({ health: { '0': 0 } });
});
