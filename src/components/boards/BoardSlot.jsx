import React from 'react';
import css from './board-slot.module.scss';
import MinionInteractionLayer from 'systems/MinionInteractionLayer';
import Minion from 'components/minion/Minion';
import CardInteractionLayer from 'systems/CardInteractionLayer';

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
  const { canAttack, canBeAttacked, hasGuard, minionData } = data;

  return (
    <div
      className={[
        css['board-slot'],
        !minionData && css['is-empty'],
        minionData && css['has-minion']
      ].join(' ')}
      data-file="boards/BoardSlot"
      data-slot={index}
      data-render={render}
      onClick={onClick}
    >
      {minionData && (
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
      )}
      {minionData && <Minion data={minionData} slot={index} />}
    </div>
  );
}

BoardSlot.defaultProps = {
  data: {
    canAttack: false,
    canBeAttacked: false,
    hasGuard: false,
    minionData: null
  }
};
