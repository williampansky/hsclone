import React from 'react';
import BoardSlot from 'components/board-slots/BoardSlot';

export default function TheirBoardPlayerArea({
  G,
  ctx,
  moves,
  isActive,
  board,
  theirID,
  yourID
}) {
  return (
    <div
      data-file="board-play-areas/TheirBoardPlayArea"
      className={['board-play-area', 'their-board-play-area'].join(' ')}
    >
      {G.boards[theirID].map((card, index) => {
        return (
          <BoardSlot
            G={G}
            ctx={ctx}
            moves={moves}
            isActive={isActive}
            data={card}
            board={board}
            key={`slot_${index}`}
            index={index}
            theirID={theirID}
            yourID={yourID}
          />
        );
      })}
    </div>
  );
}
