import { subtract } from 'mathjs';
import { castTheOrb } from '../spells/cast-the-orb';
import { castAugurSpells } from '../spells/augur-spells';
import { selectPlayableCard } from '../moves/aesthetic-moves';
import { getCardByID } from '../utils/get-card-by-id';

export const playSpellByCardId = (G, ctx, cardId, player) => {
  console.log(cardId, player);
  if (!cardId) return;
  const cardObj = getCardByID(cardId);
  const cardClass = cardObj && cardObj.cardClass;

  if (cardClass) {
    // prettier-ignore
    switch (cardClass) {
      case 'AUGUR':       return castAugurSpells(G, ctx, cardId, player);
      default:            return castGeneralSpell(G, ctx, cardId, player);
    }
  }
  //

  function castGeneralSpell(G, ctx, cardId) {
    // prettier-ignore
    switch (cardId) {
      case 'GAME_001':    return castTheOrb(G, ctx);
      default:            return null;
    }
  }
};

export const attackPlayerWithSpell = (G, ctx, player) => {
  const { selectedCardIndexObject } = G;
  const { currentPlayer } = ctx;
  playSpellByCardId(G, ctx, selectedCardIndexObject[currentPlayer], player);
  selectPlayableCard(G, ctx, null);
};
