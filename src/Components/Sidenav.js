import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Sidenav.css";
function Sidenav() {
  const openNav = () => {
    if (document.getElementById("mySidenav")) {
      document.getElementById("mySidenav").style.width = "250px";
    }
  };

  const closeNav = () => {
    if (document.getElementById("mySidenav")) {
      document.getElementById("mySidenav").style.width = "0px";
    }
  };
  return (
    <div>
      <div id="mySidenav" class="sidenav">
        <span class="closebtn" onClick={closeNav}>
          &times;
        </span>
        <span>Profile</span>
        <span>Setting</span>
        <span>About</span>
        <span>SignOut</span>
      </div>

      <span className="open__button" onClick={openNav}>
        <AccountCircleIcon id="profile__icon" />
      </span>
    </div>
  );
}

export default Sidenav;