import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createWarcryObject from 'lib/creators/create-warcry-object';
import castTargetedWarcry from 'lib/moves/cast-targeted-warcry';
import TARGET_CONTEXT from 'enums/target-context.enum';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

test(`heals self with CORE_006 Warcry`, () => {
  const CARD_ID = 'CORE_006';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    health: { '0': 29, '1': 30 },
    boards: { '0': [MINION_OBJECT], '1': [] },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[1]);
  expect(G).toEqual({
    health: { '0': 30, '1': 30 },
    boards: { '0': [MINION_OBJECT], '1': [] },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  });
});

test(`heals opponent with CORE_006 Warcry`, () => {
  const CARD_ID = 'CORE_006';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    health: { '0': 30, '1': 25 },
    boards: { '0': [MINION_OBJECT], '1': [] },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2]);
  expect(G).toEqual({
    health: { '0': 30, '1': 27 },
    boards: { '0': [MINION_OBJECT], '1': [] },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  });
});

test(`heals a friendly minion with CORE_006 Warcry`, () => {
  const CARD_ID = 'CORE_006';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const FRIENDLY_MINION_OBJECT = createBoardSlotObject('CORE_034');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [MINION_OBJECT, { ...FRIENDLY_MINION_OBJECT, currentHealth: 1 }],
      '1': []
    },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[1], WARCRY_TARGET_CONTEXT[1], 1);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT, { ...FRIENDLY_MINION_OBJECT, currentHealth: 3 }],
      '1': []
    },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  });
});

test(`heals an opponent's minion with CORE_006 Warcry`, () => {
  const CARD_ID = 'CORE_006';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const OPPONENT_MINION_OBJECT = createBoardSlotObject('CORE_034');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [MINION_OBJECT],
      '1': [{ ...OPPONENT_MINION_OBJECT, currentHealth: 3 }]
    },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[1], 0);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT],
      '1': [{ ...OPPONENT_MINION_OBJECT, currentHealth: 5 }]
    },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  });
});
