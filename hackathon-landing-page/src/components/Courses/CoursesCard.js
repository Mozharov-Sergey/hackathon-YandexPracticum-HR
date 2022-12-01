import { useState } from 'react';
import arrow from '../../images/coursesIcons/arrow_back.svg'

export default function CoursesCard({ item }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="courses__card-container">
      <div className="courses__card courses__card__front">
        <h3 className="courses__card-title">{item.title}</h3>
        <img className="courses__card-image" src={item.image} alt="Программирование"></img>
        <p className="courses__card-substring">{item.substring}</p>
      </div>

      <div className="courses__card courses__card__back">
        <p className="courses__card-back-text">{item.hoverText}</p>
        <img className="courses__card-arrow" src={arrow} alt="Стрелка-ссылка" />
      </div>

    </div>
  );
}
