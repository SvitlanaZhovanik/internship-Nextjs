import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StopIcon } from '@heroicons/react/24/outline';
import useFormPersist from 'react-hook-form-persist';
import { postMail, sendGoogleTable } from '@/lib/api';
import { schema } from '@/lib/schema';
import mail from 'data/mailText';
import {
  Button,
  FormTextArea,
  Input,
  Paragraph,
  RadioGroup,
  FullScreenLoader,
} from '../components';
import Check from '../public/images/check.svg';

export const Form = ({ type, openModal }) => {
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const isBrowser = typeof window !== 'undefined';
  const SESSION_KEY = 'form';

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema(type === 'fullstack')) });

  useEffect(() => {
    isLoading
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isLoading]);

  useFormPersist(SESSION_KEY, {
    watch,
    setValue,
    storage: isBrowser ? sessionStorage : null,
    exclude: ['language', 'consent'],
  });

  const handleChange = () => {
    setChecked(!checked);
  };

  const onSubmit = async data => {
    setIsLoading(true);

    try {
      const user = {
        ...data,
        type,
        createdAt: new Date().toLocaleString(),
      };

      // eslint-disable-next-line no-undef
      await Promise.all([
        postMail(data.name, data.email, mail[type]),
        sendGoogleTable(user),
      ]);

      openModal();
      reset();
      setChecked(false);
      sessionStorage.removeItem(SESSION_KEY);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);

      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  };

  return (
    <>
      {error && (
        <FullScreenLoader error={error}>
          <Paragraph>Упс... Щось пішло не так.</Paragraph>
          <Paragraph>Спробуйте ще раз</Paragraph>
        </FullScreenLoader>
      )}
      {isLoading && (
        <FullScreenLoader>
          <Paragraph>Зачекайте, ваш запит обробляється</Paragraph>
        </FullScreenLoader>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="overflow-hidden">
        <div className="mb-10 grid gap-x-6 gap-y-3 md:mb-[84px] xl:grid-cols-2">
          <Input
            label="Прізвище та ім'я"
            name="name"
            type="text"
            register={register}
            placeholder=""
            errors={errors}
          />

          <Input
            label="Telegram у форматі https://t.me/name"
            name="telegram"
            register={register}
            type="text"
            placeholder="https://t.me/"
            errors={errors}
            defaultValue="https://t.me/"
          />

          <Input
            label="Email"
            name="email"
            type="text"
            register={register}
            placeholder="test@Ukraine"
            errors={errors}
          />

          <Input
            label="Група, яку ви закінчили в GoIT"
            name="group"
            type="text"
            register={register}
            placeholder=""
            errors={errors}
          />

          <Input
            label="Контактний телефон"
            name="phone"
            type="tel"
            register={register}
            placeholder="+380"
            defaultValue="+380"
            errors={errors}
          />

          <Input
            label="Вкажіть, будь ласка, місто, де ви знаходитесь у поточний момент"
            name="city"
            type="text"
            register={register}
            placeholder=""
            errors={errors}
          />
        </div>

        <RadioGroup
          register={register}
          errors={errors}
          className="mb-10 md:mb-[84px]"
        />

        <div className="mb-[50px] grid gap-x-6 gap-y-10 md:gap-y-[86px] xl:grid-cols-2">
          <FormTextArea
            errors={errors}
            name="motive"
            label="Що мотивує взяти участь у стажуванні"
            register={register}
            className={` ${type === 'fullstack' && 'h-[296px]'}`}
          />

          <div className="flex flex-col gap-y-3 self-end">
            <Input
              label="Посилання на резюме (Google Drive, Dropbox)"
              name="resume"
              type="text"
              register={register}
              placeholder=""
              errors={errors}
            />

            <Input
              label="Посилання на linkedin"
              name="linkedin"
              type="text"
              register={register}
              placeholder=""
              errors={errors}
            />

            {type === 'fullstack' && (
              <Input
                label="Посилання на github"
                name="github"
                type="text"
                register={register}
                errors={errors}
              />
            )}
          </div>
          <FormTextArea
            errors={errors}
            name="tellMe"
            label="Розкажіть, чому ми маємо взяти саме Вас"
            register={register}
            className={`${type === 'fullstack' && 'h-[296px]'}`}
          />
          <FormTextArea
            errors={errors}
            name="ideas"
            label="Виникли ідеї або пропозиції?"
            register={register}
            className={`${type === 'fullstack' && 'h-[296px]'}`}
            placeholder="Залиште свій коментар :)"
          />
        </div>

        <div className="mx-auto mb-10 flex items-center justify-center sm:gap-8 sm:text-start md:mb-[60px] md:max-w-[608px] xl:mx-0 xl:mb-[77px] xl:max-w-full xl:gap-[38px]">
          <label
            className=" mr-5 flex shrink-0 cursor-pointer flex-col sm:mr-0 sm:mb-0 "
            onChange={handleChange}
          >
            <input
              type="checkbox"
              className="visually-hidden custom-checkbox"
              {...register('consent')}
            />
            {checked ? (
              <Check className=" mx-auto mb-1 h-6 w-6 px-1 py-[2px] " />
            ) : (
              <StopIcon
                className={`${
                  errors.consent && 'text-red'
                }  mx-auto mb-1 h-6 w-6 text-white`}
              />
            )}
            <span
              className={`text-sm text-white ${errors.consent && 'text-red'}`}
            >
              Даю згоду
            </span>
          </label>

          <Paragraph
            size="smForm"
            className="max-w-[331px] md:max-w-[474px] xl:max-w-[737px] "
          >
            Надсиланням даних за цією заявкою Ви надаєте свою згоду GoWeb
            Internship на збір та обробку наданих Вами персональних даних для
            використання GoWeb Internship для письмового чи усного спілкування з
            Вами.
          </Paragraph>
        </div>

        <div className="mx-auto w-[240px]">
          <Button variant="button" appearance="primary">
            Залишити заявку
          </Button>
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  type: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
