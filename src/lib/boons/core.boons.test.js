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
          currentAttack: OTHER_MINION1.attack,
          currentHealth: OTHER_MINION1.health,
          hasGuard: false,
          minionData: OTHER_MINION1,
          totalAttack: OTHER_MINION1.attack,
          totalHealth: OTHER_MINION1.health
        },
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: OTHER_MINION2.attack,
          currentHealth: OTHER_MINION2.health,
          hasGuard: false,
          minionData: OTHER_MINION2,
          totalAttack: OTHER_MINION2.attack,
          totalHealth: OTHER_MINION2.health
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
          currentAttack: OTHER_MINION1.attack + 1,
          currentHealth: OTHER_MINION1.health + 1,
          hasGuard: false,
          minionData: OTHER_MINION1,
          totalAttack: OTHER_MINION1.attack + 1,
          totalHealth: OTHER_MINION1.health + 1
        },
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: OTHER_MINION2.attack + 1,
          currentHealth: OTHER_MINION2.health + 1,
          hasGuard: false,
          minionData: OTHER_MINION2,
          totalAttack: OTHER_MINION2.attack + 1,
          totalHealth: OTHER_MINION2.health + 1
        }
      ]
    }
  });
});
