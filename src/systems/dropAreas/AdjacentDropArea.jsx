import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AdjacentDropArea = ({ afterIndex, dropItem }) => {
  const [{ canDrop, isOverCurrent }, ref] = useDrop({
    accept: 'MINION',
    canDrop: object => object,
    drop: object => dropItem(object, afterIndex),
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      object: monitor.getItem()
    })
  });

  return (
    <Component
      canDrop={canDrop}
      data-file="AdjacentDropArea"
      isOverCurrent={isOverCurrent}
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
  background: ${p => styledBackgroundColor(p.isOverCurrent)};
  border: 2px dashed ${p => styledBorderColor(p.isOverCurrent)};
  border-radius: 5px;
  height: 50%;
  left: 0;
  opacity: ${p => (p.isOverCurrent ? '1 !important' : 0)};
  position: relative;
  top: 0;
  transition: width 200ms ease-in-out;
  width: ${p => (p.canDrop && p.isOverCurrent ? '10%' : '1%')};
  will-change: width;
`;

function styledBackgroundColor(isOver = false) {
  return isOver ? 'rgba(255, 255, 255, 0.25)' : 'transparent';
}

function styledBorderColor(isOver = false) {
  return isOver ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.425)';
}

export default AdjacentDropArea;
