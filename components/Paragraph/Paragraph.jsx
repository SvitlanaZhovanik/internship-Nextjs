import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  paragraph,
  sm,
  smForm,
  lg,
  xl,
  xlFAQ,
  xxl,
  xxxl,
} from './Paragraph.module.css';

export const Paragraph = ({ size = 'xl', children, className, ...props }) => {
  return (
    <p
      className={classNames(paragraph, className, {
        [sm]: size === 'sm',
        [smForm]: size === 'smForm',
        [lg]: size === 'lg',
        [xl]: size === 'xl',
        [xlFAQ]: size === 'xlFAQ',
        [xxl]: size === 'xxl',
        [xxxl]: size === 'xxxl',
      })}
      {...props}
    >
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};
