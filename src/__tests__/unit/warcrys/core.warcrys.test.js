import createWarcryObject from 'lib/creators/create-warcry-object';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import initCoreWarcry from 'lib/warcrys/core.warcrys';
import getCardByID from 'lib/utils/get-card-by-id';

test(`WARCRY(CORE_001)`, () => {
  const CARD_ID = 'CORE_001';
  const ctx = { currentPlayer: '0' };
  const TURN_ORDER = ['0', '1'];

  const G = {
    health: { '0': 30, '1': 30 },
    playerCanBeAttacked: { '0': false, '1': false },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': null },
    turnOrder: TURN_ORDER
  };

  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({
    health: { '0': 30, '1': 30 },
    playerCanBeAttacked: { '0': false, '1': true },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': createWarcryObject(CARD_ID) },
    turnOrder: TURN_ORDER
  });
});

test(`WARCRY(CORE_006)`, () => {
  const CARD_ID = 'CORE_006';
  const ctx = { currentPlayer: '0' };
  const TURN_ORDER = ['0', '1'];

  // prettier-ignore
  const G = {
    health: { '0': 30, '1': 30 },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    boards: {
      '0': [{ canAttack: true, canBeAttacked: false, canBeBuffed: false, canBeHealed: false }],
      '1': [{ canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: false }]
    },
    warcryObject: { '0': null },
    turnOrder: TURN_ORDER
  };

  initCoreWarcry(G, ctx, CARD_ID, 0);

  // prettier-ignore
  expect(G).toEqual({
    health: { '0': 30, '1': 30 },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': true, '1': true },
    boards: {
      '0': [{ canAttack: true, canBeAttacked: false, canBeBuffed: false, canBeHealed: true }],
      '1': [{ canAttack: false, canBeAttacked: true, canBeBuffed: false, canBeHealed: true }]
    },
    warcryObject: { '0': createWarcryObject(CARD_ID) },
    turnOrder: TURN_ORDER
  });
});

test(`WARCRY(CORE_007)`, () => {
  const CARD_ID = 'CORE_007';
  const ctx = { currentPlayer: '0' };
  const TURN_ORDER = ['0', '1'];

  const G = {
    playerCanAttack: { '0': false, '1': false },
    playerWeapon: { '0': null, '1': { key: 'TEMP_WEAPON_OBJ' } },
    turnOrder: TURN_ORDER
  };

  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({
    playerCanAttack: { '0': false, '1': false },
    playerWeapon: { '0': null, '1': null },
    turnOrder: TURN_ORDER
  });
});

test(`WARCRY(CORE_012) - board under max capacity`, () => {
  const CARD_ID = 'CORE_012';
  const PARENT_MINION = createBoardSlotObject(CARD_ID);
  const ENTOURAGE_MINION = createBoardSlotObject(`${CARD_ID}a`);
  const ctx = { currentPlayer: '0' };
  const TURN_ORDER = ['0', '1'];
  const G = { boards: { '0': [PARENT_MINION] }, turnOrder: TURN_ORDER };

  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({
    boards: { '0': [PARENT_MINION, ENTOURAGE_MINION] },
    turnOrder: TURN_ORDER
  });
});

test(`WARCRY(CORE_012) - board at max capacity`, () => {
  const CARD_ID = 'CORE_012';
  const PARENT_MINION = createBoardSlotObject(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const TURN_ORDER = ['0', '1'];
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
    },
    turnOrder: TURN_ORDER
  };

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
    },
    turnOrder: TURN_ORDER
  });
});

test(`WARCRY(CORE_013)`, () => {
  const CARD_ID = 'CORE_013';
  const ctx = { currentPlayer: '0' };
  const TURN_ORDER = ['0', '1'];
  const G = {
    counts: { '0': { deck: 1, hand: 0 } },
    players: { '0': { deck: [CARD_ID], hand: [] } },
    turnOrder: TURN_ORDER
  };
  initCoreWarcry(G, ctx, CARD_ID);
  expect(G.counts['0']).toEqual({ deck: 0, hand: 1 });
  expect(G.players['0'].deck).toHaveLength(0);
  expect(G.players['0'].hand[0].id).toBe(CARD_ID);
});

test(`WARCRY(CORE_016)`, () => {
  const CARD_ID = 'CORE_016';
  const ctx = { currentPlayer: '0' };
  const TURN_ORDER = ['0', '1'];
  const G = { warcryObject: { '0': null }, turnOrder: TURN_ORDER };
  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({
    warcryObject: { '0': createWarcryObject(CARD_ID) },
    turnOrder: TURN_ORDER
  });
});

// Provide +1/+1 to one of your minions.
test(`WARCRY(CORE_021)`, () => {
  const CARD_ID = 'CORE_021';
  const WARCRY_MINION = getCardByID(CARD_ID);
  const OTHER_MINION1 = getCardByID('CORE_014');
  const TURN_ORDER = ['0', '1'];
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
    },
    turnOrder: TURN_ORDER
  };

  const ctx = { currentPlayer: '0' };
  const TARGET_MINION_INDEX = 0;

  // initCoreWarcry(G, ctx, CARD_ID, TARGET_MINION_INDEX);

  // expect(G).toEqual({
  //   boards: {
  //     '0': [
  //       {
  //         canAttack: false,
  //         canBeAttacked: false,
  //         currentAttack: OTHER_MINION1.attack + 1,
  //         currentHealth: OTHER_MINION1.health + 1,
  //         hasGuard: false,
  //         minionData: OTHER_MINION1,
  //         totalAttack: OTHER_MINION1.attack + 1,
  //         totalHealth: OTHER_MINION1.health + 1
  //       },
  //       {
  //         canAttack: false,
  //         canBeAttacked: false,
  //         currentAttack: WARCRY_MINION.attack,
  //         currentHealth: WARCRY_MINION.health,
  //         hasGuard: false,
  //         minionData: WARCRY_MINION,
  //         totalAttack: WARCRY_MINION.attack,
  //         totalHealth: WARCRY_MINION.health
  //       }
  //     ]
  //   },
  //   turnOrder: TURN_ORDER
  // });
});

