import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function HasGuardBackground() {
  const [isAnimating, setIsAnimating] = React.useState(false);

  // prettier-ignore
  React.useEffect(() => {
    setIsAnimating(true)
    setTimeout(() => { setIsAnimating(false); }, 200);
  }, []);

  return (
    <Component
      data-file="mechanics/HasGuardBackground"
      isAnimating={isAnimating}
    />
  );
}

HasGuardBackground.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  background-image: url('assets/images/mechanics/GUARD/background.png');
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
  transition: 200ms ease-out;
  transition-property: opacity, transform;
  will-change: opacity, transform;
  z-index: -1;

  .--is-attacking & {
    transform: scale(1.15);
  }

  .is-dead & {
    opacity: 0;
    transform: scale(0.1);
  }
`;
