import React from "react";
import "./Header.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Navbar from "../Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Header = () => {
  useGSAP(()=>{
    gsap.from(".best_education_container", {
      y: 200,
      opacity: 0,
      duration: .8,
      delay: 1,
    })
  })
  return (
    <div className="header_container">
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

      <div className="best_education_container">
        <p>WELCOME TO ACADEMIA</p>
        <h1 style={{ textAlign: "left" }}>Best Online Education Expertise</h1>
        <small style={{ display: "block", marginBottom: "1.5rem" }}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </small>
        <div className="buttons">
          <button style={{ background: "#1EB2A6", color: "#ffffff" }}>
            GET STARTED NOW!{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </button>
          <button style={{ background: "#ffffff", color: "#1EB2A6" }}>
            VIEW COURSE{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
