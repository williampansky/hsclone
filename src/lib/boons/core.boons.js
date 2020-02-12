export const initCoreBoon = (G, player, cardId, index) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_041':  return CORE_041(G, player, cardId);
    default:          break;
  }
};

/**
 * Gift +1/+1 to all your other minions.
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
