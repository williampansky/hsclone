const esmImport = require('esm')(module);
const { addToPlayerHealth, subtractFromPlayerHealth } = esmImport(
  '../../lib/moves/player-moves'
);

/**
 * player-moves::addToPlayerHealth()
 */
test(`adds provided amount to the target player's health value`, () => {
  const G = { health: { '0': 25 } };
  const ctx = { currentPlayer: '0' };
  addToPlayerHealth(G, ctx.currentPlayer, 2);
  expect(G).toEqual({ health: { '0': 27 } });
});

/**
 * player-moves::subtractFromPlayerHealth()
 */
test(`adds provided amount to the target player's health value`, () => {
  const G = { health: { '0': 15 } };
  const ctx = { currentPlayer: '0' };
  subtractFromPlayerHealth(G, ctx.currentPlayer, 5);
  expect(G).toEqual({ health: { '0': 10 } });
});
