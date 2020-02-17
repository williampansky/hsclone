import React from 'react';
import PropTypes from 'prop-types';
import useHover from 'react-use-hover';

// styles
import css from 'components/interactions/cards/card-interactions.module.scss';

// child components
import Card from 'components/cards/Card';
import CardIsPlayable from 'components/interactions/cards/layers/CardIsPlayable';
import CardIsSelected from 'components/interactions/cards/layers/CardIsSelected';

export default function CardInteraction({
  G,
  ctx,
  moves,
  isActive,
  yourID,
  card,
  index,
  numberOfCards
}) {
  const { selectedCardIndex } = G;
  const { currentPlayer } = ctx;
  const { hoverCard, selectCard } = moves;

  const [isHovering, hoverProps] = useHover({
    mouseEnterDelayMS: 0,
    mouseLeaveDelayMS: 0
  });

  const nullCardIndex = selectedCardIndex[currentPlayer] === null;

  const dispatchHover = React.useCallback(
    (hovering, nullIdx) => {
      hovering && nullIdx ? hoverCard(index) : hoverCard(null);
    },
    [hoverCard, index]
  );

  React.useEffect(() => {
    isActive && dispatchHover(isHovering, nullCardIndex);
  }, [isActive, isHovering, nullCardIndex, dispatchHover]);

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
    type
  } = card;

  const IS_YOUR_TURN = isActive;
  const IS_PLAYABLE = isActive && cost <= G.energy[yourID].current;
  const IS_SELECTED = G.selectedCardIndex[yourID] === index;

  const yourHandStyle = {
    transform: `
      translateY(calc(${calcOffset(index, numberOfCards + 1)} * 1px)) 
      rotate(calc(${calcRotate(index, numberOfCards + 1)} * 0.875deg)) 
      scale(0.675)
    `
  };

  function selectPlayableCard(index) {
    hoverCard(null);
    return selectCard(card, index);
  }

  function deselectPlayableCard() {
    selectCard(null, null);
    setTimeout(() => {
      hoverCard(null);
    }, 0);
  }

  // prettier-ignore
  return (
    <div
      data-file="CardInteractionLayer"
      data-index={index}
      data-is-playable={IS_PLAYABLE}
      data-is-selected={IS_SELECTED}
      className={css['card-in-your-hand']}
      style={yourHandStyle}
      {...hoverProps}
    >
      {IS_YOUR_TURN ? (
        <React.Fragment>
          {IS_SELECTED && <CardIsSelected onClick={() => deselectPlayableCard()} />}
          {IS_PLAYABLE && !IS_SELECTED && <CardIsPlayable onClick={() => selectPlayableCard(index)} />}
        </React.Fragment>
      ) : null}
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
        inspiration={inspiration}
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
    </div>
  );
}

CardInteraction.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  yourID: PropTypes.string,
  card: PropTypes.object,
  index: PropTypes.number,
  numberOfCards: PropTypes.number
};

// prettier-ignore
// abs(($i - ($total - 1) / 2) / ($total - 2) * $offsetRange);
function calcOffset(index, total = 10, offsetRange = 80) {
  // index = index + 1;
  return Math.abs((index - (total - 1) / 2) / (total - 2) * offsetRange);
}

// prettier-ignore
// ($i - ($total - 1) / 2) / ($total - 2) * $rotationRange;
function calcRotate(index, total = 10, rotationRange = 50) {
  // index = index + 1;
  return (index - (total - 1) / 2) / (total - 2) * rotationRange;
}
