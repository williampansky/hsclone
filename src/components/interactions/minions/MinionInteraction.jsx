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
  const {
    attackMinionWithMinion,
    deselectAttackingMinion,
    selectAttackingMinion
  } = moves;

  const HAS_GUARD = hasGuard;
  const IS_ATTACKING = board === 'YourBoard' && isAttacking;
  const CAN_ATTACK = board === 'YourBoard' && canAttack;
  const CAN_BE_ATTACKED =
    board === 'TheirBoard' &&
    canBeAttacked &&
    selectedMinionIndex[currentPlayer] !== null;

  function handleClick() {
    if (IS_ATTACKING && board === 'YourBoard') deselectAttackingMinion();
    else if (board === 'YourBoard') selectAttackingMinion(data, index);
    // if (!CAN_ATTACK) return;

    // if (CAN_BE_ATTACKED) return attackMinionWithMinion(index);
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
