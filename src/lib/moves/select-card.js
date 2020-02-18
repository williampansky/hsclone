import selectedCardIndex from 'state/selected-card-index';
import selectedCardObject from 'state/selected-card-object';

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
  const { currentPlayer } = ctx;
  selectedCardIndex.set(G, currentPlayer, index);
  selectedCardObject.set(G, currentPlayer, cardObject);
};

export default selectCard;
