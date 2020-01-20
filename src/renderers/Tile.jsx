import React from 'react';

const Tile = () => {
  const size = 100;
  return (
    <div
      style={{
        border: '1px solid',
        borderColor: 'lightgray',
        height: size,
        left: '45%',
        position: 'absolute',
        top: '50%',
        width: size,
        zIndex: 0
      }}
    />
  );
};

export { Tile };
