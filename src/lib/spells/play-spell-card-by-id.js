import castTheOrb from 'lib/spells/cast-the-orb';
import initCoreSpell from 'lib/spells/core.spells';

const playSpellByCardId = (G, ctx, cardId, target = null) => {
  // prettier-ignore
  switch (cardId) {
    case 'GAME_001':    return castTheOrb(G, ctx);
    case 'CORE_129':    return initCoreSpell(G, ctx, cardId, target);
    default:            return null;
  }
};

export default playSpellByCardId;
