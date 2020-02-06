import {
  hoverOverCardInHand,
  selectPlayableCard
} from './moves/aesthetic-moves';
import {
  drawCard,
  playMinionCard,
  playSpellCard,
  incrementDeck,
  deincrementDeck,
  incrementHand,
  deincrementHand
} from './moves/card-moves';
import {
  enableMinionCanAttack,
  disableMinionCanAttack,
  enableMinionCanBeAttacked,
  disableMinionCanBeAttacked,
  selectMinionForAttack,
  attackMinion
} from './moves/minion-moves';

/**
 * Note that moves marked `client: false` are executed on the server.
 */
export default {
  drawCard: {
    client: false,
    move: (G, ctx, player, numberOfCards) => {
      return drawCard(G, ctx, player, numberOfCards);
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

  selectMinionForAttack: {
    client: false,
    move: (G, ctx, slotNumber) => {
      return selectMinionForAttack(G, ctx, slotNumber);
    }
  },

  attackMinion: {
    client: false,
    move: (G, ctx, slotNumber) => {
      return attackMinion(G, ctx, slotNumber);
    }
  },

  // energy manipulations
  // setCurrentEnergy: (G, ctx, player, amount) => setCurrentEnergy(G, ctx, player, amount),
  // setTotalEnergy: (G, ctx, player, amount) => setTotalEnergy(G, ctx, player, amount),

  // deck & hand count manipulations
  deincrementDeck: (G, ctx, player) => deincrementDeck(G, ctx, player),
  deincrementHand: (G, ctx, player) => deincrementHand(G, ctx, player),
  incrementDeck: (G, ctx, player) => incrementDeck(G, ctx, player),
  incrementHand: (G, ctx, player) => incrementHand(G, ctx, player),

  // interaction moves; indicating the opponent player's hover/selection
  hoverOverCardInHand: (G, ctx, index) => hoverOverCardInHand(G, ctx, index),
  selectPlayableCard: (G, ctx, index) => selectPlayableCard(G, ctx, index)
};
