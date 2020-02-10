const cardDb = require('../../data/debug/cards.json');

const getCardObjectFromDatabase = (id, database = cardDb) => {
  return database[id];
};

export const getCardByID = cardId => {
  return getCardObjectFromDatabase(cardId);
};
