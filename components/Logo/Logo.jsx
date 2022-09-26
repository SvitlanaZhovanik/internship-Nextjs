import Link from 'next/link';
import React from 'react';
import SiteLogo from '../../public/images/logo.svg';

export const Logo = () => {
  return (
    <Link href="/">
      <a href="" aria-label="логотип GoWeb">
        <SiteLogo className="w-[104px]" />
      </a>
    </Link>
  );
};

Logo.propTypes = {};
