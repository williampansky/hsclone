import React, { useState, useEffect, useCallback } from 'react';
import useHover from 'react-use-hover';

export default function Minion({
  currentAttack,
  currentHealth,
  data,
  p,
  slot
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
    <div className={['minion'].join(' ')}>
      {/* <div className={'info-trigger'} {...hoverProps} /> */}
      <div className={'image-wrapper'}>
        <div
          className="image"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />
        {/* <img alt={name} role="presentation" src={imageSrc} /> */}
      </div>
      <div className={'attack-wrapper'}>
        <div className={'text__value'}>{currentAttack}</div>
      </div>
      <div className={'health-wrapper'}>
        <div className={'text__value'}>{currentHealth}</div>
      </div>
      <div className={'minion__bezel'} />

      {/* {isHovering ? (
        <article>
          <Card
            artist={artist}
            attack={attack}
            cardClass={cardClass}
            collectible={collectible}
            cost={cost}
            elite={elite}
            entourage={entourage}
            flavor={flavor}
            goldenImageSrc={goldenImageSrc}
            health={health}
            hideStats={hideStats}
            howToEarn={howToEarn}
            howToEarnGolden={howToEarnGolden}
            id={id}
            imageSrc={imageSrc}
            mechanics={mechanics}
            name={name}
            playRequirements={playRequirements}
            race={race}
            rarity={rarity}
            set={set}
            sounds={sounds}
            spellDamage={spellDamage}
            targetingArrowText={targetingArrowText}
            text={text}
            type={type}
          />
        </article>
      ) : null} */}
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
