import Form from '../Form/Form';
import './Popup.css'

const Popup = ({isOpen, onClose, selectedRole, setSelectedRole}) => {

  const handlerCloseOverlay = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} onClick={handlerCloseOverlay}>
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">Откликнуться</h2>
        <Form onSubmit={onClose} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>
      </div>
    </div>
  )
}

export default Popup;
