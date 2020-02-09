const fs = require('fs');
const incomingDataArray = require('./csvjson.json');

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

const mapped = incomingDataArray.map(item => {
  const {
    artist,
    cardClass,
    collectible,
    elite,
    id,
    imageSrc,
    mechanics
  } = item;

  if (!id) return;

  return {
    [id]: {
      ...item,
      artist: artist ? artist : null,
      cardClass: parseCardClass(cardClass),
      collectible: collectible === 'checked' ? true : false,
      elite: elite === 'checked' ? true : false,
      imageSrc: parseImageSrc(imageSrc),
      mechanics: mechanics.split(',')
    }
  };
});

const newObj = JSON.stringify(Object.assign({}, ...mapped));
fs.writeFileSync('./src/data/debug/cards.json', newObj);
// fs.writeFileSync('./src/data/debug/cards.json', newObj.replace(/}$/g, ''));

const idArray = incomingDataArray.map(item => {
  const { id } = item;
  if (!id) return;
  return id;
});
const filterNull = idArray.filter(item => item);
const newArr = JSON.stringify(filterNull);
fs.writeFileSync('./src/data/debug/cardIdArray.json', newArr);
