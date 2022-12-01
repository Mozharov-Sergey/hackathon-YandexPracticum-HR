import '../Popup/Popup.css'

const PopupRole = ({isOpen, onClose, selectedRole, setSelectedRole}) => {

  const handlerCloseOverlay = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={handlerCloseOverlay}>
      <div className="popup-role__content">
        <button
          type="button"
          className="popup-role__close"
          aria-label="Закрыть попап"
          onClick={onClose}
        ></button>
        <h3 className='popup-role__title'>Роль в команде</h3>
        <div className='popup-role__buttons'>
          <button className='popup-role__button'>Наставник</button>
          <button className='popup-role__button'>Ревьюер</button>
        </div>
        <h3 className='popup-role__title'>Направление</h3>
        <div>
          <button className='popup-role__button'>Программирование</button>
          <button className='popup-role__button'>Анализ данных</button>
          <button className='popup-role__button'>Дизайн</button>
          <button className='popup-role__button'>Менеджер</button>
          <button className='popup-role__button'>Маркетинг</button>
        </div>

      </div>
    </div>
  )
}

export default PopupRole;
