import { useState } from "react";
import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ placeholder, onSearchSubmit }) => {
    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            onSearchSubmit(search);
        }
    };

    return (
        <div className="search-bar">
            <input
                className="search-input"
                type="text"
                value={search}
                onChange={handleSearchChange}
                onKeyDown={handleEnter}
                placeholder={placeholder}
            />
        </div>
    );
};

export default SearchBar;
