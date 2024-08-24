import React, { useEffect, useState, useRef } from "react";
import "./Facts.css";
import Odometer from "react-odometerjs";
import { GrUserExpert } from "react-icons/gr";
import { GrScheduleNew } from "react-icons/gr";
import { GiBookPile } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";

const Facts = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const [successStories, setSuccessStories] = useState(0);
  const [trustedTutors, setTrustedTutors] = useState(0);
  const [schedules, setSchedules] = useState(0);
  const [courses, setCourses] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      setSuccessStories(0);
      setTrustedTutors(0);
      setSchedules(0);
      setCourses(0);

      const timeoutId = setTimeout(() => {
        setSuccessStories(3000);
        setTrustedTutors(320);
        setSchedules(1000);
        setCourses(587);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [visible]);

  return (
    <div ref={ref} className="fact_container">
      <div className="fact_item">
        <MdManageAccounts style={{ fontSize: "3.5rem" }} />
        <div className="count_container">
          <Odometer value={successStories} />
          <p>SUCCESS STORIES</p>
        </div>
      </div>

      <div className="fact_item">
        <GrUserExpert style={{ fontSize: "3.5rem" }} />
        <div className="count_container">
          <Odometer value={trustedTutors} />
          <p>TRUSTED TUTORS</p>
        </div>
      </div>

      <div className="fact_item">
        <GrScheduleNew style={{ fontSize: "3.5rem" }} />
        <div className="count_container">
          <Odometer value={schedules} />
          <p>SCHEDULES</p>
        </div>
      </div>

      <div className="fact_item">
        <GiBookPile style={{ fontSize: "3.5rem" }} />
        <div className="count_container">
          <Odometer value={courses} />
          <p>COURSES</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
