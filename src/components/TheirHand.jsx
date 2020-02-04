import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlayerEnergy from './player-energy/PlayerEnergy';
import CardBack from './cards/CardBack';
import css from 'styles/interactions/card-interactions.module.scss';

export default function TheirHand(props) {
  const {
    G,
    G: { energy, counts, hoveringCard, selectedCard },
    ctx,
    ctx: { currentPlayer },
    playerID,
    moves
  } = props;
  const theirNumber = Number(playerID) === 0 ? 1 : 0;
  const theirHoverState = hoveringCard[theirNumber];
  const theirSelectedState = selectedCard[theirNumber];
  const cardsInTheirHand = counts[theirNumber].hand;
  const energyObject = energy[theirNumber];

  function transformHovering(idx) {
    return `translateY(calc(${calcOffset(idx)} * 1px)) 
    rotate(calc(${calcRotate(idx)} * -0.25deg)) 
    scale(0.675)`;
  }

  function handleTransforms(idx) {
    let key;

    if (theirSelectedState === idx) key = 'selected';
    else if (theirHoverState === idx) key = 'hover';

    switch (key) {
      case 'selected':
        return false;

      case 'hover':
        return transformHovering(idx);

      default:
        return `translateY(calc(${calcOffset(idx)} * -1px)) 
        rotate(calc(${calcRotate(idx)} * -1deg)) 
        scale(0.675)`;
    }
  }

  function handleClasses(idx) {
    let key;

    if (theirSelectedState === idx) key = 'selected';
    else if (theirHoverState === idx) key = 'hover';

    switch (key) {
      case 'selected':
        return css['card-they-have-selected'];

      case 'hover':
        return css['card-they-are-hovering'];

      default:
        return false;
    }
  }

  return (
    <Component data-file="TheirHand" data-number-of-cards={cardsInTheirHand}>
      {Array.from(Array(cardsInTheirHand)).map((_, index) => {
        return (
          <div
            key={index}
            className={[css['card-in-their-hand'], handleClasses(index)].join(
              ' '
            )}
            data-index={index}
            style={{ transform: handleTransforms(index) }}
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
