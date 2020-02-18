import styled from 'styled-components';

export const Component = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &:before {
    animation: fadeOut 800ms ease-in-out forwards;
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.625);
    z-index: 9000;
  }
`;
