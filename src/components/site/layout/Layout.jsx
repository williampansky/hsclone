import Header from 'components/site/layout/Header';

export default function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
