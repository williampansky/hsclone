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

// CONSTANTS
base
  .table('CONSTANTS')
  .list({
    maxRecords: 200
  })
  .then(resp => {
    const map = resp.records.map(item => {
      const { fields } = item;
      const { name, symbol, type, description } = fields;

      return {
        [symbol]: {
          name,
          symbol,
          type,
          description
        }
      };
    });

    const constants = JSON.stringify(Object.assign({}, ...map));
    fs.writeFileSync('./src/enums/CONSTANTS.json', constants);
  });

// CORE
base
  .table('GAME')
  .list({
    maxRecords: 200
  })
  .then(resp => {
    const map = resp.records.map(item => {
      const { fields } = item;
      const { artist, cardClass, id, mechanics, name, text } = fields;

      if (!id) return;

      return {
        [id]: {
          ...fields,
          artist: artist ? artist : null,
          cardClass: parseCardClass(cardClass),
          mechanics: GAME_CONFIG.debugData.enableMechanics
            ? mechanics
              ? mechanics
              : []
            : '',
          name: name,
          text: GAME_CONFIG.debugData.enableText ? text : ''
        }
      };
    });

    const cards = JSON.stringify(Object.assign({}, ...map));
    fs.writeFileSync('./src/data/debug/cards-GAME.json', cards);
  });

// CORE
base
  .table('CORE')
  .list({
    maxRecords: 200
  })
  .then(resp => {
    const map = resp.records.map(item => {
      const { fields } = item;
      const {
        artist,
        cardClass,
        id,
        inspiration,
        mechanics,
        name,
        text
      } = fields;

      if (!id) return;

      return {
        [id]: {
          ...fields,
          artist: artist ? artist : null,
          cardClass: parseCardClass(cardClass),
          mechanics: GAME_CONFIG.debugData.enableMechanics
            ? mechanics
              ? mechanics
              : []
            : '',
          name: name ? name : inspiration,
          text: GAME_CONFIG.debugData.enableText ? text : ''
        }
      };
    });

    const cards = JSON.stringify(Object.assign({}, ...map));
    fs.writeFileSync('./src/data/debug/cards-CORE.json', cards);
  });

// PRIME
base
  .table('PRIME')
  .list({
    maxRecords: 300
  })
  .then(resp => {
    const map = resp.records.map(item => {
      const { fields } = item;
      const {
        artist,
        cardClass,
        id,
        inspiration,
        mechanics,
        name,
        text
      } = fields;

      if (!id) return;

      return {
        [id]: {
          ...fields,
          artist: artist ? artist : null,
          cardClass: parseCardClass(cardClass),
          mechanics: GAME_CONFIG.debugData.enableMechanics
            ? mechanics
              ? mechanics
              : []
            : '',
          name: name ? name : inspiration,
          text: GAME_CONFIG.debugData.enableText ? text : ''
        }
      };
    });

    const cards = JSON.stringify(Object.assign({}, ...map));
    fs.writeFileSync('./src/data/debug/cards-PRIME.json', cards);
  });

// ENTOURAGE
base
  .table('ENTOURAGE')
  .list({
    maxRecords: 200
  })
  .then(resp => {
    const map = resp.records.map(item => {
      const { fields } = item;
      const {
        artist,
        cardClass,
        id,
        inspiration,
        mechanics,
        name,
        text
      } = fields;

      if (!id) return;

      return {
        [id]: {
          ...fields,
          artist: artist ? artist : null,
          cardClass: parseCardClass(cardClass),
          mechanics: GAME_CONFIG.debugData.enableMechanics
            ? mechanics
              ? mechanics
              : []
            : '',
          name: name ? name : inspiration,
          text: GAME_CONFIG.debugData.enableText ? text : ''
        }
      };
    });

    const cards = JSON.stringify(Object.assign({}, ...map));
    fs.writeFileSync('./src/data/debug/cards-ENTOURAGE.json', cards);
  });
