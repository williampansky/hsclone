const esmImport = require('esm')(module);
const { initCoreBuff } = esmImport('./core.buffs');
// const { getCardByID } = esmImport('../utils/get-card-by-id');

// Give your hero  +1 Spell Damage.
test(`BOON(CORE_011)`, () => {
  const CARD_ID = 'CORE_011';

  const G = {
    buffs: {
      '0': {
        attack: 0,
        spellDamage: 0
      }
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  initCoreBuff(G, ctx.currentPlayer, CARD_ID);

  expect(G).toEqual({
    buffs: {
      '0': {
        attack: 0,
        spellDamage: 1
      }
    }
  });
});
