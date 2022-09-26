import React from 'react';
import { Container, Logo } from '..';

import Linkedin from '../../public/images/Linkedin.svg';

export const Footer = () => {
  return (
    <footer className="bg-black py-8" id="footer">
      <Container>
        <div className="flex items-center justify-between">
          <p className="flex items-center text-base leading-tight text-white sm:text-xl">
            <span className="pr-1">&copy;</span>
            <span className=" font-semibold">{new Date().getFullYear()}</span>
          </p>

          <Logo />

          <a
            href="https://www.linkedin.com/company/82980582"
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="Посилання на Linkedin"
          >
            <Linkedin className="w-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
