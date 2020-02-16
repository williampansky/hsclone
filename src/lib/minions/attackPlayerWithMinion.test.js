const esmImport = require('esm')(module);
const { generateMinion } = esmImport('../utils/generate-minion');
const { attackPlayerWithMinion } = esmImport('./attackPlayerWithMinion');

test(`attacks player with a minion, calculating the outcome`, () => {
  const ATTACKING_MINION = generateMinion('CORE_030');
  const TURN_ORDER = ['0', '1'];

  const ctx = { currentPlayer: '0' };
  const G = {
    health: {
      '0': 30,
      '1': 30
    },
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
      '1': []
    },
    canBeAttacked: {
      '0': null,
      '1': null
    },
    selectedMinionIndex: {
      '0': 0,
      '1': null
    },
    selectedMinionObject: {
      '0': {
        canAttack: true,
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

  attackPlayerWithMinion(G, ctx);

  expect(G).toEqual({
    health: {
      '0': 30,
      '1': 28
    },
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: ATTACKING_MINION.attack,
          currentHealth: ATTACKING_MINION.health,
          hasGuard: false,
          minionData: ATTACKING_MINION,
          totalAttack: ATTACKING_MINION.attack,
          totalHealth: ATTACKING_MINION.health
        }
      ],
      '1': []
    },
    canBeAttacked: {
      '0': null,
      '1': true
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
