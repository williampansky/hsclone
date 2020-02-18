import CARD_DATABASE from 'lib/utils/card-databse';

const getMinionObjectFromDatabase = (id, database = CARD_DATABASE) => {
  if (!database[id]) return;
  return database[id];
};

const createMinionObject = cardId => {
  return getMinionObjectFromDatabase(cardId);
};

export default createMinionObject;
