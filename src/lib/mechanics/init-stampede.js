import boards from 'lib/state/boards';

const initStampede = (G, ctx, index) => {
  const { currentPlayer } = ctx;
  return boards.enableCanAttack(G, currentPlayer, index);
};

export default initStampede;
