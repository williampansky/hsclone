import React from 'react';
import GameMenuTrigger from 'components/game-menu/GameMenuTrigger';
import 'components/game-menu/game-menu.scss';

export default function GameMenu({ G, moves, yourID, showMenu, toggleMenuFn }) {
  function handleForfeitGame(event) {
    moves.forfeitGame(yourID);
  }

  return (
    <div data-file="GameMenu" className="game-menu">
      <GameMenuTrigger showMenu={showMenu} toggleMenuFn={toggleMenuFn} />
      <h1>Menu</h1>
      <button
        className="forfeit-game-button"
        onClick={e => handleForfeitGame(e)}
      >
        Forfeit game
      </button>
    </div>
  );
}
