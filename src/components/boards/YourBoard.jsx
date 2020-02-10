import React from 'react';
import YourBoardPlayerArea from './YourBoardPlayArea';
import YourAvatar from '../avatars/YourAvatar';
import avatars from '../../config/avatars.config';
import css from './board.module.scss';
import slotCSS from './board-slot.module.scss';

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
  const cardIsSelected =
    G.selectedCardIndex[playerID] !== null &&
    G.selectedCardObject[playerID] !== null;
  const cardType = cardIsSelected && G.selectedCardObject[playerID].type;
  const spellType = cardIsSelected && G.selectedCardObject[playerID].spellType;

  return (
    <div
      className={[
        css['your-board'],
        cardIsSelected ? slotCSS['board-is-active'] : '',
        cardType === 'SPELL' && spellType === 'GLOBAL'
          ? slotCSS['spell-is-global']
          : ''
      ].join(' ')}
      data-file="YourBoard"
    >
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
