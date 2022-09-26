import PropTypes from 'prop-types';
import { useState } from 'react';
import { Radio } from '..';
import { paragraph } from './RadioGroup.module.css';

const english = [
  'Beginner (А1)',
  'Intermediate (В1)',
  'Advanced (С1)',
  'Elementary (А2)',
  'Upper Intermediate (В2)',
  'Proficiency (С2)',
];

export const RadioGroup = ({ register, errors, className }) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = e => {
    setValue(e.target.value);
    setChecked(true);
  };
  return (
    <div className={className}>
      <p className={paragraph}>Рівень англійської</p>
      <div
        className={`grid gap-y-9 whitespace-nowrap rounded-lg border-2 border-stroke bg-inputColor py-9 px-4  text-white md:grid-cols-2 md:gap-x-[128px] md:px-12 xl:grid-cols-3 xl:gap-y-8 xl:gap-x-[170px] xl:py-[38px] xl:px-[106px] ${
          errors?.language && 'border-red'
        }`}
      >
        {english.map(name => (
          <Radio
            key={name}
            name={name}
            checked={checked}
            value={value}
            handleClick={handleClick}
            register={register}
          />
        ))}
      </div>
      <span className="text-[10px] text-red">
        {errors?.language && errors.language?.message}
      </span>
    </div>
  );
};
RadioGroup.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
};
