import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createWarcryObject from 'lib/creators/create-warcry-object';
import castTargetedWarcry from 'lib/moves/cast-targeted-warcry';
import TARGET_CONTEXT from 'enums/target-context.enum';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

test(`attacks opponent's player with CORE_001 warcry effect`, () => {
  const CARD_ID = 'CORE_001';
  const ctx = { currentPlayer: '0' };
  const G = {
    health: { '1': 30 },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': createWarcryObject(CARD_ID) },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[2]);

  expect(G).toEqual({
    health: { '1': 29 },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  });
});

test(`attacks opponent's minion with CORE_036 warcry effect, but doesn't kill it`, () => {
  const CARD_ID = 'CORE_036';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = createBoardSlotObject('CORE_038');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: { '0': [MINION_OBJECT], '1': [TARGET_MINION_OBJECT] },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[1], 0);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT],
      '1': [{ ...TARGET_MINION_OBJECT, currentHealth: 5 }]
    },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  });
});

test(`kills opponent's minion with CORE_016 warcry effect`, () => {
  const CARD_ID = 'CORE_016';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = createBoardSlotObject('CORE_005');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: { '0': [MINION_OBJECT], '1': [TARGET_MINION_OBJECT] },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[1], 0);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT],
      '1': []
    },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  });
});

test(`heals self (player) with CORE_006 warcry effect`, () => {
  const CARD_ID = 'CORE_006';
  const ctx = { currentPlayer: '0' };
  const G = {
    health: { '0': 25 },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': createWarcryObject(CARD_ID) },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[1], WARCRY_TARGET_CONTEXT[2]);

  expect(G).toEqual({
    health: { '0': 27 },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  });
});

test(`heals opponent's player with CORE_006 warcry effect`, () => {
  const CARD_ID = 'CORE_006';
  const ctx = { currentPlayer: '0' };
  const G = {
    health: { '1': 25 },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': createWarcryObject(CARD_ID) },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[2]);

  expect(G).toEqual({
    health: { '1': 27 },
    boards: { '0': [], '1': [] },
    warcryObject: { '0': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  });
});

test(`heals friendly minion with CORE_006 warcry effect`, () => {
  const CARD_ID = 'CORE_006';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = createBoardSlotObject('CORE_038');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [MINION_OBJECT, { ...TARGET_MINION_OBJECT, currentHealth: 3 }],
      '1': []
    },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[1], WARCRY_TARGET_CONTEXT[1], 1);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT, { ...TARGET_MINION_OBJECT, currentHealth: 5 }],
      '1': []
    },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  });
});

test(`heals opponent's minion with CORE_006 warcry effect`, () => {
  const CARD_ID = 'CORE_006';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = createBoardSlotObject('CORE_038');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [MINION_OBJECT],
      '1': [{ ...TARGET_MINION_OBJECT, currentHealth: 5 }]
    },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[1], 0);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT],
      '1': [{ ...TARGET_MINION_OBJECT, currentHealth: 7 }]
    },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: ['0', '1']
  });
});
