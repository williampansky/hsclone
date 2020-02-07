import { castTheOrb } from '../spells/cast-the-orb';

export const playSpellByCardId = (G, ctx, cardId) => {
  // prettier-ignore
  switch (cardId) {
    case 'THE_ORB':   return castTheOrb(G, ctx);
    default:          return null;
  }
};
