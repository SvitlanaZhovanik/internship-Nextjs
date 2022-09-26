import classNames from 'classnames';
import PropTypes from 'prop-types';
import { section, hero, primary, secondary } from './Section.module.css';

export const Section = ({
  children,
  className,
  type = 'primary',
  ...props
}) => {
  return (
    <section
      className={classNames(
        section,
        {
          [hero]: type === 'hero',
          [primary]: type === 'primary',
          [secondary]: type === 'secondary',
        },
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
