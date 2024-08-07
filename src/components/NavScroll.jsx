import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavScroll = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive && "red",
          })}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavScroll;
