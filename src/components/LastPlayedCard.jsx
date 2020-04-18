import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/cards/CardV3';
import usePrevious from 'components/hooks/usePrevious';
import getCardByID from 'lib/utils/get-card-by-id';

export default function LastPlayedCard({ G, ctx, array }) {
  const [display, setDisplay] = useState(false);
  const { currentPlayer } = ctx;

  const [cardObj, setCardObj] = useState(null);
  const previousArrayLength = usePrevious(array.length);

  const playerSpellBuff = G.buffs[currentPlayer].spellDamage;
  const playerSpellDamage = cardObj && cardObj.warcryNumber;
  const dynamicSpellDamageText = Math.abs(playerSpellBuff + playerSpellDamage);

  const handleDisplayCallback = useCallback(
    (arr, length) => {
      if (length !== previousArrayLength) {
        setDisplay(true);

        setTimeout(() => {
          setDisplay(false);
        }, 2500);
      }
    },
    [previousArrayLength]
  );

  useEffect(() => {
    if (array !== [] && array.length !== 0) {
      setCardObj(getCardByID(array[array.length - 1]));
    }
  }, [array]);

  useEffect(() => {
    handleDisplayCallback(array, array.length);
  }, [array, array.length, handleDisplayCallback]);

  return (
    <Component
      className={[
        display ? 'animate-in' : '',
        !display ? 'animate-out' : ''
      ].join(' ')}
      data-file="LastPlayedCard"
      onClick={() => setDisplay(false)}
    >
      {cardObj !== null ? (
        <Card
          artist={cardObj.artist}
          attack={cardObj.attack}
          cardClass={cardObj.cardClass}
          collectible={cardObj.collectible}
          cost={cardObj.cost}
          elite={cardObj.elite}
          entourage={cardObj.entourage}
          flavor={cardObj.flavor}
          goldenImageSrc={cardObj.goldenImageSrc}
          health={cardObj.health}
          hideStats={cardObj.hideStats}
          howToEarn={cardObj.howToEarn}
          howToEarnGolden={cardObj.howToEarnGolden}
          id={cardObj.id}
          imageSrc={cardObj.imageSrc}
          mechanics={cardObj.mechanics}
          name={cardObj.name}
          playRequirements={cardObj.playRequirements}
          race={cardObj.race}
          rarity={cardObj.rarity}
          set={cardObj.set}
          sounds={cardObj.sounds}
          spellDamage={cardObj.spellDamage}
          spellType={cardObj.spellType}
          uuid={cardObj.uuid}
          targetingArrowText={cardObj.targetingArrowText}
          text={cardObj.text}
          type={cardObj.type}
          dynamicSpellDamageText={dynamicSpellDamageText}
        />
      ) : null}
    </Component>
  );
}

LastPlayedCard.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  array: PropTypes.array
};

const Component = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  left: 360px;
  opacity: 0;
  position: absolute;
  top: 20%;
  transform: scale(0.1);
  transition: 1200ms var(--animation-transition-cubic);
  transition-property: opacity, transform;
  z-index: 9000;

  &.animate-in {
    opacity: 1;
    transform: scale(1.25);
  }

  &.animate-out {
    opacity: 0;
    transform: scale(0.1);
    transition-duration: 400ms;
  }

  & > div {
    pointer-events: none;
  }
`;
