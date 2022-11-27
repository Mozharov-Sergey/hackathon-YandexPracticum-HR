import testImage from '../images/testImage.png'

export default function Instructions() {
  return(<>
<section className="instructions">
  <h2 class="instructions__title">Что нужно будет делать</h2>
  <div className="mentors">
    <h3 class="mentors__title instructions__subtitle">Наставникам:</h3>
      <ul class="mentors__tasks instructions__tasks">
        <li class="mentors__task">Помогать студентам ставить цели, рефлексировать
            и делать выводы Отвечать на их вопросы в чате</li>
        <li class="mentors__task instruction__task">Проводить вебинары 2 раза в месяц и давать обратную связь</li>
        <li class="mentors__task instruction__task">Делиться опытом и мотивировать</li>
      </ul>
    <img class="instructions__image" src={testImage} alt="картинка"></img>
    <button className="instructions__button"></button>
  </div>
  {/* <div className="reviewers">
    <h3 class="reviewers__title instructions__subtitle">Наставникам:</h3>
      <ul class="reviewers__tasks instructions__tasks">
        <li class="reviewers__task instruction__task">Помогать студентам ставить цели, рефлексировать
            и делать выводы Отвечать на их вопросы в чате</li>
        <li class="reviewers__task instruction__task">Проводить вебинары 2 раза в месяц и давать обратную связь</li>
        <li class="reviewers__task instruction__task">Делиться опытом и мотивировать</li>
      </ul>
    <img class="mentors__image" src="./images/workout.jpg" alt="картинка"></img>
    <button className="instructions__button"></button>
  </div> */}
</section>
  </>)
  }

