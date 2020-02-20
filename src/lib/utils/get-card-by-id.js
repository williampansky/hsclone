import uuidv4 from 'uuid/v4';
import CARD_DATABASE from 'lib/utils/card-databse';

const getCardObjectFromDatabase = (id, database = CARD_DATABASE) => {
  return database[id];
};

const getCardByID = cardId => {
  return {
    ...getCardObjectFromDatabase(cardId),
    uuid: uuidv4()
  };
};

export const getCardByIdWithoutUUID = cardId => {
  return getCardObjectFromDatabase(cardId);
};

export default getCardByID;
