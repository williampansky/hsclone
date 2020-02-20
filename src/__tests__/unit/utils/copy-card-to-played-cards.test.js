import getCardByID from 'lib/utils/get-card-by-id';
import copyCardToPlayedCards from 'lib/utils/copy-card-to-played-cards';

test(`should copy a card from player's hand to their playedCard's array`, () => {
  const CARD_ID = 'CORE_024';
  const MINION_CARD = getCardByID(CARD_ID);
  const SOME_CARD = getCardByID('CORE_008');
  const SOME_OTHER_CARD = getCardByID('CORE_033');

  const G = {
    players: {
      '0': {
        hand: [MINION_CARD, SOME_CARD, SOME_OTHER_CARD]
      }
    },
    playedCards: {
      '0': []
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  copyCardToPlayedCards(G, ctx.currentPlayer, CARD_ID);

  expect(G).toEqual({
    players: {
      '0': {
        hand: [MINION_CARD, SOME_CARD, SOME_OTHER_CARD]
      }
    },
    playedCards: {
      '0': [MINION_CARD.id]
    }
  });
});
