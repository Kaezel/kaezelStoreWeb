import React from "react";
import { Heading } from "../common/Heading";
import { howitworks } from "../data/dummydata";
import CountUp from "react-countup";

export const HowItWork = () => {
  return (
    <>
      <section id="howitworks" className="howitworks">
        <div className="container">
          <Heading title="How It Works" />
          <div
            className="content grid4"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            {howitworks.map((item, i) => (
              <div
                className="box"
                data-aos="flip-left"
                data-aos-duration="1200"
              >
                <div className="boxhead">
                  <h1>
                    <CountUp enableScrollSpy duration={2} end={item.id} />
                  </h1>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
