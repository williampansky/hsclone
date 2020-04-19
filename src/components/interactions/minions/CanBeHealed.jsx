import React from 'react';
import PropTypes from 'prop-types';
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
    <div
      className="can-be-buffed"
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
