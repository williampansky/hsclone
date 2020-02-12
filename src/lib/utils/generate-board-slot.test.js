const esmImport = require('esm')(module);
const { generateBoardSlotObject } = esmImport('./generate-board-slot');
const { generateMinion } = esmImport('./generate-minion');

/**
 * generateBoardSlotObject()
 */
test(`should generate an object for a new board slot`, () => {
  const CARD_ID = 'CORE_001';
  const expectedMinionData = generateMinion(CARD_ID);
  const result = generateBoardSlotObject(CARD_ID);

  expect(result).toEqual({
    canAttack: false,
    canBeAttacked: false,
    currentAttack: expectedMinionData.attack,
    currentHealth: expectedMinionData.health,
    hasGuard: false,
    minionData: expectedMinionData,
    totalAttack: expectedMinionData.attack,
    totalHealth: expectedMinionData.health
  });
});
