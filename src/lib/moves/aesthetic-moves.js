export const hoverOverCardInHand = (G, ctx, index) => {
  if (index === null) {
    G.hoveringCardIndex[0] = index;
    G.hoveringCardIndex[1] = index;
  } else {
    Number(ctx.currentPlayer) === 0
      ? (G.hoveringCardIndex[0] = index)
      : (G.hoveringCardIndex[1] = index);
  }
};

export const selectPlayableCard = (G, ctx, card, index) => {
  selectPlayableCardIndex(G, ctx, index);
  selectPlayableCardObject(G, ctx, card);
};

export const selectPlayableCardIndex = (G, ctx, index) => {
  if (index === null) {
    G.selectedCardIndex[0] = index;
    G.selectedCardIndex[1] = index;
  } else {
    Number(ctx.currentPlayer) === 0
      ? (G.selectedCardIndex[0] = index)
      : (G.selectedCardIndex[1] = index);
  }
};

export const selectPlayableCardObject = (G, ctx, card) => {
  if (card === null) {
    G.selectedCardObject[0] = card;
    G.selectedCardObject[1] = card;
  } else {
    Number(ctx.currentPlayer) === 0
      ? (G.selectedCardObject[0] = card)
      : (G.selectedCardObject[1] = card);
  }
};
