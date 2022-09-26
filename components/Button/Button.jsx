import classNames from 'classnames';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { button, ghost, primary } from './Button.module.css';

// eslint-disable-next-line react/display-name
export const Button = forwardRef(
  ({ variant = 'span', appearance, children, className, ...props }, ref) => {
    const renderConditions = {
      [primary]: appearance === 'primary',
      [ghost]: appearance === 'ghost',
    };

    switch (variant) {
      case 'link':
        return (
          <a
            ref={ref}
            href=""
            className={classNames(button, className, renderConditions)}
            {...props}
          >
            {children}
          </a>
        );

      case 'span':
        return (
          <span
            className={classNames(button, className, renderConditions)}
            {...props}
          >
            {children}
          </span>
        );

      case 'button':
        return (
          <button
            type="submit"
            className={classNames(button, className, renderConditions)}
            {...props}
          >
            {children}
          </button>
        );

      default:
        return null;
    }
  },
);

Button.propTypes = {
  appearance: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
