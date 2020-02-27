import GAME_CONFIG from './src/config/game.config';
const fs = require('fs');
const incomingCore = require('./csv-core.json');
const incomingEntourage = require('./csv-entourage.json');

function parseCardClass(string) {
  if (!string) return;
  return string.replace(/([0-9] )/g, '');
}

function parseImageSrc(string) {
  if (!string) return;
  const match = string.match(/\(([^)]+)\)/g).toString();
  const newString = match.replace(/(\()/g, '').replace(/(\))/g, '');
  return newString;
}

// CORE
const mappedCore = incomingCore.map(item => {
  const {
    artist,
    cardClass,
    collectible,
    cost,
    elite,
    id,
    imageSrc,
    mechanics,
    text
  } = item;

  if (!id) return;

  return {
    [id]: {
      ...item,
      artist: artist ? artist : null,
      cardClass: parseCardClass(cardClass),
      collectible: collectible === 'checked' ? true : false,
      cost: GAME_CONFIG.debugData.enableCost ? cost : 0,
      elite: elite === 'checked' ? true : false,
      imageSrc: parseImageSrc(imageSrc),
      mechanics: GAME_CONFIG.debugData.enableMechanics
        ? mechanics.split(',')
        : '',
      text: GAME_CONFIG.debugData.enableText ? text : ''
    }
  };
});

const coreCards = JSON.stringify(Object.assign({}, ...mappedCore));
fs.writeFileSync('./src/data/debug/cards.json', coreCards);

// IDs
const idArray = incomingCore.map(item => {
  const { id } = item;
  if (!id) return;
  return id;
});
const filterNull = idArray.filter(item => item);
const newArr = JSON.stringify(filterNull);
fs.writeFileSync('./src/data/debug/cardIdArray.json', newArr);

// ENTOURAGE
const mappedEntourage = incomingEntourage.map(item => {
  const {
    artist,
    cardClass,
    collectible,
    cost,
    elite,
    id,
    imageSrc,
    mechanics,
    text
  } = item;

  if (!id) return;

  return {
    [id]: {
      ...item,
      artist: artist ? artist : null,
      cardClass: parseCardClass(cardClass),
      collectible: collectible === 'checked' ? true : false,
      cost: GAME_CONFIG.debugData.enableCost ? cost : 0,
      elite: elite === 'checked' ? true : false,
      imageSrc: parseImageSrc(imageSrc),
      mechanics: GAME_CONFIG.debugData.enableMechanics
        ? mechanics.split(',')
        : '',
      text: GAME_CONFIG.debugData.enableText ? text : ''
    }
  };
});

const entourage = JSON.stringify(Object.assign({}, ...mappedEntourage));
fs.writeFileSync('./src/data/debug/entourage.json', entourage);
