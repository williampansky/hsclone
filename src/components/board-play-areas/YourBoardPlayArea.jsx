import React from 'react';
import PropTypes from 'prop-types';

// styles
import boardCSS from 'components/board-play-areas/board-play-area.module.scss';
import slotCSS from 'components/board-slots/board-slot.module.scss';

// child components
// import BoardDropArea from './BoardDropArea';
// import BoardSlot from './BoardSlot';
// import SpellSlot from 'components/board-slots/SpellSlot';

export default function YourBoardPlayerArea({ G, ctx, moves, yourID }) {
  const { boards, selectedCardObject } = G;

  return (
    <React.Fragment>
      <div
        className={[
          boardCSS['board-play-area'],
          boardCSS['your-board-play-area'],
          selectedCardObject !== null ? slotCSS['board-is-active'] : ''
        ].join(' ')}
        data-file="board-play-areas/YourBoardPlayArea"
      >
        {/* <BoardDropArea G={G} ctx={ctx} moves={moves} index={0} /> */}

        {boards[yourID].map((card, index) => {
          return (
            <React.Fragment key={`fragment_${index}`}>
              {/* <BoardSlot
                key={`slot_${index}`}
                board="Yours"
                // onClick={e => handleClick(e, index)}
              /> */}
              {/* <BoardDropArea G={G} ctx={ctx} moves={moves} index={0} /> */}
            </React.Fragment>
          );
        })}
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
