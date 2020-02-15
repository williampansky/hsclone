import React from 'react';
import css from 'styles/interactions/minion-interactions.module.scss';
import MECHANICS from 'enums/mechanics.enums';

export default function MinionInteraction({
  G,
  index,
  render,
  canAttack,
  canBeAttacked,
  currentAttack,
  currentHealth,
  hasGuard,
  minionData,
  isAttacking
}) {
  // const {} = G;

  function handleClick() {}

  return (
    <div
      data-file="interactions/MinionInteraction"
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
