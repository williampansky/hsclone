import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFooterHeight } from 'features/layout/layout.slice';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

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

  return <Component ref={ref}></Component>;
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
