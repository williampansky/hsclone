import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardBack from 'components/cards/CardBack';
import DeckItem from 'components/decks/DeckItem';
import PLAYER_BOARDS from 'enums/playerBoards.enums';
import styled from 'styled-components';
import placeholdersArray from 'placeholders-array';

export default function Deck({
  board,
  cardBackSrc,
  data,
  length,
  playedCards
}) {
  function cardImage(id, set) {
    if (placeholdersArray.includes(id))
      return `url(assets/images/sets/PLACEHOLDER.jpg)`;

    return `url(assets/images/sets/${set}/${id}-DECK.jpg)`;
  }

  return (
    <Component data-file="decks/Deck">
      {data.map((item, index) => {
        const { _amount, cost, elite, id, name, rarity, set } = item;

        return (
          <div key={index}>
            <DeckItem
              amount={_amount}
              backgroundImage={cardImage(id, set)}
              cardId={id}
              cost={cost}
              elite={elite}
              name={name}
              rarity={rarity}
            />
          </div>
        );
      })}
    </Component>
  );
}

Deck.propTypes = {
  board: PropTypes.string,
  cardBackSrc: PropTypes.string,
  data: PropTypes.array,
  length: PropTypes.number,
  playedCards: PropTypes.array
};

const Item = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  height: 35px;
  position: relative;
  user-select: none;
  font-family: 'Carter One', sans-serif;
  width: 100%;
  font-size: 14px;
  opacity: ${p => (p.hasBeenPlayed ? '0.65' : 1)};

  .item__cost {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    margin: 0 10px 0;
    z-index: 1;
  }

  .item__cost .text__value {
    font-size: 0.875em;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .item__cost img {
    height: 30px;
  }

  .item__info {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px 0;
    width: 100%;
  }

  .item__name {
    font-size: 1em;
    position: relative;
    z-index: 1;
  }

  .item__amount {
    font-size: 1em;
    position: relative;
    z-index: 1;
  }

  .item__image {
    background-image: ${p => `${p.backgroundImage}`};
    background-position: top right;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 0;
  }
`;

const Component = styled.div`
  padding: 10px 10px 0 10px;
  height: 100%;
  overflow-y: auto;

  & > div + div {
    margin-top: 2px;
  }
`;
