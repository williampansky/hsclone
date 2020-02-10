import React from 'react';
import css from './board-slot.module.scss';
import MinionInteractionLayer from 'systems/MinionInteractionLayer';
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
      {/* {minionData && (
        <MinionInteractionLayer
          board={board}
          minionData={minionData}
          slot={index}
          render={render}
        />
      )} */}
      {minionData && <Minion data={minionData} slot={index} />}
    </div>
  );
}
