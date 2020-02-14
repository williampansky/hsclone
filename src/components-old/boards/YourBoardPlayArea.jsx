import React from 'react';
import boardCSS from './board-play-area.module.scss';
import slotCSS from './board-slot.module.scss';
import BoardSlot from './BoardSlot';
import SpellSlot from './SpellSlot';
import BoardDropArea from './BoardDropArea';

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
  const cardIsSelected =
    G.selectedCardIndex[playerID] !== null &&
    G.selectedCardObject[playerID] !== null;
  const cardCost = cardIsSelected && G.selectedCardObject[playerID].cost;
  const cardId = cardIsSelected && G.selectedCardObject[playerID].id;
  const cardType = cardIsSelected && G.selectedCardObject[playerID].type;
  const spellType = cardIsSelected && G.selectedCardObject[playerID].spellType;

  const RENDER_GLOBAL_SPELL_SLOT = cardType === 'SPELL';
  // const RENDER_SLOT_1 = slot2.minionData !== null;
  // const RENDER_SLOT_2 = slot3.minionData !== null;
  // const RENDER_SLOT_3 = slot4.minionData !== null;
  // const RENDER_SLOT_4 = cardType !== 'SPELL';
  // const RENDER_SLOT_5 = slot4.minionData !== null;
  // const RENDER_SLOT_6 = slot5.minionData !== null;
  // const RENDER_SLOT_7 = slot6.minionData !== null;

  // function renderSlot(slotNumber) {

  // }

  function handleMinionMoves(index, cardId, cardCost) {
    console.log('handleMinionMoves', index, cardId, cardCost);
    moves.playMinionCard(index, cardId, cardCost);
    moves.hoverOverCardInHand(null, null);
    moves.selectPlayableCard(null, null);
  }

  function handleSpellMoves(cardId, cardCost) {
    moves.playSpellCard(cardId, cardCost);
    moves.hoverOverCardInHand(null, null);
    moves.selectPlayableCard(null, null);
  }

  function handleClick(event, index, id = cardId, cost = cardCost) {
    event.preventDefault();
    if (!cardIsSelected) return;
    if (index === 'SPELL') return handleSpellMoves(id, cost);
    return handleMinionMoves(index, id, cost);
  }

  return (
    <React.Fragment>
      <SpellSlot
        index={0}
        onClick={e => handleClick(e, 'SPELL')}
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
        <BoardDropArea
          data-drop-area=""
          G={G}
          ctx={ctx}
          moves={moves}
          events={events}
          reset={reset}
          undo={undo}
          redo={redo}
          step={step}
          log={log}
          gameID={gameID}
          playerID={playerID}
          gameMetadata={gameMetadata}
          isActive={isActive}
          isMultiplayer={isMultiplayer}
          isConnected={isConnected}
          credentials={credentials}
          index={0}
          cardIsSelected={cardIsSelected}
          onClick={e => handleClick(e, 0)}
          cardType={cardType}
          spellType={spellType}
        />

        {G.boards[playerID].map((card, index) => {
          return (
            <React.Fragment key={`fragment_${index}`}>
              <BoardSlot
                key={`slot_${index}`}
                board="Yours"
                credentials={credentials}
                ctx={ctx}
                data={card}
                events={events}
                G={G}
                gameID={gameID}
                gameMetadata={gameMetadata}
                index={index}
                isActive={isActive}
                isConnected={isConnected}
                isMultiplayer={isMultiplayer}
                log={log}
                moves={moves}
                onClick={e => handleClick(e, index)}
                playerID={playerID}
                redo={redo}
                // render={RENDER_SLOT_1}
                reset={reset}
                step={step}
                undo={undo}
              />
              <BoardDropArea
                data-drop-area=""
                key={`dropArea_${index}`}
                index={index}
                G={G}
                ctx={ctx}
                moves={moves}
                events={events}
                reset={reset}
                undo={undo}
                redo={redo}
                step={step}
                log={log}
                gameID={gameID}
                playerID={playerID}
                gameMetadata={gameMetadata}
                isActive={isActive}
                isMultiplayer={isMultiplayer}
                isConnected={isConnected}
                credentials={credentials}
                cardIsSelected={cardIsSelected}
                cardType={cardType}
                spellType={spellType}
                onClick={e => handleClick(e, index)}
              />
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}
