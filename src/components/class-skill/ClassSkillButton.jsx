/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function ClassSkillButton({ G, ctx, moves, isActive, canUse }) {
  const { initClassSkill } = moves;

  function handleClick() {
    if (!isActive || !canUse) return;
    return initClassSkill(G, ctx);
  }

  return (
    <Component
      data-file="class-skill/ClassSkillButton"
      canUse={canUse}
      onClick={() => handleClick()}
    >
      {isActive ? (
        <Cost canUse={canUse}>
          <TextValue>{`2`}</TextValue>
        </Cost>
      ) : null}
      {canUse ? 'Btn' : ''}
    </Component>
  );
}

const Cost = styled.div`
  font-family: 'Carter One', sans-serif;
  align-items: center;
  background-image: radial-gradient(
    circle,
    hsla(197, 100%, 80%, 1),
    hsla(197, 90%, 65%, 1)
  );
  border-radius: 50%;
  color: #042c3c;
  display: flex;
  flex-flow: column nowrap;
  font-size: 1em;
  font-weight: 600;
  height: calc(var(--card-height) / 8);
  justify-content: center;
  overflow: hidden;
  left: 0;
  line-height: 1;
  position: absolute;
  top: 0;
  user-select: none;
  width: calc(var(--card-height) / 8);
  z-index: 5;
  transition: transform 800ms cubic-bezier(0.19, 1, 0.22, 1);
  transform: ${p => (p.canUse ? 'scale(1)' : 'scale(0.625)')};
  box-shadow: 0px 0px 1.5px rgba(0, 0, 0, 0.925),
    0px 0px 4px rgba(0, 0, 0, 0.465);

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background: transparent;
    pointer-events: none;
    border-radius: 50%;
    border-top: 4px solid rgb(195, 238, 255);
    border-bottom: 4px solid rgb(56, 164, 207);
    filter: blur(2px);
    position: absolute;
  }

  &:after {
    border-radius: 50%;
    border-top: 1px solid rgba(255, 255, 255, 0.95);
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

const TextValue = styled.div`
  color: white;
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
`;

const Component = styled.div`
  align-items: center;
  background: ${p => (p.canUse ? 'red' : 'gray')};
  border-radius: 50%;
  cursor: ${p => (p.canUse ? 'pointer' : 'not-allowed')};
  display: flex;
  flex-flow: column nowrap;
  height: 120px;
  justify-content: center;
  position: absolute;
  right: 32.5vw;
  top: -75px;
  user-select: none;
  width: 120px;
`;
