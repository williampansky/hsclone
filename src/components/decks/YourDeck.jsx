import React from 'react';
import PropTypes from 'prop-types';
import CardBack from 'components/cards/CardBack';
import limitNumberWithinRange from 'lib/utils/range-limit';

export default function YourDeck({ length }) {
  return (
    <div data-file="decks/YourDeck" className={'deck'}>
      {Array.from(Array(limitNumberWithinRange(length, 3, 0))).map(
        (_, index) => {
          return (
            <div key={index} data-index={index} className={'deck__card'}>
              <CardBack />
            </div>
          );
        }
      )}
    </div>
  );
}

YourDeck.propTypes = {
  length: PropTypes.number
};
