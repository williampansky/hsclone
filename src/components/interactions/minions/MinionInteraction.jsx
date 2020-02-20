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
  const { selectedMinionIndex, warcryObject } = G;
  const { currentPlayer } = ctx;
  const { attackMinion, deselectMinion, selectMinion } = moves;

  const tBoard = board === 'TheirBoard';
  const yBoard = board === 'YourBoard';

  const SELECTED_WARCRY = warcryObject[currentPlayer] !== null;
  const SELECTED_MINION = selectedMinionIndex[currentPlayer] !== null;
  const HAS_GUARD = hasGuard;
  const IS_ATTACKING = yBoard && isAttacking;
  const CAN_ATTACK = yBoard && canAttack;

  const canBeAttackedByWarcry = tBoard && canBeAttacked && SELECTED_WARCRY;
  const canBeAttackedByMinion = tBoard && canBeAttacked && SELECTED_MINION;
  const CAN_BE_ATTACKED = canBeAttackedByMinion || canBeAttackedByWarcry;

  function handleClick() {
    if (yBoard) {
      if (!CAN_ATTACK) return;
      if (IS_ATTACKING) return deselectMinion();
      else return selectMinion(data, index);
    }

    if (tBoard) {
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
