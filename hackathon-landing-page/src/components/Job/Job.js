import Button from '../Button/Button';
import './Job.css';
import man from '../../images/job/man.png';

const Job = () => {
  return (
    <section className='job'>
        <div className='job__info'>
          <p className='job__text'>Не нашли подходящую роль?</p>
          <p className='job__text'>Посмотрите другие в&nbsp;основной команде Практикума</p>
        </div>
        <a className='job__btn' href='https://practicum.yandex.ru/interface-designer/#CareerCenter' target="blank">
          <Button text='Смотреть →' width='201px'/>
        </a>
        <img src={man} alt='Фото человечка' className='job__img'/>
    </section>
  )
}

export default Job;
