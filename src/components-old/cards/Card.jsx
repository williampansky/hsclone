import React from 'react';
import PropTypes from 'prop-types';
import css from './cards.module.scss';
import { fontSizeBasedOnCharacterLength } from '../../utils/text';
import createMarkup from '../../utils/createMarkup';

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
    <div className={css['card']}>
      <div className={css['card-cost']}>{cost}</div>
      <div className={css['card-image']} style={cardImage} />
      <div className={css['card-name']} style={fontSize}>
        {cardName(name, inspiration)}
      </div>
      <div className={css['card-text']}>
        <p dangerouslySetInnerHTML={createMarkup(text)} />
      </div>
      <div className={css['card-type']}>{type}</div>
      {IS_MINION && <div className={css['card-attack']}>{attack}</div>}
      {IS_MINION && <div className={css['card-health']}>{health}</div>}
      {IS_WEAPON && <div className={css['card-weapon-attack']}>{attack}</div>}
      {IS_WEAPON && <div className={css['card-weapon-health']}>{health}</div>}

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
