import React, { useCallback, useEffect } from 'react';

// libs
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

// actions
import { setDebugBarHeight } from 'features/layout/layout.slice';

// children
import HoveredTargetFile from 'components/DebugBar/HoveredTargetFile';
import MousePosition from 'components/DebugBar/MousePosition';

const DebugBar = ({ mousePositionX, mousePositionY, target }) => {
  const dispatch = useDispatch();
  const [ref, { height }] = useDimensions({ liveMeasure: false });

  const handleDispatch = useCallback(
    height => {
      return dispatch(setDebugBarHeight(height));
    },
    [dispatch]
  );

  useEffect(() => {
    height && handleDispatch(height);
  }, [handleDispatch, height]);

  return (
    <Component data-file="DebugBar" ref={ref}>
      <MousePosition x={mousePositionX} y={mousePositionY} />
      <HoveredTargetFile target={target} />
    </Component>
  );
};

DebugBar.propTypes = {
  mousePositionX: PropTypes.number,
  mousePositionY: PropTypes.number,
  target: PropTypes.string
};

const PADDING = 4;

const Component = styled.div`
  align-items: center;
  background: gray;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding: ${PADDING}px;
  position: relative;
  width: 100vw;
  z-index: 200;

  & > div + div {
    margin-left: ${PADDING * 2}px;
  }
`;

export default DebugBar;
