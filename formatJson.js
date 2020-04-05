/* eslint-disable array-callback-return */
import GAME_CONFIG from './src/config/game.config';
require('dotenv').config({ path: './.env.local' });
const fs = require('fs');
const Airtable = require('airtable-node');

const APIKEY = process.env.AIRTABLE_API_KEY;
const base = new Airtable({ apiKey: APIKEY }).base('appP9UrOufNDMKpfm');

function parseCardClass(string) {
  if (!string) return;
  return string.replace(/([0-9] )/g, '');
}

function parseImageSrcObject(obj) {
  if (!obj) return;
  return obj[0].thumbnails.large.url;
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
    fs.writeFileSync('./src/data/debug/cards-CORE.json', coreCards);
  });

// PRIME
base
  .table('PRIME')
  .list({
    maxRecords: 300
  })
  .then(resp => {
    const mappedPrime = resp.records.map(item => {
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

    const primeCards = JSON.stringify(Object.assign({}, ...mappedPrime));
    fs.writeFileSync('./src/data/debug/cards-PRIME.json', primeCards);
  });

// ENTOURAGE
base
  .table('ENTOURAGE')
  .list({
    maxRecords: 200
  })
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
          mechanics: GAME_CONFIG.debugData.enableMechanics
            ? mechanics
              ? mechanics
              : []
            : '',
          text: GAME_CONFIG.debugData.enableText ? text : ''
        }
      };
    });

    const entourage = JSON.stringify(Object.assign({}, ...mappedEntourage));
    fs.writeFileSync('./src/data/debug/cards-ENTOURAGE.json', entourage);
  });
