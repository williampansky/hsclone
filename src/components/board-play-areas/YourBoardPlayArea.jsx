import React from 'react';
import PropTypes from 'prop-types';

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
  const { playCard } = moves;
  const SELECTED_CARD_OBJECT = selectedCardObject[yourID];
  const CARD_IS_SELECTED = SELECTED_CARD_OBJECT !== null;
  const CARD_ID = SELECTED_CARD_OBJECT && SELECTED_CARD_OBJECT.id;
  const CARD_TYPE = SELECTED_CARD_OBJECT && SELECTED_CARD_OBJECT.type;
  const CARD_SPELLTYPE = SELECTED_CARD_OBJECT && SELECTED_CARD_OBJECT.spellType;

  function handleClick(index, id = CARD_ID) {
    if (boards[yourID][index]) return;
    return playCard(index, id);
  }

  function dropMinion(index, id = CARD_ID) {
    return playCard(index, id);
  }

  return (
    <React.Fragment>
      <div
        data-file="board-play-areas/YourBoardPlayArea"
        className={[
          'board-play-area',
          'your-board-play-area',
          CARD_IS_SELECTED && CARD_SPELLTYPE !== 'GLOBAL'
            ? 'board-is-active'
            : ''
        ].join(' ')}
      >
        {boards[yourID].length <= 6 ? (
          <BoardDropArea
            G={G}
            ctx={ctx}
            moves={moves}
            index={0}
            onClick={() => dropMinion(0)}
            boardIsActive={CARD_IS_SELECTED && CARD_SPELLTYPE !== 'GLOBAL'}
            areaIsAlone={CARD_IS_SELECTED && boards[yourID].length === 0}
          />
        ) : null}
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
              {boards[yourID].length <= 6 ? (
                <BoardDropArea
                  G={G}
                  ctx={ctx}
                  moves={moves}
                  index={index + 1}
                  boardIsActive={
                    CARD_IS_SELECTED && CARD_SPELLTYPE !== 'GLOBAL'
                  }
                  onClick={() => dropMinion(index + 1)}
                />
              ) : null}
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
