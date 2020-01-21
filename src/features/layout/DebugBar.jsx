import React, { useCallback, useEffect } from 'react';
import { setDebugBarHeight } from 'features/layout/layout.slice';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

const DebugBar = ({ mousePositionX, mousePositionY }) => {
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
    <Component ref={ref}>
      x: {mousePositionX}; y: {mousePositionY}
    </Component>
  );
};

const Component = styled.div`
  background: gray;
  box-sizing: border-box;
  height: 20px;
  position: relative;
  width: 100vw;
  z-index: 200;
`;

export default DebugBar;
