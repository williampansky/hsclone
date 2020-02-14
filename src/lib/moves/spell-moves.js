import { castTheOrb } from '../spells/cast-the-orb';

export const playSpellByCardId = (G, ctx, cardId, player) => {
  // prettier-ignore
  switch (cardId) {
    case 'GAME_001':    return castTheOrb(G, ctx);
    default:            return null;
  }
};
