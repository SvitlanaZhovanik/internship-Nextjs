import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { h1, h2, h3, h4, center, right } from './Heading.module.css';

export const Heading = ({
  tag,
  text,
  className,
  position = null,
  ...props
}) => {
  switch (tag) {
    case 'h1':
      return (
        <h1 className={classNames(h1, className)} {...props}>
          {text}
        </h1>
      );

    case 'h2':
      return (
        <h2
          className={classNames(
            h2,
            className,
            {
              [center]: position === 'center',
            },
            { [right]: position === 'right' },
          )}
          {...props}
        >
          {text}
        </h2>
      );

    case 'h3':
      return (
        <h3  className={classNames(h3, className)} {...props}>
          {text}
        </h3>
      );

    case 'h4':
      return (
        <h3  className={classNames(h4, className)} {...props}>
          {text}
        </h3>
      );

    default:
      return null;
  }
};

Heading.propTypes = {
  tag: PropTypes.string,
  text: PropTypes.string.isRequired,
};
