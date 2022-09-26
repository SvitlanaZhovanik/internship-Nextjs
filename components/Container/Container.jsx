import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return (
    <div className={classNames('container', 'xl:max-w-[1280px]')}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
