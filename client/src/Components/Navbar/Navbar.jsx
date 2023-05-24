import React from 'react'
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="items">
            <img src="/images/en.png" alt="Language"/>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="items">
            <span>INR</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="items">
            <Link className="link" to="/products/1">Women</Link>
          </div>
          <div className="items">
            <Link className="link" to="/products/2">Men</Link>
          </div>
          <div className="items">
            <Link className="link" to="/products/3">Kids</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">WYNTRA</Link>
        </div>
        <div className="right">
          <div className="items">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="items">
            <Link className="link" to="/about">About</Link>
          </div>
          <div className="items">
            <Link className="link" to="/contact">Contact</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <AccountCircleOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
