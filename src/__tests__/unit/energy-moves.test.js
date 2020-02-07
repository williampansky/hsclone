const esmImport = require('esm')(module);
const {
  incrementTotalEnergy,
  matchCurrentWithTotalEnergy,
  setCurrentEnergy,
  setTotalEnergy
} = esmImport('../../lib/moves/energy-moves');

// energy-moves::incrementTotalEnergy()
test(`increments player 0's total energy`, () => {
  const G = { energy: { 0: { total: 0 } } };
  const result = incrementTotalEnergy(G, 0);
  expect(result).toBe(1);
});

// energy-moves::matchCurrentWithTotalEnergy()
test(`matches player 0's current energy with their total`, () => {
  const G = { energy: { 0: { current: 0, total: 5 } } };
  const result = matchCurrentWithTotalEnergy(G, 0);
  expect(result).toBe(5);
});

// energy-moves::setCurrentEnergy()
test(`set player 0's current energy to provided amount`, () => {
  const G = { energy: { 0: { current: 0 } } };
  const result = setCurrentEnergy(G, 0, 10);
  expect(result).toBe(10);
});

// energy-moves::setTotalEnergy()
test(`set player 0's total energy to provided amount`, () => {
  const G = { energy: { 0: { total: 0 } } };
  const result = setTotalEnergy(G, 0, 10);
  expect(result).toBe(10);
});
