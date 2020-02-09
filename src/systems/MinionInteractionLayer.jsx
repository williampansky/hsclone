import React, { useState, useEffect } from 'react';
import MinionCanAttack from './interactions/MinionCanAttack';
import MinionCanBeAttacked from './interactions/MinionCanBeAttacked';
import css from 'styles/interactions/minion-interactions.module.scss';
import useHover from 'hooks/useHover';

export default function MinionInteractionLayer(props) {
  const {
    G,
    ctx,
    isActive,
    moves,
    board,
    children,
    minionData,
    slot,
    render
  } = props;
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

  const players = G.turnOrder;
  const currentPlayer = ctx.currentPlayer;
  const previousPlayer = players.find(p => p !== currentPlayer);

  const CAN_BE_ATTACKED =
    isActive &&
    board === 'Theirs' &&
    G.boards[previousPlayer][`slot${slot}`].canBeAttacked === true &&
    G.selectedMinionIndexObject[ctx.currentPlayer] !== null;

  const CAN_ATTACK =
    isActive &&
    board === 'Yours' &&
    G.boards[currentPlayer][`slot${slot}`].canAttack === true &&
    attack !== 0;

  const HAS_CHARGE = mechanics.find(m => m === 'CHARGE');

  const IS_ATTACKING =
    CAN_ATTACK && G.selectedMinionIndexObject[ctx.currentPlayer] === slot;

  // useEffect(() => {
  //   minionMechanics && setMechanics({ mechanics: minionMechanics.toString() });
  // }, []);

  // if (CAN_ATTACK) return <MinionCanAttack data={minionData} slot={slot} />;

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

  function handleClick(event) {
    moves.hoverOverCardInHand(null);
    moves.selectPlayableCard(null);

    if (CAN_ATTACK) {
      return G.selectedMinionIndexObject[currentPlayer] === slot
        ? moves.selectMinionForAttack(null)
        : moves.selectMinionForAttack(slot);
    }

    if (CAN_BE_ATTACKED) {
      return moves.attackMinion(slot);
    }
  }

  return (
    <div
      className={[
        css['minion--interaction_layer'],
        CAN_ATTACK ? css['minion--can_attack'] : '',
        IS_ATTACKING ? css['minion--is_attacking'] : '',
        CAN_BE_ATTACKED ? css['minion--can_be_attacked'] : ''
      ].join(' ')}
      data-file="systems/MinionInteractionLayer"
      data-render={render}
      ref={hoverRef}
      onClick={event => handleClick(event)}
    />
  );
}
