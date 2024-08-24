import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact_con">
      <div className="map_con">
        <div style={{width:'100%'}}>
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=198%20West%2021th%20Street,%20Suite%20721%20New%20York%20NY%2010016+(Academia)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      </div>
      <div className="form_con">
        <h2>Contact us</h2>
        <p>We're open for any suggestion or just to have a chat</p>
        <div className="address_con">
          <div className="address">
            <h4>Address</h4>
            <small>198 West 21th Street, Suite 721 New York NY 10016</small>
          </div>
          <div className="email">
            <h4>Email</h4>
            <small>info@yoursite.com</small>
          </div>
          <div className="phone">
            <h4>Phone</h4>
            <small>+ 1235 2355 98</small>
          </div>
        </div>
        <form action="">
          <input
            className="nameInput"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <input
            className="emailInput"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <input
            className="subjectInput"
            type="text"
            name=""
            id=""
            placeholder="Subject"
          />
          <textarea
            name=""
            id=""
            placeholder="Create a message here"
            rows={5}></textarea>
          <button>SEND MESSAGE</button>
        </form>
        <h4>Follow us here</h4>
        <div className="form_links">
          <Link className="link" to="/">
            FACEBOOK
          </Link>
          <Link className="link" href="/">
            TWITTER
          </Link>
          <Link className="link" href="/">
            INSTAGRAM
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
