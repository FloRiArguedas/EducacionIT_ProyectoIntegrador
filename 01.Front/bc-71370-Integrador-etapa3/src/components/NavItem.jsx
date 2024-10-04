import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({item}) => {
  return (
    <li className="nav-bar__nav-item">
      <NavLink to={item.ruta} className="nav-bar__nav-link">
        {item.nombre}
      </NavLink>
    </li>
  );
};

export default NavItem;
