import React from "react";
import Header2 from "../components/Header2";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import FAQs from "../components/FAQs";

function PricingPage() {
  return (
    <>
      <Header2 />
      <Pricing />
      <FAQs/>
      <Newsletter />
      <Footer />
    </>
  );
}

export default PricingPage;
