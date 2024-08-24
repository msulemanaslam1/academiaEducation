import React from "react";
import "./Pricing.css";
import { pricing } from "../../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".mainPricing_con > p, .mainPricing_con > h1", {
      y: 100,
      opacity: 0,
      duration: 3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".mainPricing_con > P, .mainPricing_con > h1",
        scroller: "body",
        start: "top 120%",
        end: "top 80%",
        scrub: 3,
      },
    }),
      tl.from(".pricing_section", {
        y: 250,
        opacity: 0,
        duration: 3,
        stagger: .4,
        scrollTrigger: {
          trigger: ".pricing_section",
          scroller: "body",
          start: "top 170%",
          end: "top 80%",
          scrub: 2,
        },
      });
  });

  return (
    <div className="mainPricing_con">
      <p style={{ textAlign: "center", color: "#1eb2a6", fontWeight:"bold" }}>OUR PRICING</p>
      <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Pricing & Packages</h1>
      <div className="pricing_con">
        {pricing.map(({ plan, price, text, btnText }, index) => (
          <div className="pricing_section" key={price}>
            <p>{plan}</p>
            <div className="price_con">
              <span style={{marginTop: '.3rem'}}>$</span>
              <h1>{price}</h1>
            </div>
            <small style={{opacity: '.6'}}>{text}</small>
            <button>{btnText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
