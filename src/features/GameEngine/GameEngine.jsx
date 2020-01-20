import { GameEngine as ReactGameEngine } from 'react-game-engine';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
// import { Box } from 'renderers/Box';
// import { MoveBox } from 'systems/MoveBox';

// import Spritesheet from 'react-responsive-spritesheet';

// redux
// import {
//   setStyleMinHeight,
//   setStyleMinWidth
// } from 'features/GameEngine/gameEngine.slice';

const GameEngine = ({ children }) => {
  const { style } = useSelector(s => s.gameEngine);
  // const { tileSize } = useSelector(s => s.grid);
  return (
    <ReactGameEngine
      entities={
        {
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          // box1: { x: 200, y: 200, renderer: <Box /> }
        }
      }
      systems={[]}
      style={{
        ...style
        // minHeight: tileSize * 20,
        // minWidth: tileSize * 30
      }}
    >
      {children}
    </ReactGameEngine>
  );
};

GameEngine.propTypes = {
  children: PropTypes.node
};

export default GameEngine;
