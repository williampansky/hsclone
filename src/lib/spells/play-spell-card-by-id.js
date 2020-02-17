import castTheOrb from 'lib/spells/cast-the-orb';

const playSpellByCardId = (G, ctx, cardId, target = null) => {
  // prettier-ignore
  switch (cardId) {
    case 'GAME_001':    return castTheOrb(G, ctx);
    default:            return null;
  }
};

export default playSpellByCardId;
