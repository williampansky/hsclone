import attackMinion from 'moves/attack-minion';
import attackPlayer from 'moves/attack-player';
import discardCard from 'moves/discard-card';
import drawCard from 'moves/draw-card';
import forfeitGame from 'moves/forfeit-game';
import hoverCard from 'moves/hover-card';
import playCard from 'moves/play-card';
import selectCard from 'moves/select-card';
import selectMinion from 'moves/select-minion';

export default {
  attackMinion: {
    client: false,
    move: (G, ctx, index) => {
      return attackMinion(G, ctx, index);
    }
  },
  attackPlayer: {
    client: false,
    move: (G, ctx, index) => {
      return attackPlayer(G, ctx, index);
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
  hoverCard: {
    client: false,
    move: (G, ctx, index) => {
      return hoverCard(G, ctx, index);
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
    move: (G, ctx, index, cardId) => {
      return playCard(G, ctx, index, cardId);
    }
  }
};
