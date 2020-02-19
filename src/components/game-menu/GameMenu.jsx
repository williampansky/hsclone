import React from 'react';
import GameMenuTrigger from 'components/game-menu/GameMenuTrigger';

export default function GameMenu({
  G,
  moves,
  isActive,
  yourID,
  showMenu,
  toggleMenuFn
}) {
  const { forfeitGame } = moves;

  function handleForfeitGame(event) {
    event.target.blur();
    return forfeitGame(yourID);
  }

  return (
    <div data-file="GameMenu" className="game-menu">
      <GameMenuTrigger showMenu={showMenu} toggleMenuFn={toggleMenuFn} />
      <h1>Menu</h1>
      <button
        className="forfeit-game-button"
        disabled={!isActive}
        onClick={event => handleForfeitGame(event)}
      >
        Forfeit game
      </button>
      {!isActive && <div>Can only forfeit on your turn.</div>}
    </div>
  );
}
