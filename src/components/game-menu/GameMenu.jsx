import React from 'react';
import GameMenuTrigger from 'components/game-menu/GameMenuTrigger';
import 'components/game-menu/game-menu.scss';

export default function GameMenu({
  G,
  moves,
  isActive,
  yourID,
  showMenu,
  toggleMenuFn
}) {
  function handleForfeitGame(event) {
    moves.forfeitGame(yourID);
  }

  return (
    <div data-file="GameMenu" className="game-menu">
      <GameMenuTrigger showMenu={showMenu} toggleMenuFn={toggleMenuFn} />
      <h1>Menu</h1>
      <button
        className="forfeit-game-button"
        disabled={!isActive}
        onClick={e => handleForfeitGame(e)}
      >
        Forfeit game
      </button>
      {!isActive && <div>Can only forfeit on your turn.</div>}
    </div>
  );
}
