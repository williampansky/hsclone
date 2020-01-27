import Link from 'next/link';
import NavSide from 'components/site/layout/NavSide';
import NavList from 'components/site/layout/NavList';
import NavListItem from 'components/site/layout/NavListItem';

export default function Nav({ routes = [] }) {
  return routes && routes.length !== 0 ? (
    <nav>
      <NavSide side="left">
        <NavList>
          {routes
            .filter(({ order }) => order === 0)
            .map((route, index) => {
              return <NavListItem data={route} key={index} />;
            })}
        </NavList>
      </NavSide>
      <NavSide side="right">
        <NavList>
          {routes
            .filter(({ order }) => order !== 0)
            .sort((a, b) => a.order - b.order)
            .map((route, index) => {
              const { protectedRoute } = route;
              if (protectedRoute) return;
              return <NavListItem data={route} key={index} />;
            })}
        </NavList>
      </NavSide>

      <style jsx>{`
        nav {
          display: flex;
          position: relative;
        }
      `}</style>
    </nav>
  ) : null;
}
