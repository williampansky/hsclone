import React from 'react';
import PropTypes from 'prop-types';
import { fontSizeBasedOnCharacterLength } from 'utils/text';
import createMarkup from 'utils/createMarkup';
import TYPE from 'enums/type.enums';
import RACE from 'enums/race.enums';
import RARITY from 'enums/rarity.enums';
import placeholdersArray from 'placeholders-array';

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
  const IS_MINION = type === TYPE[1] ? true : false;
  const IS_SPELL = type === TYPE[3] ? true : false;
  const IS_WEAPON = type === TYPE[4] ? true : false;

  function cardImage() {
    if (placeholdersArray.includes(id))
      return `url(assets/images/sets/PLACEHOLDER.jpg)`;

    return isGolden
      ? `url(${goldenImageSrc})`
      : `url(assets/images/sets/${set}/${id}.jpg)`;
  }

  const fontSize = {
    fontSize: `${fontSizeBasedOnCharacterLength(name)}em`
  };

  return (
    <div
      className={[
        'card__v3',
        IS_MINION ? '--is-minion' : '',
        IS_SPELL ? '--is-spell' : '',
        IS_WEAPON ? '--is-weapon' : ''
      ].join(' ')}
    >
      <div className={'card__cost'}>
        <div className={'text__value'}>{cost}</div>
      </div>

      <div className={'card__image__wrapper'}>
        <div
          className={'card__image'}
          style={{ backgroundImage: cardImage() }}
        />
      </div>

      <div className={'card__name'}>
        <div className={'text__value'} style={fontSize}>
          {name}
        </div>
      </div>
      <div className={'card__text'}>
        <p
          className={'text__value'}
          dangerouslySetInnerHTML={createMarkup(text)}
        />
      </div>

      {IS_MINION ? (
        race !== RACE[0] ? (
          <div className={'card__type'}>
            <div>{race}</div>
          </div>
        ) : (
          <div className={'card__type'}>
            <div>{type}</div>
          </div>
        )
      ) : (
        <div className={'card__type'}>
          <div>{type}</div>
        </div>
      )}

      {(IS_MINION || IS_WEAPON) && (
        <React.Fragment>
          <div className={'card__attack'} data-value={attack}>
            <div className={'text__value'}>{attack}</div>
            <img
              alt=""
              className={`card__attack__badge`}
              src={`assets/TCG_vol09_front-assets/ic_sword.png`}
            />
          </div>
          <div className={'card__health'} data-value={health}>
            <div className={'text__value'}>{health}</div>
            <img
              alt=""
              className={`card__health__badge`}
              src={`assets/TCG_vol09_front-assets/ic_shield.png`}
            />
          </div>
        </React.Fragment>
      )}

      <img
        alt=""
        className={`card__rarity__gem`}
        src={`assets/Gem_Rarity_${rarity}.png`}
      />

      <div className={`card__type__image__wrapper`}>
        <img
          alt=""
          className={`card__type__image`}
          src={`assets/card-assets/Card_Type--${type}.png`}
        />
        <img
          alt=""
          className={`card__type__image__badge`}
          src={`assets/card-assets/Card_Type_Board.png`}
        />
      </div>

      {isGolden ? (
        <img
          alt=""
          className={`card__base__image`}
          src={`assets/images/cards/front/GOLDEN.png`}
        />
      ) : (
        <img
          alt=""
          className={`card__base__image`}
          src={`assets/images/cards/front/${rarity}.png`}
        />
      )}
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
  artist: '',
  attack: 0,
  cardClass: '',
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
  imageSrc: 'assets/images/card-image-placeholder.jpg',
  mechanics: [],
  name: '',
  playRequirements: [],
  race: '',
  rarity: '',
  set: '',
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
