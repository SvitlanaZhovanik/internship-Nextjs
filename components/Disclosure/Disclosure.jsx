import PropTypes from 'prop-types';
import { Disclosure as MyDisclosure, Transition } from '@headlessui/react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Paragraph } from '..';

export function Disclosure({ title, text = [] }) {
  return (
    <MyDisclosure
      as="div"
      className="z-2 relative mt-11 first-of-type:mt-0 sm:w-[439px] md:w-[698px] xl:w-[924px]"
    >
      {({ open }) => (
        <>
          <MyDisclosure.Button
            className={`flex w-full items-center justify-between border-b pb-[14px] text-start text-white ${
              open ? 'border-transparent pb-0 text-neon' : 'border-titleBorder'
            }`}
          >
            <span className="font-sansSecondary text-[18px] font-semibold leading-faq md:text-[24px]">
              {title}
            </span>
            {open ? (
              <XMarkIcon
                className="h-4 w-4 shrink-0 text-neon md:h-6 md:w-6"
                aria-label="Зачинити випадаючий елемент"
              />
            ) : (
              <PlusIcon
                className="h-4 w-4 shrink-0 md:h-6 md:w-6 "
                aria-label="Відчинити випадаючий елемент"
              />
            )}
          </MyDisclosure.Button>
          <Transition
            enter="transition duration-300 ease-in"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <MyDisclosure.Panel
              className={`border-b py-5 font-exo text-sm leading-tight text-white md:text-[20px] ${
                open ? 'border-neon' : 'border-transparent'
              }`}
            >
              {text.map(item => (
                <Paragraph
                  size="xlFAQ"
                  key={item}
                  className="mb-2 last-of-type:mb-0"
                >
                  {item}
                </Paragraph>
              ))}
            </MyDisclosure.Panel>
          </Transition>
        </>
      )}
    </MyDisclosure>
  );
}

Disclosure.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};
