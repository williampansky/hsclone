const cardDb = require('../../data/debug/cards.json');

const getMinionObjectFromDatabase = (id, database = cardDb) => {
  return database[id];
};

export const generateMinion = cardId => {
  return getMinionObjectFromDatabase(cardId);
};
