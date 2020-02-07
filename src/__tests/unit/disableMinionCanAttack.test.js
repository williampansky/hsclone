const esmImport = require('esm')(module);
const { disableMinionCanAttack } = esmImport('../lib/moves/minion-moves');

test(`disable player 0's slot4 canAttack`, () => {
  const G = {
    boards: {
      0: {
        slot4: {
          canAttack: true
        }
      }
    }
  };

  const result = disableMinionCanAttack(G, 0, 4);
  expect(result).toBe(false);
});
