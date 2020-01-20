import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  deselectCurrentEntity,
  addNewEntityToStage
} from 'features/entities/entities.slice';
const png = require('house01.png');

const Scene = ({ children, mousePositionX, mousePositionY }) => {
  const dispatch = useDispatch();
  const componentRef = useRef();
  const sceneRef = componentRef && componentRef.current;

  const { ents, selected } = useSelector(s => s.entities);

  const hideCursor = () => {
    const body = document.body;
    !body.classList.contains('hide-cursor')
      ? body.classList.add('hide-cursor')
      : body.classList.remove('hide-cursor');
  };

  const myListener = React.useCallback(
    function(e) {
      console.log(`x: ${e.pageX}, y: ${e.pageY}`);
      dispatch(addNewEntityToStage({ positionX: e.pageX, positionY: e.pageY }));
      dispatch(deselectCurrentEntity());
      hideCursor();
    },
    [dispatch]
  );

  React.useEffect(() => {
    selected.id !== null && hideCursor();
    selected.id !== null &&
      sceneRef.addEventListener('click', myListener, {
        capture: false,
        once: true,
        passive: true
      });
  }, [myListener, sceneRef, selected.id]);

  return (
    <Component ref={componentRef}>
      {children}
      <img
        src={png}
        alt=""
        style={{
          height: 50,
          display: selected.id === 1 ? 'block' : 'none',
          position: 'absolute',
          top: mousePositionY,
          left: mousePositionX,
          pointerEvents: 'none',
          zIndex: 1
          // transform: 'translate(-20px, -20px)'
        }}
      />
      {ents.length &&
        ents.map((ent, idx) => {
          return (
            <img
              key={idx}
              src={png}
              alt=""
              style={{
                height: 50,
                display: 'block',
                position: 'absolute',
                top: ent.positionY,
                left: ent.positionX,
                zIndex: 1
              }}
            />
          );
        })}
      {/* <div className="bg" /> */}
      {/* <img
        src={`/assets/preview_9.jpg`}
        alt=""
        style={{ position: 'relative', zIndex: 0, pointerEvents: 'none' }}
      /> */}
    </Component>
  );
};

const Component = styled.div`
  position: fixed;
  overflow: auto;
  height: 100%;
  z-index: 100;
  width: 100%;
  left: 0;
  top: 0;

  .bg {
    pointer-events: none;
  }
`;

Scene.propTypes = {
  children: PropTypes.node
};

export default Scene;
