import React from 'react';
import CardIsPlayable from 'components/interactions/layers/CardIsPlayable';
import CardIsSelected from 'components/interactions/layers/CardIsSelected';
import css from 'components/interactions/card-interactions.module.scss';
// import useHover from 'hooks/useHover';
import useHover from 'react-use-hover';
import Card from 'components/cards/Card';

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
  const { hoverOverCardInHand, selectPlayableCard } = moves;

  // const [hoverRef, isHovered] = useHover();
  const [isHovering, hoverProps] = useHover({
    mouseEnterDelayMS: 0,
    mouseLeaveDelayMS: 0
  });

  const nullCardIndex = selectedCardIndex[currentPlayer] === null;

  const dispatchHover = React.useCallback(
    (hovering, nullIdx) => {
      hovering && nullIdx
        ? hoverOverCardInHand(index)
        : hoverOverCardInHand(null);
    },
    [hoverOverCardInHand, index]
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
  const IS_PLAYABLE = cost <= G.energy[yourID].current;
  const IS_SELECTED = G.selectedCardIndex[yourID] === index;

  const yourHandStyle = {
    transform: `
      translateY(calc(${calcOffset(index, numberOfCards + 1)} * 1px)) 
      rotate(calc(${calcRotate(index, numberOfCards + 1)} * 0.875deg)) 
      scale(0.675)
    `
  };

  function selectCard(index) {
    hoverOverCardInHand(null);
    return selectPlayableCard(card, index);
  }

  function deselectCard() {
    selectPlayableCard(null, null);
    setTimeout(() => {
      hoverOverCardInHand(null);
    }, 0);
  }

  // prettier-ignore
  return (
    <div
      className={css['card-in-your-hand']}
      data-file="CardInteractionLayer"
      data-index={index}
      data-is-playable={IS_PLAYABLE}
      data-is-selected={IS_SELECTED}
      style={yourHandStyle}
      {...hoverProps}
    >
      {IS_YOUR_TURN ? (
        <React.Fragment>
          {IS_SELECTED && <CardIsSelected onClick={() => deselectCard()} />}
          {IS_PLAYABLE && !IS_SELECTED && <CardIsPlayable onClick={() => selectCard(index)} />}
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
