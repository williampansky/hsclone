const esmImport = require('esm')(module);
const { setCurrentEnergy } = esmImport('../../lib/moves/energy-moves');

test(`set player 0's current energy to provided amount`, () => {
  const G = { energy: { 0: { current: 0 } } };
  const result = setCurrentEnergy(G, 0, 10);
  expect(result).toBe(10);
});
