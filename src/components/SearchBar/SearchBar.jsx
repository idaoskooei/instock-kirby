import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-bar">
      <input className="search-input" type="text" placeholder={placeholder} readOnly />
    </div>
  );
};

export default SearchBar;
