import React from 'react';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import SPELL_CONTEXT from 'enums/spellContext.enum';

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
  const CONTEXT = WARCRY_TARGET_CONTEXT;
  const { selectedMinionIndex, warcryObject } = G;
  const { currentPlayer } = ctx;
  const { attackMinion, castWarcrySpell, deselectMinion, selectMinion } = moves;

  const tBoard = board === 'TheirBoard';
  const yBoard = board === 'YourBoard';

  const SELECTED_WARCRY = warcryObject[currentPlayer] !== null;
  const SPELL_OBJ_CONTEXT = SELECTED_WARCRY.spellContext;

  const SELECTED_MINION = selectedMinionIndex[currentPlayer] !== null;
  const HAS_GUARD = hasGuard;
  const IS_ATTACKING = yBoard && isAttacking;
  const CAN_ATTACK = yBoard && canAttack;

  const canBeAttackedByWarcry = tBoard && canBeAttacked && SELECTED_WARCRY;
  const canBeAttackedByMinion = tBoard && canBeAttacked && SELECTED_MINION;
  const CAN_BE_ATTACKED = canBeAttackedByMinion || canBeAttackedByWarcry;

  const CAN_BE_HEALED = SPELL_OBJ_CONTEXT && SPELL_CONTEXT[2];

  function handleClick() {
    if (yBoard) {
      if (!CAN_ATTACK || !CAN_BE_HEALED) return;
      if (IS_ATTACKING) return deselectMinion();
      else return selectMinion(data, index);
    }

    if (tBoard) {
      if (!CAN_BE_ATTACKED) return;
      if (CAN_BE_ATTACKED) {
        if (canBeAttackedByMinion) return attackMinion(index);
        if (canBeAttackedByWarcry) return castWarcrySpell(CONTEXT[1], index);
      }
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
