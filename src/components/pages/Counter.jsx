import React from "react";
import { counter } from "../data/dummydata";
import CountUp from "react-countup";

export const Counter = () => {
  return (
    <>
      <div className="hero counter">
        <div
          className="container grid3h grid3v"
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          {counter.map((item, i) => (
            <div className="box">
              <i>{item.icon}</i>
              <h1 className="heading">
                <CountUp enableScrollSpy duration={2} end={item.num} />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
