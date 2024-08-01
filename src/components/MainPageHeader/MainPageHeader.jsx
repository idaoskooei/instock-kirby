import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const MainPageHeader = ({ title, addButtonText, addButtonLink }) => {
  return (
    <div className="main-page-header">
      <h1>{title}</h1>
      <SearchBar placeholder="Search..." />
      <Link to={addButtonLink}>
        <button>{addButtonText}</button>
      </Link>
    </div>
  );
};

export default MainPageHeader;
