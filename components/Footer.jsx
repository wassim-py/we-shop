import React from 'react';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>© 2022 Wassim Ezaiim Shop</p>
      <p className='icons'>
        <AiOutlineInstagram/>
        <AiFillFacebook/>
      </p>
    </div>
  )
}

export default Footer