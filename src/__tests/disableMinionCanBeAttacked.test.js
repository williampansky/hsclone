const esmImport = require('esm')(module);
const { disableMinionCanBeAttacked } = esmImport('../lib/moves/minion-moves');

test(`disable player 0's slot3 canBeAttacked`, () => {
  const G = {
    boards: {
      0: {
        slot3: {
          canBeAttacked: true
        }
      }
    }
  };

  const result = disableMinionCanBeAttacked(G, 0, 3);
  expect(result).toBe(false);
});
