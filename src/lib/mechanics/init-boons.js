import { initCoreBoon } from '../boons/core.boons';
import SET from '../../enums/set.enums';

/**
 * Uses `card: { set }` nested key:value in switch statement
 * to initiate boons from various card sets.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} card
 * @param {Number} index
 */
export const initBoons = (G, ctx, card, index) => {
  const { currentPlayer } = ctx;
  const { id, set } = card;

  switch (set) {
    case SET[1]:
      return initCoreBoon(G, currentPlayer, id, index);

    default:
      return;
  }
};
