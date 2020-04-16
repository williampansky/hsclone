import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function CanBeBuffed({ G, ctx, moves, index }) {
  const { selectedCardObject, warcryObject } = G;
  const { currentPlayer } = ctx;
  const { castTargetedSpell, castTargetedWarcry } = moves;

  function handleClick() {
    if (selectedCardObject[currentPlayer] !== null) {
      return castTargetedSpell(
        TARGET_CONTEXT[1],
        WARCRY_TARGET_CONTEXT[1],
        index
      );
    } else if (warcryObject[currentPlayer] !== null)
      return castTargetedWarcry(
        TARGET_CONTEXT[1],
        WARCRY_TARGET_CONTEXT[1],
        index
      );
  }

  return (
    <Component
      data-file="interactions/minions/CanBeBuffed"
      onClick={() => handleClick()}
    />
  );
}

CanBeBuffed.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  animation: fadeIn 1200ms var(--animation-transition-cubic) forwards;
  border-radius: var(--minion-border-radius);
  box-shadow: var(--box-shadow-can-be-buffed);
  cursor: pointer;
  height: 100%;
  opacity: 0;
  transition-property: box-shadow, opacity;
  transition: 600ms ease-in-out;
  width: 100%;
  position: absolute;
  will-change: box-shadow, opacity;

  &:hover {
    box-shadow: 0px 0px 5px 5px rgba(196, 56, 0, 0);
  }

  &:after {
    animation: at-ripple-pink 600ms linear infinite;
    content: '';
    position: absolute;
    border-radius: var(--minion-border-radius);
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

  /* forked https://codepen.io/salahuddin/pen/OmqOpg */
  @keyframes at-ripple-pink {
    0% {
      box-shadow: 0 4px 10px rgba(45, 243, 216, 0.5),
        0 0 0 0 rgba(45, 243, 216, 0.5), 0 0 0 5px rgba(45, 243, 216, 0.5),
        0 0 0 10px rgba(45, 243, 216, 0.5);
    }
    100% {
      box-shadow: 0 4px 10px rgba(45, 243, 216, 0.5),
        0 0 0 5px rgba(45, 243, 216, 0.5), 0 0 0 10px rgba(45, 243, 216, 0.5),
        0 0 0 20px rgba(45, 243, 216, 0);
    }
  }

  .has-guard & {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;

    &:after {
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
    }
  }
`;
