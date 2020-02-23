/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { fontSizeBasedOnCharacterLength } from 'utils/text';
import createMarkup from 'utils/createMarkup';

export default function Card({
  artist,
  attack,
  cardClass,
  collectible,
  cost,
  elite,
  entourage,
  flavor,
  goldenImageSrc,
  health,
  hideStats,
  howToEarn,
  howToEarnGolden,
  id,
  imageSrc,
  inspiration,
  mechanics,
  name,
  playRequirements,
  race,
  rarity,
  set,
  sounds,
  spellDamage,
  targetingArrowText,
  text,
  type,
  isGolden
}) {
  const { attackSound, deathSound, dropSound } = sounds;
  const metaAttributes = [
    { name: 'artist', content: artist },
    { name: 'attack', content: attack },
    { name: 'cardClass', content: cardClass },
    { name: 'collectible', content: collectible.toString() },
    { name: 'cost', content: cost },
    { name: 'elite', content: elite.toString() },
    { name: 'entourage', content: entourage },
    { name: 'flavor', content: flavor },
    { name: 'health', content: health },
    { name: 'hideStats', content: hideStats.toString() },
    { name: 'howToEarn', content: howToEarn },
    { name: 'howToEarnGolden', content: howToEarnGolden },
    { name: 'id', content: id },
    { name: 'images.normal', content: imageSrc },
    { name: 'images.golden', content: goldenImageSrc },
    { name: 'mechanics', content: JSON.stringify(mechanics) },
    { name: 'name', content: name },
    { name: 'playRequirements', content: JSON.stringify(playRequirements) },
    { name: 'race', content: race },
    { name: 'rarity', content: rarity },
    { name: 'set', content: set },
    { name: 'sounds.attackSound', content: attackSound },
    { name: 'sounds.deathSound', content: deathSound },
    { name: 'sounds.dropSound', content: dropSound },
    { name: 'spellDamage', content: spellDamage },
    { name: 'targetingText', content: targetingArrowText },
    { name: 'text', content: text },
    { name: 'type', content: type }
  ];

  const IS_MINION = type === 'MINION' ? true : false;
  const IS_WEAPON = type === 'WEAPON' ? true : false;

  const cardImage = {
    backgroundImage: isGolden ? `url(${goldenImageSrc})` : `url(${imageSrc})`
  };

  const fontSize = {
    fontSize: `${fontSizeBasedOnCharacterLength(name)}em`
  };

  function cardName(name = name, ins = inspiration) {
    if (name) return name;
    else if (ins) return ins;
    else return 'Unknown';
  }

  return (
    <div className={'card'}>
      <div className={'card-cost'}>
        <div className={'text__value'}>{cost}</div>
      </div>
      <div className={'card-image'} style={cardImage} />
      <div className="card__name__ribbon__wrapper" style={fontSize}>
        <div className="card__name__ribbon__front">
          <div className={'name__value'}>{cardName(name, inspiration)}</div>
        </div>
        <div className="card__name__ribbon-edge-topleft"></div>
        <div className="card__name__ribbon-edge-topright"></div>
        <div className="card__name__ribbon-edge-bottomleft"></div>
        <div className="card__name__ribbon-edge-bottomright"></div>
      </div>
      <div className={'card-text'}>
        <p dangerouslySetInnerHTML={createMarkup(text)} />
      </div>
      <div className={'card-type'}>{type}</div>
      {IS_MINION && (
        <div className={'card-attack'}>
          <div className={'text__value'}>{attack}</div>
        </div>
      )}
      {IS_MINION && (
        <div className={'card-health'}>
          <div className={'text__value'}>{health}</div>
        </div>
      )}
      {IS_WEAPON && (
        <div className={'card-weapon-attack'}>
          <div className={'text__value'}>{attack}</div>
        </div>
      )}
      {IS_WEAPON && (
        <div className={'card-weapon-health'}>
          <div className={'text__value'}>{health}</div>
        </div>
      )}

      {metaAttributes.map((attr, index) => {
        const { name, content } = attr;
        return content ? (
          <meta key={index} name={name} content={content.toString()} />
        ) : null;
      })}
    </div>
  );
}

// Card.propTypes = {
//   artist: PropTypes.string,
//   attack: PropTypes.number,
//   cardClass: PropTypes.string,
//   collectible: PropTypes.boolean,
//   cost: PropTypes.number,
//   elite: PropTypes.boolean,
//   entourage: PropTypes.array,
//   flavor: PropTypes.string,
//   health: PropTypes.number,
//   hideStats: PropTypes.boolean,
//   howToEarn: PropTypes.string,
//   howToEarnGolden: PropTypes.string,
//   id: PropTypes.string,
//   images: PropTypes.shape({
//     backgroundImage: PropTypes.string,
//     foregroundImage: PropTypes.string
//   }),
//   mechanics: PropTypes.array,
//   name: PropTypes.string,
//   playRequirements: PropTypes.array,
//   race: PropTypes.string,
//   rarity: PropTypes.string,
//   set: PropTypes.string,
//   sounds: PropTypes.shape({
//     attackSound: PropTypes.string,
//     deathSound: PropTypes.string,
//     dropSound: PropTypes.string
//   }),
//   spellDamage: PropTypes.number,
//   targetingArrowText: PropTypes.string,
//   text: PropTypes.string,
//   type: PropTypes.string
// };

Card.defaultProps = {
  // card object props
  artist: 'Unknown',
  attack: 0,
  cardClass: 'Neutral',
  collectible: true,
  cost: 0,
  elite: false,
  entourage: [],
  flavor: null,
  goldenImageSrc: null,
  health: 1,
  hideStats: false,
  howToEarn: null,
  howToEarnGolden: null,
  id: null,
  imageSrc: null,
  inspiration: null,
  mechanics: [],
  name: 'CARD NAME',
  playRequirements: [],
  race: 'None',
  rarity: 'Free',
  set: 'Free',
  sounds: {
    attackSound: null,
    deathSound: null,
    dropSound: null
  },
  spellDamage: 0,
  targetingArrowText: null,
  text: '',
  type: null,

  // incoming transformative props
  isGolden: false
};
