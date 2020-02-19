import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createWarcryObject from 'lib/creators/create-warcry-object';
import CAST_WARCRY_CORE_001 from 'lib/warcrys/objects/CAST_WARCRY_CORE_001';

/**
 * player
 */
test(`heals player with CORE_006 warcry`, () => {
  const CARD_ID = 'CORE_006';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    health: {
      '0': 25,
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
      '0': 27,
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
  });
});

/**
 * heals minion
 */
test(`heals a minion with CORE_006 warcry`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = createBoardSlotObject('CORE_034');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [
        MINION_OBJECT,
        {
          ...TARGET_MINION_OBJECT,
          currentHealth: 4
        }
      ],
      '1': []
    },
    warcryObject: {
      '0': WARCRY_OBJECT,
      '1': null
    },
    turnOrder: TURN_ORDER
  };

  CAST_WARCRY_CORE_001(G, ctx, 'MINION', 1);

  expect(G).toEqual({
    boards: {
      '0': [
        MINION_OBJECT,
        {
          ...TARGET_MINION_OBJECT,
          currentHealth: 6
        }
      ],
      '1': []
    },
    warcryObject: {
      '0': WARCRY_OBJECT,
      '1': null
    },
    turnOrder: TURN_ORDER
  });
});
