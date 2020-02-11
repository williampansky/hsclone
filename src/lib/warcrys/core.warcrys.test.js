const esmImport = require('esm')(module);
const { initCoreWarcry } = esmImport('./core.warcrys');
const { getCardByID } = esmImport('../utils/get-card-by-id');

test(`WARCRY(CORE_001)`, () => {
  const CARD_ID = 'CORE_001';
  const G = { warcryObject: { '0': null } };
  const ctx = { currentPlayer: '0' };
  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({
    warcryObject: {
      '0': {
        id: CARD_ID,
        type: 'SPELL',
        cost: 0,
        attack: 1,
        spellType: 'TARGETED',
        targetingArrowText: 'Deal 1 damage'
      }
    }
  });
});

test(`WARCRY(CORE_006)`, () => {
  const CARD_ID = 'CORE_006';
  const G = { warcryObject: { '0': null } };
  const ctx = { currentPlayer: '0' };
  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({
    warcryObject: {
      '0': {
        id: CARD_ID,
        type: 'SPELL',
        cost: 0,
        heal: 1,
        spellType: 'TARGETED',
        targetingArrowText: 'Restore 2 Health to anyone.'
      }
    }
  });
});

test(`WARCRY(CORE_012) - board under max capacity`, () => {
  const CARD_ID = 'CORE_012';

  const PARENT_MINION = {
    canAttack: false,
    canBeAttacked: false,
    hasGuard: false,
    minionData: getCardByID(CARD_ID)
  };

  const ENTOURAGE_MINION = {
    canAttack: false,
    canBeAttacked: false,
    hasGuard: false,
    minionData: getCardByID(`${CARD_ID}a`)
  };

  const G = {
    boards: {
      '0': [PARENT_MINION]
    }
  };

  const ctx = { currentPlayer: '0' };

  initCoreWarcry(G, ctx, CARD_ID);

  expect(G).toEqual({
    boards: {
      '0': [PARENT_MINION, ENTOURAGE_MINION]
    }
  });
});

test(`WARCRY(CORE_012) - board at max capacity`, () => {
  const CARD_ID = 'CORE_012';

  const PARENT_MINION = {
    canAttack: false,
    canBeAttacked: false,
    hasGuard: false,
    minionData: getCardByID(CARD_ID)
  };

  const G = {
    boards: {
      '0': [
        'OTHER_MINION',
        'OTHER_MINION',
        'OTHER_MINION',
        'OTHER_MINION',
        'OTHER_MINION',
        'OTHER_MINION',
        PARENT_MINION
      ]
    }
  };

  const ctx = { currentPlayer: '0' };

  initCoreWarcry(G, ctx, CARD_ID);

  expect(G).toEqual({
    boards: {
      '0': [
        'OTHER_MINION',
        'OTHER_MINION',
        'OTHER_MINION',
        'OTHER_MINION',
        'OTHER_MINION',
        'OTHER_MINION',
        PARENT_MINION
      ]
    }
  });
});

test(`WARCRY(CORE_013)`, () => {
  const CARD_ID = 'CORE_013';
  const CARD_OBJ = getCardByID(CARD_ID);

  const G = {
    counts: {
      '0': {
        deck: 1,
        hand: 0
      }
    },
    players: {
      '0': {
        deck: [CARD_ID],
        hand: []
      }
    }
  };

  const ctx = { currentPlayer: '0' };

  initCoreWarcry(G, ctx, CARD_ID);

  expect(G).toEqual({
    counts: {
      '0': {
        deck: 0,
        hand: 1
      }
    },
    players: {
      '0': {
        deck: [],
        hand: [CARD_OBJ]
      }
    }
  });
});

test(`WARCRY(CORE_016)`, () => {
  const CARD_ID = 'CORE_016';
  const G = { warcryObject: { '0': null } };
  const ctx = { currentPlayer: '0' };
  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({
    warcryObject: {
      '0': {
        id: CARD_ID,
        type: 'SPELL',
        cost: 0,
        attack: 1,
        spellType: 'TARGETED',
        targetingArrowText: 'Deal 1 damage'
      }
    }
  });
});

