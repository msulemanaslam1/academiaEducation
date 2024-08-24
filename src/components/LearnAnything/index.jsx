import React, { useRef } from "react";
import "./LearnAnything.css";
import { image2 } from "../../images";
import { GiBookAura } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LearnAnything = () => {
  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".image_container img, .text1_container", {
      y: 300,
      opacity: 0,
      duration: 1.5,
      stagger: true,
      scrollTrigger: {
        trigger: ".image_container img",
        scroller: "body",
        start: "top 190%",
        end: "top 100%",
        scrub: 5,
      },
    });
  });
  return (
    <div>
      <div className="learnAnything_container">
        <div className="image_container">
          <img src={image2} alt="girl image" />
        </div>
        <div className="text1_container">
          <p>LEARN ANYTHING</p>
          <h1 style={{ textAlign: "left" }}>
            Benefits About Online Learning Expertise
          </h1>
          <div className="online_classes">
            <span>
              <GiBookAura />
            </span>
            <div>
              <h4>Online Classes</h4>
              <small style={{ opacity: ".6" }}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </small>
            </div>
          </div>
          <div className="online_classes">
            <span>
              <GrCertificate />
            </span>
            <div>
              <h4>Earn A Certificates</h4>
              <small style={{ opacity: ".6" }}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </small>
            </div>
          </div>
          <div className="online_classes">
            <span>
              <GrUserExpert />
            </span>
            <div>
              <h4>Learn With Expert</h4>
              <small style={{ opacity: ".6" }}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAnything;
