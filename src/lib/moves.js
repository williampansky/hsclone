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
  attackMinion,
  attackPlayer,
  disableMinionCanAttack,
  disableMinionCanBeAttacked,
  enableMinionCanAttack,
  enableMinionCanBeAttacked,
  selectAttackingMinion
} from './moves/minion-moves';
import { attackPlayerWithSpell } from './moves/spell-moves';
import { castWarycrySpell } from './moves/warcry-moves';

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
    move: (G, ctx, card, target = null) => {
      return playSpellCard(G, ctx, card, target);
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

  attackMinion: {
    client: false,
    move: (G, ctx, slotNumber) => {
      return attackMinion(G, ctx, slotNumber);
    }
  },

  attackPlayer: {
    client: false,
    move: (G, ctx, player, attack) => {
      return attackPlayer(G, ctx, player, attack);
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
  hoverOverCardInHand: (G, ctx, index) => {
    return hoverOverCardInHand(G, ctx, index);
  },
  selectPlayableCard: (G, ctx, card, index) => {
    return selectPlayableCard(G, ctx, card, index);
  }
};
