export default function CardImage({ name, src }) {
  return (
    <div>
      <img alt={name} role="presentation" src={src} />
      <style jsx>{`
        div {
          align-items: center;
          border-top-left-radius: 1.5px;
          border-top-right-radius: 1.5px;
          box-sizing: border-box;
          display: flex;
          flex-flow: column nowrap;
          height: 50%;
          justify-content: flex-start;
          object-fit: cover;
          overflow: hidden;
          position: relative;
          user-select: none;

          & > img {
            height: auto;
            pointer-events: none;
            user-select: none;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
