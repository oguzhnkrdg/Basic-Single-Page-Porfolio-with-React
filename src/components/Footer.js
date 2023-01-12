import React from 'react';

function Footer() {
  return (
    <div id='footer'>
        <h3>Benimle İletişime Geç</h3>
        <div className='footer-input'>
            <input type="email" placeholder='mail@mail.com' />
            <a href="#">Mail Bırak</a>
        </div>
        <p style={{margin: "50px"}}>2023 &copy; Oğuzhan</p>
    </div>
  )
}

export default Footer;