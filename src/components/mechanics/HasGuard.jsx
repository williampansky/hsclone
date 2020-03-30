import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function HasGuard() {
  const [isAnimating, setIsAnimating] = React.useState(false);

  // prettier-ignore
  React.useEffect(() => {
    setIsAnimating(true)
    setTimeout(() => { setIsAnimating(false); }, 200);
  }, []);

  return <Component data-file="mechanics/HasGuard" />;
}

HasGuard.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  background-image: url('http://www.clker.com/cliparts/D/0/J/J/K/a/shield-hi.png');
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 100%;
  height: 112%;
  top: -5px;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  transform: ${p => (p.isAnimating ? 'scale(0.1)' : 'scale(1)')};
  transition: transform 400ms ease-out;
  z-index: -1;
`;
