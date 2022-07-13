import React from "react";
import Logo from "../../images/logo.png";
import SearchBar from "../SearchBar/SearchBar";
import "./navbar.css";

const NavBar = ({ setWeatherData }) => {
  return (
    <nav className="nav-bar">
      <span className="nav-bar__item">
        <img src={Logo} alt="Logo" className="nav-logo" />
      </span>
      <span className="nav-bar__item">
        <SearchBar setWeatherData={setWeatherData} />
      </span>
      <span className="nav-bar__item" id="nav-temp-toggle">
        C/F
      </span>
    </nav>
  );
};

export default NavBar;
