const esmImport = require('esm')(module);
const { setTotalEnergy } = esmImport('../lib/moves/energy-moves');

test(`set player 0's total energy to provided amount`, () => {
  const G = { energy: { 0: { total: 0 } } };
  const result = setTotalEnergy(G, 0, 10);
  expect(result).toBe(10);
});
