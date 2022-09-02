import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const FooterBanner = ({footerBanner : { discount, largeText2, largeText3, saleTime,desc, smallText, midText, product2, buttonText, image2, bannerColor }}) => {
  return (
    <div className='footer-banner-container' style={{backgroundColor: `${bannerColor}`}}>
      <div className='banner-desc'>
        <div className='left'>
          <p>{discount}</p>
          <h3>{largeText2}</h3>
          <h3>{largeText3}</h3>
          <p>{saleTime}</p>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product2}`}>
            <button type='button' style={{color: `${bannerColor}`}}>{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image2)} className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default FooterBanner