import MyLayout from 'components/MyLayout';

export default function Index() {
  return (
    <MyLayout>
      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 300px auto;
          text-align: center;
        }
        .quote {
          font-family: cursive;
          color: #e243de;
          font-size: 24px;
          padding-bottom: 10px;
        }
        .author {
          font-family: sans-serif;
          color: #559834;
          font-size: 20px;
        }
      `}</style>
    </MyLayout>
  );
}
