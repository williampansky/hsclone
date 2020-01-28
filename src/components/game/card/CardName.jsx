import { fontSizeBasedOnCharacterLength } from 'utils/text';

export default function CardName({ name }) {
  const fontSize = fontSizeBasedOnCharacterLength(name);
  return (
    <div>
      <span>{name}</span>
      <style jsx>{`
        div {
          border-radius: 1.5px;
          align-items: center;
          background: #d0deb3;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          bottom: 15px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          box-sizing: border-box;
          display: flex;
          flex-flow: column nowrap;
          font-size: ${fontSize}em;
          font-weight: normal;
          height: 10%;
          justify-content: center;
          line-height: 1;
          margin: 0 auto;
          padding: 0;
          position: relative;
          text-align: center;
          user-select: none;
          width: 90%;
          z-index: 2;

          span {
            display: inline-block;
            pointer-events: none;
            user-select: none;
          }
        }
      `}</style>
    </div>
  );
}
