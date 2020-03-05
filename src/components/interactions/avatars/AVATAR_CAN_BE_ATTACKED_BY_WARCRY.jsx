import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TARGET_CONTEXT from 'enums/target-context.enum';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

export default function AVATAR_CAN_BE_ATTACKED_BY_WARCRY({ moves }) {
  const { castTargetedWarcry } = moves;
  return (
    <Component
      data-file="interactions/avatars/AVATAR_CAN_BE_ATTACKED_BY_WARCRY"
      onClick={() =>
        castTargetedWarcry(TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[2])
      }
    />
  );
}

AVATAR_CAN_BE_ATTACKED_BY_WARCRY.propTypes = {
  moves: PropTypes.object
};

const Component = styled.div`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: var(--avatar-border-radius);
  border-bottom-right-radius: var(--avatar-border-radius);
  box-shadow: 0 0 5px #c43800;
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  &:hover {
    box-shadow: 0 0 20px #c43800;
  }
`;
