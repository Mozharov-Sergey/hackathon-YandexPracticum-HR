import { useState } from 'react';
import headerLogo from '../../images/headerLogo.svg';
import Button from '../Button/Button';

export default function Header({handleClick, setSelectedRole}) {

  const [activeBurger, setActiveBurger] = useState(false);

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    document.querySelectorAll('.section-menu').forEach((el, i) => {
      if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {
        document.querySelectorAll(`.header__links a`).forEach((el) => {
          if (el.classList.contains('header__link_active')) {
            el.classList.remove('header__link_active');
          }
        });
        document.querySelectorAll(`.header__links li`)[i].querySelector('a').classList.add('header__link_active')
      }
    })

  });

  const handleClickWithRole = () => {
    setSelectedRole('notSelected')
    handleClick();
  }

  const handleBtnClick = () => {
    setActiveBurger(!activeBurger)
  }

  const styleBurgerBtn = activeBurger ? 'header__burger header__burger_active' : 'header__burger';
  const styleHeaderBtn = activeBurger ? 'header header_active' : 'header';
  const styleHeaderNavigation = activeBurger ? 'header__navigation header__navigation_active' : 'header__navigation';

  return(
      <header className={styleHeaderBtn}>
      <a href="https://practicum.yandex.ru/" className="header__logo">
        <img src={headerLogo} alt="логотип яндекс-практикум"></img></a>
      <nav className={styleHeaderNavigation}>
      <ul className="header__links">
        <li className='header__link-burger' onClick={handleBtnClick}><a href="#tasks" className="header__link">Задачи</a></li>
        <li className='header__link-burger' onClick={handleBtnClick}><a href="#courses" className="header__link">Факультеты</a></li>
        <li className='header__link-burger' onClick={handleBtnClick}><a href="#terms" className="header__link">Условия</a></li>
        <li className='header__link-burger' onClick={handleBtnClick}><a href="#offers" className="header__link">Роли</a></li>
        <li className='header__link-burger' onClick={handleBtnClick}><a href="#reviews" className="header__link">Отзывы</a></li>
        <li className='header__link-burger header__link-burger_active' onClick={handleBtnClick}><a href="#footer" className="header__link">Контакты</a></li>
      </ul>
      </nav>
      <div className='header__buttons' >
        <button className={styleBurgerBtn} onClick={handleBtnClick}></button>
        <div className='header__button'>
          <Button text='Начать учить' handleClick={handleClickWithRole}/>
        </div>
      </div>
      </header>
  )
}
