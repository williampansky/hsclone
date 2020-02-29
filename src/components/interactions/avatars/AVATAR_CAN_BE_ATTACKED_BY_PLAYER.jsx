import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function AVATAR_CAN_BE_ATTACKED_BY_PLAYER({ moves }) {
  const { attackPlayerWithPlayer } = moves;
  return (
    <Component
      data-file="interactions/avatars/AVATAR_CAN_BE_ATTACKED_BY_PLAYER"
      onClick={() => attackPlayerWithPlayer()}
    />
  );
}

AVATAR_CAN_BE_ATTACKED_BY_PLAYER.propTypes = {
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

  &:before {
    border-radius: 50%;
    bottom: 20%;
    content: '';
    height: var(--player-health-size);
    left: auto;
    position: absolute;
    right: -15%;
    top: auto;
    width: var(--player-health-size);
  }
`;
