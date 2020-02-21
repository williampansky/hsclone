import React from 'react';
import styled from 'styled-components';

/**
 * @see https://codepen.io/duanhongchang/pen/fwigG
 */
export default function GameLoading() {
  return (
    <Component>
      <Spinner>
        <Ring color="blue" />
        <Label>
          <LabelText>Loading</LabelText>
        </Label>
      </Spinner>
    </Component>
  );
}

const Component = styled.div`
  align-items: center;
  background: #111;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Spinner = styled.div`
  border-radius: 50%;
  bottom: 0;
  box-shadow: 0 0 0 6px #222, 0 0 6px 10px #444;
  cursor: wait;
  height: 150px;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  user-select: none;
  width: 150px;
`;

const Ring = styled.div`
  animation: rotate 1s linear infinite;
  background: ${props => getRingColor(props.color)};
  border-radius: 110px;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  padding: 10px;
  position: absolute;
  right: 0;
  top: 0;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Label = styled.div`
  background: #222;
  background: linear-gradient(#222, #111);
  border-radius: 50%;
  bottom: 5px;
  color: #fff;
  font: normal normal normal 12px/140px Helvetica, Arial, sans-serif;
  left: 5px;
  position: absolute;
  right: 5px;
  text-align: center;
  top: 5px;
`;

const LabelText = styled.span`
  animation: fadingText 1s linear infinite;
  vertical-align: middle;

  @keyframes fadingText {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function getRingColor(color) {
  switch (color) {
    case 'blue':
      return 'linear-gradient(#3cf, transparent, #3cf)';

    case 'green':
      return 'linear-gradient(#bfff00, transparent, #bfff00)';

    case 'purple':
      return 'linear-gradient(#e166e1, transparent, #e166e1)';

    case 'red':
      return 'linear-gradient(#cd5c5c, transparent, #cd5c5c)';

    default:
      return;
  }
}
