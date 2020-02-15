import React from 'react';
import PropTypes from 'prop-types';

// styles
import boardCSS from 'components/board-play-areas/board-play-area.module.scss';
import slotCSS from 'components/board-slots/board-slot.module.scss';

// child components
// import BoardDropArea from './BoardDropArea';
import BoardSlot from 'components/board-slots/BoardSlot';
// import SpellSlot from 'components/board-slots/SpellSlot';

export default function YourBoardPlayerArea({ G, ctx, moves, yourID }) {
  const { boards, selectedCardObject } = G;
  const { playMinionCard } = moves;

  function handleClick(index) {
    if (boards[yourID][index]) return;
    const id = selectedCardObject[yourID] && selectedCardObject[yourID].id;
    return playMinionCard(index, id);
  }

  return (
    <React.Fragment>
      <div
        className={[
          boardCSS['board-play-area'],
          boardCSS['your-board-play-area'],
          selectedCardObject[yourID] !== null ? slotCSS['board-is-active'] : ''
        ].join(' ')}
        data-file="board-play-areas/YourBoardPlayArea"
      >
        {/* <BoardDropArea G={G} ctx={ctx} moves={moves} index={0} /> */}
        {boards[yourID].length === 0 ? (
          <BoardSlot
            G={G}
            ctx={ctx}
            moves={moves}
            data={boards[yourID][0]}
            key={`slot_0`}
            index={0}
            onClick={() => handleClick(0)}
          />
        ) : (
          boards[yourID].map((card, index) => {
            return (
              <React.Fragment key={`fragment_${index}`}>
                <BoardSlot
                  G={G}
                  ctx={ctx}
                  moves={moves}
                  data={card}
                  key={`slot_${index}`}
                  index={index}
                  yourID={yourID}
                  onClick={() => handleClick(index)}
                />
              </React.Fragment>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
}

YourBoardPlayerArea.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  yourID: PropTypes.string
};
