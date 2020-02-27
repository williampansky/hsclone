import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function MINION_CAN_BE_HEALED({ G, ctx, moves, board, index }) {
  const { warcryObject } = G;
  const { currentPlayer } = ctx;
  const { castTargetedWarcryEffect } = moves;

  function handleClick() {
    if (warcryObject[currentPlayer] !== null)
      return castTargetedWarcryEffect(
        board === 'YourBoard' ? TARGET_CONTEXT[1] : TARGET_CONTEXT[2],
        WARCRY_TARGET_CONTEXT[1],
        index
      );
  }

  return (
    <Component
      data-file="interactions/minions/MINION_CAN_BE_HEALED"
      onClick={() => handleClick()}
    />
  );
}

MINION_CAN_BE_HEALED.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  board: PropTypes.string,
  index: PropTypes.number
};

const Component = styled.div`
  border-radius: var(--minion-border-radius);
  box-shadow: 0 0 5px #ff48e1;
  cursor: pointer;
  height: 100%;
  opacity: 1;
  transition-property: box-shadow, opacity;
  transition: 200ms ease-in-out;
  width: 100%;
  position: absolute;

  &:hover {
    box-shadow: 0 0 20px #ff48e1;
  }
`;
