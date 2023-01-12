import React from 'react';
import { Link } from 'react-scroll';
import logo from '../img/logo.png';
function Navbar() {
  return (
    <div>
        <nav>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt="logo" />
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={1000}>Anasayfa</Link></li>
                <li><Link to='hakkimda' smooth={true} duration={1000}>Hakkımda</Link></li>
                <li><Link to='hizmetler' smooth={true} duration={1000}>Hizmetler</Link></li>
                <li><Link to='footer' smooth={true} duration={1000}>İletişim</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;