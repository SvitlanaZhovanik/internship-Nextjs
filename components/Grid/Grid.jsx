import classNames from 'classnames';
import PropTypes from 'prop-types';
import { col1, col2, col3, col4 } from './Grid.module.css';

export const Grid = ({ children, appearance, className, tag, ...props }) => {
  const Tag = tag ?? 'div';

  return (
    <Tag
      className={classNames(className, {
        [col1]: appearance === 'col-1',
        [col2]: appearance === 'col-2',
        [col3]: appearance === 'col-3',
        [col4]: appearance === 'col-4',
      })}
      {...props}
    >
      {children}
    </Tag>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  appearance: PropTypes.string.isRequired,
  tag: PropTypes.string,
};
