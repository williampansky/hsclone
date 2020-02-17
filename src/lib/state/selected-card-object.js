/**
 * Sets the value of `selectPlayableCardObject` if `card` is provided;
 * otherwise sets the value to null.
 * @param {{}} G
 * @param {{}} ctx
 * @param {{}} object
 */
const selectPlayableCardObject = (G, player, object) => {
  G.selectedCardObject[player] = object;
};

export default selectPlayableCardObject;
