export default function CardHealth({ value }) {
  return (
    <div>
      {value}
      <style jsx>{`
        div {
          align-items: center;
          background: #840802;
          border-radius: 50%;
          bottom: -4.165px;
          color: #ff9792;
          display: flex;
          flex-flow: column nowrap;
          font-size: 0.875em;
          font-weight: 600;
          height: calc(var(--card-height) / 10);
          justify-content: center;
          line-height: 1;
          position: absolute;
          right: -4.165px;
          user-select: none;
          width: calc(var(--card-height) / 10);
          z-index: 5;
        }
      `}</style>
    </div>
  );
}
