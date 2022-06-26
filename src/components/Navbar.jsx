import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Logo from "../assets/officelogo.png";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const closeNavOnClick = () => {
    setToggleNav(false);
  };

  return (
    <>
      <nav className="main-nav">
        <ul className="nav-links-container">
          <div className="left">
            <li className="nav-links" id="noborder">
              <NavLink
                to={"/theoffice"}
                className="logo"
                onClick={closeNavOnClick}
              >
                <img src={Logo} alt="" height="auto" width="158.94px" />
              </NavLink>
            </li>
          </div>
          <div className="right" id={toggleNav ? "opennav" : ""}>
            <li className="nav-links">
              <NavLink
                to={"/characters"}
                className="atags"
                onClick={closeNavOnClick}
              >
                Employees
              </NavLink>
            </li>
            <li className="nav-links">
              <NavLink
                to={"/seasons"}
                className="atags"
                onClick={closeNavOnClick}
              >
                Seasons
              </NavLink>
            </li>
          </div>
        </ul>
        <GiHamburgerMenu
          className="ham"
          onClick={() => {
            setToggleNav(!toggleNav ? true : false);
            console.log(toggleNav);
          }}
        />
      </nav>
    </>
  );
}

export default Navbar;
