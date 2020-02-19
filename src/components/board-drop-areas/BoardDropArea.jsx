import React from 'react';

export default function BoardDropArea({
  G,
  ctx,
  moves,
  index,
  onClick,
  boardIsActive,
  areaIsAlone
}) {
  return (
    <div
      data-file="board-drop-areas/BoardDropArea"
      data-index={index}
      className={[
        'drop-area',
        boardIsActive ? 'board-is-active' : '',
        areaIsAlone ? 'area-is-alone' : ''
      ].join(' ')}
      onClick={onClick}
    ></div>
  );
}
