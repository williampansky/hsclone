import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import Card from './cards/Card';
import CardInteractionLayer from '../systems/CardInteractionLayer';
import PlayerEnergy from './player-energy/PlayerEnergy';
import uid from 'utils/uid';

export default function YourHand(props) {
  const {
    allCards,
    G,
    ctx,
    ctx: { currentPlayer },
    playerID,
    moves: { hover }
  } = props;
  const { energy, players } = G;
  const yourNumber = Number(playerID) === 0 ? 0 : 1;

  // state
  // const [hoverRef, isHovered] = useHover();
  const [{ cards }, setCards] = useState({ cards: [] });

  const setCardsCallback = useCallback((incomingCards = []) => {
    // const newCardsForHand = incomingCards.map(cardId => {
    //   return {
    //     [uid()]: allCards[cardId]
    //   };
    // });

    // return cards === null
    //   ? setCards({
    //       cards: newCardsForHand
    //     })
    //   : setCards({
    //       cards: {
    //         cards,
    //         ...newCardsForHand
    //       }
    //     });

    const newCardsForHand = incomingCards.map(cardId => {
      return allCards[cardId];
    });

    return setCards({
      cards: [...cards, newCardsForHand].flat()
    });
  }, []);

  useEffect(() => {
    players[yourNumber] && setCardsCallback(players[yourNumber].hand);
  }, [G]);

  const energyObject = energy[yourNumber];

  return (
    <Component
      data-file="YourHand"
      data-number-of-cards={cards && cards.length}
    >
      {cards && cards.length
        ? cards.map((card, index) => {
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
            } = card;

            return (
              <CardInteractionLayer
                data={card}
                key={index}
                index={index}
                {...props}
                // interactions={isPlayable && 'is-playable'}
              >
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
              </CardInteractionLayer>
            );
          })
        : null}

      <PlayerEnergy energy={energyObject} />
    </Component>
  );
}

const Component = styled.div`
  align-items: center;
  background: var(--board-yourHand-background-color);
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: var(--board-yourHand-height);
  justify-content: center;
  position: relative;
  width: 100vw;
  z-index: var(--board-yourHand-zIndex);
`;
