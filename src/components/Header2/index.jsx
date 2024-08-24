import React, { useState, useEffect } from "react";
import "./Header2.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "../Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header2 = () => {
  const [text, setText] = useState("");

  const location = useLocation();

  useEffect(() => {
    const pathName = location.pathname.substring(1);
    const formattedText = pathName.charAt(0).toUpperCase() + pathName.slice(1);
    setText(formattedText);
  }, [location]);

  const displayContent = () => {
    switch (text) {
      case "Courses":
        return <h2>Explore Courses</h2>;
      case "About":
        return <h2>About us</h2>;
      case "Team":
        return <h2>Meet Our Team</h2>;
      case "Pricing":
        return <h2>Choose The Right Plan</h2>;
      case "Journal":
        return <h2>Blog Posts</h2>;
      case "Contact":
        return <h1>Contact us</h1>;
      default:
        break;
    }
  };

  return (
    <div className="header2_container">
      <div className="logoLinks_container">
        <div className="logo_container">
          <h2>ACADEMIA</h2>
          <small
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              display: "block",
              marginTop: "0px",
              paddingTop: "0px",
              color: "white",
            }}>
            ONLINE EDUCATION & LEARNING
          </small>
        </div>
        <div className="social_links">
          <div className="social">
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
          <div className="social">
            <a href="#">
              <FaTwitter />
            </a>
          </div>
          <div className="social">
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <Navbar />

      <section className="centralSection">
        <div className="homeLink">
          <Link className="link" to="/">
            Home
          </Link>
          <span style={{ display: "block", marginTop: ".2rem" }}>
            <FaChevronRight />
          </span>
        </div>
        <p style={{ display: "flex" }}>
          {text}
          <span style={{ display: "block", marginTop: ".2rem" }}>
            <FaChevronRight />
          </span>
        </p>
      </section>
      <section className="dynamicContentSection">{displayContent()}</section>
    </div>
  );
};

export default Header2;
