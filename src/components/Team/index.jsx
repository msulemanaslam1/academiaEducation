import React from "react";
import "./Team.css";
import { team } from "../../data";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Team = () => {
  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".team_member", {
      y: 200,
      opacity: 0,
      duration: 4,
      stagger: 0.4,
      scrollTrigger: {
        trigger: ".team_member",
        scroller: "body",
        start: "top 150%",
        end: "top 30%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="team_con">
      <div className="teamMembers_section">
        {team.map((list, index) => (
          <div className="team_member">
            <div className="photo_con">
              <img src={list.image} alt={list.title} />
              <div className="socialTeam_links">
                <div className="socialIcon facebook">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="socialIcon twitter">
                  <a href="#">
                    <FaTwitter />
                  </a>
                </div>
                <div className="socialIcon instagram">
                  <a href="#">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="position_con">
              <h4>{list.title}</h4>
              <small>{list.position}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
