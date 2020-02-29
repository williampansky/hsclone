import getCardByID from 'lib/utils/get-card-by-id';

/**
 * Creates an object with Spell-specific key:values.
 * @param {string} cardId
 * @returns {{
 *  id: string
 *  amount: number
 *  spellType: string
 *  spellContext: string
 *  targetingArrowText: string
 * }}
 */
const createSpellObject = cardId => {
  const CARD_OBJECT = getCardByID(cardId);
  return {
    id: CARD_OBJECT.id,
    amount: CARD_OBJECT.warcryNumber,
    spellType: CARD_OBJECT.spellType,
    spellContext: CARD_OBJECT.spellContext,
    targetingArrowText: CARD_OBJECT.targetingArrowText
  };
};

export default createSpellObject;
