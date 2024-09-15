import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-info'>
          <h2>Contact Us</h2>
          <p>ABC Restaurant</p>
          <p>05, Jaffna Bus Stand</p>
          <p>021-2212222</p>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        &copy; ABC Restaurant 2024
      </p>
    </div>
  );
};

export default Footer;
