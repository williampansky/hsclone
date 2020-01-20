import React, { useState, useRef } from 'react';

import { useDrop } from 'react-dnd';

import styled from 'styled-components';

const BoardDropArea = ({ afterIndex, children, dropItem, greedy }) => {
  const [{ canDrop, isOver, item }, drop] = useDrop({
    accept: 'CARD',
    canDrop: (object, monitor) => object,
    drop: (object, monitor) => dropItem(object, afterIndex),
    collect: monitor => ({
      canDrop: !!monitor.canDrop(),
      isOver: !!monitor.isOver(),
      object: monitor.getItem()
    })
  });

  if (greedy) {
    return (
      <Component
        data-file="BoardDropArea"
        canDrop={canDrop}
        isGreedy={greedy}
        isOver={isOver}
        ref={drop}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      data-file="BoardDropArea"
      canDrop={canDrop}
      isOver={isOver}
      ref={drop}
    >
      {children}
    </Component>
  );
};

const Component = styled.div`
  height: 100%;
  background: ${p => (p.isGreedy ? 'none' : 'lightcoral')};
  width: ${p => (p.canDrop && p.isOver ? '10%' : '2%')};
  transition: width 200ms ease-in-out;
  will-change: width;
  position: ${p => (p.isGreedy ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
`;

export default BoardDropArea;
