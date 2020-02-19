import React from 'react';
import image from 'assets/images/card-back-temp.jpg';

export default function CardBack() {
  return (
    <div
      className={['card', 'card-back'].join(' ')}
      style={{
        backgroundImage: `url(${image})`
      }}
    />
  );
}
