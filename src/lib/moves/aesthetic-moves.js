export const hoverOverCardInHand = (G, ctx, index) => {
  Number(ctx.currentPlayer) === 0
    ? (G.hoveringCardIndexObject[0] = index)
    : (G.hoveringCardIndexObject[1] = index);
};

export const selectPlayableCard = (G, ctx, index) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedCardIndexObject[0] = index)
    : (G.selectedCardIndexObject[1] = index);
};
