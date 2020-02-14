import React from 'react';
import css from './board.module.scss';
import TheirAvatar from '../avatars/TheirAvatar';
import TheirBoardPlayerArea from './TheirBoardPlayArea';
import avatars from '../../config/avatars.config';

export default function TheirBoard({
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
  theirID,
  gameMetadata,
  isActive,
  isMultiplayer,
  isConnected,
  credentials
}) {
  return (
    <div className={css['their-board']} data-file="TheirBoard">
      <TheirAvatar
        src={avatars[G.playerClass[theirID]]}
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
        theirID={theirID}
        gameMetadata={gameMetadata}
        isActive={isActive}
        isMultiplayer={isMultiplayer}
        isConnected={isConnected}
        credentials={credentials}
      />
      <TheirBoardPlayerArea
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
        theirID={theirID}
        gameMetadata={gameMetadata}
        isActive={isActive}
        isMultiplayer={isMultiplayer}
        isConnected={isConnected}
        credentials={credentials}
      />
    </div>
  );
}
