/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  addNewEntityToStage,
  selectEntity
} from 'features/entities/entities.slice';
import { useDispatch, useSelector } from 'react-redux';
const png = require('house01.png');

const TestBox = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const { selected } = useSelector(s => s.entities);

  const handleClick = e => {
    const { target } = e;
    target.blur();
    return dispatch(selectEntity({ id: 1 }));
  };

  return (
    <React.Fragment>
      <div
        ref={ref}
        onClick={e => handleClick(e)}
        role="button"
        style={{
          cursor: 'pointer',
          height: 50,
          width: 40,
          backgroundColor: 'transparent',
          outline: 0
        }}
        tabIndex={0}
      >
        <img
          src={png}
          alt=""
          style={{ height: 50, opacity: selected ? 0.4 : 1 }}
        />
      </div>
    </React.Fragment>
  );
};

TestBox.propTypes = {
  name: PropTypes.string
};

TestBox.defaultProps = {
  name: 'TestBox'
};

export default TestBox;
