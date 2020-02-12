import { CARD_DATABASE } from '../utils/card-databse';

const getMinionObjectFromDatabase = (id, database = CARD_DATABASE) => {
  return database[id];
};

export const generateMinion = cardId => {
  return getMinionObjectFromDatabase(cardId);
};
