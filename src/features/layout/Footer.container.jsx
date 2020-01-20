import { setFooterHeight } from 'features/layout/layout.slice';
import { useDispatch } from 'react-redux';
import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';
import Bin from 'features/UI/Bin.container';
import TestBox from 'TestBox';

const Footer = ({ mousePositionX, mousePositionY }) => {
  const dispatch = useDispatch();
  const [ref, { height }] = useDimensions({ liveMeasure: false });

  const handleDispatch = useCallback(
    height => {
      return dispatch(setFooterHeight(height));
    },
    [dispatch]
  );

  useEffect(() => {
    height && handleDispatch(height);
  }, [handleDispatch, height]);

  return (
    <Component ref={ref}>
      <Bin id="test1">
        <TestBox
          mousePositionX={mousePositionX}
          mousePositionY={mousePositionY}
        />
      </Bin>
    </Component>
  );
};

const Component = styled.div`
  background: gray;
  box-sizing: border-box;
  /* height: 20px; */
  position: relative;
  width: 100vw;
  z-index: 200;
`;

export default Footer;
