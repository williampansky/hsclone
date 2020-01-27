import React from 'react';
// import YourBoardCards from 'features/yourBoard/YourBoardCards';

export default function YourBoard() {
  return (
    <div data-file="YourBoard">
      {/* <YourBoardCards /> */}

      <style jsx>{`
        div {
          align-items: center;
          background: #111;
          box-shadow: inset 0 0 10px transparent;
          box-sizing: border-box;
          display: flex;
          flex-flow: row nowrap;
          height: calc(100% / 2);
          justify-content: center;
          margin: auto auto 0;
          overflow: hidden;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