// Provide +1/+1 to one of your minions.
test(`WARCRY(CORE_021)`, () => {
  const CARD_ID = 'CORE_021';
  const WARCRY_MINION = getCardByID(CARD_ID);
  const OTHER_MINION1 = getCardByID('CORE_014');

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
          currentAttack: WARCRY_MINION.attack,
          currentHealth: WARCRY_MINION.health,
          hasGuard: false,
          minionData: WARCRY_MINION,
          totalAttack: WARCRY_MINION.attack,
          totalHealth: WARCRY_MINION.health
        }
      ]
    }
  };

  const ctx = { currentPlayer: '0' };
  const TARGET_MINION_INDEX = 0;

  initCoreWarcry(G, ctx, CARD_ID, TARGET_MINION_INDEX);

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
          currentAttack: WARCRY_MINION.attack,
          currentHealth: WARCRY_MINION.health,
          hasGuard: false,
          minionData: WARCRY_MINION,
          totalAttack: WARCRY_MINION.attack,
          totalHealth: WARCRY_MINION.health
        }
      ]
    }
  });
});

test(`WARCRY(CORE_026)`, () => {
  const CARD_ID = 'CORE_026';
  const CARD_OBJ = getCardByID(CARD_ID);

  const G = {
    counts: {
      '0': {
        deck: 1,
        hand: 0
      }
    },
    players: {
      '0': {
        deck: [CARD_ID],
        hand: []
      }
    }
  };

  const ctx = { currentPlayer: '0' };

  initCoreWarcry(G, ctx, CARD_ID);

  expect(G).toEqual({
    counts: {
      '0': {
        deck: 0,
        hand: 1
      }
    },
    players: {
      '0': {
        deck: [],
        hand: [CARD_OBJ]
      }
    }
  });
});

// Restore 2 Health to you and all your minions.
test(`WARCRY(CORE_032)`, () => {
  const CARD_ID = 'CORE_032';
  const WARCRY_MINION = getCardByID(CARD_ID);
  const OTHER_MINION1 = getCardByID('CORE_014'); // max health is 3

  const G = {
    health: {
      '0': 25
    },
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: OTHER_MINION1.attack,
          currentHealth: 2,
          hasGuard: false,
          minionData: OTHER_MINION1,
          totalAttack: OTHER_MINION1.attack,
          totalHealth: OTHER_MINION1.health
        },
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: WARCRY_MINION.attack,
          currentHealth: WARCRY_MINION.health,
          hasGuard: false,
          minionData: WARCRY_MINION,
          totalAttack: WARCRY_MINION.attack,
          totalHealth: WARCRY_MINION.health
        }
      ]
    }
  };

  const ctx = { currentPlayer: '0' };
  initCoreWarcry(G, ctx, CARD_ID);

  expect(G).toEqual({
    health: {
      '0': 27
    },
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
          currentAttack: WARCRY_MINION.attack,
          currentHealth: WARCRY_MINION.health,
          hasGuard: false,
          minionData: WARCRY_MINION,
          totalAttack: WARCRY_MINION.attack,
          totalHealth: WARCRY_MINION.health
        }
      ]
    }
  });
});

// Gain +1/+1 for each of your other active minions.
test(`WARCRY(CORE_033)`, () => {
  const CARD_ID = 'CORE_033';
  const MINION = getCardByID(CARD_ID);
  const OTHER_MINION1 = getCardByID('CORE_016');
  const OTHER_MINION2 = getCardByID('CORE_036');

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
        },
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION.attack,
          currentHealth: MINION.health,
          hasGuard: false,
          minionData: MINION,
          totalAttack: MINION.attack,
          totalHealth: MINION.health
        }
      ]
    }
  };

  const ctx = { currentPlayer: '0' };
  initCoreWarcry(G, ctx, CARD_ID);

  expect(G).toEqual({
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
        },
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION.attack + 2,
          currentHealth: MINION.health + 2,
          hasGuard: false,
          minionData: MINION,
          totalAttack: MINION.attack,
          totalHealth: MINION.health
        }
      ]
    }
  });
});

// Attack the enemy hero for 3 damage.
test(`WARCRY(CORE_035)`, () => {
  const CARD_ID = 'CORE_035';
  const TURN_ORDER = ['0', '1'].sort(() => {
    return Math.random() - 0.5;
  });

  const G = {
    health: {
      '0': 30,
      '1': 30
    },
    turnOrder: TURN_ORDER
  };

  const ctx = { currentPlayer: '1' };
  initCoreWarcry(G, ctx, CARD_ID);

  expect(G).toEqual({
    health: {
      '0': 27,
      '1': 30
    },
    turnOrder: TURN_ORDER
  });
});

test(`WARCRY(CORE_036)`, () => {
  const CARD_ID = 'CORE_036';
  const G = { warcryObject: { '1': null } };
  const ctx = { currentPlayer: '1' };
  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({
    warcryObject: {
      '1': {
        id: CARD_ID,
        type: 'SPELL',
        cost: 0,
        attack: 2,
        spellType: 'TARGETED',
        targetingArrowText: 'Deal 2 damage'
      }
    }
  });
});
