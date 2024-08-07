import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavScroll = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default NavScroll;
