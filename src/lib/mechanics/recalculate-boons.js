import recalculateCoreBoon from 'lib/boons/core.boons.recalculate';
import SET from 'enums/set.enums';

/**
 * Uses `card: { set }` nested key:value in switch statement
 * to recalculate boons from various card sets.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} card
 * @param {Number} index
 */
const recalculateBoons = (G, ctx, card, index) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);
  const { id, set } = card;

  switch (set) {
    case SET[1]:
      return recalculateCoreBoons(G, currentPlayer, otherPlayer, id, index);

    default:
      return;
  }
};

export const recalculateCoreBoons = (G, cPlayer, oPlayer, id, index) => {
  recalculateCoreBoon(G, cPlayer, id, index);
  recalculateCoreBoon(G, oPlayer, id, index);
};

export default recalculateBoons;
