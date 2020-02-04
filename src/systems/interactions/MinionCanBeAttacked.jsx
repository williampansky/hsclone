import React from 'react';
import css from 'styles/interactions/minion-interactions.scss';

export default function MinionCanBeAttacked({ children, data, slot }) {
  // const yourMinionsAttack = yourMinion && yourMinion.attack;
  // const yourMinionsHealth = yourMinion && yourMinion.health;

  // const theirMinionsAttack = data && data.attack;
  // const theirMinionsHealth = data && data.health;

  function handleClick(event, slot) {
    // event.preventDefault();
    // dispatch(canNotAttack());
    // dispatch(minionDeselected());
    // if (theirMinionsAttack >= yourMinionsHealth)
    //   dispatch(removeYourMinion(`slot${slot}`));
    // else
    //   dispatch(
    //     setYourMinionHealth({
    //       attack: theirMinionsAttack,
    //       card: yourMinion,
    //       slot: Object.keys(yourBoard).filter(k => yourBoard[k] === yourMinion)
    //     })
    //   );
    // if (yourMinionsAttack >= theirMinionsHealth)
    //   dispatch(removeTheirMinion(`slot${slot}`));
    // else
    //   dispatch(
    //     setTheirMinionHealth({
    //       attack: yourMinionsAttack,
    //       card: data,
    //       slot: `slot${slot}`
    //     })
    //   );
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
