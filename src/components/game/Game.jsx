import React from 'react';
import Board from 'components/boards/Board';
import TheirBoard from 'components/boards/TheirBoard';
import TheirHand from 'components/TheirHand';
import YourBoard from 'components/boards/YourBoard';
import YourHand from 'components/YourHand';
import EndTurnButton from 'components/end-turn/EndTurn';
import css from './game-component.module.scss';

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

  return props ? (
    <div data-file="Game" className={css['game-component']}>
      <TheirHand {...props} />
      <Board {...props}>
        <TheirBoard {...props} />
        <EndTurnButton {...props} />
        <YourBoard {...props} />
      </Board>
      <YourHand {...props} />
    </div>
  ) : null;
}
