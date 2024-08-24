import React from "react";
import "./Testimonial.css";
import { testimonial } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".main_container2 > p, .main_container2 > h1", {
      y: 100,
      opacity: 0,
      duration: 3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".main_container2 > P, .main_container2 > h1",
        scroller: "body",
        start: "top 120%",
        end: "top 80%",
        scrub: 3,
      },
    }),
      tl.from(".testimonial_container", {
        y: 100,
        opacity: 0,
        duration: 3,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".testimonial_container",
          scroller: "body",
          start: "top 140%",
          end: "top 70%",
          scrub: 2,
        },
      });
  });

  return (
    <div className="main_container2">
      <p
        style={{
          color: "#1eb2a6",
          textAlign: "center",
          fontWeight: "bold",
        }}>
        TESTIMONIAL
      </p>
      <h1>Our Successful Students</h1>
      <section>
        <Swiper
          className="swiper_container"
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1000: {
              slidesPerView: 3,
            },
          }}>
          {testimonial.map((list, index) => (
            <SwiperSlide className="slider" key={index}>
              <div className="testimonial_container">
                <div className="image_container">
                  <img className="image" src={list.image} alt={list.title} />
                  <div className="title_container">
                    <p style={{ fontWeight: "bold" }}>{list.title}</p>
                    <p>{list.position}</p>
                  </div>
                </div>
                <p style={{ fontSize: "14px", opacity: ".7" }}>{list.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;
