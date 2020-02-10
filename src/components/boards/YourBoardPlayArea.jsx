import React from 'react';
import boardCSS from './board-play-area.module.scss';
import slotCSS from './board-slot.module.scss';
import BoardSlot from './BoardSlot';
import SpellSlot from './SpellSlot';

export default function YourBoardPlayerArea({
  G,
  ctx,
  moves,
  events,
  reset,
  undo,
  redo,
  step,
  log,
  gameID,
  playerID,
  gameMetadata,
  isActive,
  isMultiplayer,
  isConnected,
  credentials
}) {
  const { slot1, slot2, slot3, slot4, slot5, slot6, slot7 } = G.boards[
    playerID
  ];

  const cardIsSelected =
    G.selectedCardIndex[playerID] !== null &&
    G.selectedCardObject[playerID] !== null;
  const cardCost = cardIsSelected && G.selectedCardObject[playerID].cost;
  const cardId = cardIsSelected && G.selectedCardObject[playerID].id;
  const cardType = cardIsSelected && G.selectedCardObject[playerID].type;

  const RENDER_GLOBAL_SPELL_SLOT = cardType === 'SPELL';
  const RENDER_SLOT_1 = slot2.minionData !== null;
  const RENDER_SLOT_2 = slot3.minionData !== null;
  const RENDER_SLOT_3 = slot4.minionData !== null;
  const RENDER_SLOT_4 = cardType !== 'SPELL';
  const RENDER_SLOT_5 = slot4.minionData !== null;
  const RENDER_SLOT_6 = slot5.minionData !== null;
  const RENDER_SLOT_7 = slot6.minionData !== null;

  function handleMinionMoves(slotNumber, cardId, cardCost) {
    moves.playMinionCard(slotNumber, cardId, cardCost);
    moves.hoverOverCardInHand(null, null);
    moves.selectPlayableCard(null, null);
  }

  function handleSpellMoves(cardId, cardCost) {
    moves.playSpellCard(cardId, cardCost);
    moves.hoverOverCardInHand(null, null);
    moves.selectPlayableCard(null, null);
  }

  function handleClick(event, slotNumber, id = cardId, cost = cardCost) {
    event.preventDefault();
    if (!cardIsSelected) return;
    if (slotNumber === 0) return handleSpellMoves(id, cost);
    return handleMinionMoves(slotNumber, id, cost);
  }

  return (
    <React.Fragment>
      <SpellSlot
        index={0}
        onClick={e => handleClick(e, 0)}
        render={RENDER_GLOBAL_SPELL_SLOT}
      />
      <div
        className={[
          boardCSS['board-play-area'],
          boardCSS['your-board-play-area'],
          cardIsSelected ? slotCSS['board-is-active'] : ''
        ].join(' ')}
        data-file="boards/YourBoardPlayArea"
      >
        <BoardSlot
          board="Yours"
          credentials={credentials}
          ctx={ctx}
          data={slot1}
          events={events}
          G={G}
          gameID={gameID}
          gameMetadata={gameMetadata}
          index={1}
          isActive={isActive}
          isConnected={isConnected}
          isMultiplayer={isMultiplayer}
          log={log}
          moves={moves}
          onClick={e => handleClick(e, 1)}
          playerID={playerID}
          redo={redo}
          render={RENDER_SLOT_1}
          reset={reset}
          step={step}
          undo={undo}
        />
        <BoardSlot
          board="Yours"
          credentials={credentials}
          ctx={ctx}
          data={slot2}
          events={events}
          G={G}
          gameID={gameID}
          gameMetadata={gameMetadata}
          index={2}
          isActive={isActive}
          isConnected={isConnected}
          isMultiplayer={isMultiplayer}
          log={log}
          moves={moves}
          onClick={e => handleClick(e, 2)}
          playerID={playerID}
          redo={redo}
          render={RENDER_SLOT_2}
          reset={reset}
          step={step}
          undo={undo}
        />
        <BoardSlot
          board="Yours"
          credentials={credentials}
          ctx={ctx}
          data={slot3}
          events={events}
          G={G}
          gameID={gameID}
          gameMetadata={gameMetadata}
          index={3}
          isActive={isActive}
          isConnected={isConnected}
          isMultiplayer={isMultiplayer}
          log={log}
          moves={moves}
          onClick={e => handleClick(e, 3)}
          playerID={playerID}
          redo={redo}
          render={RENDER_SLOT_3}
          reset={reset}
          step={step}
          undo={undo}
        />
        <BoardSlot
          board="Yours"
          credentials={credentials}
          ctx={ctx}
          data={slot4}
          events={events}
          G={G}
          gameID={gameID}
          gameMetadata={gameMetadata}
          index={4}
          isActive={isActive}
          isConnected={isConnected}
          isMultiplayer={isMultiplayer}
          log={log}
          moves={moves}
          onClick={e => handleClick(e, 4)}
          playerID={playerID}
          redo={redo}
          render={RENDER_SLOT_4}
          reset={reset}
          step={step}
          undo={undo}
        />
        <BoardSlot
          board="Yours"
          credentials={credentials}
          ctx={ctx}
          data={slot5}
          events={events}
          G={G}
          gameID={gameID}
          gameMetadata={gameMetadata}
          index={5}
          isActive={isActive}
          isConnected={isConnected}
          isMultiplayer={isMultiplayer}
          log={log}
          moves={moves}
          onClick={e => handleClick(e, 5)}
          playerID={playerID}
          redo={redo}
          render={RENDER_SLOT_5}
          reset={reset}
          step={step}
          undo={undo}
        />
        <BoardSlot
          board="Yours"
          credentials={credentials}
          ctx={ctx}
          data={slot6}
          events={events}
          G={G}
          gameID={gameID}
          gameMetadata={gameMetadata}
          index={6}
          isActive={isActive}
          isConnected={isConnected}
          isMultiplayer={isMultiplayer}
          log={log}
          moves={moves}
          onClick={e => handleClick(e, 6)}
          playerID={playerID}
          redo={redo}
          render={RENDER_SLOT_6}
          reset={reset}
          step={step}
          undo={undo}
        />
        <BoardSlot
          board="Yours"
          credentials={credentials}
          ctx={ctx}
          data={slot7}
          events={events}
          G={G}
          gameID={gameID}
          gameMetadata={gameMetadata}
          index={7}
          isActive={isActive}
          isConnected={isConnected}
          isMultiplayer={isMultiplayer}
          log={log}
          moves={moves}
          onClick={e => handleClick(e, 7)}
          playerID={playerID}
          redo={redo}
          render={RENDER_SLOT_7}
          reset={reset}
          step={step}
          undo={undo}
        />
      </div>
    </React.Fragment>
  );
}
