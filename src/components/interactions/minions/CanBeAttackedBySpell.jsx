import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WARCRY_TARGET_CONTEXT from 'enums/warcry.target-context.enum';
import TARGET_CONTEXT from 'enums/target-context.enum';

export default function CanBeAttackedBySpell({ moves, index }) {
  const { castTargetedSpell } = moves;
  return (
    <Component
      data-file="interactions/minions/CanBeAttackedBySpell"
      onClick={() =>
        castTargetedSpell(TARGET_CONTEXT[2], WARCRY_TARGET_CONTEXT[1], index)
      }
    />
  );
}

CanBeAttackedBySpell.propTypes = {
  moves: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  border-radius: var(--minion-border-radius);
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