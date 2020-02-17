import selectPlayableCardIndex from 'lib/state/selected-card-index';
import selectPlayableCardObject from 'lib/state/selected-card-object';

/**
 * Sets the `selectedCardIndex` and `selectedCardObject`
 * of the current player's card.
 *
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} cardObject
 * @param {number} index
 * @requires selectPlayableCardIndex()
 * @requires selectPlayableCardObject()
 */
const selectCard = (G, ctx, cardObject = null, index = null) => {
  selectPlayableCardIndex(G, ctx, index);
  selectPlayableCardObject(G, ctx, cardObject);
};

export default selectCard;
