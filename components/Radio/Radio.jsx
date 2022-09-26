import PropTypes from 'prop-types';
import { StopIcon } from '@heroicons/react/24/solid';
import { StopIcon as StopIconWhite } from '@heroicons/react/24/outline';
import { icon, iconChecked } from './Radio.module.css';

export const Radio = ({ name, handleClick, checked, value, register }) => {
  return (
    <label
      key={name}
      className={`relative cursor-pointer pl-10 font-exo text-base leading-tight focus:outline focus:outline-offset-1  focus:outline-neon sm:pl-12 sm:text-xl ${
        checked && value === name && 'text-neon'
      }`}
      onClick={handleClick}
    >
      <input
        className="visually-hidden custom-checkbox"
        type="radio"
        {...register('language')}
        name="language"
        value={name}
      />
      {checked && value === name ? (
        <StopIcon className={iconChecked} />
      ) : (
        <StopIconWhite className={icon} />
      )}
      {name}
    </label>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string,
  register: PropTypes.func.isRequired,
};
