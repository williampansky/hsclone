import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFooterHeight } from 'features/layout/layout.slice';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';
import TestCard from 'TestCard';

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
    <Component data-layout="Footer" ref={ref}>
      <Hand data-layout="Hand">
        <TestCard name="Minion 1" type="CARD" background="red" id="Minion1" />
        <TestCard name="Minion 2" type="CARD" background="green" id="Minion2" />
        <TestCard name="Spell" type="SPELL" background="lightblue" id="Spell" />
      </Hand>
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

const Hand = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  & > div + div {
    margin-left: 10px;
  }
`;

export default Footer;
