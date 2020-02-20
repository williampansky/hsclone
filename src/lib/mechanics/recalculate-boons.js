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
  const { currentPlayer } = ctx;
  const { id, set } = card;

  switch (set) {
    case SET[1]:
      return recalculateCoreBoon(G, currentPlayer, id, index);

    default:
      return;
  }
};

export default recalculateBoons;
