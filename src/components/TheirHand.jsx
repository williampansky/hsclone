import React from 'react';
import styled from 'styled-components';
import PlayerEnergy from './player-energy/PlayerEnergy';
import CardBack from './cards/CardBack';
import CardInteractionLayer from '../systems/CardInteractionLayer';

export default function TheirHand(props) {
  const { G } = props;
  const { energy, numberOfCardsInTheirHand } = G;
  const energyObject = energy && energy.player2;

  return (
    <Component
      data-file="TheirHand"
      data-number-of-cards={numberOfCardsInTheirHand}
    >
      {Array(numberOfCardsInTheirHand).map((card, index) => {
        return (
          <CardInteractionLayer key={index} index={index} theirHand>
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
