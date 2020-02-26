import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MINION_CAN_ATTACK from 'components/interactions/minions/MINION_CAN_ATTACK';
import MINION_CAN_BE_ATTACKED from 'components/interactions/minions/MINION_CAN_BE_ATTACKED';
import MINION_CAN_BE_HEALED from 'components/interactions/minions/MINION_CAN_BE_HEALED';
import MINION_IS_ATTACKING from 'components/interactions/minions/MINION_IS_ATTACKING';

export default function MinionInteraction({
  G,
  ctx,
  moves,
  isActive,
  index,
  board,
  data,
  canAttack,
  canBeAttacked,
  canBeHealed,
  hasGuard,
  isAttacking
}) {
  return (
    <Component data-file="interactions/minions/MinionInteraction">
      {board === 'YourBoard' && canAttack && !isAttacking ? (
        <MINION_CAN_ATTACK moves={moves} data={data} index={index} />
      ) : null}

      {board === 'YourBoard' && canAttack && isAttacking ? (
        <MINION_IS_ATTACKING moves={moves} data={data} index={index} />
      ) : null}

      {board === 'TheirBoard' && canBeAttacked && !canAttack ? (
        <MINION_CAN_BE_ATTACKED G={G} ctx={ctx} moves={moves} index={index} />
      ) : null}

      {canBeHealed && !canBeAttacked && !canAttack ? (
        <MINION_CAN_BE_HEALED
          G={G}
          ctx={ctx}
          moves={moves}
          board={board}
          index={index}
        />
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
