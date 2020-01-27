import PropTypes from 'prop-types';

export default function TheirBoard({ children }) {
  return (
    <div data-file="TheirBoard">
      {children}
      <style jsx>{`
        div {
          align-items: center;
          background: #333;
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

        div > div + div {
          margin-left: 20px;
        }
      `}</style>
    </div>
  );
}

TheirBoard.propTypes = {
  children: PropTypes.node
};
