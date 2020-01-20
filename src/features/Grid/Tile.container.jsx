/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector } from 'react-redux';
import React from 'react';
import useDimensions from 'react-use-dimensions';

/**
 * @see https://codesandbox.io/s/k5w9qm4j23 fork
 */
const Tile = ({ player, onClick }) => {
  const [ref, { x, y }] = useDimensions({ liveMeasure: false });

  const testClick = (event, posX, posY) => {
    event.preventDefault();
    console.log(`x: ${posX}, y: ${posY}`);
  };

  return (
    <div
      ref={ref}
      // onClick={event => {
      //   testClick(event, x, y);
      // }}
      onClick={onClick}
      className="tile"
      role="button"
    >
      {/* {player && (
        <img
          src="assets/house01.png"
          style={{
            transform: 'translate(0, -15%)',
            position: 'relative',
            zIndex: 1,
            height: 50
          }}
        />
      )} */}
    </div>
  );
};

export default Tile;
