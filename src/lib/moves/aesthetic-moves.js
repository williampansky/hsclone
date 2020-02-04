export const hoverOverCardInHand = (G, ctx, index) => {
  Number(ctx.currentPlayer) === 0
    ? (G.hoveringCard[0] = index)
    : (G.hoveringCard[1] = index);
};

export const selectPlayableCard = (G, ctx, index) => {
  Number(ctx.currentPlayer) === 0
    ? (G.selectedCard[0] = index)
    : (G.selectedCard[1] = index);
};
