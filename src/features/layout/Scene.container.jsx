import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  deselectCurrentEntity,
  addNewEntityToStage
} from 'features/entities/entities.slice';

const Scene = ({ children, mousePositionX, mousePositionY }) => {
  const dispatch = useDispatch();
  const componentRef = useRef();
  const sceneRef = componentRef && componentRef.current;

  const hideCursor = () => {
    const body = document.body;
    !body.classList.contains('hide-cursor')
      ? body.classList.add('hide-cursor')
      : body.classList.remove('hide-cursor');
  };

  return <Component ref={componentRef}>{children}</Component>;
};

const Component = styled.div`
  position: fixed;
  overflow: auto;
  height: 100%;
  z-index: 100;
  width: 100%;
  left: 0;
  top: 0;
`;

Scene.propTypes = {
  children: PropTypes.node
};

export default Scene;
