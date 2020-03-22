import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Backstab from 'components/animations/avatars/Backstab';

export default function AvatarAnimation({
  G,
  youUsedClassSkill,
  theyUsedClassSkill
}) {
  return (
    <Component data-file="animations/avatars/AvatarAnimation">
      {youUsedClassSkill ? <Backstab /> : null}
    </Component>
  );
}

AvatarAnimation.propTypes = {
  G: PropTypes.object
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
