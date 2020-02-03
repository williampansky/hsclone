import React from 'react';
import MinionCanAttack from './interactions/MinionCanAttack';
import MinionCanBeAttacked from './interactions/MinionCanBeAttacked';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function MinionInteractionLayer({
  board,
  children,
  data,
  slot
}) {
  const turn = useSelector(s => s.turn);
  const minionIsAttacking = useSelector(s => s.minionIsAttacking);
  const [{ mechanics }, setMechanics] = useState({ mechanics: null });
  const minionMechanics = data && data.mechanics;
  const minionAttack = data && data.attack;
  // console.log(mechanics);

  const CAN_BE_ATTACKED =
    turn === 'YOUR_TURN' && board === 'Theirs' && minionIsAttacking;

  const CAN_ATTACK =
    turn === 'YOUR_TURN' && board === 'Yours' && minionAttack !== 0;

  useEffect(() => {
    minionMechanics && setMechanics({ mechanics: minionMechanics.toString() });
  }, []);

  if (CAN_BE_ATTACKED)
    return (
      <React.Fragment>
        <MinionCanBeAttacked data={data} slot={slot} />
      </React.Fragment>
    );

  if (CAN_ATTACK)
    return (
      <React.Fragment>
        <MinionCanAttack children={children} data={data} slot={slot} />
      </React.Fragment>
    );

  if (mechanics) {
    switch (mechanics) {
      case board === 'Yours' && 'CHARGE':
        return (
          <React.Fragment>
            <MinionCanAttack children={children} data={data} slot={slot} />
          </React.Fragment>
        );

      default:
        return <React.Fragment>{children}</React.Fragment>;
    }
  }

  return <React.Fragment>{children}</React.Fragment>;
}
