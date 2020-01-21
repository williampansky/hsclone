import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Component as SingleDropArea } from 'systems/dropAreas/SingleDropArea';
import { Component as AdjacentDropArea } from 'systems/dropAreas/AdjacentDropArea';

const BoardDropArea = ({ children, dropSpell }) => {
  const [{ canDrop, isOver, object }, ref] = useDrop({
    accept: ['MINION', 'SPELL'],
    canDrop: object => object,
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver({ shallow: false }),
      object: monitor.getItem()
    }),
    drop: object => {
      const { type } = object;
      if (type === 'MINION') return;
      return dropSpell(object);
    }
  });

  return (
    <Component
      canDrop={canDrop}
      data-file="BoardDropArea"
      isOver={isOver}
      isMinion={object && object.type === 'MINION'}
      ref={ref}
    >
      {children}
    </Component>
  );
};

BoardDropArea.propTypes = {
  children: PropTypes.node.isRequired,
  dropSpell: PropTypes.func
};

const Component = styled.div`
  align-items: center;
  background: transparent;
  border: 1px solid ${p => styledBorderColor(p.isOver)};
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;

  ${SingleDropArea} {
    opacity: ${p => p.isOver && p.isMinion && 0.45};
  }

  ${AdjacentDropArea} {
    opacity: ${p => p.isOver && p.isMinion && 0.45};
  }
`;

function styledBorderColor(isOver = false) {
  return isOver ? 'rgba(255, 255, 255, 0.825)' : 'transparent';
}

export default BoardDropArea;
