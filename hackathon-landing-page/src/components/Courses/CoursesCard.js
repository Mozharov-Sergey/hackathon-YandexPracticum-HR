import { useState } from 'react';

export default function CoursesCard({ item }) {
  const [isHover, setIsHover] = useState(false);

  function handleMouseEnter() {
    setIsHover(true);
  }

  function handleMouseLeave() {
    setIsHover(false);
  }

  return (
    // <div className="courses__card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    //   {!isHover && (
    //     <>
    //       <h3 className="courses__card-title">{item.title}</h3>
    //       <img className="courses__card-image" src={item.image} alt="Программирование"></img>
    //       <p className="courses__card-substring">{item.substring}</p>
    //     </>
    //   )}

    //   {isHover && <p className="courses__card-substring_hover">{item.hoverText}</p>}
    // </div>

    <div className="courses__card-container">
      <div className="courses__card courses__card__front">
        <h3 className="courses__card-title">{item.title}</h3>
        <img className="courses__card-image" src={item.image} alt="Программирование"></img>
        <p className="courses__card-substring">{item.substring}</p>
      </div>

      <div className="courses__card courses__card__back">
        <p className="courses__card-back-text">{item.hoverText}</p>
      </div>

    </div>
  );
}