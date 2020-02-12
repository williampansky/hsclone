const esmImport = require('esm')(module);
const { getCardByID } = esmImport('../../lib/utils/get-card-by-id');
const { playMinionCard } = esmImport('./playMinionCard');

/**
 * card-moves::playMinionCard() - no mechanics, no index splicing
 */
test(`plays a minion card and adds it to the board`, () => {
  const CARD_ID = 'CORE_024';
  const MINION_CARD = getCardByID(CARD_ID);

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
      '0': ['PLAYED CARD', 'PLAYED CARD']
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 0, CARD_ID, 4);

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
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_CARD.attack,
          currentHealth: MINION_CARD.health,
          hasGuard: false,
          minionData: MINION_CARD,
          totalAttack: MINION_CARD.attack,
          totalHealth: MINION_CARD.health
        }
      ]
    },
    energy: {
      '0': {
        current: 6,
        total: 10
      }
    },
    playedCards: {
      '0': ['PLAYED CARD', 'PLAYED CARD', MINION_CARD]
    }
  });
});

/**
 * card-moves::playMinionCard() - mechanics[BOON(CORE_041)], no index splicing
 */
test(`plays a minion card with the BOON(CORE_041) mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_041';
  const MINION_CARD = getCardByID(CARD_ID);
  const OTHER_MINION1 = getCardByID('CORE_014');
  const OTHER_MINION2 = getCardByID('CORE_024');

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
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: OTHER_MINION1.attack,
          currentHealth: OTHER_MINION1.health,
          hasGuard: false,
          minionData: OTHER_MINION1,
          totalAttack: OTHER_MINION1.attack,
          totalHealth: OTHER_MINION1.health
        },
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: OTHER_MINION2.attack,
          currentHealth: OTHER_MINION2.health,
          hasGuard: false,
          minionData: OTHER_MINION2,
          totalAttack: OTHER_MINION2.attack,
          totalHealth: OTHER_MINION2.health
        }
      ]
    },
    energy: {
      '0': {
        current: 10,
        total: 10
      }
    },
    playedCards: {
      '0': []
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 2, CARD_ID, 7);

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
          canAttack: false,
          canBeAttacked: false,
          currentAttack: OTHER_MINION1.attack + 1,
          currentHealth: OTHER_MINION1.health + 1,
          hasGuard: false,
          minionData: OTHER_MINION1,
          totalAttack: OTHER_MINION1.attack + 1,
          totalHealth: OTHER_MINION1.health + 1
        },
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: OTHER_MINION2.attack + 1,
          currentHealth: OTHER_MINION2.health + 1,
          hasGuard: false,
          minionData: OTHER_MINION2,
          totalAttack: OTHER_MINION2.attack + 1,
          totalHealth: OTHER_MINION2.health + 1
        },
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_CARD.attack,
          currentHealth: MINION_CARD.health,
          hasGuard: false,
          minionData: MINION_CARD,
          totalAttack: MINION_CARD.attack,
          totalHealth: MINION_CARD.health
        }
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
    }
  });
});

/**
 * card-moves::playMinionCard() - mechanics[BUFF], no index splicing
 */
test(`plays a minion card with the BUFF mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_011';
  const MINION_CARD = getCardByID(CARD_ID);

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
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 0, CARD_ID, 2);

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
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_CARD.attack,
          currentHealth: MINION_CARD.health,
          hasGuard: false,
          totalAttack: MINION_CARD.attack,
          totalHealth: MINION_CARD.health,
          minionData: MINION_CARD
        }
      ]
    },
    energy: {
      '0': {
        current: 0,
        total: 2
      }
    },
    playedCards: {
      '0': [MINION_CARD]
    }
  });
});

/**
 * card-moves::playMinionCard() - mechanics[GUARD], no index splicing
 */
test(`plays a minion card with the GUARD mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_002';
  const MINION_CARD = getCardByID(CARD_ID);

  const G = {
    counts: {
      '0': {
        hand: 2
      }
    },
    players: {
      '0': {
        hand: ['PLAYED CARD', MINION_CARD]
      }
    },
    boards: {
      '0': []
    },
    energy: {
      '0': {
        current: 1,
        total: 1
      }
    },
    playedCards: {
      '0': ['PLAYED CARD']
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 0, CARD_ID, 1);

  expect(G).toEqual({
    counts: {
      '0': {
        hand: 1
      }
    },
    players: {
      '0': {
        hand: ['PLAYED CARD']
      }
    },
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_CARD.attack,
          currentHealth: MINION_CARD.health,
          hasGuard: true,
          totalAttack: MINION_CARD.attack,
          totalHealth: MINION_CARD.health,
          minionData: MINION_CARD
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
      '0': ['PLAYED CARD', MINION_CARD]
    }
  });
});

/**
 * card-moves::playMinionCard() - mechanics[STAMPEDE], no index splicing
 */
test(`plays a minion card with the STAMPEDE mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_005';
  const MINION_CARD = getCardByID(CARD_ID);

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
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 0, CARD_ID, 1);

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
          canAttack: true,
          canBeAttacked: false,
          currentAttack: MINION_CARD.attack,
          currentHealth: MINION_CARD.health,
          hasGuard: false,
          totalAttack: MINION_CARD.attack,
          totalHealth: MINION_CARD.health,
          minionData: MINION_CARD
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
    }
  });
});

/**
 * card-moves::playMinionCard() - mechanics[WARCRY], no index splicing
 */
test(`plays a minion card with the WARCRY mechanic and adds it to the board`, () => {
  const CARD_ID = 'CORE_001';
  const MINION_CARD = getCardByID(CARD_ID);

  const G = {
    counts: {
      '0': {
        hand: 3
      }
    },
    players: {
      '0': {
        hand: ['PLAYED CARD', MINION_CARD, 'PLAYED CARD']
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
    warcryObject: {
      '0': null,
      '1': null
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  playMinionCard(G, ctx, 0, CARD_ID, 1);

  expect(G).toEqual({
    counts: {
      '0': {
        hand: 2
      }
    },
    players: {
      '0': {
        hand: ['PLAYED CARD', 'PLAYED CARD']
      }
    },
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_CARD.attack,
          currentHealth: MINION_CARD.health,
          hasGuard: false,
          totalAttack: MINION_CARD.attack,
          totalHealth: MINION_CARD.health,
          minionData: MINION_CARD
        }
      ]
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
    warcryObject: {
      '0': {
        id: 'CORE_001',
        type: 'SPELL',
        cost: 0,
        attack: 1,
        spellType: 'TARGETED',
        targetingArrowText: 'Deal 1 damage'
      },
      '1': null
    }
  });
});
