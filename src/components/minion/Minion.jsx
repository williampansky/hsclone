import React, { useState, useEffect, useCallback } from 'react';
import useHover from 'react-use-hover';

export default function Minion({
  currentAttack,
  currentHealth,
  data,
  p,
  slot,
  totalHealth
}) {
  const {
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
    type
  } = data;

  const [isHovering, hoverProps] = useHover({
    mouseEnterDelayMS: 900,
    mouseLeaveDelayMS: 0
  });

  return health >= 0 ? (
    <div
      className={[
        'minion',
        currentHealth !== totalHealth ? '--is-damaged' : ''
      ].join(' ')}
    >
      {/* <div className={'info-trigger'} {...hoverProps} /> */}
      <div className={'image-wrapper'}>
        <div
          className="image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
      </div>
      <div className={'attack-wrapper'}>
        <div className={'text__value'}>{currentAttack}</div>
      </div>
      <div className={'health-wrapper'}>
        <div className={'text__value'}>{currentHealth}</div>
      </div>
      <div className={'minion__bezel'} />
    </div>
  ) : null;
}

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
    imageSrc: null,
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
