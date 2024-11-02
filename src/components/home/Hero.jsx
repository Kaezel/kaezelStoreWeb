import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <>
      <section id="hero" className="hero">
        {home.map((val, i) => (
          <div className="heroContainer">
            <h3 data-aos="zoom-in" data-aos-duration="1000">
              {val.text}
            </h3>
            <h1 data-aos="zoom-in" data-aos-duration="1500">
              <Typewriter
                options={{
                  strings: [`${val.slo1}`, `${val.slo2}`],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 25,
                }}
              />
            </h1>
            <p data-aos="zoom-in" data-aos-duration="2000">
              {val.desc}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};
