const esmImport = require('esm')(module);
const { Client } = esmImport('boardgame.io/client');
const { HSclone } = esmImport('../../lib/game');
const { generateBoardSlotObject } = esmImport(
  '../../lib/utils/generate-board-slot'
);

test(`runs moves.selectAttackingMinion to select a minion`, () => {
  const CARD_ID = 'CORE_027';
  const SLOT_OBJECT = generateBoardSlotObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];

  // set up a specific board scenario
  const HScloneScenario = {
    ...HSclone,
    setup: () => ({
      ...HSclone.setup(),
      boards: {
        '0': [SLOT_OBJECT],
        '1': []
      },
      turnOrder: TURN_ORDER
    })
  };

  // initialize the client w/ custom scenario
  const client = Client({
    game: HScloneScenario
  });

  // execute moves
  client.moves.selectAttackingMinion(SLOT_OBJECT, 0);

  // get the latest game state
  const { G } = client.store.getState();

  // compare the game state to expectation
  expect(G).toEqual({
    ...G,
    selectedMinionIndex: {
      '0': 0,
      '1': null
    },
    selectedMinionObject: {
      '0': SLOT_OBJECT,
      '1': null
    },
    turnOrder: TURN_ORDER
  });
});
