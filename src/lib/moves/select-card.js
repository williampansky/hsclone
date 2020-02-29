import selectedCardIndex from 'lib/state/selected-card-index';
import selectedCardObject from 'lib/state/selected-card-object';
import boards from 'lib/state/boards';
import TYPE from 'enums/type.enums';
import SPELLTYPE from 'enums/spellType.enums';

/**
 * Sets the `selectedCardIndex` and `selectedCardObject`
 * of the current player's card.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} cardObject
 * @param {number} index
 * @requires selectedCardObject
 * @requires selectedCardObject
 */
const selectCard = (G, ctx, cardObject = null, index = null) => {
  const { turnOrder } = G;
  const { currentPlayer } = ctx;
  const otherPlayer = turnOrder.find(p => p !== currentPlayer);

  selectedCardIndex.set(G, currentPlayer, index);
  selectedCardObject.set(G, currentPlayer, cardObject);

  if (cardObject === null) return;
  const { id, spellType, type } = cardObject;
  if (type === TYPE[3] && spellType === SPELLTYPE[2]) {
  }
};

export default selectCard;
