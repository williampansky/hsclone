const esmImport = require('esm')(module);
const { incrementTotalEnergy } = esmImport('../lib/moves/energy-moves');

test(`increments player 0's total energy`, () => {
  const G = { energy: { 0: { total: 0 } } };
  const result = incrementTotalEnergy(G, 0);
  expect(result).toBe(1);
});
