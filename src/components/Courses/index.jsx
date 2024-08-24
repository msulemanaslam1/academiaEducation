import React, { useRef } from "react";
import "./Courses.css";
import { courses } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  let tl = gsap.timeline();
  useGSAP(()=>{
    tl.from(".main_container1 > p, .main_container1 > h1", {
      y: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".main_container1 > P, .main_container1 > h1",
        scroller: "body",
        start: "top 200%",
        end: "top 40%",
        scrub: 3,
      },
    }),
      tl.from(".course_section", {
        y: 100,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".course_section",
          scroller:"body",
          start:"top 120%",
          end:"top 50%",
          scrub:1.5,
        },
      });
  })
  return (
    <div className="main_container1">
      <p style={{ color: "#1eb2a6", textAlign:"center",fontSize:"18px" ,fontWeight:"bold" }}>Courses</p>
      <h1 style={{ textAlign: "center", marginBottom: "4rem" }}>
        Browse Our Online Courses
      </h1>
      <div className="courses">
        {courses.map((list, index) => (
          <section className="course_section" key={index}>
            <div>
              <span className="icon">{list.icon}</span>
              <h4>{list.title}</h4>
            </div>
            <p className="text">{list.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Courses;
