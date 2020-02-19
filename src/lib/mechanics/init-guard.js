import enableMinionHasGuard from 'lib/moves/minion-moves';

const initGuard = (G, ctx, index) => {
  const { currentPlayer } = ctx;
  return enableMinionHasGuard(G, currentPlayer, index);
};

export default initGuard;
