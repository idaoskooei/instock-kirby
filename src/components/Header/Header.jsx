import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/InStock-Logo_1x.png";
import "./Header.scss";

const Header = () => {
  return (
      <header className="header">
          
          <div className='logo'>
              <Link to={'/'}>
                  <img className="logo__img" src={Logo} alt="instock-logo"/>
              </Link>
          </div>

          <div className='nav'>
              <NavLink className='nav__item' to={`/`}>Warehouse</NavLink>
              <NavLink className='nav__item' to={`/inventory`}>Inventory</NavLink>
          </div>
          
      </header>
  );
};

export default Header;
