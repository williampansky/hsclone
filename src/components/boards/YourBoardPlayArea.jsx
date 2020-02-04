import React from 'react';
import boardCSS from './board-play-area.module.scss';
import slotCSS from './board-slot.module.scss';
import BoardSlot from './BoardSlot';

export default function YourBoardPlayerArea(props) {
  const {
    G: { players, boards, selectedCardIndexObject },
    ctx,
    moves,
    playerID
  } = props;
  const yourHand = players[playerID].hand;
  const yourBoard = boards[playerID];
  const cardIsSelected = selectedCardIndexObject[playerID] !== null;
  const selectedCardIndex = selectedCardIndexObject[playerID];
  const selectedCardId = yourHand[selectedCardIndex];

  const RENDER_SLOT_1 = yourBoard.slot2 !== null;
  const RENDER_SLOT_2 = yourBoard.slot3 !== null;
  const RENDER_SLOT_3 = yourBoard.slot4 !== null;
  const RENDER_SLOT_5 = yourBoard.slot4 !== null;
  const RENDER_SLOT_6 = yourBoard.slot5 !== null;
  const RENDER_SLOT_7 = yourBoard.slot6 !== null;

  function handleMoves(slotNumber, cardId, cardIndex) {
    moves.playMinionCard(slotNumber, cardId, cardIndex);
    moves.hoverOverCardInHand(null);
    moves.selectPlayableCard(null);
  }

  function handleClick(
    event,
    slotNumber,
    cardId = selectedCardId,
    cardIndex = selectedCardIndex
  ) {
    event.preventDefault();
    if (!cardIsSelected) return;
    return handleMoves(slotNumber, cardId, cardIndex);
  }

  function handleClasses(idx) {
    let key;

    if (cardIsSelected) key = 'active';

    switch (key) {
      case 'active':
        return slotCSS['board-is-active'];

      default:
        return false;
    }
  }

  // prettier-ignore
  return (
    <div
      className={[
        boardCSS['board-play-area'],
        boardCSS['your-board-play-area'],
        handleClasses()
      ].join(' ')}
      data-file="boards/YourBoardPlayArea"
    >
      {RENDER_SLOT_1 && <BoardSlot minion={yourBoard.slot1} p="Yours" slot={1} onClick={e => handleClick(e, 1)} />}
      {RENDER_SLOT_2 && <BoardSlot minion={yourBoard.slot2} p="Yours" slot={2} onClick={e => handleClick(e, 2)} />}
      {RENDER_SLOT_3 && <BoardSlot minion={yourBoard.slot3} p="Yours" slot={3} onClick={e => handleClick(e, 3)} />}
      <BoardSlot minion={yourBoard.slot4} p="Yours" slot={4} onClick={e => handleClick(e, 4)} />
      {RENDER_SLOT_5 && <BoardSlot minion={yourBoard.slot5} p="Yours" slot={5} onClick={e => handleClick(e, 5)} />}
      {RENDER_SLOT_6 && <BoardSlot minion={yourBoard.slot6} p="Yours" slot={6} onClick={e => handleClick(e, 6)} />}
      {RENDER_SLOT_7 && <BoardSlot minion={yourBoard.slot7} p="Yours" slot={7} onClick={e => handleClick(e, 7)} />}
    </div>
  );
}
