import Image from 'next/image';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import SiteLogo from '../../public/images/logo.svg';

import { menuButton } from './MobileMenu.module.css';
import { Navigation } from '..';
import { useCurrentPage } from 'hooks/useCurrentPage';

export const MobileMenu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isHomePage] = useCurrentPage();

  const toggleMenu = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div className="flex h-full items-center justify-between">
      {isHomePage && (
        <button
          type="button"
          className={classNames(menuButton, 'leading-0')}
          onClick={toggleMenu}
        >
          <Bars3BottomRightIcon />
        </button>
      )}

      <Transition
        show={isNavExpanded}
        as={Fragment}
        className="fixed inset-0 z-50"
        appear={true}
      >
        <Transition.Child
          enter="transition duration-200 ease-out"
          enterFrom="transform scale-50 translate-x-full opacity-0"
          enterTo="transform scale-100 translate-x-0 opacity-100"
          leave="transition duration-200 ease-in-out"
          leaveFrom="transform scale-100 translate-x-full opacity-100"
          leaveTo="transform scale-50 translate-x-0 opacity-0"
          as={Fragment}
        >
          <Dialog
            className="relative"
            open={isNavExpanded}
            onClose={toggleMenu}
          >
            <div className="mob-menu-oval fixed inset-0 z-10 flex items-center justify-center bg-primary py-6 px-10 ">
              <Dialog.Panel className="h-full w-full ">
                <Image
                  objectFit="contain"
                  layout="fill"
                  src="/images/mob-menu/header.svg"
                  className="pointer-events-none absolute z-0 object-contain object-right-top"
                  alt="background"
                />

                <div className="absolute top-[60px] left-0 w-full border-b-2 border-neon"></div>

                <SiteLogo className="w-[104px]" />

                <button
                  onClick={toggleMenu}
                  type="button"
                  className={classNames(
                    menuButton,
                    'absolute top-5 right-5 z-10',
                  )}
                  aria-label="Іконка мобільного меню"
                >
                  <XMarkIcon aria-label="Іконка мобільного меню" />
                </button>

                <Navigation
                  onCloseMenu={toggleMenu}
                  className="z-2 pointer-events-none relative z-10"
                />
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition.Child>
      </Transition>
    </div>
  );
};
