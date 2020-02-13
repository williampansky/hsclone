const esmImport = require('esm')(module);
const { generateMinion } = esmImport('./generate-minion');
const { generateWarcryObject } = esmImport('./generate-warcry-object');

test(`should generate the relevant warcryObject based on provided cardId param`, () => {
  const CARD_ID = 'CORE_001';
  const expectedMinionData = generateMinion(CARD_ID);
  const result = generateWarcryObject(CARD_ID);

  expect(result).toEqual({
    id: expectedMinionData.id,
    attack: expectedMinionData.warcryObjectNumber,
    spellType: expectedMinionData.spellType,
    targetingArrowText: expectedMinionData.targetingArrowText
  });
});
