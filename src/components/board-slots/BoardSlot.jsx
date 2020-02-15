import React from 'react';
import css from 'components/board-slots/board-slot.module.scss';
// import MinionInteractionLayer from 'systems/MinionInteractionLayer';
import Minion from 'components/minion/Minion';

export default function BoardSlot({
  board,
  data,
  index,
  onClick,
  render,
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
  const {
    canAttack,
    canBeAttacked,
    currentAttack,
    currentHealth,
    hasGuard,
    minionData
  } = data;

  return (
    <div
      data-file="board-slots/BoardSlot"
      data-slot={index}
      data-render={render}
      className={[
        css['board-slot'],
        minionData === null ? css['is-empty'] : '',
        minionData !== null ? css['has-minion'] : ''
      ].join(' ')}
      onClick={onClick}
    >
      {/* {minionData && (
        <MinionInteractionLayer
          board={board}
          minionData={minionData}
          index={index}
          render={render}
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
        />
      )} */}
      {minionData && <Minion data={minionData} slot={index} />}
    </div>
  );
}

BoardSlot.defaultProps = {
  data: {
    canAttack: false,
    canBeAttacked: false,
    currentAttack: 0,
    currentHealth: 0,
    hasGuard: false,
    minionData: null,
    totalAttack: 0,
    totalHealth: 0
  }
};
