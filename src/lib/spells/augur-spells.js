import { add, subtract } from 'mathjs';

export const castAugurSpells = (G, ctx, player, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_043':    return castCORE_043(G, ctx, player);
    case 'CORE_044':    return castCORE_044(G, ctx, player);
    default:            return null;
  }
};

/**
 * Gain 1 Energy Point this turn only.
 * @requires mathjs::add()
 */
export const castCORE_043 = (G, ctx, player) => {
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
export const castCORE_044 = (G, ctx, player) => {
  const PLAY_ORDER = G.turnOrder;
  const CURRENT_PLAYER = ctx.currentPlayer;
  const PREVIOUS_PLAYER = PLAY_ORDER.find(player => player !== CURRENT_PLAYER);

  switch (player) {
    case 'value':
      // const newTotal = subtract(Number(current), 1);

      break;

    default:
      // subtract attack from player's health value
      const newHealth = subtract(G.health[player], 1);
      G.health[player] = newHealth;
      break;
  }
};
