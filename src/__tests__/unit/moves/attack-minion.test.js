import attackMinion from 'lib/moves/attack-minion';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';

test(`minion should attack other minion, killing each other`, () => {
  const CARD_ID = 'CORE_001';
  const ATTACKING = createBoardSlotObject(CARD_ID);
  const BEING_ATTACKED = createBoardSlotObject('CORE_001');
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [{ ...ATTACKING, canAttack: true }],
      '1': [{ ...BEING_ATTACKED, canBeAttacked: true }]
    },
    playerCanBeAttacked: { '0': false, '1': true },
    selectedMinionIndex: { '0': 0, '1': null },
    selectedMinionObject: {
      '0': { ...ATTACKING, canAttack: true },
      '1': null
    },
    turnOrder: ['0', '1']
  };

  attackMinion(G, ctx, 0);
  expect(G.boards).toEqual({ '0': [], '1': [] });
  expect(G.playerCanBeAttacked).toEqual({ '0': false, '1': false });
  expect(G.selectedMinionIndex).toEqual({ '0': null, '1': null });
  expect(G.selectedMinionObject).toEqual({ '0': null, '1': null });
});

test(`minion should attack other minion, killing itself but not the other`, () => {
  const CARD_ID = 'CORE_001';
  const ATTACKING = createBoardSlotObject(CARD_ID);
  const BEING_ATTACKED = createBoardSlotObject('CORE_002');
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [{ ...ATTACKING, canAttack: true }],
      '1': [{ ...BEING_ATTACKED, canBeAttacked: true }]
    },
    playerCanBeAttacked: { '0': false, '1': false },
    selectedMinionIndex: { '0': 0, '1': null },
    selectedMinionObject: {
      '0': { ...ATTACKING, canAttack: true },
      '1': null
    },
    turnOrder: ['0', '1']
  };

  attackMinion(G, ctx, 0);
  expect(G.boards['0']).toEqual([]);
  expect(G.boards['1']).toEqual([{ ...BEING_ATTACKED, currentHealth: 1 }]);
  expect(G.playerCanBeAttacked).toEqual({ '0': false, '1': false });
  expect(G.selectedMinionIndex).toEqual({ '0': null, '1': null });
  expect(G.selectedMinionObject).toEqual({ '0': null, '1': null });
});

test(`minion should attack other minion, killing the other but not itself`, () => {
  const CARD_ID = 'CORE_002';
  const ATTACKING = createBoardSlotObject(CARD_ID);
  const BEING_ATTACKED = createBoardSlotObject('CORE_001');
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [{ ...ATTACKING, canAttack: true }],
      '1': [{ ...BEING_ATTACKED, canBeAttacked: true }]
    },
    playerCanBeAttacked: { '0': false, '1': true },
    selectedMinionIndex: { '0': 0, '1': null },
    selectedMinionObject: {
      '0': { ...ATTACKING, canAttack: true },
      '1': null
    },
    turnOrder: ['0', '1']
  };

  attackMinion(G, ctx, 0);
  expect(G.boards['0']).toEqual([{ ...ATTACKING, currentHealth: 1 }]);
  expect(G.boards['1']).toEqual([]);
  expect(G.playerCanBeAttacked).toEqual({ '0': false, '1': false });
  expect(G.selectedMinionIndex).toEqual({ '0': null, '1': null });
  expect(G.selectedMinionObject).toEqual({ '0': null, '1': null });
});

test(`should eject if attacking minion can't attack`, () => {
  const CARD_ID = 'CORE_001';
  const ATTACKING = createBoardSlotObject(CARD_ID);
  const BEING_ATTACKED = createBoardSlotObject('CORE_002');
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [ATTACKING],
      '1': [{ ...BEING_ATTACKED, canBeAttacked: true }]
    },
    playerCanBeAttacked: { '0': false, '1': true },
    selectedMinionIndex: { '0': 0, '1': null },
    selectedMinionObject: { '0': ATTACKING, '1': null },
    turnOrder: ['0', '1']
  };

  attackMinion(G, ctx, 0);
  expect(G.boards['0']).toEqual([ATTACKING]);
  expect(G.boards['1']).toEqual([{ ...BEING_ATTACKED, canBeAttacked: true }]);
  expect(G.playerCanBeAttacked).toEqual({ '0': false, '1': true });
  expect(G.selectedMinionIndex).toEqual({ '0': 0, '1': null });
  expect(G.selectedMinionObject).toEqual({ '0': ATTACKING, '1': null });
});

test(`should eject if target minion can't be attacked`, () => {
  const CARD_ID = 'CORE_001';
  const ATTACKING = createBoardSlotObject(CARD_ID);
  const BEING_ATTACKED = createBoardSlotObject('CORE_002');
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: { '0': [{ ...ATTACKING, canAttack: true }], '1': [BEING_ATTACKED] },
    playerCanBeAttacked: { '0': false, '1': true },
    selectedMinionIndex: { '0': 0, '1': null },
    selectedMinionObject: { '0': { ...ATTACKING, canAttack: true }, '1': null },
    turnOrder: ['0', '1']
  };

  attackMinion(G, ctx, 0);
  expect(G.boards['0']).toEqual([{ ...ATTACKING, canAttack: true }]);
  expect(G.boards['1']).toEqual([BEING_ATTACKED]);
  expect(G.playerCanBeAttacked).toEqual({ '0': false, '1': true });
  expect(G.selectedMinionIndex).toEqual({ '0': 0, '1': null });
  expect(G.selectedMinionObject['0']).toEqual({
    ...ATTACKING,
    canAttack: true
  });
  expect(G.selectedMinionObject['1']).toBe(null);
});

test(`should disable canBeAttacked on all of opponent's minions after execution`, () => {
  const CARD_ID = 'CORE_001';
  const ATTACKING = createBoardSlotObject(CARD_ID);
  const BEING_ATTACKED1 = createBoardSlotObject('CORE_006');
  const BEING_ATTACKED2 = createBoardSlotObject('CORE_008');
  const BEING_ATTACKED3 = createBoardSlotObject('CORE_009');
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [{ ...ATTACKING, canAttack: true }],
      '1': [
        { ...BEING_ATTACKED1, canBeAttacked: true },
        { ...BEING_ATTACKED2, canBeAttacked: true },
        { ...BEING_ATTACKED3, canBeAttacked: true }
      ]
    },
    playerCanBeAttacked: { '0': false, '1': true },
    selectedMinionIndex: { '0': 0, '1': null },
    selectedMinionObject: { '0': { ...ATTACKING, canAttack: true }, '1': null },
    turnOrder: ['0', '1']
  };

  attackMinion(G, ctx, 1);
  expect(G.boards['0']).toEqual([]);
  expect(G.boards['1']).toEqual([
    { ...BEING_ATTACKED1, canBeAttacked: false },
    { ...BEING_ATTACKED2, canBeAttacked: false, currentHealth: 1 },
    { ...BEING_ATTACKED3, canBeAttacked: false }
  ]);
  expect(G.playerCanBeAttacked).toEqual({ '0': false, '1': false });
  expect(G.selectedMinionIndex).toEqual({ '0': null, '1': null });
  expect(G.selectedMinionObject['0']).toBe(null);
  expect(G.selectedMinionObject['1']).toBe(null);
});
