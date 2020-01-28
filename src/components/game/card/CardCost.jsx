export default function CardCost({ cost }) {
  return (
    <div>
      {cost}
      <style jsx>{`
        div {
          align-items: center;
          background-image: radial-gradient(
            circle,
            hsla(197, 100%, 80%, 1),
            hsla(197, 90%, 65%, 1)
          );
          border-bottom: 1px solid rgba(0, 0, 0, 0.25);
          border-left: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          border-right: 1px solid rgba(0, 0, 0, 0.15);
          border-top: 1px solid rgba(255, 255, 255, 0.25);
          color: #042c3c;
          display: flex;
          flex-flow: column nowrap;
          font-size: 0.875em;
          font-weight: 600;
          height: calc(var(--card-height) / 10);
          justify-content: center;
          left: -8.675px;
          line-height: 1;
          position: absolute;
          top: -8.675px;
          user-select: none;
          width: calc(var(--card-height) / 10);
          z-index: 5;
        }
      `}</style>
    </div>
  );
}
