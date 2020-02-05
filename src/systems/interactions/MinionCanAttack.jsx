import React from 'react';
import { useState, useEffect } from 'react';
import css from 'styles/interactions/minion-interactions.module.scss';

export default function MinionCanAttack(props) {
  const { children, data, slot } = props;
  // const minionID = data && data.id;
  // const minionAttackingID = minionCanAttack && minionCanAttack.id;

  function dispatchSelections(obj) {
    // dispatch(canAttack());
    // dispatch(minionSelected(obj));
  }

  function dispatchDeselections() {
    // dispatch(canNotAttack());
    // dispatch(minionDeselected());
  }

  function handleClick(event, slot, obj = data) {
    // event.preventDefault();
    // return !minionIsAttacking
    //   ? dispatchSelections(obj)
    //   : dispatchDeselections();
  }

  return (
    <div
      className={[
        css['minion--interaction_layer']
        // !minionIsAttacking && css['minion--can_attack'],
        // minionIsAttacking && minionID === minionAttackingID
        //   ? css['minion--is_attacking']
        //   : '',
        // minionIsAttacking && minionID !== minionAttackingID
        //   ? css['minion--is_not_attacking']
        //   : ''
      ].join(' ')}
      onClick={event => handleClick(event, slot, data)}
    >
      {children}
    </div>
  );
}
