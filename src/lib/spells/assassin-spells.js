import { add, subtract } from 'mathjs';

export const castAssassinSpells = (G, ctx, cardId, player) => {
  // prettier-ignore
  switch (cardId) {
    case 'CORE_053':    return castCORE_053(G, ctx, player);
    case 'CORE_055':    return castCORE_055(G, ctx, player);
    case 'CORE_056':    return castCORE_056(G, ctx, player);
    case 'CORE_057':    return castCORE_057(G, ctx, player);
    case 'CORE_058':    return castCORE_058(G, ctx, player);
    case 'CORE_060':    return castCORE_060(G, ctx, player);
    default:            return null;
  }
};

/**
 * Deal 2 damage.
 */
export const castCORE_053 = (G, ctx, player) => {
  console.log('castCORE_053');
};

/**
 * Deal 1 damage to a selected target.
 */
export const castCORE_055 = (G, ctx, player) => {
  console.log('castCORE_055');
};

/**
 * Change a minion's Health to 1.
 */
export const castCORE_056 = (G, ctx, player) => {
  console.log('castCORE_056');
};

/**
 * Summon a random Beast Companion.
 */
export const castCORE_057 = (G, ctx, player) => {
  console.log('castCORE_057');
};

/**
 * Deal 3 damage.
 */
export const castCORE_058 = (G, ctx, player) => {
  console.log('castCORE_058');
};

/**
 * Deal 3 damage to two random enemy minions.
 */
export const castCORE_060 = (G, ctx, player) => {
  console.log('castCORE_060');
};
