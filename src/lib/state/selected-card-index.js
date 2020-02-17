/**
 * Sets the value of `selectPlayableCardIndex` if `index` is provided;
 * otherwise sets the value to null.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
const selectPlayableCardIndex = (G, player, index) => {
  G.selectedCardIndex[player] = index;
};

export default selectPlayableCardIndex;
