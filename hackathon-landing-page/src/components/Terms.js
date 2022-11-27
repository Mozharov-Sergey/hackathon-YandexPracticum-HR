import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Terms() {
  const termsCardsData = [
    {
      title: 'Учиться новому',
      description: 'Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей.',
    },
    {
      title: 'Менять жизнь людей к лучшему',
      description: 'Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться.',
    },
    {
      title: 'Развивать личный бренд',
      description:
        'Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас.',
    },
    {
      title: 'Общаться с людьми из EdTech',
      description: 'Станете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри.',
    },
    {
      title: 'Работать удаленно',
      description:
        'И иметь доход в среднем от 35 до 50 тысяч ₽ в месяц - удаленно, 2–3 часа в день, график выбираете сами.',
    },
  ];

  return (
    <>
      <section className="terms">
        <h2 className="terms__title">
          В роли наставника и ревьюера
          <br /> вы сможете
        </h2>

        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="reviews__swiper"
          slidesPerView={4}
          spaceBetween={0}
        >
          {termsCardsData.map((item) => {
            return (
              <SwiperSlide key={item.title}>
                <div className="terms__card" >
                  <h3 className="terms__card-title">{item.title}</h3>
                  <p className="terms__card-description">{item.description}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="terms__button-accept">Мне подходит!</button>
      </section>
    </>
  );
}
