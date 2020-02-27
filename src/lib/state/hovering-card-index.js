const hoveringCardIndex = {
  __DATA_MODEL: {
    '0': null,
    '1': null
  },

  /**
   * Sets the value of `hoveringCardIndex` if `index` is provided;
   * otherwise sets the value to null.
   *
   * @param {{}} G
   * @param {{}} ctx
   * @param {number} index
   */
  set: (G, ctx, index) => {
    const { selectedCardIndex } = G;
    const { currentPlayer } = ctx;

    if (selectedCardIndex[currentPlayer] !== null)
      G.hoveringCardIndex[currentPlayer] = null;

    G.hoveringCardIndex[currentPlayer] = index;
  },

  /**
   * Resets the currentPlayer's `hoveringCardIndex` value.
   *
   * @param {{}} G
   * @param {{}} ctx
   */
  reset: (G, ctx) => {
    const { currentPlayer } = ctx;
    G.hoveringCardIndex[currentPlayer] = null;
  }
};

export default hoveringCardIndex;
