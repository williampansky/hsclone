const esmImport = require('esm')(module);
const { CAST_WARCRY_CORE_001 } = esmImport('./CAST_WARCRY_CORE_001');
// const WARCRY_TARGET_CONTEXT = require('../../../enums/warcry.target-context.enum');
const { generateBoardSlotObject } = esmImport(
  '../../utils/generate-board-slot'
);
const { generateWarcryObject } = esmImport(
  '../../utils/generate-warcry-object'
);

/**
 * player
 */
test(`attacks a player with CORE_001 warcry`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_OBJECT = generateBoardSlotObject(CARD_ID);
  const WARCRY_OBJECT = generateWarcryObject(CARD_ID);
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
      '0': WARCRY_OBJECT,
      '1': null
    },
    turnOrder: TURN_ORDER
  };

  CAST_WARCRY_CORE_001(G, ctx);

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
      '0': WARCRY_OBJECT,
      '1': null
    },
    turnOrder: TURN_ORDER
  });
});

/**
 * minion; doesn't kill
 */
test(`attacks a minion with CORE_001 warcry, but doesn't kill it`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_OBJECT = generateBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = generateBoardSlotObject('CORE_002');
  const WARCRY_OBJECT = generateWarcryObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [MINION_OBJECT],
      '1': [TARGET_MINION_OBJECT]
    },
    warcryObject: {
      '0': WARCRY_OBJECT,
      '1': null
    },
    turnOrder: TURN_ORDER
  };

  CAST_WARCRY_CORE_001(G, ctx, 'MINION', 0);

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
      '0': WARCRY_OBJECT,
      '1': null
    },
    turnOrder: TURN_ORDER
  });
});

/**
 * minion; kills it
 */
test(`kills a minion with the CORE_001 warcry`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_OBJECT = generateBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = generateBoardSlotObject('CORE_003');
  const WARCRY_OBJECT = generateWarcryObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [MINION_OBJECT],
      '1': [TARGET_MINION_OBJECT]
    },
    warcryObject: {
      '0': WARCRY_OBJECT,
      '1': null
    },
    turnOrder: TURN_ORDER
  };

  CAST_WARCRY_CORE_001(G, ctx, 'MINION', 0);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT],
      '1': []
    },
    warcryObject: {
      '0': WARCRY_OBJECT,
      '1': null
    },
    turnOrder: TURN_ORDER
  });
});
