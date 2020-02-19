import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// child components
import Board from 'components/boards/Board';
import GameMenu from 'components/game-menu/GameMenu';
import GameOver from 'components/game-over/GameOver';
import TheirHand from 'components/hands/TheirHand';
import YourHand from 'components/hands/YourHand';

export default function GameWrapper(props) {
  // global state manipulations
  const [{ showMenu }, setShowMenu] = useState({ showMenu: false });

  // props destructuring
  const {
    G,
    ctx,
    moves,
    events,
    reset,
    undo,
    redo,
    step,
    log,
    gameID,
    playerID,
    gameMetadata,
    isActive,
    isMultiplayer,
    isConnected,
    credentials
  } = props;
  const { winner } = G;
  const { gameover } = ctx;

  // id declarations
  const yourID = playerID === '0' ? '0' : '1';
  const theirID = playerID === '0' ? '1' : '0';

  function toggleMenu() {
    return !showMenu
      ? setShowMenu({ showMenu: true })
      : setShowMenu({ showMenu: false });
  }

  const escFunction = useCallback(
    event => {
      if (event.keyCode === 27) {
        !showMenu
          ? setShowMenu({ showMenu: true })
          : setShowMenu({ showMenu: false });
      }
    },
    [showMenu]
  );

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return props ? (
    <React.Fragment>
      <div
        data-file="GameWrapper"
        className={['game-wrapper', gameover ? 'game-over' : ''].join(' ')}
      >
        <TheirHand G={G} theirID={theirID} toggleMenuFn={() => toggleMenu()} />
        <Board
          G={G}
          ctx={ctx}
          moves={moves}
          events={events}
          reset={reset}
          undo={undo}
          redo={redo}
          step={step}
          log={log}
          gameID={gameID}
          playerID={playerID}
          gameMetadata={gameMetadata}
          isActive={isActive}
          isMultiplayer={isMultiplayer}
          isConnected={isConnected}
          credentials={credentials}
          yourID={yourID}
          theirID={theirID}
        />
        <YourHand
          G={G}
          ctx={ctx}
          moves={moves}
          isActive={isActive}
          yourID={yourID}
        />
      </div>

      {gameover && <GameOver winner={winner} />}

      {showMenu && (
        <GameMenu
          G={G}
          moves={moves}
          isActive={isActive}
          yourID={yourID}
          showMenu={showMenu}
          toggleMenuFn={() => toggleMenu()}
        />
      )}
    </React.Fragment>
  ) : null;
}

GameWrapper.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  events: PropTypes.object,
  reset: PropTypes.func,
  undo: PropTypes.func,
  redo: PropTypes.func,
  step: PropTypes.func,
  log: PropTypes.array,
  gameID: PropTypes.string,
  playerID: PropTypes.string,
  gameMetadata: PropTypes.object,
  isActive: PropTypes.bool,
  isMultiplayer: PropTypes.bool,
  isConnected: PropTypes.bool,
  credentials: PropTypes.string
};
