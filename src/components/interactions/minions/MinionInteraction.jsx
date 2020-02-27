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
  canBeAttacked,
  canBeBuffed,
  canBeHealed,
  hasGuard,
  isAttacking
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
          canBeAttacked={canBeAttacked}
          canBeBuffed={canBeBuffed}
          canBeHealed={canBeHealed}
          isAttacking={isAttacking}
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
          canBeAttacked={canBeAttacked}
          canBeBuffed={canBeBuffed}
          canBeHealed={canBeHealed}
          isAttacking={isAttacking}
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
  canBeAttacked: PropTypes.bool,
  canBeBuffed: PropTypes.bool,
  canBeHealed: PropTypes.bool,
  currentAttack: PropTypes.number,
  currentHealth: PropTypes.number,
  hasGuard: PropTypes.bool,
  isAttacking: PropTypes.bool
};
