import { getCardByID } from '../utils/get-card-by-id';

export const initCoreWarcry = (G, ctx, slotNumber, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_012':  return CORE_012(G, ctx, slotNumber, cardId);
    default:          break;
  }
};

const CORE_012 = (G, ctx, slotNumber, cardId) => {
  console.log(slotNumber, getCardByID(`${cardId}a`));
  if (slotNumber === 7) return; // can't summon minion into slot8
  G.boards[ctx.currentPlayer][`slot${slotNumber + 1}`] = {
    canAttack: false,
    canBeAttacked: false,
    hasGuard: false,
    minionData: getCardByID(`${cardId}a`)
  };
};
