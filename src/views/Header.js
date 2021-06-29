import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__brand">
        <Link to="/">
          <img
            className="header__logo"
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="logo"
          ></img>
          <span className="brand__name">RentHouse</span>
        </Link>
      </div>
      {/* <div className="header__Search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="search by city name/ zip code"
        />
        <SearchIcon className="header_searchIcon" />
      </div> */}
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne"> Hello Guest</span>
            <span className="header__optionLineTwo"> SignIn</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">New User?</span>
          <span className="header__optionLineTwo">Register</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
