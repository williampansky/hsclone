import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AdjacentDropArea = ({ afterIndex, dropItem }) => {
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
      if (type === 'SPELL') return;
      return dropItem(object, afterIndex);
    }
  });

  return (
    <Component
      canDrop={canDrop}
      data-file="AdjacentDropArea"
      isOver={isOver}
      isMinion={object && object.type === 'MINION'}
      ref={ref}
    />
  );
};

AdjacentDropArea.propTypes = {
  afterIndex: PropTypes.number,
  dropItem: PropTypes.func.isRequired
};

AdjacentDropArea.defaultTypes = {
  afterIndex: 0
};

export const Component = styled.div`
  background: ${p => styledBackgroundColor(p.isMinion, p.isOver)};
  border: 2px dashed ${p => styledBorderColor(p.isMinion, p.isOver)};
  border-radius: 5px;
  height: 50%;
  left: 0;
  opacity: ${p => (p.isOver && p.isMinion ? '1 !important' : 0)};
  position: relative;
  top: 0;
  transition: width 200ms ease-in-out;
  width: ${p => (p.canDrop && p.isMinion && p.isOver ? '10%' : '1%')};
  will-change: width;
`;

function styledBackgroundColor(isMinion = false, isOver = false) {
  if (!isMinion) return;
  return isOver ? 'rgba(255, 255, 255, 0.25)' : 'transparent';
}

function styledBorderColor(isMinion = false, isOver = false) {
  if (!isMinion) return;
  return isOver ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.425)';
}

export default AdjacentDropArea;
