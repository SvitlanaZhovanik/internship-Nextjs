import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { routes } from '@/lib/routes';
import { useRouter, withRouter } from 'next/router';
import { Container, Heading, Popup, Section } from '../components';
import { Form } from 'views';

export const getServerSideProps = context => {
  const { profession } = context.params;
  return { props: { profession } };
};

function Profession({ profession, router }) {
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useRouter();
  let type = null;

  function closeModal() {
    setIsOpen(false);
    navigate.push(routes.HOME);
  }

  function openModal() {
    setIsOpen(true);
  }

  switch (profession) {
    case 'fullstack':
      type = 'FullStack';
      break;
    case 'pm':
      type = 'PM';
      break;
    case 'design':
      type = 'UI/UX Design';
      break;
    case 'qa':
      type = 'QA';
      break;
    default:
      type = 'other';
      break;
  }

  useEffect(() => {
    type === 'other' && router.push(routes.HOME);
  }, [router, type]);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>GoWeb Internship {type}</title>
      </Head>

      <Section>
        {type === 'other' && (
          <Container>
            <Heading tag="h2" position="center" text={`Не знайдено!`} />
          </Container>
        )}

        {type !== 'other' && (
          <Container>
            <Heading
              tag="h2"
              position="center"
              text={`Почни свою кар'єру ${type} зараз`}
              className="mb-[28px] md:mb-[68px]"
            />
            <Form type={profession} openModal={openModal} onSubmit />
            <Popup isOpen={isOpen} closeModal={closeModal} />
          </Container>
        )}
      </Section>
    </>
  );
}

export default withRouter(Profession);
