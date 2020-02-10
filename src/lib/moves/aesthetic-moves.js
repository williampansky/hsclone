export const hoverOverCardInHand = (G, ctx, index) => {
  Number(ctx.currentPlayer) === 0
    ? (G.hoveringCardIndex[0] = index)
    : (G.hoveringCardIndex[1] = index);
};

export const selectPlayableCard = (G, ctx, index) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedCardIndex[0] = index)
    : (G.selectedCardIndex[1] = index);
};
