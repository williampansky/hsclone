import { add } from 'mathjs';

export const castAugurSpells = (G, ctx, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_043':    return castCORE_043(G, ctx);
    case 'CORE_044':    return castCORE_044(G, ctx);
    default:            return null;
  }
};

/**
 * Gain 1 Energy Point this turn only.
 * @requires mathjs::add()
 */
export const castCORE_043 = (G, ctx) => {
  const { energy } = G;
  const { currentPlayer } = ctx;
  const { current } = energy[currentPlayer];

  const newTotal = add(Number(current), 1);
  return (G.energy[ctx.currentPlayer].current = newTotal);
};

/**
 * Deal 1 damage to a selected target.
 * @requires mathjs::add()
 */
export const castCORE_044 = (G, ctx) => {
  const { energy } = G;
  const { currentPlayer } = ctx;
  const { current } = energy[currentPlayer];

  const newTotal = add(Number(current), 1);
  return (G.energy[ctx.currentPlayer].current = newTotal);
};
