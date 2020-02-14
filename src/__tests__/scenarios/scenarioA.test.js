const esmImport = require('esm')(module);
const { Client } = esmImport('boardgame.io/client');
const { HSclone } = esmImport('../../lib/game');

test(`should test a scenario`, () => {
  // set up a specific board scenario
  const HScloneScenario = {
    ...HSclone
  };

  // initialize the client w/ custom scenario
  const client = Client({
    game: HScloneScenario
  });

  // client.moves.clickCell(8);

  // get the latest game state
  const { G, ctx } = client.store.getState();
});
