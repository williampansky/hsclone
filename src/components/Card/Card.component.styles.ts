import styled from 'styled-components';

const CardStyles = {
  fontSize: 16
};

interface CardNameProps {
  fontSize: number;
}

export const Component = styled.article`
  border-radius: 3px;
  background: #ededed;
  width: 250px;
  height: 350px;
  position: relative;
  box-sizing: border-box;
  font-size: ${CardStyles.fontSize}px;

  * {
    user-select: none;
  }

  cursor: pointer;
  transition: transform 100ms ease;
  user-select: none;

  &[draggable='true']:hover {
    transform: translateY(-10px) scale(1.05);
    transition: transform 200ms ease;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 200px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  object-fit: cover;

  img {
    width: 100%;
    height: auto;
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
  line-height: 1;
  font-weight: normal;
  margin: 0;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 75px;
  bottom: 15px;
  position: relative;
`;

export const CardTypeWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  padding: 0.2em 0.15em;
  width: 65px;
  margin: 0 auto;
  top: 10px;
`;
