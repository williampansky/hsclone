/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import CARDCLASS from 'enums/cardClass.enums';

export default function ClassSkillButton({
  G,
  ctx,
  moves,
  isActive,
  playerClass,
  canUse
}) {
  const { initClassSkill } = moves;

  function handleClick() {
    if (!isActive || !canUse) return;
    return initClassSkill(G, ctx);
  }

  function classText(string) {
    // prettier-ignore
    switch (string) {
      case CARDCLASS[7]:  return 'Trade 2 HP to Draw a Card';
      case CARDCLASS[8]:  return 'Gain Energy Shield Points';
      default:            return;
    }
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
      <TextValue>
        <span>{classText(playerClass)}</span>
      </TextValue>
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
  left: 5px;
  line-height: 1;
  position: absolute;
  top: 0;
  user-select: none;
  width: calc(var(--card-height) / 8);
  z-index: 5;
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
  font-family: 'Carter One', sans-serif;
  text-align: center;
  pointer-events: none;
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

  span {
    font-size: 0.75em;
    line-height: 1.15;
    width: 80px;
    pointer-events: none;
    display: block;
  }
`;

const a =
  'inset 0 0 12px rgba(0, 0, 0, 0.925), inset 0 0 25px rgba(0, 0, 0, 0.125)';
const b = 'inset 0 0 8px rgba(0, 0, 0, 0.25)';

const Component = styled.div`
  align-items: center;
  background: ${p => (p.canUse ? '#333' : '#999')};
  border-radius: 50%;
  cursor: ${p => (p.canUse ? 'pointer' : 'not-allowed')};
  display: flex;
  flex-flow: column nowrap;
  height: 120px;
  justify-content: center;
  position: absolute;
  right: -135px;
  top: 20px;
  user-select: none;
  width: 120px;
  border-top: 1px solid rgba(255, 255, 255, 0.465);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0px 0px 4.5px rgba(0, 0, 0, 0.925),
    0px 0px 12.5px rgba(0, 0, 0, 0.465);

  &:before {
    box-shadow: ${p => (p.canUse ? a : b)};
    border-radius: 50%;
    border: 10px solid rgb(115, 104, 104);
    content: '';
    height: 100%;
    width: 100%;
    pointer-events: none;
    position: absolute;
  }
`;
