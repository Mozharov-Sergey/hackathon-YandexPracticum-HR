import Button from '../Button/Button';
import './Job.css'

const Job = () => {
  return (
    <section className='job' id='jobs'>
      <div className='job__container'>
        <div className='job__info'>
          <p className='job__text'>Не нашли идеальное предложение?</p>
          <p className='job__text'>Посмотрите другие вакансии в основной команде</p>
        </div>
        <a href='https://practicum.yandex.ru/interface-designer/#CareerCenter' target="blank">
          <Button text='Смотреть вакансии' />
        </a>        
      </div>
    </section>
  )
}

export default Job;