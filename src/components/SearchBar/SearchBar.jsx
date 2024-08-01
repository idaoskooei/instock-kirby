import React from "react";
import "./SearchBar.scss";
import searchIcon from "../../assets/Icons/search-24px.svg"

const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder={placeholder} readOnly />
      <img
        src={searchIcon}
        alt="Search Icon"
        className="search-icon"
      />
    </div>
  );
};

export default SearchBar;
