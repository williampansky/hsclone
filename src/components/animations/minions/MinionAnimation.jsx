import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GAME_010 from 'components/animations/minions/GAME_010';

export default function MinionAnimation({
  G,
  youUsedClassSkill,
  theyUsedClassSkill
}) {
  return (
    <Component data-file="animations/minions/MinionAnimation">
      {youUsedClassSkill ? <GAME_010 /> : null}
    </Component>
  );
}

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
