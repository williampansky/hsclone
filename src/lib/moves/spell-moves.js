const castTheOrb = (G, ctx) => {
  return G.energy[ctx.currentPlayer].current++;
};

export const playSpellByCardId = (G, ctx, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'THE_ORB':   return castTheOrb(G, ctx);
    default:          return null;
  }
};
