import lines from '../../images/test/lines.png';
import cat from '../../images/test/cat.png';
import Button from '../Button/Button';

export default function TestStartPage({onStart}) {
  return (
    <>
      <img className="test__image-lines" src={lines} alt=""></img>
      <h4 className="test__title">Прирожденный наставник или&nbsp;истинный ревьюер?</h4>
      <p className="test__paragraph">
        Пройдите короткий тест под руководством нашего hr&nbsp;-&nbsp;специалиста: он поможет определиться с
        наиболее подходящей для вас ролью
      </p>
      <Button text="Пройти тест" width="185px" handleClick={onStart} />
      <img className="test__image-cat" src={cat} alt=""></img>
    </>
  );
}
