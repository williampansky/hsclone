import getCardByID from 'lib/utils/get-card-by-id';

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
    case 'CORE_019':  return CORE_019(G, player, cardId);
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
  const MINION_TYPE = getCardByID(cardId).type;

  const transformEach = (G, player, index) => {
    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: G.boards[player][index].currentAttack - 1,
      totalAttack: G.boards[player][index].totalAttack - 1
    };
  };

  for (let i = 0; i < G.boards[player].length; i++) {
    if (G.boards[player][i].minionData.id !== cardId) {
      if (G.boards[player][i].minionData.type === MINION_TYPE)
        transformEach(G, player, i);
    }
  }
};

/**
 * Your other minions have +1 Attack.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 */
const CORE_019 = (G, player, cardId) => {
  const transformEach = (G, player, index) => {
    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: G.boards[player][index].currentAttack - 1,
      totalAttack: G.boards[player][index].totalAttack - 1
    };
  };

  for (let i = 0; i < G.boards[player].length; i++) {
    if (G.boards[player][i].minionData.id !== cardId)
      transformEach(G, player, i);
  }
};

export default recalculateCoreBoon;
