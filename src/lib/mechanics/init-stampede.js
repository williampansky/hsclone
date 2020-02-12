import { enableMinionCanAttack } from '../moves/minion-moves';

export const initStampede = (G, ctx, index) => {
  const { currentPlayer } = ctx;
  return enableMinionCanAttack(G, currentPlayer, index);
};
