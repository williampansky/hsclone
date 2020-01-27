import React from 'react';

// import Card from 'components/Card/Card.component';
// import CardDragLayer from 'systems/CardDragLayer';

export default function TheirHand() {
  // const yourCards = useSelector(s => s.yourHand);
  const theirCards = [];

  return (
    <div data-file="TheirHand">
      {theirCards.map((card, index) => {
        return <div></div>;
      })}

      <style jsx>{`
        div {
          align-items: center;
          background: var(--board-theirHand-background-color);
          box-sizing: border-box;
          display: flex;
          flex-flow: row nowrap;
          height: var(--board-theirHand-height);
          justify-content: center;
          position: relative;
          width: 100vw;
          z-index: var(--board-theirHand-zIndex);

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
