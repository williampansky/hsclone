import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TestCard from 'TestCard';

const YourHand = () => {
  const yourCards = useSelector(s => s.yourHand);
  const { length } = yourCards;

  const constructIdString = (cardName, cardType, idx) => {
    return `${cardType}_${cardName}_${idx}`;
  };

  return (
    <Component
      data-layout="YourHand"
      data-length={length}
      numberOfCardsInHand={length}
    >
      {yourCards.map((card, index) => {
        const { background, id, name, type } = card;
        return (
          <TestCard
            background={background ? background : 'white'}
            id={id}
            key={index}
            name={name}
            type={type}
          />
        );
      })}
    </Component>
  );
};

const Component = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  & > div {
    position: relative;
    top: -20px;
  }

  & > div + div {
    margin-left: 10px;
  }
`;

export default YourHand;
