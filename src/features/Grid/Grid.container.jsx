import { setTileSize } from 'features/Grid/grid.slice';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Row from 'features/Grid/Row.component';
import Tile from 'features/Grid/Tile.container';
import useDimensions from 'react-use-dimensions';

const Grid = ({ onTileClick }) => {
  const dispatch = useDispatch();
  // const [tileRef, { x, y }] = useDimensions({ liveMeasure: false });
  const { maxColumns, maxRows, tileSize } = useSelector(s => s.grid);

  useEffect(() => {
    console.log('set --grid-tileSize');
    document.documentElement.style.setProperty(
      '--grid-tileSize',
      `${tileSize}px`
    );
  }, [tileSize]);

  // const [row, setRow] = React.useState();
  // const [col, setCol] = React.useState();

  // const handleTileClick = (row, tile) => () => {
  //   setRow(row);
  //   setCol(tile);
  // };

  return (
    <Component>
      {Array(maxRows)
        .fill('row')
        .map((_, rowIndex) => (
          <Row key={rowIndex}>
            {Array(maxColumns)
              .fill('tile')
              .map((_, tileIndex) => (
                <Tile
                  // forwardRef={tileRef}
                  // onClick={handleTileClick(rowIndex, tileIndex)}
                  onClick={e => console.log(e)}
                  key={tileIndex}
                  // player={rowIndex === row && tileIndex === col}
                />
              ))}
          </Row>
        ))}
    </Component>
  );
};

const Component = styled.div`
  border: solid 1px rgba(255, 255, 255, 0.265);
  box-shadow: -3px 3px 12px rgba(0, 0, 0, 0.00675);
  transform-style: preserve-3d;
  /* transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg); */
`;

export default Grid;
