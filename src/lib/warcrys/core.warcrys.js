import { getCardByID } from '../utils/get-card-by-id';

export const initCoreWarcry = (G, ctx, index, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_012':  return CORE_012(G, ctx, index, cardId);
    default:          break;
  }
};

const CORE_012 = (G, ctx, index, cardId) => {
  if (G.boards[ctx.currentPlayer].length === 7) return; // max minions
  G.boards[ctx.currentPlayer].push({
    canAttack: false,
    canBeAttacked: false,
    hasGuard: false,
    minionData: getCardByID(`${cardId}a`)
  });
};
