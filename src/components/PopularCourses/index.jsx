import React from "react";
import "./PopularCourses.css";
import { PopuCourses } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PopularCourses = () => {
  let tl = gsap.timeline();
  useGSAP(()=>{
    tl.from(".main_container > p, .main_container > h1", {
      y: 100,
      opacity: 0,
      duration: .3,
      stagger:.2,
      scrollTrigger: {
        trigger: ".main_container",
        scroller:"body",
        start:"top 80%",
        end:"top 10%",
        scrub:10
      },
    });
    tl.from(".container", {
      y: 200,
      opacity: 0,
      duration: .7,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".container",
        scroller:"body",
        start:"top 120%",
        end:"top 100%",
        scrub:2
      },
    });
  })
  return (
    <div className="main_container">
      <p>Our Courses</p>
      <h1>Explore Our Popular Online Courses</h1>
      <Swiper
        className="swiper_container"
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop={true}
        breakpoints={{
          200: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
            centeredSlides: false
          },
          1024: {
            slidesPerView: 3
          }
        }}>
        {PopuCourses.map((list, index) => (
          <SwiperSlide className="slider" key={index}>
            <div className="container">
              <div className="upper_container">
                <div className="icon_container">{list.icon}</div>
                <div className="text_container">
                  <h3>{list.title}</h3>
                  <div className="avatar_container">
                    <img src={list.avatar} alt="avatar" />
                    <p>{list.name}</p>
                  </div>
                  <span style={{ color: "#1eb2a6", fontWeight: "500" }}>
                    {list.lectures}
                  </span>
                </div>
              </div>
              <div className="fee">{list.text}</div>
              <button>{list.btnText}</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularCourses;
