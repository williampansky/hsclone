const esmImport = require('esm')(module);
const {
  determineAttackingMinionTargets,
  disableMinionCanAttack,
  disableMinionCanBeAttacked,
  disableMinionHasGuard,
  enableMinionCanAttack,
  enableMinionCanBeAttacked,
  enableMinionHasGuard,
  selectAttackingMinion,
  selectAttackingMinionIndex,
  selectAttackingMinionObject
} = esmImport('../moves/minion-moves');
const { generateBoardSlotObject } = esmImport('../utils/generate-board-slot');

/**
 * minion-moves::disableMinionCanAttack()
 */
test(`disable currentPlayer's 4th minion canAttack`, () => {
  const G = {
    boards: {
      '0': [
        null,
        null,
        null,
        null,
        {
          canAttack: true
        }
      ]
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  disableMinionCanAttack(G, ctx.currentPlayer, 4);
  expect(G).toEqual({
    boards: {
      '0': [
        null,
        null,
        null,
        null,
        {
          canAttack: false
        }
      ]
    }
  });
});

/**
 * minion-moves::disableMinionCanBeAttacked()
 */
test(`disable currentPlayer's 3rd minion canBeAttacked`, () => {
  const G = {
    boards: {
      '0': [
        null,
        null,
        null,
        {
          canBeAttacked: true
        }
      ]
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  disableMinionCanBeAttacked(G, ctx.currentPlayer, 3);
  expect(G).toEqual({
    boards: {
      '0': [
        null,
        null,
        null,
        {
          canBeAttacked: false
        }
      ]
    }
  });
});

/**
 * minion-moves::enableMinionCanAttack()
 */
test(`enable currentPlayer's 2nd minion canAttack`, () => {
  const G = {
    boards: {
      '0': [],
      '1': [
        null,
        null,
        {
          canAttack: false
        }
      ]
    }
  };

  const ctx = {
    currentPlayer: '1'
  };

  enableMinionCanAttack(G, ctx.currentPlayer, 2);
  expect(G).toEqual({
    boards: {
      '0': [],
      '1': [
        null,
        null,
        {
          canAttack: true
        }
      ]
    }
  });
});

/**
 * minion-moves::enableMinionCanBeAttacked()
 */
test(`enable currentPlayer's 5th minion canBeAttacked`, () => {
  const G = {
    boards: {
      '0': [],
      '1': [
        null,
        null,
        null,
        null,
        null,
        {
          canBeAttacked: false
        }
      ]
    }
  };

  const ctx = {
    currentPlayer: '1'
  };

  enableMinionCanBeAttacked(G, ctx.currentPlayer, 5);
  expect(G).toEqual({
    boards: {
      '0': [],
      '1': [
        null,
        null,
        null,
        null,
        null,
        {
          canBeAttacked: true
        }
      ]
    }
  });
});

/**
 * minion-moves::selectAttackingMinionIndex()
 */
test(`sets attacking minion's index value`, () => {
  const CARD_ID = 'CORE_001';
  const SLOT_OBJECT = generateBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': [],
      '1': [SLOT_OBJECT]
    },
    selectedMinionIndex: {
      '0': null,
      '1': null
    }
  };

  const ctx = {
    currentPlayer: '1'
  };

  selectAttackingMinionIndex(G, ctx.currentPlayer, 0);

  expect(G).toEqual({
    boards: {
      '0': [],
      '1': [SLOT_OBJECT]
    },
    selectedMinionIndex: {
      '0': null,
      '1': 0
    }
  });
});

/**
 * minion-moves::disableMinionHasGuard()
 */
test(`disables hasGuard on the index minion`, () => {
  const CARD_ID = 'CORE_029';
  const SLOT_OBJECT = generateBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': [],
      '1': [
        {
          ...SLOT_OBJECT,
          hasGuard: true
        }
      ]
    }
  };

  const ctx = {
    currentPlayer: '1'
  };

  disableMinionHasGuard(G, ctx.currentPlayer, 0);

  expect(G).toEqual({
    boards: {
      '0': [],
      '1': [
        {
          ...SLOT_OBJECT,
          hasGuard: false
        }
      ]
    }
  });
});

/**
 * minion-moves::enableMinionHasGuard()
 */
test(`enables hasGuard on the index minion`, () => {
  const CARD_ID = 'CORE_029';
  const SLOT_OBJECT = generateBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': [SLOT_OBJECT],
      '1': []
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  enableMinionHasGuard(G, ctx.currentPlayer, 0);

  expect(G).toEqual({
    boards: {
      '0': [
        {
          ...SLOT_OBJECT,
          hasGuard: true
        }
      ],
      '1': []
    }
  });
});

