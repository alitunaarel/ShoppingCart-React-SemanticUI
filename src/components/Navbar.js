import React from "react";
import {Link} from 'react-router-dom'

const Navbar = props => {
  console.log(props);
  return (
    <div>
      <div className="ui pointing secondary menu">
        <a href="/" className="active item">
          BIO SHOP
        </a>

        <div href="/" className="right menu">
          <Link to="/home" className="right item">
            Home
          </Link>
          <Link to="/about" className="right item">
            About
          </Link>
          <a href="/" className="item">
            <i aria-hidden="true" className="cart icon"></i>Cart:
            <span>{props.basketNumber}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
