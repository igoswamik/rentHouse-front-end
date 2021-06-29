import React from "react";
import "./City.css";
function city(props) {
  return (
    <div className="city">
      <img className="city__image" src={props.image} alt="city pic" />
      <span className="city__name">{props.city}</span>
    </div>
  );
}

export default city;
