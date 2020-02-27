import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AVATAR_CAN_BE_ATTACKED_BY_MINION from 'components/interactions/avatars/AVATAR_CAN_BE_ATTACKED_BY_MINION';
import AVATAR_CAN_BE_ATTACKED_BY_WARCRY from 'components/interactions/avatars/AVATAR_CAN_BE_ATTACKED_BY_WARCRY';
import AVATAR_CAN_BE_HEALED from 'components/interactions/avatars/AVATAR_CAN_BE_HEALED';

export default function AvatarInteraction({
  G,
  ctx,
  moves,
  isActive,
  board,
  yourID,
  playerCanBeAttacked,
  playerCanBeHealed
}) {
  const { warcryObject, selectedMinionIndex, selectedMinionObject } = G;

  const attackingMinionIndex = selectedMinionIndex[yourID] !== null;
  const attackingMinionObject = selectedMinionObject[yourID] !== null;
  const activeWarcryObject = warcryObject[yourID] !== null;

  const canBeAttackedByWarcry =
    playerCanBeAttacked &&
    !attackingMinionIndex &&
    !attackingMinionObject &&
    activeWarcryObject;

  const canBeAttackedByMinion =
    playerCanBeAttacked &&
    attackingMinionIndex &&
    attackingMinionObject &&
    !activeWarcryObject;

  return (
    <Component data-file="interactions/avatars/AvatarInteraction">
      {canBeAttackedByWarcry ? (
        <AVATAR_CAN_BE_ATTACKED_BY_WARCRY moves={moves} />
      ) : null}
      {canBeAttackedByMinion ? (
        <AVATAR_CAN_BE_ATTACKED_BY_MINION moves={moves} />
      ) : null}
      {playerCanBeHealed ? (
        <AVATAR_CAN_BE_HEALED G={G} ctx={ctx} moves={moves} board={board} />
      ) : null}
    </Component>
  );
}

AvatarInteraction.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  isActive: PropTypes.bool,
  index: PropTypes.number,
  board: PropTypes.string,
  yourID: PropTypes.string,
  playerCanBeAttacked: PropTypes.bool,
  playerCanBeHealed: PropTypes.bool
};

const Component = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
