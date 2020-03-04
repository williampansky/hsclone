import { Client } from 'boardgame.io/client';
import { HSclone } from 'lib/game';
import getCardById from 'lib/utils/get-card-by-id';

test(`should select a card; nothing special`, () => {
  // set up a specific board scenario
  const HScloneScenario = HSclone;

  // initialize the client w/ custom scenario
  const client = Client({ game: HScloneScenario });

  // define state and context prior to move execution
  const PRE_G = client.store.getState().G;
  const PRE_CTX = client.store.getState().ctx;

  // execute game move
  //                                                           obj     idx
  //                                                            v       v
  client.moves.selectCard(PRE_G.players[PRE_CTX.currentPlayer].hand[1], 1);

  // get the latest game and ctx states
  const { G, ctx } = client.store.getState();

  // the game state should look like this now
  expect(G.selectedCardIndex[ctx.currentPlayer]).toBe(1);
  expect(G.selectedCardObject[ctx.currentPlayer]).toEqual(
    G.players[ctx.currentPlayer].hand[1]
  );
});

test(`should select global spell card`, () => {
  const TEST_CARD_ID = 'CORE_124';
  const TEST_CARD_OBJ = getCardById(TEST_CARD_ID);

  // set up a specific board scenario
  const HScloneScenario = {
    ...HSclone,
    setup: () => ({ ...HSclone.setup(), turnOrder: ['0', '1'] }),
    ctx: { ...HSclone.ctx, phase: 'play' }
  };

  // initialize the client w/ custom scenario
  const client = Client({ game: HScloneScenario });

  // execute game move(s)
  client.moves.addCardToHand(TEST_CARD_ID);
  client.moves.selectCard(TEST_CARD_OBJ, 4);

  // get the latest game and ctx states
  const { G, ctx } = client.store.getState();
  const { currentPlayer } = ctx;

  // the game state should look like this now
  expect(G.selectedCardIndex[currentPlayer]).toBe(4);
  expect(G.selectedCardObject[currentPlayer]).toEqual(TEST_CARD_OBJ);
  expect(G.selectedCardType[currentPlayer]).toBe('SPELL');
  expect(G.selectedCardSpellType[currentPlayer]).toBe('GLOBAL');
  expect(G.selectedCardSpellContext[currentPlayer]).toBe('ATTACK');
});

test(`should select targeted spell card`, () => {
  const TEST_CARD_ID = 'CORE_126';
  const TEST_CARD_OBJ = getCardById(TEST_CARD_ID);

  // set up a specific board scenario
  const HScloneScenario = {
    ...HSclone,
    setup: () => ({ ...HSclone.setup(), turnOrder: ['0', '1'] }),
    ctx: { ...HSclone.ctx, phase: 'play' }
  };

  // initialize the client w/ custom scenario
  const client = Client({ game: HScloneScenario });

  // execute game move(s)
  client.moves.addCardToHand(TEST_CARD_ID);
  client.moves.selectCard(TEST_CARD_OBJ, 4);

  // get the latest game and ctx states
  const { G, ctx } = client.store.getState();
  const { currentPlayer } = ctx;

  // the game state should look like this now
  expect(G.selectedCardIndex[currentPlayer]).toBe(4);
  expect(G.selectedCardObject[currentPlayer]).toEqual(TEST_CARD_OBJ);
  expect(G.selectedCardType[currentPlayer]).toBe('SPELL');
  expect(G.selectedCardSpellType[currentPlayer]).toBe('TARGETED');
  expect(G.selectedCardSpellContext[currentPlayer]).toBe('ATTACK');
});
