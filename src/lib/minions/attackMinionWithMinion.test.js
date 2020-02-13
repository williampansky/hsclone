const esmImport = require('esm')(module);
const { generateMinion } = esmImport('../utils/generate-minion');
const { attackMinionWithMinion } = esmImport('./attackMinionWithMinion');

/**
 * attackMinionWithMinion()
 */
test(`attacks a minion with another minion, calculating the outcome`, () => {
  const ATTACKING_MINION = generateMinion('CORE_030');
  const MINION_BEING_ATTACKED = generateMinion('CORE_027');
  const TURN_ORDER = ['0', '1'].sort(() => {
    return Math.random() - 0.5;
  });

  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [
        {
          canAttack: true,
          canBeAttacked: false,
          currentAttack: ATTACKING_MINION.attack, // 2
          currentHealth: ATTACKING_MINION.health, // 5
          hasGuard: false,
          minionData: ATTACKING_MINION,
          totalAttack: ATTACKING_MINION.attack,
          totalHealth: ATTACKING_MINION.health
        }
      ],
      '1': [
        {
          canAttack: false,
          canBeAttacked: true,
          currentAttack: MINION_BEING_ATTACKED.attack, // 2
          currentHealth: MINION_BEING_ATTACKED.health, // 7
          hasGuard: false,
          minionData: MINION_BEING_ATTACKED,
          totalAttack: MINION_BEING_ATTACKED.attack,
          totalHealth: MINION_BEING_ATTACKED.health
        }
      ]
    },
    selectedMinionIndex: {
      '0': 0,
      '1': null
    },
    selectedMinionObject: {
      '0': {
        canAttack: false,
        canBeAttacked: false,
        currentAttack: ATTACKING_MINION.attack,
        currentHealth: ATTACKING_MINION.health,
        hasGuard: false,
        minionData: ATTACKING_MINION,
        totalAttack: ATTACKING_MINION.attack,
        totalHealth: ATTACKING_MINION.health
      },
      '1': null
    },
    turnOrder: TURN_ORDER
  };

  attackMinionWithMinion(G, ctx, 0);

  expect(G).toEqual({
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: ATTACKING_MINION.attack,
          currentHealth: 3,
          hasGuard: false,
          minionData: ATTACKING_MINION,
          totalAttack: ATTACKING_MINION.attack,
          totalHealth: ATTACKING_MINION.health
        }
      ],
      '1': [
        {
          canAttack: false,
          canBeAttacked: true,
          currentAttack: MINION_BEING_ATTACKED.attack,
          currentHealth: 5,
          hasGuard: false,
          minionData: MINION_BEING_ATTACKED,
          totalAttack: MINION_BEING_ATTACKED.attack,
          totalHealth: MINION_BEING_ATTACKED.health
        }
      ]
    },
    selectedMinionIndex: {
      '0': null,
      '1': null
    },
    selectedMinionObject: {
      '0': null,
      '1': null
    },
    turnOrder: TURN_ORDER
  });
});
