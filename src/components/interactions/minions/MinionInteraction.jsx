import React from 'react';
import css from 'components/interactions/minions/minion-interactions.module.scss';

export default function MinionInteraction({
  G,
  moves,
  index,
  render,
  data,
  canAttack,
  canBeAttacked,
  currentAttack,
  currentHealth,
  hasGuard,
  isAttacking,
  selectedMinionObject
}) {
  // const {} = G;
  const { selectAttackingMinion } = moves;

  function handleClick() {
    return selectAttackingMinion(data, index);
  }

  return (
    <div
      data-file="interactions/minions/MinionInteraction"
      data-render={render}
      className={[
        css['minion--interaction_layer'],
        canAttack ? css['minion--can_attack'] : '',
        canBeAttacked ? css['minion--can_be_attacked'] : '',
        hasGuard ? css['minion--has_guard'] : '',
        isAttacking ? css['minion--is_attacking'] : ''
      ].join(' ')}
      onClick={() => handleClick()}
    />
  );
}
