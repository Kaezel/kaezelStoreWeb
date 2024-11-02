import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navlink } from "../data/dummydata";
import logo from "../data/images/logo.png";
import { Menu } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";

export const Header = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img
              src={logo}
              alt=""
              width="70px"
              data-aos="zoom-in-right"
              data-aos-duration="700"
            />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => {
              if (links.url.startsWith("#")) {
                return (
                  <ScrollLink
                    to={links.url.replace("#", "")}
                    key={i}
                    style={{ cursor: "pointer" }}
                    smooth={true}
                    duration={700}
                    data-aos="zoom-in-left"
                    data-aos-duration="700"
                    onClick={() => setResponsive(false)}
                  >
                    {links.text}
                  </ScrollLink>
                );
              } else {
                return (
                  <Link
                    to={links.url}
                    key={i}
                    data-aos="zoom-in-left"
                    data-aos-duration="700"
                    onClick={() => setResponsive(false)}
                  >
                    {links.text}
                  </Link>
                );
              }
            })}
          </div>
          <button
            className="toggle"
            onClick={() => setResponsive(!responsive)}
            data-aos="zoom-in-left"
            data-aos-duration="700"
          >
            <Menu className="icon"></Menu>
          </button>
        </div>
      </header>
    </>
  );
};
