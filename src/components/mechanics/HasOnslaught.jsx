import React from 'react';
import styled from 'styled-components';

// https://codepen.io/vineethtr/pen/qdKXeB?editors=0100
export default function HasOnslaught() {
  return (
    <Component data-file="mechanics/HasOnslaught">
      <OnslaughtIcon>
        <span aria-label="onslaught" role="img">
          &#x2629;
        </span>
      </OnslaughtIcon>
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

const OnslaughtIcon = styled.div`
  font-size: 22.5px;
  pointer-events: none;
  user-select: none;
`;
