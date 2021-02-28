import React from 'react';
import './Card.css';

const Card = (props) => {
  const {frontImg, backImg, flipped, onClick} = props;

  const img = flipped ? frontImg : backImg;

  return (
    
    <div className='Card col-12 col-sm-6 col-md-3' onClick={onClick}>
       <img src={img} alt=''  />

    </div>
  );

};

export default Card;
