import './Reviews.css'
import CardReview from '../CardReview/CardReview';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import photo1 from '../../images/reviews/1.jpg';
import photo2 from '../../images/reviews/2.jpg';
import photo3 from '../../images/reviews/3.jpg';
import photo4 from '../../images/reviews/4.jpg';
import photo5 from '../../images/reviews/5.jpg';
import photo6 from '../../images/reviews/6.jpg';
import photo7 from '../../images/reviews/7.jpg';
import photo8 from '../../images/reviews/8.jpg';

const Reviews = () => {

  const reviewsData = [
    {
      id: 1,
      img: photo1,
      name: 'Максим Чеченёв',
      job: 'Наставник на курсе «Веб-разработка»',
      text: 'Когда я учился писать код, не было онлайн-курсов и площадок с наставниками, и было сложно ориентироваться. Сейчас я делюсь своим опытом и, мне кажется, делаю мир чуть лучше :)'
    },
    {
      id: 2,
      img: photo2,
      name: 'Влад Скрабневский',
      job: 'Наставник на курсе «Дизайн интерфейсов»',
      text: 'Меня взяли в наставники сразу после окончания курса, так как я пришёл уже с опытом работы. И каково же было моё удивление, когда я не только учил, но и многому научился. Восторг!'
    },
    {
      id: 3,
      img: photo5,
      name: 'Софья Пешехонова',
      job: 'Ревьюер на курсе DevOps',
      text: 'Меня очень вдохновляет наблюдать разные подходы у студентов к их работам! Видно, как растёт и крепчает комьюинити разработчиков. И приятно знать, что ты являешься его частью.'
    },
    {
      id: 4,
      img: photo3,
      name: 'Полина Татаренкова',
      job: 'Ревьюер на курсе «Графический дизайн»',
      text: 'Зажигать сердца и умы своих студентов для меня невероятно важно.  Мне удаётся найти подход к ним, а Практикум помогает не растерять силы и мотивацию на этом непростом пути.'
    },
    {
      id: 5,
      img: photo6,
      name: 'Максим Николаев',
      job: 'Наставник на курсе Мидл фронтэнд-разработчик',
      text: 'Я очень ценю возможность постоянного роста. Школа наставничества дала хорошую базу в преподавании, совершенствуюсь каждый день и не собираюсь останавливаться:)'
    },
    {
      id: 6,
      img: photo7,
      name: 'Ира Захарова',
      job: 'Ревьюер на курсе курса «Менеджер проектов»',
      text: 'Работаю код-ревьюером с гибким графиком, благодаря этому получаю дополнительный доход и могу делиться своим опытом. Знаю все тонкости написания кода в теории и на практике.'
    },
    {
      id: 7,
      img: photo8,
      name: 'Юра Никаронов',
      job: 'Наставник курса Data Science',
      text: 'С Практикумом меня объединяют любовь к технологиям, вера в онлайн-образование и желание помогать людям покорять новые горизонты. Сам почти полностью осваивал профессию онлайн!'
    },
    {
      id: 8,
      img: photo4,
      name: 'Сергей Можаров',
      job: 'Наставник на курсе «iOS-разработка»',
      text: 'Программа наставничества помогает реализовать себя как педагога более полно. Я могу совмещать эту работу со своей основной и получать максимум опыта и удовольствия.'
    },
  ]

  return (
    <section className='reviews section-menu' id='reviews'>
      <h2 className='reviews__title'>Истории ребят из&nbsp;нашей команды</h2>
      <p className='reviews__subtitle'>Они стали крутыми профессионалами и изменили жизни десятков людей. У&nbsp;вас тоже получится!</p>
      <div className='reviews__list'>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          375: {
            slidesPerView: 1.4,
            spaceBetween:15,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className='reviews__swiper'
        grabCursor={true}
        slidesPerView='auto'
    >
        {reviewsData.map((card) => {
            return (
              <SwiperSlide key={card.id}>
                <CardReview
                card={card}
              />
              </SwiperSlide>
            );
          })}
      </Swiper>

      </div>
    </section>
  )
}

export default Reviews;

