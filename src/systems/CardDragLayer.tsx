/* tslint:disable */
import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { CardType, CardTypeLabel } from 'enums/CardType';
import { Card as CardInterface } from 'interfaces/Card';

interface CardDragLayer extends CardInterface {
  children: Node;
  index: number;
}

const CardDragLayer = ({
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
  type,
  children,
  index
}: CardDragLayer) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
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
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <Component id={id} index={index + 1} ref={drag} isDragging={isDragging}>
      {children}
    </Component>
  );
};

const defaultProps = {
  card: {},
  name: undefined,
  id: undefined,
  type: 0,
  children: <React.Fragment />
};

CardDragLayer.defaultProps = defaultProps;

interface ComponentStyles {
  isDragging: boolean;
  index: number;
}

function calcOffset(index: number, range: number = 80, total: number = 10) {
  // prettier-ignore
  // abs(($i - ($total - 1) / 2) / ($total - 2) * $offsetRange);
  return Math.abs((index - (total - 1) / 2) / (total - 2) * range);
}

function calcRotate(index: number, range: number = 50, total: number = 10) {
  // prettier-ignore
  // ($i - ($total - 1) / 2) / ($total - 2) * $rotationRange;
  return (index - (total - 1) / 2) / (total - 2) * range;
}

// transforms inspired by https://codepen.io/jackrugile/pen/WZGeGM
const Component = styled.div<ComponentStyles>`
  box-shadow: -5px 5px 5px hsla(0, 0%, 0%, 0.15);
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: 800ms cubic-bezier(0.19, 1, 0.22, 1);
  transition-property: transform;
  user-select: none;
  padding: 0;
  opacity: ${p => (p.isDragging ? '0' : '1')};
  transform: ${p => `
    translateY(calc(${calcOffset(p.index)} * 1px)) 
    rotate(calc(${calcRotate(p.index)} * 1deg));
  `};
  z-index: 1;

  &:after {
    animation: none;
    background: #fff;
    bottom: 0;
    content: '';
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    pointer-events: none;
  }

  &[draggable='true']:hover {
    box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.4);
    transform: translateY(calc(-0.615 * var(--card-height))) rotate(0deg);
    transition: 100ms cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 100;

    &:after {
      animation: fade 250ms ease-out forwards;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0.625;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.15);
    }
  }
`;

export default CardDragLayer;
