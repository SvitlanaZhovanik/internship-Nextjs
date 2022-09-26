import PropTypes from 'prop-types';

import Arrow from '../../public/images/arrow.svg';
import style from './FutureCard.module.css';

export const FutureCard = ({ counter, icon, title, subTitle, description }) => {
  return (
    <li className={style.card}>
      <div className={style.counterWrapper}>
        {counter < 10 ? (
          <span className={style.counter}>0{counter}</span>
        ) : (
          <span className={style.counter}>{counter}</span>
        )}
      </div>

      <div className={style.cardBody}>
        {icon}

        <div className={style.textWrapper}>
          <h3 className={style.cardHeading}>{title}</h3>
          <p className={style.cardSubTitle}>{subTitle}</p>
        </div>

        <p className={style.cardText}>{description}</p>
      </div>

      <span className={style.arrowWrapper}>
        <Arrow className={style.icon} />
      </span>

      <span className={style.hiddenBlock}></span>
    </li>
  );
};

FutureCard.prototype = {
  counter: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
