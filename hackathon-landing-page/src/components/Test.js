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
    goodLuck: ["Удачи!"], 

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
    ],
    capabilitiesAnswers: [
      { name: 'experieneMoreThanTwoYears', value: 'Мой опыт работы в данном направлении более двух лет' },
      { name: 'experieneLessThanTwoYears', value: 'Мой опыт работы в данном направлении менее двух лет' },
      { name: 'camera', value: 'Могу проводить звонки с камерой' },
      { name: 'place', value: 'Могу работать в любое время' },
      { name: 'flexibleTiming', value: 'Хочу работать по гибкому графику' },
      { name: 'freeTime', value: 'Есть больше 10 свободных часов в неделю' },
    ],
    expressionAnswers: [
      { name: 'atmosphere', value: 'Люблю создавать рабочую атмосферу' },
      { name: 'organizer', value: 'Считаю, что у меня есть организаторские способности' },
      { name: 'helper', value: 'Мне нравиться учиться и помогать другим' },
      { name: 'slow', value: 'Люблю разбираться с задачами в своем темпе без спешки' },
    ],
  };

  const [isInProgress, setIsInProgress] = React.useState(false);

  function handleStart() {
    setIsInProgress(true);
  }

  return (
    <section className="test no-scrollbar">
      {!isInProgress && <TestStartPage onStart={handleStart}></TestStartPage>}
      {isInProgress && <TestInProgress messages={dialogs} id="testWindow"></TestInProgress>}
    </section>
  );
}
