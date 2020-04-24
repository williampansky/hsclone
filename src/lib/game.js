import initDecksPhase from 'lib/phases/initDecks';
import initHandsPhase from 'lib/phases/initHands';
import moves from 'lib/moves';
import playPhase from 'lib/phases/play';
import state from 'lib/state';
import stripSecrets from 'lib/strip-secrets';
import turns from 'lib/turns';

/**
 * @see https://boardgame.io/documentation/#/
 */
export const HSclone = {
  name: 'HSclone',
  setup: () => state,
  moves: moves,

  /**
   * This method uses the `stripSecrets` function to hide
   * the opponent player's hand and deck data from your client.
   * @requires stripSecrets
   * @see https://boardgame.io/documentation/#/secret-state
   */
  playerView: (G, ctx, playerID) => {
    return stripSecrets(G, playerID);
  },

  /**
   * @name turn
   * @memberof HSclone
   * @see https://boardgame.io/documentation/#/turn-order
   */
  turn: turns,

  /**
   * Most games beyond very simple ones tend to have different behaviors at
   * various phases. A game might have a phase at the beginning where players
   * are drafting cards before entering a playing phase, for example.
   *
   * @name phases
   * @memberof HSclone
   * @see https://boardgame.io/documentation/#/phases
   */
  phases: {
    // initPlayers: initDecksPhase,
    initDecks: initDecksPhase,
    initHands: initHandsPhase,
    play: playPhase
  },

  // End game if either player's health reaches zero
  endIf: G => G.winner !== null,

  ai: {
    enumerate: (G, ctx) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i] });
        }
      }
      return moves;
    }
  }
};
