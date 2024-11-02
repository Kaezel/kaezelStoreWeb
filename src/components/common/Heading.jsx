import React from "react";

export const Heading = ({ title }) => {
  return (
    <>
      <h2 className="heading" data-aos="fade-down" data-aos-duration="1200">
        {title}
      </h2>
    </>
  );
};
