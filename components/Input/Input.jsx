import PropTypes from 'prop-types';
import { labelStyle, labelText } from './Input.module.css';

export const Input = ({
  label,
  name,
  register,
  className = '',
  errors,
  ...props
}) => {
  return (
    <label className={labelStyle}>
      <span className={labelText}>{label}</span>
      <input
        className={`mb-1 h-[56px] rounded-lg border-2 border-stroke bg-inputColor px-6 py-5 font-exo text-sm font-normal text-white caret-neon placeholder:text-white/[.5] focus:border-neon ${
          errors[name] && 'border-red text-red'
        } ${className}`}
        {...register(name)}
        {...props}
      />

      <span className="text-[10px] text-red ">
        {errors[name] && errors[name]?.message}
      </span>
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  className: PropTypes.string,
};
