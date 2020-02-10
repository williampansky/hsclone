import React from 'react';
import CardIsPlayable from './interactions/CardIsPlayable';
import CardIsSelected from './interactions/CardIsSelected';
import css from 'styles/interactions/card-interactions.module.scss';
import useHover from 'hooks/useHover';
import Card from 'components/cards/Card';
import CardBack from 'components/cards/CardBack';

export default function CardInteractionLayer({
  card,
  index,
  G,
  ctx,
  moves,
  events,
  reset,
  undo,
  redo,
  step,
  log,
  gameID,
  playerID,
  gameMetadata,
  isActive,
  isMultiplayer,
  isConnected,
  credentials,
  yourID,
  theirID
}) {
  const [hoverRef, isHovered] = useHover();

  React.useEffect(() => {
    isActive &&
      isHovered &&
      G.selectedCardIndex[ctx.currentPlayer] === null &&
      moves.hoverOverCardInHand(index, card);
  }, [ctx.currentPlayer, isHovered]);

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
  const IS_PLAYABLE = cost <= G.energy[playerID].current;
  const IS_SELECTED = G.selectedCardIndex[playerID] === index;

  const yourHandStyle = {
    transform: `
      translateY(calc(${calcOffset(index)} * 1px)) 
      rotate(calc(${calcRotate(index)} * 1deg)) 
      scale(0.675)
    `
  };

  function selectPlayableCard(event, index) {
    event.preventDefault();
    moves.hoverOverCardInHand(null, null);
    return moves.selectPlayableCard(card, index);
  }

  function deselectSelectedCard(event) {
    event.preventDefault();
    moves.hoverOverCardInHand(null, null);
    return moves.selectPlayableCard(null, null);
  }

  // prettier-ignore
  return (
    <div
      className={css['card-in-your-hand']}
      data-file="CardInteractionLayer"
      data-is-playable={IS_PLAYABLE}
      data-is-selected={IS_SELECTED}
      ref={hoverRef}
      style={yourHandStyle}
    >
      {IS_YOUR_TURN ? (
        <React.Fragment>
          {IS_SELECTED && <CardIsSelected onClick={event => deselectSelectedCard(event)} />}
          {IS_PLAYABLE && !IS_SELECTED && <CardIsPlayable onClick={event => selectPlayableCard(event, index)} />}
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
function calcOffset(index, offsetRange = 80, total = 10) {
  index = index + 1;
  return Math.abs((index - (total - 1) / 2) / (total - 2) * offsetRange);
}

// prettier-ignore
// ($i - ($total - 1) / 2) / ($total - 2) * $rotationRange;
function calcRotate(index, rotationRange = 50, total = 10) {
  index = index + 1;
  return (index - (total - 1) / 2) / (total - 2) * rotationRange;
}
