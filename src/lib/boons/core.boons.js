import getCardByID from 'lib/utils/get-card-by-id';

/**
 * Returns the corresponding Boon effect from the CORE card set.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 * @param {number} index
 */
const initCoreBoon = (G, player, cardId, index) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_003':  return CORE_003(G, player, cardId, index);
    case 'CORE_019':  return CORE_019(G, player, index);
    default:          break;
  }
};

/**
 * Your other minions of this type have +1 Attack.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 * @param {number} index
 */
const CORE_003 = (G, player, cardId, index) => {
  const MINION_RACE = getCardByID(cardId).race;

  G.boards[player].forEach((_, i) => {
    if (i === index) return; // dont buff itself
    if (G.boards[player][i].minionData.race === MINION_RACE)
      transformEach(G, player, i);
  });

  // transformation method
  function transformEach(G, player, index) {
    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: G.boards[player][index].currentAttack + 1,
      totalAttack: G.boards[player][index].totalAttack + 1
    };
  }
};

/**
 * All your other minions have +1 Attack.
 * @param {{}} G
 * @param {string} player
 * @param {number} index
 */
const CORE_019 = (G, player, index) => {
  G.boards[player].forEach((_, i) => {
    if (i === index) return;
    transformEach(G, player, i);
  });

  // transformation method
  function transformEach(G, player, index) {
    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: G.boards[player][index].currentAttack + 1,
      totalAttack: G.boards[player][index].totalAttack + 1
    };
  }
};

export default initCoreBoon;
