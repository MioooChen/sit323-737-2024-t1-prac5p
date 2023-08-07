import React from 'react';
import { Link } from 'react-router-dom';

function renderStars(rating) {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
  
    const starsArray = [];
    for (let i = 0; i < fullStars; i++) {
      starsArray.push(<i key={i} className="fas fa-star"></i>);
    }
  
    if (hasHalfStar) {
      starsArray.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
  
    const remainingStars = totalStars - starsArray.length;
    for (let i = 0; i < remainingStars; i++) {
      starsArray.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
  
    return starsArray;
  }
function CardsItem(props) {
  return (
    <>
      <li className='cards_item'>
        <Link className='cards_item_link' to={props.path}>
          <figure className='cards_item_pic-wrap' data-category={props.label}>
            <img
              className='cards_item_img'
              alt='Developers Image'
              src={props.src}
            />
          </figure>
          <div className='cards_item_info'>
            <h3 className='cards_item_text1'>{props.text1}</h3>
            <h5 className='cards_item_text'>{props.text}</h5>
            <div className="rating">
              {renderStars(props.rating)}
            </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardsItem;