import React from 'react';
import PropTypes from 'prop-types';
import { fontSizeBasedOnCharacterLength } from 'utils/text';
import createMarkup from 'utils/createMarkup';
import TYPE from 'enums/type.enums';
import RACE from 'enums/race.enums';

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
  isGolden,
  mechanics,
  name,
  playRequirements,
  race,
  rarity,
  set,
  sounds,
  spellDamage,
  spellType,
  targetingArrowText,
  text,
  type
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
    { name: 'spellType', content: spellType },
    { name: 'targetingText', content: targetingArrowText },
    { name: 'text', content: text },
    { name: 'type', content: type }
  ];

  const IS_MINION = type === TYPE[1] ? true : false;
  const IS_SPELL = type === TYPE[3] ? true : false;
  const IS_WEAPON = type === TYPE[4] ? true : false;

  const cardImage = {
    backgroundImage: isGolden ? `url(${goldenImageSrc})` : `url(${imageSrc})`
  };

  const fontSize = {
    fontSize: `${fontSizeBasedOnCharacterLength(name)}em`
  };

  return (
    <div
      className={[
        'card',
        IS_MINION ? '--is-minion' : '',
        IS_SPELL ? '--is-spell' : '',
        IS_WEAPON ? '--is-weapon' : ''
      ].join(' ')}
    >
      <div className={'card__cost'}>
        <div className={'text__value'}>{cost}</div>
      </div>

      <div className={'card__image__wrapper'}>
        <div className={'card__image'} style={cardImage} />
        {IS_MINION && <div className={'minion__bezel'} />}
      </div>

      <div className={'card__name'} style={fontSize}>
        <div className={'name__value'}>{name}</div>
      </div>
      <div className={'card__text'}>
        <p dangerouslySetInnerHTML={createMarkup(text)} />
      </div>

      {IS_MINION ? (
        race !== RACE[0] ? (
          <div className={'card__type'}>{race}</div>
        ) : (
          <div className={'card__type'}>{type}</div>
        )
      ) : (
        <div className={'card__type'}>{type}</div>
      )}

      {IS_MINION && (
        <React.Fragment>
          <div className={'card__attack'}>
            <div className={'text__value'}>{attack}</div>
          </div>
          <div className={'card__health'}>
            <div className={'text__value'}>{health}</div>
          </div>
        </React.Fragment>
      )}

      {IS_WEAPON && (
        <React.Fragment>
          <div className={'card__weapon__attack'}>
            <div className={'text__value'}>{attack}</div>
          </div>
          <div className={'card__weapon__health'}>
            <div className={'text__value'}>{health}</div>
          </div>
        </React.Fragment>
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

Card.propTypes = {
  artist: PropTypes.string,
  attack: PropTypes.number,
  cardClass: PropTypes.string,
  collectible: PropTypes.bool,
  cost: PropTypes.number,
  elite: PropTypes.bool,
  entourage: PropTypes.array,
  goldenImageSrc: PropTypes.string,
  flavor: PropTypes.string,
  health: PropTypes.number,
  hideStats: PropTypes.bool,
  howToEarn: PropTypes.string,
  howToEarnGolden: PropTypes.string,
  id: PropTypes.string,
  imageSrc: PropTypes.string,
  isGolden: PropTypes.bool,
  mechanics: PropTypes.array,
  name: PropTypes.string,
  playRequirements: PropTypes.array,
  race: PropTypes.string,
  rarity: PropTypes.string,
  set: PropTypes.string,
  sounds: PropTypes.shape({
    attackSound: PropTypes.string,
    deathSound: PropTypes.string,
    dropSound: PropTypes.string
  }),
  spellDamage: PropTypes.number,
  spellType: PropTypes.string,
  targetingArrowText: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string
};

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
  mechanics: [],
  name: 'CARD NAME',
  playRequirements: [],
  race: 'Minion',
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
