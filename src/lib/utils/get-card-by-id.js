import CARD_DATABASE from 'lib/utils/card-databse';
import uuidv4 from 'uuid/v4';

const getCardObjectFromDatabase = (id, database = CARD_DATABASE) => {
  return database[id.replace(' ', '')];
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
