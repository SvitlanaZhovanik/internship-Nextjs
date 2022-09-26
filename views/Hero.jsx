import { Button, Container, Heading, Paragraph, Section } from '../components';
import { Link } from 'react-scroll';
import { routes } from '@/lib/routes';

export const Hero = () => {
  return (
    <Section type="hero" className="desc-hero">
      <Container>
        <div className=" flex flex-col items-center gap-5 md:items-start">
          <div className="mb-5 flex w-[270px] flex-col sm:first-letter:w-[410px] md:mb-[60px] md:w-[635px] xl:w-[700px]">
            <div>
              <Heading
                tag="h1"
                text={'GoWeb Internship'}
                className="mb-8 text-center  md:mb-14 md:text-left"
              />
            </div>

            <div>
              <Paragraph
                size="xxxl"
                className="mb-3 text-center md:mb-2 md:text-left "
              >
                Оплачуване стажування на реальних проектах з можливістю
                подальшого працевлаштування.
              </Paragraph>

              <Paragraph size="xxxl" className="text-center md:text-left">
                Здобудь свій перший комерційний досвід.
              </Paragraph>
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row md:items-center md:gap-32 xl:gap-20">
            <div className="mb-12 flex flex-col gap-1 md:order-last md:mb-0">
              <Paragraph size="xxl" className="text-center">
                Тривалість: 2 міс
              </Paragraph>
              <Paragraph size="xxl" className=" text-center">
                Старт: 10 жовтня
              </Paragraph>
            </div>
            <Link to={routes.DIRECTIONS} href="" smooth={true} spy={true}>
              <Button
                variant="span"
                appearance="primary"
                className="flex-grow-1 flex-shrink-0"
              >
                Залишити заявку
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};
