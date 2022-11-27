import { useState } from 'react';
import './Question.css';

const Question = ({question}) => {

const [textVisible, setTextVisible] = useState(false);

const haandleClick = () => {
  textVisible ? setTextVisible(false) : setTextVisible(true)
}

return ( 
      <li className="questions__item" onClick={haandleClick}>
        <div className="questions__item-group">
          <h3 className="questions__caption">{question.title}</h3>
          <div className={`questions__img ${textVisible ? 'questions__img_active' : ''}`}></div>
        </div>
        <p className={`questions__block ${textVisible ? 'questions__block_active' : ''}`}>
          {question.text}
        </p>
      </li>   
  )
}

export default Question;