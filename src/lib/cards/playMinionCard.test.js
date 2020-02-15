const esmImport = require('esm')(module);
const { getCardByID } = esmImport('../../lib/utils/get-card-by-id');
const { generateBoardSlotObject } = esmImport(
  '../../lib/utils/generate-board-slot'
);
const { playMinionCard } = esmImport('./playMinionCard');
const { generateWarcryObject } = esmImport('../utils/generate-warcry-object');

/**
 * card-moves::playMinionCard()
 * no mechanics, no index splicing
 */
test(`plays a minion card and adds it to the board`, () => {
  const CARD_ID = 'CORE_024';
  const MINION_CARD = getCardByID(CARD_ID);
  const SLOT_OBJ = generateBoardSlotObject(CARD_ID);
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

  playMinionCard(G, ctx, 0, CARD_ID);

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

/**
 * card-moves::playMinionCard()
 * mechanics[BOON(CORE_041)], no index splicing
 */
test(`plays a minion card with the BOON(CORE_041) mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_041';
  const MINION_CARD = getCardByID(CARD_ID);
  const MINION_CARD_OBJ = generateBoardSlotObject(CARD_ID);
  const SOME_MINION = generateBoardSlotObject('CORE_014');
  const SOME_OTHER_MINION = generateBoardSlotObject('CORE_024');

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
      '0': [SOME_MINION, SOME_OTHER_MINION]
    },
    energy: {
      '0': {
        current: 10,
        total: 10
      }
    },
    playedCards: {
      '0': []
    },
    selectedCardIndex: {
      '0': 0
    },
    selectedCardObject: {
      '0': MINION_CARD_OBJ
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 2, CARD_ID);

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
      '0': [
        {
          ...SOME_MINION,
          currentAttack: SOME_MINION.minionData.attack + 1,
          currentHealth: SOME_MINION.minionData.health + 1,
          totalAttack: SOME_MINION.minionData.attack + 1,
          totalHealth: SOME_MINION.minionData.health + 1
        },
        {
          ...SOME_OTHER_MINION,
          currentAttack: SOME_OTHER_MINION.minionData.attack + 1,
          currentHealth: SOME_OTHER_MINION.minionData.health + 1,
          totalAttack: SOME_OTHER_MINION.minionData.attack + 1,
          totalHealth: SOME_OTHER_MINION.minionData.health + 1
        },
        MINION_CARD_OBJ
      ]
    },
    energy: {
      '0': {
        current: 3,
        total: 10
      }
    },
    playedCards: {
      '0': [MINION_CARD]
    },
    selectedCardIndex: {
      '0': null
    },
    selectedCardObject: {
      '0': null
    }
  });
});

/**
 * card-moves::playMinionCard() - mechanics[BUFF], no index splicing
 */
test(`plays a minion card with the BUFF mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_011';
  const MINION_CARD = getCardByID(CARD_ID);
  const MINION_CARD_OBJ = generateBoardSlotObject(CARD_ID);

  const G = {
    buffs: {
      '0': {
        attack: 0,
        spellDamage: 0
      }
    },
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
        current: 2,
        total: 2
      }
    },
    playedCards: {
      '0': []
    },
    selectedCardIndex: {
      '0': 0
    },
    selectedCardObject: {
      '0': MINION_CARD_OBJ
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 0, CARD_ID);

  expect(G).toEqual({
    buffs: {
      '0': {
        attack: 0,
        spellDamage: 1
      }
    },
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
      '0': [MINION_CARD_OBJ]
    },
    energy: {
      '0': {
        current: 0,
        total: 2
      }
    },
    playedCards: {
      '0': [MINION_CARD]
    },
    selectedCardIndex: {
      '0': null
    },
    selectedCardObject: {
      '0': null
    }
  });
});

/**
 * card-moves::playMinionCard()
 * mechanics[GUARD], no index splicing
 */
