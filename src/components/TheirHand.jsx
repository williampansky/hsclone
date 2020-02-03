import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayerEnergy from './player-energy/PlayerEnergy';
import CardBack from './cards/CardBack';
import css from 'styles/interactions/card-interactions.module.scss';

export default function TheirHand(props) {
  const {
    G,
    G: { energy, counts, hovering },
    ctx,
    ctx: { currentPlayer },
    playerID,
    moves
  } = props;
  const theirNumber = Number(playerID) === 0 ? 1 : 0;
  const theirHoverState = hovering[theirNumber];
  const cardsInTheirHand = counts[theirNumber].hand;
  const energyObject = energy[theirNumber];

  return (
    <Component data-file="TheirHand" data-number-of-cards={cardsInTheirHand}>
      {Array.from(Array(cardsInTheirHand)).map((_, index) => {
        return (
          <div
            key={index}
            className={[
              css['card-in-their-hand'],
              theirHoverState === index ? css['card-they-are-hovering'] : ''
            ].join(' ')}
            data-index={index}
            style={{
              transform:
                theirHoverState === index
                  ? `
                  translateY(calc(${calcOffset(index)} * 1px)) 
                  rotate(calc(${calcRotate(index)} * -0.25deg)) 
                  scale(0.675)`
                  : `
                  translateY(calc(${calcOffset(index)} * -1px)) 
                  rotate(calc(${calcRotate(index)} * -1deg)) 
                  scale(0.675)`
            }}
          >
            <CardBack />
          </div>
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
