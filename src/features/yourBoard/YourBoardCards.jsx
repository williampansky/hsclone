import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { addCardToYourBoard } from 'features/yourBoard/yourBoard.slice';
import {
  playSpellFromYourHand,
  removeCardFromYourHand
} from 'features/yourHand/yourHand.slice';
// import BoardDropArea from 'features/boards/BoardDropArea.component';
import BoardDropArea from 'systems/dropAreas/BoardDropArea';
import SingleDropArea from 'systems/dropAreas/SingleDropArea';
import AdjacentDropArea from 'systems/dropAreas/AdjacentDropArea';
import Card from 'components/Card/Card.component';

const YourBoard = () => {
  const dispatch = useDispatch();
  const { boardHeight, boardWidth } = useSelector(s => s.layout);
  const yourBoard = useSelector(s => s.yourBoard);

  const dropCard = React.useCallback(
    (object, index) => {
      const { type } = object;
      const dispatchObj = {
        item: object,
        i: index
      };

      dispatch(removeCardFromYourHand(object));
      return type === 'SPELL'
        ? dispatch(playSpellFromYourHand(dispatchObj))
        : dispatch(addCardToYourBoard(dispatchObj));
    },
    [dispatch]
  );

  const yourBoardLength = yourBoard && yourBoard.length;

  return (
    <Component
      boardHeight={boardHeight}
      boardWidth={boardWidth}
      data-file="YourBoardCards"
    >
      <BoardDropArea dropSpell={dropCard}>
        {yourBoardLength === 0 ? (
          <SingleDropArea dropItem={dropCard} />
        ) : (
          <AdjacentDropArea dropItem={dropCard} />
        )}

        {yourBoard.map((card, i) => {
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
            <React.Fragment key={`React.Fragment_${i}`}>
              <Card
                key={`card_${id}`}
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

              <AdjacentDropArea
                key={`dropArea_${i}`}
                afterIndex={i}
                dropItem={dropCard}
              />
            </React.Fragment>
          );
        })}
      </BoardDropArea>
    </Component>
  );
};

const Component = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  height: ${p => (p.boardHeight ? `calc(${p.boardHeight}px / 3)` : `0px`)};
  justify-content: center;
  margin: auto;
  position: relative;
  width: ${p => (p.boardWidth ? `calc(${p.boardWidth}px - 20%)` : `0px`)};
`;

export default YourBoard;
