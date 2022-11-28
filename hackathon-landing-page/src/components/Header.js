import headerLogo from '../images/headerLogo.svg';
import Button from './Button/Button';

export default function Header() {
  return(
      <header className="header">
      <a href="https://practicum.yandex.ru/" className="header__logo">
        <img src={headerLogo} alt="логотип яндекс-практикум"></img></a>
      <nav className="header__navigation">
      <ul className="header__links">
        <li><a href="#tasks" className="header__link">Задачи</a></li>
        <li><a href="#courses" className="header__link">Факультеты</a></li>
        <li><a href="#offers" className="header__link">Условия</a></li>
        <li><a href="#job" className="header__link">Вакансии</a></li>
        <li><a href="#reviews" className="header__link">Отзывы</a></li>
        <li><a href="#footer" className="header__link">Контакты</a></li>
      </ul>
      </nav>
      <Button text='Начать учить' width='140px'/>
      </header>
  )
}
