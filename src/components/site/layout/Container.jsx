export default function Container({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          box-sizing: content-box;
          max-width: 1380px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 15px;
          padding-right: 15px;
        }
      `}</style>
    </div>
  );
}
