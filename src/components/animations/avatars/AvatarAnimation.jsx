import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Backstab from 'components/animations/avatars/Backstab';
import GAME_010 from 'components/animations/minions/GAME_010';

export default function AvatarAnimation({
  G,
  moves,
  youUsedClassSkill,
  theyUsedClassSkill
}) {
  const { lastPlayedCardId } = G;
  const { setLastPlayedCardId } = moves;

  // prettier-ignore
  return (
    <Component data-file="animations/avatars/AvatarAnimation">
    </Component>
  );
}

AvatarAnimation.propTypes = {
  G: PropTypes.object,
  moves: PropTypes.object
};

const Component = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;
