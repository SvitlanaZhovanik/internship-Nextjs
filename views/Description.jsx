import data from 'data/description';
import { Heading, Section, Container, Grid, Paragraph } from '../components';
import { routes } from '@/lib/routes';

const Description = () => {
  return (
    <Section
      type="secondary"
      id={routes.DESCRIPTION}
      className="bg-description"
    >
      <Container>
        <div>
          <Heading
            tag="h2"
            text="Як проходить стажування"
            className="mb-[68px]"
          />
        </div>
        <Grid appearance="col-3" tag="ul" className="text-center sm:text-start">
          {data.description.map(({ title, text }) => (
            <li key={title.toLowerCase()}>
              <Heading text={title} tag="h3" className="mb-3 xl:mb-9" />
              <Paragraph size="xl">{text}</Paragraph>
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Description;
