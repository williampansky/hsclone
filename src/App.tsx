import React from 'react';

// libs
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// renderers
import WindowSizer from 'features/layout/WindowSizer';

// ui layout
import Footer from 'features/layout/Footer.container';
import Header from 'features/layout/Header';
import DebugBar from 'features/layout/DebugBar';
import Board from 'features/layout/Board.container';
import YourBoard from 'features/yourBoard/YourBoard';
import TheirBoard from 'features/layout/TheirBoard.container';

export default function App() {
  return (
    <React.Fragment>
      <WindowSizer>
        <DebugBar />
        <Header />
        <DndProvider backend={HTML5Backend}>
          <Board>
            <TheirBoard />
            <YourBoard />
          </Board>
          <Footer />
        </DndProvider>
      </WindowSizer>
    </React.Fragment>
  );
}
