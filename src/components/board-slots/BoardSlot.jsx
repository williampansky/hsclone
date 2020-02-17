import React from 'react';
import css from 'components/board-slots/board-slot.module.scss';
import MinionInteraction from 'components/interactions/minions/MinionInteraction';
import Minion from 'components/minion/Minion';

export default function BoardSlot({
  G,
  ctx,
  moves,
  isActive,
  canDrop,
  data,
  board,
  index,
  onClick,
  render,
  yourID,
  theirID
}) {
  const { selectedMinionIndex } = G;
  const { currentPlayer } = ctx;
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
        data === null ? css['is-empty'] : '',
        data !== null ? css['has-minion'] : '',
        data === null && !canDrop ? css['cannot-drop-minion'] : ''
      ].join(' ')}
      onClick={onClick}
    >
      {minionData && (
        <MinionInteraction
          G={G}
          ctx={ctx}
          moves={moves}
          isActive={isActive}
          board={board}
          index={index}
          render={render}
          data={data}
          canAttack={canAttack}
          canBeAttacked={canBeAttacked}
          currentAttack={currentAttack}
          currentHealth={currentHealth}
          hasGuard={hasGuard}
          isAttacking={selectedMinionIndex[yourID] === index}
        />
      )}
      {minionData && (
        <Minion
          currentAttack={currentAttack}
          currentHealth={currentHealth}
          data={minionData}
          slot={index}
        />
      )}
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
