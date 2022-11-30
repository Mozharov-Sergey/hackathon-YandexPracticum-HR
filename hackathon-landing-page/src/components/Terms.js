import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import changeLife from '../images/roles/change.png';
import communicate from '../images/roles/social.png';
import pump from '../images/roles/pump.png';
import riseUp from '../images/roles/riseup.png';
import teach from '../images/roles/teach.png';
import grow from '../images/roles/grow.png';
import Button from './Button/Button';

export default function Terms({handleClick, setSelectedRole}) {

  const handleClickWithRole = () => {
    setSelectedRole('notSelected')
    handleClick();
  }

  const termsCardsData = [
    {
      title: 'Получать от 35 до 55 тысяч ₽ в месяц',
      description: 'И работать удаленно. Около 2-3 часов в деню. Графика выбираете сами.',
      image: riseUp,
    },
    {
      title: 'Учить и учиться новому',
      description: 'Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей.',
      image: teach,
    },
    {
      title: 'Менять жизнь людей к лучшему',
      description: 'Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться.',
      image: changeLife,
    },
    {
      title: 'Развиваться внутри роли',
      description: 'А со временем стать старшим наставником или сеньор-ревьюером.',
      image: grow,
    },
    {
      title: 'Прокачать личный бренд',
      description:
        'Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас.',
      image: pump,
    },
    {
      title: 'Общаться с людьми из EdTech',
      description: 'Станете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри.',
      image: communicate,
    },
  ];

  return (
    <>
      <section className="terms section-menu" id="terms">
        <h2 className="terms__title">
        В Практикуме вы сможете
        </h2>

        <Swiper
          breakpoints={{
            // when window width is >= 640px
            375: {
              slidesPerView: 1.5,
              spaceBetween:15,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2.5,
              spaceBetween:15,
            },
            1160: {
              slidesPerView: 3.5,
              spaceBetween:15,
            },
          }}

          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="terms__swiper"
          grabCursor={true}
          slidesPerView='auto'
        >
          {termsCardsData.map((item) => {
            return (
              <SwiperSlide key={item.title}>
                <div className="terms__card">
                  <h3 className="terms__card-title">{item.title}</h3>
                  <p className="terms__card-description">{item.description}</p>
                  <img className="terms__card-image" src={item.image} alt="icon" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Button text='Мне подходит!' width='185px' handleClick={handleClickWithRole}/>
      </section>
    </>
  );
}
