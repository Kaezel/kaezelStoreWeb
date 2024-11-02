import React from "react";
import { social } from "../data/dummydata";

export const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos="fade-up" data-aos-duration="1200">
              <a href={item.linkTo} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </i>
          </>
        ))}
        <p data-aos="fade-up" data-aos-duration="1500">
          © 2024 Kaezel Store. All rights reserved.
        </p>
      </footer>
    </>
  );
};
