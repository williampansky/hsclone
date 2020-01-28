import createMarkup from 'utils/createMarkup';

export default function CardText({ text }) {
  return (
    <div>
      <p dangerouslySetInnerHTML={createMarkup(text)} />
      <style jsx>{`
        div {
          align-items: center;
          bottom: 15px;
          display: flex;
          flex-flow: column nowrap;
          font-size: 1em;
          font-weight: normal;
          height: 25%;
          justify-content: center;
          line-height: calc(1.45 / var(--card-height));
          margin: 0;
          padding: 20px;
          position: relative;
          text-align: center;
          user-select: none;

          & > p {
            margin: 0;
            pointer-events: none;
            user-select: none;
          }
        }
      `}</style>
    </div>
  );
}
