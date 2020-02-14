import {
  hoverOverCardInHand,
  selectPlayableCard
} from './moves/aesthetic-moves';
import { playMinionCard } from './cards/playMinionCard';
import {
  addCardToHand,
  deincrementDeckCount,
  deincrementHandCount,
  drawCard,
  drawCards,
  incrementDeckCount,
  incrementHandCount,
  playSpellCard
} from './moves/card-moves';
import {
  disableMinionCanAttack,
  disableMinionCanBeAttacked,
  enableMinionCanAttack,
  enableMinionCanBeAttacked,
  selectAttackingMinion
} from './moves/minion-moves';
import { attackPlayerWithSpell } from './moves/spell-moves';
import { castWarycrySpell } from './moves/warcry-moves';
import { attackMinionWithMinion } from './minions/attackMinionWithMinion';
import { attackPlayerWithMinion } from './minions/attackPlayerWithMinion';

/**
 * Note that moves marked `client: false` are executed on the server.
 */
export default {
  addCardToHand: {
    client: false,
    move: (G, ctx, player, cardId) => {
      return addCardToHand(G, ctx, player, cardId);
    }
  },

  drawCard: {
    client: false,
    move: (G, player) => {
      return drawCard(G, player);
    }
  },

  drawCards: {
    client: false,
    move: (G, player, numberOfCards) => {
      return drawCards(G, player, numberOfCards);
    }
  },

  playMinionCard: {
    client: false,
    move: (G, ctx, slotNumber, cardId, cardIndex) => {
      return playMinionCard(G, ctx, slotNumber, cardId, cardIndex);
    }
  },

  playSpellCard: {
    client: false,
    move: (G, ctx, card, cost = 0, target = null) => {
      return playSpellCard(G, ctx, card, cost, target);
    }
  },

  enableMinionCanAttack: {
    client: false,
    move: (G, player, slotNumber) => {
      return enableMinionCanAttack(G, player, slotNumber);
    }
  },

  disableMinionCanAttack: {
    client: false,
    move: (G, player, slotNumber) => {
      return disableMinionCanAttack(G, player, slotNumber);
    }
  },

  enableMinionCanBeAttacked: {
    client: false,
    move: (G, player, slotNumber) => {
      return enableMinionCanBeAttacked(G, player, slotNumber);
    }
  },

  disableMinionCanBeAttacked: {
    client: false,
    move: (G, player, slotNumber) => {
      return disableMinionCanBeAttacked(G, player, slotNumber);
    }
  },

  selectAttackingMinion: {
    client: false,
    move: (G, ctx, minion, index) => {
      return selectAttackingMinion(G, ctx, minion, index);
    }
  },

  attackMinionWithMinion: {
    client: false,
    move: (G, ctx, index) => {
      return attackMinionWithMinion(G, ctx, index);
    }
  },

  attackPlayerWithMinion: {
    client: false,
    move: (G, ctx) => {
      return attackPlayerWithMinion(G, ctx);
    }
  },

  attackPlayerWithSpell: {
    client: false,
    move: (G, ctx, player) => {
      return attackPlayerWithSpell(G, ctx, player);
    }
  },

  castWarycrySpell: {
    client: false,
    move: (G, ctx, warcry, targetContext, target) => {
      return castWarycrySpell(G, ctx, warcry, targetContext, target);
    }
  },

  // energy manipulations
  // setCurrentEnergy: (G, ctx, player, amount) => setCurrentEnergy(G, ctx, player, amount),
  // setTotalEnergy: (G, ctx, player, amount) => setTotalEnergy(G, ctx, player, amount),

  // deck & hand count manipulations
  deincrementDeckCount: (G, player) => deincrementDeckCount(G, player),
  deincrementHandCount: (G, player) => deincrementHandCount(G, player),
  incrementDeckCount: (G, player) => incrementDeckCount(G, player),
  incrementHandCount: (G, player) => incrementHandCount(G, player),

  // interaction moves; indicating the opponent player's hover/selection
  hoverOverCardInHand: {
    client: false,
    move: (G, ctx, index) => {
      return hoverOverCardInHand(G, ctx, index);
    }
  },

  selectPlayableCard: {
    client: false,
    move: (G, ctx, card, index) => {
      return selectPlayableCard(G, ctx, card, index);
    }
  }
};
