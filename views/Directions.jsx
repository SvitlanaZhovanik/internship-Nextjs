import data from 'data/profession';
import { Heading, Section, Container, Card, Grid } from '../components';
import { routes } from '@/lib/routes';

const Directions = () => {
  return (
    <Section type="secondary" id={routes.DIRECTIONS}>
      <Container>
        <div>
          <Heading
            tag="h2"
            position="center"
            text="Напрями стажування"
            className="mb-[68px]"
          />
        </div>
        <Grid appearance="col-1" tag="ul" className="md:px-[46px] xl:px-0">
          {data.profession &&
            data.profession.map(({ title, text, path, id, active }) => (
              <li key={id}>
                <Card
                  key={id}
                  title={title}
                  text={text}
                  path={path}
                  active={active}
                />
              </li>
            ))}
        </Grid>
      </Container>
    </Section>
  );
};
export default Directions;
