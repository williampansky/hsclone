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
    case 'CORE_003':  return CORE_003(G, player, cardId);
    case 'CORE_019':  return CORE_019(G, player, cardId);
    case 'CORE_041':  return CORE_041(G, player, cardId);
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
      currentAttack: G.boards[player][index].currentAttack + 1,
      totalAttack: G.boards[player][index].totalAttack + 1
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
      currentAttack: G.boards[player][index].currentAttack + 1,
      totalAttack: G.boards[player][index].totalAttack + 1
    };
  };

  for (let i = 0; i < G.boards[player].length; i++) {
    if (G.boards[player][i].minionData.id !== cardId)
      transformEach(G, player, i);
  }
};

/**
 * Gift all your other minions with a permanent +1/+1.
 * @param {{}} G
 * @param {string} player
 * @param {string} cardId
 */
const CORE_041 = (G, player, cardId) => {
  const transformEach = (G, player, index) => {
    G.boards[player][index] = {
      ...G.boards[player][index],
      currentAttack: G.boards[player][index].currentAttack + 1,
      currentHealth: G.boards[player][index].currentHealth + 1,
      totalAttack: G.boards[player][index].totalAttack + 1,
      totalHealth: G.boards[player][index].totalHealth + 1
    };
  };

  for (let i = 0; i < G.boards[player].length; i++) {
    if (G.boards[player][i].minionData.id !== cardId)
      transformEach(G, player, i);
  }
};

export default initCoreBoon;
