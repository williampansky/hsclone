const esmImport = require('esm')(module);
const { matchCurrentWithTotalEnergy } = esmImport(
  '../../lib/moves/energy-moves'
);

test(`matches player 0's current energy with their total`, () => {
  const G = { energy: { 0: { current: 0, total: 5 } } };
  const result = matchCurrentWithTotalEnergy(G, 0);
  expect(result).toBe(5);
});
