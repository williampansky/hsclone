import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayerEnergy from './player-energy/PlayerEnergy';
import CardBack from './cards/CardBack';
import CardInteractionLayer from '../systems/CardInteractionLayer';

export default function TheirHand(props) {
  const {
    G,
    G: { energy, counts, hovering },
    ctx,
    ctx: { currentPlayer },
    playerID
  } = props;
  const theirNumber = Number(playerID) === 0 ? 1 : 0;
  const theirHover = hovering[theirNumber];
  const cardsInTheirHand = counts[theirNumber].hand;
  const energyObject = energy[theirNumber];

  return (
    <Component data-file="TheirHand" data-number-of-cards={cardsInTheirHand}>
      {Array.from(Array(cardsInTheirHand)).map((_, index) => {
        return (
          <CardInteractionLayer
            key={index}
            index={index}
            theirHand
            theyAreHovering={theirHover}
          >
            <CardBack />
          </CardInteractionLayer>
        );
      })}

      <PlayerEnergy energy={energyObject} />
    </Component>
  );
}

const Component = styled.div`
  align-items: center;
  background: var(--board-theirHand-background-color);
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: var(--board-theirHand-height);
  justify-content: center;
  position: relative;
  width: 100vw;
  z-index: var(--board-theirHand-zIndex);
`;
