const esmImport = require('esm')(module);
const { castWarycrySpell } = esmImport('./warcry-moves');
const { generateBoardSlotObject } = esmImport('../utils/generate-board-slot');

/**
 * castWarycrySpell() - ATTACK_WITH_CORE_001 (player)
 */
test(`attacks a player with CORE_001 warcry`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_OBJECT = generateBoardSlotObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    health: {
      '0': 30,
      '1': 30
    },
    boards: {
      '0': [MINION_OBJECT],
      '1': []
    },
    warcryObject: {
      '0': {
        id: 'CORE_001',
        type: 'SPELL',
        cost: 0,
        attack: 1,
        spellType: 'TARGETED',
        targetingArrowText: 'Deal 1 damage'
      },
      '1': null
    },
    turnOrder: TURN_ORDER
  };

  castWarycrySpell(G, ctx, 'PLAYER');

  expect(G).toEqual({
    health: {
      '0': 30,
      '1': 29
    },
    boards: {
      '0': [MINION_OBJECT],
      '1': []
    },
    warcryObject: {
      '0': null,
      '1': null
    },
    turnOrder: TURN_ORDER
  });
});

/**
 * castWarycrySpell() - ATTACK_WITH_CORE_001 (minion; doesn't kill)
 */
test(`attacks a minion with CORE_001 warcry, but doesn't kill it`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_OBJECT = generateBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = generateBoardSlotObject('CORE_002');
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [MINION_OBJECT],
      '1': [TARGET_MINION_OBJECT]
    },
    warcryObject: {
      '0': {
        id: 'CORE_001',
        type: 'SPELL',
        cost: 0,
        attack: 1,
        spellType: 'TARGETED',
        targetingArrowText: 'Deal 1 damage'
      },
      '1': null
    },
    turnOrder: TURN_ORDER
  };

  castWarycrySpell(G, ctx, 'MINION', 0);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT],
      '1': [
        {
          ...TARGET_MINION_OBJECT,
          currentHealth: 1
        }
      ]
    },
    warcryObject: {
      '0': null,
      '1': null
    },
    turnOrder: TURN_ORDER
  });
});

/**
 * castWarycrySpell() - ATTACK_WITH_CORE_001 (minion; kills it)
 */
test(`kills a minion with the CORE_001 warcry`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_OBJECT = generateBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = generateBoardSlotObject('CORE_003');
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [MINION_OBJECT],
      '1': [TARGET_MINION_OBJECT]
    },
    warcryObject: {
      '0': {
        id: 'CORE_001',
        type: 'SPELL',
        cost: 0,
        attack: 1,
        spellType: 'TARGETED',
        targetingArrowText: 'Deal 1 damage'
      },
      '1': null
    },
    turnOrder: TURN_ORDER
  };

  castWarycrySpell(G, ctx, 'MINION', 0);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT],
      '1': []
    },
    warcryObject: {
      '0': null,
      '1': null
    },
    turnOrder: TURN_ORDER
  });
});
