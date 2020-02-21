import createMinionObject from 'lib/creators/create-minion-object';
import createWarcryObject from 'lib/creators/create-warcry-object';

test(`should generate the relevant warcryObject based on provided cardId param`, () => {
  const CARD_ID = 'CORE_001';
  const expectedMinionData = createMinionObject(CARD_ID);
  const result = createWarcryObject(CARD_ID);

  expect(result).toEqual({
    id: expectedMinionData.id,
    amount: expectedMinionData.warcryNumber,
    spellType: expectedMinionData.spellType,
    spellContext: expectedMinionData.spellContext,
    targetingArrowText: expectedMinionData.targetingArrowText
  });
});
