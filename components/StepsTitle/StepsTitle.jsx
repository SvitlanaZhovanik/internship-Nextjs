import PropTypes from 'prop-types';
import data from 'data/steps.json';
import { Grid, Paragraph } from '/components';
import { StepsContainer, TitleSpan } from './StepsTitle.module.css';

export function StepsTitle() {
  return (
    <Grid appearance="col-2" tag="ul">
      {data.steps.map(({ title, text }) => (
        <li key={title.toLowerCase()}>
          <div className={StepsContainer}>
            <span className={TitleSpan}>{title}</span>
            <Paragraph size="xl">{text}</Paragraph>
          </div>
        </li>
      ))}
    </Grid>
  );
}

StepsTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
