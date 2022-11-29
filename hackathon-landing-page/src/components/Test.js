import React from 'react';
import TestStartPage from './TestStartPage';
import TestInProgress from './TestInProgress';

export default function Test() {
  const dialogs = {
    startQuestions: [
      'Привет! Меня зовут Света, я сотрудник hr-команды:)',
      'Если вам сложно определиться с тем, какая роль вам подходит, я готова помочь',
      'Какой профиль вас интересует?',
    ],
    qualitiesQuestions: ['Выберите все качества, которые вам подходят:'],
    capabilitiesQuestions: [
      'Отлично! С качествами мы разобрались, теперь необходимо понять ваши возможности:',
    ],
    expressionsQuestions: ['Супер!, остался последний вопрос. Выбери 1 или 2 подходящих тебе выражения:'],

    startAnswers: [
      { name: 'programming', value: 'Программирование' },
      { name: 'analitics', value: 'Анализ данных' },
      { name: 'design', value: 'Дизайн' },
      { name: 'management', value: 'Менеджмент' },
      { name: 'marketing', value: 'Маркетинг' },
    ],
    qualitiesAnswers: [
      { name: 'empatic', value: 'Я эмпатичный человек' },
      { name: 'focus', value: 'Мне легко удерживать внимание людей' },
      { name: 'contact', value: 'Я люблю общаться' },
      { name: 'write', value: 'Мне легче писать, чем говорить' },
      { name: 'feedback', value: 'Знаю принципы фидбэка' },
    ]
  };

  const [isInProgress, setIsInProgress] = React.useState(false);

  function handleStart() {
    setIsInProgress(true);
  }

  return (
    <section className="test">
      {!isInProgress && <TestStartPage onStart={handleStart}></TestStartPage>}
      {isInProgress && <TestInProgress messages={dialogs}></TestInProgress>}
    </section>
  );
}
