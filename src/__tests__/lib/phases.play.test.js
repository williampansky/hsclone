import { Client } from 'boardgame.io/client';
import { HSclone } from 'lib/game';

test(`start the game with both player's health values at 30`, () => {
  // set up a specific board scenario
  const HScloneScenario = HSclone;

  // initialize the client w/ custom scenario
  const client = Client({
    game: HScloneScenario
  });

  // get the latest game state
  const { G, ctx } = client.store.getState();

  // the game state should look like this now
  expect(G.health['0']).toEqual(30);
  expect(G.health['1']).toEqual(30);
  expect(ctx.phase).toEqual('play');
});
