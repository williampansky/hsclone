import drawCard from 'lib/moves/draw-card';
import health from 'lib/state/health';
import playerShieldPoints from 'lib/state/player-shield-points';

/**
 * Gain a provided amount of shield points.
 * @param {{}} G
 * @param {{}} ctx
 */
export const gainShieldPoints = (G, ctx, amount = 2) => {
  const { currentPlayer } = ctx;
  return playerShieldPoints.add(G, currentPlayer, amount);
};

/**
 * Trade two health points to draw a card.
 * @param {{}} G
 * @param {{}} ctx
 */
export const tradeHealthForCard = (G, ctx, numToSub = 2, numToDraw = 1) => {
  const { currentPlayer } = ctx;
  health.subtract(G, currentPlayer, numToSub);
  return drawCard(G, ctx, currentPlayer, numToDraw);
};
