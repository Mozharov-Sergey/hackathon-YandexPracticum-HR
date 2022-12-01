import { useState } from "react";
import Button from "../Button/Button";
import "./Form.css";

const Form = ({onSubmit, selectedRole, setSelectedRole}) => {  

  const [course, setCourse] =useState('course')

  const changeSelectRole = (newSelect) => {
    setSelectedRole(newSelect);
  };

  const changeSelectCourse = (newSelect) => {
    setCourse(newSelect);
  };

  return (
    <form
          className="popup__form form"
          onSubmit={onSubmit}
          noValidate
        >
          <div className='form__info'>
            <div className="form__group">
              <input type='text' className='form__input' placeholder='Имя' minLength='2' maxLength='15'></input>
              <input type='text' className='form__input' placeholder='Фамилия' minLength='2' maxLength='15'></input>
            </div>
            <div className="form__group">
              <input type='text' className='form__input' placeholder='E-mail' minLength='2' maxLength='30'></input>
              <input type='tel' className='form__input' placeholder='+7 (000) 000-00-00' id='phone'></input>              
            </div>
            <div className="form__group">
              <div className="form__select-wrapper">
                <select id="sel" className='form__select' value={course} onChange={(event) => changeSelectCourse(event.target.value)}>
                <option className="form__option" disabled value='course'>Направление</option>
                <option className="form__option" value='1'>Программирование</option>
                <option className="form__option" value='2'>Анализ данных</option>
                <option className="form__option" value='3'>Менеджемент</option>
                <option className="form__option" value='4'>Маркетинг</option>
                <option className="form__option" value='5'>Дизайн</option>
                </select> 
              </div>
              <div className="form__select-wrapper">
                <select className='form__select' value={selectedRole} onChange={(event) => changeSelectRole(event.target.value)}>
                <option className="form__option" value='notSelected' disabled>Роль в команде</option>
                <option className="form__option" value='mentor'>Наставник</option>
                <option className="form__option" value='reviewer'>Ревьюер</option>
              </select>
              </div>              
            </div>            
          </div>
          <input type='text' className='form__input' placeholder='Ссылка на ваше резюме' ></input>
          <p className="form__label-input">Убедитесь, что доступ к документу открыт</p>
          <textarea id="text_area" type='text' className='form__input' placeholder='Расскажите о своих навыках' rows="1"></textarea>
          <div className="text_area_div"></div>
          <div className="form__check">
            <input type="checkbox" className="form__custom-checkbox" id="happy" name="happy" value="yes"/>
            <label htmlFor="happy"></label>
            <label className="form__custom-checkbox-label" htmlFor="happy">Даю согласие АНО ДПО «ШАД» и ООО «ЯНДЕКС» на обработку персональных данных для рассмотрения анкеты</label>
          </div> 
          <Button text='Отправить' width='185px'/>         
        </form>
  );
};

export default Form;