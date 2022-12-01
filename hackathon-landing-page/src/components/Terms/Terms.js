import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import changeLife from '../../images/roles/change.png';
import communicate from '../../images/roles/social.png';
import pump from '../../images/roles/pump.png';
import riseUp from '../../images/roles/riseup.png';
import teach from '../../images/roles/teach.png';
import grow from '../../images/roles/grow.png';
import Button from '../Button/Button';

export default function Terms({handleClick, setSelectedRole}) {

  const handleClickWithRole = () => {
    setSelectedRole('notSelected')
    handleClick();
  }

  const termsCardsData = [
    {
      title: 'Получать от 35 до\u00A055 тысяч ₽ в месяц',
      description: 'И работать удалённо. Около 2\u00A0-3 часов в день, график свободный, выбирайте подходящий именно вам',
      image: riseUp,
    },
    {
      title: 'Учить и учиться новому',
      description: 'Вы узнаете, как давать обратную связь, выступать на публике и\u00A0мотивировать людей.',
      image: teach,
    },
    {
      title: 'Менять жизни людей к лучшему',
      description: 'Тысячи наших студентов нуждаются в\u00A0ваших знаниях и\u00A0опыте — не бойтесь ими делиться.',
      image: changeLife,
    },
    {
      title: 'Развиваться внутри роли',
      description: 'Получайте опыт и\u00A0со временем становитесь старшим наставником или\u00A0сеньор-ревьюером',
      image: grow,
    },
    {
      title: 'Прокачать личный бренд',
      description:
        'Публикуйте статьи в нашем блоге и\u00A0выступайте на\u00A0мероприятиях, чтобы вас\u00A0заметили',
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
              slidesPerView: 1.4,
              spaceBetween:15,
            },
            // when window width is >= 768px
            872: {
              slidesPerView: 2.5,
              spaceBetween:15,
            },
            1160: {
              slidesPerView: 3.4,
              spaceBetween: 38,
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
        <div className='terms__btn'>
          <Button text='Мне подходит!' padding='15px 40px' handleClick={handleClickWithRole}/>
        </div>
      </section>
    </>
  );
}
