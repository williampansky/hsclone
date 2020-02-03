import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './cards/Card';
import CardInteractionLayer from '../systems/CardInteractionLayer';
import PlayerEnergy from './player-energy/PlayerEnergy';

export default function YourHand(props) {
  const {
    G,
    ctx,
    ctx: { currentPlayer },
    playerID
  } = props;
  const { energy, players } = G;
  const yourNumber = Number(playerID) === 0 ? 0 : 1;

  // state
  const [{ cards }, setCards] = useState({ cards: [] });

  useEffect(() => {
    players[yourNumber] && setCards({ cards: players[yourNumber].cards });
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
            } = card;

            return (
              <CardInteractionLayer
                data={card}
                key={index}
                index={index}
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
