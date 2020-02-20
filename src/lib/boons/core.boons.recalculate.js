const recalculateCoreBoon = (G, player, cardId, index) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_019':  return CORE_019(G, player, cardId);
    default:          break;
  }
};

/**
 * Your other minions have +1 Attack.
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
