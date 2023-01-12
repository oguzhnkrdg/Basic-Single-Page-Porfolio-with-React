import React from 'react';
import Box from './Box';
import image1 from '../img/image1.png';
import image2 from '../img/image2.png';

function Hizmetler() {
  return (
    <div className='hizmetler'>
         <div className='s-heading'>
        <h1>Hizmetler</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='b-container'>
        <Box image={image1} heading='Kurumsal Kimlik' />
        <Box image={image2} heading='Web Tasarım' />
        <Box image={image1} heading='Mboil Uygulama' />
      </div>
    </div>
  )
}

export default Hizmetler;