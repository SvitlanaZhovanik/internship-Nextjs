import { routes } from '@/lib/routes';
import data from 'data/faq';
import { Heading, Section, Container, Disclosure } from '../components';

const Faq = () => {
  return (
    <Section id={routes.FAQ} className="bg-faq">
      <Container>
        <Heading tag="h2" text="FAQ" className="mb-7 md:mb-[68px]" />
        {data.faq.map(({ id, title, text }) => (
          <Disclosure title={title} text={text} key={id} />
        ))}
      </Container>
    </Section>
  );
};

export default Faq;
