import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <nav>
        <div className={`links ${showSidebar ? "show" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/courses">All Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/team">Team</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="certificate">
          <a href="#">Get Certificate</a>
        </div>
        <div
          className="menu_container"
          onClick={() => setShowSidebar(!showSidebar)}>
          <FaBars className="menu" />
          <span>Menu</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
