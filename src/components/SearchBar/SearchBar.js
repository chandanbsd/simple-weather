import React from "react";
import "./search_bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ setWeatherData }) => {
  let city = undefined;

  const getCity = (e) => {
    city = e.target.value;
  };

  return (
    <div className="search-container">
      <input type="text" onChange={getCity} className="search-box" />
      <span
        onClick={() => {
          setWeatherData((data) => ({ ...data, ...{ city: city } }));
        }}
        className="search-btn"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      </span>
    </div>
  );
};

export default SearchBar;
