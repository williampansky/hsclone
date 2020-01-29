export default [
  {
    href: '/',
    name: 'Home',
    protectedRoute: false,
    order: 0
  },
  {
    href: '/about',
    name: 'About',
    protectedRoute: false,
    order: 1
  },
  {
    href: '/news',
    name: 'News',
    protectedRoute: false,
    order: 2
  },
  {
    href: '/store',
    name: 'Store',
    protectedRoute: false,
    order: 3
  },
  {
    href: '/account',
    name: 'Account',
    protectedRoute: true,
    order: 4
  },
  {
    href: '/signup',
    name: 'Sign Up',
    protectedRoute: false,
    order: 4
  },
  {
    href: '/play',
    name: 'Play',
    protectedRoute: false,
    order: 5
  }
];
