import getCardByID from 'lib/utils/get-card-by-id';

/**
 * Creates an object with Weapon-specific key:values.
 * @param {string} cardId
 * @returns {{
 *  id: string
 *  attack: number
 *  health: number
 *  imageSrc: string
 *  targetingArrowText: string
 * }}
 */
const createWeaponObject = cardId => {
  const CARD_OBJECT = getCardByID(`${cardId}a`);
  return {
    id: CARD_OBJECT.id,
    attack: CARD_OBJECT.attack,
    health: CARD_OBJECT.health,
    imageSrc: CARD_OBJECT.imageSrc,
    name: CARD_OBJECT.name,
    rarity: CARD_OBJECT.rarity,
    set: CARD_OBJECT.set,
    targetingArrowText: CARD_OBJECT.targetingArrowText
  };
};

export default createWeaponObject;
