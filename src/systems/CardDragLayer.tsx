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
    <Component id={id} ref={drag} isDragging={isDragging}>
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
}

const Component = styled.div<ComponentStyles>`
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  transition: transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
  user-select: none;
  padding: 0 0 20px;
  display: ${p => (p.isDragging ? 'none' : 'block')};

  &[draggable='true']:hover {
    transform: translateY(-65%);
    /* transition: transform 0.3s cubic-bezier(.25,.8,.25,1); */
  }
`;

export default CardDragLayer;
