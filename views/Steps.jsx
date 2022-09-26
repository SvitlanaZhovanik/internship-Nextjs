import data from 'data/steps';
import { Heading, Section, Container, Grid, Paragraph } from '../components';
import Image from 'next/image';
import { routes } from '@/lib/routes';

const Steps = () => {
  return (
    <Section type="secondary" id={routes.STEPS} className="desc-steps">
      <Container>
        <Heading
          tag="h2"
          position="right"
          text="Для проходження стажування"
          className="mb-[68px] xl:!mr-[0px]"
        />

        <Grid appearance="col-2" tag="ul">
          {data.steps.map(({ title, text }) => (
            <li key={title.toLowerCase()}>
              <div className="flex items-center ">
                <div className="absolute -ml-[12px] h-[120px] w-[100px] object-cover">
                  <Image
                    objectFit="cover"
                    layout="fill"
                    src="/numberTin.svg"
                    className="absolute z-10 object-cover"
                    alt="shadow"
                  />
                </div>

                <span className="relative ml-[12px] mr-[42px] h-[60px] font-exo text-6xl font-normal text-white md:font-semibold">
                  {title}
                </span>

                <Paragraph size="xl">{text}</Paragraph>
              </div>
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
export default Steps;
