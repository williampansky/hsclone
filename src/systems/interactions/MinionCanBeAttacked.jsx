import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeMinion,
  setMinionHealth
} from '~/features/boards/theirBoard.slice';
import {
  minionSelected,
  minionDeselected
} from '~/features/targeting/minionCanAttack.slice';
import {
  canAttack,
  canNotAttack
} from '~/features/targeting/minionIsAttacking.slice';
import css from '~/styles/game/interactions/minion-interactions.scss';

export default function MinionCanBeAttacked({ children, data, slot }) {
  const dispatch = useDispatch();
  const { attack } = useSelector(s => s.minionCanAttack);
  const { health } = data;

  function handleClick(event, slot) {
    event.preventDefault();
    dispatch(canNotAttack());
    dispatch(minionDeselected());
    if (attack >= health) dispatch(removeMinion(`slot${slot}`));
    else
      dispatch(
        setMinionHealth({
          attack,
          card: data,
          slot
        })
      );
  }

  return (
    <div
      className={[
        css['minion--interaction_layer'],
        css['minion--can_be_attacked']
      ].join(' ')}
      onClick={event => handleClick(event, slot)}
    >
      {children}
    </div>
  );
}
