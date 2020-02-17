import boards from 'lib/state/boards';
import createBoardSlotObject from 'lib/creators/create-board-slot-object';
const { placeCardOnBoard } = boards;

test(`should place a minion on the board`, () => {
  const CARD_ID = 'CORE_024';
  const MINION = createBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': []
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  placeCardOnBoard(G, ctx.currentPlayer, MINION);

  expect(G).toEqual({
    boards: {
      '0': [MINION]
    }
  });
});

test(`should place a minion on the board after the one that's already there`, () => {
  const CARD_ID = 'CORE_024';
  const MINION = createBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': ['MINION_ALREADY_THERE']
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  placeCardOnBoard(G, ctx.currentPlayer, MINION, 1);

  expect(G).toEqual({
    boards: {
      '0': ['MINION_ALREADY_THERE', MINION]
    }
  });
});

test(`should place a minion on the board before the one that's already there`, () => {
  const CARD_ID = 'CORE_024';
  const MINION = createBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': ['MINION_ALREADY_THERE']
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  placeCardOnBoard(G, ctx.currentPlayer, MINION);

  expect(G).toEqual({
    boards: {
      '0': [MINION, 'MINION_ALREADY_THERE']
    }
  });
});

test(`should place a minion on the board into a specific index (2)`, () => {
  const CARD_ID = 'CORE_024';
  const MINION = createBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': ['SOME_MINION', 'SOME_OTHER_MINION', 'ANOTHER_MINION']
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  placeCardOnBoard(G, ctx.currentPlayer, MINION, 2);

  expect(G).toEqual({
    boards: {
      '0': ['SOME_MINION', 'SOME_OTHER_MINION', MINION, 'ANOTHER_MINION']
    }
  });
});

test(`should place a minion on the board into a specific index (4)`, () => {
  const CARD_ID = 'CORE_024';
  const MINION = createBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': ['1', '2', '3', '4', '5', '6']
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  placeCardOnBoard(G, ctx.currentPlayer, MINION, 4);

  expect(G).toEqual({
    boards: {
      '0': ['1', '2', '3', '4', MINION, '5', '6']
    }
  });
});

test(`should place a minion on the board into a specific index (1)`, () => {
  const CARD_ID = 'CORE_024';
  const MINION = createBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': ['1', '2', '3', '4', '5', '6']
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  placeCardOnBoard(G, ctx.currentPlayer, MINION, 6);

  expect(G).toEqual({
    boards: {
      '0': ['1', '2', '3', '4', '5', '6', MINION]
    }
  });
});
