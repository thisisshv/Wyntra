import React from 'react';
import "./Footer.scss";
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur iusto facere, corrupti illo et quam commodi modi neque nam odit nemo asperiores perspiciatis inventore alias voluptate porro sequi quasi. Fugiat.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo maxime, ipsam eum eveniet architecto libero quibusdam rem quidem quae repudiandae necessitatibus. Dicta tenetur fugit maiores consequatur suscipit iure aut.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Wyntra</span>
          <span className="copyright">
            <div className="copyright-icon">
              <CopyrightOutlinedIcon/>
            </div>
            Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="Payment Options"/>
        </div>
      </div>
    </div>
  )
}

export default Footer
