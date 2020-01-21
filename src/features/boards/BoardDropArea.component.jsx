import React from 'react';
import { useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoardDropArea = ({
  afterIndex,
  children,
  dropItem,
  isAlone,
  isWrapper
}) => {
  const [{ canDrop, isOver, isOverCurrent, item }, drop] = useDrop({
    accept: ['CARD', 'SPELL'],
    canDrop: (object, monitor) => {
      return object;
    },
    drop: (object, monitor) => {
      if (isWrapper) return;
      return dropItem(object, afterIndex);
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver({ shallow: false }),
      isOverCurrent: monitor.isOver({ shallow: true }),
      object: monitor.getItem()
    })
  });

  const active = canDrop && isOverCurrent;

  if (isWrapper) {
    return (
      <WrapperArea
        active={active}
        canDrop={canDrop}
        data-file="BoardDropAreaWrapper"
        isOver={isOver}
        isOverCurrent={isOverCurrent}
        ref={drop}
      >
        {children}
      </WrapperArea>
    );
  }

  if (isAlone) {
    return (
      <SingleArea
        active={active}
        canDrop={canDrop}
        data-file="BoardDropAreaSingle"
        isOver={isOver}
        isOverCurrent={isOverCurrent}
        ref={drop}
      />
    );
  }

  return (
    <AdjacentArea
      active={active}
      canDrop={canDrop}
      data-file="BoardDropAreaAdjacent"
      isOver={isOver}
      isOverCurrent={isOverCurrent}
      ref={drop}
    />
  );
};

BoardDropArea.propTypes = {
  afterIndex: PropTypes.number,
  children: PropTypes.node,
  dropItem: PropTypes.func,
  isAlone: PropTypes.bool,
  isWrapper: PropTypes.bool
};

BoardDropArea.defaultTypes = {
  isAlone: false,
  isWrapper: false
};

const SingleArea = styled.div`
  background: ${p => (p.isOver ? 'rgba(255, 255, 255, 0.25)' : 'transparent')};
  border: 2px dashed;
  border-color: ${p =>
    p.isOver ? 'rgba(255, 255, 255, 0.825)' : 'rgba(255, 255, 255, 0.425)'};
  border-radius: 5px;
  height: 50%;
  left: 0;
  opacity: ${p => (p.isOverCurrent ? '1 !important' : 0)};
  position: relative;
  top: 0;
  transition: width 200ms ease-in-out;
  width: ${p => (p.canDrop && p.isOver ? '10%' : '8%')};
  will-change: width;
`;

const handleAdjacentOpacity = (canDrop, isOver) => {
  if (canDrop) return 0.45;
  if (canDrop && isOver) return 1;
  return 0;
};

const AdjacentArea = styled.div`
  background: ${p => (p.isOver ? 'rgba(255, 255, 255, 0.25)' : 'transparent')};
  border: 2px dashed;
  border-color: ${p =>
    p.isOver ? 'rgba(255, 255, 255, 0.825)' : 'rgba(255, 255, 255, 0.425)'};
  border-radius: 5px;
  height: 50%;
  left: 0;
  opacity: ${p => handleAdjacentOpacity(p.canDrop, p.isOver)};
  position: relative;
  top: 0;
  transition: width 200ms ease-in-out;
  width: ${p => (p.canDrop && p.isOver ? '10%' : '1%')};
  will-change: width;
`;

const WrapperArea = styled.div`
  align-items: center;
  background: transparent;
  border: 1px solid;
  border-color: ${p =>
    p.isOver ? 'rgba(255, 255, 255, 0.825)' : 'transparent'};
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;

  ${SingleArea} {
    opacity: ${p => p.isOver && 0.45};
  }
`;

export default BoardDropArea;
