import React from 'react';
import PropTypes from 'prop-types';
// import useHover from 'react-use-hover';

export default function Minion({
  currentAttack,
  currentHealth,
  data,
  totalHealth
}) {
  let { imageSrc } = data;
  if (!imageSrc) imageSrc = 'assets/images/card-image-placeholder.jpg';
  // const [isHovering, hoverProps] = useHover({
  //   mouseEnterDelayMS: 900,
  //   mouseLeaveDelayMS: 0
  // });

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
        <div
          className="image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      </div>
      <div className={'attack-wrapper'} data-value={currentAttack}>
        <div className={'text__value'}>{currentAttack}</div>
        <img alt="" src={'assets/card-assets/ic_attack.png'} />
      </div>
      <div className={'health-wrapper'} data-value={currentHealth}>
        <div className={'text__value'}>{currentHealth}</div>
        <img alt="" src={'assets/card-assets/ic_health.png'} />
      </div>
      <div className={'minion__bezel'} />
    </div>
  );
}

Minion.propTypes = {
  currentAttack: PropTypes.number,
  currentHealth: PropTypes.number,
  data: PropTypes.object,
  totalHealth: PropTypes.number
};

Minion.defaultProps = {
  data: {
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
    imageSrc: 'assets/images/card-image-placeholder.jpg',
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
    type: null
  }
};
