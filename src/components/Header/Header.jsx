import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/InStock-Logo_1x.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="logo">
          <Link className="logo__link" to={"/"}>
            <img className="logo__img" src={Logo} alt="instock-logo" />
          </Link>
        </div>

        <div className="nav">
          <NavLink className="nav__item" to={`/warehouses`}>
            Warehouses
          </NavLink>
          <NavLink className="nav__item" to={`/inventory`}>
            Inventory
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
