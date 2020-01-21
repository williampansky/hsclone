import React from 'react';

// libs
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// renderers
import WindowSizer from 'features/layout/WindowSizer';

// ui layout
import Footer from 'features/layout/Footer.container';
import Header from 'features/layout/Header.container';
import Board from 'features/layout/Board.container';
import YourBoard from 'features/yourBoard/YourBoard';
import TheirBoard from 'features/layout/TheirBoard.container';

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
        <DndProvider backend={HTML5Backend}>
          <Board onMouseMove={event => handleMouseMove(event)}>
            <TheirBoard />
            <YourBoard />
          </Board>
          <Footer />
        </DndProvider>
      </WindowSizer>
    </React.Fragment>
  );
}
