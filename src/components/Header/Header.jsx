import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/InStock-Logo_1x.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="header__list">
          <NavLink
            to="/warehouse"
            className="header__list-item"
            activeclassname="header__list-item--active"
          >
            Warehouses
          </NavLink>
          <NavLink
            to="/inventory"
            className="header__list-item"
            activeclassname="header__list-item--active"
          >
            Inventory
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
