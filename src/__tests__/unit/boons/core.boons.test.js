import initCoreBoon from 'lib/boons/core.boons';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';

// Your other minions of this type have +1 Attack.
test(`BOON(CORE_003)`, () => {
  const CARD_ID = 'CORE_003';
  const ctx = { currentPlayer: '0' };
  const BOON_GIVER = createBoardSlotObject(CARD_ID);
  const SAME_TYPE = createBoardSlotObject('CORE_004');
  const SOME_OTHER_MINION = createBoardSlotObject('CORE_040');
  const G = {
    boards: {
      '0': [
        SAME_TYPE, // same type as CORE_003
        BOON_GIVER, // note index is 1
        SOME_OTHER_MINION // minion that isn't same type
      ]
    }
  };

  initCoreBoon(G, ctx.currentPlayer, CARD_ID, 1);

  expect(G.boards['0'][0]).toEqual({
    ...SAME_TYPE,
    currentAttack: SAME_TYPE.currentAttack + 1,
    totalAttack: SAME_TYPE.totalAttack + 1
  });

  expect(G.boards['0'][1]).toEqual(BOON_GIVER);
  expect(G.boards['0'][2]).toEqual(SOME_OTHER_MINION);
});

// All your other minions have +1 Attack.
test(`BOON(CORE_019)`, () => {
  const CARD_ID = 'CORE_019';
  const ctx = { currentPlayer: '0' };
  const BOON_GIVER = createBoardSlotObject(CARD_ID);
  const SOME_OTHER_MINION1 = createBoardSlotObject('CORE_021');
  const SOME_OTHER_MINION2 = createBoardSlotObject('CORE_040');
  const G = {
    boards: {
      '0': [
        SOME_OTHER_MINION1,
        SOME_OTHER_MINION2,
        BOON_GIVER // note index is 2
      ]
    }
  };

  initCoreBoon(G, ctx.currentPlayer, CARD_ID, 2);

  expect(G.boards['0'][0]).toEqual({
    ...SOME_OTHER_MINION1,
    currentAttack: SOME_OTHER_MINION1.currentAttack + 1,
    totalAttack: SOME_OTHER_MINION1.totalAttack + 1
  });

  expect(G.boards['0'][1]).toEqual({
    ...SOME_OTHER_MINION2,
    currentAttack: SOME_OTHER_MINION2.currentAttack + 1,
    totalAttack: SOME_OTHER_MINION2.totalAttack + 1
  });

  expect(G.boards['0'][2]).toEqual(BOON_GIVER);
});
