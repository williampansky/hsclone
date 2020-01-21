import React, { useCallback, useEffect } from 'react';

// libs
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';

// actions
import { setFooterHeight } from 'features/layout/layout.slice';

// children
import YourHand from 'features/yourHand/YourHand';

const Footer = () => {
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
    <Component data-file="Footer" ref={ref}>
      <YourHand />
    </Component>
  );
};

const Component = styled.div`
  background: gray;
  box-sizing: border-box;
  position: relative;
  width: 100vw;
  z-index: 200;
`;

export default Footer;
