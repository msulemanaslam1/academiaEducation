import React from "react";
import Header2 from "../components/Header2";
import Courses from "../components/Courses";
import PopularCourses from "../components/PopularCourses";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import LearnAnything from "../components/LearnAnything";
import Facts from "../components/Facts";
import Testimonial from "../components/Testimonial";

function About() {
  return (
    <>
      <Header2 />
      <LearnAnything/>
      <Facts/>
      <Testimonial/>
      <Newsletter />
      <Footer />
    </>
  );
}

export default About;
