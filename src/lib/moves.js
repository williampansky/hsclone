import attackMinion from 'lib/moves/attack-minion';
import attackPlayer from 'lib/moves/attack-player';
import discardCard from 'lib/moves/discard-card';
import drawCard from 'lib/moves/draw-card';
import hoverCard from 'lib/moves/hover-card';
import playCard from 'lib/moves/play-card';
import selectCard from 'lib/moves/select-card';
import selectMinion from 'lib/moves/select-minion';

/**
 * Note that moves marked `client: false` are executed on the server.
 */
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
    move: (G, player, amountToDiscard) => {
      return discardCard(G, player, amountToDiscard);
    }
  },
  drawCard: {
    client: false,
    move: (G, player, amountToDraw) => {
      return drawCard(G, player, amountToDraw);
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
