import React, { useState } from 'react';
import Button from '../Button/Button';
import stars from '../../images/highlight-offers/stars.png'
import lines from '../../images/highlight-offers/line.png'
export default function HighlightOffers({ handleClickRoleMobile }) {
  const offersData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // Потом тут будут данные карточек с вакансиями

  const [isVacanciesShow, setIsVacanciesShow] = useState(false);
  const [buttonText, setButtonText] = React.useState('Показать еще');
  const [countCard, setCountCard] = React.useState(8)

  function handleClickShowVacanciewButton() {
    setIsVacanciesShow(!isVacanciesShow);
  }

  React.useEffect(() => {
    if(isVacanciesShow) {
      setButtonText("Свернуть");
    }
    else {
      setButtonText("Показать еще");
    }

  }, [isVacanciesShow])

  React.useEffect(() => {
    let timer;
    const handleChangeWidthScreenTimer = () => {
      timer = setTimeout(handleChangeWidthScreen, 1000);
    };
    window.addEventListener("resize", handleChangeWidthScreenTimer);
    return () => {
      window.removeEventListener("resize", handleChangeWidthScreenTimer);
      clearTimeout(timer);
    };
  });  

  const handleChangeWidthScreen = () => {    
    if (window.innerWidth < 376) {
      debugger;
      setCountCard(8)
    } else {
      setCountCard(4)
    }
  }

  return (
    <section className="highlight-offers section-menu" id="offers">
      <div className="highlight-offers__title-container">
      <img className='highlight-offers__image-stars' src={stars} alt='рисунок звезд'></img>
        <h2 className="highlight-offers__title">Открытые предложения</h2>
        <button
          className="highlight-offers__image"
          alt="отфильтровать результат"
          onClick={handleClickRoleMobile}
        ></button>
      </div>
      <nav className="highlight-offers__search-bar">
        <div className="highlight-offers__select-wrapper">
          <select className="highlight-offers__search-bar-select" defaultValue="mentor">
            <option className="highlight-offers__search-bar-select-option" value="mentor">
              Наставник
            </option>
            <option className="highlight-offers__search-bar-select-option" value="reviewer">
              Ревьюер
            </option>
        </select>
        </div>
        <div className="highlight-offers__select-wrapper">
          <select className="highlight-offers__search-bar-select" defaultValue="programming">
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
        </div>


      </nav>
      <div className="highlight-offers__offers-container">
        {offersData.map((item, index) => {
          if (index < countCard) {
            return (
              <div className="highlight-offers__offer" key={index}>
                <h4 className="highlight-offers__offer-position">Наставник на курс</h4>
                <h3 className="highlight-offers__offer-name">Мидл фронтенд-разработчик</h3>
                <p className="highlight-offers__offer-conditions">Ведение группы, ~&nbsp;35 тыс руб/мес</p>
              </div>
            );
          } else {
            return (
              <div
                className={`highlight-offers__offer ${!isVacanciesShow && 'highlight-offers__offer_closed'}`}
                key={index}
              >
                <h4 className="highlight-offers__offer-position">Наставник на курс</h4>
                <h3 className="highlight-offers__offer-name">Pyton-разработчик (&nbsp;в&nbsp;резерв)</h3>
                <p className="highlight-offers__offer-conditions">Ведение группы, от 50 000 ₽ в месяц</p>
              </div>
            );
          }
        })}
      </div>
      <Button text={buttonText} padding="15px 40px" handleClick={handleClickShowVacanciewButton} />
      <img className='highlight-offers__image-lines' src={lines} alt='рисунок линий'></img>
    </section>
  );
}
