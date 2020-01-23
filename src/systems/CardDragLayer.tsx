import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { CardType, CardTypeLabel } from 'enums/CardType';
import { Card as CardInterface } from 'interfaces/Card';

interface CardDragLayer extends CardInterface {
  children: Node;
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
  children
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
    <Component id={id} ref={drag}>
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

const Component = styled.div`
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: transform 100ms ease;
  user-select: none;

  &[draggable='true']:hover {
    transform: translateY(-10px) scale(1.05);
    transition: transform 200ms ease;
  }
`;

export default CardDragLayer;
