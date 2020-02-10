import React from 'react';
import boardCSS from './board-play-area.module.scss';
import slotCSS from './board-slot.module.scss';
import dropCSS from './drop-area.module.scss';

export default function BoardDropArea({
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
  credentials,
  onClick,
  index,
  cardIsSelected,
  cardType,
  spellType
}) {
  const BOARD_IS_ACTIVE = cardIsSelected && spellType !== 'GLOBAL';
  const AREA_IS_ALONE = BOARD_IS_ACTIVE && G.boards[playerID].length === 0;

  return (
    <div
      className={[
        dropCSS['drop-area'],
        BOARD_IS_ACTIVE ? dropCSS['board-is-active'] : '',
        AREA_IS_ALONE ? dropCSS['area-is-alone'] : ''
      ].join(' ')}
      data-index={index}
      onClick={onClick}
    ></div>
  );
}
