import { enableMinionHasGuard } from '../moves/minion-moves';

export const initGuard = (G, ctx, index) => {
  const { currentPlayer } = ctx;
  return enableMinionHasGuard(G, currentPlayer, index);
};
