import React from 'react';
import boardCSS from './board-play-area.module.scss';
import slotCSS from './board-slot.module.scss';
import BoardSlot from './BoardSlot';
import SpellSlot from './SpellSlot';

export default function YourBoardPlayerArea(props) {
  const {
    allCards,
    G: { players, boards, selectedCardIndexObject },
    ctx,
    moves,
    playerID
  } = props;
  const yourHand = players[playerID].hand;
  const yourBoard = boards[playerID];
  const { slot1, slot2, slot3, slot4, slot5, slot6, slot7 } = yourBoard;
  const cardIsSelected = selectedCardIndexObject[playerID] !== null;
  const selectedCardIndex = selectedCardIndexObject[playerID];
  const selectedCardId = yourHand[selectedCardIndex];
  const selectedCardType =
    allCards[selectedCardId] && allCards[selectedCardId].type;

  const RENDER_GLOBAL_SPELL_SLOT = selectedCardType === 'SPELL';
  const RENDER_SLOT_1 = slot2 !== null;
  const RENDER_SLOT_2 = slot3 !== null;
  const RENDER_SLOT_3 = slot4 !== null;
  const RENDER_SLOT_4 = slot4 === null && selectedCardType !== 'SPELL';
  const RENDER_SLOT_5 = slot4 !== null;
  const RENDER_SLOT_6 = slot5 !== null;
  const RENDER_SLOT_7 = slot6 !== null;

  function handleMinionMoves(slotNumber, cardId, cardIndex) {
    moves.playMinionCard(slotNumber, cardId, cardIndex);
    moves.hoverOverCardInHand(null);
    moves.selectPlayableCard(null);
  }

  function handleSpellMoves(cardId, cardIndex) {
    moves.playSpellCard(cardId, cardIndex);
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
    if (slotNumber === 0) return handleSpellMoves(cardId, cardIndex);
    return handleMinionMoves(slotNumber, cardId, cardIndex);
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
      <SpellSlot render={RENDER_GLOBAL_SPELL_SLOT} slot={0} onClick={e => handleClick(e, 0)} />
      <BoardSlot minion={slot1} p="Yours" render={RENDER_SLOT_1} slot={1} onClick={e => handleClick(e, 1)} />
      <BoardSlot minion={slot2} p="Yours" render={RENDER_SLOT_2} slot={2} onClick={e => handleClick(e, 2)} />
      <BoardSlot minion={slot3} p="Yours" render={RENDER_SLOT_3} slot={3} onClick={e => handleClick(e, 3)} />
      <BoardSlot minion={slot4} p="Yours" render={RENDER_SLOT_4} slot={4} onClick={e => handleClick(e, 4)} />
      <BoardSlot minion={slot5} p="Yours" render={RENDER_SLOT_5} slot={5} onClick={e => handleClick(e, 5)} />
      <BoardSlot minion={slot6} p="Yours" render={RENDER_SLOT_6} slot={6} onClick={e => handleClick(e, 6)} />
      <BoardSlot minion={slot7} p="Yours" render={RENDER_SLOT_7} slot={7} onClick={e => handleClick(e, 7)} />
    </div>
  );
}
