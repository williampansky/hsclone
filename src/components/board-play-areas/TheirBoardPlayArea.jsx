import React from 'react';
import boardCSS from 'components/board-play-areas/board-play-area.module.scss';
import BoardSlot from 'components/board-slots/BoardSlot';

export default function TheirBoardPlayerArea({
  G,
  ctx,
  moves,
  theirID,
  yourID
}) {
  function handleClick(index) {
    console.log(index);
  }

  return (
    <div
      data-file="board-play-areas/TheirBoardPlayArea"
      className={[
        boardCSS['board-play-area'],
        boardCSS['their-board-play-area']
      ].join(' ')}
    >
      {G.boards[theirID].map((card, index) => {
        return (
          <BoardSlot
            G={G}
            ctx={ctx}
            moves={moves}
            data={card}
            key={`slot_${index}`}
            index={index}
            theirID={theirID}
            yourID={yourID}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
}
