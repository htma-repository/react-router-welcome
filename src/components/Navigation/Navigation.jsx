import React from "react";
import { NavLink } from "react-router-dom";

import "../../scss/navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__link">
          <NavLink
            className={(activeLink) => (activeLink.isActive ? "active" : "")}
            to={"/welcome"}
          >
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(activeLink) => (activeLink.isActive ? "active" : "")}
            to={"/product"}
          >
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
