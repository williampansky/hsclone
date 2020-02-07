const esmImport = require('esm')(module);
const { castTheOrb } = esmImport('../../lib/spells/cast-the-orb');

test(`adds 1 energy to currentPlayer's energy.current value`, () => {
  const G = {
    energy: {
      0: {
        current: 0
      }
    }
  };

  const ctx = {
    currentPlayer: 0
  };

  const result = castTheOrb(G, ctx);
  expect(result).toBe(1);
});
