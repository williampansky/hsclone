import createBoardSlotObject from 'lib/creators/create-board-slot-object';
import getCardByID from 'lib/utils/get-card-by-id';
import playCard from 'lib/moves/play-card';

test(`plays a minion card and adds it to the board`, () => {
  const CARD_ID = 'CORE_024';
  const MINION_CARD = getCardByID(CARD_ID);
  const SLOT_OBJ = createBoardSlotObject(CARD_ID);
  const SOME_CARD = getCardByID('CORE_002');
  const SOME_OTHER_CARD = getCardByID('CORE_012');

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
      '0': [SOME_CARD, SOME_OTHER_CARD]
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

  playCard(G, ctx, 0, CARD_ID);

  expect(G).toEqual({
    counts: {
      '0': {
        hand: 0
      }
    },
    players: {
      '0': {
        hand: []
      }
    },
    boards: {
      '0': [SLOT_OBJ]
    },
    energy: {
      '0': {
        current: 6,
        total: 10
      }
    },
    playedCards: {
      '0': [SOME_CARD, SOME_OTHER_CARD, MINION_CARD]
    },
    selectedCardIndex: {
      '0': null
    },
    selectedCardObject: {
      '0': null
    }
  });
});
