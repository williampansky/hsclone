import initCoreBuff from 'lib/buffs/core.buffs';

// Give your hero +1 Spell Damage.
test(`BUFF(CORE_011)`, () => {
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
