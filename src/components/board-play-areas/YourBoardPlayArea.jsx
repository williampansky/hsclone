import React from 'react';
import PropTypes from 'prop-types';

// styles
import boardCSS from 'components/board-play-areas/board-play-area.module.scss';
import slotCSS from 'components/board-slots/board-slot.module.scss';

// child components
// import BoardDropArea from './BoardDropArea';
import BoardDropArea from 'components/board-drop-areas/BoardDropArea';
import BoardSlot from 'components/board-slots/BoardSlot';
// import SpellSlot from 'components/board-slots/SpellSlot';

export default function YourBoardPlayerArea({
  G,
  ctx,
  moves,
  isActive,
  board,
  yourID
}) {
  const { boards, selectedCardObject } = G;
  const { playMinionCard } = moves;
  const SELECTED_CARD_OBJECT = selectedCardObject[yourID];
  const CARD_IS_SELECTED = SELECTED_CARD_OBJECT !== null;
  const CARD_ID = SELECTED_CARD_OBJECT && SELECTED_CARD_OBJECT.id;

  function handleClick(index, id = CARD_ID) {
    if (boards[yourID][index]) return;
    return playMinionCard(index, id);
  }

  function dropMinion(index, id = CARD_ID) {
    return playMinionCard(index, id);
  }

  return (
    <React.Fragment>
      <div
        className={[
          boardCSS['board-play-area'],
          boardCSS['your-board-play-area'],
          CARD_IS_SELECTED ? slotCSS['board-is-active'] : ''
        ].join(' ')}
        data-file="board-play-areas/YourBoardPlayArea"
      >
        <BoardDropArea
          G={G}
          ctx={ctx}
          moves={moves}
          index={0}
          onClick={() => dropMinion(0)}
          boardIsActive={CARD_IS_SELECTED}
        />
        {boards[yourID].map((card, index) => {
          return (
            <React.Fragment key={`fragment_${index}`}>
              <BoardSlot
                G={G}
                ctx={ctx}
                moves={moves}
                isActive={isActive}
                data={card}
                key={`slot_${index}`}
                board={board}
                index={index}
                yourID={yourID}
                onClick={() => handleClick(index)}
              />
              <BoardDropArea
                G={G}
                ctx={ctx}
                moves={moves}
                index={index + 1}
                boardIsActive={CARD_IS_SELECTED}
                onClick={() => dropMinion(index + 1)}
              />
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
