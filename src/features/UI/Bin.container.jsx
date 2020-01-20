import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Bin = ({ children, id }) => {
  const dispatch = useDispatch();
  const ref = useRef();

  return (
    <Component id={id} ref={ref}>
      {children}
    </Component>
  );
};

const Component = styled.div`
  /* background: red; */
  box-sizing: border-box;
  position: relative;
  z-index: 1;
`;

export default Bin;
