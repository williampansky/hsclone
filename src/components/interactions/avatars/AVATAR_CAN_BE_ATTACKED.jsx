import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function AVATAR_CAN_BE_ATTACKED({
  G,
  ctx,
  moves,
  board,
  yourID
}) {
  const { warcryObject, selectedMinionIndex, selectedMinionObject } = G;
  const { currentPlayer } = ctx;
  const { attackPlayer, castTargetedWarcryEffect } = moves;

  const attackingMinionIndex = selectedMinionIndex[yourID] !== null;
  const attackingMinionObject = selectedMinionObject[yourID] !== null;
  const activeWarcryObject = warcryObject[yourID] !== null;

  const canBeAttackedByWarcry = activeWarcryObject;
  const canBeAttackedByMinion = attackingMinionIndex && attackingMinionObject;

  if (canBeAttackedByWarcry) {
    return (
      <Component
        board={board}
        data-file="interactions/avatars/AVATAR_CAN_BE_ATTACKED:WARCRY"
        onClick={() =>
          castTargetedWarcryEffect(TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[2])
        }
      />
    );
  } else if (canBeAttackedByMinion) {
    return (
      <Component
        board={board}
        data-file="interactions/avatars/AVATAR_CAN_BE_ATTACKED:MINION"
        onClick={() => attackPlayer()}
      />
    );
  }
}

AVATAR_CAN_BE_ATTACKED.propTypes = {
  G: PropTypes.object,
  ctx: PropTypes.object,
  moves: PropTypes.object,
  board: PropTypes.string,
  yourID: PropTypes.string
};

const BR = 'var(--avatar-border-radius)';
const Component = styled.div`
  border-top-left-radius: ${p => (p.board === 'YourBoard' ? BR : '0')};
  border-top-right-radius: ${p => (p.board === 'YourBoard' ? BR : '0')};
  border-bottom-left-radius: ${p => (p.board === 'TheirBoard' ? BR : '0')};
  border-bottom-right-radius: ${p => (p.board === 'TheirBoard' ? BR : '0')};
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
`;
