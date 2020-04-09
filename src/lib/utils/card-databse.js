import GAME from 'data/debug/cards-GAME.json';
import CORE from 'data/debug/cards-CORE.json';
import PRIME from 'data/debug/cards-PRIME.json';
import ENTOURAGE from 'data/debug/cards-ENTOURAGE.json';

const CARD_DATABASE = {
  ...GAME,
  ...CORE,
  ...PRIME,
  ...ENTOURAGE
};

export default CARD_DATABASE;
