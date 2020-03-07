import React from 'react';
import PropTypes from 'prop-types';

import CanAttack from 'components/interactions/minions/CanAttack';
import CanBeBuffed from 'components/interactions/minions/CanBeBuffed';
import CanBeDebuffed from 'components/interactions/minions/CanBeDebuffed';
import CanBeHealed from 'components/interactions/minions/CanBeHealed';
import CanBeSacrificed from 'components/interactions/minions/CanBeSacrificed';
import CanBeExpired from 'components/interactions/minions/CanBeExpired';
import IsAttacking from 'components/interactions/minions/IsAttacking';
import CanBeReturned from 'components/interactions/minions/CanBeReturned';
import CanBeStolen from 'components/interactions/minions/CanBeStolen';
import CanReceiveEnergyShield from 'components/interactions/minions/CanReceiveEnergyShield';
import CanReceiveOnslaught from 'components/interactions/minions/CanReceiveOnslaught';

export default function YourMinionInteractions({
  G,
  ctx,
  moves,
  data,
  index,
  canAttack,
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
  if (canBeHealed) {
    return <CanBeHealed G={G} ctx={ctx} moves={moves} index={index} />;
  }

  if (canBeBuffed) {
    return <CanBeBuffed G={G} ctx={ctx} moves={moves} index={index} />;
  }

  if (canBeDebuffed) {
    return <CanBeDebuffed moves={moves} index={index} />;
  }

  if (canBeExpired) {
    return <CanBeExpired moves={moves} index={index} />;
  }

  if (canBeReturned) {
    return <CanBeReturned moves={moves} index={index} />;
  }

  if (canBeSacrificed) {
    return <CanBeSacrificed moves={moves} index={index} />;
  }

  if (canBeStolen) {
    return <CanBeStolen moves={moves} index={index} />;
  }

  if (canReceiveEnergyShield) {
    return <CanReceiveEnergyShield moves={moves} index={index} />;
  }

  if (canReceiveOnslaught) {
    return <CanReceiveOnslaught moves={moves} index={index} />;
  }

  if (canAttack && !isAttacking) {
    return <CanAttack data={data} moves={moves} index={index} />;
  }

  if (canAttack && isAttacking) {
    return <IsAttacking moves={moves} />;
  }

  return null;
}

YourMinionInteractions.propTypes = {
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
