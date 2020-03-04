import { Client } from 'boardgame.io/client';
import { HSclone } from 'lib/game';

test(`should setup both player's decks and move to initHands phase`, () => {
  // set up a specific board scenario
  const HScloneScenario = {
    ...HSclone,
    phases: {
      ...HSclone.phases,
      initHands: {}
    }
  };

  // initialize the client w/ custom scenario
  const client = Client({
    game: HScloneScenario
  });

  // get the latest game state
  const { G, ctx } = client.store.getState();

  // the game state should look like this now
  expect(G.players[ctx.playOrder['0']].deck.length).toEqual(30);
  expect(G.players[ctx.playOrder['1']].deck.length).toEqual(30);
  expect(ctx.phase).toEqual('initHands');
});
