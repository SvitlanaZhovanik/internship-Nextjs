import Head from 'next/head';
import dynamic from 'next/dynamic';

import { Future, Hero } from 'views';

const Steps = dynamic(() => import('views/Steps.jsx'), {
  ssr: false,
});
const Description = dynamic(() => import('views/Description.jsx'), {
  ssr: false,
});
const Directions = dynamic(() => import('views/Directions.jsx'), {
  ssr: false,
});
const Faq = dynamic(() => import('views/Faq.jsx'), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>GoWeb Internship</title>
      </Head>
      <Hero />
      <Future />
      <Steps />
      <Description />
      <Directions />
      {/* <Feedback/> */}
      <Faq />
    </>
  );
}
