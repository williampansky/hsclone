import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useHover from 'react-use-hover';
import css from '~/styles/game/game.scss';
import Card from 'components/game/card/Card';

export default function Minion({ data }) {
  const {
    artist,
    attack,
    cardClass,
    collectible,
    cost,
    elite,
    entourage,
    flavor,
    health,
    hideStats,
    howToEarn,
    howToEarnGolden,
    id,
    images,
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

  const { backgroundImage, foregroundImage } = images;
  // const { attackSound, deathSound, dropSound } = sounds;

  const [{ AP }, setAP] = useState({ AP: attack });
  const [{ HP }, setHP] = useState({ HP: health });
  const [{ isSelected }, setIsSelected] = useState({ isSelected: false });
  const [isHovering, hoverProps] = useHover({
    mouseEnterDelayMS: 900,
    mouseLeaveDelayMS: 0
  });

  function handleClick(event) {
    event.preventDefault();
    return !isSelected
      ? setIsSelected({ isSelected: true })
      : setIsSelected({ isSelected: false });
  }

  return (
    <div
      className={[css.Minion, isSelected ? css.minion_is_attacking : ''].join(
        ' '
      )}
      data-is-selected={isSelected}
      onClick={event => handleClick(event)}
      {...hoverProps}
    >
      <div className={css.ImageWrapper}>
        <img alt={name} role="presentation" src={foregroundImage} />
      </div>
      <div className={css.AttackWrapper}>{AP}</div>
      <div className={css.HealthWrapper}>{HP}</div>

      {isHovering ? (
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
            health={health}
            hideStats={hideStats}
            howToEarn={howToEarn}
            howToEarnGolden={howToEarnGolden}
            id={id}
            images={images}
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
      ) : null}
    </div>
  );
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
    health: 1,
    hideStats: false,
    howToEarn: null,
    howToEarnGolden: null,
    id: null,
    images: {
      backgroundImage: null,
      foregroundImage: null
    },
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
    text: 'CARD TEXT',
    type: null
  }
};
