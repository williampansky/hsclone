import PropTypes from 'prop-types';
import React from 'react';

const Row = ({ children }) => {
  return <div className="row">{children}</div>;
};

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
