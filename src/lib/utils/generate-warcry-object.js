import { getCardByID } from './get-card-by-id';

export const generateWarcryObject = cardId => {
  const CARD_OBJECT = getCardByID(cardId);
  return {
    id: CARD_OBJECT.id,
    attack: CARD_OBJECT.warcryObjectNumber,
    spellType: CARD_OBJECT.spellType,
    targetingArrowText: CARD_OBJECT.targetingArrowText
  };
};
