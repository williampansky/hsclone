const esmImport = require('esm')(module);
const { castTheOrb } = esmImport('./cast-the-orb');

/**
 * spells/castTheOrb()
 */
test(`adds 1 energy to currentPlayer's energy.current value`, () => {
  const G = {
    energy: {
      '0': {
        current: 0
      },
      '1': {
        current: 0
      }
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  castTheOrb(G, ctx);
  expect(G).toEqual({
    energy: {
      '0': {
        current: 1
      },
      '1': {
        current: 0
      }
    }
  });
});
