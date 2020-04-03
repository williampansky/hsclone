import React from 'react';
import PropTypes from 'prop-types';
import CanBeAttackedByMinion from 'components/interactions/minions/CanBeAttackedByMinion';
import CanBeAttackedByPlayer from 'components/interactions/minions/CanBeAttackedByPlayer';
import CanBeAttackedBySpell from 'components/interactions/minions/CanBeAttackedBySpell';
import CanBeAttackedByWarcry from 'components/interactions/minions/CanBeAttackedByWarcry';
import CanBeExpired from 'components/interactions/minions/CanBeExpired';
import CanBeReturned from 'components/interactions/minions/CanBeReturned';
import CanBeDebuffed from 'components/interactions/minions/CanBeDebuffed';

export default function TheirMinionInteractions({
  G,
  ctx,
  moves,
  data,
  index,
  canAttack,
  canBeAttackedByMinion,
  canBeAttackedByPlayer,
  canBeAttackedBySpell,
  canBeAttackedByWarcry,
  canBeBuffed,
  canBeHealed,
  canBeDebuffed,
  canBeExpired,
  canBeReturned,
  canBeSacrificed,
  canBeStolen,
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
  willExpire
}) {
  if (canBeAttackedBySpell) {
    return <CanBeAttackedBySpell moves={moves} index={index} />;
  }

  if (canBeAttackedByWarcry) {
    return <CanBeAttackedByWarcry moves={moves} index={index} />;
  }

  if (canBeAttackedByMinion) {
    return (
      <CanBeAttackedByMinion G={G} ctx={ctx} moves={moves} index={index} />
    );
  }

  if (canBeAttackedByPlayer) {
    return <CanBeAttackedByPlayer moves={moves} index={index} />;
  }

  if (canBeDebuffed) {
    return <CanBeDebuffed moves={moves} index={index} />;
  }

  if (canBeReturned) {
    return <CanBeReturned moves={moves} index={index} targetContext={2} />;
  }

  if (canBeExpired) {
    return <CanBeExpired moves={moves} index={index} />;
  }

  return null;
}

TheirMinionInteractions.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number,
  canAttack: PropTypes.bool,
  canBeAttackedByMinion: PropTypes.bool,
  canBeAttackedByPlayer: PropTypes.bool,
  canBeAttackedBySpell: PropTypes.bool,
  canBeAttackedByWarcry: PropTypes.bool,
  canBeBuffed: PropTypes.bool,
  canBeHealed: PropTypes.bool,
  canBeDebuffed: PropTypes.bool,
  canBeExpired: PropTypes.bool,
  canBeReturned: PropTypes.bool,
  canBeSacrificed: PropTypes.bool,
  canBeStolen: PropTypes.bool,
  canReceiveEnergyShield: PropTypes.bool,
  canReceiveOnslaught: PropTypes.bool,
  hasBoon: PropTypes.bool,
  hasEnergyShield: PropTypes.bool,
  hasGuard: PropTypes.bool,
  hasOnslaught: PropTypes.bool,
  isAttacking: PropTypes.bool,
  isConcealed: PropTypes.bool,
  isCursed: PropTypes.bool,
  isDisabled: PropTypes.bool,
  willExpire: PropTypes.bool
};
