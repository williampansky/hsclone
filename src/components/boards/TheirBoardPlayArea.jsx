import React from 'react';
import boardCSS from './board-play-area.module.scss';
import slotCSS from './board-slot.module.scss';
import BoardSlot from './BoardSlot';

export default function TheirBoardPlayerArea({
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
  credentials,
  theirID
}) {
  const { slot1, slot2, slot3, slot4, slot5, slot6, slot7 } = G.boards[theirID];

  // const RENDER_GLOBAL_SPELL_SLOT = selectedCardType === 'SPELL';
  // const RENDER_SLOT_1 = slot1.minionData !== null;
  // const RENDER_SLOT_2 = slot2.minionData !== null;
  // const RENDER_SLOT_3 = slot3.minionData !== null;
  // const RENDER_SLOT_4 = slot4.minionData !== null;
  // const RENDER_SLOT_5 = slot5.minionData !== null;
  // const RENDER_SLOT_6 = slot6.minionData !== null;
  // const RENDER_SLOT_7 = slot7.minionData !== null;

  async function handleClick(event, slot, obj) {
    event.preventDefault();
    // console.log(event);

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
      {G.boards[theirID].map((card, index) => {
        return (
          <BoardSlot
            key={index}
            board="Theirs"
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
        );
      })}
    </div>
  );
}
