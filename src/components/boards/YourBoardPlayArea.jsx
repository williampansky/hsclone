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
  const selectedCardCost =
    allCards[selectedCardId] && allCards[selectedCardId].cost;
  const selectedCardType =
    allCards[selectedCardId] && allCards[selectedCardId].type;

  const RENDER_GLOBAL_SPELL_SLOT = selectedCardType === 'SPELL';
  const RENDER_SLOT_1 = slot2.minionData !== null;
  const RENDER_SLOT_2 = slot3.minionData !== null;
  const RENDER_SLOT_3 = slot4.minionData !== null;
  const RENDER_SLOT_4 = selectedCardType !== 'SPELL';
  const RENDER_SLOT_5 = slot4.minionData !== null;
  const RENDER_SLOT_6 = slot5.minionData !== null;
  const RENDER_SLOT_7 = slot6.minionData !== null;

  function handleMinionMoves(slotNumber, cardId, cardCost) {
    moves.playMinionCard(slotNumber, cardId, cardCost);
    moves.hoverOverCardInHand(null);
    moves.selectPlayableCard(null);
  }

  function handleSpellMoves(cardId, cardCost) {
    moves.playSpellCard(cardId, cardCost);
    moves.hoverOverCardInHand(null);
    moves.selectPlayableCard(null);
  }

  function handleClick(
    event,
    slotNumber,
    cardId = selectedCardId,
    cardCost = selectedCardCost
  ) {
    event.preventDefault();
    if (!cardIsSelected) return;
    if (slotNumber === 0) return handleSpellMoves(cardId, cardCost);
    return handleMinionMoves(slotNumber, cardId, cardCost);
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

  return (
    <div
      className={[
        boardCSS['board-play-area'],
        boardCSS['your-board-play-area'],
        handleClasses()
      ].join(' ')}
      data-file="boards/YourBoardPlayArea"
    >
      <SpellSlot
        render={RENDER_GLOBAL_SPELL_SLOT}
        slot={0}
        onClick={e => handleClick(e, 0)}
      />
      <BoardSlot
        board="Yours"
        minion={slot1}
        render={RENDER_SLOT_1}
        slot={1}
        onClick={e => handleClick(e, 1)}
        {...props}
      />
      <BoardSlot
        board="Yours"
        minion={slot2}
        render={RENDER_SLOT_2}
        slot={2}
        onClick={e => handleClick(e, 2)}
        {...props}
      />
      <BoardSlot
        board="Yours"
        minion={slot3}
        render={RENDER_SLOT_3}
        slot={3}
        onClick={e => handleClick(e, 3)}
        {...props}
      />
      <BoardSlot
        board="Yours"
        minion={slot4}
        render={RENDER_SLOT_4}
        slot={4}
        onClick={e => handleClick(e, 4)}
        {...props}
      />
      <BoardSlot
        board="Yours"
        minion={slot5}
        render={RENDER_SLOT_5}
        slot={5}
        onClick={e => handleClick(e, 5)}
        {...props}
      />
      <BoardSlot
        board="Yours"
        minion={slot6}
        render={RENDER_SLOT_6}
        slot={6}
        onClick={e => handleClick(e, 6)}
        {...props}
      />
      <BoardSlot
        board="Yours"
        minion={slot7}
        render={RENDER_SLOT_7}
        slot={7}
        onClick={e => handleClick(e, 7)}
        {...props}
      />
    </div>
  );
}
