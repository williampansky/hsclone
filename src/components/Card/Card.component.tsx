import React from 'react';
import { Card as CardInterface } from 'interfaces/Card';
import { Component } from 'components/Card/CardComponentStyles';

const Card: React.FC<CardInterface> = ({
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
}) => {
  return <Component>{name}</Component>;
};

export default Card;
