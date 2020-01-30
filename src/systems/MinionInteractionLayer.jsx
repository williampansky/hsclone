import MinionCanAttack from './interactions/MinionCanAttack';
import { useState, useEffect } from 'react';

export default function MinionInteractionLayer({ children, data, slot }) {
  const [{ mechanics }, setMechanics] = useState({ mechanics: null });
  const minionMechanics = data && data.mechanics;
  // console.log(mechanics);

  useEffect(() => {
    minionMechanics && setMechanics({ mechanics: minionMechanics.toString() });
  }, []);

  switch (mechanics) {
    case 'CHARGE':
      return <MinionCanAttack children={children} data={data} slot={slot} />;

    default:
      return <>{children}</>;
  }
}
