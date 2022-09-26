import React from 'react';
import PropTypes from 'prop-types';

import { Footer, Header } from '..';

export const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-grow pt-[60px] md:pt-[86px]">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
