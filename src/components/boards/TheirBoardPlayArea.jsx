import React from 'react';
import boardCSS from './board-play-area.module.scss';
import slotCSS from './board-slot.module.scss';
import BoardSlot from './BoardSlot';

export default function TheirBoardPlayerArea(props) {
  const {
    allCards,
    G: { players, boards, selectedCardIndexObject },
    ctx,
    moves,
    playerID
  } = props;
  const theirNumber = Number(playerID) === 0 ? 1 : 0;
  const theirBoard = boards[theirNumber];
  const { slot1, slot2, slot3, slot4, slot5, slot6, slot7 } = theirBoard;

  // const RENDER_GLOBAL_SPELL_SLOT = selectedCardType === 'SPELL';
  const RENDER_SLOT_1 = slot1 !== null;
  const RENDER_SLOT_2 = slot2 !== null;
  const RENDER_SLOT_3 = slot3 !== null;
  const RENDER_SLOT_4 = slot4 !== null;
  const RENDER_SLOT_5 = slot5 !== null;
  const RENDER_SLOT_6 = slot6 !== null;
  const RENDER_SLOT_7 = slot7 !== null;

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

  // prettier-ignore
  return (
    <div
    className={[
      boardCSS['board-play-area'],
      boardCSS['their-board-play-area'],
    ].join(' ')}
      data-file="TheirBoardPlayArea"
    >
      <BoardSlot minion={allCards[slot1]} p="Theirs" render={RENDER_SLOT_1} slot={1} onClick={e => handleClick(e, 1)} />
      <BoardSlot minion={allCards[slot2]} p="Theirs" render={RENDER_SLOT_2} slot={2} onClick={e => handleClick(e, 2)} />
      <BoardSlot minion={allCards[slot3]} p="Theirs" render={RENDER_SLOT_3} slot={3} onClick={e => handleClick(e, 3)} />
      <BoardSlot minion={allCards[slot4]} p="Theirs" render={RENDER_SLOT_4} slot={4} onClick={e => handleClick(e, 4)} />
      <BoardSlot minion={allCards[slot5]} p="Theirs" render={RENDER_SLOT_5} slot={5} onClick={e => handleClick(e, 5)} />
      <BoardSlot minion={allCards[slot6]} p="Theirs" render={RENDER_SLOT_6} slot={6} onClick={e => handleClick(e, 6)} />
      <BoardSlot minion={allCards[slot7]} p="Theirs" render={RENDER_SLOT_7} slot={7} onClick={e => handleClick(e, 7)} />
    </div>
  );
}
