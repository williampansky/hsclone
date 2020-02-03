import React from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/game.scss';
import { fontSizeBasedOnCharacterLength } from '../../utils/text';
import createMarkup from '../../utils/createMarkup';

export default function CardBack({}) {
  return <div className={[css['card'], css['card-back']].join(' ')} />;
}
