import './CardReview.css';
import 'swiper/css';

const  CardReview = ({card}) => {
  return (
      <div className="reviews__items">
          <div className="reviews__photo-container">
            <img src={card.img} alt={card.name} className="reviews__photo"/>
          </div>
          <div className='reviews__info'>
            <h3 className="reviews__name">{card.name}</h3>
            <p className="reviews__job">{card.job}</p>
            <p className="reviews__text">{card.text}</p>
          </div>          
      </div>    
  );
}

export default CardReview;