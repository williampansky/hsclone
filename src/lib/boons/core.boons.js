export const initCoreBoon = (G, player, cardId) => {
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
      minionData: {
        ...G.boards[player][index].minionData,
        attack: G.boards[player][index].minionData.attack + 1,
        health: G.boards[player][index].minionData.health + 1
      }
    };
  };

  for (let i = 0; i < G.boards[player].length; i++) {
    if (G.boards[player][i].minionData.id !== cardId)
      transformEach(G, player, i);
  }
};
