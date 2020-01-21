import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SingleDropArea = ({ dropItem, isAlone }) => {
  const [{ canDrop, isOverCurrent, object }, ref] = useDrop({
    accept: 'MINION',
    canDrop: object => object,
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      object: monitor.getItem()
    }),
    drop: object => {
      const { type } = object;
      if (type === 'SPELL') return;
      return dropItem(object);
    }
  });

  return (
    <Component
      canDrop={canDrop}
      data-file="SingleDropArea"
      isOverCurrent={isOverCurrent}
      isMinion={object && object.type === 'MINION'}
      ref={ref}
    />
  );
};

SingleDropArea.propTypes = {
  dropItem: PropTypes.func,
  isAlone: PropTypes.bool
};

SingleDropArea.defaultTypes = {
  isAlone: true
};

export const Component = styled.div`
  background: ${p => styledBackgroundColor(p.isMinion, p.isOverCurrent)};
  border-radius: 5px;
  border: 2px dashed ${p => styledBorderColor(p.isMinion, p.isOverCurrent)};
  height: 50%;
  left: 0;
  opacity: ${p => (p.isOverCurrent ? '1 !important' : 0)};
  position: relative;
  top: 0;
  transition: width 200ms ease-in-out;
  width: ${p => (p.canDrop && p.isMinion && p.isOverCurrent ? '10%' : '8%')};
  will-change: width;
`;

function styledBackgroundColor(isMinion = false, isOver = false) {
  if (!isMinion) return;
  return isOver ? 'rgba(255, 255, 255, 0.25)' : 'transparent';
}

function styledBorderColor(isMinion = false, isOver = false) {
  if (!isMinion) return;
  return isOver ? 'rgba(255, 255, 255, 0.825)' : 'rgba(255, 255, 255, 0.425)';
}

export default SingleDropArea;
