import React from 'react';

function Box(props) {
  return (
    <div className='s-box'>
        <div className='s-b-img'>
            <img src={props.image} alt='' />
        </div>
        <div className='s-b-text'>
            <span>{props.heading}</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi quis aperiam natus ullam voluptate! Alias distinctio nisi necessitatibus quas.</p>
            <a href="#" className='cv-btn'>Fiyat Al</a>
        </div>
    </div>
  )
}

export default Box;