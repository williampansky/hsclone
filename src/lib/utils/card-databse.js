const CORE = require('../data/debug/cards.json');
const ENTOURAGE = require('../data/debug/entourage.json');

const CARD_DATABASE = {
  ...CORE,
  ...ENTOURAGE
};

export default CARD_DATABASE;
