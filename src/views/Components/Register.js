import React from "react";

import loginCss from "./Login.css"

function Register() {
  return (
  <div>
    <form className="loginForm">
      <div className="box">
        <div className="inputItem">
          <label>Name: </label> 
          <input type="text" placeholder="Name"></input>
        </div>
        <div className="inputItem">
          <label>Email: </label> 
          <input type="email" placeholder="Email"></input>
        </div>
        <div className="inputItem">
          <label>Password:</label>
          <input type="password" placeholder="Password" required></input>
        </div>
      </div>
      <button>Submit</button>
    </form>
  </div>);
}
export default Register;
