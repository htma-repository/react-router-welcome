import React from "react";
import { NavLink } from "react-router-dom";

import "../../scss/navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__links">
        <li className="navigation__link">
          <NavLink activeClassName="active" to={"/welcome"}>
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to={"/product"}>
            Product
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
