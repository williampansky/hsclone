import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card.component';
import debugCards from 'debugData/debugCards.json';
import useDimensions from 'react-use-dimensions';
import {
  targetHovered,
  resetHoveredTarget
} from 'features/targeting/targeting.slice';

const Test = ({ children }) => {
  const dispatch = useDispatch();
  const [cardRef, redRefProps] = useDimensions({
    liveMeasure: true
  });

  const handleMouseEnter = React.useCallback(
    redRefProps => {
      return dispatch(targetHovered(redRefProps));
    },
    [dispatch]
  );

  const handleMouseLeave = React.useCallback(() => {
    return dispatch(resetHoveredTarget());
  }, [dispatch]);

  return (
    <div
      ref={cardRef}
      className="mechanics--can_target"
      onMouseEnter={() => handleMouseEnter(redRefProps)}
      onMouseLeave={() => handleMouseLeave()}
    >
      {children}
    </div>
  );
};

const TheirBoard = ({ children }) => {
  const { boardHeight, boardWidth } = useSelector(s => s.layout);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'SPELL',
    drop: () => ({ name: 'TheirBoard' }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return boardHeight && boardWidth ? (
    <Component
      boardHeight={boardHeight}
      boardWidth={boardWidth}
      data-file="TheirBoard"
      ref={drop}
    >
      {children}

      {debugCards.slice(0, 2).map(card => {
        const {
          artist,
          attack,
          cardClass,
          collectible,
          cost,
          elite,
          entourage,
          flavor,
          health,
          hideStats,
          howToEarn,
          howToEarnGolden,
          id,
          images,
          mechanics,
          name,
          playRequirements,
          race,
          rarity,
          set,
          sounds,
          spellDamage,
          targetingArrowText,
          text,
          type
        } = card;

        return (
          <Test key={id}>
            <Card
              artist={artist}
              attack={attack}
              cardClass={cardClass}
              collectible={collectible}
              cost={cost}
              elite={elite}
              entourage={entourage}
              flavor={flavor}
              health={health}
              hideStats={hideStats}
              howToEarn={howToEarn}
              howToEarnGolden={howToEarnGolden}
              id={id}
              images={images}
              mechanics={mechanics}
              name={name}
              playRequirements={playRequirements}
              race={race}
              rarity={rarity}
              set={set}
              sounds={sounds}
              spellDamage={spellDamage}
              targetingArrowText={targetingArrowText}
              text={text}
              type={type}
            />
          </Test>
        );
      })}
    </Component>
  ) : null;
};

const Component = styled.div`
  align-items: center;
  background: #333;
  box-shadow: inset 0 0 10px transparent;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: ${p => (p.boardHeight ? `calc(${p.boardHeight}px / 2)` : `0px`)};
  justify-content: center;
  margin: auto auto 0;
  overflow: hidden;
  width: ${p => (p.boardWidth ? `${p.boardWidth}px` : `0px`)};

  & > div + div {
    margin-left: 20px;
  }
`;

TheirBoard.propTypes = {
  children: PropTypes.node
};

export default TheirBoard;
