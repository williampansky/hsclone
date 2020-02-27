import React from 'react';
import PropTypes from 'prop-types';
import MINION_CAN_ATTACK from 'components/interactions/minions/MINION_CAN_ATTACK';
import MINION_CAN_BE_BUFFED from 'components/interactions/minions/MINION_CAN_BE_BUFFED';
import MINION_CAN_BE_HEALED from 'components/interactions/minions/MINION_CAN_BE_HEALED';
import MINION_IS_ATTACKING from 'components/interactions/minions/MINION_IS_ATTACKING';

export default function YourMinionInteractions({
  G,
  ctx,
  moves,
  data,
  index,
  canAttack,
  canBeBuffed,
  canBeHealed,
  hasGuard,
  isAttacking
}) {
  const CAN_ATTACK = MINION_CAN_ATTACK;
  const CAN_BE_BUFFED = MINION_CAN_BE_BUFFED;
  const CAN_BE_HEALED = MINION_CAN_BE_HEALED;
  const IS_ATTACKING = MINION_IS_ATTACKING;

  if (canBeHealed) {
    return <CAN_BE_HEALED G={G} ctx={ctx} moves={moves} index={index} />;
  } else if (canBeBuffed) {
    return <CAN_BE_BUFFED G={G} ctx={ctx} moves={moves} index={index} />;
  } else if (canAttack && !isAttacking) {
    return <CAN_ATTACK moves={moves} data={data} index={index} />;
  } else if (canAttack && isAttacking) {
    return <IS_ATTACKING moves={moves} data={data} index={index} />;
  } else {
    return null;
  }
}

YourMinionInteractions.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number,
  hasGuard: PropTypes.bool,
  canAttack: PropTypes.bool,
  canBeBuffed: PropTypes.bool,
  canBeHealed: PropTypes.bool,
  isAttacking: PropTypes.bool
};
