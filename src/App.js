import React from 'react';

// renderers
import WindowSizer from 'renderers/WindowSizer';

// ui layout
import GameEngine from 'features/GameEngine/GameEngine';
import Footer from 'features/layout/Footer.container';
import Header from 'features/layout/Header.container';
import Stage from 'features/layout/Stage.container';

// assets
// const png = require('house.svg');

import Scene from 'features/layout/Scene.container';

export default function App() {
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);

  const handleMouseMove = event => {
    const { nativeEvent } = event;
    const { offsetX, offsetY } = nativeEvent;
    setMouseX(offsetX);
    setMouseY(offsetY);
  };

  return (
    <React.Fragment>
      <WindowSizer>
        <Header mousePositionX={mouseX} mousePositionY={mouseY} />
        <Stage onMouseMove={event => handleMouseMove(event)}>
          <GameEngine>
            <Scene mousePositionX={mouseX} mousePositionY={mouseY} />
          </GameEngine>
        </Stage>
        <Footer mousePositionX={mouseX} mousePositionY={mouseY} />
      </WindowSizer>
    </React.Fragment>
  );
}
