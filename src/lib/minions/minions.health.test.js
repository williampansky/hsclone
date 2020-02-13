const esmImport = require('esm')(module);
const { generateMinion } = esmImport('../utils/generate-minion');
const { addToMinionHealth, subtractFromMinionHealth, killMinion } = esmImport(
  './minions.health'
);

/**
 * addToMinionHealth() - w/o hitting max totalHealth
 */
test(`adds to minion health, but doesn't hit the totalHealth max`, () => {
  const CARD_ID = 'CORE_042';
  const MINION_OBJECT = generateMinion(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_OBJECT.attack,
          currentHealth: 1,
          hasGuard: false,
          minionData: MINION_OBJECT,
          totalAttack: MINION_OBJECT.attack,
          totalHealth: MINION_OBJECT.health
        }
      ]
    }
  };

  addToMinionHealth(G, ctx.currentPlayer, 0, 1);

  expect(G).toEqual({
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_OBJECT.attack,
          currentHealth: 2,
          hasGuard: false,
          minionData: MINION_OBJECT,
          totalAttack: MINION_OBJECT.attack,
          totalHealth: MINION_OBJECT.health
        }
      ]
    }
  });
});

/**
 * addToMinionHealth() - w/ hitting max totalHealth
 */
test(`adds more than totalHealth to minion's health; limits result to totalHealth`, () => {
  const CARD_ID = 'CORE_042';
  const MINION_OBJECT = generateMinion(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_OBJECT.attack,
          currentHealth: 5,
          hasGuard: false,
          minionData: MINION_OBJECT,
          totalAttack: MINION_OBJECT.attack,
          totalHealth: MINION_OBJECT.health
        }
      ]
    }
  };

  addToMinionHealth(G, ctx.currentPlayer, 0, 5);

  expect(G).toEqual({
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_OBJECT.attack,
          currentHealth: MINION_OBJECT.health,
          hasGuard: false,
          minionData: MINION_OBJECT,
          totalAttack: MINION_OBJECT.attack,
          totalHealth: MINION_OBJECT.health
        }
      ]
    }
  });
});

/**
 * subtractFromMinionHealth() - w/o hitting min totalHealth
 */
test(`adds from minion health, but doesn't hit the totalHealth minimum value`, () => {
  const CARD_ID = 'CORE_042';
  const MINION_OBJECT = generateMinion(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_OBJECT.attack,
          currentHealth: 5,
          hasGuard: false,
          minionData: MINION_OBJECT,
          totalAttack: MINION_OBJECT.attack,
          totalHealth: MINION_OBJECT.health
        }
      ]
    }
  };

  subtractFromMinionHealth(G, ctx.currentPlayer, 0, 2);

  expect(G).toEqual({
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_OBJECT.attack,
          currentHealth: 3,
          hasGuard: false,
          minionData: MINION_OBJECT,
          totalAttack: MINION_OBJECT.attack,
          totalHealth: MINION_OBJECT.health
        }
      ]
    }
  });
});

/**
 * subtractFromMinionHealth() - w/ hitting min totalHealth
 */
test(`adds more than minimum totalHealth from minion's health; limits result to totalHealth minimum value`, () => {
  const CARD_ID = 'CORE_042';
  const MINION_OBJECT = generateMinion(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_OBJECT.attack,
          currentHealth: 2,
          hasGuard: false,
          minionData: MINION_OBJECT,
          totalAttack: MINION_OBJECT.attack,
          totalHealth: MINION_OBJECT.health
        }
      ]
    }
  };

  subtractFromMinionHealth(G, ctx.currentPlayer, 0, 5);

  expect(G).toEqual({
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_OBJECT.attack,
          currentHealth: 0,
          hasGuard: false,
          minionData: MINION_OBJECT,
          totalAttack: MINION_OBJECT.attack,
          totalHealth: MINION_OBJECT.health
        }
      ]
    }
  });
});

/**
 * killMinion()
 */
test(`kill a single minion with zero or less currentHealth`, () => {
  const CARD_ID = 'CORE_042';
  const MINION_OBJECT = generateMinion(CARD_ID);
  const ctx = { currentPlayer: '0' };
  const G = {
    boards: {
      '0': [
        {
          canAttack: false,
          canBeAttacked: false,
          currentAttack: MINION_OBJECT.attack,
          currentHealth: 0,
          hasGuard: false,
          minionData: MINION_OBJECT,
          totalAttack: MINION_OBJECT.attack,
          totalHealth: MINION_OBJECT.health
        }
      ]
    }
  };

  killMinion(G, ctx.currentPlayer, 0);

  expect(G).toEqual({
    boards: {
      '0': []
    }
  });
});
