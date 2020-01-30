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
  // console.log(mechanics);

  const CAN_BE_ATTACKED =
    turn === 'YOUR_TURN' && board === 'Theirs' && minionIsAttacking;

  useEffect(() => {
    minionMechanics && setMechanics({ mechanics: minionMechanics.toString() });
  }, []);

  if (CAN_BE_ATTACKED)
    return <MinionCanBeAttacked children={children} data={data} slot={slot} />;

  switch (mechanics) {
    case board === 'Yours' && 'CHARGE':
      return <MinionCanAttack children={children} data={data} slot={slot} />;

    default:
      return <>{children}</>;
  }
}
