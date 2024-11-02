import React from "react";
import Slider from "react-slick/lib/slider";
import { Heading } from "../common/Heading";
import { testimonials } from "../data/dummydata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section id="testimonials" className="testimonials">
        <div className="container">
          <Heading title="Testimonials" />
          <Slider {...settings}>
            {testimonials.map((val, i) => (
              <div className="box">
                <div
                  className="img"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <img src={val.image} alt="" />
                </div>
              </div>
            ))}
          </Slider>
          <button
            className="primaryBtn"
            onClick={() =>
              window.open("https://bit.ly/testikaezelstore", "_blank")
            }
            data-aos="zoom-out"
            data-aos-duration="1200"
          >
            See More
          </button>
        </div>
      </section>
    </>
  );
};
