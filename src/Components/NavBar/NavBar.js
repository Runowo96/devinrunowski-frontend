import React, { useState } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import menuIcon from "../../assets/icons/menu-icon.svg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="nav">
      <img
        src={menuIcon}
        alt="menu"
        className="nav__menu-icon"
        onClick={toggleMenu}
      />
      <h2 className="nav__logo">Devin Runowski</h2>
        <ul className="nav__list-desktop">
          <article className="nav__layout">
            <li>
              <NavLink
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-desktop" : "inactive")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-desktop" : "inactive")}
                to="/about/me"
              >
                About Me
              </NavLink>
            </li>
          </article>
          <artcile className="nav__layout">
            <li>
              <NavLink
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-desktop" : "inactive")}
                to="/projects"
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleMenu}
                className={({ isActive }) => (isActive ? "active-desktop" : "inactive")}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </artcile>
        </ul>

      {isOpen && (
        <ul className="nav__list-mobile">
          <li>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/about/me"
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
