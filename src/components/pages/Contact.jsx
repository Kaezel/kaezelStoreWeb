import React from "react";
import { Heading } from "../common/Heading";
import { contact } from "../data/dummydata";

export const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div>
            <Heading title="Let's Level Up Together" />
          </div>
          <div
            className="content grid2"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            {contact.map((item, i) => (
              <div
                className="box"
                data-aos="flip-left"
                data-aos-duration="1200"
              >
                <div
                  className="img"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                >
                  <img src={item.cover} alt="" />
                </div>
                <div className="text">
                  <h3 data-aos="fade-right" data-aos-duration="1200">
                    {item.title}
                  </h3>
                  <p data-aos="fade-left" data-aos-duration="1200">
                    {item.desc}
                  </p>
                  <button
                    className="primaryBtn"
                    data-aos="zoom-in-up"
                    data-aos-duration="1200"
                    onClick={() => window.open(item.linkTo, "_blank")}
                  >
                    {item.btnTitle}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
