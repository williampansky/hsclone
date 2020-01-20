import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { addCardToYourBoard } from 'features/match/match.slice';
import YourBoardCards from 'features/boards/YourBoardCards.container';

const YourBoard = () => {
  const dispatch = useDispatch();
  const { boardHeight, boardWidth } = useSelector(s => s.layout);
  // const [{ canDrop, didDrop, getItem, isOver }, drop] = useDrop({
  //   /**
  //    * Required. A string, an ES6 symbol, an array of either, or a function
  //    * that returns either of those, given component's props.
  //    * @name accept
  //    * @required
  //    */
  //   accept: ['CARD', 'SPELL'],

  //   /**
  //    * Optional. A plain object.
  //    * @name options
  //    */
  //   options: {},

  //   /**
  //    * Optional. Called when a compatible item is dropped on the target.
  //    * @name drop(item,monitor)
  //    */
  //   drop: (item, monitor) => ({ name: 'YourBoard' }),
  //   collect: monitor => ({
  //     canDrop: monitor.canDrop(),
  //     didDrop: monitor.didDrop(),
  //     getItem: monitor.getItem(),
  //     isOver: monitor.isOver()
  //   })
  // });

  // const dropCard = React.useCallback(
  //   (object, index) => {
  //     const dispatchObj = {
  //       item: object,
  //       i: index
  //     };

  //     dispatch(addCardToYourBoard(dispatchObj));
  //   },
  //   [dispatch]
  // );

  // React.useEffect(() => {
  //   // didDrop && console.log(getItem);
  //   didDrop && dropCard(getItem);
  // }, [didDrop, dropCard, getItem]);

  return boardHeight && boardWidth ? (
    <Component
      // isOver={canDrop && isOver}
      // ref={drop}
      boardHeight={boardHeight}
      boardWidth={boardWidth}
      data-file="YourBoard"
    >
      <YourBoardCards />
    </Component>
  ) : null;
};

const Component = styled.div`
  align-items: center;
  background: #111;
  box-shadow: inset 0 0 10px ${p => (p.isOver ? 'yellow' : 'transparent')};
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: ${p => (p.boardHeight ? `calc(${p.boardHeight}px / 2)` : `0px`)};
  justify-content: center;
  margin: auto auto 0;
  overflow: hidden;
  width: ${p => (p.boardWidth ? `${p.boardWidth}px` : `0px`)};
`;

YourBoard.propTypes = {
  children: PropTypes.node
};

export default YourBoard;
