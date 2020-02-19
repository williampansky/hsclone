import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createWarcryObject from 'lib/creators/create-warcry-object';
import CAST_WARCRY_CORE_001 from 'lib/warcrys/objects/CAST_WARCRY_CORE_006';

/**
 * player
 */
test(`attacks a player with CORE_001 warcry`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
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
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = createBoardSlotObject('CORE_002');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
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
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = createBoardSlotObject('CORE_003');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
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
