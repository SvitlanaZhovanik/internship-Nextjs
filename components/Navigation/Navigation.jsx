import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import classNames from 'classnames';
import { navLinks } from 'data/navLinks';
import { Button } from '..';
import { nav, navList, navLink, active } from './Navigation.module.css';
import { routes } from '@/lib/routes';

export const Navigation = ({ onCloseMenu = null }) => {
  return (
    <nav className={nav}>
      <ul className={navList}>
        {navLinks &&
          navLinks.map(({ title, path }) => (
            <li key={path} className="text-center">
              <Link
                to={path}
                className={classNames(navLink, '')}
                href=""
                activeClass={active}
                smooth={true}
                spy={true}
                onClick={onCloseMenu}
              >
                {title}
              </Link>
            </li>
          ))}
      </ul>

      <Link
        to={routes.DIRECTIONS}
        href=""
        smooth={true}
        spy={true}
        onClick={onCloseMenu}
      >
        <Button
          variant="span"
          appearance="ghost"
          className="relative z-10 mx-auto block w-[236px] md:hidden xl:block"
        >
          Залишити заявку
        </Button>
      </Link>
    </nav>
  );
};

Navigation.propTypes = {
  onCloseMenu: PropTypes.func,
};
