export default ({ children }) => {
  return children ? (
    <ul>
      {children}
      <style jsx>{`
        ul {
          display: flex;
          margin: 0;
          padding: 0;
          list-style: none;
        }
      `}</style>
    </ul>
  ) : null;
};
