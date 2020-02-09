import { subtract } from 'mathjs';
import { castTheOrb } from '../spells/cast-the-orb';
import { castAugurSpells } from '../spells/augur-spells';
import { selectPlayableCard } from '../moves/aesthetic-moves';
const cards = require('../../data/debug/cards.json');

export const playSpellByCardId = (G, ctx, cardId) => {
  const { cardClass } = cards[cardId];

  if (cardClass) {
    // prettier-ignore
    switch (cardClass) {
      case 'AUGUR':       return castAugurSpells(G, ctx, cardId);
      default:            return castGeneralSpell(G, ctx, cardId);
    }
  }

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
  const selectedCard = cards[selectedCardIndexObject[currentPlayer]];
  const selectedCardAttack = selectedCard.attack;

  // reset currentPlayer's selectedCardIndexObject value
  selectPlayableCard(G, ctx, null);

  // subtract attack from player's health value
  const newHealth = subtract(G.health[player], selectedCardAttack);
  G.health[player] = newHealth;
};
