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
  hasGuard,
  canBeAttacked,
  canBeHealed
}) {
  const { selectedCardObject } = G;
  const { currentPlayer } = ctx;

  const currentCard = selectedCardObject[currentPlayer];
  const cardType = currentCard && currentCard.type;
  const cardSpellType = currentCard && currentCard.spellType;

  const canBeAttackedBySpell =
    canBeAttacked && cardType === TYPE[3] && cardSpellType === SPELLTYPE[2];

  const CAN_BE_SPELLED = MINION_CAN_BE_ATTACKED_BY_SPELL;
  const CAN_BE_ATTACKED = MINION_CAN_BE_ATTACKED;
  const CAN_BE_HEALED = MINION_CAN_BE_HEALED;

  if (canBeHealed) {
    return <CAN_BE_HEALED G={G} ctx={ctx} moves={moves} index={index} />;
  } else if (canBeAttackedBySpell) {
    return <CAN_BE_SPELLED G={G} ctx={ctx} moves={moves} index={index} />;
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
