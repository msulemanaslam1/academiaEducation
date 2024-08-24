import React, { useState } from "react";
import "./FAQs.css";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQs = () => {
  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".faq_container > p, .faq_container > h1", {
      y: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".faq_container > p, .faq_container > h1",
        scroller: "body",
        start: "top 150%",
        end: "top 80%",
        scrub: 3,
      },
    }),
      tl.from(".faq_section", {
        y: 200,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".faq_section",
          scroller: "body",
          start: "top 140%",
          end: "top 90%",
          scrub: 1.5,
        },
      });
  });

  const [showFirstAccordion, setShowFirstAccordion] = useState(false);
  const [showSecondAccordion, setShowSecondAccordion] = useState(false);
  const [showThirdAccordion, setShowThirdAccordion] = useState(false);

  return (
    <div className="faq_container">
      <p style={{ color: "#1eb2a6",textAlign: 'center', fontWeight:"bold"  }}>FAQs</p>
      <h1>Frequently Ask Question</h1>
      <div className="faq_section">
        <div
          className={`faq ${showFirstAccordion ? "changeBack" : ""}`}
          onClick={() => (
            setShowFirstAccordion(!showFirstAccordion),
            setShowSecondAccordion(false),
            setShowThirdAccordion(false)
          )}>
          <h5>How to Enroll This Online Courses?</h5>
          <span>
            {showFirstAccordion ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <p className={`accordionText ${showFirstAccordion ? "show" : ""}`}>
          This is the first item's accordion body. It is hidden by default,
          until the collapse plugin adds the appropriate classes that we use to
          style each element. It's also worth noting that just about any HTML
          can go within the .accordion-body, though the transition does limit
          overflow.
        </p>

        <div
          className={`faq ${showSecondAccordion ? "changeBack" : ""}`}
          onClick={() => (
            setShowSecondAccordion(!showSecondAccordion),
            setShowFirstAccordion(false),
            setShowThirdAccordion(false)
          )}>
          <h5>Where it is hidden by default, until the collapse?</h5>
          <span>
            {showSecondAccordion ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <p className={`accordionText ${showSecondAccordion ? "show" : ""}`}>
          It is hidden by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. It's also worth
          noting that just about any HTML can go within the .accordion-body,
          though the transition does limit overflow.
        </p>

        <div
          className={`faq ${showThirdAccordion ? "changeBack" : ""}`}
          onClick={() => (
            setShowThirdAccordion(!showThirdAccordion),
            setShowFirstAccordion(false),
            setShowSecondAccordion(false)
          )}>
          <h5>Where it is hidden by default, until the collapse?</h5>
          <span>
            {showThirdAccordion ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        <p className={`accordionText ${showThirdAccordion ? "show" : ""}`}>
          It is hidden by default, until the collapse plugin adds the
          appropriate classes that we use to style each element. It's also worth
          noting that just about any HTML can go within the .accordion-body,
          though the transition does limit overflow.
        </p>
      </div>
    </div>
  );
};

export default FAQs;