test(`plays a minion card with the GUARD mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_002';
  const MINION_CARD = getCardByID(CARD_ID);
  const MINION_CARD_OBJ = generateBoardSlotObject(CARD_ID);
  const SOME_MINION = getCardByID('CORE_014');
  const SOME_OTHER_MINION = getCardByID('CORE_014');
  const ANOTHER_OTHER_MINION = getCardByID('CORE_027');

  const G = {
    counts: {
      '0': {
        hand: 2
      }
    },
    players: {
      '0': {
        hand: [SOME_MINION, MINION_CARD]
      }
    },
    boards: {
      '0': [SOME_OTHER_MINION]
    },
    energy: {
      '0': {
        current: 1,
        total: 1
      }
    },
    playedCards: {
      '0': [ANOTHER_OTHER_MINION]
    },
    selectedCardIndex: {
      '0': 0
    },
    selectedCardObject: {
      '0': MINION_CARD_OBJ
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 1, CARD_ID);

  expect(G).toEqual({
    counts: {
      '0': {
        hand: 1
      }
    },
    players: {
      '0': {
        hand: [SOME_MINION]
      }
    },
    boards: {
      '0': [
        SOME_OTHER_MINION,
        {
          ...MINION_CARD_OBJ,
          hasGuard: true
        }
      ]
    },
    energy: {
      '0': {
        current: 0,
        total: 1
      }
    },
    playedCards: {
      '0': [ANOTHER_OTHER_MINION, MINION_CARD]
    },
    selectedCardIndex: {
      '0': null
    },
    selectedCardObject: {
      '0': null
    }
  });
});

/**
 * card-moves::playMinionCard()
 * mechanics[STAMPEDE], no index splicing
 */
test(`plays a minion card with the STAMPEDE mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_005';
  const MINION_CARD = getCardByID(CARD_ID);
  const MINION_CARD_OBJ = generateBoardSlotObject(CARD_ID);

  const G = {
    counts: {
      '0': {
        hand: 4
      }
    },
    players: {
      '0': {
        hand: ['PLAYED CARD', 'PLAYED CARD', MINION_CARD, 'PLAYED CARD']
      }
    },
    boards: {
      '0': []
    },
    energy: {
      '0': {
        current: 3,
        total: 5
      }
    },
    playedCards: {
      '0': ['PLAYED CARD', 'PLAYED CARD', 'PLAYED CARD']
    },
    selectedCardIndex: {
      '0': 0
    },
    selectedCardObject: {
      '0': MINION_CARD_OBJ
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 0, CARD_ID);

  expect(G).toEqual({
    counts: {
      '0': {
        hand: 3
      }
    },
    players: {
      '0': {
        hand: ['PLAYED CARD', 'PLAYED CARD', 'PLAYED CARD']
      }
    },
    boards: {
      '0': [
        {
          ...MINION_CARD_OBJ,
          canAttack: true
        }
      ]
    },
    energy: {
      '0': {
        current: 2,
        total: 5
      }
    },
    playedCards: {
      '0': ['PLAYED CARD', 'PLAYED CARD', 'PLAYED CARD', MINION_CARD]
    },
    selectedCardIndex: {
      '0': null
    },
    selectedCardObject: {
      '0': null
    }
  });
});

/**
 * card-moves::playMinionCard()
 * mechanics[WARCRY], no index splicing
 */
test(`plays a minion card with the WARCRY mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_CARD = getCardByID(CARD_ID);
  const SLOT_OBJ = generateBoardSlotObject(CARD_ID);
  const WARCRY_OBJ = generateWarcryObject(CARD_ID);
  const SOME_CARD = getCardByID('CORE_018');
  const SOME_OTHER_CARD = getCardByID('CORE_024');

  const G = {
    counts: {
      '0': {
        hand: 3
      }
    },
    players: {
      '0': {
        hand: [SOME_CARD, MINION_CARD, SOME_OTHER_CARD]
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
      '0': []
    },
    selectedCardIndex: {
      '0': 0,
      '1': null
    },
    selectedCardObject: {
      '0': MINION_CARD,
      '1': null
    },
    warcryObject: {
      '0': null,
      '1': null
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 0, CARD_ID);

  expect(G).toEqual({
    counts: {
      '0': {
        hand: 2
      }
    },
    players: {
      '0': {
        hand: [SOME_CARD, SOME_OTHER_CARD]
      }
    },
    boards: {
      '0': [SLOT_OBJ]
    },
    energy: {
      '0': {
        current: 9,
        total: 10
      }
    },
    playedCards: {
      '0': [MINION_CARD]
    },
    selectedCardIndex: {
      '0': null,
      '1': null
    },
    selectedCardObject: {
      '0': null,
      '1': null
    },
    warcryObject: {
      '0': WARCRY_OBJ,
      '1': null
    }
  });
});
