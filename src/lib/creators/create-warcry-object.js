import getCardByID from 'lib/utils/get-card-by-id';

const createWarcryObject = cardId => {
  const CARD_OBJECT = getCardByID(cardId);
  return {
    id: CARD_OBJECT.id,
    attack: CARD_OBJECT.warcryObjectNumber,
    spellType: CARD_OBJECT.spellType,
    targetingArrowText: CARD_OBJECT.targetingArrowText
  };
};

export default createWarcryObject;
