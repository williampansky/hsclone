import attackMinion from 'lib/moves/attack-minion';
import attackMinionWithPlayer from 'lib/moves/attack-minion-with-player';
import attackPlayer from 'lib/moves/attack-player';
import attackPlayerWithPlayer from 'lib/moves/attack-player-with-player';
import castTargetedWarcryEffect from 'lib/moves/cast-targeted-warcry-effect';
import deselectMinion from 'lib/moves/deselect-minion';
import discardCard from 'lib/moves/discard-card';
import drawCard from 'lib/moves/draw-card';
import forfeitGame from 'lib/moves/forfeit-game';
import hoverCard from 'lib/moves/hover-card';
import initClassSkill from './moves/init-class-skill';
import initPlayerWeaponAttack from 'lib/moves/init-player-weapon-attack';
import playCard from 'lib/moves/play-card';
import selectCard from 'lib/moves/select-card';
import selectMinion from 'lib/moves/select-minion';
import terminatePlayerWeaponAttack from 'lib/moves/terminate-player-weapon-attack';
import boards from './state/boards';

export default {
  attackMinion: {
    client: false,
    move: (G, ctx, index) => {
      return attackMinion(G, ctx, index);
    }
  },
  attackMinionWithPlayer: {
    client: false,
    move: (G, ctx, index) => {
      return attackMinionWithPlayer(G, ctx, index);
    }
  },
  attackPlayer: {
    client: false,
    move: (G, ctx, index) => {
      return attackPlayer(G, ctx, index);
    }
  },
  attackPlayerWithPlayer: {
    client: false,
    move: (G, ctx) => {
      return attackPlayerWithPlayer(G, ctx);
    }
  },
  castTargetedWarcryEffect: {
    client: false,
    move: (G, ctx, playerCtx, targetCtx, targetIdx) => {
      return castTargetedWarcryEffect(G, ctx, playerCtx, targetCtx, targetIdx);
    }
  },
  deselectMinion: {
    client: false,
    move: (G, ctx) => {
      return deselectMinion(G, ctx);
    }
  },
  discardCard: {
    client: false,
    move: (G, ctx, player, amountToDiscard) => {
      return discardCard(G, ctx, player, amountToDiscard);
    }
  },
  drawCard: {
    client: false,
    move: (G, ctx, player, amountToDraw) => {
      return drawCard(G, ctx, player, amountToDraw);
    }
  },
  forfeitGame: {
    client: false,
    move: (G, ctx, player) => {
      return forfeitGame(G, ctx, player);
    }
  },
  giveMinionStampede: {
    client: false,
    move: (G, ctx, index) => {
      return boards.enableCanAttack(G, ctx.currentPlayer, index);
    }
  },
  hoverCard: {
    client: false,
    move: (G, ctx, index) => {
      return hoverCard(G, ctx, index);
    }
  },
  initClassSkill: {
    client: false,
    move: (G, ctx) => {
      return initClassSkill(G, ctx);
    }
  },
  initPlayerWeaponAttack: {
    client: false,
    move: (G, ctx) => {
      return initPlayerWeaponAttack(G, ctx);
    }
  },
  selectCard: {
    client: false,
    move: (G, ctx, cardObject, index) => {
      return selectCard(G, ctx, cardObject, index);
    }
  },
  selectMinion: {
    client: false,
    move: (G, ctx, cardObject, index) => {
      return selectMinion(G, ctx, cardObject, index);
    }
  },
  playCard: {
    client: false,
    move: (G, ctx, index, uuid, cardId) => {
      return playCard(G, ctx, index, uuid, cardId);
    }
  },
  terminatePlayerWeaponAttack: {
    client: false,
    move: (G, ctx, index, uuid, cardId) => {
      return terminatePlayerWeaponAttack(G, ctx);
    }
  }
};
