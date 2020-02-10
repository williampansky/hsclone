const CORE = require('../../data/debug/cards.json');
const ENTOURAGE = require('../../data/debug/entourage.json');

const CARD_DATABASE = {
  ...CORE,
  ...ENTOURAGE
};

const getCardObjectFromDatabase = (id, database = CARD_DATABASE) => {
  return database[id];
};

export const getCardByID = cardId => {
  return getCardObjectFromDatabase(cardId);
};
