import React from 'react';
import PropTypes from 'prop-types';
import MinionInteraction from 'components/interactions/minions/MinionInteraction';
import Minion from 'components/minion/Minion';
import MINION_HAS_BOON from 'components/mechanics/MINION_HAS_BOON';
import MINION_HAS_GUARD from 'components/mechanics/MINION_HAS_GUARD';

export default function BoardSlot({
  G,
  ctx,
  moves,
  isActive,
  canDrop,
  data,
  board,
  index,
  onClick,
  render,
  yourID,
  theirID
}) {
  const { selectedMinionIndex } = G;
  const { currentPlayer } = ctx;
  const {
    canAttack,
    canBeAttackedByMinion,
    canBeAttackedByPlayer,
    canBeAttackedBySpell,
    canBeAttackedByWarcry,
    canBeBuffed,
    canbeDebuffed,
    canbeExpired,
    canBeHealed,
    canbeReturned,
    canbeSacrificed,
    canbeStolen,
    canReceiveEnergyShield,
    canReceiveOnslaught,
    currentAttack,
    currentHealth,
    hasBoon,
    hasEnergyShield,
    hasGuard,
    hasOnslaught,
    isConcealed,
    isCursed,
    isDisabled,
    minionData,
    totalAttack,
    totalHealth,
    willExpire
  } = data;

  return (
    <div
      data-file="board-slots/BoardSlot"
      data-slot={index}
      data-render={render}
      className={[
        'board-slot',
        data === null ? 'is-empty' : '',
        data !== null ? 'has-minion' : '',
        data === null && !canDrop ? 'cannot-drop-minion' : ''
      ].join(' ')}
      onClick={onClick}
    >
      {minionData && (
        <MinionInteraction
          G={G}
          ctx={ctx}
          moves={moves}
          isActive={isActive}
          board={board}
          index={index}
          render={render}
          data={data}
          canAttack={canAttack}
          canBeAttackedByMinion={canBeAttackedByMinion}
          canBeAttackedByPlayer={canBeAttackedByPlayer}
          canBeAttackedBySpell={canBeAttackedBySpell}
          canBeAttackedByWarcry={canBeAttackedByWarcry}
          canBeBuffed={canBeBuffed}
          canBeHealed={canBeHealed}
          canbeDebuffed={canbeDebuffed}
          canbeExpired={canbeExpired}
          canbeReturned={canbeReturned}
          canbeSacrificed={canbeSacrificed}
          canbeStolen={canbeStolen}
          canReceiveEnergyShield={canReceiveEnergyShield}
          canReceiveOnslaught={canReceiveOnslaught}
          hasBoon={hasBoon}
          hasEnergyShield={hasEnergyShield}
          hasGuard={hasGuard}
          hasOnslaught={hasOnslaught}
          isAttacking={selectedMinionIndex[yourID] === index}
          isConcealed={isConcealed}
          isCursed={isCursed}
          isDisabled={isDisabled}
          totalAttack={totalAttack}
          totalHealth={totalHealth}
          willExpire={willExpire}
        />
      )}
      {minionData && hasBoon && <MINION_HAS_BOON />}
      {minionData && hasGuard && <MINION_HAS_GUARD />}
      {minionData && (
        <Minion
          currentAttack={currentAttack}
          currentHealth={currentHealth}
          data={minionData}
          slot={index}
          totalHealth={totalHealth}
        />
      )}
    </div>
  );
}

BoardSlot.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  index: PropTypes.number,
  render: PropTypes.bool,
  board: PropTypes.string,
  canDrop: PropTypes.bool,
  onClick: PropTypes.func,
  theirID: PropTypes.string,
  yourID: PropTypes.string,
  data: PropTypes.object,
  canAttack: PropTypes.bool,
  canBeAttackedByMinion: PropTypes.bool,
  canBeAttackedByPlayer: PropTypes.bool,
  canBeAttackedBySpell: PropTypes.bool,
  canBeAttackedByWarcry: PropTypes.bool,
  canBeBuffed: PropTypes.bool,
  canBeHealed: PropTypes.bool,
  canbeDebuffed: PropTypes.bool,
  canbeExpired: PropTypes.bool,
  canbeReturned: PropTypes.bool,
  canbeSacrificed: PropTypes.bool,
  canbeStolen: PropTypes.bool,
  canReceiveEnergyShield: PropTypes.bool,
  canReceiveOnslaught: PropTypes.bool,
  hasBoon: PropTypes.bool,
  hasEnergyShield: PropTypes.bool,
  hasGuard: PropTypes.bool,
  isAttacking: PropTypes.bool,
  isConcealed: PropTypes.bool,
  isCursed: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasOnslaught: PropTypes.bool,
  totalAttack: PropTypes.bool,
  totalHealth: PropTypes.bool,
  willExpire: PropTypes.bool
};

BoardSlot.defaultProps = {
  data: {
    canAttack: false,
    canBeAttackedByMinion: false,
    canBeAttackedByPlayer: false,
    canBeAttackedBySpell: false,
    canBeAttackedByWarcry: false,
    currentAttack: 0,
    currentHealth: 0,
    hasGuard: false,
    minionData: null,
    totalAttack: 0,
    totalHealth: 0
  }
};
