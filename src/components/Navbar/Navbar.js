import React from "react";
import logo from "../../assets/images/deepdivelogo.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <img src={logo} alt="calsy-logo" className="logo" />
        <div className="d-flex justify-content-start navlink">
          <ul>
            <li>Log in </li>
          </ul>
          <button className="navbar-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
