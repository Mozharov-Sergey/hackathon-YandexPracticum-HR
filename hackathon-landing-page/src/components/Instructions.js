import groupCall from '../images/instructions/groupCall.jpg'
import work from '../images/instructions/work.jpg'
import arrowSecong from '../images/instructions/arrowSecong.png'
import arrowFirst from '../images/instructions/arrowFirst.png'
import Button from './Button/Button'
export default function Instructions({handleClick, setSelectedRole}) {

  const handleClickWithRoleMentor = () => {
    setSelectedRole('mentor')
    handleClick();
  }

  const handleClickWithRoleReviewer = () => {
    setSelectedRole('reviewer')
    handleClick();
  }

  return(<>
<section className="instructions section-menu" id="tasks">
  <h2 className="instructions__title">Что нужно будет делать</h2>
  <div className="instructions__mentors">
    <h3 className="instructions__subtitle">Наставникам:</h3>
      <ul className="instructions__tasks">
        <li className="instructions__task">Помогать студентам ставить цели, искать ошибки
        и&nbsp;делать выводы</li>
        <li className="instructions__task">Проводить вебинары 2 раза в месяц, давать обратную связь и&nbsp;отвечать на&nbsp;вопросы в&nbsp;чате</li>
        <li className="instructions__task">Делиться опытом и мотивировать</li>
      </ul>
    <img className="instructions__image" src={groupCall} alt="картинка"></img>
    <Button text='Буду наставником' handleClick={handleClickWithRoleMentor}/>
  </div>
  <div className="instructions__reviewers">
    <h3 className="instructions__subtitle">Ревьюерам:</h3>
      <ul className="instructions__tasks">
        <li className="instructions__task">Проверять код и проекты студентов</li>
        <li className="instructions__task">Простыми словами объяснять им их ошибки</li>
        <li className="instructions__task">Давать корректирующую обратную связь</li>
        <li className="instructions__task">Оценивать работы в формате зачёт&nbsp;/&nbsp;незачёт</li>
      </ul>
      <img className="instructions__image" src={work} alt="картинка"></img>
      <Button text='Пойду в ревьюеры' handleClick={handleClickWithRoleReviewer}/>
  </div>
  <div className="todo-list">
    <p className="todo-list__text">Выберите роль и&nbsp;заполните заявку</p>
    <div className="todo-list__arrow"><img className="todo-list__arrow-first"src={arrowFirst} alt="стрелка"></img></div>
    <p className="todo-list__text">Пройдите отбор и&nbsp;бесплатное обучение</p>
    <div className='todo-list__arrow'><img className="todo-list__arrow-secong"src={arrowSecong} alt="стрелка"></img></div>
    <p className="todo-list__text"> Делитесь знаниями со&nbsp;cтудентами Яндекс Практикума</p>
  </div>
</section>
  </>)
  }

