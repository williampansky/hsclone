import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card.component';
import debugCards from 'debugData/debugCards.json';

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
          <Card
            key={id}
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

  & > article + article {
    margin-left: 20px;
  }
`;

TheirBoard.propTypes = {
  children: PropTypes.node
};

export default TheirBoard;
