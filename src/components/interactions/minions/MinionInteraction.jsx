import React from 'react';
import PropTypes from 'prop-types';
import TheirMinionInteractions from 'components/interactions/minions/TheirMinionInteractions';
import YourMinionInteractions from 'components/interactions/minions/YourMinionInteractions';

export default function MinionInteraction({
  G,
  ctx,
  moves,
  isActive,
  index,
  board,
  data,
  canAttack,
  canBeAttackedByMinion,
  canBeAttackedByPlayer,
  canBeAttackedBySpell,
  canBeAttackedByWarcry,
  canBeBuffed,
  canBeHealed,
  canbeDebuffed,
  canbeExpired,
  canbeReturned,
  canbeSacrificed,
  canbeStolen,
  canReceiveEnergyShield,
  canReceiveOnslaught,
  hasBoon,
  hasEnergyShield,
  hasGuard,
  hasOnslaught,
  isAttacking,
  isConcealed,
  isCursed,
  isDisabled,
  totalAttack,
  totalHealth,
  willExpire
}) {
  switch (board) {
    case 'TheirBoard':
      return (
        <TheirMinionInteractions
          G={G}
          ctx={ctx}
          moves={moves}
          data={data}
          index={index}
          canAttack={canAttack}
          canBeAttackedByMinion={canBeAttackedByMinion}
          canBeAttackedByPlayer={canBeAttackedByPlayer}
          canBeAttackedBySpell={canBeAttackedBySpell}
          canBeAttackedByWarcry={canBeAttackedByWarcry}
          canBeBuffed={canBeBuffed}
          canbeDebuffed={canbeDebuffed}
          canbeExpired={canbeExpired}
          canBeHealed={canBeHealed}
          canbeReturned={canbeReturned}
          canbeSacrificed={canbeSacrificed}
          canbeStolen={canbeStolen}
          canReceiveEnergyShield={canReceiveEnergyShield}
          canReceiveOnslaught={canReceiveOnslaught}
          hasBoon={hasBoon}
          hasEnergyShield={hasEnergyShield}
          hasGuard={hasGuard}
          hasOnslaught={hasOnslaught}
          isAttacking={isAttacking}
          isConcealed={isConcealed}
          isCursed={isCursed}
          isDisabled={isDisabled}
          willExpire={willExpire}
        />
      );

    default:
      return (
        <YourMinionInteractions
          G={G}
          ctx={ctx}
          moves={moves}
          data={data}
          index={index}
          canAttack={canAttack}
          canBeAttackedByMinion={canBeAttackedByMinion}
          canBeAttackedByPlayer={canBeAttackedByPlayer}
          canBeAttackedBySpell={canBeAttackedBySpell}
          canBeAttackedByWarcry={canBeAttackedByWarcry}
          canBeBuffed={canBeBuffed}
          canbeDebuffed={canbeDebuffed}
          canbeExpired={canbeExpired}
          canBeHealed={canBeHealed}
          canbeReturned={canbeReturned}
          canbeSacrificed={canbeSacrificed}
          canbeStolen={canbeStolen}
          canReceiveEnergyShield={canReceiveEnergyShield}
          canReceiveOnslaught={canReceiveOnslaught}
          hasBoon={hasBoon}
          hasEnergyShield={hasEnergyShield}
          hasGuard={hasGuard}
          hasOnslaught={hasOnslaught}
          isAttacking={isAttacking}
          isConcealed={isConcealed}
          isCursed={isCursed}
          isDisabled={isDisabled}
          willExpire={willExpire}
        />
      );
  }
}

MinionInteraction.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  index: PropTypes.number,
  render: PropTypes.bool,
  board: PropTypes.string,
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
  totalAttack: PropTypes.number,
  totalHealth: PropTypes.number,
  willExpire: PropTypes.bool
};
