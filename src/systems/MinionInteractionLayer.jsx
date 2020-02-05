import React, { useState, useEffect } from 'react';
import MinionCanAttack from './interactions/MinionCanAttack';
import MinionCanBeAttacked from './interactions/MinionCanBeAttacked';
import css from 'styles/interactions/minion-interactions.module.scss';
import useHover from 'hooks/useHover';

export default function MinionInteractionLayer(props) {
  const { G, ctx, isActive, board, children, minionData, slot, render } = props;
  const [hoverRef, isHovered] = useHover();
  const {
    artist,
    attack,
    cardClass,
    collectible,
    cost,
    elite,
    entourage,
    flavor,
    goldenImageSrc,
    health,
    hideStats,
    howToEarn,
    howToEarnGolden,
    id,
    imageSrc,
    mechanics,
    name,
    playRequirements,
    race,
    rarity,
    set,
    sounds,
    spellDamage,
    targetingArrowText,
    text,
    type
  } = minionData;
  // const minionAttack = data && data.attack;
  // // console.log(mechanics);

  // const CAN_BE_ATTACKED = isActive && board === 'Theirs' && minionIsAttacking;

  // const CAN_ATTACK =
  //   turn === 'YOUR_TURN' && board === 'Yours' && minionAttack !== 0;

  // useEffect(() => {
  //   minionMechanics && setMechanics({ mechanics: minionMechanics.toString() });
  // }, []);

  // if (CAN_BE_ATTACKED)
  //   return (
  //     <React.Fragment>
  //       <MinionCanBeAttacked data={data} slot={slot} />
  //     </React.Fragment>
  //   );

  // if (CAN_ATTACK)
  //   return (
  //     <React.Fragment>
  //       <MinionCanAttack children={children} data={data} slot={slot} />
  //     </React.Fragment>
  //   );

  // if (mechanics) {
  //   switch (mechanics) {
  //     case board === 'Yours' && 'CHARGE':
  //       return (
  //         <React.Fragment>
  //           <MinionCanAttack children={children} data={data} slot={slot} />
  //         </React.Fragment>
  //       );

  //     default:
  //       return <React.Fragment>{children}</React.Fragment>;
  //   }
  // }

  return (
    <div
      className={css['minion--interaction-layer']}
      data-file="systems/MinionInteractionLayer"
      data-render={render}
      ref={hoverRef}
    />
  );
}
