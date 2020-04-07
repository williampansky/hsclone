import counts from 'lib/state/counts';
import drawCard from 'lib/moves/draw-card';
import GAME_CONFIG from 'config/game.config';
import getCardByID from 'lib/utils/get-card-by-id';
import logMessage from 'lib/match-history/log-message';

export default {
  onBegin: (G, ctx) => {
    const FIRST_PLAYER = G.turnOrder[0];
    const SECOND_PLAYER = G.turnOrder[1];

    logMessage(G, ctx, 'matchStart');

    if (!GAME_CONFIG.matchConfig.enableInitHandsStage) {
      // initHandsStage(G);
    } else {
      // Draw three cards from the first player's deck into their hand.
      drawCard(G, ctx, FIRST_PLAYER, 3);

      // Draw four cards from the first player's deck into their hand;
      // they get four cards since they are not the starting player.
      drawCard(G, ctx, SECOND_PLAYER, 4);

      // Give the second player the Energy card (The Orb), which when
      // played gives that player an additional energy point for the turn.
      counts.incrementHand(G, SECOND_PLAYER);
      G.players[SECOND_PLAYER].hand.push(getCardByID('GAME_001'));
    }
  },

  // End phase when both player's have their starting hands
  // prettier-ignore
  endIf: G => (
    G.players[G.turnOrder[0]].hand.length === 3 &&
    G.players[G.turnOrder[1]].hand.length === 5
  ),

  next: 'play'
};
