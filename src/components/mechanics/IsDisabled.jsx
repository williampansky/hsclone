import React from 'react';
import styled from 'styled-components';

// https://codepen.io/vineethtr/pen/qdKXeB?editors=0100
export default function IsDisabled() {
  return (
    <Component data-file="mechanics/IsDisabled">
      <DisabledIcon>
        <span aria-label="disabled" role="img">
          &#x26D4;
        </span>
      </DisabledIcon>
    </Component>
  );
}

const Component = styled.div`
  border-radius: var(--minion-border-radius);
  height: 100%;
  opacity: 1;
  width: 100%;
  pointer-events: none;
  position: absolute;
  z-index: 2;
`;

const DisabledIcon = styled.div`
  font-size: 22.5px;
  pointer-events: none;
  user-select: none;
`;
