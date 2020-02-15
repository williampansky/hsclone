const esmImport = require('esm')(module);
const { getCardByID } = esmImport('../../lib/utils/get-card-by-id');
const { removeCardFromHand } = esmImport('./removeCardFromHand');

test(`should remove a card from player's hand`, () => {
  const CARD_ID = 'CORE_024';
  const MINION_CARD = getCardByID(CARD_ID);
  const SOME_CARD = getCardByID('CORE_008');
  const SOME_OTHER_CARD = getCardByID('CORE_033');

  const G = {
    players: {
      '0': {
        hand: [SOME_CARD, MINION_CARD, SOME_OTHER_CARD]
      }
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  removeCardFromHand(G, ctx.currentPlayer, CARD_ID);

  expect(G).toEqual({
    players: {
      '0': {
        hand: [SOME_CARD, SOME_OTHER_CARD]
      }
    }
  });
});