import classNames from 'classnames';
import { useCurrentPage } from 'hooks/useCurrentPage';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Logo, MobileMenu, Navbar } from '..';

export const Header = () => {
  const [menu, setMenu] = useState();
  const [isHomePage] = useCurrentPage();

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  useEffect(() => {
    const result = isTablet ? <Navbar /> : <MobileMenu />;

    setMenu(result);
  }, [isTablet]);

  return (
    <header className="fixed z-20 flex h-[60px] w-full items-center border-b-2 border-neon bg-primary py-4 md:h-[86px]">
      <Container className="h-full">
        <div
          className={classNames(
            'flex items-center',
            isHomePage ? 'justify-between' : 'justify-center',
          )}
        >
          <Logo />
          {menu}
        </div>
      </Container>
    </header>
  );
};
