import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <div className="nav-div">
        <ul>
          <li>
            <Link to="/" className="nav_link">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/register" className="nav_link">
              Register
            </Link>
          </li> */}
          <li>
            <Link to="/login" className="nav_link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
