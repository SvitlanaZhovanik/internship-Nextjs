import PropTypes from 'prop-types';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

export const Popup = ({ isOpen, closeModal }) => {
  const isMob = useMediaQuery({ query: '(max-width: 479px)' });

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-xl" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-[984px] transform overflow-hidden rounded-lg bg-blackBlue py-[52px] text-center align-middle shadow-accent transition-all md:pt-[70px] md:pb-[109px]">
                {isMob ? (
                  <Image
                    objectFit="cover"
                    layout="fill"
                    src="/images/popupmob.svg"
                    className="pointer-events-none absolute top-0 right-0 z-0 object-cover object-center"
                    alt="background"
                  />
                ) : (
                  <Image
                    objectFit="cover"
                    layout="fill"
                    src="/images/popup.svg"
                    className="pointer-events-none absolute top-0 right-0 z-0 object-cover object-center"
                    alt="background"
                  />
                )}
                <Dialog.Title
                  as="h2"
                  className="text-exo mx-auto mb-8 max-w-[221px] text-xl font-medium leading-tight text-white md:mb-12 md:max-w-[530px] md:text-[28px]"
                >
                  Дякуємо за реєстрацію на стажування у GoWeb Internship
                </Dialog.Title>

                <p className="relative mx-auto mb-7 max-w-[227px] font-exo text-sm font-light leading-tight text-white sm:max-w-[402px] md:mb-[64px] md:max-w-[670px] md:text-lg ">
                  Вам на пошту надіслано тестове завдання.
                  <br /> Будь-ласка, якщо ви не отримали відповідь протягом дня,
                  <a
                    className="mt-3 block font-semibold text-neon xl:ml-2"
                    href="https://t.me/Maximusvin"
                    rel="noreferrer noopener nofollow"
                    target="_blank"
                  >
                    звʼяжіться з нами
                  </a>
                </p>
                <p className="font-exo text-xl font-medium leading-tight text-white md:text-[28px]">
                  Гарного дня!
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-6 right-6 lg:top-11 lg:right-11"
                  aria-label="Зачинити модальне вікно"
                  aria-controls="close PopUp"
                >
                  <XMarkIcon className=" h-6 w-6 text-white" />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