/**
 * minion-moves::selectAttackingMinionObject()
 */
test(`sets attacking minion's object value`, () => {
  const CARD_ID = 'CORE_001';
  const SLOT_OBJECT = generateBoardSlotObject(CARD_ID);

  const G = {
    boards: {
      '0': [SLOT_OBJECT],
      '1': []
    },
    selectedMinionObject: {
      '0': null,
      '1': null
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  selectAttackingMinionObject(G, ctx.currentPlayer, SLOT_OBJECT);

  expect(G).toEqual({
    boards: {
      '0': [SLOT_OBJECT],
      '1': []
    },
    selectedMinionObject: {
      '0': SLOT_OBJECT,
      '1': null
    }
  });
});

/**
 * minion-moves::selectAttackingMinion()
 */
test(`selects a minion capable of making an attack`, () => {
  const CARD_ID = 'CORE_001';
  const SLOT_OBJECT = generateBoardSlotObject(CARD_ID);
  const TURN_ORDER = ['0', '1'];

  const G = {
    canBeAttacked: {
      '0': false,
      '1': false
    },
    boards: {
      '0': [SLOT_OBJECT],
      '1': []
    },
    selectedMinionIndex: {
      '0': null,
      '1': null
    },
    selectedMinionObject: {
      '0': null,
      '1': null
    },
    turnOrder: TURN_ORDER
  };

  const ctx = {
    currentPlayer: '0'
  };

  selectAttackingMinion(G, ctx, SLOT_OBJECT, 0);

  expect(G).toEqual({
    canBeAttacked: {
      '0': false,
      '1': true
    },
    boards: {
      '0': [SLOT_OBJECT],
      '1': []
    },
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

/**
 * minion-moves::determineAttackingMinionTargets()
 * no minions have guard
 */
test(`should allow opposing player and their minions to be attackable`, () => {
  const ATTACKING_MINION = generateBoardSlotObject('CORE_038');
  const SOME_MINION = generateBoardSlotObject('CORE_042');
  const SOME_OTHER_MINION = generateBoardSlotObject('CORE_016');

  const G = {
    canBeAttacked: {
      '0': false,
      '1': false
    },
    boards: {
      '0': [ATTACKING_MINION],
      '1': [SOME_MINION, SOME_OTHER_MINION]
    },
    selectedMinionIndex: {
      '0': 0,
      '1': null
    },
    selectedMinionObject: {
      '0': ATTACKING_MINION,
      '1': null
    }
  };

  determineAttackingMinionTargets(G, '1');

  expect(G).toEqual({
    canBeAttacked: {
      '0': false,
      '1': true
    },
    boards: {
      '0': [ATTACKING_MINION],
      '1': [
        {
          ...SOME_MINION,
          canBeAttacked: true
        },
        {
          ...SOME_OTHER_MINION,
          canBeAttacked: true
        }
      ]
    },
    selectedMinionIndex: {
      '0': 0,
      '1': null
    },
    selectedMinionObject: {
      '0': ATTACKING_MINION,
      '1': null
    }
  });
});

/**
 * minion-moves::determineAttackingMinionTargets()
 * one of their minions has guard
 */
test(`should only allow the opposing player's minion with guard to be attackable`, () => {
  const ATTACKING_MINION = generateBoardSlotObject('CORE_038');
  const SOME_MINION = generateBoardSlotObject('CORE_042');
  const SOME_OTHER_MINION = generateBoardSlotObject('CORE_016');
  const MINION_WITH_GUARD = generateBoardSlotObject('CORE_017');

  const G = {
    canBeAttacked: {
      '0': false,
      '1': false
    },
    boards: {
      '0': [ATTACKING_MINION],
      '1': [
        SOME_MINION,
        {
          ...MINION_WITH_GUARD,
          hasGuard: true
        },
        SOME_OTHER_MINION
      ]
    },
    selectedMinionIndex: {
      '0': 0,
      '1': null
    },
    selectedMinionObject: {
      '0': ATTACKING_MINION,
      '1': null
    }
  };

  determineAttackingMinionTargets(G, '1');

  expect(G).toEqual({
    canBeAttacked: {
      '0': false,
      '1': false
    },
    boards: {
      '0': [ATTACKING_MINION],
      '1': [
        SOME_MINION,
        {
          ...MINION_WITH_GUARD,
          canBeAttacked: true,
          hasGuard: true
        },
        SOME_OTHER_MINION
      ]
    },
    selectedMinionIndex: {
      '0': 0,
      '1': null
    },
    selectedMinionObject: {
      '0': ATTACKING_MINION,
      '1': null
    }
  });
});
