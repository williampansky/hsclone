import React from 'react';
import PropTypes from 'prop-types';

export default function CardIsSelected({ onClick }) {
  return (
    <div
      className={'card--is_selected'}
      data-is-selected={true}
      onClick={onClick}
    >
      <div className={'deselect-label'}>Deselect Card</div>
    </div>
  );
}

CardIsSelected.propTypes = {
  onClick: PropTypes.func
};
