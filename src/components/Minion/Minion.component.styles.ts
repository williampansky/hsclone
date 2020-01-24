import { MinionComponentProps } from 'components/Minion/Minion.component.interfaces';
import styled from 'styled-components';

export const Component = styled.div<MinionComponentProps>`
  border-radius: var(--minion-border-radius);
  background: none;
  width: calc(var(--minion-height) / 1.25);
  height: var(--minion-height);
  position: relative;
  box-sizing: border-box;
  font-size: calc(var(--minion-height) / 8);
  user-select: none;

  * {
    user-select: none;
  }

  &:not(:hover) > article {
    display: none;
  }

  & > article {
    pointer-events: none;
    position: absolute;
    top: -100%;
    right: -175%;
    animation-name: uk-fade-scale-02;
    animation-duration: 200ms;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    transform-origin: 0 100%;
    z-index: 100;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }

  @keyframes uk-fade-scale-02 {
    0% {
      opacity: 0;
      transform: scale(0.2);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ImageWrapper = styled.div`
  border-top-left-radius: var(--minion-border-radius);
  border-top-right-radius: var(--minion-border-radius);
  border-top: 1px solid rgba(255, 255, 255, 0.465);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  position: relative;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
    object-fit: cover;
  }
`;

export const MinionAttackWrapper = styled.div`
  align-items: center;
  background: #f59b2b;
  border-radius: 50%;
  bottom: var(--minion-stat-offset);
  color: #6f3205;
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875em;
  font-weight: 600;
  height: calc(var(--minion-height) / 5);
  justify-content: center;
  left: var(--minion-stat-offset);
  line-height: 1;
  position: absolute;
  width: calc(var(--minion-height) / 5);
  z-index: 5;
`;

export const MinionHealthWrapper = styled.div`
  align-items: center;
  background: #840802;
  border-radius: 50%;
  bottom: var(--minion-stat-offset);
  color: #ff9792;
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.875em;
  font-weight: 600;
  height: calc(var(--minion-height) / 5);
  justify-content: center;
  line-height: 1;
  position: absolute;
  right: var(--minion-stat-offset);
  width: calc(var(--minion-height) / 5);
  z-index: 5;
`;
