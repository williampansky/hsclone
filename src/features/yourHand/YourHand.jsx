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
    <Component data-layout="YourHand" numberOfCardsInHand={length}>
      {yourCards.map((card, index) => {
        const { background, name, type } = card;
        return (
          <TestCard
            background={background ? background : 'white'}
            id={constructIdString(name, type, index)}
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

  & > div + div {
    margin-left: 10px;
  }
`;

export default YourHand;
