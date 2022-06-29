import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Logo from "../assets/officelogo.png";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const closeNavOnClick = () => {
    setToggleNav(false);
  };

  // document.body.addEventListener("click", () => {
  //   if (toggleNav === true) {
  //     setToggleNav(false);
  //   }
  // });

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

// const Nav = styled.nav`
//   /* display: flex; */
//   /* justify-content: space-between; */
//   /* align-items: center; */
//   height: 95px;
//   /* width: 100vw; */
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   background-color: #000000;
//   /* box-shadow: 0 5px 10px rgb(0, 0, 0); */
// `;

// const List = styled.li`
//   padding: 10px;
//   padding-left: 0;
//   padding-bottom: 0;
//   margin-inline: 5px;
//   color: #000000;
//   text-decoration: none;
//   transition: all 200ms ease;
// `;

// const Item = styled(NavLink)`
//   color: #ffffff;
//   text-decoration: none;
//   transition: all 400ms ease;
//   &.active {
//     color: #5e5e5e;
//     &:hover {
//       text-decoration: none;
//     }
//   }
//   &:hover {
//     text-decoration: underline;
//     cursor: pointer;
//   }
// `;

// const UList = styled.ul`
//   align-self: center;
//   list-style: none;
//   display: flex;
//   align-items: center;
//   justify-content: right;
//   font-size: 30px;
//   margin-inline: 100px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding-right: 40px;
//   @media (max-width: 875px) {
//     margin-inline: 0;
//     padding-right: 0;
//     flex-direction: column;
//     /* padding-top: 45px; */
//     align-self: baseline;
//     align-items: flex-start;
//     /* padding-left: 0; */
//   }
// `;

export default Navbar;
