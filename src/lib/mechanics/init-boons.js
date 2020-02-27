import initCoreBoon from 'lib/boons/core.boons';
import SET from 'enums/set.enums';

/**
 * Uses `card: { set }` nested key:value in switch statement
 * to initiate boons from various card sets.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} card
 * @param {Number} index
 */
const initBoons = (G, ctx, card, index) => {
  const { currentPlayer } = ctx;
  const { id, set } = card;

  enableMinionHasBoon(G, currentPlayer, index);

  switch (set) {
    case SET[1]:
      return initCoreBoon(G, currentPlayer, id, index);

    default:
      return;
  }
};

/**
 * Enables `hasBoon` of the player's board index object.
 * @param {{}} G
 * @param {number} player
 * @param {number} index
 */
export const enableMinionHasBoon = (G, player, index) => {
  if (!G.boards[player][index]) return;
  return (G.boards[player][index].hasBoon = true);
};

export default initBoons;
