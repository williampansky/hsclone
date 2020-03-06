import React from 'react';
import PropTypes from 'prop-types';
import MINION_CAN_ATTACK from 'components/interactions/minions/MINION_CAN_ATTACK';
import MINION_CAN_BE_BUFFED from 'components/interactions/minions/MINION_CAN_BE_BUFFED';
import MINION_CAN_BE_HEALED from 'components/interactions/minions/MINION_CAN_BE_HEALED';
import MINION_IS_ATTACKING from 'components/interactions/minions/MINION_IS_ATTACKING';
import MINION_CAN_BE_SACRIFICED from 'components/interactions/minions/MINION_CAN_BE_SACRIFICED';

export default function YourMinionInteractions({
  G,
  ctx,
  moves,
  data,
  index,
  canAttack,
  canBeAttacked,
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
  willExpire
}) {
  if (canBeHealed)
    return <MINION_CAN_BE_HEALED G={G} ctx={ctx} moves={moves} index={index} />;

  if (canBeBuffed)
    return <MINION_CAN_BE_BUFFED G={G} ctx={ctx} moves={moves} index={index} />;

  if (canbeSacrificed)
    return (
      <MINION_CAN_BE_SACRIFICED G={G} ctx={ctx} moves={moves} index={index} />
    );

  if (canAttack && !isAttacking)
    return <MINION_CAN_ATTACK data={data} moves={moves} index={index} />;

  if (canAttack && isAttacking) return <MINION_IS_ATTACKING moves={moves} />;

  return null;
}

YourMinionInteractions.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number,
  canAttack: PropTypes.bool,
  canBeAttacked: PropTypes.bool,
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
  hasOnslaught: PropTypes.bool,
  isAttacking: PropTypes.bool,
  isConcealed: PropTypes.bool,
  isCursed: PropTypes.bool,
  isDisabled: PropTypes.bool,
  willExpire: PropTypes.bool
};
