import React from "react";
import { about } from "../data/dummydata";
import { Heading } from "../common/Heading";
import logo from "../data/images/logo.png";

export const About = () => {
  return (
    <>
      <section id="about" className="about">
        {about.map((val, i) => (
          <div className="container flex">
            <div
              className="left"
              data-aos="fade-down-right"
              data-aos-duration="1200"
            >
              <img src={logo} alt="" width="70%" />
            </div>
            <div
              className="right"
              data-aos="fade-down-left"
              data-aos-duration="1200"
            >
              <Heading title="About Us" />
              <p>{val.desc1}</p>
              <p>{val.desc2}</p>
              <p>{val.desc3}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
