import { add } from 'mathjs';

/**
 * Gain 1 Energy Point for this turn only.
 * @param {Object} G energy
 * @param {Object} ctx currentPlayer
 * @requires mathjs::add()
 */
export const castTheOrb = (G, ctx) => {
  const { energy } = G;
  const { currentPlayer } = ctx;
  const { current } = energy[currentPlayer];

  const newTotal = add(Number(current), 1);
  G.energy[ctx.currentPlayer].current = newTotal;
};
