import React from 'react';
import styled from 'styled-components';

// https://codepen.io/vineethtr/pen/qdKXeB?editors=0100
export default function WillExpire() {
  return (
    <Component data-file="mechanics/WillExpire">
      <ExpirationIcon>&#x2620;</ExpirationIcon>
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
`;

const ExpirationIcon = styled.div`
  font-size: 22.5px;
  pointer-events: none;
  user-select: none;
`;
