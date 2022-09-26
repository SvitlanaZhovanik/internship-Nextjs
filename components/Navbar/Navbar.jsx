import { useCurrentPage } from 'hooks/useCurrentPage';
import { Navigation } from '..';

export const Navbar = () => {
  const [isHomePage] = useCurrentPage();

  return isHomePage ? <Navigation /> : null;
};
