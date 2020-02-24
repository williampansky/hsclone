import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import svg from 'assets/svgs/sphere.svg';

export default function PlayerHealth({ health, player }) {
  return (
    <Component data-file="avatars/PlayerHealth" player={player}>
      <ReactSVG className="svg" src={svg} />
      <HealthValue>{health}</HealthValue>
    </Component>
  );
}

PlayerHealth.propTypes = {
  health: PropTypes.number,
  player: PropTypes.string
};

const Component = styled.div`
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex-flow: column nowrap;
  font-size: 20px;
  font-weight: bold;
  height: var(--player-health-size);
  justify-content: center;
  position: absolute;
  width: var(--player-health-size);
  z-index: 1;

  top: ${p => (p.player === 'YourHealth' ? '20%' : 'auto')};
  bottom: ${p => (p.player === 'YourHealth' ? 'auto' : '20%')};
  right: ${p => (p.player === 'YourHealth' ? 'auto' : '-5%')};
  left: ${p => (p.player === 'YourHealth' ? '-5%' : 'auto')};

  .svg {
    width: var(--player-health-size);
    height: var(--player-health-size);
  }

  &:before {
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.25);
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  &:after {
    border-radius: 50%;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.625);
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const HealthValue = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  font-size: 1em;
  line-height: 1;
  font-family: 'Carter One', sans-serif;
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black,
    0 0 1px black;
  /* text-shadow: 0px 1px 1px rgba(112, 9, 32, 0.825),
    0px 1px 1px rgba(51, 2, 13, 0.665); */
`;
