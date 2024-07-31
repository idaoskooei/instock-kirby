import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo/InStock-Logo_1x.png";
import "./Header.scss";

const Header = () =>  {
    return (
        <header className="header">
          <section className="header__container">
               <Link to= "/" className="header__logo">
                   <img src={Logo}  alt="logo" />
                </Link>
                <div className="header__list">
                    <NavLink to="/warehouse" className="header__list-item" >Warehouse</NavLink>
                    <NavLink to="/inventory"  className="header__list-item">Inventory</NavLink>
                </div>
            </section>
        </header>
    );
}

export default Header;