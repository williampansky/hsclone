import Nav from 'components/site/layout/Nav';
import Container from 'components/site/layout/Container';
import ROUTES from '~/routes';

export default function Header() {
  return (
    <Container>
      <Nav routes={ROUTES} />
    </Container>
  );
}
