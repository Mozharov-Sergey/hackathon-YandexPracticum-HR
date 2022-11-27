import plug from '../images/material-symbols_image-outline.png';

const cardsData = [
  { title: 'Программирование', image: plug, substring: '31 курс' },
  { title: 'Анализ Данных', image: plug, substring: '16 курсов' },
  { title: 'Менеджмент', image: plug, substring: '12 курсов' },
  { title: 'Маркетинг', image: plug, substring: '2 курса' },
  { title: 'Дизайн', image: plug, substring: '11 курсов' },
];

export default function Courses() {
  return (
    <>
      <section className="courses">
        <h2 className="courses__title">Чему мы учим</h2>
        <p className="courses__main-text">
          Студенты Яндекс Практикума учатся на 5 основных факультетах. И им очень нехватает вашего
          профессионального опыта
        </p>
        <div className="courses__cards-container">
          {cardsData.map((item) => {
            return (
              <div className="courses__card" key={item.title}>
                <h3 className="courses__card-title">{item.title}</h3>
                <img className="courses__card-image" src={item.image} alt="Программирование"></img>
                <p className="courses__card-substring">{item.substring}</p>
              </div>
            );
          })}

          <div className="courses__card courses__card_summary" >
            <h3 className="courses__card-title courses__card-title_summary">Все курсы</h3>
            <button className="courses__card-button"></button>
          </div>

        </div>
      </section>
    </>
  );
}
