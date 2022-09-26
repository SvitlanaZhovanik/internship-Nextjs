import { StepsContainer, TitleSpan } from './StepsText.module.css';
import { Paragraph } from '/components';

export function StepsText({ title, text }) {
  return (
    <li key={title.toLowerCase()}>
      <div className={StepsContainer}>
        <span className={TitleSpan}>{title}</span>
        <Paragraph size="xl">{text}</Paragraph>
      </div>
    </li>
  );
}
