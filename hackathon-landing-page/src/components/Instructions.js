import testImage from '../images/instructions/testImage.png'
import arrowSecong from '../images/instructions/arrowSecong.png'
import arrowFirst from '../images/instructions/arrowFirst.png'
export default function Instructions() {
  return(<>
<section className="instructions" id="tasks">
  <h2 class="instructions__title">Что нужно будет делать</h2>
  <div className="instructions__mentors">
    <h3 className="instructions__title_mentors instructions__subtitle">Наставникам:</h3>
      <ul className="instructions__tasks">
        <li className="instructions__task">Помогать студентам ставить цели, рефлексировать
        и&nbsp;делать выводы</li>
        <li className="instructions__task">Отвечать на их вопросы в чате</li>
        <li className="instructions__task">Проводить вебинары 2 раза в месяц и давать обратную&nbsp;связь</li>
        <li className="instructions__task">Делиться опытом и мотивировать</li>
      </ul>
    <img className="instructions__image" src={testImage} alt="картинка"></img>
    <button className="instructions__button">Буду наставником</button>
  </div>
  <div className="instructions__reviewers">
    <h3 className="instructions__title_reviewers instructions__subtitle">Ревьюерам:</h3>
      <ul className="instructions__tasks">
        <li className="instructions__task">Проверять код и проекты студентов</li>
        <li className="instructions__task">Простыми словами объяснять им их ошибки</li>
        <li className="instructions__task">Давать корректирующую обратную связь</li>
        <li className="instructions__task">Оценивать работы в формате зачёт/незачёт</li>
      </ul>
      <img className="instructions__image" src={testImage} alt="картинка"></img>
    <button className="instructions__button">Пойду в ревьюеры</button>
  </div>
  <div className="todo-list">
    <p className="todo-list__text todo-list__text-first">Выберите роль и&nbsp;заполните заявку
      <img className="todo-list__arrow-first"src={arrowFirst} alt="стрелка"></img>
    </p>
    <p className="todo-list__text todo-list__text-second">Пройдите отбор и&nbsp;бесплатное обучение
      <img className="todo-list__arrow-secong"src={arrowSecong} alt="стрелка"></img>
    </p>
    <p className="todo-list__text"> Делитесь знаниями со&nbsp;cтудентами Яндекс Практикума</p>
  </div>
</section>
  </>)
  }

