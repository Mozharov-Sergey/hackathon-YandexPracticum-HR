import headerLogo from '../images/headerLogo.svg';
import Button from './Button/Button';

export default function Header({handleClick, setSelectedRole}) {

  const handleClickWithRole = () => {
    setSelectedRole('notSelected')
    handleClick();
  }

  return(
      <header className="header">
      <a href="https://practicum.yandex.ru/" className="header__logo">
        <img src={headerLogo} alt="логотип яндекс-практикум"></img></a>
      <nav className="header__navigation header__navigation_active">
      <ul className="header__links">
        <li className='header__link-burger'><a href="#tasks" className="header__link">Задачи</a></li>
        <li className='header__link-burger'><a href="#courses" className="header__link">Факультеты</a></li>
        <li className='header__link-burger'><a href="#offers" className="header__link">Условия</a></li>
        <li className='header__link-burger'><a href="#job" className="header__link">Вакансии</a></li>
        <li className='header__link-burger'><a href="#reviews" className="header__link">Отзывы</a></li>
        <li className='header__link-burger'><a href="#footer" className="header__link">Контакты</a></li>
      </ul>
      </nav>
      <div className='header__buttons'>
        <button className='header__burger'></button>
        <div className='header__button'>
          <Button text='Начать учить' width='140px'handleClick={handleClickWithRole}/>
        </div>
      </div>
      </header>
  )
}
