import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ placeholder }) => {
    return (
        <div className="search-bar">
            <input type="text" placeholder={placeholder} readOnly />
            <img
                src="../../icons/search-24px.svg"
                alt="Search Icon"
                className="search-icon"
            />
        </div>
    );
};

export default SearchBar;
