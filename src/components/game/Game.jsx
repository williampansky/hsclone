import React from 'react';
import Board from 'components/boards/Board';
import TheirBoard from 'components/boards/TheirBoard';
import TheirHand from 'components/hands/TheirHand';
import YourBoard from 'components/boards/YourBoard';
import YourHand from 'components/hands/YourHand';
import EndTurnButton from 'components/end-turn/EndTurn';
import css from './game-component.module.scss';

export default function GameWrapper(props, { allCards }) {
  const {
    G,
    ctx,
    moves,
    events: { endTurn },
    // reset,
    // undo,
    // redo,
    // step,
    // log,
    // gameID,
    playerID
    // gameMetadata,
    // isActive,
    // isMultiplayer,
    // isConnected,
    // credentials
  } = props;

  return props ? (
    <div data-file="Game" className={css['game-component']}>
      <TheirHand {...props} />
      <Board {...props}>
        <TheirBoard allCards={allCards} {...props} />
        <EndTurnButton {...props} />
        <YourBoard allCards={allCards} {...props} />
      </Board>
      <YourHand allCards={allCards} {...props} />
    </div>
  ) : null;
}
