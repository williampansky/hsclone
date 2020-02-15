import React from 'react';
import css from 'components/board-slots/board-slot.module.scss';
import MinionInteraction from 'components/interactions/minions/MinionInteraction';
import Minion from 'components/minion/Minion';

export default function BoardSlot({
  G,
  ctx,
  moves,
  data,
  index,
  onClick,
  render,
  yourID,
  theirID
}) {
  const { selectedMinionIndex } = G;
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
      {minionData && (
        <MinionInteraction
          G={G}
          moves={moves}
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
