import React from "react";
import "./Footer.css";
import {
  FaAddressCard,
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { image9, image10, image11 } from "../../images";
import { MdMan } from "react-icons/md";
import { IoIosCall, IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer_container">
      <section className="logo_con">
        <h2>ACADEMIA</h2>
        <small
          style={{
            fontSize: "9px",
            fontWeight: "bold",
            display: "block",
            marginTop: "0px",
            paddingTop: "0px",
            color: "#1eb2a6",
          }}>
          ONLINE EDUCATION & LEARNING
        </small>
        <p style={{ marginTop: "2rem", fontSize: "14px" }}>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="socialFooter_links">
          <div className="socialFooter">
            <a href="#">
              <FaFacebookF />
            </a>
          </div>
          <div className="socialFooter">
            <a href="#">
              <FaTwitter />
            </a>
          </div>
          <div className="socialFooter">
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
      <section className="explore_con">
        <h4 style={{ marginBottom: "3rem" }}>Explore</h4>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          About us
        </a>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          Services
        </a>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          Courses
        </a>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          Blog
        </a>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          Contact us
        </a>
      </section>
      <section className="quickLinks_con">
        <h4 style={{ marginBottom: "3rem" }}>Quick Links</h4>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          Contact us
        </a>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          Pricing
        </a>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          Terms & Conditions
        </a>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          Privacy
        </a>
        <a href="#">
          <span style={{ color: "#1eb2a6", marginRight: ".4rem" }}>
            <FaArrowRightLong />
          </span>
          Feedbacks
        </a>
      </section>
      <section className="recentPosts_con">
        <h4 style={{ marginBottom: "3rem" }}>Recent Posts</h4>
        <div className="creativeAndInspiration">
          <img src={image9} alt="" />
          <div className="dateAdmin_con">
            <div className="date_con">
              <FaCalendarAlt />
              <span>JAN 18, 2024</span>
            </div>
            <div className="admin_con">
              <MdMan />
              <small>Admin</small>
            </div>
            <p>Creativity and Inspiration</p>
          </div>
        </div>

        <div className="creativeAndInspiration">
          <img src={image10} alt="" />
          <div className="dateAdmin_con">
            <div className="date_con">
              <FaCalendarAlt />
              <span>JAN 18, 2024</span>
            </div>
            <div className="admin_con">
              <MdMan />
              <small>Admin</small>
            </div>
            <p>Creativity and Inspiration</p>
          </div>
        </div>

        <div className="creativeAndInspiration">
          <img src={image11} alt="" />
          <div className="dateAdmin_con">
            <div className="date_con">
              <FaCalendarAlt />
              <span>JAN 18, 2024</span>
            </div>
            <div className="admin_con">
              <MdMan />
              <small>Admin</small>
            </div>
            <p>Creativity and Inspiration</p>
          </div>
        </div>
      </section>
      <section className="question_con">
        <h4 style={{ marginBottom: "3rem" }}>Have a questions?</h4>
        <div className="address_con">
          <span style={{fontSize: '16px'}}>
            <FaAddressCard />
          </span>
          <small>
            203 Fake St. Mountain View, San Francisco, California, USA
          </small>
        </div>

        <div className="phone_con">
          <IoIosCall />
          <small>+2 332 3929 10</small>
        </div>

        <div className="send_con">
          <IoIosSend />
          <small>info@yourdomain.com</small>
        </div>
      </section>
    </div>
  );
};

export default Footer;
