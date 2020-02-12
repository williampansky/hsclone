const esmImport = require('esm')(module);
const { stripSecrets } = esmImport('./strip-secrets');

// stripSecrets - playerID '0'
test(`Strips away player 1's fields from player 0's client state`, () => {
  const G = {
    players: {
      '0': {
        deck: [],
        hand: []
      },
      '1': {
        deck: [],
        hand: []
      }
    },
    selectedCardObject: {
      '0': null,
      '1': null
    }
  };

  const playerID = '0';
  const result = stripSecrets(G, playerID);

  expect(result).toEqual({
    players: {
      '0': {
        deck: [],
        hand: []
      }
    },
    selectedCardObject: {
      '0': null
    }
  });
});

// stripSecrets - playerID '1'
test(`Strips away player 0's fields from player 1's client state`, () => {
  const G = {
    players: {
      '0': {
        deck: [],
        hand: []
      },
      '1': {
        deck: [],
        hand: []
      }
    },
    selectedCardObject: {
      '0': null,
      '1': null
    }
  };

  const playerID = '1';
  const result = stripSecrets(G, playerID);

  expect(result).toEqual({
    players: {
      '1': {
        deck: [],
        hand: []
      }
    },
    selectedCardObject: {
      '1': null
    }
  });
});
