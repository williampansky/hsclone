import React from 'react';
import YourBoardPlayerArea from './YourBoardPlayArea';
import css from './board.module.scss';
import YourAvatar from '../avatars/YourAvatar';
import avatars from '../../config/avatars.config';

export default function YourBoard({
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
}) {
  return (
    <div className={css['your-board']} data-file="YourBoard">
      <YourBoardPlayerArea
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
      />
      <YourAvatar
        src={avatars[G.playerClass[playerID]]}
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
      />
    </div>
  );
}
