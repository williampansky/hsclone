const esmImport = require('esm')(module);
const {
  disableMinionCanAttack,
  disableMinionCanBeAttacked,
  enableMinionCanAttack,
  enableMinionCanBeAttacked,
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

  selectAttackingMinionIndex(G, ctx, 0);

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

  selectAttackingMinionObject(G, ctx, SLOT_OBJECT);

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

  const G = {
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
    }
  };

  const ctx = {
    currentPlayer: '0'
  };

  selectAttackingMinion(G, ctx, SLOT_OBJECT, 0);

  expect(G).toEqual({
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
    }
  });
});
