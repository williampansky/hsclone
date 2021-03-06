import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TARGET_CONTEXT from 'enums/target-context.enum';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

export default function AvatarCanBeAttackedByWarcry({ moves }) {
  const { castTargetedWarcry } = moves;
  return (
    <Component
      data-file="interactions/avatars/AvatarCanBeAttackedByWarcry"
      onClick={() =>
        castTargetedWarcry(TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[2])
      }
    />
  );
}

AvatarCanBeAttackedByWarcry.propTypes = {
  moves: PropTypes.object
};

const Component = styled.div`
  animation: fadeIn 1200ms var(--animation-transition-cubic) forwards;
  border-top-left-radius: var(--avatar-border-radius);
  border-top-right-radius: var(--avatar-border-radius);
  box-shadow: var(--box-shadow-can-be-attacked);
  cursor: pointer;
  height: 100%;
  opacity: 0;
  transition-property: box-shadow, opacity;
  transition: 600ms ease-in-out;
  width: 100%;
  position: absolute;

  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(196, 56, 0, 0);
  }

  &:after {
    animation: targeting-ripple 600ms linear infinite;
    content: '';
    position: absolute;
    border-top-left-radius: var(--avatar-border-radius);
    border-top-right-radius: var(--avatar-border-radius);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 600ms ease-in-out;
    will-change: opacity;
  }

  &:hover:after {
    opacity: 1;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes targeting-ripple {
    0% {
      box-shadow: 0 4px 10px var(--box-shadow-can-be-attacked-color-ripple),
        0 0 0 0 var(--box-shadow-can-be-attacked-color-ripple),
        0 0 0 5px var(--box-shadow-can-be-attacked-color-ripple),
        0 0 0 10px var(--box-shadow-can-be-attacked-color-ripple);
    }
    100% {
      box-shadow: 0 4px 10px var(--box-shadow-can-be-attacked-color-ripple),
        0 0 0 5px var(--box-shadow-can-be-attacked-color-ripple),
        0 0 0 10px var(--box-shadow-can-be-attacked-color-ripple),
        0 0 0 20px rgba(196, 56, 0, 0);
    }
  }
`;
