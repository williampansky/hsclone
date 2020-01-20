import { setHeaderHeight } from 'features/layout/layout.slice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

const Header = ({ mousePositionX, mousePositionY }) => {
  const dispatch = useDispatch();

  const [ref, { height }] = useDimensions({ liveMeasure: false });

  const handleDispatch = useCallback(
    height => {
      return dispatch(setHeaderHeight(height));
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

export default Header;
