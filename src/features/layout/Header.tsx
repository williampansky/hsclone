import { setHeaderHeight } from 'features/layout/layout.slice';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

const Header = () => {
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
    <Component data-file="Header" ref={ref}>
      Header
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