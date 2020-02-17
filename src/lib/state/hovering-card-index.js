/**
 * Sets the value of `hoveringCardIndex` if `index` is provided;
 * otherwise sets the value to null.
 * @param {{}} G
 * @param {{}} ctx
 * @param {number} index
 */
const setHoveringCardIndex = (G, ctx, index = null) => {
  const { selectedCardIndex } = G;
  const { currentPlayer } = ctx;

  if (selectedCardIndex[currentPlayer] !== null)
    G.hoveringCardIndex[currentPlayer] = null;

  G.hoveringCardIndex[currentPlayer] = index;
};

export default setHoveringCardIndex;
