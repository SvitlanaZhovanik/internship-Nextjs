import PropTypes from 'prop-types';
import Link from 'next/link';
import React from 'react';
import { cardWrapper, cardTitle } from './Card.module.css';
import { Button, Paragraph } from '..';
import classNames from 'classnames';

export const Card = ({ title, text, path, active }, innerRef) => {
  return (
    <div className={cardWrapper}>
      <div>
        <h3 className={cardTitle}>{title}</h3>
        <Paragraph size="lg" className="text-center text-white">
          {text}
        </Paragraph>
      </div>
      <Link href={path} innerRef={innerRef}>
        <Button
          variant="link"
          ref={path}
          appearance="primary"
          title="Hello"
          className={classNames(
            'text-center',
            !active && 'pointer-events-none',
          )}
        >
          {active ? 'Зареєструватись' : 'Згодом буде'}
        </Button>
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
