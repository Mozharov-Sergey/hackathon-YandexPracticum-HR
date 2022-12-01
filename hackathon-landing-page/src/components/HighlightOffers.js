import { useState } from 'react';
import Button from './Button/Button';
export default function HighlightOffers({handleClickRoleMobile}) {
  const offersData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // Потом тут будут данные карточек с вакансиями

  const [isVacanciesShow, setIsVacanciesShow] = useState(false);

  function handleClickShowVacanciewButton() {
    setIsVacanciesShow(!isVacanciesShow);
  }

  return (
    <section className="highlight-offers section-menu" id="offers">
      <h2 className="highlight-offers__title">Открытые предложения</h2>
      <button className='highlight-offers__image' alt='отфильтровать результат' onClick={handleClickRoleMobile}></button>
      <nav className="highlight-offers__search-bar">
        <select className="highlight-offers__search-bar-select" defaultValue="programming" >
          <option className="highlight-offers__search-bar-select-option" value="programming">
            Программирование
          </option>
          <option className="highlight-offers__search-bar-select-option" value="design">
            Дизайн
          </option>
          <option className="highlight-offers__search-bar-select-option" value="management">
            Менеджмент
          </option>
          <option className="highlight-offers__search-bar-select-option" value="design">
            Маркетинг
          </option>
        </select>

        <select className="highlight-offers__search-bar-select" defaultValue="mentor">
          <option className="highlight-offers__search-bar-select-option" value="mentor">
            Наставник
          </option>
          <option className="highlight-offers__search-bar-select-option" value="reviewer">
            Ревьюер
          </option>
        </select>
      </nav>
      <div className="highlight-offers__offers-container">
        {offersData.map((item, index) => {
          if (index < 4) {
            return (
              <div className="highlight-offers__offer" key={index}>
                <h4 className="highlight-offers__offer-position">Наставник на курс</h4>
                <h3 className="highlight-offers__offer-name">Мидл фронтенд-разработчик</h3>
                <p className="highlight-offers__offer-conditions">Ведение группы, ~ 35 тыс руб/мес</p>
              </div>
            );
          } else {
            return (
              <div
                className={`highlight-offers__offer ${!isVacanciesShow && 'highlight-offers__offer_closed'}`}
                key={index}
              >
                <h4 className="highlight-offers__offer-position">Наставник на курс</h4>
                <h3 className="highlight-offers__offer-name">Мидл фронтенд-разработчик</h3>
                <p className="highlight-offers__offer-conditions">Ведение группы, ~ 35 тыс руб/мес</p>
              </div>
            );
          }
        })}
      </div>
      <Button text='Показать еще' padding='15px 40px' handleClick={handleClickShowVacanciewButton}/>
    </section>
  );
}
