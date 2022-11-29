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
        <img src={headerLogo} alt="Панда"></img></a>
      <nav className="header__navigation">
      <ul className="header__links">
        <li><a href="#tasks"  className="header_link">Задачи</a></li>
        <li><a href="#courses" className="header_link">Факультеты</a></li>
        <li><a href="#offers" className="header_link">Условия</a></li>
        <li><a href="#job" className="header_link">Вакансии</a></li>
        <li><a href="#reviews" className="header_link">Отзывы</a></li>
        <li><a href="#footer" className="header_link">Контакты</a></li>
      </ul>
      </nav>
      <Button text='Начать учить' width='140px' handleClick={handleClickWithRole}/>
      </header>
  )
}
