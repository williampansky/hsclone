import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function HasGuardForeground() {
  const [isAnimating, setIsAnimating] = React.useState(false);

  // prettier-ignore
  React.useEffect(() => {
    setIsAnimating(true)
    setTimeout(() => { setIsAnimating(false); }, 200);
  }, []);

  return (
    <Component
      data-file="mechanics/HasGuardForeground"
      isAnimating={isAnimating}
    />
  );
}

HasGuardForeground.propTypes = {
  moves: PropTypes.object,
  data: PropTypes.object,
  index: PropTypes.number
};

const Component = styled.div`
  background-image: url('assets/images/mechanics/GUARD/foreground.png');
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
  transition: transform 100ms ease-out;
  z-index: 2;

  .--is-attacking & {
    transform: scale(1.15);
  }

  .is-dead & {
    transform: scale(0.1);
  }
`;
