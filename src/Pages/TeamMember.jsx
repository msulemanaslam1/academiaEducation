import React from "react";
import Header2 from "../components/Header2";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Facts from "../components/Facts";
import Team from "../components/Team";

function TeamMember() {
  return (
    <>
      <Header2 />
      <Team/>
      <Facts />
      <Newsletter />
      <Footer />
    </>
  );
}

export default TeamMember;
