import React from 'react';
import PropTypes from 'prop-types';
import useHover from 'react-use-hover';

// child components
import Card from 'components/cards/Card';
import CARD_IS_PLAYABLE from 'components/interactions/cards/CARD_IS_PLAYABLE';
import CARD_IS_PLAYABLE_EFFECT from 'components/interactions/cards/CARD_IS_PLAYABLE_EFFECT';
import CARD_IS_SELECTED from 'components/interactions/cards/CARD_IS_SELECTED';
import CARD_IS_SELECTED_EFFECT from 'components/interactions/cards/CARD_IS_SELECTED_EFFECT';
import limitNumberWithinRange from 'lib/utils/range-limit';

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
  const { selectedCardIndex, warcryObject } = G;
  const { currentPlayer, phase } = ctx;
  const { deselectCard, hoverCard, selectCard } = moves;

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
    phase === 'play' && isActive && dispatchHover(isHovering, nullCardIndex);
  }, [isActive, phase, isHovering, nullCardIndex, dispatchHover]);

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
    spellType,
    uuid,
    targetingArrowText,
    text,
    type
  } = card;

  const IS_YOUR_TURN = isActive;
  const WARCRY_OBJECT_ACTIVE = warcryObject[yourID] !== null;
  const CAN_AFFORD = cost <= G.energy[yourID].current;
  const IS_PLAYABLE = IS_YOUR_TURN && CAN_AFFORD && !WARCRY_OBJECT_ACTIVE;
  const IS_SELECTED = G.selectedCardIndex[yourID] === index;

  // const yourHandStyle = {
  //   transform: `transformY(0) scale(0.475)`
  //   // transform: `
  //   //   translateY(calc(${calcOffset(index, numberOfCards + 1)} * 1px))
  //   //   rotate(calc(${calcRotate(index, numberOfCards + 1)} * 0.875deg))
  //   //   scale(0.475)
  //   // `
  // };

  function calcOffset(index, total = 10, offsetRange = 80) {
    // abs(($i - ($total - 1) / 2) / ($total - 2) * $offsetRange);
    const MIN = 0;
    const MAX = 60;

    const calculation = Math.abs(
      ((index - (total - 1.5) / 2) / (total - 2)) * offsetRange
    );

    return limitNumberWithinRange(calculation, MAX, MIN);
  }

  // ($i - ($total - 1) / 2) / ($total - 2) * $rotationRange;
  function calcRotate(index, total = 10, rotationRange = 50) {
    const MIN = -15;
    const MAX = 25;
    const calculation =
      ((index - (total - 1) / 2) / (total - 2)) * rotationRange;

    return limitNumberWithinRange(calculation, MAX, MIN);
  }

  function selectPlayableCard(index) {
    hoverCard(null);
    return selectCard(card, index);
  }

  function deselectPlayableCard() {
    deselectCard();
    setTimeout(() => {
      hoverCard(null);
    }, 0);
  }

  // prettier-ignore
  return (
    <div
      data-file="interactions/cards/CardInteractionLayer"
      data-index={index}
      data-is-playable={IS_PLAYABLE}
      data-is-selected={IS_SELECTED}
      className={'card-in-your-hand'}
      {...hoverProps}
    >
      {IS_YOUR_TURN ? (
        <React.Fragment>
          {IS_SELECTED && <CARD_IS_SELECTED_EFFECT />}
          {IS_PLAYABLE && !IS_SELECTED && <CARD_IS_PLAYABLE_EFFECT />}
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
        spellType={spellType}
        uuid={uuid}
        targetingArrowText={targetingArrowText}
        text={text}
        type={type}
      />

      {IS_YOUR_TURN ? (
        <React.Fragment>
          {IS_SELECTED && <CARD_IS_SELECTED onClick={() => deselectPlayableCard()} />}
          {IS_PLAYABLE && !IS_SELECTED && <CARD_IS_PLAYABLE onClick={() => selectPlayableCard(index)} />}
        </React.Fragment>
      ) : null}
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
