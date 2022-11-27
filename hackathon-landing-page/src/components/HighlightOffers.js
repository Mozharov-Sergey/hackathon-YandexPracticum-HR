import frontendIcon from '../images/frontendIcon.png';

export default function HighlightOffers() {
  const offersData = [1, 2, 3, 4, 5, 6, 7, 8]; // Потом тут будут данные карточек с вакансиями

  return (
    <section className="highlight-offers">
      <h2 className="highlight-offers__title">Открытые предложения</h2>
      <nav className="highlight-offers__search-bar">
        <button className="highlight-offers__search-bar-button">Наставник</button>
        <button className="highlight-offers__search-bar-button">Программирование</button>
        <select className="highlight-offers__search-bar-select" defaultValue={0}>
          <option className="highlight-offers__search-bar-select-option" disabled value={0}>
            Зарплата
          </option>
          <option className="highlight-offers__search-bar-select-option" value="30000">30000р</option>
        </select>
      </nav>
      <div className="highlight-offers__offers-container" >
      {offersData.map((item, index) => {
        return (
       
            <div className="highlight-offers__offer" key={index}>
              <h4 className="highlight-offers__offer-position">Наставник на курс</h4>
              <h3 className="highlight-offers__offer-name">Мидл фронтенд-разработчик</h3>
              <p className="highlight-offers__offer-conditions">Ведение группы, ~ 35 тыс руб/мес</p>
            </div>
     
        );
      })}
           </div>
    </section>
  );
}
