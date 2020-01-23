import { CardNameProps } from 'components/Card/Card.component.interfaces';
import styled from 'styled-components';

export const Component = styled.article`
  border-radius: 3px;
  background: var(--card-background-color);
  width: calc(var(--card-height) / 1.4);
  height: var(--card-height);
  position: relative;
  box-sizing: border-box;
  font-size: calc(var(--card-height) / 20);
  user-select: none;

  * {
    user-select: none;
  }
`;

export const ImageWrapper = styled.div`
  border-top-left-radius: 1.5px;
  border-top-right-radius: 1.5px;
  position: relative;
  box-sizing: border-box;
  height: 50%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  object-fit: cover;

  img {
    width: 100%;
    height: auto;
    pointer-events: none;
  }
`;

export const CardNameWrapper = styled.div<CardNameProps>`
  border-radius: 1.5px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
  box-sizing: border-box;
  text-align: center;
  font-size: ${props => props.fontSize}em;
  line-height: 1;
  font-weight: normal;
  background: #d0deb3;
  z-index: 2;
  padding: 0;
  bottom: 15px;
  margin: 0 auto;
  width: 90%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 10%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  span {
    display: inline-block;
    pointer-events: none;
  }
`;

export const CardTextWrapper = styled.div`
  align-items: center;
  bottom: 15px;
  display: flex;
  flex-flow: column nowrap;
  font-size: 1em;
  font-weight: normal;
  height: 25%;
  justify-content: center;
  line-height: calc(1.45 / var(--card-height));
  margin: 0;
  padding: 20px;
  position: relative;
  text-align: center;

  p {
    margin: 0;
    pointer-events: none;
  }
`;

export const CardTypeWrapper = styled.div`
  align-items: center;
  background: lightgray;
  border-radius: 1.5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  font-size: 0.715em;
  height: 5%;
  justify-content: center;
  letter-spacing: 0.0875em;
  margin: 0 auto;
  padding: 0.2em 0.15em;
  position: relative;
  text-align: center;
  width: 100%;
`;

export const CardCostWrapper = styled.div`
  position: absolute;
  background: blue;
  color: white;
  line-height: 1;
  font-size: 0.875em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  z-index: 5;
  height: calc(var(--card-height) / 10);
  width: calc(var(--card-height) / 10);
  border-radius: 50%;
  top: -8.675px;
  left: -8.675px;
  font-weight: 600;
`;

export const CardAttackWrapper = styled.div`
  position: absolute;
  background: purple;
  color: white;
  line-height: 1;
  font-size: 0.875em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  z-index: 5;
  height: calc(var(--card-height) / 10);
  width: calc(var(--card-height) / 10);
  border-radius: 50%;
  bottom: -4.165px;
  left: -4.165px;
  font-weight: 600;
`;

export const CardHealthWrapper = styled.div`
  position: absolute;
  background: red;
  color: white;
  line-height: 1;
  font-size: 0.875em;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  z-index: 5;
  height: calc(var(--card-height) / 10);
  width: calc(var(--card-height) / 10);
  border-radius: 50%;
  bottom: -4.165px;
  right: -4.165px;
  font-weight: 600;
`;
