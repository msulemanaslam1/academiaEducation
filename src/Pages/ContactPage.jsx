import React from "react";
import Header2 from "../components/Header2";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function ContactPage() {
  return (
    <>
      <Header2 />
      <Contact/>
      <Newsletter />
      <Footer />
    </>
  );
}

export default ContactPage;