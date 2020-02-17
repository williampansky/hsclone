import React from 'react';
import css from 'components/interactions/minions/minion-interactions.module.scss';

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
  const { attackMinion, selectMinion } = moves;

  const HAS_GUARD = hasGuard;
  const IS_ATTACKING = board === 'YourBoard' && isAttacking;
  const CAN_ATTACK = board === 'YourBoard' && canAttack;
  const CAN_BE_ATTACKED =
    board === 'TheirBoard' &&
    canBeAttacked &&
    selectedMinionIndex[currentPlayer] !== null;

  function handleClick() {
    if (board === 'YourBoard') {
      if (!CAN_ATTACK) return;
      if (IS_ATTACKING) return selectMinion();
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
        css['minion--interaction_layer'],
        CAN_ATTACK ? css['minion--can_attack'] : '',
        CAN_BE_ATTACKED ? css['minion--can_be_attacked'] : '',
        HAS_GUARD ? css['minion--has_guard'] : '',
        IS_ATTACKING ? css['minion--is_attacking'] : ''
      ].join(' ')}
      onClick={() => handleClick()}
    />
  );
}
