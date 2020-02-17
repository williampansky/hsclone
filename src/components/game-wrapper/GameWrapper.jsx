import React from 'react';
import PropTypes from 'prop-types';
// import defaultGameState from '../../lib/state';
// import defaultGameMoves from '../../lib/moves';
import Board from 'components/boards/Board';
// import TheirBoard from 'components/boards/TheirBoard';
import TheirHand from 'components/hands/TheirHand';
// import YourBoard from 'components/boards/YourBoard';
import YourHand from 'components/hands/YourHand';
import GameOver from 'components/game-over/GameOver';

import WrapperCSS from './game-wrapper.module.scss';

export default function GameWrapper(props) {
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

  const yourID = playerID === '0' ? '0' : '1';
  const theirID = playerID === '0' ? '1' : '0';

  return props ? (
    <React.Fragment>
      {gameover && <GameOver winner={winner} />}

      <div
        data-file="GameWrapper"
        className={[
          WrapperCSS['game-wrapper'],
          gameover ? WrapperCSS['game-over'] : ''
        ].join(' ')}
      >
        <TheirHand G={G} theirID={theirID} />
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
