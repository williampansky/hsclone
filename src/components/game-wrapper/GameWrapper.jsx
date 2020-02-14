import React from 'react';
import PropTypes from 'prop-types';
// import defaultGameState from '../../lib/state';
// import defaultGameMoves from '../../lib/moves';
// import Board from 'components/boards/Board';
// import TheirBoard from 'components/boards/TheirBoard';
import TheirHand from 'components/hands/TheirHand';
// import YourBoard from 'components/boards/YourBoard';
import YourHand from 'components/hands/YourHand';
import EndTurnButton from 'components/end-turn/EndTurn';
import WrapperCSS from './game-wrapper.module.scss';
import BoardCSS from './board.module.scss';

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

  const yourID = playerID === '0' ? '0' : '1';
  const theirID = playerID === '0' ? '1' : '0';

  return props ? (
    <div data-file="GameWrapper" className={WrapperCSS['game-wrapper']}>
      <TheirHand G={G} theirID={theirID} />
      <div data-file="Board" className={BoardCSS['board']}>
        <div data-file="TheirBoard" className={BoardCSS['their-board']}></div>
        <EndTurnButton
          G={G}
          ctx={ctx}
          moves={moves}
          events={events}
          isActive={isActive}
          yourID={yourID}
          theirID={theirID}
        />
        <div data-file="TheirBoard" className={BoardCSS['your-board']}></div>
      </div>
      <YourHand G={G} yourID={yourID} />
    </div>
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
