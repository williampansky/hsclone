const esmImport = require('esm')(module);
const {
  disableMinionCanAttack,
  disableMinionCanBeAttacked,
  enableMinionCanAttack,
  enableMinionCanBeAttacked
} = esmImport('../../lib/moves/minion-moves');

// minion-moves::disableMinionCanAttack()
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

// minion-moves::disableMinionCanBeAttacked()
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

// minion-moves::enableMinionCanAttack()
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

// minion-moves::enableMinionCanBeAttacked()
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
