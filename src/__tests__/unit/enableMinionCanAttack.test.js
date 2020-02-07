const esmImport = require('esm')(module);
const { enableMinionCanAttack } = esmImport('../../lib/moves/minion-moves');

test(`enable player 0's slot2 canAttack`, () => {
  const G = {
    boards: {
      0: {
        slot2: {
          canAttack: false
        }
      }
    }
  };

  const result = enableMinionCanAttack(G, 0, 2);
  expect(result).toBe(true);
});
