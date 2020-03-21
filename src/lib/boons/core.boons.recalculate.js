import getCardByID from 'lib/utils/get-card-by-id';
import RACE from 'enums/race.enums';

/**
 * Returns the adjustment function per the CORE cardId.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 * @param {number} index
 */
const recalculateCoreBoon = (G, player, cardId, index) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_003':  return CORE_003(G, player, cardId);

    // Provide adjacent minions with +2 Attack.
    case 'CORE_108':
      G.boards[player].forEach((slot, i) => {
        if (i === index - 1 || i === index + 1 || i === index) {
          slot.currentAttack = slot.minionData.attack;
          slot.totalAttack = slot.minionData.attack;
        }
      });
      break;
    
    case 'CORE_019':  return CORE_019(G, player, cardId);

    // <strong>Boon:</strong> Your other Creatures have +1 attack.
    case 'CORE_054':
      G.boards[player].forEach((slot, i) => {
        if (i === index) return;
        if (slot.minionData.race === RACE[1]) {
          slot.currentAttack = slot.currentAttack - 1;
          slot.totalAttack = slot.totalAttack - 1;
        }
      });
      break;

    default:          break;
  }
};

/**
 * Your other minions of this type have +1 Attack.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 */
const CORE_003 = (G, player, cardId) => {
  const MINION_RACE = getCardByID(cardId).race;

  G.boards[player].forEach((_, i) => {
    if (G.boards[player][i].minionData.race === MINION_RACE)
      transformEach(G, player, i);
  });

  // transformation method
  function transformEach(G, player, index) {
    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: G.boards[player][index].currentAttack - 1,
      totalAttack: G.boards[player][index].totalAttack - 1
    };
  }
};

/**
 * Your other minions have +1 Attack.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 */
const CORE_019 = (G, player, cardId) => {
  G.boards[player].forEach((_, i) => {
    if (G.boards[player][i].minionData.id !== cardId)
      transformEach(G, player, i);
  });

  // transformation method
  function transformEach(G, player, index) {
    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: G.boards[player][index].currentAttack - 1,
      totalAttack: G.boards[player][index].totalAttack - 1
    };
  }
};

export default recalculateCoreBoon;
