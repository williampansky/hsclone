import React from 'react';
import dropCSS from 'components/board-drop-areas/board-drop-area.module.scss';

export default function BoardDropArea({
  G,
  ctx,
  moves,
  index,
  onClick,
  boardIsActive
}) {
  // const BOARD_IS_ACTIVE = cardIsSelected && spellType !== 'GLOBAL';
  // const AREA_IS_ALONE = BOARD_IS_ACTIVE && G.boards[playerID].length === 0;

  return (
    <div
      data-index={index}
      className={[
        dropCSS['drop-area'],
        boardIsActive ? dropCSS['board-is-active'] : ''
        // AREA_IS_ALONE ? dropCSS['area-is-alone'] : ''
      ].join(' ')}
      onClick={onClick}
    ></div>
  );
}
