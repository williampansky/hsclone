/**
 * Sets the value of `hoveringCardIndex` if `index` is provided;
 * otherwise sets the value to null.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
export const hoverOverCardInHand = (G, ctx, index) => {
  if (G.selectedCardIndex[ctx.currentPlayer] !== null)
    G.hoveringCardIndex[ctx.currentPlayer] = null;

  Number(ctx.currentPlayer) === 0
    ? (G.hoveringCardIndex[0] = index)
    : (G.hoveringCardIndex[1] = index);
};

/**
 * Sets the `selectedCardIndex` and `selectedCardObject`
 * of the current player's card.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 * @requires selectPlayableCardIndex()
 * @requires selectPlayableCardObject()
 */
export const selectPlayableCard = (G, ctx, card, index) => {
  selectPlayableCardIndex(G, ctx, index);
  selectPlayableCardObject(G, ctx, card);
};

/**
 * Sets the value of `selectPlayableCardIndex` if `index` is provided;
 * otherwise sets the value to null.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
export const selectPlayableCardIndex = (G, ctx, index) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedCardIndex[0] = index)
    : (G.selectedCardIndex[1] = index);
};

/**
 * Sets the value of `selectPlayableCardObject` if `card` is provided;
 * otherwise sets the value to null.
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} card
 */
export const selectPlayableCardObject = (G, ctx, card) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedCardObject[0] = card)
    : (G.selectedCardObject[1] = card);
};
