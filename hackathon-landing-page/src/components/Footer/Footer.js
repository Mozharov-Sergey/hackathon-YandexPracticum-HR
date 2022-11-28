import './Footer.css';
import fb from '../../images/footer/fb.png';
import vk from '../../images/footer/vk.png';
import inst from '../../images/footer/inst.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__info'>
        <div className='footer__phone-group'>
          <a href='tel:88007009329' className='footer__phone'>8-800-700-93-29</a><span className='footer__phone-span'>Звонок по России бесплатный</span>
        </div>        
        <div className='footer__social'>
          <a className='footer__icon-link' href='https://www.facebook.com/yandex.practicum/'  target='blank'> <img className='footer__icon' src={fb} alt='Логотип фейсбука'/></a>
          <a className='footer__icon-link' href='https://vk.com/yandex.practicum' target='blank'> <img className='footer__icon' src={vk} alt='Логотип вконтакте'/></a>
          <a className='footer__icon-link' href='https://www.instagram.com/yndx.practicum/' target='blank'> <img className='footer__icon' src={inst} alt='Логотип инстаграмма'/></a>
          <a className='footer__icon-link' href='https://thecode.media/' target='blank'>Журнал</a>
        </div>
        <p className='footer__text'>Образовательные услуги оказываются АНО ДПО «ШАД».
          Это <a className='footer__span' href='https://yandexdataschool.ru/'>Школа анализа данных</a>, основанная Яндексом. Оказывает услуги на основании 
          <a className='footer__span' href='https://code.s3.yandex.net/License_YSDA.pdf'> Лицензии № 036031</a> от 24 марта 2015 года.</p>
        <p className='footer__text'>Документ о прохождении обучения по программе дополнительного профессионального образования также выдается АНО ДПО «ШАД».</p>
        <p className='footer__text'>© 2020 АНО ДПО «ШАД», ООО «Яндекс»</p>
      </div>
      <nav className='footer__menu'>
        <ul className='footer__list'>
          <li className='footer__list-item'><a className='footer__menu-link' href="#tasks">Задачи</a></li>
          <li className='footer__list-item'><a className='footer__menu-link' href="#courses">Факультеты</a></li>
          <li className='footer__list-item'><a className='footer__menu-link' href="#offers">Условия</a></li>
          <li className='footer__list-item'><a className='footer__menu-link' href="#jobs">Вакансии</a></li>
          <li className='footer__list-item'><a className='footer__menu-link' href="#reviews">Отзывы</a></li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__list-item'><a className='footer__menu-link' href="https://yandex.ru/support/praktikum/feedback.html" target='blank'>Помощь</a></li>
          <li className='footer__list-item'><a className='footer__menu-link' href="https://yandex.ru/support/" target='blank'>Справка</a></li>
          <li className='footer__list-item'><a className='footer__menu-link' href="https://code.s3.yandex.net/License%20YSDA.pdf" target='blank'>Лицензия</a></li>          
          <li className='footer__list-item'><a className='footer__menu-link' href="mailto:media@praktikum.yandex.ru" target='blank'>Для СМИ</a></li>
          <li className='footer__list-item'><a className='footer__menu-link' href="https://yandex.ru/legal/praktikum_termsofuse/" target='blank'>Правовая информация</a></li>
        </ul>
      </nav>
    </footer>
  )
};

export default Footer;