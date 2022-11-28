import lines from '../images/test/lines.png';
import cat from '../images/test/cat.png';

export default function Test() {
  return(
    <>
    <section className='test'>
        <img className="test__image-lines" src={lines} alt=""></img>
        <h4 className="test__title">Прирожденный наставник или истинный ревьюер?</h4>
        <p className='test__paragraph'>Пройдите короткий тест под руководством нашего hr-специалиста:
          он поможет определиться с наиболее подходящей для вас ролью</p>
        <button className="test__button">Пройти тест</button>
      <img className="test__image-cat"src={cat} alt=""></img>
    </section>
    </>
  )
}
