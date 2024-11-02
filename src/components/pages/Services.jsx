import React from "react";
import { Heading } from "../common/Heading";
import { services } from "../data/dummydata";
import { Counter } from "./Counter";

export const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <Heading title="Services" />
          <div
            className="content grid2"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            {services.map((item, i) => (
              <div
                className="box"
                data-aos="flip-left"
                data-aos-duration="1200"
              >
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Counter />
    </>
  );
};
