import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AVATAR_CAN_BE_HEALED from 'components/interactions/avatars/AVATAR_CAN_BE_HEALED';

export default function AvatarInteraction({
  G,
  ctx,
  moves,
  isActive,
  board,
  playerCanBeHealed
}) {
  return (
    <Component data-file="interactions/avatars/AvatarInteraction">
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
