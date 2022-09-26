import Pen from '../public/images/pen.svg';
import Documents from '../public/images/documents.svg';
import Chat from '../public/images/chat.svg';
import Desktop from '../public/images/desktop.svg';

export const future = [
  {
    title: 'Реєстрація',
    subTitle: '(5хв)',
    description:
      'Залиш заявку та отримай на пошту посилання на тестове завдання',
    icon: <Pen className="h-4 w-4 flex-shrink-0 md:h-8 md:w-8" />,
  },
  {
    title: 'Тестове завдання',
    subTitle: '(від 1 до 10 днів)',
    description: 'Реалізуй тестове завдання. Дедлайн залежить від напрямку',
    icon: <Documents className="h-4 w-4 flex-shrink-0 md:h-8 md:w-8" />,
  },
  {
    title: 'Інтервʼю',
    subTitle: '(15-30хв)',
    description: 'При успішному виконанні ТЗ - очікуємо на онлайн  інтервʼю',
    icon: <Chat className="h-4 w-4 flex-shrink-0 md:h-8 md:w-8" />,
  },
  {
    title: 'Стажування',
    subTitle: '(до 2-х міс)',
    description: 'У разі успішного інтервʼю - чекаємо на стажуванні',
    icon: <Desktop className="h-4 w-4 flex-shrink-0 md:h-8 md:w-8" />,
  },
];
