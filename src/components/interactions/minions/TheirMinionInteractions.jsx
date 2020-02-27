import React from 'react';
import PropTypes from 'prop-types';
import MINION_CAN_BE_ATTACKED from 'components/interactions/minions/MINION_CAN_BE_ATTACKED';
import MINION_CAN_BE_HEALED from 'components/interactions/minions/MINION_CAN_BE_HEALED';

export default function TheirMinionInteractions({
  G,
  ctx,
  moves,
  data,
  index,
  hasGuard,
  canBeAttacked,
  canBeHealed
}) {
  const CAN_BE_ATTACKED = MINION_CAN_BE_ATTACKED;
  const CAN_BE_HEALED = MINION_CAN_BE_HEALED;

  if (canBeHealed) {
    return <CAN_BE_HEALED G={G} ctx={ctx} moves={moves} index={index} />;
  } else if (canBeAttacked) {
    return <CAN_BE_ATTACKED G={G} ctx={ctx} moves={moves} index={index} />;
  } else {
    return null;
  }
}

TheirMinionInteractions.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number,
  hasGuard: PropTypes.bool,
  canBeAttacked: PropTypes.bool,
  canBeHealed: PropTypes.bool
};
