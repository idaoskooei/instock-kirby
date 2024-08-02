import "./MainPageHeader.scss";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const MainPageHeader = ({
    title,
    addButtonText,
    addButtonLink,
    onSearchSubmit,
}) => {
    return (
        <div className="main-page-header">
            <h1 className="main-page-title">{title}</h1>
            <div className="main-page-toorbar">
                <SearchBar
                    placeholder="Search..."
                    onSearchSubmit={onSearchSubmit}
                />
                <Link to={addButtonLink}>
                    <button className="btn">{addButtonText}</button>
                </Link>
            </div>
        </div>
    );
};

export default MainPageHeader;
