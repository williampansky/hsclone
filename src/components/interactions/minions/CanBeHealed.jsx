import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PLAYER_BOARDS from 'enums/playerBoards.enums';
import TARGET_CONTEXT from 'enums/target-context.enum';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';

export default function CanBeHealed({ G, ctx, moves, board, index }) {
  const { warcryObject } = G;
  const { currentPlayer } = ctx;
  const { castTargetedSpell, castTargetedWarcry } = moves;

  function handleClick() {
    if (warcryObject[currentPlayer] !== null)
      return castTargetedWarcry(
        board === PLAYER_BOARDS[1] ? TARGET_CONTEXT[1] : TARGET_CONTEXT[2],
        WARCRY_TARGET_CONTEXT[1],
        index
      );
    else
      return castTargetedSpell(
        board === PLAYER_BOARDS[1] ? TARGET_CONTEXT[1] : TARGET_CONTEXT[2],
        WARCRY_TARGET_CONTEXT[1],
        index
      );
  }

  return (
    <Component
      data-file="interactions/minions/CanBeHealed"
      onClick={() => handleClick()}
    />
  );
}

CanBeHealed.propTypes = {
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