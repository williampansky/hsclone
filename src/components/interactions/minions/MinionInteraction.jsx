import React from 'react';

export default function MinionInteraction({
  G,
  ctx,
  moves,
  isActive,
  index,
  render,
  board,
  data,
  canAttack,
  canBeAttacked,
  currentAttack,
  currentHealth,
  hasGuard,
  isAttacking
}) {
  const { selectedMinionIndex } = G;
  const { currentPlayer } = ctx;
  const { attackMinion, deselectMinion, selectMinion } = moves;

  const MINION_IS_SELECTED = selectedMinionIndex[currentPlayer] !== null;
  const HAS_GUARD = hasGuard;
  const IS_ATTACKING = board === 'YourBoard' && isAttacking;
  const CAN_ATTACK = board === 'YourBoard' && canAttack;
  const CAN_BE_ATTACKED =
    board === 'TheirBoard' && canBeAttacked && MINION_IS_SELECTED;

  function handleClick() {
    if (board === 'YourBoard') {
      if (!CAN_ATTACK) return;
      if (IS_ATTACKING) return deselectMinion();
      else return selectMinion(data, index);
    }

    if (board === 'TheirBoard') {
      if (!CAN_BE_ATTACKED) return;
      if (CAN_BE_ATTACKED) return attackMinion(index);
    }
  }

  return (
    <div
      data-file="interactions/minions/MinionInteraction"
      data-render={render}
      className={[
        'minion-interaction-layer',
        CAN_ATTACK ? 'minion--can_attack' : '',
        CAN_BE_ATTACKED ? 'minion--can_be_attacked' : '',
        HAS_GUARD ? 'minion--has_guard' : '',
        IS_ATTACKING ? 'minion--is_attacking' : ''
      ].join(' ')}
      onClick={() => handleClick()}
    />
  );
}
