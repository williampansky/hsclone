export default ({ children, side = 'left' }) => {
  switch (side) {
    case 'right':
      return (
        <div>
          {children}
          <style jsx>{`
            div {
              margin-left: auto;
              margin-right: -15px;
              flex-wrap: wrap;
              display: flex;
              align-items: center;
            }
          `}</style>
        </div>
      );

    default:
      return (
        <div>
          {children}
          <style jsx>{`
            div {
              margin-left: -15px;
              margin-right: -15px;
              flex-wrap: wrap;
              display: flex;
              align-items: center;
            }
          `}</style>
        </div>
      );
  }
};
