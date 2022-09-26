import React from 'react';
import PropTypes from 'prop-types';

export const FormTextArea = ({
  label,
  register,
  name,
  errors,
  className = '',
  ...props
}) => {
  return (
    <label
      className={`mx-auto grid w-full max-w-[608px] font-exo text-xl font-semibold sm:w-[443px] md:w-full md:text-[28px] xl:mx-0`}
    >
      <span
        className={`mb-8 text-center leading-tight text-neon sm:text-start`}
      >
        {label}
      </span>
      <textarea
        className={`mb-1 resize-none rounded-lg border-2 border-stroke bg-inputColor p-6 font-exo text-xl font-normal leading-tight text-white caret-neon placeholder:text-sm placeholder:text-neon focus:border-neon ${
          errors[name] && 'border-red text-red'
        } ${className}`}
        {...props}
        autoComplete="off"
        {...register(name)}
        rows="6"
        cols="30"
      />
      <span className="text-[10px] leading-tight text-red">
        {errors[name] && errors[name]?.message}
      </span>
    </label>
  );
};

FormTextArea.propTypes = {
  label: PropTypes.string,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
};
