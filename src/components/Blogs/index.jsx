import React from "react";
import "./Blogs.css";
import { blogs } from "../../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Blogs = () => {
  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".mainBlog_container > p, .mainBlog_container > h1", {
      y: 100,
      opacity: 0,
      duration: 3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".mainBlog_container > P, .mainBlog_container > h1",
        scroller: "body",
        start: "top 130%",
        end: "top 80%",
        scrub: 3,
      },
    }),
      tl.from(".mainBlog_section", {
        y: 200,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
          trigger: ".mainBlog_section",
          scroller: "body",
          start: "top 140%",
          end: "top 55%",
          scrub: 2,
        },
      });
  });

  return (
    <div className="mainBlog_container">
      <p
        style={{
          textAlign: "center",
          color: "#1eb2a6",
          marginBottom: ".5rem",
          fontWeight:"bold"
        }}>
        OUR BLOGS
      </p>
      <h1 style={{ textAlign: "center" }}>Recent from Blogs</h1>
      <div className="mainBlog_section">
        {blogs.map((list, index) => (
          <div className="blog_container" key={index}>
            <img className="image" src={list.image} alt={list.admin} />
            <div className="blogText_container">
              <div className="icons_container">
                <div className="adminBlog_con">
                  <p>{list.adminIcon}</p>
                  <small>{list.admin}</small>
                </div>
                <div className="dateBlog_con">
                  <p>{list.dateIcon}</p>
                  <small>{list.date}</small>
                </div>
                <div className="commentBlog_con">
                  <p>{list.commentIcon}</p>
                  <small style={{ color: "#1eb2a6", opacity: 1 }}>
                    {list.comment}
                  </small>
                </div>
              </div>
              <p style={{ fontWeight: "bolder", margin: "1rem 0rem" }}>
                {list.title}
              </p>
              <small>{list.text}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
