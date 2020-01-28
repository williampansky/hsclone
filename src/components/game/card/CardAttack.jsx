export default function CardAttack({ value }) {
  return (
    <div>
      {value}
      <style jsx>{`
        div {
          align-items: center;
          background: #f59b2b;
          border-radius: 50%;
          bottom: -4.165px;
          color: #6f3205;
          display: flex;
          flex-flow: column nowrap;
          font-size: 0.875em;
          font-weight: 600;
          height: calc(var(--card-height) / 10);
          justify-content: center;
          left: -4.165px;
          line-height: 1;
          position: absolute;
          user-select: none;
          width: calc(var(--card-height) / 10);
          z-index: 5;
        }
      `}</style>
    </div>
  );
}
