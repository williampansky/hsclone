import GAME_CONFIG from './src/config/game.config';
require('dotenv').config({ path: './.env.local' });
const fs = require('fs');
const incomingCore = require('./csv-core.json');
const incomingEntourage = require('./csv-entourage.json');
const Airtable = require('airtable-node');

const APIKEY = process.env.AIRTABLE_API_KEY;
const base = new Airtable({ apiKey: APIKEY }).base('appP9UrOufNDMKpfm');

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

function parseImageSrcObject(obj) {
  if (!obj) return;
  return obj[0].thumbnails.large.url;
}

function parseMechanics(array) {
  if (!array || array === null) return;
  return array.split(',');
}

// CORE
base
  .table('CORE')
  .list({
    maxRecords: 200
  })
  .then(resp => {
    const mappedCore = resp.records.map(item => {
      const { fields } = item;
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
      } = fields;

      if (!id) return;

      return {
        [id]: {
          ...fields,
          artist: artist ? artist : null,
          cardClass: parseCardClass(cardClass),
          collectible: collectible === 'checked' ? true : false,
          cost: GAME_CONFIG.debugData.enableCost ? cost : 0,
          elite: elite === 'checked' ? true : false,
          imageSrc: parseImageSrcObject(imageSrc),
          mechanics: GAME_CONFIG.debugData.enableMechanics
            ? mechanics
              ? mechanics
              : []
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
  });

// ENTOURAGE
base
  .table('CORE')
  .list()
  .then(resp => {
    const mappedEntourage = resp.records.map(item => {
      const { fields } = item;
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
      } = fields;

      if (!id) return;

      return {
        [id]: {
          ...fields,
          artist: artist ? artist : null,
          cardClass: parseCardClass(cardClass),
          collectible: collectible === 'checked' ? true : false,
          cost: GAME_CONFIG.debugData.enableCost ? cost : 0,
          elite: elite === 'checked' ? true : false,
          imageSrc: parseImageSrcObject(imageSrc),
          mechanics: GAME_CONFIG.debugData.enableMechanics ? mechanics : '',
          text: GAME_CONFIG.debugData.enableText ? text : ''
        }
      };
    });

    const entourage = JSON.stringify(Object.assign({}, ...mappedEntourage));
    fs.writeFileSync('./src/data/debug/entourage.json', entourage);
  });
