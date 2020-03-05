import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import createWarcryObject from 'lib/creators/create-warcry-object';
import castTargetedWarcry from 'lib/moves/cast-targeted-warcry';
import TARGET_CONTEXT from 'enums/target-context.enum';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

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
    health: { '0': 30, '1': 30 },
    boards: { '0': [MINION_OBJECT], '1': [] },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2]);
  expect(G).toEqual({
    health: { '0': 30, '1': 29 },
    boards: { '0': [MINION_OBJECT], '1': [] },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
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
    boards: { '0': [MINION_OBJECT], '1': [TARGET_MINION_OBJECT] },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[1], 0);

  expect(G).toEqual({
    boards: {
      '0': [MINION_OBJECT],
      '1': [{ ...TARGET_MINION_OBJECT, currentHealth: 1 }]
    },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  });
});

/**
 * minion; kills it
 */
test(`kills a minion with the CORE_001 warcry`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_OBJECT = createBoardSlotObject(CARD_ID);
  const TARGET_MINION_OBJECT = createBoardSlotObject('CORE_013');
  const WARCRY_OBJECT = createWarcryObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: { '0': [MINION_OBJECT], '1': [TARGET_MINION_OBJECT] },
    warcryObject: { '0': WARCRY_OBJECT, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  };

  castTargetedWarcry(G, ctx, TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[1], 0);
  expect(G).toEqual({
    boards: { '0': [MINION_OBJECT], '1': [] },
    warcryObject: { '0': null, '1': null },
    playerCanBeAttacked: { '0': false, '1': false },
    playerCanBeHealed: { '0': false, '1': false },
    turnOrder: TURN_ORDER
  });
});
