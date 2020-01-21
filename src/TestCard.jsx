import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const TestCard = ({ name, id, type, background }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type, id, background: background },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <Component id={id} ref={drag} bgColor={background}>
      {name}
    </Component>
  );
};

const Component = styled.div`
  background: ${p => p.bgColor};
  cursor: pointer;
  height: 100px;
  width: 65px;
  transition: transform 100ms ease;
  user-select: none;

  &[draggable='true']:hover {
    transform: translateY(-10px) scale(1.05);
    transition: transform 200ms ease;
  }
`;

export default TestCard;
