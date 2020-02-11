const esmImport = require('esm')(module);
const { initCoreBoon } = esmImport('./core.boons');
const { getCardByID } = esmImport('../utils/get-card-by-id');

// Gift +1/+1 to all your other minions.
test(`BOON(CORE_041)`, () => {
  const CARD_ID = 'CORE_041';
  const OTHER_MINION1 = getCardByID('CORE_014');
  const OTHER_MINION2 = getCardByID('CORE_024');

  const G = {
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          hasGuard: false,
          minionData: OTHER_MINION1
        },
        {
          canAttack: false,
          canBeAttacked: false,
          hasGuard: false,
          minionData: OTHER_MINION2
        }
      ]
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  initCoreBoon(G, ctx.currentPlayer, CARD_ID);

  expect(G).toEqual({
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          hasGuard: false,
          minionData: {
            ...OTHER_MINION1,
            attack: OTHER_MINION1.attack + 1,
            health: OTHER_MINION1.health + 1
          }
        },
        {
          canAttack: false,
          canBeAttacked: false,
          hasGuard: false,
          minionData: {
            ...OTHER_MINION2,
            attack: OTHER_MINION2.attack + 1,
            health: OTHER_MINION2.health + 1
          }
        }
      ]
    }
  });
});
