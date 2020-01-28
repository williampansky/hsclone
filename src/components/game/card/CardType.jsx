export default function CardType({ type }) {
  return (
    <div>
      {type}
      <style jsx>{`
        div {
          align-items: center;
          background: lightgray;
          border-radius: 1.5px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          bottom: 15px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02),
            0 1px 2px rgba(0, 0, 0, 0.014);
          box-sizing: border-box;
          display: flex;
          flex-flow: column nowrap;
          font-size: 0.715em;
          height: 5%;
          justify-content: center;
          letter-spacing: 0.0875em;
          margin: 0 auto;
          padding: 0.2em 0.15em;
          position: relative;
          text-align: center;
          user-select: none;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
