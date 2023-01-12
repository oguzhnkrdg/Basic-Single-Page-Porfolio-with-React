import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar />
        <div className='isim'>
            <h1>Bu portfölyö <span>React JS</span> ile yapılmıştır</h1>
            <p className='details'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, tempora mollitia!</p>
            <div className='header-btns'>
                <a href="mailto:mail@mail.com" className='cv-btn'>iletişim</a>
                <a href="https://www.behance.net/oguzhnkrdg" className='cv-btn1'>Behance Profili</a>
            </div>
        </div>
        <div className='arrow'></div>
    </div>
  )
}

export default Header;