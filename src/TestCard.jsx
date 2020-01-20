import React from 'react';
import { useDrag } from 'react-dnd';

const TestCard = ({ name, id, type, background }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: type, id, background: background },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`You dropped ${item.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <div
      id={id}
      ref={drag}
      style={{
        cursor: 'pointer',
        height: 100,
        width: 65,
        background: background
      }}
    >
      {name}
    </div>
  );
};

export default TestCard;
