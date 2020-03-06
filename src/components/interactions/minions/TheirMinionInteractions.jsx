import React from 'react';
import PropTypes from 'prop-types';

import TYPE from 'enums/type.enums';
import SPELLTYPE from 'enums/spellType.enums';

import MINION_CAN_BE_ATTACKED_BY_SPELL from 'components/interactions/minions/MINION_CAN_BE_ATTACKED_BY_SPELL';
import MINION_CAN_BE_ATTACKED from 'components/interactions/minions/MINION_CAN_BE_ATTACKED';
import MINION_CAN_BE_HEALED from 'components/interactions/minions/MINION_CAN_BE_HEALED';

export default function TheirMinionInteractions({
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
  const { selectedCardObject } = G;
  const { currentPlayer } = ctx;

  const currentCard = selectedCardObject[currentPlayer];
  const cardType = currentCard && currentCard.type;
  const cardSpellType = currentCard && currentCard.spellType;

  const canBeAttackedBySpell =
    canBeAttacked && cardType === TYPE[3] && cardSpellType === SPELLTYPE[2];

  if (canBeAttackedBySpell)
    return (
      <MINION_CAN_BE_ATTACKED_BY_SPELL
        G={G}
        ctx={ctx}
        moves={moves}
        index={index}
      />
    );

  if (canBeAttacked)
    return (
      <MINION_CAN_BE_ATTACKED G={G} ctx={ctx} moves={moves} index={index} />
    );

  return null;
}

TheirMinionInteractions.propTypes = {
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
