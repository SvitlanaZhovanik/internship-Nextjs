import { Container, Grid, Heading, Section, FutureCard } from '../components';
import { future } from '../data/future';

export const Future = () => {
  return (
    <Section>
      <Container>
        <Heading
          tag="h2"
          text="Як потрапити на стажування"
          className="mb-[28px] md:mb-[68px]"
        />

        <Grid tag="ul" appearance="col-4">
          {future &&
            future.map(({ title, subTitle, description, icon }, index) => (
              <FutureCard
                key={title.toLowerCase()}
                counter={index + 1}
                icon={icon}
                title={title}
                subTitle={subTitle}
                description={description}
              />
            ))}
        </Grid>
      </Container>
    </Section>
  );
};
