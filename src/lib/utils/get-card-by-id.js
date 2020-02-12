import { CARD_DATABASE } from '../utils/card-databse';

const getCardObjectFromDatabase = (id, database = CARD_DATABASE) => {
  return database[id];
};

export const getCardByID = cardId => {
  return getCardObjectFromDatabase(cardId);
};
