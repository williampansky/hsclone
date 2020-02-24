import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import MINION_CAN_ATTACK from 'components/interactions/minions/MINION_CAN_ATTACK';
import MINION_CAN_BE_ATTACKED from 'components/interactions/minions/MINION_CAN_BE_ATTACKED';
import MINION_IS_ATTACKING from 'components/interactions/minions/MINION_IS_ATTACKING';

export default function MinionInteraction({
  G,
  ctx,
  moves,
  isActive,
  index,
  render,
  board,
  data,
  canAttack,
  canBeAttacked,
  canBeHealed,
  hasGuard,
  isAttacking
}) {
  const {
    attackMinion,
    castTargetedWarcryEffect,
    deselectMinion,
    selectMinion
  } = moves;

  // function handleClick() {
  //   if (board === 'YourBoard') {
  //     if (!canAttack) return;
  //     if (isAttacking) return deselectMinion();
  //     else return selectMinion(data, index);
  //   }

  //   if (board === 'TheirBoard') {
  //     if (!canBeAttacked) return;
  //     if (CAN_BE_ATTACKED) {
  //       if (canBeAttackedByMinion) return attackMinion(index);
  //       if (canBeAttackedByWarcry)
  //         return castTargetedWarcryEffect(WARCRY_TARGET_CONTEXT[1], index);
  //     }
  //   }
  // }

  return (
    <Component data-file="interactions/minions/MinionInteraction">
      {canAttack && !isAttacking ? (
        <MINION_CAN_ATTACK moves={moves} data={data} index={index} />
      ) : null}

      {canAttack && isAttacking ? (
        <MINION_IS_ATTACKING moves={moves} data={data} index={index} />
      ) : null}

      {canBeAttacked && !canAttack ? (
        <MINION_CAN_BE_ATTACKED G={G} ctx={ctx} moves={moves} index={index} />
      ) : null}
    </Component>
  );
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
  canBeAttacked: PropTypes.bool,
  canBeHealed: PropTypes.bool,
  currentAttack: PropTypes.number,
  currentHealth: PropTypes.number,
  hasGuard: PropTypes.bool,
  isAttacking: PropTypes.bool
};

const Component = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
