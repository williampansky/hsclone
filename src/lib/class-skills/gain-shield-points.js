import playerShieldPoints from 'lib/state/player-shield-points';

/**
 * Gain a provided amount of shield points.
 *
 * @param {{}} G
 * @param {{}} ctx
 */
const gainShieldPoints = (G, ctx, amount = 2) => {
  const { currentPlayer } = ctx;
  return playerShieldPoints.add(G, currentPlayer, amount);
};

export default gainShieldPoints;
