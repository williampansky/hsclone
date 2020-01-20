import React, { useState, useRef } from 'react';

import { useDrop } from 'react-dnd';

import styled from 'styled-components';

const BoardDropArea = ({ children, dropItem, afterIndex }) => {
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
  background: lightcoral;
  width: ${p => (p.canDrop && p.isOver ? '10%' : '2%')};
  transition: width 200ms ease-in-out;
  will-change: width;
`;

export default BoardDropArea;
