import React from 'react';
import PropTypes from 'prop-types';
import CARDCLASS from 'enums/cardClass.enums';
import RACE from 'enums/race.enums';
import RARITY from 'enums/rarity.enums';
import SET from 'enums/set.enums';
import TYPE from 'enums/type.enums';
import placeholdersArray from 'placeholders-array';
// import useHover from 'react-use-hover';

export default function Minion({
  currentAttack,
  currentHealth,
  data,
  totalHealth
}) {
  let { id, set } = data;
  const isGolden = false;
  const goldenImageSrc = '';

  function minionImage() {
    if (placeholdersArray.includes(id))
      return `url(assets/images/sets/PLACEHOLDER.jpg)`;

    return isGolden
      ? `url(${goldenImageSrc})`
      : `url(assets/images/sets/${set}/${id}-CARD.jpg)`;
  }

  return (
    <div
      className={[
        'minion__v2',
        currentHealth < totalHealth ? '--is-damaged' : '',
        currentHealth === 0 ? '--is-dead' : ''
      ].join(' ')}
    >
      {/* <div className={'info-trigger'} {...hoverProps} /> */}
      <div className={'image-wrapper'}>
        <div className="image" style={{ backgroundImage: minionImage() }} />
      </div>
      <div className={'attack-wrapper'} data-value={currentAttack}>
        <div className={'text__value'}>{currentAttack}</div>
        <img alt="" src={'assets/card-assets/ic_sword.png'} />
      </div>
      <div className={'health-wrapper'} data-value={currentHealth}>
        <div className={'text__value'}>{currentHealth}</div>
        <img alt="" src={'assets/card-assets/ic_shield2.png'} />
      </div>
    </div>
  );
}

Minion.propTypes = {
  currentAttack: PropTypes.number,
  currentHealth: PropTypes.number,
  data: PropTypes.shape({
    artist: PropTypes.string,
    attack: PropTypes.number,
    cardClass: PropTypes.string,
    collectible: PropTypes.bool,
    cost: PropTypes.number,
    elite: PropTypes.bool,
    health: PropTypes.number,
    howToEarn: PropTypes.string,
    id: PropTypes.string,
    mechanics: PropTypes.array,
    name: PropTypes.string,
    race: PropTypes.string,
    rarity: PropTypes.string,
    set: PropTypes.string,
    type: PropTypes.string
  }),
  totalHealth: PropTypes.number
};

Minion.defaultProps = {
  currentAttack: 0,
  currentHealth: 1,
  data: PropTypes.shape({
    artist: 'Unknown',
    attack: 0,
    cardClass: CARDCLASS[0],
    collectible: false,
    cost: 0,
    elite: false,
    health: 1,
    howToEarn: 'Provided to all players.',
    id: 'UNKNOWN',
    mechanics: [],
    name: 'UNKNOWN',
    race: RACE[0],
    rarity: RARITY[0],
    set: SET[0],
    type: TYPE[1]
  }),
  totalHealth: 1
};
