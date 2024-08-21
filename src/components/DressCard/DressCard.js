import React from 'react';
import "./DressCard.css";
import highRatingIcon from "./high-rating.png"
import lowRatingIcon from "./low-rating.png"

function DressCard({ imgUrl, title, description, isHighRating }) {
  return (
    <div className='dress-card'>
        <img src={imgUrl} className='dress-card-image' alt='dress'/>

      <h1 className='dress-card-title'>
        {title}
        </h1>
      <p>
        {description}
        </p>

        <img src={isHighRating ? highRatingIcon : lowRatingIcon} className='dress-card-icon' alt='High Rating'/>
    </div>
  );
}

export default DressCard;
