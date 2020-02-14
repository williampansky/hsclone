const esmImport = require('esm')(module);
const {
  incrementTotalEnergy,
  matchCurrentWithTotalEnergy,
  setCurrentEnergy,
  setTotalEnergy,
  subtractFromCurrentEnergy
} = esmImport('../../lib/moves/energy-moves');

/**
 * energy-moves::incrementTotalEnergy()
 */
test(`increments player 0's total energy`, () => {
  const G = { energy: { '0': { total: 0 } } };
  incrementTotalEnergy(G, '0');
  expect(G).toEqual({ energy: { '0': { total: 1 } } });
});

/**
 * energy-moves::matchCurrentWithTotalEnergy()
 */
test(`matches player 0's current energy with their total`, () => {
  const G = { energy: { '0': { current: 0, total: 5 } } };
  matchCurrentWithTotalEnergy(G, '0');
  expect(G).toEqual({ energy: { '0': { current: 5, total: 5 } } });
});

/**
 * energy-moves::setCurrentEnergy()
 */
test(`set player 0's current energy to provided amount`, () => {
  const G = { energy: { '0': { current: 0 } } };
  setCurrentEnergy(G, '0', 10);
  expect(G).toEqual({ energy: { '0': { current: 10 } } });
});

/**
 * energy-moves::setTotalEnergy()
 */
test(`set player 0's total energy to provided amount`, () => {
  const G = { energy: { '0': { total: 0 } } };
  setTotalEnergy(G, '0', 10);
  expect(G).toEqual({ energy: { '0': { total: 10 } } });
});

/**
 * energy-moves::subtractFromCurrentEnergy()
 */
test(`subtract the provided amount from player's current energy value`, () => {
  const G = { energy: { '0': { current: 4, total: 4 } } };
  subtractFromCurrentEnergy(G, '0', 2);
  expect(G).toEqual({ energy: { '0': { current: 2, total: 4 } } });
});
