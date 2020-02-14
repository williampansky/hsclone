const esmImport = require('esm')(module);
const {
  addToPlayerHealth,
  disablePlayerCanBeAttacked,
  enablePlayerCanBeAttacked,
  subtractFromPlayerHealth
} = esmImport('../../lib/moves/player-moves');

/**
 * player-moves::addToPlayerHealth() - under max value
 */
test(`adds provided amount to the target player's health value`, () => {
  const G = { health: { '0': 25 } };
  const ctx = { currentPlayer: '0' };
  addToPlayerHealth(G, ctx.currentPlayer, 2);
  expect(G).toEqual({ health: { '0': 27 } });
});

/**
 * player-moves::addToPlayerHealth() - over max value
 */
test(`healths the player to max health`, () => {
  const G = { health: { '0': 25 } };
  const ctx = { currentPlayer: '0' };
  addToPlayerHealth(G, ctx.currentPlayer, 8);
  expect(G).toEqual({ health: { '0': 30 } });
});

/**
 * player-moves::subtractFromPlayerHealth() - above min value
 */
test(`subtracts provided amount from the target player's health value`, () => {
  const G = { health: { '0': 15 } };
  const ctx = { currentPlayer: '0' };
  subtractFromPlayerHealth(G, ctx.currentPlayer, 5);
  expect(G).toEqual({ health: { '0': 10 } });
});

/**
 * player-moves::subtractFromPlayerHealth() - under min value
 */
test(`kills the player by setting health to zero`, () => {
  const G = { health: { '0': 5 } };
  const ctx = { currentPlayer: '0' };
  subtractFromPlayerHealth(G, ctx.currentPlayer, 7);
  expect(G).toEqual({ health: { '0': 0 } });
});

/**
 * player-moves::disablePlayerCanBeAttacked()
 */
test(`should disable player 0's ability to be attacked`, () => {
  const G = { canBeAttacked: { '0': true } };
  const ctx = { currentPlayer: '0' };
  disablePlayerCanBeAttacked(G, ctx.currentPlayer);
  expect(G).toEqual({ canBeAttacked: { '0': false } });
});

/**
 * player-moves::enablePlayerCanBeAttacked()
 */
test(`should enable player 1's ability to be attacked`, () => {
  const G = { canBeAttacked: { '1': false } };
  const ctx = { currentPlayer: '1' };
  enablePlayerCanBeAttacked(G, ctx.currentPlayer);
  expect(G).toEqual({ canBeAttacked: { '1': true } });
});
