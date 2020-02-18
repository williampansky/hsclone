import initDecksPhase from 'phases/initDecks';
import initHandsPhase from 'phases/initHands';
import moves from 'moves';
import playPhase from 'phases/play';
import state from 'state';
import stripSecrets from 'strip-secrets';
import turns from 'turns';

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
    initDecks: initDecksPhase,
    initHands: initHandsPhase,
    play: playPhase
  },

  // End game if either player's health reaches zero
  // prettier-ignore
  endIf: G => (
    G.health[G.turnOrder[0]] === 0 ||
    G.health[G.turnOrder[1]] === 0
  )
};
