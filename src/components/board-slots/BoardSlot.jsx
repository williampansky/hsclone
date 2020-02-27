import React from 'react';
import MinionInteraction from 'components/interactions/minions/MinionInteraction';
import Minion from 'components/minion/Minion';
import MINION_HAS_GUARD from 'components/mechanics/MINION_HAS_GUARD';

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
    canBeBuffed,
    canBeHealed,
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
        'board-slot',
        data === null ? 'is-empty' : '',
        data !== null ? 'has-minion' : '',
        data === null && !canDrop ? 'cannot-drop-minion' : ''
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
          canBeBuffed={canBeBuffed}
          canBeHealed={canBeHealed}
          currentAttack={currentAttack}
          currentHealth={currentHealth}
          hasGuard={hasGuard}
          isAttacking={selectedMinionIndex[yourID] === index}
        />
      )}
      {minionData && hasGuard && <MINION_HAS_GUARD />}
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
