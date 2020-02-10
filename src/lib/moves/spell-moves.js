import { castTheOrb } from '../spells/cast-the-orb';
import { selectPlayableCard } from '../moves/aesthetic-moves';

export const playSpellByCardId = (G, ctx, cardId, player) => {
  // prettier-ignore
  switch (cardId) {
    case 'GAME_001':    return castTheOrb(G, ctx);
    default:            return null;
  }
};

export const attackPlayerWithSpell = (G, ctx, player) => {
  const { selectedCardIndex } = G;
  const { currentPlayer } = ctx;
  playSpellByCardId(G, ctx, selectedCardIndex[currentPlayer], player);
  selectPlayableCard(G, ctx, null, null);
};
