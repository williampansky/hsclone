import styled from 'styled-components';
import { CardNameProps } from 'components/Card/Card.component.interfaces';

function getCardWidth(height: number) {
  const ratio = 1.4;
  const number = height / ratio;
  return parseInt(number.toString());
}

const CardStyles = {
  cardHeight: 300,
  fontSize: 15,
  backgroundColor: '#ededed'
};

export const Component = styled.article`
  border-radius: 3px;
  background: ${CardStyles.backgroundColor};
  width: ${getCardWidth(CardStyles.cardHeight)}px;
  height: ${CardStyles.cardHeight}px;
  position: relative;
  box-sizing: border-box;
  font-size: ${CardStyles.fontSize}px;
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
  height: ${CardStyles.cardHeight / 1.75}px;
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
  padding: 0.5em 0.95em;
  bottom: 15px;
  margin: 0 auto;
  width: 90%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  span {
    display: inline-block;
    pointer-events: none;
  }
`;

export const CardTextWrapper = styled.div`
  font-size: 1em;
  line-height: 1.45;
  font-weight: normal;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: ${CardStyles.cardHeight / 4.67}px;
  bottom: 15px;
  position: relative;

  p {
    margin: 0;
    pointer-events: none;
  }
`;

export const CardTypeWrapper = styled.div`
  background: lightgray;
  border-radius: 1.5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  position: relative;
  box-sizing: border-box;
  text-align: center;
  padding: 0.2em 0.15em;
  width: 100%;
  margin: 0 auto;
  bottom: 18px;
  letter-spacing: 0.0875em;
  font-size: 0.875em;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
