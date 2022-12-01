import plug from '../../images/material-symbols_image-outline.png';
import programming from '../../images/coursesIcons/programming.png';
import design from '../../images/coursesIcons/design.png';
import analitics from '../../images/coursesIcons/analitics.png';
import management from '../../images/coursesIcons/management.png';
import marketing from '../../images/coursesIcons/marketing.png';
import CoursesCard from './CoursesCard';
import Button from '../Button/Button';

const cardsData = [
  {
    title: 'Программирование',
    image: programming,
    substring: '31 курс',
    hoverText: 'Pyton-разработка, инженер по тестированию, разработка C++, Go-разработка и другие курсы',
  },
  {
    title: 'Анализ Данных',
    image: analitics,
    substring: '16 курсов',
    hoverText:
      'Специалист по Data Science, инженер данных, системная аналитика, аналитика данных и другие курсы',
  },
  {
    title: 'Менеджмент',
    image: management,
    substring: '12 курсов',
    hoverText: 'Менеджер проектов, управление командой, IT-рекрутер, визуальные презентации и другие курсы',
  },
  {
    title: 'Маркетинг',
    image: marketing,
    substring: '2 курса',
    hoverText: 'Специалист по привлечению трафика, интернет-маркетинг',
  },
  {
    title: 'Дизайн',
    image: design,
    substring: '11 курсов',
    hoverText: 'Дизайн интерфейсов, UX-копирайтинг, графический дизайн, коммерческая иллюстрация',
  },
];

export default function Courses() {
  return (
    <>
      <section className="courses section-menu" id="courses">
        <h2 className="courses__title">Чему мы учим</h2>
        <p className="courses__main-text">
          Студенты Яндекс Практикума учатся на 5 основных факультетах. И им очень нехватает вашего
          профессионального опыта
        </p>
        <div className="courses__cards-container">
          {cardsData.map((item, index) => {
            return <CoursesCard item={item} key={index} />;
          })}

          <div className="courses__card courses__card_summary">
            <h3 className="courses__card-title courses__card-title_summary">Все курсы</h3>
            <Button text='Смотреть →' width='185px'/>
          </div>
        </div>
        <div className='courses__button'>
        <Button text='Все курсы →'/>
        </div>
      </section>
    </>
  );
}
