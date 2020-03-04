import drawCard from 'lib/moves/draw-card';
import health from 'lib/state/health';

/**
 * Trade two health points to draw a card.
 * @param {{}} G
 * @param {{}} ctx
 */
const tradeHealthForCard = (G, ctx, numToSub = 2, numToDraw = 1) => {
  const { currentPlayer } = ctx;
  health.subtract(G, currentPlayer, numToSub);
  return drawCard(G, ctx, currentPlayer, numToDraw);
};

export default tradeHealthForCard;