test(`WARCRY(CORE_026)`, () => {
  const CARD_ID = 'CORE_026';
  const ctx = { currentPlayer: '0' };
  const TURN_ORDER = ['0', '1'];
  const G = {
    counts: { '0': { deck: 1, hand: 0 } },
    players: { '0': { deck: [CARD_ID], hand: [] } },
    turnOrder: TURN_ORDER
  };

  initCoreWarcry(G, ctx, CARD_ID);

  expect(G.counts['0']).toEqual({ deck: 0, hand: 1 });
  expect(G.players['0'].deck).toHaveLength(0);
  expect(G.players['0'].hand[0].id).toBe(CARD_ID);
});

// Restore 2 Health to you and all your minions.
test(`WARCRY(CORE_032)`, () => {
  const CARD_ID = 'CORE_032';
  const WARCRY_MINION = getCardByID(CARD_ID);
  const OTHER_MINION1 = getCardByID('CORE_014'); // max health is 3
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    health: {
      '0': 25
    },
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          canBeBuffed: false,
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
          canBeBuffed: false,
          currentAttack: WARCRY_MINION.attack,
          currentHealth: WARCRY_MINION.health,
          hasGuard: false,
          minionData: WARCRY_MINION,
          totalAttack: WARCRY_MINION.attack,
          totalHealth: WARCRY_MINION.health
        }
      ]
    },
    turnOrder: TURN_ORDER
  };

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
          canBeBuffed: false,
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
          canBeBuffed: false,
          currentAttack: WARCRY_MINION.attack,
          currentHealth: WARCRY_MINION.health,
          hasGuard: false,
          minionData: WARCRY_MINION,
          totalAttack: WARCRY_MINION.attack,
          totalHealth: WARCRY_MINION.health
        }
      ]
    },
    turnOrder: TURN_ORDER
  });
});

// Gain +1/+1 for each of your other active minions.
test(`WARCRY(CORE_033)`, () => {
  const CARD_ID = 'CORE_033';
  const MINION = getCardByID(CARD_ID);
  const OTHER_MINION1 = getCardByID('CORE_016');
  const OTHER_MINION2 = getCardByID('CORE_036');
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
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
          currentAttack: MINION.attack,
          currentHealth: MINION.health,
          hasGuard: false,
          minionData: MINION,
          totalAttack: MINION.attack,
          totalHealth: MINION.health
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
    },
    turnOrder: TURN_ORDER
  };

  initCoreWarcry(G, ctx, CARD_ID, 1);

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
          currentAttack: MINION.attack + 2,
          currentHealth: MINION.health + 2,
          hasGuard: false,
          minionData: MINION,
          totalAttack: MINION.attack + 2,
          totalHealth: MINION.health + 2
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
    },
    turnOrder: TURN_ORDER
  });
});

// Attack the enemy hero for 3 damage.
test(`WARCRY(CORE_035)`, () => {
  const CARD_ID = 'CORE_035';
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '1' };
  const G = { health: { '0': 30, '1': 30 }, turnOrder: TURN_ORDER };
  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({ health: { '0': 27, '1': 30 }, turnOrder: TURN_ORDER });
});

test(`WARCRY(CORE_036)`, () => {
  const CARD_ID = 'CORE_036';
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    health: { '0': 30, '1': 30 },
    playerCanBeAttacked: { '0': false, '1': false },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': null },
    turnOrder: TURN_ORDER
  };
  initCoreWarcry(G, ctx, CARD_ID);
  expect(G).toEqual({
    health: { '0': 30, '1': 30 },
    playerCanBeAttacked: { '0': false, '1': true },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': createWarcryObject(CARD_ID) },
    turnOrder: TURN_ORDER
  });
});

// Gift all your other minions with a permanent +1/+1 stat boost.
test(`WARCRY(CORE_041)`, () => {
  const CARD_ID = 'CORE_041';
  const CARD_MINION = getCardByID(CARD_ID);
  const OTHER_MINION1 = getCardByID('CORE_014');
  const OTHER_MINION2 = getCardByID('CORE_024');
  const ctx = { currentPlayer: '0' };
  const TURN_ORDER = ['0', '1'];

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
          currentAttack: CARD_MINION.attack,
          currentHealth: CARD_MINION.health,
          hasGuard: false,
          minionData: CARD_MINION,
          totalAttack: CARD_MINION.attack,
          totalHealth: CARD_MINION.health
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
    },
    turnOrder: TURN_ORDER
  };

  initCoreWarcry(G, ctx, CARD_ID, 1);

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
          currentAttack: CARD_MINION.attack,
          currentHealth: CARD_MINION.health,
          hasGuard: false,
          minionData: CARD_MINION,
          totalAttack: CARD_MINION.attack,
          totalHealth: CARD_MINION.health
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
    },
    turnOrder: TURN_ORDER
  });
});
