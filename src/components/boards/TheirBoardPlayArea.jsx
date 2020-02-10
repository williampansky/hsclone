import React from 'react';
import boardCSS from './board-play-area.module.scss';
import slotCSS from './board-slot.module.scss';
import BoardSlot from './BoardSlot';

export default function TheirBoardPlayerArea(props) {
  const {
    allCards,
    G: { players, boards, selectedCardIndex },
    ctx,
    moves,
    playerID
  } = props;
  const theirNumber = Number(playerID) === 0 ? 1 : 0;
  const theirBoard = boards[theirNumber];
  const { slot1, slot2, slot3, slot4, slot5, slot6, slot7 } = theirBoard;

  // const RENDER_GLOBAL_SPELL_SLOT = selectedCardType === 'SPELL';
  const RENDER_SLOT_1 = slot1.minionData !== null;
  const RENDER_SLOT_2 = slot2.minionData !== null;
  const RENDER_SLOT_3 = slot3.minionData !== null;
  const RENDER_SLOT_4 = slot4.minionData !== null;
  const RENDER_SLOT_5 = slot5.minionData !== null;
  const RENDER_SLOT_6 = slot6.minionData !== null;
  const RENDER_SLOT_7 = slot7.minionData !== null;

  async function handleClick(event, slot, obj) {
    event.preventDefault();
    console.log(event);

    // if (!selectedCard) return;

    // return playCard(obj, slot).then(resp => {
    //   const { data, slot } = resp;
    //   const { cost } = data;
    //   const addObj = {
    //     card: data,
    //     slot: `slot${slot}`
    //   };

    //   dispatch(addMinion(addObj));
    //   dispatch(deselectCard());
    //   dispatch(removeCardFromYourHand(obj));
    //   dispatch(subtracted(cost));
    // });
  }

  return (
    <div
      className={[
        boardCSS['board-play-area'],
        boardCSS['their-board-play-area']
      ].join(' ')}
      data-file="TheirBoardPlayArea"
    >
      <BoardSlot
        minion={slot1}
        board="Theirs"
        render={RENDER_SLOT_1}
        slot={1}
        onClick={e => handleClick(e, 1)}
        {...props}
      />
      <BoardSlot
        minion={slot2}
        board="Theirs"
        render={RENDER_SLOT_2}
        slot={2}
        onClick={e => handleClick(e, 2)}
        {...props}
      />
      <BoardSlot
        minion={slot3}
        board="Theirs"
        render={RENDER_SLOT_3}
        slot={3}
        onClick={e => handleClick(e, 3)}
        {...props}
      />
      <BoardSlot
        minion={slot4}
        board="Theirs"
        render={RENDER_SLOT_4}
        slot={4}
        onClick={e => handleClick(e, 4)}
        {...props}
      />
      <BoardSlot
        minion={slot5}
        board="Theirs"
        render={RENDER_SLOT_5}
        slot={5}
        onClick={e => handleClick(e, 5)}
        {...props}
      />
      <BoardSlot
        minion={slot6}
        board="Theirs"
        render={RENDER_SLOT_6}
        slot={6}
        onClick={e => handleClick(e, 6)}
        {...props}
      />
      <BoardSlot
        minion={slot7}
        board="Theirs"
        render={RENDER_SLOT_7}
        slot={7}
        onClick={e => handleClick(e, 7)}
        {...props}
      />
    </div>
  );
}
