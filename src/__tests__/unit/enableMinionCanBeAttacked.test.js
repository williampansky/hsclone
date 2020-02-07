const esmImport = require('esm')(module);
const { enableMinionCanBeAttacked } = esmImport('../../lib/moves/minion-moves');

test(`enable player 0's slot5 canBeAttacked`, () => {
  const G = {
    boards: {
      0: {
        slot5: {
          canBeAttacked: false
        }
      }
    }
  };

  const result = enableMinionCanBeAttacked(G, 0, 5);
  expect(result).toBe(true);
});
