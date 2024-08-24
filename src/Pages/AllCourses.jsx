import React from "react";
import Header2 from "../components/Header2";
import Courses from "../components/Courses";
import PopularCourses from "../components/PopularCourses";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function AllCourses() {
  return (
    <>
      <Header2 />
      <Courses />
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default AllCourses;
