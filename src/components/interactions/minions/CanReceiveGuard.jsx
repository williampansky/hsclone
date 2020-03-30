import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function CanReceiveGuard({ G, ctx, moves, index }) {
  const { castTargetedSpell, castTargetedWarcry } = moves;

  function handleClick() {
    return G.warcryObject[ctx.currentPlayer] !== null
      ? castTargetedWarcry(TARGET_CONTEXT[1], WARCRY_TARGET_CONTEXT[1], index)
      : castTargetedSpell(TARGET_CONTEXT[1], WARCRY_TARGET_CONTEXT[1], index);
  }

  return (
    <Component
      data-file="interactions/minions/CanReceiveGuard"
      onClick={() => handleClick()}
    />
  );
}

CanReceiveGuard.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  border-radius: var(--minion-border-radius);
  box-shadow: 0 0 10px #3af32d;
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  &:hover {
    box-shadow: 0 0 20px #3af32d;
  }
`;
