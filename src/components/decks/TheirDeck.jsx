import React from 'react';
import PropTypes from 'prop-types';
import CardBack from 'components/cards/CardBack';
import limitNumberWithinRange from 'lib/utils/range-limit';

export default function TheirDeck({ length }) {
  switch (length) {
    case length <= 1:
      return (
        <div data-file="decks/TheirDeck" className={'deck'}>
          {Array.from(Array(limitNumberWithinRange(length, 1, 0))).map(
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

    case length <= 2:
      return (
        <div data-file="decks/TheirDeck" className={'deck'}>
          {Array.from(Array(limitNumberWithinRange(length, 2, 0))).map(
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

    default:
      return (
        <div data-file="decks/TheirDeck" className={'deck'}>
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
}

TheirDeck.propTypes = {
  length: PropTypes.number
};
