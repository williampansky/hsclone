import React from 'react';

// import Card from 'components/Card/Card.component';
// import CardDragLayer from 'systems/CardDragLayer';

export default function YourHand() {
  // const yourCards = useSelector(s => s.yourHand);
  const yourCards = [];

  return (
    <div data-file="YourHand">
      {yourCards.map((card, index) => {
        return <div></div>;
      })}

      <style jsx>{`
        div {
          align-items: center;
          background: var(--board-yourHand-background-color);
          box-sizing: border-box;
          display: flex;
          flex-flow: row nowrap;
          height: var(--board-yourHand-height);
          justify-content: center;
          position: relative;
          width: 100vw;
          z-index: var(--board-yourHand-zIndex);

          & > div {
            position: relative;
            top: -20px;
          }

          & > div + div {
            margin-left: calc(calc(var(--card-height) / 1.4) / -3.5);
          }
        }
      `}</style>
    </div>
  );
}
