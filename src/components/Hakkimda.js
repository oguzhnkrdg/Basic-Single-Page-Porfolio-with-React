import React from 'react';
import hakkimdaimg from '../img/logo.png';

function Hakkimda() {
  return (
    
    <div id='hakkimda'>
        <div className='hakkimda-model'>
            <img src={hakkimdaimg} alt='hakkimda-image' />
        </div>
        <div className='hakkimda-text'>
            <h2>Hakkımda</h2>
            <h3>Merhaba! Ben <span>Oğuzhan</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sit, unde quo harum voluptatum dolorum voluptatem tenetur vitae ex voluptatibus ab explicabo incidunt magnam ut molestias possimus optio quis iusto, quod asperiores! Architecto doloribus eius accusantium praesentium eveniet culpa ducimus?</p>
            <button>LinkedIn</button>
        </div>
    </div>
  )
}

export default Hakkimda;