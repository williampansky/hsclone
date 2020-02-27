import GAME_CONFIG from 'config/game.config';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import getCardByID from 'lib/utils/get-card-by-id';
import playCard from 'lib/moves/play-card';

test(`plays a minion card and adds it to the board`, () => {
  const CARD_ID = 'CORE_024';
  const MINION_CARD = getCardByID(CARD_ID);
  const SLOT_OBJ = createBoardSlotObject(CARD_ID);

  const G = {
    counts: {
      '0': {
        hand: 1
      }
    },
    players: {
      '0': {
        hand: [MINION_CARD]
      }
    },
    boards: {
      '0': []
    },
    energy: {
      '0': {
        current: 10,
        total: 10
      }
    },
    playedCards: {
      '0': ['CORE_002', 'CORE_012']
    },
    selectedCardIndex: {
      '0': 0
    },
    selectedCardObject: {
      '0': SLOT_OBJ
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playCard(G, ctx, 0, MINION_CARD.uuid, CARD_ID);

  expect(G.counts).toEqual({ '0': { hand: 0 } });
  expect(G.players).toEqual({ '0': { hand: [] } });
  expect(G.boards).toEqual({ '0': [SLOT_OBJ] });

  if (GAME_CONFIG.debugData.enableCost) expect(G.energy['0'].current).toBe(6);
  else expect(G.energy['0'].current).toBe(10);

  expect(G.energy['0'].total).toBe(10);
  expect(G.playedCards['0']).toEqual(['CORE_002', 'CORE_012', CARD_ID]);
  expect(G.selectedCardIndex['0']).toBe(null);
  expect(G.selectedCardObject['0']).toBe(null);
});
