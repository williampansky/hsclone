import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deselectCard, selectCard } from '~/features/yourHand/yourHand.slice';
import {
  minionSelected,
  minionDeselected
} from '~/features/targeting/minionCanAttack.slice';
import {
  canAttack,
  canNotAttack
} from '~/features/targeting/minionIsAttacking.slice';
import css from '~/styles/game/interactions/minion-interactions.scss';

export default function MinionCanAttack({ children, data, slot }) {
  const dispatch = useDispatch();
  const minionCanAttack = useSelector(s => s.minionCanAttack);
  const minionIsAttacking = useSelector(s => s.minionIsAttacking);
  const minionID = data && data.id;
  const minionAttackingID = minionCanAttack && minionCanAttack.id;

  function dispatchSelections(obj) {
    dispatch(canAttack());
    dispatch(minionSelected(obj));
  }

  function dispatchDeselections() {
    dispatch(canNotAttack());
    dispatch(minionDeselected());
  }

  function handleClick(event, slot, obj = data) {
    event.preventDefault();
    return !minionIsAttacking
      ? dispatchSelections(obj)
      : dispatchDeselections();
  }

  return (
    <div
      className={[
        css['minion--interaction_layer'],
        !minionIsAttacking && css['minion--can_attack'],
        minionIsAttacking && minionID === minionAttackingID
          ? css['minion--is_attacking']
          : '',
        minionIsAttacking && minionID !== minionAttackingID
          ? css['minion--is_not_attacking']
          : ''
      ].join(' ')}
      onClick={event => handleClick(event, slot, data)}
    >
      {children}
    </div>
  );
}
